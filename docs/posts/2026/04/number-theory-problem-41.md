---
date: 2026-04-21
tag:
  - 初等数论
---

# 初等数论问题（41）

## 题目

$a, b, c, d$ 都是正整数，且 $ab = cd$。证明：对于任意正整数 $k$，$a^k + b^k + c^k + d^k$ 都是合数。

## 证明

设

$$
\frac{a}{c} = \frac{d}{b} = \frac{m}{n}
$$

其中 $(m, n) = 1$。则存在正整数 $u, v$，使得 $a = um$，$c = un$，$d = vm$，$b = vn$。所以

$$
\begin{aligned}
a^k + b^k + c^k + d^k &= u^k m^k + v^k n^k + u^k n^k + v^k m^k \\
&= (u^k + v^k)(m^k + n^k)
\end{aligned}
$$

证毕。
