---
date: 2026-02-28
tag:
  - 初等数论
---

# 初等数论问题（3）

## 题目

证明：若素数 $p$ 满足 $p \mid a^p - 1$，则 $p^2 \mid a^p - 1$。

## 证明

根据费马小定理，$a^p \equiv a \pmod{p}$，所以 $a \equiv 1 \pmod{p}$。

$a^p - 1 = (a - 1)(a^{p-1} + a^{p-2} + \cdots + a + 1)$。不难证明：$p \mid a - 1$，且$p \mid a^{p-1} + a^{p-2} + \cdots + a + 1$。因此，$p^2 \mid a^p - 1$。
