---
layout: single
permalink: /research/
title: "研究方向"
title_en: "Research"
author_profile: true
---

<p class="lang-zh">我研究眼动交互的设计与评估：如何用视线选择目标，如何与其他输入通道配合，以及如何通过实验改善交互体验。</p>
<p class="lang-en">I design and evaluate gaze interaction: how people select targets with their eyes, combine gaze with other input, and use these techniques in practice.</p>

## <span data-i18n-zh="研究主题" data-i18n-en="Research Topics">研究主题</span>

<ul class="lang-zh">
  <li><strong>凝视与平滑追踪</strong>：研究目标尺寸、运动速度与触发方式对选择表现的影响。</li>
  <li><strong>多通道协同</strong>：结合视线与手、头等输入，改善目标定位与确认。</li>
  <li><strong>AR/VR 交互</strong>：搭建交互原型，通过用户实验评估效率、准确率与使用体验。</li>
  <li><strong>眼动追踪系统</strong>：开发瞳孔检测、注视校准与数据分析工具。</li>
</ul>
<ul class="lang-en">
  <li><strong>Gaze and smooth pursuit</strong>: studying how target size, movement speed, and activation methods affect selection.</li>
  <li><strong>Multimodal input</strong>: combining gaze with hand and head input for target localization and confirmation.</li>
  <li><strong>AR/VR interaction</strong>: building prototypes and evaluating efficiency, accuracy, and user experience through experiments.</li>
  <li><strong>Eye-tracking systems</strong>: developing pupil detection, gaze calibration, and data analysis tools.</li>
</ul>

## <span data-i18n-zh="精选项目" data-i18n-en="Selected Projects">精选项目</span>

{% for post in site.portfolio reversed limit:3 %}
<div class="highlight-card" style="margin-bottom:1rem;">
  <strong><a href="{{ post.url | prepend: site.baseurl }}" data-i18n-zh="{{ post.title }}" data-i18n-en="{{ post.title_en | default: post.title }}">{{ post.title }}</a></strong>
  <span class="lang-zh">{{ post.excerpt | strip_html | truncate: 100 }}</span>
  <span class="lang-en">{{ post.summary_en | default: post.excerpt_en | default: post.excerpt | strip_html | truncate: 100 }}</span>
</div>
{% endfor %}

<p><a href="{{ '/publications/' | relative_url }}" data-i18n-zh="查看相关论文" data-i18n-en="See related publications">查看相关论文</a></p>
