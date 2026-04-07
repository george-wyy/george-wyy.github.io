# 方案 B — Codex 方案：数据驱动学术仪表盘

## 设计理念
"让数据说话" — 用可量化的学术指标替代大段文字描述。
首页像一个精炼的学术 dashboard，一眼看到核心数字和最新动态。

## 色彩方案
在现有暖色基础上引入更强的对比度：
- 保持 `--surface-1: #faf5ee` 暖底色
- 强调色调整为偏深蓝 `--accent-500: #2563eb`（从 teal 转 blue，更学术严肃）
- 数字/指标用 `--accent-500` 高亮，制造视觉锚点
- Dark mode 下指标数字用亮蓝 `#60a5fa`

## 首页结构（~110 行）

```
┌─────────────────────────────────────────────┐
│  [Nav]  研究方向  论文成果  简历              │
├─────────────────────────────────────────────┤
│                                             │
│  王以俨 / Yiyan Wang                        │
│  PhD · Eye Tracking & HCI                   │
│  Southeast University                       │
│                                             │
│  [CV] [Email] [GitHub] [Scholar] [ORCID]    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌──────┐ │
│  │  11    │ │   4    │ │   4    │ │  2   │ │
│  │ Papers │ │Patents │ │Under   │ │Top   │ │
│  │Published│ │Filed  │ │Review  │ │Journal│ │
│  └────────┘ └────────┘ └────────┘ └──────┘ │
│                                             │
│  Venues: AEI · Displays · ToCHI · Science   │
│          Advances · IJHCS · IEEE SMC         │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Research Focus                              │
│                                             │
│  ◉ Eye-Control Interaction                  │
│    凝视触发 · 平滑追踪 · 眨眼交互            │
│                                             │
│  ◉ AR/VR Systems                            │
│    HoloLens 2 · Quest 2 · 可用性优化         │
│                                             │
│  ◉ Interaction Algorithms                   │
│    鱼眼扩展 · 动态触发 · 手眼协同             │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Latest Publications                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ AEI 2025 │  │ AEI 2024 │  │Displays  │  │
│  │ Fisheye  │  │ Blink    │  │ Smooth   │  │
│  │ Expansion│  │ Trigger  │  │ Pursuit  │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                             │
│  → 查看全部论文                              │
│                                             │
└─────────────────────────────────────────────┘
```

## 关键设计决策

1. **指标卡片区**：4 个数字卡片（论文数/专利数/在审数/顶刊数），用大号字体+强调色
   - 这是与方案 A 最大的区别：用数字而非 News 列表来传达成果
   - 下方一行 venue 标签，展示投稿/发表的期刊覆盖
2. **Research Focus 用标签云风格**：每个方向下面带 2-3 个关键词标签
3. **Publications 卡片突出期刊名**：期刊名在最顶部，大字显示
4. **无 News 列表**：数字卡片本身就是最好的"新闻"

## CSS 实现要点
- 指标卡片：`display: grid; grid-template-columns: repeat(4, 1fr)`
  - 数字用 `font-size: 2.5rem; font-weight: 700; color: var(--accent-500)`
  - 标签用 `font-size: 0.85rem; color: var(--text-2); text-transform: uppercase`
- Venue 标签行：`display: flex; flex-wrap: wrap; gap: 0.5rem`
  - 每个标签 `background: var(--surface-2); border-radius: 4px; padding: 2px 8px`
- Research Focus 每个方向用 `border-left: 3px solid var(--accent-500)` 标记
- 移动端指标卡片改为 `grid-template-columns: repeat(2, 1fr)`

## 与方案 A 的对比

| 维度 | 方案 A (Claude) | 方案 B (Codex) |
|------|----------------|----------------|
| 核心手法 | 极简留白 | 数据仪表盘 |
| 成果展示 | News 列表 | 数字指标卡片 |
| 视觉锚点 | 名字+身份 | 4个大数字 |
| 研究方向 | 3 bullet points | 标签云+关键词 |
| 适合场景 | 学术主页/求职 | 展示研究生产力 |
