---
permalink: /
title: "王以俨"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="profile-hero">
  <span class="profile-tagline">PhD Student · XR + Eye Tracking</span>
  <p>我目前就读于 <a class="hero-link" href="https://www.seu.edu.cn">东南大学</a> 机械工程学院设计科学系，导师为
  <a class="hero-link" href="https://me.seu.edu.cn/nyf_31777/list.htm">牛亚峰老师</a>。研究方向聚焦于眼控交互、增强现实、虚拟现实与人机交互系统。</p>
</div>

## 研究兴趣

- 眼控交互（Eye-Control Interaction）
- AR/VR 场景中的可用性与交互效率优化
- 人机交互中的机器学习方法

## 学术与项目亮点

<div class="highlight-grid">
  <div class="highlight-card">
    <strong>工程实现</strong>
    熟练使用 Python、Unity、HoloLens 2、Quest 2、Arduino 进行原型开发与实验验证。
  </div>
  <div class="highlight-card">
    <strong>科研习惯</strong>
    保持每周科研周记，累计完成 44+ 篇研究日志。
  </div>
  <div class="highlight-card">
    <strong>项目经验</strong>
    研究生阶段负责 4 个项目，目前持续推进 3 个项目。
  </div>
</div>

## 快速访问

<div class="quick-links">
  <a href="/assets/Curriculum_Vitae.pdf">简历（CV）</a>
  <a href="https://github.com/george-wyy">GitHub</a>
  <a href="https://www.researchgate.net/profile/Yiyan-Wang-7">ResearchGate</a>
  <a href="/images/wechat.jpeg">微信</a>
  <a href="mailto:wangyiyan@seu.edu.cn">Email</a>
</div>

## 研究时间轴

{% assign timeline_tokens = "" %}
{% for post in site.publications %}
  {% assign year = post.date | date: "%Y" %}
  {% assign token = "|" | append: year | append: "|" %}
  {% unless timeline_tokens contains token %}
    {% assign timeline_tokens = timeline_tokens | append: token %}
  {% endunless %}
{% endfor %}
{% for post in site.portfolio %}
  {% assign url_parts = post.url | split: "-" %}
  {% assign year_month = url_parts[1] | default: "" %}
  {% assign year = year_month | slice: 0, 4 %}
  {% if year != "" %}
    {% assign token = "|" | append: year | append: "|" %}
    {% unless timeline_tokens contains token %}
      {% assign timeline_tokens = timeline_tokens | append: token %}
    {% endunless %}
  {% endif %}
{% endfor %}
{% assign timeline_years = timeline_tokens | split: "|" | sort | reverse %}

<div class="timeline">
{% for year in timeline_years %}
  {% if year != "" %}
  <div class="timeline-item reveal-on-scroll">
    <span class="timeline-year">{{ year }}</span>
    <div class="timeline-content">
      <h4>研究与项目更新</h4>
      <ul class="timeline-events">
        {% assign shown_pubs = 0 %}
        {% for post in site.publications reversed %}
          {% assign pub_year = post.date | date: "%Y" %}
          {% if pub_year == year and shown_pubs < 2 %}
          <li><span class="timeline-badge">论文</span><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
          {% assign shown_pubs = shown_pubs | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% assign shown_projects = 0 %}
        {% for post in site.portfolio reversed %}
          {% assign post_parts = post.url | split: "-" %}
          {% assign post_ym = post_parts[1] | default: "" %}
          {% assign post_year = post_ym | slice: 0, 4 %}
          {% if post_year == year and shown_projects < 2 %}
          <li><span class="timeline-badge timeline-badge--project">项目</span><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
          {% assign shown_projects = shown_projects | plus: 1 %}
          {% endif %}
        {% endfor %}
      </ul>
    </div>
  </div>
  {% endif %}
{% endfor %}
</div>

## 最新论文

