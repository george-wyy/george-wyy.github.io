# 方案 C — Gemini 方案：Research Storytelling（叙事驱动）

## 设计理念

**"让研究自己讲故事"** — 与方案 A 的极简罗列不同，方案 C 不把首页当简历用，
而是用一条叙事线索串联研究者的身份、问题意识、核心成果和未来方向。

核心差异：
- **方案 A**（极简学术风）= 信息层级清晰，访客自己找想要的内容
- **方案 C**（叙事驱动）= 首页本身就是一篇"研究故事"，引导访客从头读到尾

灵感来源：优秀的 TED Talk 结构 —— 开场提出问题 → 展示你如何解决 → 成果印证 → 未来展望。
这种结构特别适合面向非本领域的评审、跨学科合作者、或企业方，让他们快速理解你的研究价值。

---

## 首页线框图（~100-120 行 about.md）

```
┌──────────────────────────────────────────────────────┐
│  [Nav]  Research  Publications  CV                   │
╞══════════════════════════════════════════════════════╡
│                                                      │
│  § 1  THE QUESTION（开场 · 抛出问题）                  │
│  ────────────────────────────────────                 │
│                                                      │
│          "每一次注视都是一次对话                        │
│           但我们还不会倾听"                            │
│                                                      │
│  王以俨 / Yiyan Wang                                 │
│  PhD · Southeast University · Eye Tracking × HCI     │
│                                                      │
│  我的研究核心问题：如何让计算机像理解                   │
│  手指点击一样，精确理解人眼的意图？                     │
│                                                      │
│  [CV]  [Email]  [GitHub]  [ResearchGate]             │
│                                                      │
╞══════════════════════════════════════════════════════╡
│                                                      │
│  § 2  THE APPROACH（方法 · 三条研究路径）               │
│  ────────────────────────────────────                 │
│                                                      │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│  │  👁 感知层    │ │  🔧 交互层   │ │  🧠 智能层   │ │
│  │              │ │              │ │              │ │
│  │ 低成本眼动   │ │ AR/VR 环境   │ │ ML 驱动的    │ │
│  │ 追踪硬件     │ │ 中的注视交互  │ │ 意图推断     │ │
│  │              │ │              │ │              │ │
│  │ DIY Tracker  │ │ HoloLens 2   │ │ YOLO/CNN     │ │
│  │ Pupil Labs   │ │ Quest 2      │ │ 时序模型     │ │
│  └──────────────┘ └──────────────┘ └──────────────┘ │
│                                                      │
│  一句话连接：从硬件到算法，我构建了一套完整的           │
│  "眼动意图理解"技术栈。                                │
│                                                      │
╞══════════════════════════════════════════════════════╡
│                                                      │
│  § 3  THE EVIDENCE（成果 · 用数字说话）                │
│  ────────────────────────────────────                 │
│                                                      │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐              │
│  │  11     │  │  4      │  │  4      │              │
│  │ 篇论文   │  │ 项专利   │  │ 篇在审   │              │
│  │ 2× AEI  │  │         │  │ ToCHI   │              │
│  │ top刊   │  │         │  │ Sci.Adv │              │
│  └─────────┘  └─────────┘  └─────────┘              │
│                                                      │
│  ── 代表作 ─────────────────────────────              │
│                                                      │
│  ┌──────────────────────────────────────┐            │
│  │  [Fisheye 论文]    AEI · 2025       │            │
│  │  一句话摘要 + 关键发现               │            │
│  └──────────────────────────────────────┘            │
│  ┌──────────────────────────────────────┐            │
│  │  [Dwell-time 论文]  AEI · 2024      │            │
│  │  一句话摘要 + 关键发现               │            │
│  └──────────────────────────────────────┘            │
│                                                      │
│  → 查看全部论文                                       │
│                                                      │
╞══════════════════════════════════════════════════════╡
│                                                      │
│  § 4  WHAT'S NEXT（展望 · 未来方向）                   │
│  ────────────────────────────────────                 │
│                                                      │
│  "下一步：让注视交互走出实验室，                       │
│   进入真实的手术室和工厂产线"                          │
│                                                      │
│  当前在审：                                           │
│  · ToCHI — xxxxxx                                    │
│  · Science Advances — xxxxxx                         │
│  · IJHCS — xxxxxx                                    │
│  · IEEE VR — xxxxxx                                  │
│                                                      │
│  [联系我合作]  [下载完整简历]                           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 各 Section 设计详解

### § 1  The Question — 开场抛问题

**内容**：
- 一句引言（大字，居中，斜体）—— 类似 manifesto 式的研究信念
- 姓名 + 身份一行
- 2-3 句话描述核心研究问题（不是罗列方向，而是提出一个**具体的问题**）
- 快捷链接行

**为什么这样设计**：
方案 A 用"名字 + 标签"开场，高效但缺乏记忆点。
叙事方案用一个问题（question）开场，给访客一个"为什么要关注这个人"的理由。
学术评审第一眼看到的不是简历，而是研究问题——这更接近审稿人阅读论文的心理模型。

**HTML 结构**：
```html
<section class="story-hero reveal-on-scroll">
  <blockquote class="story-hero__quote">
    <p class="lang-zh">"每一次注视都是一次对话，但我们还不会倾听"</p>
    <p class="lang-en">"Every gaze is a conversation — we just haven't learned to listen"</p>
  </blockquote>
  <h1>王以俨 / Yiyan Wang</h1>
  <span class="story-hero__tagline">PhD · Southeast University · Eye Tracking × HCI</span>
  <div class="story-hero__lede">
    <p class="lang-zh">我的核心研究问题：如何让计算机像理解手指点击一样，精确理解人眼的意图？</p>
    <p class="lang-en">My core research question: How can computers understand gaze intent as precisely as they understand a finger tap?</p>
  </div>
  <div class="quick-links quick-links--hero">...</div>
