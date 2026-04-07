---
permalink: /
title: "王以俨"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="profile-hero profile-hero--immersive reveal-on-scroll">
  <div class="profile-hero__content">
    <span class="profile-tagline">PhD Student · XR + Eye Tracking</span>
    <div class="profile-hero__lede">
      <p class="lang-zh">我目前就读于 <a class="hero-link" href="https://www.seu.edu.cn">东南大学</a> 机械工程学院设计科学系，导师为
      <a class="hero-link" href="https://me.seu.edu.cn/nyf_31777/list.htm">牛亚峰老师</a>。研究方向聚焦于眼控交互、增强现实、虚拟现实与人机交互系统。</p>
      <p class="lang-en">I am a PhD student in Design Science at the School of Mechanical Engineering, <a class="hero-link" href="https://www.seu.edu.cn">Southeast University</a>, supervised by
      <a class="hero-link" href="https://me.seu.edu.cn/nyf_31777/list.htm">Prof. Yafeng Niu</a>. My research focuses on eye-controlled interaction, AR/VR, and human-computer interaction systems.</p>
    </div>
  </div>
  <div class="profile-hero__actions quick-links quick-links--hero" role="group" aria-label="Quick links">
    <a class="quick-links__primary" href="/assets/Curriculum_Vitae.pdf" data-i18n-zh="简历（CV）" data-i18n-en="Curriculum Vitae">简历（CV）</a>
    <a href="mailto:wangyiyan@seu.edu.cn">Email</a>
    <a href="https://github.com/george-wyy">GitHub</a>
    <a href="https://scholar.google.com/citations?user=Qu9RMQsAAAAJ">Google Scholar</a>
    <a href="https://www.researchgate.net/profile/Yiyan-Wang-7">ResearchGate</a>
  </div>
</section>

<section class="homepage-section homepage-section--interests">
  <h2 data-i18n-zh="研究兴趣" data-i18n-en="Research Interests">研究兴趣</h2>
  <div class="interest-grid">
    <ul class="lang-zh">
      <li>眼控交互（Eye-Control Interaction）</li>
      <li>AR/VR 场景中的可用性与交互效率优化</li>
      <li>人机交互中的机器学习方法</li>
    </ul>
    <ul class="lang-en">
      <li>Eye-controlled interaction</li>
      <li>Usability and interaction-efficiency optimization in AR/VR</li>
      <li>Machine learning methods in HCI</li>
    </ul>
  </div>
</section>

<section class="homepage-section homepage-section--news">
  <h2 data-i18n-zh="最新动态" data-i18n-en="News">最新动态</h2>
  <ul class="news-list">
    <li>
      <span class="news-date">2025.02</span>
      <span class="lang-zh">综述论文"基于设计工效学的眼控交互范式设计研究现状与进展"被《包装工程》接收</span>
      <span class="lang-en">Review paper on eye-control interaction paradigm design accepted by Packaging Engineering</span>
    </li>
    <li>
      <span class="news-date">2025.01</span>
      <span class="lang-zh">Fisheye expansion 论文发表于 Advanced Engineering Informatics</span>
      <span class="lang-en">Fisheye expansion paper published in Advanced Engineering Informatics</span>
    </li>
    <li>
      <span class="news-date">2025.01</span>
      <span class="lang-zh">论文投稿至 ACM ToCHI (Gaze2Foot) 和 Science Advances (ECSF)</span>
      <span class="lang-en">Papers submitted to ACM ToCHI (Gaze2Foot) and Science Advances (ECSF)</span>
    </li>
    <li>
      <span class="news-date">2024.10</span>
      <span class="lang-zh">2 项眼动追踪相关发明专利申请提交</span>
      <span class="lang-en">2 eye-tracking invention patents filed</span>
    </li>
  </ul>
</section>

<section class="homepage-section homepage-section--papers">
  <h2 data-i18n-zh="近期论文" data-i18n-en="Recent Publications">近期论文</h2>
  <div class="paper-grid">
  {% assign latest_papers = site.publications | sort: "date" | reverse %}
  {% for post in latest_papers limit:3 %}
    {% assign journal = post.venue | default: "" | strip %}
    {% if journal == "" and post.citation %}
      {% assign citation_text = post.citation | strip_html %}
      {% assign citation_parts = citation_text | split: ". " %}
      {% assign journal = citation_parts | last | strip %}
      {% assign journal = journal | split: "【" | first | split: "[" | first | strip %}
    {% endif %}
    {% if journal == "" %}{% assign journal = "期刊/会议未标注" %}{% endif %}
    <article class="paper-card reveal-on-scroll">
      <p class="paper-meta">{{ post.date | date: "%Y-%m" }}</p>
      <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
      <div class="paper-tags">
        <span class="paper-tag paper-tag--journal">{{ journal | truncate: 30 }}</span>
      </div>
      {% if post.citation %}
        <p>{{ post.citation | strip_html | truncate: 140 }}</p>
      {% else %}
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      {% endif %}
      <a class="paper-link" href="{{ post.url | prepend: site.baseurl }}" data-i18n-zh="查看详情" data-i18n-en="View Details">查看详情</a>
    </article>
  {% endfor %}
  </div>
  <p style="text-align:center; margin-top:1.5rem;">
    <a href="/publications/" data-i18n-zh="→ 查看全部论文" data-i18n-en="→ View all publications">→ 查看全部论文</a>
  </p>
</section>
