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
  <div class="lang-toggle" role="tablist" aria-label="Language switch">
    <button class="lang-btn is-active" type="button" data-lang-switch="zh">中文</button>
    <button class="lang-btn" type="button" data-lang-switch="en">English</button>
  </div>
  <p class="lang-zh">我目前就读于 <a class="hero-link" href="https://www.seu.edu.cn">东南大学</a> 机械工程学院设计科学系，导师为
  <a class="hero-link" href="https://me.seu.edu.cn/nyf_31777/list.htm">牛亚峰老师</a>。研究方向聚焦于眼控交互、增强现实、虚拟现实与人机交互系统。</p>
  <p class="lang-en">I am a PhD student in Design Science at the School of Mechanical Engineering, <a class="hero-link" href="https://www.seu.edu.cn">Southeast University</a>, supervised by
  <a class="hero-link" href="https://me.seu.edu.cn/nyf_31777/list.htm">Prof. Yafeng Niu</a>. My research focuses on eye-controlled interaction, AR/VR, and human-computer interaction systems.</p>
</div>

<h2 data-i18n-zh="研究兴趣" data-i18n-en="Research Interests">研究兴趣</h2>

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

<h2 data-i18n-zh="学术与项目亮点" data-i18n-en="Highlights">学术与项目亮点</h2>

<div class="highlight-grid">
  <div class="highlight-card">
    <strong data-i18n-zh="工程实现" data-i18n-en="Engineering">工程实现</strong>
    <span class="lang-zh">熟练使用 Python、Unity、HoloLens 2、Quest 2、Arduino 进行原型开发与实验验证。</span>
    <span class="lang-en">Skilled in Python, Unity, HoloLens 2, Quest 2, and Arduino for prototyping and experiment implementation.</span>
  </div>
  <div class="highlight-card">
    <strong data-i18n-zh="科研习惯" data-i18n-en="Research Practice">科研习惯</strong>
    <span class="lang-zh">保持每周科研周记，累计完成 44+ 篇研究日志。</span>
    <span class="lang-en">Weekly research logs with 44+ entries completed.</span>
  </div>
  <div class="highlight-card">
    <strong data-i18n-zh="项目经验" data-i18n-en="Project Experience">项目经验</strong>
    <span class="lang-zh">研究生阶段负责 4 个项目，目前持续推进 3 个项目。</span>
    <span class="lang-en">Led 4 graduate-level projects and currently progressing 3 ongoing projects.</span>
  </div>
</div>

<h2 data-i18n-zh="快速访问" data-i18n-en="Quick Links">快速访问</h2>

<div class="quick-links">
  <a href="/assets/Curriculum_Vitae.pdf" data-i18n-zh="简历（CV）" data-i18n-en="Curriculum Vitae">简历（CV）</a>
  <a href="https://github.com/george-wyy">GitHub</a>
  <a href="https://www.researchgate.net/profile/Yiyan-Wang-7">ResearchGate</a>
  <a href="/images/wechat.jpeg" data-i18n-zh="微信" data-i18n-en="WeChat">微信</a>
  <a href="mailto:wangyiyan@seu.edu.cn">Email</a>
</div>

<h2 data-i18n-zh="研究时间轴" data-i18n-en="Research Timeline">研究时间轴</h2>

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
      <h4 data-i18n-zh="研究与项目更新" data-i18n-en="Research and Project Updates">研究与项目更新</h4>
      <ul class="timeline-events">
        {% assign shown_pubs = 0 %}
        {% for post in site.publications reversed %}
          {% assign pub_year = post.date | date: "%Y" %}
          {% if pub_year == year and shown_pubs < 2 %}
          <li><span class="timeline-badge" data-i18n-zh="论文" data-i18n-en="Paper">论文</span><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
          {% assign shown_pubs = shown_pubs | plus: 1 %}
          {% endif %}
        {% endfor %}
        {% assign shown_projects = 0 %}
        {% for post in site.portfolio reversed %}
          {% assign post_parts = post.url | split: "-" %}
          {% assign post_ym = post_parts[1] | default: "" %}
          {% assign post_year = post_ym | slice: 0, 4 %}
          {% if post_year == year and shown_projects < 2 %}
          <li><span class="timeline-badge timeline-badge--project" data-i18n-zh="项目" data-i18n-en="Project">项目</span><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
          {% assign shown_projects = shown_projects | plus: 1 %}
          {% endif %}
        {% endfor %}
      </ul>
    </div>
  </div>
  {% endif %}
{% endfor %}
</div>

<h2 data-i18n-zh="最新论文" data-i18n-en="Recent Publications">最新论文</h2>

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
  {% assign status_label_en = "Published" %}
  {% assign status_class = "published" %}
  {% assign citation_lower = post.citation | default: "" | downcase %}
  {% if post.citation contains "审稿中" or citation_lower contains "under review" %}
    {% assign status_label = "审稿中" %}
    {% assign status_label_en = "Under Review" %}
    {% assign status_class = "reviewing" %}
  {% elsif post.citation contains "录用" or citation_lower contains "accepted" or citation_lower contains "in press" %}
    {% assign status_label = "已录用" %}
    {% assign status_label_en = "Accepted" %}
    {% assign status_class = "accepted" %}
  {% endif %}
  <article class="paper-card reveal-on-scroll">
    <p class="paper-meta">{{ post.date | date: "%Y-%m" }}</p>
    <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
    <div class="paper-tags">
      <span class="paper-tag paper-tag--journal">{{ journal | truncate: 30 }}</span>
      <span class="paper-tag paper-tag--status paper-tag--{{ status_class }}" data-i18n-zh="{{ status_label }}" data-i18n-en="{{ status_label_en }}">{{ status_label }}</span>
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

<h2 data-i18n-zh="精选项目" data-i18n-en="Featured Projects">精选项目</h2>

<div class="project-filters" role="tablist" aria-label="项目筛选">
  <button class="project-filter-btn is-active" type="button" data-project-filter="all" data-i18n-zh="全部" data-i18n-en="All">全部</button>
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
<p class="project-empty" id="project-empty" hidden data-i18n-zh="当前筛选下暂无匹配项目。" data-i18n-en="No projects found for this filter.">当前筛选下暂无匹配项目。</p>
