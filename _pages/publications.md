---
layout: archive
title: "论文成果"
title_en: "Publications"
permalink: /publications/
author_profile: true
---

<p class="lang-zh">这里展示论文、专利与软件著作等研究成果。</p>
<p class="lang-en">This page lists my papers, patents, and software-related research outputs.</p>

{% if author.googlescholar %}
  <p class="lang-zh">也可在 <u><a href="{{author.googlescholar}}">Google Scholar</a></u> 查看我的学术记录。</p>
  <p class="lang-en">You can also find my records on <u><a href="{{author.googlescholar}}">Google Scholar</a></u>.</p>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
