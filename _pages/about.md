---
layout: immersive-home
permalink: /
title: "王以俨"
title_en: "Yiyan Wang"
excerpt: "Researcher · HCI Designer · XR Designer"
redirect_from:
  - /about/
  - /about.html
---

<section class="home-v2 home-v2-hero">
  <div class="home-v2-hero__intro reveal-on-scroll">
    <p class="home-kicker">Researcher · HCI Designer · XR Designer</p>
    <h1 data-i18n-zh="王以俨：面向人机协作的眼动与XR交互设计" data-i18n-en="Yiyan Wang: Eye-Tracking and XR Interaction for Human-Machine Collaboration">王以俨：面向人机协作的眼动与XR交互设计</h1>
    <p class="lang-zh">我在东南大学进行博士研究，关注眼动交互、XR系统与可解释的人机协作体验。当前阶段先搭建稳定、可扩展的个人站点框架，再逐步更新最新研究内容。</p>
    <p class="lang-en">I am a PhD researcher at Southeast University, focusing on eye-tracking interaction, XR systems, and explainable human-machine collaboration. At this stage, I am building a robust and extensible website framework first, then iteratively updating the latest content.</p>
    <div class="home-v2-hero__actions">
      <a class="home-btn" href="/portfolio/" data-i18n-zh="查看项目" data-i18n-en="View Works">查看项目</a>
      <a class="home-btn home-btn--ghost" href="/publications/" data-i18n-zh="查看论文" data-i18n-en="View Publications">查看论文</a>
      <a class="home-btn home-btn--ghost" href="/cv_new/" data-i18n-zh="查看简历" data-i18n-en="View CV">查看简历</a>
    </div>
  </div>
  <aside class="home-v2-hero__panel reveal-on-scroll">
    <h3 data-i18n-zh="当前焦点" data-i18n-en="Current Focus">当前焦点</h3>
    <ul class="lang-zh">
      <li>眼控交互中的效率与鲁棒性优化</li>
      <li>XR场景下的多通道人机协作机制</li>
      <li>研究型原型到可演示系统的转化</li>
    </ul>
    <ul class="lang-en">
      <li>Efficiency and robustness optimization in gaze interaction</li>
      <li>Multi-channel collaboration mechanisms in XR scenarios</li>
      <li>Translating research prototypes into demo-ready systems</li>
    </ul>
  </aside>
</section>

<section class="home-v2 home-v2-section">
  <header class="home-v2-section__head">
    <h2 data-i18n-zh="能力板块" data-i18n-en="Capability Areas">能力板块</h2>
  </header>
  <div class="capability-grid">
    <article class="capability-card reveal-on-scroll">
      <h3>HCI</h3>
      <p class="lang-zh">交互机制设计、实验评估、可用性优化。</p>
      <p class="lang-en">Interaction strategy design, empirical evaluation, and usability optimization.</p>
    </article>
    <article class="capability-card reveal-on-scroll">
      <h3>XR Design</h3>
      <p class="lang-zh">VR/AR任务流程设计、空间交互原型实现。</p>
      <p class="lang-en">Task flow design in VR/AR and spatial interaction prototyping.</p>
    </article>
    <article class="capability-card reveal-on-scroll">
      <h3>Eye Tracking</h3>
      <p class="lang-zh">凝视触发、平滑追踪、眼手协同策略。</p>
      <p class="lang-en">Gaze triggering, smooth pursuit, and eye-hand coordination.</p>
    </article>
    <article class="capability-card reveal-on-scroll">
      <h3>Prototyping</h3>
      <p class="lang-zh">Unity/Python驱动的研究原型与验证系统。</p>
      <p class="lang-en">Unity/Python-driven research prototypes and validation systems.</p>
    </article>
  </div>
</section>

<section class="home-v2 home-v2-section">
  <header class="home-v2-section__head">
    <h2 data-i18n-zh="精选项目" data-i18n-en="Featured Works">精选项目</h2>
    <a href="/portfolio/" data-i18n-zh="查看全部" data-i18n-en="See All">查看全部</a>
  </header>
  <div class="home-card-grid home-card-grid--works">
    {% for post in site.portfolio reversed limit:6 %}
      {% assign cover = post.excerpt | split:"<img src='" | last | split:"'" | first %}
      <article class="home-card reveal-on-scroll">
        <a class="home-card__media" href="{{ post.url | prepend: site.baseurl }}">
          {% if cover contains "http" %}
            <img src="{{ cover }}" alt="{{ post.title }}">
          {% else %}
            <img src="/images/foo-bar-identity.jpg" alt="{{ post.title }}">
          {% endif %}
        </a>
        <div class="home-card__body">
          <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | truncate: 92 }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-v2 home-v2-section">
  <header class="home-v2-section__head">
    <h2 data-i18n-zh="近期论文" data-i18n-en="Recent Publications">近期论文</h2>
    <a href="/publications/" data-i18n-zh="查看全部" data-i18n-en="See All">查看全部</a>
  </header>
  <div class="home-card-grid home-card-grid--pubs">
    {% assign latest_papers = site.publications | sort: "date" | reverse %}
    {% for post in latest_papers limit:6 %}
      {% assign status_label = "Published" %}
      {% assign status_class = "published" %}
      {% assign citation_lower = post.citation | default: "" | downcase %}
      {% if post.citation contains "审稿中" or citation_lower contains "under review" %}
        {% assign status_label = "Under Review" %}
        {% assign status_class = "reviewing" %}
      {% elsif post.citation contains "录用" or citation_lower contains "accepted" or citation_lower contains "in press" %}
        {% assign status_label = "Accepted" %}
        {% assign status_class = "accepted" %}
      {% endif %}
      <article class="home-card home-card--pub reveal-on-scroll">
        <div class="home-card__body">
          <p class="home-card__meta">{{ post.date | date: "%Y-%m" }}</p>
          <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
          <p>{{ post.citation | default: post.excerpt | strip_html | truncate: 130 }}</p>
          <span class="home-status home-status--{{ status_class }}">{{ status_label }}</span>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-v2 home-v2-section">
  <header class="home-v2-section__head">
    <h2 data-i18n-zh="联系与链接" data-i18n-en="Contact and Links">联系与链接</h2>
  </header>
  <div class="home-links reveal-on-scroll">
    <a href="mailto:wangyiyan@seu.edu.cn">Email</a>
    <a href="https://github.com/george-wyy">GitHub</a>
    <a href="https://www.researchgate.net/profile/Yiyan-Wang-7">ResearchGate</a>
    <a href="{{ author.googlescholar }}">Google Scholar</a>
    <a href="/cv_new/" data-i18n-zh="简历" data-i18n-en="CV">简历</a>
  </div>
</section>
