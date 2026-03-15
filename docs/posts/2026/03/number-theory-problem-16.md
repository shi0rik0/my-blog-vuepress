---
date: 2026-03-15
tag:
  - 初等数论
---

# 初等数论问题（16）

## 题目

设 $M_k(n)$ 表示 $n, n+1, \ldots, n+k-1$ 的最小公倍数。证明：对于任意 $k \ge 3$，存在无穷多正整数 $n$，使得 $M_k(n) > M_{k}(n+1)$。

## 证明

设 $L = [n+1, n+2, \ldots, n+k-1]$，则

$$
M_k(n) = [n, L] = \frac{nL}{(n, L)}\\

M_k(n+1) = [n+k, L] = \frac{(n+k)L}{(n+k, L)}
$$

根据 Dirichlet 定理，存在无穷多素数 $p$ 满足 $p \equiv -1 \pmod{k-1}$ 且 $p > k$。对于任意这样的素数 $p$，因为 $p + k - 1 < 2p$，所以 $(p, L) = 1$。因为 $n+1, n+2, \ldots, n+k-1$ 中必存在一个数 $m$ 满足 $k - 1 \mid m$，且 $k - 1 \mid p + k$，所以 $(p+k, L) \ge k - 1 \ge 2$。因此，

$$
\frac{M_k(p)}{M_k(p+1)} = \frac{p}{p+k} \cdot \frac{(p+k, L)}{(p, L)} > \frac{1}{2} \cdot 2 = 1
$$

也就是 $M_k(p) > M_k(p+1)$。因此，存在无穷多正整数 $n$ 使得 $M_k(n) > M_k(n+1)$。
