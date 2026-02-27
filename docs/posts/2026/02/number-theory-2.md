---
date: 2026-02-27
tag:
  - 初等数论
---

# 初等数论问题（2）

## 题目

若 $a, b$ 互素，证明：$(a + b, a^2 + b^2) \le 2$。

## 证明

用反证法，我们要证明：

1. 不可能存在奇素数 $p$，使得 $p \mid a + b$ 且 $p \mid a^2 + b^2$。
2. $4 \mid a + b, 4 \mid a^2 + b^2$ 不可能成立。

假设存在奇素数 $p$，使得 $p \mid a + b$ 且 $p \mid a^2 + b^2$。

那么就有 $p \mid (a + b)^2 - (a^2 + b^2) = 2ab$，所以 $p \mid ab$。

又因为 $a, b$ 互素，所以 $p \mid a, p \nmid b$ 或 $p \nmid a, p \mid b$，不管哪种情况，都与 $p \mid a + b$ 矛盾。

假设 $4 \mid a + b$ 且 $4 \mid a^2 + b^2$，那么类似地可以得到 $4 \mid 2ab$，所以 $2 \mid ab$，又因为 $a, b$ 互素，所以 $2 \mid a, 2 \nmid b$ 或 $2 \nmid a, 2 \mid b$，不管哪种情况，都与 $4 \mid a + b$ 矛盾。
