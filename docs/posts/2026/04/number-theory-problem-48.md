---
date: 2026-04-25
tag:
  - 初等数论
---

# 初等数论问题（48）

## 题目

将素数从小到大排列成 $p_1, p_2, p_3, \ldots$，证明：对于任意正整数 $n$，

$$
\sum_{k=1}^n \frac{1}{p_k^2} < \frac{1}{2}
$$

## 证明

显然，当 $i \geq 2$ 时，$p_{i+1} - p_i \geq 2$，因此：

$$
\begin{aligned}
\sum_{k=5}^n \frac{1}{p_k^2} &< \sum_{k=5}^n \frac{1}{p_{k-1}p_k} \\
&=\sum_{k=5}^n \frac{1}{p_k - p_{k-1}} \left( \frac{1}{p_{k-1}} - \frac{1}{p_k} \right)\\
&\le \sum_{k=5}^n \frac{1}{2} \left( \frac{1}{p_{k-1}} - \frac{1}{p_k} \right) \\
&< \frac{1}{2p_4} \\
&= \frac{1}{14}
\end{aligned}
$$

所以，

$$
\begin{aligned}
\sum_{k=1}^n \frac{1}{p_k^2} &= \sum_{k=1}^4 \frac{1}{p_k^2} + \sum_{k=5}^n \frac{1}{p_k^2} \\
&< \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{5^2} + \frac{1}{7^2} + \frac{1}{14} \\
&= \frac{21739}{44100} \\
&< \frac{1}{2}

\end{aligned}
$$

## 注

该无穷级数收敛于 $0.45224742\ldots$。
