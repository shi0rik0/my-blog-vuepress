---
date: 2026-05-05
tag:
  - 初等数论
---

# 初等数论问题集

1. $\sigma(n)$ 表示正整数 $n$ 的正约数之和。证明：$\sigma(n)$ 是奇数当且仅当 $n$ 是完全平方数或 $2n$ 是完全平方数。

<CollapsibleContent label="提示">
设 $n = 2^k m$，其中 $m$ 是奇数，利用 $\sigma(n)$ 的积性。
</CollapsibleContent>

2. 证明：对于任意正整数 $n$，存在 $n$ 个连续的合数。

<CollapsibleContent label="提示">
考虑 $A + 2, A + 3, \ldots, A + n + 1$，我们希望有 $2 \mid A + 2$，$3 \mid A + 3$，$\ldots$，$n + 1 \mid A + n + 1$，那么 $A$ 可以取什么？
</CollapsibleContent>

3. 设整数 $n > 1$，$\tau(n)$ 表示 $n$ 的正约数的个数。证明：$2\tau((n-1)!) \ge \tau(n!)$。

<CollapsibleContent label="提示1">
记 $a_p = v_p((n-1)!)$，$b_p = v_p(n)$，则

$$
\frac{\tau(n!)}{\tau((n-1)!)} = \prod_{p\mid n} \frac{a_p + b_p + 1}{a_p + 1} = \prod_{p\mid n}\left(1 + \frac{b_p}{a_p + 1}\right)
$$

</CollapsibleContent>

<CollapsibleContent label="提示2">
$$
a_p = \left\lfloor \frac{n-1}{p} \right\rfloor + \left\lfloor \frac{n-1}{p^2} \right\rfloor + \cdots \ge \left\lfloor \frac{n-1}{p} \right\rfloor \ge \frac{n}{p} - 1
$$
</CollapsibleContent>

<CollapsibleContent label="提示3">
$pb_p \le p^{b_p}$
</CollapsibleContent>

<CollapsibleContent label="提示4">
考虑将乘积两两合并，也就是证明
$$
\left(1 + \frac{X}{n}\right)\left(1 + \frac{Y}{n}\right) \le \left(1 + \frac{XY}{n}\right)
$$
</CollapsibleContent>

4. 设 $p$ 是大于 $3$ 的素数，证明：$p^2 \equiv 1 \pmod{24}$。

5. 设 $p$ 是素数，$n$ 是正整数，求所有的数组 $(p, n)$，使得 $p^2 - p + 1 = n^3$。

<CollapsibleContent label="提示1">
$p(p-1) = (n-1)(n^2 + n + 1)$
</CollapsibleContent>

<CollapsibleContent label="提示2">
若 $p \mid n-1$，用大小估计法。
</CollapsibleContent>

<CollapsibleContent label="提示3">
若 $p \mid n^2 + n + 1$，设 $n^2 + n + 1 = kp$。能否得到一个只含 $k, n$ 的关于 $n$ 的二次方程？
</CollapsibleContent>

<CollapsibleContent label="提示4">
当 $k$ 较大时，判别式必然夹在两个完全平方数之间。
</CollapsibleContent>

<CollapsibleContent label="提示5">
考虑 $(k^2-3)^2$ 和 $(k^2-2)^2$。
</CollapsibleContent>

<CollapsibleContent label="答案">
$(p, n) = (19, 7)$
</CollapsibleContent>

6. 对于任意正整数 $n$，证明：$n \mid \varphi(2^n - 1)$，其中 $\varphi(n)$ 是欧拉函数。

<CollapsibleContent label="提示">
考虑阶的性质：若 $k$ 是 mod $m$ 的阶，则 $k \mid \varphi(m)$。
</CollapsibleContent>
