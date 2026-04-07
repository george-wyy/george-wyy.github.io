---
layout: single
permalink: /research/
title: "研究方向"
title_en: "Research"
author_profile: true
---

<p class="lang-zh">我的研究聚焦于眼动交互（Eye Tracking Interaction）与人机交互（HCI），关注如何让交互系统更自然、更高效、更可解释。</p>
<p class="lang-en">My research focuses on eye-tracking interaction and HCI, with the goal of building interaction systems that are natural, efficient, and interpretable.</p>

## <span data-i18n-zh="核心研究主题" data-i18n-en="Core Research Topics">核心研究主题</span>

<ul class="lang-zh">
  <li><strong>眼动交互</strong>：凝视触发、平滑追踪、眼手协同交互。</li>
  <li><strong>AR/VR 交互系统</strong>：面向沉浸式场景的人机协作与可用性优化。</li>
  <li><strong>注意力与认知信号</strong>：基于瞳孔与眼动特征建模用户状态。</li>
  <li><strong>交互算法优化</strong>：提高鲁棒性、精度与实时性能。</li>
</ul>

<ul class="lang-en">
  <li><strong>Eye-Tracking Interaction</strong>: gaze triggering, smooth pursuit, and eye-hand coordination.</li>
  <li><strong>AR/VR Interactive Systems</strong>: human-machine collaboration and usability optimization in immersive settings.</li>
  <li><strong>Attention and Cognitive Signals</strong>: user-state modeling from pupil and gaze features.</li>
  <li><strong>Interaction Algorithm Optimization</strong>: improving robustness, accuracy, and real-time performance.</li>
</ul>

## <span data-i18n-zh="当前公开研究方向" data-i18n-en="Currently Public Research Directions">当前公开研究方向</span>

<div class="highlight-grid">
  <div class="highlight-card">
    <strong data-i18n-zh="眼头协同输入" data-i18n-en="Eye-Head Interaction">眼头协同输入</strong>
    <span class="lang-zh">探索眼头协同策略在文本输入和目标选择任务中的效率提升。</span>
    <span class="lang-en">Investigating eye-head coordination for improving efficiency in text entry and target selection.</span>
  </div>
  <div class="highlight-card">
    <strong data-i18n-zh="平滑追踪交互" data-i18n-en="Smooth Pursuit Interaction">平滑追踪交互</strong>
    <span class="lang-zh">研究平滑追踪在复杂界面中的输入稳定性与容错机制。</span>
    <span class="lang-en">Studying smooth-pursuit input stability and error tolerance in complex interfaces.</span>
  </div>
  <div class="highlight-card">
    <strong data-i18n-zh="眼控系统设计" data-i18n-en="Eye-Control System Design">眼控系统设计</strong>
    <span class="lang-zh">结合实验与系统实现，形成可复用的眼控交互设计建议。</span>
    <span class="lang-en">Combining empirical studies and system implementation into reusable design recommendations.</span>
  </div>
</div>

## <span data-i18n-zh="精选项目" data-i18n-en="Selected Projects">精选项目</span>

{% for post in site.portfolio reversed limit:3 %}
<div class="highlight-card" style="margin-bottom:1rem;">
  <strong><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></strong>
  <span class="lang-zh">{{ post.excerpt | strip_html | truncate: 100 }}</span>
  <span class="lang-en">{{ post.excerpt_en | default: post.excerpt | strip_html | truncate: 100 }}</span>
</div>
{% endfor %}

## <span data-i18n-zh="目标会议与期刊" data-i18n-en="Target Venues">目标会议与期刊</span>

<p class="lang-zh">IEEE VR, CHI, IJHCI, IJHCS, Advanced Engineering Informatics</p>
<p class="lang-en">IEEE VR, CHI, IJHCI, IJHCS, Advanced Engineering Informatics</p>

## <span data-i18n-zh="研究原则" data-i18n-en="Research Principles">研究原则</span>

<ol class="lang-zh">
  <li>问题导向：优先解决真实交互场景中的关键痛点。</li>
  <li>实验与工程并重：从可验证实验走向可部署系统。</li>
  <li>公开透明：仅展示已公开、已发表或可公开披露内容。</li>
</ol>

<ol class="lang-en">
  <li>Problem-driven: prioritize real bottlenecks in practical interaction scenarios.</li>
  <li>Balanced methodology: combine empirical validation with deployable engineering.</li>
  <li>Public-first: only present published or publicly shareable content.</li>
</ol>
