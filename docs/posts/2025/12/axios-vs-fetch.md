---
date: 2025-12-04
---

# Axios vs Fetch

Fetch 是浏览器内置的原生网络请求 API，而 axios 则是一个封装后的库。总的来说，axios 的语法更加方便，而它唯一的缺点可能就是会略微增大一点打包体积，不过这在大多数场景下并不重要。

## Fetch 示例

```javascript
const response = await fetch("https://example.com/api", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }),
})

console.log(await response.json())
```

## Axios 示例

```javascript
import axios from "axios"

const response = await axios.post("https://example.com/api", { key: "value" })

console.log(response.data) // axios 会自动将响应解析为 JSON
```

可以看到，axios 的代码明显更简洁，不需要手动设置 `Content-Type` header，也不需要手动将参数对象转换为 JSON 字符串。

## 结论

除非你对性能要求很高，否则绝大多数情况下无脑用 axios 就对了。
