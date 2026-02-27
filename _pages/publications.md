---
layout: archive
title: "论文成果"
title_en: "Publications"
permalink: /publications/
author_profile: true
---

<p class="lang-zh">
本页汇总已公开论文与阶段性研究产出。为遵循学术规范，未公开内容不在此展示。
</p>
<p class="lang-en">
This page summarizes published papers and public research outputs. Unpublished content is intentionally omitted.
</p>

<p>
  <a href="{{ author.googlescholar }}">Google Scholar</a> |
  <a href="{{ author.researchgate }}">ResearchGate</a>
</p>

{% assign total_publications = site.publications | size %}

## <span data-i18n-zh="统计" data-i18n-en="Statistics">统计</span>

<ul class="lang-zh">
  <li>公开论文条目：{{ total_publications }}</li>
  <li>审稿中（仅展示题目与期刊）：2</li>
</ul>
<ul class="lang-en">
  <li>Public publication entries: {{ total_publications }}</li>
  <li>Under review (title and venue only): 2</li>
</ul>

## <span data-i18n-zh="审稿中" data-i18n-en="Under Review">审稿中</span>

<div class="paper-grid">
  <article class="paper-card">
    <p class="paper-meta">IJHCS</p>
    <h4>Eye-Head Interaction for Efficient Text Entry</h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">International Journal of Human-Computer Studies</span>
      <span class="paper-tag paper-tag--status paper-tag--reviewing">审稿中 / Under Review</span>
    </div>
  </article>
  <article class="paper-card">
    <p class="paper-meta">Virtual Reality</p>
    <h4>Smooth Pursuit Text Entry via Gaze-Based Curve Tracing</h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">Virtual Reality</span>
      <span class="paper-tag paper-tag--status paper-tag--reviewing">审稿中 / Under Review</span>
    </div>
  </article>
</div>

## <span data-i18n-zh="已公开论文" data-i18n-en="Published and Public Entries">已公开论文</span>

{% include base_path %}

<div class="wide-grid publication-entries">
{% for post in site.publications reversed %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>
