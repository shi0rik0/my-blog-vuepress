---
date: 2026-03-31
tag:
  - 初等数论
---

# 初等数论问题（30）

## 题目

设正整数 $n$ 的正因数从小到大依次为 $d_1, d_2, \cdots, d_{N}$，证明：

$$
d_1d_2 + d_2d_3 + \cdots + d_{N-1}d_{N} < n^2
$$

## 证明

显然有 $d_id_{N+1-i} = n$，所以原不等式等价于

$$
\begin{aligned}
\frac{n^2}{d_Nd_{N-1}} + \frac{n^2}{d_{N-1}d_{N-2}} + \cdots + \frac{n^2}{d_2d_1} &< n^2 \\
\frac{1}{d_1d_2} + \frac{1}{d_2d_3} + \cdots + \frac{1}{d_{N-1}d_{N}} &< 1
\end{aligned}
$$

因为 $d_{i+1} - d_i \ge 1$，所以

$$
\frac{1}{d_id_{i+1}} = \frac{1}{d_{i+1} - d_i} \left(\frac{1}{d_i} - \frac{1}{d_{i+1}}\right) \le \frac{1}{d_i} - \frac{1}{d_{i+1}}
$$

所以

$$
\begin{aligned}
\frac{1}{d_1d_2} + \frac{1}{d_2d_3} + \cdots + \frac{1}{d_{N-1}d_{N}} &\le \left(\frac{1}{d_1} - \frac{1}{d_2}\right) + \left(\frac{1}{d_2} - \frac{1}{d_3}\right) + \cdots + \left(\frac{1}{d_{N-1}} - \frac{1}{d_{N}}\right) \\
&= 1 - \frac{1}{d_N} \\
&< 1
\end{aligned}
$$

证毕。
