---
title: "Canvas 驱动的 Related Work 写作方法"
title_en: "Canvas-Driven Related Work Writing: An AI-Assisted Workflow"
date: 2026-03-15
tags: [方法论, AI辅助写作, 学术写作]
excerpt_zh: "一套从文献管理到段落生成的 AI 辅助学术写作方法，解决 Related Work 中常见的'引用堆积'问题。"
excerpt_en: "An AI-assisted academic writing methodology from literature management to paragraph generation, addressing the common 'citation stacking' problem."
---

<div class="lang-zh" markdown="1">

## 问题：Related Work 中的"引用堆积"

写过学术论文的人大概都有这样的体验：Related Work 章节最容易写成"引用堆积"——每篇文献一两句话概括，依次罗列，读起来像一份带注释的参考文献列表。审稿人看到这样的段落，往往会在评审意见中写下："The related work section reads as a list of citations rather than a critical synthesis."

这种写法的根源在于：我们在调研阶段积累了大量文献笔记，但这些笔记是以单篇论文为单位组织的，而非以论点或证据为单位。当需要把它们整合成连贯段落时，最自然的做法就是逐篇复述，而非提炼出跨文献的共同论点。

好的 Related Work 应该是"fact-driven"（事实驱动）的：每个段落围绕一个明确的论点展开，引用多篇文献中的具体发现作为证据，最终指向自己工作的研究缺口。

## 方法：以 Canvas 为知识基座

在最近一次涉及 74 篇文献的 ToCHI 投稿中，我尝试了一套以 Obsidian Canvas 为核心的 AI 辅助写作流程。整体思路是：先用 AI 将每篇论文转化为结构化知识卡片，再由人来完成分类、叙事和论证。

### 流程概览

整个流程可以分为五个阶段：

**阶段一：PDF 提取与结构化摘要。** 对每篇论文的 PDF 进行文本提取，然后调用大语言模型生成结构化的"知识鸟瞰"——包括研究背景、核心方案、实验设计、关键结论等维度。输出以 Obsidian Canvas 格式存储，每个维度是一个独立的节点。

**阶段二：文献分类。** 根据自己论文的 Related Work 结构，将 74 篇文献分配到不同的小节。这一步同样可以借助 AI 进行初步分类，但最终的归属判断需要人工审核——因为一篇论文可能跨越多个主题，选择将它放在哪个小节取决于你希望引用它的哪个方面。

**阶段三：证据筛选。** 对于每个小节中的"重点文献"，从 Canvas 的结构化节点中提取具体的事实性证据——不是笼统的"XX 提出了一种方法"，而是"XX 在 N 名被试上测得平均误差为 Y 度"这样可以直接写入段落的具体发现。

**阶段四：段落生成。** 基于筛选出的证据，让 AI 生成段落草稿。此时给 AI 的不再是一堆论文摘要，而是按论点组织好的事实清单，因此生成质量会高得多。

**阶段五：人工修订。** 这是最关键的一步。AI 生成的草稿需要人来调整叙事逻辑、确认每条引用的准确性、补充批判性分析，以及确保最终指向自己工作的 gap statement。

### 为什么用 Canvas 而非普通笔记？

Canvas 的核心优势在于空间化的知识组织。每篇文献的不同维度被拆分为独立节点，可以自由排列和连接。当你需要提取"所有论文的实验被试数量"或者"所有涉及 Fitts' Law 的结论"时，结构化节点让这种跨文献检索成为可能。

## 核心洞察：AI 擅长提取，人擅长叙事

经过这次实践，我最深的体会是：AI 在信息提取和组织方面非常出色——从 PDF 中提取结构化信息、将文献分配到类别、从长文中挑选关键证据——这些任务 AI 完成得又快又好。但叙事框架的构建仍然需要人的判断：哪些文献值得深入讨论、段落之间如何衔接、如何从现有工作的总结自然过渡到自己研究的动机。

## 经验教训

