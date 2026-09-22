---
title: "MyLibrary-Plus：一个你真的会回头翻的本地论文库"
title_en: "MyLibrary-Plus: A Local-First Paper Library You Actually Return To"
date: 2026-09-21
tags: [开源, 文献管理, 本地优先, 阅读工具]
excerpt_zh: "文献管理器擅长把论文存进去，却不擅长让你再回来看。MyLibrary-Plus 用图优先的时间线和共享批注，把论文库重新变成一条会回访的信息流。"
excerpt_en: "Reference managers are good at filing papers and bad at bringing you back. MyLibrary-Plus rebuilds the library as a figure-first timeline with shared annotations."
---

<div style="margin:20px 0 28px;padding:20px 22px;border:1px solid #dbe2f5;border-radius:14px;background:#f6f8ff">
  <div style="font-size:17px;font-weight:800;color:#161b29;margin-bottom:4px">MyLibrary-Plus · 一个你真的会回头翻的本地论文库</div>
  <div style="font-size:14px;line-height:1.7;color:#5c667c;margin-bottom:14px">Fork 自 <a href="https://github.com/liusida/MyLibrary" style="color:#4d6bfe">liusida/MyLibrary</a>，在其之上加了图优先时间线与整层阅读批注；MIT 开源，数据全部留在本地。</div>
  <div>
    <a href="https://george-wyy.github.io/MyLibrary-Plus/zh/" style="display:inline-block;margin:0 8px 8px 0;padding:10px 18px;border-radius:9px;background:#4d6bfe;color:#ffffff;font-weight:700;text-decoration:none">中文落地页</a>
    <a href="https://george-wyy.github.io/MyLibrary-Plus/" style="display:inline-block;margin:0 8px 8px 0;padding:10px 18px;border-radius:9px;background:#ffffff;color:#4d6bfe;border:1px solid #b9c6ff;font-weight:700;text-decoration:none">English landing page</a>
    <a href="https://github.com/george-wyy/MyLibrary-Plus" style="display:inline-block;margin:0 8px 8px 0;padding:10px 18px;border-radius:9px;background:#161b29;color:#ffffff;font-weight:700;text-decoration:none">GitHub 仓库</a>
  </div>
</div>

<div class="lang-zh" markdown="1">

## 问题：库变成了墓地

文献管理器擅长把论文**存进去**，却不擅长让你**再回来看**。论文流入的速度永远快过注意力流出的速度，于是库慢慢变成墓地：你记得的往往是某张图，而不是某个文件名，而工具里没有任何一处是围绕「重新遇到自己存过的东西」设计的。

## 做法：把首页做成图优先的时间线

MyLibrary-Plus 站在文献管理器上再加一层，专门优化**回访**。首页是按加入时间倒序的卡片时间线，卡片正面就是论文的图，往下滑像刷一条自己曾经在意过的信息流。

<img src="https://george-wyy.github.io/MyLibrary-Plus/assets/shots/timeline.png" alt="时间线：卡片正面就是论文的图，带标签、短评和阅读标记" style="max-width:100%;border-radius:10px;border:1px solid #e3e8f2">

主要能力：

- **图优先时间线**：每张卡片带第 1 页和 1–3 张图，可全屏灯箱；按标签、按「有没有讲义」筛选，也可搜索
- **批注集中在一处**：PDF 和 Markdown 讲义里的选中文字都能批注，同一个侧栏同时放两边，支持标签、时间戳、编辑和回复
- **讲义模式**：左边 PDF、右边 Markdown 讲义，支持 KaTeX 公式、内嵌图、提示框、`[[wikilinks]]` 和反链；一篇论文可以挂多份讲义，讲义里还能嵌入交互式 HTML/JS 组件
- **夜览模式**：跟随系统或手动切换，首屏绘制前生效，不闪白
- **离线 Zotero 导入**：直接读 Zotero 的 SQLite，复用本地已有 PDF，付费论文的图也不会丢
- **面向 agent 的接口**：`GET /api/papers/{id}/annotations/context` 把论文、批注和指令打包成 JSON，agent 可以按 `role: "assistant"` 回进批注线程
- **全部本地**：SQLite 加一个 `data/` 目录，只绑 `127.0.0.1`，不需要账号，不上云，没有埋点

项目 fork 自 [liusida/MyLibrary](https://github.com/liusida/MyLibrary)，在其之上加了整层阅读与批注，以 MIT 协议开源。

## 链接

- **[中文落地页](https://george-wyy.github.io/MyLibrary-Plus/zh/)** ｜ **[English landing page](https://george-wyy.github.io/MyLibrary-Plus/)**
- **[GitHub 仓库](https://github.com/george-wyy/MyLibrary-Plus)**

</div>

<div class="lang-en" markdown="1">

## The problem: a library that becomes a graveyard

Reference managers are good at *filing* papers and bad at bringing you back to them. Papers flow in faster than attention flows out, so the library slowly turns into a graveyard: you remember a figure, not a filename, and nothing in the tool is designed around running into your own saved work again.

## The approach: a figure-first timeline as the home page

MyLibrary-Plus sits one layer above the reference manager and optimises for the **revisit**. The home page is a reverse-chronological timeline of paper cards, and each card shows the paper's figures, so scrolling feels like a feed of things you once cared about.

<img src="https://george-wyy.github.io/MyLibrary-Plus/assets/shots/timeline.png" alt="The timeline: paper cards carry the paper's figures, tags, verdicts and reading markers" style="max-width:100%;border-radius:10px;border:1px solid #e3e8f2">

Highlights:

- **Figure-first timeline**: every card carries page 1 plus figures 1–3 in a swipeable carousel with a full-screen lightbox; filter by tag, by "has study notes", or search
- **Annotations in one place**: select text in the PDF or in your Markdown study notes and annotate it; one sidebar holds both, with tags, timestamps, edits and replies
- **Study view**: PDF on the left, Markdown notes on the right, with KaTeX math, embedded figures, callouts, `[[wikilinks]]` and backlinks; a paper can carry several notes, and a note can embed interactive HTML/JS components
- **Night reading**: system / light / dark toggle, applied before first paint
- **Offline Zotero import**: reads Zotero's SQLite directly and reuses the PDFs already on disk, so paywalled papers keep their figures
- **Agent-ready annotations**: `GET /api/papers/{id}/annotations/context` returns the paper, its annotations and instructions as JSON; an agent can reply into the thread as `role: "assistant"`
- **Everything stays local**: SQLite plus a `data/` directory, binds to `127.0.0.1`, no account, no cloud, no telemetry

It is a fork of [liusida/MyLibrary](https://github.com/liusida/MyLibrary) with a full reading and annotation layer added on top, released under MIT.

## Links

- **[中文落地页](https://george-wyy.github.io/MyLibrary-Plus/zh/)** | **[English landing page](https://george-wyy.github.io/MyLibrary-Plus/)**
- **[GitHub repository](https://github.com/george-wyy/MyLibrary-Plus)**

</div>
