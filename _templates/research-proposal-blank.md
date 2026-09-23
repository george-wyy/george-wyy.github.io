---
layout: single
title: "RP 空白骨架"
title_en: "Research Proposal Blank Template"
excerpt_zh: "可直接复制或下载的 Research Proposal 空白结构，覆盖从背景到附录的 11 个部分。"
excerpt_en: "A copy-ready and downloadable blank structure covering 11 sections from background to appendix."
category: "写作"
tags: [RP, 模板, 空白模板]
order: 2
toc: true
toc_label: "目录"
toc_icon: "fas fa-file-alt"
last_modified_at: 2026-09-23
version: v1.0
permalink: /templates/research-proposal-blank/
author_profile: true
---

<p class="lang-zh">下面是可直接复制或下载的 RP 空白骨架。把【】里的内容替换成你的信息即可。配套的方法论见 <a href="/rp-template/">RP 写作指南</a>。</p>
<p class="lang-en">Below is a copy-ready and downloadable RP blank skeleton. Replace the bracketed placeholders with your own content. The companion methodology guide is at <a href="/rp-template/">Research Proposal Guide</a>.</p>

<p>
  <button class="btn btn--primary" onclick="rpCopy()">复制模板</button>
  <button class="btn" onclick="rpDownload()">下载 .md</button>
  <span id="rp-copy-status" style="margin-left:0.6em;font-size:0.85em;color:#666;"></span>
</p>

