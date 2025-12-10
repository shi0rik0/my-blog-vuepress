---
date: 2025-12-10
tag:
  - SSE
---

# 用 SSE 实现流式响应

用 ChatGPT 的时候，会发现模型的响应是一个词接一个词地出现的，而不是等到所有内容都生成完毕才显示出来。本文将介绍如何使用 SSE（Server-Sent Events）来实现这种流式响应效果。

## SSE 格式

在 SSE 中，响应流的每个“块”被称作一个“事件”（event）。每个事件的数据本质上是一个字典（若干键值对），其中最重要的键是 `data` 和 `id`。`data` 就是要发送给客户端的数据，`id` 是该事件的唯一标识（可选），在断连恢复的时候会用到。

SSE 的响应格式非常简单，事件中的每个键值对以一行 `key: value` 的形式表示，事件之间用一个空行分隔。例如，下面是一个包含两个事件的 SSE 响应：

```
id: 1
data: 事件1

id: 2
data: 事件2

```

这样一来，客户端收到的第一段数据就是`"事件1"`，第二段数据是`"事件2"`。

假如需要发送多行数据，该怎么办呢？下面的写法是错误的：

```
data: 这是第一行
这是第二行
```

正确的写法是每行数据前都加上 `data:` 前缀：

```
data: 这是第一行
data: 这是第二行
```

SSE 标准规定，若有多个 data 字段，这些字段的值会用换行符 `\n` 连接起来。这样客户端收到的数据就会是`"这是第一行\n这是第二行"`。

## 用 FastAPI 实现 SSE

FastAPI 有一个 `StreamingResponse` 类，可以用来实现 SSE 流式响应。

下面是一个使用 FastAPI 实现 SSE 流式响应的示例：

```python
import asyncio

from fastapi import FastAPI
from fastapi.responses import StreamingResponse

app = FastAPI()


async def generate():
    for i in range(5):
        yield f"data: Message {i}\ndata: Hello!\n\n"
        await asyncio.sleep(1)


@app.get("/stream")
async def stream_response():
    return StreamingResponse(generate(), media_type="text/event-stream")
```

## 在浏览器中接收 SSE

在浏览器中，可以使用 `EventSource` 对象来接收 SSE 响应。下面是一个简单的示例：

```js
const eventSource = new EventSource("http://localhost:8000/stream")

eventSource.onmessage = function (event) {
  console.log("Received data:", event.data)
}
```
