---
date: 2025-12-30
tag:
  - VS Code
---

# VS Code 使用技巧

## 配置更显眼的文件浏览器

VS Code 默认的文件浏览器缩进比较小，并且缩进提示线的颜色也比较浅，层级一深就容易看不清楚，可以通过修改以下配置来改善：

```json
{
  "workbench.tree.indent": 16, // 缩进，默认值是 8
  "workbench.tree.renderIndentGuides": "always", // 始终显示缩进提示线
  "workbench.colorCustomizations": {
    "tree.indentGuidesStroke": "#00aa00" // 提示线颜色
  }
}
```

## 启用/禁用折行

按下 `Alt + Z` 可以启用或禁用当前文件的折行功能。如果想要默认启用折行，可以在设置中添加：

```json
{
  "editor.wordWrap": "on"
}
```
