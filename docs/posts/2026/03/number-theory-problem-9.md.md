---
date: 2026-03-06
tag:
  - 初等数论
---

# 初等数论问题（9）

## 题目

设正整数 $m, n$ 满足 $m > n$，证明：

$$
[m, n] + [m + 1, n + 1] > \frac{2mn}{\sqrt{m - n}}
$$

## 证明

$$
[m, n] + [m + 1, n + 1] = \frac{mn}{(m, n)} + \frac{(m + 1)(n + 1)}{(m + 1, n + 1)} > \frac{mn}{(m, n)} + \frac{mn}{(m + 1, n + 1)}
$$

所以只需要证明：

$$
\frac{1}{(m, n)} + \frac{1}{(m + 1, n + 1)} \ge \frac{2}{\sqrt{m - n}}
$$

由基本不等式得到：

$$
\frac{1}{(m, n)} + \frac{1}{(m + 1, n + 1)} \ge \frac{2}{\sqrt{(m, n)(m + 1, n + 1)}}
$$

所以只需要证明：

$$
(m, n)(m + 1, n + 1) \le m - n
$$

为了方便叙述，设 $d_1 = (m, n) = (m-n, n)$，$d_2 = (m + 1, n + 1) = (m - n, n + 1)$。

$d_1 \mid n$，$d_2 \mid n + 1$，又因为 $(n, n + 1) = 1$，所以 $(d_1, d_2) = 1$。

$d_1 \mid m - n$，$d_2 \mid m - n$，所以 $d_1 d_2 \mid m - n$，所以 $(m, n)(m + 1, n + 1) = d_1 d_2 \le m - n$，证毕。
