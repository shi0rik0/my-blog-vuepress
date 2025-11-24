---
date: 2025-11-24
---

# VS Code 实用插件：在 SSH 环境下以 Root 权限保存文件

在 SSH 环境下，很多时候我们无法以 root 用户身份直接登入（本身这也不是一种推荐的做法），而是只能通过 sudo 命令来临时获得 root 权限。这种情况下用 VS Code 编辑文件的时候就经常会遇到权限不足的问题。有一个叫做 [Save as Root in Remote - SSH](https://marketplace.visualstudio.com/items?itemName=yy0931.save-as-root) 的插件可以解决这个问题。

安装这个插件之后，在 command palette (`Ctrl+Shift+P`) 里搜索 `Save as Root`，然后执行这个命令，就可以用 root 权限保存当前文件了。也可以用 `Save as Specified User...` 命令来以其他用户身份保存文件。

这个插件的核心原理就在[这一行代码](https://github.com/yy0931/save-as-root/blob/main/extension.js)：

```javascript
const p = execFile(
  /* "sudo" or "/usr/bin/sudo" */ config.get("command", "sudo"),
  [
    ...(user === "root" ? [] : ["-u", user]),
    "-S",
    "-p",
    "password:",
    `filename=${filename}`,
    "sh",
    "-c",
    'echo "file contents:" >&2; cat <&0 > "$filename"',
  ]
)
```

主要就是运用 `sudo`、`cat` 和重定向来实现的。
