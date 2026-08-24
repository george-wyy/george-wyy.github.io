---
layout: archive
title: "论文成果"
title_en: "Publications"
permalink: /publications/
author_profile: true
---

<p class="lang-zh">
本页汇总已公开的期刊/会议论文、专著、发明专利与软件著作权。为遵循学术规范，未公开内容不在此展示。
</p>
<p class="lang-en">
This page lists published papers, monographs, patents, and registered software. Unpublished work is intentionally omitted.
</p>

<p>
  <a href="https://scholar.google.com/citations?user=Qu9RMQsAAAAJ">Google Scholar</a> |
  <a href="https://www.researchgate.net/profile/Yiyan-Wang-7">ResearchGate</a> |
  <a href="https://orcid.org/0009-0002-0787-0730">ORCID</a>
</p>

{% assign papers = site.publications | where: "type", "paper" | sort: "date" | reverse %}
{% assign patents = site.publications | where: "type", "patent" | sort: "date" | reverse %}
{% assign software = site.publications | where: "type", "software" | sort: "date" | reverse %}
{% assign books = site.publications | where: "type", "book" | sort: "date" | reverse %}

## <span data-i18n-zh="统计" data-i18n-en="Statistics">统计</span>

<ul class="lang-zh">
  <li>已公开论文：{{ papers | size }}　|　专著：{{ books | size }}（参编）　|　专利：{{ patents | size }}　|　软件著作权：{{ software | size }}</li>
  <li>在审 / 在投论文：4</li>
</ul>
<ul class="lang-en">
  <li>Published papers: {{ papers | size }}　|　Monograph: {{ books | size }} (contributing author)　|　Patents: {{ patents | size }}　|　Registered software: {{ software | size }}</li>
  <li>Under review / submitted: 4</li>
</ul>

## <span data-i18n-zh="在审 / 在投论文" data-i18n-en="Under Review / Submitted">在审 / 在投论文</span>

<div class="paper-grid">
  <article class="paper-card">
    <p class="paper-meta">ACM TOCHI</p>
    <h4>Gaze2Foot: Foot Primitives and Stabilization Mechanisms for Gaze-Foot Target Selection Across Postures</h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">ACM Transactions on Computer-Human Interaction</span>
      <span class="paper-tag paper-tag--status paper-tag--reviewing" data-i18n-zh="一作 · 在审" data-i18n-en="First author · Under Review">一作 · 在审</span>
    </div>
  </article>
  <article class="paper-card">
    <p class="paper-meta">Virtual Reality</p>
    <h4>SPMark: Improving Small-Target Text Selection with Smooth-Pursuit Gaze Interaction in Hybrid Paper&ndash;Digital Environments</h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">Virtual Reality (Springer)</span>
      <span class="paper-tag paper-tag--status paper-tag--reviewing" data-i18n-zh="一作 · 一审修回，评审中" data-i18n-en="First author · Revised, under review">一作 · 一审修回，评审中</span>
    </div>
  </article>
  <article class="paper-card">
    <p class="paper-meta">IJHCI</p>
    <h4>Gaze Localizes, the Head Confirms: Staged Head&ndash;Eye Coordination for Hands-Free Selection in Dense AR</h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">International Journal of Human&ndash;Computer Interaction</span>
      <span class="paper-tag paper-tag--status paper-tag--reviewing" data-i18n-zh="一作 · 在审" data-i18n-en="First author · Under Review">一作 · 在审</span>
    </div>
  </article>
  <article class="paper-card">
    <p class="paper-meta">Opto-Electronic Advances</p>
    <h4>Gaze-Driven Topological Phase-Transition Metasurfaces</h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">Opto-Electronic Advances</span>
      <span class="paper-tag paper-tag--status paper-tag--reviewing" data-i18n-zh="共同一作 · 大修" data-i18n-en="Co-first author · Major Revision">共同一作 · 大修</span>
    </div>
  </article>
</div>

## <span data-i18n-zh="期刊与会议论文" data-i18n-en="Journal and Conference Papers">期刊与会议论文</span>

{% include base_path %}

<div class="publication-list">
{% for post in papers %}
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

## <span data-i18n-zh="专著" data-i18n-en="Monograph">专著</span>

<div class="publication-list">
{% for post in books %}
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

## <span data-i18n-zh="发明专利与实用新型" data-i18n-en="Patents">发明专利与实用新型</span>

<p class="lang-zh">以下专利均已公开或授权，可在国家知识产权局 / 万方数据检索核验。</p>
<p class="lang-en">All patents below are published or granted, and can be verified via CNIPA / WanFang Data.</p>

<div class="publication-list">
{% for post in patents %}
  <div class="pub-item">
    <span class="pub-year">{{ post.date | date: "%Y" }}</span>
    <div class="pub-body">
      <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
      {% if post.citation %}<p class="pub-citation">{{ post.citation | strip_html }}</p>{% endif %}
    </div>
  </div>
{% endfor %}
</div>

<p class="lang-zh">另有 2 项眼动追踪 / 眼控交互发明专利正在与代理修改中，尚未取得受理号。</p>
<p class="lang-en">2 further eye-tracking invention patents are in revision with the patent agent and have not yet been assigned application numbers.</p>

## <span data-i18n-zh="软件著作权" data-i18n-en="Registered Software">软件著作权</span>

<div class="publication-list">
{% for post in software %}
  <div class="pub-item">
    <span class="pub-year">{{ post.date | date: "%Y" }}</span>
    <div class="pub-body">
      <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
      {% if post.citation %}<p class="pub-citation">{{ post.citation | strip_html }}</p>{% endif %}
    </div>
  </div>
{% endfor %}
</div>
