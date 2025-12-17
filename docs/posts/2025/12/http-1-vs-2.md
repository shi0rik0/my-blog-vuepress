# HTTP/1.1 和 HTTP/2 的比较

在 HTTP/1.1 里，一个 TCP 连接上同时只能处理一个请求-响应对，因此，如果想要实现并发获取多个资源，就必须开启多个 TCP 连接。而 HTTP/2 引入了多路复用技术，允许在一个 TCP 连接上同时处理多个请求-响应对，从而大大提高了资源加载的效率。

下面用一个简单的例子来说明两者的区别：

```python
# main.py
import asyncio

from fastapi import FastAPI

app = FastAPI()


@app.get("/test")
async def test():
    await asyncio.sleep(1)
    return {"message": "This is a test endpoint."}
```

然后用 Hypercorn 启动这个应用。之所以用 Hypercorn，是因为它支持 HTTP/2。

```bash
pip install hypercorn
hypercorn main:app
```

接下来用支持 HTTP/2 的客户端来测试，比如 `httpx`：

```python
import asyncio
import time

from httpx import AsyncClient, Limits

MAX_CONNECTIONS = 1
HTTP2_ENABLED = True

http_client = AsyncClient(
    # 一般情况下，HTTP/2 只有在 HTTPS 上才会被启用
    # 这里通过禁用 HTTP/1.1 来强制使用 HTTP/2
    http1=not HTTP2_ENABLED,
    http2=HTTP2_ENABLED,
    limits=Limits(max_connections=MAX_CONNECTIONS),
)


async def send_request(url):
    response = await http_client.get(url)
    print("Got a response")
    return response


async def main():
    urls = ["http://localhost:8000/test"] * 10
    tasks = [send_request(url) for url in urls]
    start_time = time.time()
    await asyncio.gather(*tasks)
    end_time = time.time()
    print(f"Total time taken: {end_time - start_time} seconds")


if __name__ == "__main__":
    asyncio.run(main())
```

这里的 `max_connections` 参数指的就是连接池中的最大 TCP 连接数。如果把它设置为 1，那么在 HTTP/1.1 下，请求就需要一个接一个地处理，而在 HTTP/2 下，请求则可以通过这唯一的连接并发处理。

运行上面的客户端代码，可以看到在 HTTP/1.1 下，总共大约需要 10 秒钟才能完成所有请求，而在 HTTP/2 下，总共只需要大约 1 秒钟就能完成所有请求。这充分展示了 HTTP/2 多路复用的优势。
