---
date: 2026-02-04
---

# 用 PostgreSQL 实现幂等性

最近在编写一个金融相关的系统时，遇到了幂等性的需求。很多敏感操作需要保证幂等性，以防止重复提交导致的数据错误。下面介绍一种使用 PostgreSQL 来实现幂等性的方法。

## 表格设计

首先，我们需要创建一张表来记录相关信息：

```sql
CREATE TABLE transactions (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    request_id TEXT UNIQUE NOT NULL,
    status TEXT NOT NULL,
    response TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

## 使用方法

我们可以利用 PostgreSQL 的 `INSERT ... ON CONFLICT ` 语句来实现幂等性，例如：

```sql
INSERT INTO transactions (request_id, status)
VALUES ('req_12345', 'processing')
ON CONFLICT DO NOTHING;
```

这里的关键是 `ON CONFLICT DO NOTHING`，它确保如果 `request_id` 已经存在，插入操作将不会执行，我们可以利用这一点来判断请求是否已经处理过。如果插入成功，说明这是一个新的请求；如果插入失败，说明请求已经存在。

下面是一个简单的 Python 示例：

```python
import psycopg2

conn = psycopg2.connect(dbname='your_db', user='your_user', password='your_password', host='localhost')
cur = conn.cursor()

def process_request(request_id):
    try:
        cur.execute("""
            INSERT INTO transactions (request_id, status)
            VALUES (%s, %s)
            ON CONFLICT DO NOTHING;
        """, (request_id, 'processing'))
        conn.commit()  # <-- 这里很关键！必须立刻提交事务，保证不会回滚，导致幂等性失效

        # 如果插入失败，说明请求已经存在
        if cur.rowcount == 0:
            cur.execute("""
                SELECT status, response FROM transactions WHERE request_id = %s;
            """, (request_id,))
            status, response = cur.fetchone()
            if status == 'completed':
                print("Request already processed. Response:", response)
            elif status == 'failed':
                print("Request previously failed.")
            else:
                print("Request is processing.")
            return

        try:
            # 处理请求的逻辑，可以保证只执行一次
            response = "Processed data for " + request_id
        except Exception as e:
            # 处理失败，更新状态为 failed
            cur.execute("""
                UPDATE transactions
                SET status = %s, response = %s
                WHERE request_id = %s;
            """, ('failed', str(e), request_id))
            conn.commit()
            print("Request processing failed:", e)
            return

        # 处理成功，更新状态为 completed
        cur.execute("""
            UPDATE transactions
            SET status = %s, response = %s
            WHERE request_id = %s;
        """, ('completed', response, request_id))
        conn.commit()
        print("Request processed successfully.")
```

这个模式还有两个其他用途：

1. 缓存请求结果。
2. 跟踪请求状态。可以查询出哪些请求失败了，并查看异常信息，还可以定期运行任务来检查是否有长期未完成的请求，并将它们标记为失败。