```markdown
---
title: "研究计划：【题目】"
created: YYYY-MM-DD
type: research-plan
status: 草稿 v0.1
revision: v0.1
owner: 【姓名】
deadline: 【关键截止日期】
tags: [research-plan, RP, 【项目名】, 【关键词】]
related: []
---

# 研究计划：【题目】

> 一句话：【把 A 做成 B，从而解决 C】。

**TL;DR**

- 问题：
- 洞察：
- 方案：
- 产出：

**目标出口**：论文 / 专利 / 基金 / 毕业章节 / 产业合作
**当前状态**：草稿 / 待导师讨论 / 已拍板

## 1. 背景与问题（Why）

### 1.1 问题陈述

【谁、在什么场景、做什么事、卡在哪里、不解决的代价】

### 1.2 现有做法与不足

| 现有路线 | 代表工作 | 做到了什么 | 没解决什么 | 证据/状态 |
|---|---|---|---|---|
|  |  |  |  |  |

### 1.3 缺口（Gap）

【现有工作做到了 X，但没有解决 Y；Y 重要，是因为 Z】

### 1.4 核心洞察（Insight）

> 【一句话洞察】

### 1.5 与现有工作的区别

| 维度 | 现有做法 | 本方案 | 差异是否可验证 |
|---|---|---|---|
|  |  |  |  |

### 1.6 边界：明确不做什么

- 不做：
- 不做：
- 不做的理由：

## 2. 研究问题与假设（What）

### 2.1 核心科学问题

> 【一句话核心科学问题】

### 2.2 子问题（RQ）

- RQ1：
- RQ2：
- RQ3：

### 2.3 假设与证伪条件

| 假设 | 陈述 | 操作化定义 | 对应实验 | 指标（含单位） | 目标值 | 证伪条件 |
|---|---|---|---|---|---|---|
| H1 |  |  | EXP1 |  |  |  |
| H2 |  |  | EXP2 |  |  |  |

### 2.4 预期贡献

1. 
2. 
3. 

## 3. 研究内容与技术路线（How）

### 3.1 研究内容拆解

| 编号 | 名称 | 一句话目标 | 输入 | 方法 | 输出 | 依赖 |
|---|---|---|---|---|---|---|
| RC1 |  |  |  |  |  |  |
| RC2 |  |  |  |  |  |  |

### 3.2 技术路线

【用一张图或一段链路描述：输入 → 处理 → 输出；标出人、数据、模型的接口】

### 3.3 关键技术选型与备选路线

| 路线 | 方法 | 优势 | 风险/代价 | 适用阶段 |
|---|---|---|---|---|
| A |  |  |  | MVP / 概念验证 |
| B |  |  |  | 主方案 |
| C |  |  |  | 备选 / 长期 |

### 3.4 复用与新建

- 可复用（代码 / 数据 / 设备 / 被试渠道）：
- 需新建（算法 / 平台 / 标注规范）：
- 最大技术不确定性：

### 3.5 与上位课题的映射

| 本 RP | 博士论文章节 / 项目 RC / 基金方向 | 关系 |
|---|---|---|
|  |  |  |

## 4. 实验设计（Validation）

### 4.1 实验总览

| 实验 | 目的 | 被试 | 条件 | 主要指标 | 对应假设 |
|---|---|---|---|---|---|
| EXP1 |  |  |  |  |  |

### 4.2 被试

- 规模：N =
- 样本量依据：
- 分层维度：
- 招募渠道与补偿：
- 排除标准：

### 4.3 任务、变量与流程

- 任务：
- 自变量 IV：
- 因变量 DV：
- 控制变量 / 随机化 / 盲法：
- 流程：

### 4.4 Baseline 与消融

| 编号 | 方法 / 条件 | 输入模态 | 作用 |
|---|---|---|---|
| B0 |  |  | 基线 |
| B1 |  |  | 消融 |
| M |  |  | 主方法 |

### 4.5 指标与目标值

| 指标 | 定义（含单位） | 测量方法 | 目标值 | 目标值依据 | 统计检验 |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### 4.6 设备与材料

| 设备 / 材料 | 规格 | 用途 | 状态 |
|---|---|---|---|
|  |  |  | 已有 / 待申请 / 缺 |

### 4.7 数据采集、标注与质控

- 采集：
- 标注：
- 质控：
- 数据管理：

### 4.8 统计分析方案

### 4.9 伦理与合规

- IRB / 伦理审查
- 知情同意
- 隐私与脱敏
- 安全合规

### 4.10 实验层面的 Fallback

| 如果…… | 则改为…… |
|---|---|
| 设备不到位 |  |
| 被试招不满 |  |
| 主方法无效 |  |

## 5. 资源需求

### 5.1 已有资源

- 

### 5.2 待申请资源

| 资源 | 用途 | 规格 / 预算 | 优先级 | 申请路径 | 期望到位时间 | 不到位时的 fallback |
|---|---|---|---|---|---|---|
|  |  |  | 高 / 中 / 低 |  |  |  |

### 5.3 人力与分工

| 角色 | 谁 | 负责什么 | 投入 |
|---|---|---|---|
|  |  |  |  |

## 6. 时间规划与里程碑

### 6.1 阶段表

| 阶段 | 时间窗 | 任务 | 交付物 | 里程碑 / 检查点 |
|---|---|---|---|---|
| 准备 |  |  |  |  |
| 开发 / 预实验 |  |  |  |  |
| 正式采集 |  |  |  |  |
| 分析 / 写作 |  |  |  |  |
| 投稿 |  |  |  |  |

### 6.2 时间线（从目标截止日倒推）

- 目标：【venue / deadline】——【日期】
- 写作与修改：
- 数据分析：
- 正式采集：
- 系统开发 / 预实验：
- 资源到位 / 准备：

### 6.3 关键路径与缓冲

- 关键路径：
- 缓冲：

### 6.4 节奏

- 每周检查点：
- 每两周产出：

## 7. 预期产出与出口映射

### 7.1 论文

| 论文（工作标题） | 类型 | 目标 venue | 档次认定 | 投稿窗口 | 核心贡献 |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### 7.2 其他产出

- 数据集：
- 开源代码 / 系统：
- 专利：
- Demo / 演示视频：

### 7.3 出口映射

| 出口 | 需要什么 | 时间窗 | 当前判断 |
|---|---|---|---|
| 论文 |  |  |  |
| 基金 |  |  |  |
| 毕业条件 |  |  |  |
| 产业合作 / 竞赛 |  |  |  |

### 7.4 与毕业 / 考核的对应

- 满足的毕业条件：
- 与博士论文章节的映射：

## 8. 风险与预案

| 风险 | 概率 | 影响 | 触发信号 | 预案 | 负责人 |
|---|---|---|---|---|---|
| 技术风险 |  |  |  |  |  |
| 数据 / 伦理风险 |  |  |  |  |  |
| 资源风险 |  |  |  |  |  |
| 时间风险 |  |  |  |  |  |
| 外部效度风险 |  |  |  |  |  |

## 9. 待讨论与待拍板

| 问题 | 为什么需要导师决策 | 影响 | 我的默认选项 | 希望答复时间 |
|---|---|---|---|---|
| Q1 |  |  |  |  |
| Q2 |  |  |  |  |
| Q3 |  |  |  |  |

## 10. 快速验证（本周就能做的最小实验）

- 目标：验证
- 动作：
- 成功判据：
- 失败判据 / 止损条件：
- 决策点：

## 11. 附录

- 相关文档 / 代码 / 数据位置：
- 关键文献与竞品清单：
- 术语与符号表：
- 变更记录：

| 日期 | 版本 | 修改内容 |
|---|---|---|
|  | v0.1 | 初稿 |
```
{: #rp-blank-source }

<script>
function rpText() {
  var el = document.querySelector('#rp-blank-source code');
  return el ? el.innerText : '';
}
function rpCopy() {
  var text = rpText();
  var status = document.getElementById('rp-copy-status');
  function ok() {
    if (status) status.textContent = '已复制';
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(ok);
  } else {
    var ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    ok();
  }
}
function rpDownload() {
  var text = rpText();
  var blob = new Blob([text], {type: 'text/markdown;charset=utf-8'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'RP研究计划-空白模板.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}
</script>
