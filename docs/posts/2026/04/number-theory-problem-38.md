---
date: 2026-04-20
tag:
  - 初等数论
---

# 初等数论问题（38）

## 题目

设 $k, n$ 是正整数，$\sigma(n)$ 表示 $n$ 的正约数之和。证明：$\sigma(kn) \ge k \sigma(n)$，并给出等号成立的充分必要条件。

## 证明

因为若 $d \mid n$，则 $kd \mid kn$，所以

$$
\begin{aligned}
\sigma(kn) &\ge \sum_{d \mid n} kd \\
&= k \sum_{d \mid n} d \\
&= k \sigma(n)
\end{aligned}
$$

要想取等，则对任意 $d \mid kn$，有 $d \mid n$。令 $d = kn$，就得到 $kn \mid n$，所以 $k = 1$。反过来，若 $k = 1$，则 $\sigma(kn) = \sigma(n) = k \sigma(n)$。综上所述，等号成立的充分必要条件是 $k = 1$。
