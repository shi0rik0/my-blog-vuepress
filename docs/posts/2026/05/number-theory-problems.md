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

7. 设 $p$ 是素数，且 $p \ge 7$。证明：存在三个模 $p$ 互不相同的整数 $a, b, c$，使得 $a^b \equiv b^c \equiv c^a \pmod{p}$。

<CollapsibleContent label="提示1">
利用费马小定理来构造。
</CollapsibleContent>

<CollapsibleContent label="提示2">
令 $a = 4$，$b = \frac{p-1}{2}$，$c = p-1$。
</CollapsibleContent>

8. 设整数列 $\{a_n\}$ 满足，对于任意 $n$，都有 $a_n > 1$，且 $(2^{a_n} - 1)a_{n+1}$ 是完全平方数。证明：该数列中不存在相等的两项。

<CollapsibleContent label="提示1">
先证明若 $k > 1$，则 $a_k$ 不是完全平方数。用 $P(n)$ 表示 $n$ 的幂次是奇数的最大素因子。若 $xy$ 是完全平方数，则 $P(x) = P(y)$。能否证明 $P(a_n) < P(a_{n+1})$？
</CollapsibleContent>

<CollapsibleContent label="提示2">
设 $P(a_n) = p$，则一定存在素数 $q > p$，满足 $v_q(2^p - 1)$ 是奇数（这里要用到阶）。然后用升幂定理分析 $v_q(2^{a_n} - 1)$。
</CollapsibleContent>

9. 设 $p$ 是素数，且 $p \ge 5$，证明：$42p \mid 3^p - 2^p - 1$。

10. 证明：存在无穷多正整数 $n$，使得 $[\sqrt{2}n]$ 是完全平方数。

<CollapsibleContent label="提示1">
即 $k^2 \le \sqrt{2}n < k^2 + 1$。
</CollapsibleContent>

<CollapsibleContent label="提示2">
我们希望 $\frac{n}{k^2} \approx \sqrt{2}$。考虑佩尔方程 $x^2 - 2y^2 = \pm 1$，注意到该方程的解满足 $\frac{x}{y} \approx \sqrt{2}$。
</CollapsibleContent>

<CollapsibleContent label="提示3">
令 $n = xy$，$k = x$。
</CollapsibleContent>

11. 求所有的正整数 $a, b$，使得 $2^{a!} + 2^{b!}$ 是完全立方数。

<CollapsibleContent label="提示">
对于任意正整数 $n$，$2^n + 1$ 不是完全立方数。
</CollapsibleContent>

<CollapsibleContent label="答案">
$(a, b) = (2, 2)$。
</CollapsibleContent>

12. $a, b$ 是大于 $1$ 的整数，$b^2 \mid a^3$，$a-1 \mid b-1$。证明：$a = b$。

<CollapsibleContent label="提示">
设 $a^3 = b^2 k$，然后 mod $(a-1)$ 分析。
</CollapsibleContent>
