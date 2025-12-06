---
date: 2025-12-06
---

# PostgreSQL 对于大小写处理的一个陷阱

最近用 Prisma 创建了一个 PostgreSQL 数据库，由于 JavaScript 的习惯，在定义 model 的时候字段名都使用了 camelCase 命名法。后来，我在用 SQL 语句查询数据的时候，却发现总是报错，提示找不到对应的 table 或 column。查询之后才得知，原来 PostgreSQL 是大小写敏感的，但是在处理 SQL 语句的时候，会将没有用双引号括起来的标识符全部转换为小写。比如说，`SELECT * FROM UserProfile;` 实际上会被解析为 `SELECT * FROM userprofile;`，正确的写法应该是 `SELECT * FROM "UserProfile";`。由此可见，PostgreSQL 是提倡使用 snake_case 命名法的，所以用 Prisma 的时候，最好用 `@map` 和 `@@map` 来给字段和表起别名。

## TL;DR

- PostgreSQL 对未加双引号的标识符会自动转换为小写。
- 使用 PostgreSQL 时，推荐使用 snake_case 命名法。
