---
date: 2025-12-22
tag:
  - Linux
---

# sudo 命令如何保留环境变量

在 Ubuntu 系统中，我们一般不会以 root 用户直接登录，而是登录 ubuntu 用户，然后用 sudo 命令来提升权限。

按照正常的逻辑，我们可能会期望用 sudo 执行的效果和不用 sudo 执行的效果除了权限不同之外，其他的行为都是一样的，但是实际上，经常会发现加上 sudo 之后，程序就无法正常运行了，这很多时候是因为 sudo 命令默认情况下为了安全，会清除掉大部分的环境变量。我们可以用下面的命令来验证：

```bash
env
sudo env
```

要让 sudo 保留环境变量，可以使用 -E 选项：

```bash
sudo -E env
```

但是“安全”的 sudo 还会针对 PATH 环境变量进行过滤，我们可以通过修改配置文件来禁用它，或者直接显式设置 PATH 变量：

```bash
sudo -E env "PATH=$PATH" env
```

这样一来，除了 USER 等少数环境变量之外，其他的环境变量都能和当前环境保持一致了。

## TL;DR

如果想要用 sudo 的时候保留当前环境变量，可以使用下面的命令：

```bash
sudo -E env "PATH=$PATH" "YOUR_COMMAND"
```
