---
date: 2026-04-21
tag:
  - 初等数论
---

# 初等数论问题（42）

## 题目

设 $p$ 是 $4k + 3$ 型的素数，且 $p \mid a^2 + b^2$，其中 $a, b$ 是整数。证明：$p \mid a$ 且 $p \mid b$。

## 证明

用反证法。假设 $p \nmid a$，则模 $p$ 下 $a$ 存在逆元 $a^{-1}$，所以

$$
\begin{aligned}
a^2 + b^2 &\equiv 0 \pmod{p} \\
a^2a^{-2} + b^2a^{-2} &\equiv 0 \pmod{p} \\
(ba^{-1})^2 &\equiv -1 \pmod{p}
\end{aligned}
$$

因为 $p$ 是 $4k + 3$ 型的素数，所以 $-1$ 不是模 $p$ 的二次剩余，矛盾。综上所述，$p \mid a$。同样地，$p \mid b$。证毕。
