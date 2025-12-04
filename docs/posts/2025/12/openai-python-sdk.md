---
date: 2025-12-04
---

# OpenAI Python SDK 使用指南

OpenAI 的 [Chat Completions API](https://platform.openai.com/docs/api-reference/chat) 是 LM 事实上的标准接口。本文介绍如何使用 OpenAI 提供的 Python SDK 来调用该 API。

## 安装 OpenAI Python SDK

```bash
pip install openai
```

## 创建 client

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.openai.com/v1",  # 可选，默认为 OpenAI 官方地址
    default_headers={ # 可选，设置默认的额外 headers
       "HTTP-Referer": "<YOUR_SITE_URL>"
    }
)
```

## 调用 API

```python
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello! How can I use the OpenAI Python SDK?"}
        # 多轮对话：
        # {"role": "assistant", "content": "Previous assistant response."},
        # {"role": "user", "content": "Follow-up user question."},
    ],
    temperature=0.7, # 可选
    max_tokens=150, # 可选
    extra_headers={ # 可选，设置本次请求的额外 headers
       "X-Custom-Header": "CustomValue"
    },
    response_format={ # 可选，指定返回格式
        "type": "json_schema",
        "json_schema": {
            "type": "object",
            "properties": {
                "reply": {"type": "string"},
            },
            "required": ["reply"],
        },
    }
)

text = response.choices[0].message.content
print(text)
```
