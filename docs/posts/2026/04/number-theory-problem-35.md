---
date: 2026-04-16
tag:
  - 初等数论
---

# 初等数论问题（35）

## 题目

设 $n$ 是大于 $1$ 的整数，$\sigma(n)$ 是 $n$ 的所有正约数的和，$d(n)$ 是 $n$ 的正约数的个数，证明：

（1）

$$
\sigma(n) < n(\ln n + 1)
$$

（2）

$$
\sigma(n) < n \sqrt{2 d(n)}
$$

## 证明

### （1）

$$
\begin{aligned}
\sigma(n) &= \sum_{d \mid n} d \\
&= \sum_{d \mid n} \frac{n}{d} \\
&= n \sum_{d \mid n} \frac{1}{d} \\
&\le n \sum_{k=1}^{n} \frac{1}{k} \\
\end{aligned}
$$

熟知：

$$
\sum_{k=1}^{n} \frac{1}{k} < \ln n + 1
$$

证毕。

### （2）

由柯西不等式：

$$
\begin{aligned}
\sigma(n)^2 &= \left( \sum_{d \mid n} d \right)^2 \\
&\le d(n) \sum_{d \mid n} d^2 \\
&= d(n) n^2 \sum_{d \mid n} \frac{1}{d^2} \\
\end{aligned}
$$

熟知：

$$
\sum_{k=1}^n \frac{1}{k^2} < 2
$$

证毕。