</section>
```

### § 2  The Approach — 三条路径

**内容**：
- 三张等宽卡片，分别代表研究的三个层面
- 每张卡片：图标 + 层级名 + 2 行描述 + 关键工具/平台
- 底部一句话将三者串联起来

**为什么这样设计**：
方案 A 用 bullet list 列研究兴趣，信息等价但缺乏结构感。
三卡片布局暗示研究的**系统性**——从感知到交互到智能，是一个完整的技术栈。
这对评委和合作者传递了"这不是零散的点子，而是一个有架构的研究议程"。

**交互**：卡片 hover 时微微上浮（`translateY(-4px)`），不需要更多。

### § 3  The Evidence — 数字 + 代表作

**内容**：
- 顶部三个统计数字（论文数、专利数、在审数），大字体
- 下方 2 篇代表作卡片（只展示最重要的 AEI 论文）
- "查看全部"链接

**为什么这样设计**：
方案 A 用 3 张 publication cards 平铺展示。方案 C 先用数字建立"量感"，
再用 2 篇精选代表作建立"质感"。数字在上、作品在下，形成"概览→深入"的阅读节奏。

**关键设计**：统计数字区域不用卡片包裹，直接用大号数字 + 小号标签，
参考 Stripe/Linear 的 metrics 展示风格，干净有力。

### § 4  What's Next — 未来展望

**内容**：
- 一句展望性引言
- 当前在审论文列表（4 篇，带期刊名）
- 两个 CTA 按钮：联系合作 / 下载简历

**为什么这样设计**：
方案 A 没有"展望"板块。但对于博士生，在审论文和未来方向同样重要——
它们告诉评委"这个人还在持续产出"。
放在最后也符合叙事结构：问题→方法→成果→**下一步**。

---

## 视觉与交互设计

### 布局节奏

采用**交替节奏**的全宽分段布局，每个 section 之间用大留白分隔（`padding: 5rem 0`），
不用分割线，靠空间感区分。

```css
.story-section {
  padding: 5rem 2rem;
  max-width: 52rem;       /* 阅读舒适宽度 */
  margin: 0 auto;
}

