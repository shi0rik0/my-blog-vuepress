---
date: 2026-03-16
tag:
  - 初等数论
---

# 初等数论问题（18）

## 题目

设 $m, n$ 是正整数，$n \ge m$，证明：

$$
\frac{(m, n)}{n} \binom{n}{m}
$$

是整数。

提示：可以利用吸收律：

$$
\binom{n}{m} = \frac{n}{m} \binom{n-1}{m-1}
$$

## 证明

根据 Bezout 定理，设 $g = (m, n)$，则存在整数 $x, y$ 使得 $mx + ny = g$。所以

$$
\frac{(m, n)}{n} \binom{n}{m} = \frac{mx+ny}{n} \binom {n}{m} = \frac{mx}{n} \binom{n}{m} + y \binom{n}{m}
$$

而

$$
\frac{mx}{n} \binom{n}{m} = \frac{mx}{n} \cdot \frac{n}{m} \binom{n-1}{m-1} = x \binom{n-1}{m-1}
$$

所以

$$
\frac{(m, n)}{n} \binom{n}{m}
$$

是整数。
