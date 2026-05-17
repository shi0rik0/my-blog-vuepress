---
date: 2026-05-05
tag:
  - 初等数论
---

# 初等数论问题集

## 引理

1. $n$ 是大于 $1$ 的整数。证明：$n \mid (n-1)!$ 当且仅当 $n$ 是大于 $4$ 的合数。

<CollapsibleContent label="提示">
左边到右边是比较简单的。右边到左边，设 $n = ab$，然后按照 $a < b$ 和 $a = b$ 两种情况分析。
</CollapsibleContent>

## 题目

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

13. 证明方程 $x^2 + y^2 - z^2 = xyz - 2$ 没有整数解。

<CollapsibleContent label="提示1">
看作关于 $z$ 的二次方程，分析判别式。
</CollapsibleContent>

<CollapsibleContent label="提示2">
$n^2 = 0,1,4,9 \pmod{16}$。
</CollapsibleContent>

<CollapsibleContent label="提示3">
若 $(\frac{-4}{p}) = (\frac{-8}{p}) = 1$，则 $p \equiv 1 \pmod{8}$。
</CollapsibleContent>

14. 求所有正整数 $a, b$，使得 $(a^2 + b)(a + b^2)$ 是 $2$ 的幂。

<CollapsibleContent label="提示">
设 $a^2 + b = 2^x$，$a + b^2 = 2^y$。两式相减之后，因式分解并分析奇偶性。
</CollapsibleContent>

<CollapsibleContent label="答案">
$(a, b) = (1, 1)$。
</CollapsibleContent>

15. 求所有的正整数 $n$，使得 $2^n + n \mid 8^n + n$。

<CollapsibleContent label="提示">
$x + y \mid x^3 + y^3$
</CollapsibleContent>

<CollapsibleContent label="答案">
$n = 1, 2, 4, 6$。
</CollapsibleContent>

16. 求所有的正整数 $n$，使得 $3^n + n^2 + 3$ 是完全平方数。

<CollapsibleContent label="提示1">
首先分析 $n$ 的奇偶性。
</CollapsibleContent>

<CollapsibleContent label="提示2">
设 $n = 2m$，则 $3^n = (3^m)^2$。当 $m$ 较大时，$3^n + n^2 + 3$ 必然夹在两个完全平方数之间。
</CollapsibleContent>

<CollapsibleContent label="答案">
$n = 2, 4$。
</CollapsibleContent>

17. 求所有的正整数 $m, n$，使得 $mn \mid 3^m + 1$，且 $mn \mid 3^n + 1$。

<CollapsibleContent label="提示">
这类问题的经典套路是设 $p$ 是 $mn$ 的最小素因子（进一步地，不妨设 $p \mid m$），然后利用阶的性质来分析。
</CollapsibleContent>

<CollapsibleContent label="答案">
$(m, n) = (1, 1), (1, 2), (2, 1)$。
</CollapsibleContent>

18. 求所有的正整数组 $(a, b, c)$，使得 $a! + b! = c!$。

<CollapsibleContent label="提示">
不妨设 $a \le b$，然后分析大小即可。
</CollapsibleContent>

<CollapsibleContent label="答案">
$(a, b, c) = (1, 1, 2)$。
</CollapsibleContent>

19. 证明：对于任意 $n \ge 3$，都存在一个 $n$ 元正整数集合，满足集合中任意两个数都不互素，且集合中任意三个数的最大公约数为 $1$。

<CollapsibleContent label="提示1">
这题本质上是一道组合题。我们可以将素数映射成正整数，然后用正整数所有素因子的集合来表示这个正整数。举个例子，我们可以将 $2$ 映射成 $1$，$3$ 映射成 $2$，那么 $6 = 2 \cdot 3$ 就映射成 $\{1, 2\}$。这样问题就可以转化成：对于任意 $n \ge 3$，都存在一个 $n$ 元的集合族，满足集合族中任意两个集合的交集不为空，且集合族中任意三个集合的交集为空。
</CollapsibleContent>

<CollapsibleContent label="提示2">
可以直接构造出来，先研究比较小的情况，找找感觉。比如当 $n = 3$ 时，$\{\{1, 2\}, \{2, 3\}, \{1, 3\}\}$ 就满足条件。
</CollapsibleContent>

<CollapsibleContent label="提示3">
注意到，每个正整数都恰好出现两次，不可能出现三次或更多次。除此之外，任意两个集合的交集都不重复。这是偶然吗？
</CollapsibleContent>

20. 设 $n$ 是正整数，证明：$[\sqrt{n} + \sqrt{n+1}] = [\sqrt{4n + 1}] = [\sqrt{4n + 2}] = [\sqrt{4n + 3}]$。

<CollapsibleContent label="提示">
$\sqrt{4n+1} < \sqrt{n} + \sqrt{n+1} < \sqrt{4n+3}$
</CollapsibleContent>

21. 设 $a, b, c$ 是整数。证明：$a^2bc + 2$，$ab^2c + 2$，$abc^2 + 2$ 不可能都是完全平方数。

<CollapsibleContent label="提示1">
模 $4$ 分析即可解决，但是可以想想怎么分类会比较简单。
</CollapsibleContent>

<CollapsibleContent label="提示2">
可以先分析 $a, b, c$ 中至少有一个是偶数的情况，然后分析 $a, b, c$ 都是奇数的情况。
</CollapsibleContent>