<div class="paper-grid">
{% assign latest_papers = site.publications | sort: "date" | reverse %}
{% for post in latest_papers limit:4 %}
  {% assign journal = post.venue | default: "" | strip %}
  {% if journal == "" and post.citation %}
    {% assign citation_text = post.citation | strip_html %}
    {% assign citation_parts = citation_text | split: ". " %}
    {% assign journal = citation_parts | last | strip %}
    {% assign journal = journal | split: "【" | first | split: "[" | first | strip %}
  {% endif %}
  {% if journal == "" %}
    {% assign journal = "期刊/会议未标注" %}
  {% endif %}
  {% assign status_label = "已发表" %}
  {% assign status_class = "published" %}
  {% assign citation_lower = post.citation | default: "" | downcase %}
  {% if post.citation contains "审稿中" or citation_lower contains "under review" %}
    {% assign status_label = "审稿中" %}
    {% assign status_class = "reviewing" %}
  {% elsif post.citation contains "录用" or citation_lower contains "accepted" or citation_lower contains "in press" %}
    {% assign status_label = "已录用" %}
    {% assign status_class = "accepted" %}
  {% endif %}
  <article class="paper-card reveal-on-scroll">
    <p class="paper-meta">{{ post.date | date: "%Y-%m" }}</p>
    <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">{{ journal | truncate: 30 }}</span>
      <span class="paper-tag paper-tag--status paper-tag--{{ status_class }}">{{ status_label }}</span>
    </div>
    {% if post.citation %}
      <p>{{ post.citation | strip_html | truncate: 140 }}</p>
    {% else %}
      <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
    {% endif %}
    <a class="paper-link" href="{{ post.url | prepend: site.baseurl }}">查看详情</a>
  </article>
{% endfor %}
</div>

## 精选项目

<div class="project-filters" role="tablist" aria-label="项目筛选">
  <button class="project-filter-btn is-active" type="button" data-project-filter="all">全部</button>
  <button class="project-filter-btn" type="button" data-project-filter="vr">VR</button>
  <button class="project-filter-btn" type="button" data-project-filter="eye">Eye Tracking</button>
  <button class="project-filter-btn" type="button" data-project-filter="ml">ML</button>
</div>

<div class="project-grid">
{% for post in site.portfolio reversed limit:6 %}
  {% assign searchable_text = post.title | append: " " | append: post.excerpt | downcase %}
  {% assign project_tags = "" %}
  {% if searchable_text contains "vr" or searchable_text contains "quest" or searchable_text contains "ue4" or searchable_text contains "虚拟现实" %}
    {% assign project_tags = project_tags | append: "vr " %}
  {% endif %}
  {% if searchable_text contains "eye" or searchable_text contains "gaze" or searchable_text contains "眼控" %}
    {% assign project_tags = project_tags | append: "eye " %}
  {% endif %}
  {% if searchable_text contains "machine learning" or searchable_text contains "机器学习" or searchable_text contains "python" %}
    {% assign project_tags = project_tags | append: "ml " %}
  {% endif %}
  {% if project_tags == "" %}
    {% assign project_tags = "other" %}
  {% endif %}
  {% assign cover = post.excerpt | split:"<img src='" | last | split:"'" | first %}
  <article class="project-card reveal-on-scroll" data-tags="{{ project_tags | strip }}">
    <a class="project-cover" href="{{ post.url | prepend: site.baseurl }}">
      {% if cover contains "http" %}
      <img src="{{ cover }}" alt="{{ post.title }}">
      {% else %}
      <img src="/images/foo-bar-identity.jpg" alt="{{ post.title }}">
      {% endif %}
    </a>
    <div class="project-body">
      <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
      <div class="project-tags">
        {% if project_tags contains "vr" %}<span>VR</span>{% endif %}
        {% if project_tags contains "eye" %}<span>Eye Tracking</span>{% endif %}
        {% if project_tags contains "ml" %}<span>ML</span>{% endif %}
      </div>
      <p>{{ post.excerpt | strip_html | truncate: 90 }}</p>
    </div>
  </article>
{% endfor %}
</div>
<p class="project-empty" id="project-empty" hidden>当前筛选下暂无匹配项目。</p>
