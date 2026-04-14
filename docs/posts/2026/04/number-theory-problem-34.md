---
date: 2026-04-14
tag:
  - 初等数论
---

# 初等数论问题（34）

## 题目

$p$是奇素数，证明：

（1）

$$
p \mid \sum_{k=1}^{p-1} k^p
$$

（2）

$$
p^2 \mid \sum_{k=1}^{p-1} k^p
$$

## 证明

### （1）

根据费马小定理，$k^p \equiv k \pmod{p}$，所以

$$
\sum_{k=1}^{p-1} k^p \equiv \sum_{k=1}^{p-1} k \equiv \frac{(p-1)p}{2} \pmod{p}
$$

因为 $p$ 是奇素数，所以 $\frac{p-1}{2}$ 是整数，所以

$$
\frac{(p-1)p}{2} \equiv 0 \pmod{p}
$$

### （2）

这回用费马小定理不管用了，我们需要用二项式定理展开 $(p-k)^p$：

$$
(p-k)^p = \sum_{i=0}^{p} \binom{p}{i} p^{i} (-k)^{p-i}
$$

当 $i = 0$ 时，

$$
\binom{p}{0} p^{0} (-k)^{p} = -k^p
$$

当 $i = 1$ 时，

$$
\binom{p}{1} p^{1} (-k)^{p-1} = p^2 (-k)^{p-1}
$$

是 $p^2$ 的倍数。

当 $i \ge 2$ 时，显然

$$
\binom{p}{i} p^{i} (-k)^{p-i}
$$

也是 $p^2$ 的倍数。

所以

$$
(p-k)^p \equiv -k^p \pmod{p^2}
$$

也就是

$$
k^p + (p-k)^p \equiv 0 \pmod{p^2}
$$

所以

$$
\sum_{k=1}^{p-1} k^p + \sum_{k=1}^{p-1} (p-k)^p \equiv 2 \sum_{k=1}^{p-1} k^p \equiv 0 \pmod{p^2}
$$

显然 $2$ 和 $p^2$ 互素，所以可以同时除以 $2$，证毕。
