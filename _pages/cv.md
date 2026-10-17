---
layout: archive
title: "简历"
title_en: "CV"
permalink: /cv/
author_profile: true
module_layout: true
redirect_from:
  - /resume
  - /resume/
---

{% assign cv = site.data.cv %}
{% assign accepted = cv.papers | where: 'status', 'accepted' %}
{% assign published = cv.papers | where: 'status', 'published' %}
<div class="cv-content">
  <section class="cv-intro module-panel">
    <div class="module-heading"><span class="module-symbol" aria-hidden="true">◎</span><h2 data-i18n-zh="研究、设计与系统实现" data-i18n-en="Research, design, and system building">研究、设计与系统实现</h2></div>
    <p class="lang-zh">{{ cv.intro.zh }}</p><p class="lang-en">{{ cv.intro.en }}</p>
    <div class="cv-tools">
      <a class="btn" href="{{ '/assets/Curriculum_Vitae.pdf' | relative_url }}?v={{ cv.updated }}" data-i18n-zh="中文简历 PDF" data-i18n-en="Chinese CV PDF">中文简历 PDF</a>
      <a class="btn" href="{{ '/assets/Curriculum_Vitae_en.pdf' | relative_url }}?v={{ cv.updated }}" data-i18n-zh="英文简历 PDF" data-i18n-en="English CV PDF">英文简历 PDF</a>
      <span class="cv-updated" data-i18n-zh="更新于 {{ cv.updated }}" data-i18n-en="Updated {{ cv.updated }}">更新于 {{ cv.updated }}</span>
    </div>
  </section>
  {% include research-overview.html %}
  <nav class="cv-section-nav" aria-label="CV sections"><a href="#cv-education" data-i18n-zh="教育经历" data-i18n-en="Education">教育经历</a><a href="#cv-experience" data-i18n-zh="研究经历" data-i18n-en="Research Experience">研究经历</a><a href="#cv-papers" data-i18n-zh="代表性论文" data-i18n-en="Selected Publications">代表性论文</a><a href="#cv-projects" data-i18n-zh="精选项目" data-i18n-en="Selected Projects">精选项目</a><a href="#cv-honors" data-i18n-zh="荣誉" data-i18n-en="Honors">荣誉</a></nav>

  <section class="module-panel cv-panel cv-panel--education">
  <h2 id="cv-education" data-i18n-zh="教育经历" data-i18n-en="Education">教育经历</h2>
  {% for item in cv.education %}
  <article class="cv-entry">
    <p class="cv-period" data-i18n-zh="{{ item.period.zh }}" data-i18n-en="{{ item.period.en }}">{{ item.period.zh }}</p>
    <div class="cv-entry__body">
    <h3 data-i18n-zh="{{ item.institution.zh }}" data-i18n-en="{{ item.institution.en }}">{{ item.institution.zh }}</h3>
    <p><span data-i18n-zh="{{ item.degree.zh }}" data-i18n-en="{{ item.degree.en }}">{{ item.degree.zh }}</span></p>
    {% if item.detail %}<p data-i18n-zh="{{ item.detail.zh }}" data-i18n-en="{{ item.detail.en }}">{{ item.detail.zh }}</p>{% endif %}
    </div>
  </article>
  {% endfor %}

  </section>

  <section class="module-panel cv-panel cv-panel--experience">
  <h2 id="cv-experience" data-i18n-zh="研究经历" data-i18n-en="Research Experience">研究经历</h2>
  {% for item in cv.experience %}
  <article class="cv-entry">
    <p class="cv-period" data-i18n-zh="{{ item.period.zh }}" data-i18n-en="{{ item.period.en }}">{{ item.period.zh }}</p>
    <div class="cv-entry__body">
    <h3 data-i18n-zh="{{ item.title.zh }}" data-i18n-en="{{ item.title.en }}">{{ item.title.zh }}</h3>
    <p data-i18n-zh="{{ item.description.zh }}" data-i18n-en="{{ item.description.en }}">{{ item.description.zh }}</p>
    </div>
  </article>
  {% endfor %}

  </section>

  <section class="module-panel cv-panel cv-panel--papers">
  <h2 id="cv-papers" data-i18n-zh="代表性论文" data-i18n-en="Selected Publications">代表性论文</h2>
  <p><a href="{{ '/publications/' | relative_url }}" data-i18n-zh="完整论文与专利列表" data-i18n-en="Full list of papers and patents">完整论文与专利列表</a></p>
  {% include research-highlights.html compact=true %}
  <details class="record-details"><summary data-i18n-zh="已接收待刊论文（{{ accepted | size }}）" data-i18n-en="Accepted papers ({{ accepted | size }})">已接收待刊论文（{{ accepted | size }}）</summary>
  <h3 class="visually-hidden" data-i18n-zh="已接收待刊" data-i18n-en="Accepted / In Press">已接收待刊</h3>
  {% assign accepted = cv.papers | where: 'status', 'accepted' %}
  {% for paper in accepted %}{% include cv-paper.html paper=paper %}{% endfor %}
  </details>
  <details class="record-details"><summary data-i18n-zh="代表性已发表论文（{{ published | size }}）" data-i18n-en="Selected published papers ({{ published | size }})">代表性已发表论文（{{ published | size }}）</summary>
  <h3 class="visually-hidden" data-i18n-zh="已发表" data-i18n-en="Published">已发表</h3>
  {% assign published = cv.papers | where: 'status', 'published' %}
  {% for paper in published %}{% include cv-paper.html paper=paper %}{% endfor %}

  </details>
  <details class="record-details"><summary data-i18n-zh="在审 / 已投（{{ cv.manuscripts | size }}）" data-i18n-en="Under review / submitted ({{ cv.manuscripts | size }})">在审 / 已投（{{ cv.manuscripts | size }}）</summary>
  <h3 class="visually-hidden" data-i18n-zh="在审 / 已投" data-i18n-en="Under Review / Submitted">在审 / 已投</h3>
  {% for paper in cv.manuscripts %}
  <article class="cv-paper">
    <h3>{{ paper.title | escape }}</h3>
    <p>{{ paper.venue | escape }}</p>
    <p class="cv-paper__note"><span data-i18n-zh="第一作者" data-i18n-en="First author">第一作者</span> · {% if paper.status == 'submitted' %}<span data-i18n-zh="已投（2026.10）" data-i18n-en="Submitted (Oct 2026)">已投（2026.10）</span>{% else %}<span data-i18n-zh="在审" data-i18n-en="Under review">在审</span>{% endif %}</p>
  </article>
  {% endfor %}

  </details>
  </section>

  <section class="module-panel cv-panel cv-panel--book">
  <h2 id="cv-book" data-i18n-zh="专著参编" data-i18n-en="Book Contribution">专著参编</h2>
  <p data-i18n-zh="{{ cv.book.zh }}" data-i18n-en="{{ cv.book.en }}">{{ cv.book.zh }}</p>

  </section>

  <section class="module-panel cv-panel cv-panel--projects">
  <h2 id="cv-projects" data-i18n-zh="精选项目" data-i18n-en="Selected Projects">精选项目</h2>
  {% for item in cv.projects %}
  <article class="cv-entry">
    <p class="cv-period">{{ item.period }}</p>
    <div class="cv-entry__body">
    <h3>{% if item.url %}<a href="{{ item.url }}">{% endif %}<span data-i18n-zh="{{ item.title.zh }}" data-i18n-en="{{ item.title.en }}">{{ item.title.zh }}</span>{% if item.url %}</a>{% endif %}</h3>
    <p data-i18n-zh="{{ item.description.zh | escape }}" data-i18n-en="{{ item.description.en | escape }}">{{ item.description.zh }}</p>
    </div>
  </article>
  {% endfor %}

  </section>

  <div class="cv-support-grid">
  <section class="module-panel cv-panel cv-panel--skills">
  <h2 id="cv-skills" data-i18n-zh="技能" data-i18n-en="Skills">技能</h2>
  <dl>{% for item in cv.skills %}<dt data-i18n-zh="{{ item.title.zh }}" data-i18n-en="{{ item.title.en }}">{{ item.title.zh }}</dt><dd data-i18n-zh="{{ item.description.zh }}" data-i18n-en="{{ item.description.en }}">{{ item.description.zh }}</dd>{% endfor %}</dl>

  </section>

  <section class="module-panel cv-panel cv-panel--honors">
  <h2 id="cv-honors" data-i18n-zh="荣誉" data-i18n-en="Honors">荣誉</h2>
  <ul>{% for item in cv.awards %}<li data-i18n-zh="{{ item.zh }}" data-i18n-en="{{ item.en }}">{{ item.zh }}</li>{% endfor %}</ul>
  </section>
</div>
</div>