.story-section:nth-child(even) {
  background: var(--surface-2, #f3ece1);  /* 偶数段微加深底色 */
}
```

### 引言样式

开场引言用大字 + 衬线体，与正文形成反差：

```css
.story-hero__quote {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-style: italic;
  color: var(--accent-500, #3d7c8f);
  text-align: center;
  border: none;             /* 去掉 blockquote 默认边线 */
  padding: 0;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(1rem); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### 统计数字动效

数字区域使用 CSS counter 或 JS `IntersectionObserver` + 简单计数动画：

```css
.evidence-stat__number {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--accent-500, #3d7c8f);
  line-height: 1;
}

.evidence-stat__label {
  font-size: 0.85rem;
  color: var(--text-2, #6b5e57);
  margin-top: 0.25rem;
}

.evidence-stat__sub {
  font-size: 0.75rem;
  color: var(--accent-500, #3d7c8f);
  font-weight: 600;
}
```

### 研究路径卡片

三列等宽，移动端堆叠。不用阴影，用细边框 + hover 上浮：

```css
.approach-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .approach-grid { grid-template-columns: 1fr; }
}

.approach-card {
  padding: 2rem 1.5rem;
  border: 1px solid var(--border-1, #e0d5c8);
  border-radius: 0.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.approach-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
}

.approach-card__icon {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}
```

### 滚动揭示

精简动画。只在首次进入视口时触发一次 `fadeInUp`，不做反复。
整页只有 4 个 section，每个 section 作为一个触发单元（不是每个子元素都触发）：

```js
// 简化版，仅 4 个 section 级别触发
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.story-section').forEach(el => observer.observe(el));
```

---

## 色彩与字体建议

### 色彩

保持现有暖色系统不变，追加一个**引言专用色**：

| 用途       | 变量              | 色值      | 说明                   |
|-----------|-------------------|----------|------------------------|
| 引言文字   | `--quote-color`   | `#3d7c8f` | 复用 accent，强调引言   |
| 偶数段底色 | `--surface-2`     | `#f3ece1` | 比 surface-1 深一级     |
| 统计数字   | `--stat-color`    | `#3d7c8f` | 复用 accent             |
| 标签辅助色 | `--text-3`        | `#9a8d84` | 比 text-2 再浅，用于次要标签 |

暗色模式下 `--surface-2` 对应 `#2a2522`（现有深色底色微加亮）。

### 字体

- **引言**：`'Noto Serif SC'` / `'Georgia'`（衬线，制造与正文的视觉反差）
- **正文**：保持现有无衬线体
- **统计数字**：正文字体 + `font-variant-numeric: tabular-nums`（等宽数字对齐）

不引入额外 webfont，`Noto Serif SC` 已在 Google Fonts CDN 广泛可用，
一个 `<link>` 即可加载。如果不想加载可以直接 fallback 到 Georgia。

---

## 与 Jekyll/academicpages 框架的兼容性

1. **about.md 改写**：所有 section 用 raw HTML 写在 about.md 中（与当前做法一致）
2. **data-i18n 双语切换**：每段都保留 `lang-zh` / `lang-en` 或 `data-i18n-zh/en` 模式
3. **Publications 数据**：代表作卡片仍从 `site.publications` 动态渲染，只是 `limit:2`
4. **CSS**：所有新样式追加到 `_sass/` 下的自定义文件（如 `_story-homepage.scss`）
5. **JS**：IntersectionObserver 放入现有的自定义 JS 文件中

---

## 与方案 A 的对比总结

| 维度         | 方案 A（极简学术风）         | 方案 C（叙事驱动）              |
|-------------|---------------------------|-------------------------------|
| 首屏印象     | 名字 + 标签 + 链接          | 引言 + 问题 + 身份              |
| 信息组织     | 分类罗列（兴趣/新闻/论文）   | 叙事线（问题→方法→证据→展望）    |
| 研究兴趣展示 | bullet list                | 三路径卡片（暗示系统性）          |
| 论文展示     | 3 卡片平铺                  | 数字概览 + 2 精选代表作          |
| 未来感       | 无                         | "What's Next" + 在审论文        |
| 适合受众     | 本领域同行（快速扫描）       | 跨领域评审、合作者、企业方        |
| 情感调性     | 冷静、专业                  | 有温度、有主张                   |
| 实现复杂度   | 低（纯静态文本）             | 中（多一组卡片样式 + 数字动效）   |

---

## 实施步骤（建议顺序）

1. 改写 `about.md`，替换现有 9 个 section 为 4 个 story-section
2. 新建 `_sass/_story-homepage.scss`，编写上述样式
3. 在 `_sass/main.scss`（或等价入口）中 `@import "story-homepage"`
4. 调整 IntersectionObserver 逻辑
5. 测试双语切换、暗色模式、移动端响应式
6. 精选 2 篇代表作的"一句话摘要"文案（需要手动撰写）
