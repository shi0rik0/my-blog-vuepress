---
date: 2026-03-28
tag:
  - 初等数论
---

# 初等数论问题（28）

## 题目

设 $p$ 为素数，$x, y$ 是大于 $1$ 的整数，解方程：

$$
\frac{x^2 - 1}{y^2 - 1} = (p+1)^2
$$

## 解答

重新整理方程，得到

$$
\begin{aligned}
(p+1)^2 y^2 - x^2 &= (p+1)^2 - 1 \\
[(p+1)y - x][(p+1)y + x] &= p(p+2)
\end{aligned}
$$

记 $A = (p+1)y - x$，$B = (p+1)y + x$，则 $AB = p(p+2)$，且 $0 < A < B$。因为 $A < \sqrt{p(p+2)} < p + 1$，所以 $A \le p$。还有一个等式：

$$
y = \frac{A + B}{2(p+1)}
$$

若 $p \mid A$，则 $A = p$，所以 $B = p + 2$，此时 $y = 1$，不满足题意，所以 $p \nmid A$，所以 $(A, p) = 1$。又因为 $A \mid p(p+2)$，所以 $A \mid p + 2$。

因为 $p+1 \mid A + B$，所以

$$
\begin{aligned}

A + B &\equiv 0 \pmod{p+1} \\
A + \frac{p(p+2)}{A} &\equiv 0 \pmod{p+1} \\
A^2 - 1 &\equiv 0 \pmod{p+1}

\end{aligned}
$$

即 $p + 1 \mid A^2 - 1$。因为 $A \mid p + 2$，所以 $p + 2 = kA$。所以 $kA - 1 \mid A^2 - 1$，所以 $kA - 1 \mid k(A^2 - 1) - A(kA - 1) = A - k$。

如果 $A = k$，则 $A = \sqrt{p+2}$，$B = p\sqrt{p+2}$，代入 $y$ 的表达式，得到

$$
y = \frac{p\sqrt{p+2} + \sqrt{p+2}}{2(p+1)} = \frac{(p+1)\sqrt{p+2}}{2(p+1)} = \frac{\sqrt{p+2}}{2}
$$

若 $p = 2$，则 $y = 1$，不满足题意；若 $p > 2$，则 $\sqrt{p+2}$ 是奇数，从而 $y$ 不是整数，不满足题意。所以 $A = k$ 不满足题意，即 $A \ne k$。

若 $A > k$，则 $kA - 1 \le A - k$，即 $(k-1)A \le 1 - k$，所以 $k = 1$，此时 $A = p + 2$，不满足题意。

若 $A < k$，则 $kA - 1 \le k - A$，即 $(k+1)A \le k + 1$，所以 $A = 1$，此时 $B = p(p+2)$，代入 $y$ 的表达式，得到

$$
y = \frac{p(p+2) + 1}{2(p+1)} = \frac{p+1}{2}
$$

代入 $A$ 的表达式，得到

$$
x = (p+1)y - A = \frac{(p+1)^2}{2} - 1 = \frac{p^2 + 2p - 1}{2}
$$

以上的分析只是必要条件，代入原方程可以验证确实是方程的解。综上所述，满足题意的解是：

$$
\begin{cases}
x = \frac{p^2 + 2p - 1}{2} \\
y = \frac{p + 1}{2}
\end{cases}
$$

其中 $p$ 是大于 $2$ 的素数。