1. **结构化是关键前置步骤。** 在让 AI 写任何东西之前，先把原始材料结构化。给 AI 一堆摘要让它写 Related Work，结果一定是引用堆积；给它按论点组织好的证据清单，结果会好得多。
2. **分类边界需要人工决策。** AI 可以给出合理的初步分类，但学科交叉的论文往往可以归入多个类别，最终选择取决于你的叙事需要。
3. **引用准确性必须逐条核实。** AI 可能会将 A 论文的发现张冠李戴到 B 论文上，尤其当两篇论文主题相近时。每一条"某某发现了什么"都需要回到原文确认。
4. **74 篇不是小数目。** 对于大规模的 Related Work，这套流程的价值尤为明显。如果只有 10-20 篇文献，手动整理可能更高效。

</div>

<div class="lang-en" markdown="1">

## The Problem: Citation Stacking in Related Work

Anyone who has written academic papers knows the pattern: the Related Work section devolves into "citation stacking" -- one or two sentences per paper, listed sequentially, reading more like an annotated bibliography than a literature review. Reviewers notice this immediately: "The related work section reads as a list of citations rather than a critical synthesis."

The root cause is that our literature notes are organized by individual paper, not by argument or evidence. When it comes time to weave them into coherent paragraphs, the path of least resistance is to summarize each paper in turn rather than distill cross-cutting themes.

Good Related Work writing is "fact-driven": each paragraph advances a clear argument, drawing on specific findings from multiple papers as evidence, ultimately pointing toward the research gap your work addresses.

## The Method: Canvas as Knowledge Base

During a recent ToCHI submission involving 74 papers, I developed an AI-assisted writing workflow centered on Obsidian Canvas. The core idea: use AI to transform each paper into a structured knowledge card, then let human judgment handle classification, narrative, and argumentation.

### Pipeline Overview

The workflow has five stages:

**Stage 1: PDF Extraction and Structured Summarization.** Extract text from each paper's PDF, then call a large language model to generate a structured "knowledge overview" -- covering dimensions like research background, core approach, experimental design, and key conclusions. Output is stored as an Obsidian Canvas file, with each dimension as a separate node.

**Stage 2: Literature Classification.** Assign the 74 papers to different subsections based on your Related Work structure. AI can provide initial classifications, but final assignments require human review -- a paper may span multiple topics, and where you place it depends on which aspect you intend to cite.

**Stage 3: Evidence Screening.** For "featured" papers in each subsection, extract specific factual evidence from the Canvas's structured nodes -- not vague statements like "XX proposed a method," but concrete findings like "XX measured a mean error of Y degrees across N participants" that can be directly woven into paragraphs.

**Stage 4: Prose Generation.** Feed the screened evidence to AI for paragraph drafting. At this point, the AI receives fact lists organized by argument rather than paper summaries, producing substantially better output.

**Stage 5: Human Revision.** This is the most critical step. AI-generated drafts need human adjustment for narrative logic, citation accuracy verification, critical analysis, and ensuring the text naturally leads to your gap statement.

### Why Canvas Instead of Regular Notes?

The key advantage of Canvas is spatial knowledge organization. Different dimensions of each paper are split into independent nodes that can be freely arranged and connected. When you need to extract "all papers' sample sizes" or "all conclusions involving Fitts' Law," structured nodes make such cross-paper retrieval possible.

## Core Insight: AI Excels at Extraction, Humans at Narrative

The deepest lesson from this experience: AI is remarkably good at information extraction and organization -- pulling structured information from PDFs, assigning papers to categories, selecting key evidence from long texts. These tasks AI handles quickly and well. But constructing the narrative framework still requires human judgment: which papers deserve deep discussion, how paragraphs connect, and how to transition naturally from summarizing existing work to motivating your own research.

## Lessons Learned

1. **Structuring is the critical prerequisite.** Before asking AI to write anything, structure your raw materials first. Feed AI a pile of abstracts and ask for Related Work -- you get citation stacking. Feed it evidence organized by argument -- you get much better results.
2. **Classification boundaries require human decisions.** AI provides reasonable initial classifications, but interdisciplinary papers often fit multiple categories. The final choice depends on your narrative needs.
3. **Citation accuracy must be verified individually.** AI may misattribute findings from paper A to paper B, especially when topics are similar. Every claim of "so-and-so found X" must be checked against the original text.
4. **Scale matters.** For 74 papers, this pipeline's value is clear. For 10-20 papers, manual organization may be more efficient.

</div>
