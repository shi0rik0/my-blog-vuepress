---
date: 2025-12-08
tag:
  - VuePress
---

# 用 VuePress 搭建个人博客

## 分清 VuePress 和 VitePress

首先不要搞混了 [VuePress](https://vuepress.vuejs.org/) 和 [VitePress](https://vitepress.dev/)，它们是两个不同的项目。由于 VitePress 没有默认的博客模板，所以我们选择用 VuePress 来搭建个人博客。

## 初始化项目

使用以下命令初始化 VuePress 项目，选择项目类型的时候请选择 blog。

```bash
npm init vuepress vuepress-starter
```

VuePress 初始化的时候还可以帮我们生成一个将网页部署到 GitHub Pages 的 GitHub Action 工作流，非常方便。

## 使用 slimsearch 插件

VuePress 博客默认没有搜索功能，我们可以用官方维护的 [slimsearch](https://ecosystem.vuejs.press/zh/plugins/search/slimsearch.html) 插件来实现搜索功能。

安装插件：

```bash
npm i -D @vuepress/plugin-slimsearch@next
```

然后在 `.vuepress/config.js` 中引入插件：

```js
import { defineUserConfig } from "vuepress"
import { slimsearchPlugin } from "@vuepress/plugin-slimsearch"

export default defineUserConfig({
  plugins: [slimsearchPlugin()],
})
```

配置好之后，应该就可以在页面右上方看到搜索框了。

默认情况下，`slimsearch` 插件对于中文的支持不佳，我们可以用 `jieba` 分词库来改善搜索效果。

用下面的命令安装 `nodejs-jieba`。

```bash
npm i -D nodejs-jieba
```

然后调整配置：

```js
import { defineUserConfig } from "vuepress"
import { slimsearchPlugin } from "@vuepress/plugin-slimsearch"
import { cut } from "nodejs-jieba"

export default defineUserConfig({
  plugins: [
    slimsearchPlugin({
      indexOptions: {
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
    }),
  ],
})
```

### Bug

我写这篇文章的时候，最新版本的 `slimsearch` 插件（v2.0.0-rc.120）有一个 bug，会导致构建失败。解决办法是在 `.vuepress/config.js` 中设置 `locales.xxx.lang` 选项：

```js
export default defineUserConfig({
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  // ...
})
```
