---
date: 2026-04-22
tag:
  - 初等数论
---

# 初等数论问题（44）

## 题目

设 $n$ 是正整数，证明：$n \mid 1^n + 2^n + \cdots + (n-1)^n$ 的充分必要条件是 $n$ 是奇数。

## 证明

### 方向 $\Leftarrow$

若 $n$ 是奇数，则对于任意 $1 \leq k \leq n-1$，有 $n \mid k^n + (n-k)^n$。两两配对后，$n \mid 1^n + 2^n + \cdots + (n-1)^n$。

### 方向 $\Rightarrow$

若 $n$ 是偶数，设 $n = 2^a m$，其中 $m$ 是奇数。我们接下来证明：$2^a \nmid 1^n + 2^n + \cdots + (n-1)^n$。

对于 $1^n + 2^n + \cdots + (n-1)^n$ 中的偶数项 $(2k)^n$，其 $2$ 的幂次至少为 $n$，而 $n > a$，所以 $2^a \mid (2k)^n$。

接下来考虑奇数项 $(2k-1)^n$。根据欧拉定理，$(2k-1)^{\phi(2^a)} \equiv 1 \pmod{2^a}$。其中 $\phi(2^a) = 2^{a-1} \mid n$，所以 $(2k-1)^n \equiv 1 \pmod{2^a}$。

结合上述分析，我们有：

$$
1^n + 2^n + \cdots + (n-1)^n \equiv \frac{n}{2} \pmod{2^a}
$$

而显然 $2^a \nmid \frac{n}{2}$，所以 $2^a \nmid 1^n + 2^n + \cdots + (n-1)^n$，所以 $n \nmid 1^n + 2^n + \cdots + (n-1)^n$。
