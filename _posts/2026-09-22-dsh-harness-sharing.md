---
title: "动手用 dsh：一份 DeepSeek Harness 配置与使用分享"
title_en: "Hands-on with DSH: A DeepSeek Harness Configuration and Usage Guide"
date: 2026-09-22
tags: [AI Agent, DeepSeek Harness, 工具链]
excerpt_zh: "从装上跑通、写 patch、装插件，到权限沙箱、pnpm 安装坑和 Web 卡死的排查，整理最近几天配置与使用 DeepSeek Harness 的真实记录。"
excerpt_en: "A hands-on sharing of DeepSeek Harness (dsh): setup, patch layers, plugins, sandbox, pnpm pitfalls, and troubleshooting notes from the last few days."
---

<div class="lang-zh" markdown="1">

DeepSeek Harness（`dsh`）是 DeepSeek 官方的 Agent 运行时，和 Codex / Claude Code 的形态不太一样：它把模型、工具、UI、沙箱都做成可替换的插件，配置树按 bundle → profile patch → home patch → `--patch` 逐层叠加。

最近几天我把一部分工作流从 Claude Code 往 dsh 迁，顺手把踩过的坑、可跑的几个小实验、以及一份给 agent 读的速查整理成了一个单页分享。

**[打开完整指南 →](/dsh/)**

页面里包含：

- dsh / Deep Code / 社区魔改版三条线的区分，避免装错包
- 配置树分层、profile、bundle、patch 的心智模型
- 安装启动、命令速查、几个可跑的 Lab
- 从 Claude Code / Codex 迁移 skills、记忆、hooks 的三层修复
- 插件安装的四类 pnpm 坑，以及 Web 页面卡死的实测根因
- 权限沙箱、TUN 共存、GUI 环境旧 Node 等排障记录

如果只想丢给 agent 读，同目录还有 `dsh.agent.md` 和 `dsh.agent.json`。

</div>

<div class="lang-en" markdown="1">

DeepSeek Harness (`dsh`) is DeepSeek's official agent runtime. Unlike Codex or Claude Code, it treats the model, tools, UI, and sandbox as replaceable plugins, and composes its config tree layer by layer: bundles, profile patch, home patch, and `--patch` overlays.

Over the last few days I moved part of my workflow from Claude Code to dsh, and collected the setup steps, pitfalls, several runnable labs, and an agent-readable cheat sheet into a single page.

**[Open the full guide →](/dsh/)**

The page covers:

- Telling apart dsh, Deep Code, and community forks
- The mental model behind profiles, bundles, and patches
- Installation, command reference, and hands-on labs
- Migrating skills, memory, and hooks from Claude Code / Codex
- Four pnpm plugin-install pitfalls and the measured cause of web UI freezes
- Permission sandbox, TUN coexistence, and GUI Node version issues

For agents, `dsh.agent.md` and `dsh.agent.json` are available in the same directory.

</div>
