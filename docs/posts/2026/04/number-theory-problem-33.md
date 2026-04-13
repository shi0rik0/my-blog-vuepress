---
date: 2026-04-13
tag:
  - 初等数论
---

# 初等数论问题（33）

## 题目

证明：若 $a, b$ 互素，则

$$
(a^m - b^m, a^n - b^n) = a^{(m, n)} - b^{(m, n)}
$$

## 证明

不妨设 $m > n$，我们只需要证明：

$$
(a^m - b^m, a^n - b^n) = (a^{m-n} - b^{m-n}, a^n - b^n)
$$

然后由辗转相减法即可得到结果。

设 $A = (a^m - b^m, a^n - b^n)$，$B = (a^{m-n} - b^{m-n}, a^n - b^n)$。

注意到：

$$
a^m - b^m = a^{m-n}(a^n - b^n) + b^n(a^{m-n} - b^{m-n})
$$

首先证明 $B \mid A$。因为 $B \mid a^n - b^n$ 且 $B \mid a^{m-n} - b^{m-n}$，根据上面的等式，$B \mid a^m - b^m$，所以 $B \mid A$。

然后证明 $A \mid B$。因为 $A \mid a^m - b^m$ 且 $A \mid a^n - b^n$，根据上面的等式可得 $A \mid b^n(a^{m-n} - b^{m-n})$。因为 $a$ 和 $b$ 互素，所以 $(a^n - b^n, b^n) = 1$，因此 $A$ 和 $b^n$ 也互素，所以 $A \mid a^{m-n} - b^{m-n}$，所以 $A \mid B$。

综上所述，$A = B$，证毕。
