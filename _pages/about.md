---
permalink: /
title: "王以俨"
title_en: "Yiyan Wang"
excerpt: "东南大学机械工程博士生，研究眼动交互与 AR/VR。Gaze interaction and AR/VR research at Southeast University."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="profile-hero profile-hero--immersive reveal-on-scroll">
  <div class="profile-hero__content">
    <span class="profile-tagline">PhD Student · Gaze Interaction &amp; XR</span>
    <div class="profile-hero__lede">
      <p class="lang-zh">我是东南大学机械工程学院的机械工程博士生，导师为<a class="hero-link" href="https://me.seu.edu.cn/nyf_31777/list.htm">牛亚峰教授</a>。我研究如何利用视线进行交互，关注 AR/VR 中的目标选择、多通道协同与用户体验。</p>
      <p class="lang-en">I am a PhD student in Mechanical Engineering at <a class="hero-link" href="https://www.seu.edu.cn">Southeast University</a>, supervised by <a class="hero-link" href="https://me.seu.edu.cn/nyf_31777/list.htm">Prof. Yafeng Niu</a>. I study gaze interaction, with a focus on target selection, multimodal input, and user experience in AR/VR.</p>
    </div>
  </div>
  <div class="profile-hero__actions quick-links quick-links--hero" role="group" aria-label="Quick links">
    <a class="quick-links__primary" href="{{ '/cv/' | relative_url }}" data-i18n-zh="简历（CV）" data-i18n-en="Curriculum Vitae">简历（CV）</a>
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
      <li>凝视与平滑追踪交互</li>
      <li>眼动与手、头等输入通道的协同</li>
      <li>AR/VR 交互设计与用户研究</li>
    </ul>
    <ul class="lang-en">
      <li>Gaze and smooth-pursuit interaction</li>
      <li>Coordination of gaze with hand and head input</li>
      <li>Interaction design and user studies in AR/VR</li>
    </ul>
  </div>
</section>

<section class="homepage-section homepage-section--projects">
  <h2 data-i18n-zh="精选项目" data-i18n-en="Selected Projects">精选项目</h2>
  {% assign featured_projects = site.portfolio | where: 'featured', true | sort: 'project_order' %}
  <div class="project-catalog project-catalog--featured">{% for project in featured_projects %}{% include project-summary.html project=project %}{% endfor %}</div>
  <p><a href="{{ '/projects/' | relative_url }}" data-i18n-zh="查看全部项目" data-i18n-en="View all projects">查看全部项目</a></p>
</section>

<section class="homepage-section homepage-section--news">
  <h2 data-i18n-zh="最新动态" data-i18n-en="News">最新动态</h2>
  <ul class="news-list">
    <li><span class="news-date">2026.10</span><span class="lang-zh">眼动驱动超表面合作论文被 <em>Opto-Electronic Advances</em> 接收，共同第一作者（3 位共同一作中第 2 位）。</span><span class="lang-en">Our paper on gaze-driven metasurfaces was accepted by <em>Opto-Electronic Advances</em>. Co-first author (second of three equal contributors).</span></li>
    <li><span class="news-date">2026.09</span><span class="lang-zh">SPMark 被 <em>Virtual Reality</em> 接收，研究混合纸与数字环境中的平滑追踪文本选择。</span><span class="lang-en">SPMark was accepted by <em>Virtual Reality</em>, studying smooth-pursuit text selection in hybrid paper–digital environments.</span></li>
    <li><span class="news-date">2026.09</span><span class="lang-zh">眼手级联交互合作论文发表于 <em>Advanced Engineering Informatics</em>。</span><span class="lang-en">Our work on gaze–hand cascaded interaction appeared in <em>Advanced Engineering Informatics</em>.</span></li>
    <li><span class="news-date">2026.08</span><span class="lang-zh">Take-A-Look 发表于 <em>Computers in Industry</em>，探索工业 VR 中的远距离目标交互。</span><span class="lang-en">Take-A-Look appeared in <em>Computers in Industry</em>, exploring distant-target interaction in industrial VR.</span></li>
  </ul>
</section>

<section class="homepage-section homepage-section--papers">
  <h2 data-i18n-zh="近期论文" data-i18n-en="Recent Publications">近期论文</h2>
  <div class="paper-grid">
  {% assign recent_papers = site.data.cv.papers | slice: 0, 3 %}
  {% for paper in recent_papers %}
    <article class="paper-card">
      <p class="paper-meta">{% if paper.status == 'accepted' %}{{ paper.accepted_date | date: "%Y-%m" }}{% else %}{{ paper.year }}{% endif %}</p>
      <h3>{% if paper.doi %}<a href="https://doi.org/{{ paper.doi }}">{% endif %}{{ paper.title | default: paper.title_zh | escape }}{% if paper.doi %}</a>{% endif %}</h3>
      <p><em>{{ paper.venue | escape }}</em></p>
      <p data-i18n-zh="{{ paper.role.zh }}" data-i18n-en="{{ paper.role.en }}">{{ paper.role.zh }}</p>
      {% if paper.status == 'accepted' %}<span class="paper-tag paper-tag--accepted" data-i18n-zh="已接收待刊" data-i18n-en="Accepted / In press">已接收待刊</span>{% else %}<span class="paper-tag" data-i18n-zh="已发表" data-i18n-en="Published">已发表</span>{% endif %}
    </article>
  {% endfor %}
  </div>
  <p style="text-align:center; margin-top:1.5rem;">
    <a href="/publications/" data-i18n-zh="查看全部论文" data-i18n-en="View all publications">查看全部论文</a>
  </p>
</section>
