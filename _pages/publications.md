---
layout: archive
title: "论文成果"
title_en: "Publications"
permalink: /publications/
author_profile: true
---

<p class="lang-zh">
期刊与会议论文、专著参编、专利及软件著作权。已接收待刊与在审稿件单独列出。
</p>
<p class="lang-en">
Journal and conference papers, book contributions, patents, and software. Accepted papers and submitted manuscripts are listed separately.
</p>

<p>
  <a href="https://scholar.google.com/citations?user=Qu9RMQsAAAAJ">Google Scholar</a> |
  <a href="https://www.researchgate.net/profile/Yiyan-Wang-7">ResearchGate</a> |
  <a href="https://orcid.org/0009-0002-0787-0730">ORCID</a>
</p>

{% assign papers = site.publications | where: "type", "paper" | sort: "date" | reverse %}
{% assign patents = site.publications | where: "type", "patent" | sort: "date" | reverse %}
{% assign disclosed_patents = patents | where_exp: 'item', 'item.patent_status != "filed"' %}
{% assign filed_patents = patents | where: 'patent_status', 'filed' %}
{% assign software = site.publications | where: "type", "software" | sort: "date" | reverse %}
{% assign books = site.publications | where: "type", "book" | sort: "date" | reverse %}

## <span data-i18n-zh="统计" data-i18n-en="Statistics">统计</span>

<ul class="lang-zh">
  <li>已公开论文：{{ papers | size }}　|　专著：{{ books | size }}（参编）　|　已公开或授权专利：{{ disclosed_patents | size }}；待公开申请：{{ filed_patents | size }}　|　软件著作权：{{ software | size }}</li>
  <li>已接收待刊：{{ site.data.cv.papers | where: "status", "accepted" | size }}　|　在审 / 已投：{{ site.data.cv.manuscripts | size }}</li>
</ul>
<ul class="lang-en">
  <li>Published papers: {{ papers | size }}　|　Monograph: {{ books | size }} (contributing author)　|　Published / granted patents: {{ disclosed_patents | size }}; pending publication: {{ filed_patents | size }}　|　Registered software: {{ software | size }}</li>
  <li>Accepted / in press: {{ site.data.cv.papers | where: "status", "accepted" | size }}　|　Under review / submitted: {{ site.data.cv.manuscripts | size }}</li>
</ul>

## <span data-i18n-zh="已接收待刊" data-i18n-en="Accepted / In Press">已接收待刊</span>

{% assign accepted_papers = site.data.cv.papers | where: 'status', 'accepted' %}
{% for paper in accepted_papers %}{% include cv-paper.html paper=paper %}{% endfor %}

## <span data-i18n-zh="在审 / 已投" data-i18n-en="Under Review / Submitted">在审 / 已投</span>

{% for paper in site.data.cv.manuscripts %}
<article class="cv-paper">
  <h3>{{ paper.title | escape }}</h3>
  <p>{{ paper.venue | escape }}</p>
  <p class="cv-paper__note"><span data-i18n-zh="第一作者" data-i18n-en="First author">第一作者</span> · {% if paper.status == 'submitted' %}<span data-i18n-zh="已投（2026.10）" data-i18n-en="Submitted (Oct 2026)">已投（2026.10）</span>{% else %}<span data-i18n-zh="在审" data-i18n-en="Under review">在审</span>{% endif %}</p>
</article>
{% endfor %}

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

<p class="lang-zh">以下分别列出已公开或授权专利，以及已受理待公开的申请。</p>
<p class="lang-en">Published patent applications and granted patents are listed below. Applications awaiting publication are listed separately.</p>

<div class="publication-list">
{% for post in disclosed_patents %}
  <div class="pub-item">
    <span class="pub-year">{{ post.date | date: "%Y" }}</span>
    <div class="pub-body">
      <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
      {% if post.citation %}<p class="pub-citation">{{ post.citation | strip_html }}</p>{% endif %}
    </div>
  </div>
{% endfor %}
</div>


### <span data-i18n-zh="已受理待公开" data-i18n-en="Applications Awaiting Publication">已受理待公开</span>

{% for post in filed_patents %}
<div class="cv-paper"><h3><a href="{{ post.url | relative_url }}" data-i18n-zh="{{ post.title | escape }}" data-i18n-en="{{ post.title_en | escape }}">{{ post.title }}</a></h3><p>{{ post.citation | strip_html }}</p></div>
{% endfor %}

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
