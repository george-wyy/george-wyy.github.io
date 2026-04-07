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
  <a href="https://scholar.google.com/citations?user=Qu9RMQsAAAAJ">Google Scholar</a> |
  <a href="https://www.researchgate.net/profile/Yiyan-Wang-7">ResearchGate</a> |
  <a href="https://orcid.org/0009-0002-0787-0730">ORCID</a>
</p>

{% assign total_publications = site.publications | size %}

## <span data-i18n-zh="统计" data-i18n-en="Statistics">统计</span>

<ul class="lang-zh">
  <li>公开论文条目：{{ total_publications }}</li>
  <li>投稿中：4</li>
</ul>
<ul class="lang-en">
  <li>Public publication entries: {{ total_publications }}</li>
  <li>Under review / submitted: 4</li>
</ul>

## <span data-i18n-zh="投稿中 / 审稿中" data-i18n-en="Under Review / Submitted">投稿中 / 审稿中</span>

<div class="paper-grid">
  <article class="paper-card">
    <p class="paper-meta">ToCHI</p>
    <h4>Gaze2Foot: Foot Primitives and Stabilization Mechanisms for Gaze-Foot Target Selection Across Postures</h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">ACM Transactions on Computer-Human Interaction</span>
      <span class="paper-tag paper-tag--status paper-tag--reviewing" data-i18n-zh="投稿中" data-i18n-en="Submitted">投稿中</span>
    </div>
  </article>
  <article class="paper-card">
    <p class="paper-meta">Science Advances</p>
    <h4>Eye-Actuated Cognitive Control of Programmable Metasurfaces</h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">Science Advances</span>
      <span class="paper-tag paper-tag--status paper-tag--reviewing" data-i18n-zh="投稿中" data-i18n-en="Submitted">投稿中</span>
    </div>
  </article>
  <article class="paper-card">
    <p class="paper-meta">IJHCS</p>
    <h4>Eye-Head Interaction for Efficient Text Entry</h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">International Journal of Human-Computer Studies</span>
      <span class="paper-tag paper-tag--status paper-tag--reviewing" data-i18n-zh="同行评审中" data-i18n-en="Peer Review">同行评审中</span>
    </div>
  </article>
  <article class="paper-card">
    <p class="paper-meta">Virtual Reality</p>
    <h4>Smooth Pursuit Text Entry via Gaze-Based Curve Tracing</h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">Virtual Reality</span>
      <span class="paper-tag paper-tag--status paper-tag--reviewing" data-i18n-zh="With Editor" data-i18n-en="With Editor">With Editor</span>
    </div>
  </article>
</div>

## <span data-i18n-zh="已公开论文" data-i18n-en="Published and Public Entries">已公开论文</span>

{% include base_path %}

<div class="publication-list">
{% for post in site.publications reversed %}
  <div class="pub-item">
    <span class="pub-year">{{ post.date | date: "%Y" }}</span>
    <div class="pub-body">
      <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
      {% if post.citation %}<p class="pub-citation">{{ post.citation | strip_html }}</p>{% endif %}
      {% if post.venue and post.venue != "" %}<span class="paper-tag paper-tag--journal">{{ post.venue }}</span>{% endif %}
    </div>
  </div>
{% endfor %}
</div>
