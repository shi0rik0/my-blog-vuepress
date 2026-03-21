---
date: 2026-03-21
tag:
  - 初等数论
---

# 初等数论问题（21）

## 题目

证明：对于任意正整数 $n$，$8^n + 47$ 都是合数。

## 证明

若 $n = 2k$，则 $8^n + 47 \equiv (-1)^{2k} - 1 \equiv 0 \pmod{3}$，所以 $3 \mid 8^n + 47$。

若 $n = 4k + 1$，则 $8^n \equiv 3^{4k+1} \equiv 3 \cdot (3^4)^k \equiv 3 \cdot 1^k \equiv 3 \pmod{5}$，所以 $8^n + 47 \equiv 3 + 2 \equiv 0 \pmod{5}$，所以 $5 \mid 8^n + 47$。

若 $n = 4k + 3$，则 $8^n \equiv 8^3 \cdot (8^4)^k \equiv 5 \cdot 1^k \equiv 5 \pmod{13}$，所以 $8^n + 47 \equiv 5 + 8 \equiv 0 \pmod{13}$，所以 $13 \mid 8^n + 47$。

综上所述，$8^n + 47$ 一定是合数。
