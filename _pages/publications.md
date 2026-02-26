---
layout: archive
<<<<<<< HEAD
title: "论文成果"
title_en: "Publications"
=======
title: "Publications"
>>>>>>> parent of 4e6aa04 (修改)
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
