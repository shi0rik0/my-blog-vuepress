---
date: 2025-11-28
---

# Python 环境管理工具 uv 教程

## 安装 uv

可以用官方脚本来安装 uv：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## 创建虚拟环境

创建一个新的虚拟环境：

```bash
uv venv
```

可以指定 Python 版本：

```bash
uv venv --python 3.12
```

创建完虚拟环境后，最好手动安装一下 pip：

```bash
uv pip install pip
```

这么做的目的是确保进入虚拟环境后，不会不小心调用到全局的 pip，因为 uv 创建的虚拟环境是不会自带 pip 的。当然，uv 重新实现的 pip（`uv pip`）的效率会比原生 pip 更高，所以还是推荐优先使用 `uv pip`。

进入虚拟环境：

```bash
source .venv/bin/activate
```
