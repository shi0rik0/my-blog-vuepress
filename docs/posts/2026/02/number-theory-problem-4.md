---
date: 2026-02-28
tag:
  - 初等数论
---

# 初等数论问题（4）

## 题目

设 $a>1$ 为整数，$m,n\in\mathbb{Z}^+$ 且 $m$ 为奇数，请证明：
$$(a^m-1, a^n+1) = \begin{cases} 1, & a \text{ 为偶数} \\ 2, & a \text{ 为奇数} \end{cases}$$

## 证明

令 $d = (a^m - 1, a^n + 1)$。我们首先证明 $d$ 不含任何奇素因子。假设存在奇素数 $p \mid d$，则 $p \mid a^m - 1$ 且 $p \mid a^n + 1$。显然 $p \nmid a$，否则 $a^m - 1 \equiv -1 \pmod{p}$，产生矛盾。因此 $a$ 在模 $p$ 下的乘法阶 $k = \operatorname{ord}_p(a)$ 存在。

由 $a^m \equiv 1 \pmod{p}$ 可知 $k \mid m$；由 $a^n \equiv -1 \pmod{p}$ 可得 $a^{2n} \equiv 1 \pmod{p}$，故 $k \mid 2n$。因为 $m$ 是奇数且 $k \mid m$，所以 $k$ 必为奇数。由于 $k$ 是奇数且 $k \mid 2n$，可知 $k \mid n$。

既然 $k \mid n$，则有 $a^n \equiv 1 \pmod{p}$。然而已知 $a^n \equiv -1 \pmod{p}$，联立可得 $1 \equiv -1 \pmod{p}$，即 $p \mid 2$。这与 $p$ 是奇素数矛盾。因此 $d$ 不含任何奇素因子，故 $d = 2^t$（$t \geq 0$）。

接下来确定 $t$ 的值。若 $a$ 为偶数，则 $a^m - 1$ 和 $a^n + 1$ 均为奇数，故 $d$ 为奇数。结合 $d = 2^t$，得 $t = 0$，即 $d = 1$。

若 $a$ 为奇数，则 $a^m - 1$ 和 $a^n + 1$ 均为偶数，故 $2 \mid d$，即 $t \geq 1$。考察模 $4$ 的情况：若 $a \equiv 1 \pmod{4}$，则 $a^n + 1 \equiv 2 \pmod{4}$，故 $4 \nmid (a^n + 1)$；若 $a \equiv 3 \pmod{4}$，因 $m$ 为奇数，$a^m \equiv 3 \pmod{4}$，则 $a^m - 1 \equiv 2 \pmod{4}$，故 $4 \nmid (a^m - 1)$。无论哪种情况，$4 \nmid d$。因此 $t = 1$，即 $d = 2$。

综上所述，命题得证。
