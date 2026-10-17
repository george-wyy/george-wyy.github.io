---
permalink: /
title: "王以俨"
title_en: "Yiyan Wang"
excerpt: "东南大学机械工程博士生，研究眼动交互与 AR/VR。Gaze interaction and AR/VR research at Southeast University."
author_profile: true
module_layout: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="module-panel overview-hero">
  <p class="hero-context" data-i18n-zh="东南大学 · 机械工程博士生" data-i18n-en="PhD student · Southeast University">东南大学 · 机械工程博士生</p>
  <h2 data-i18n-zh="眼动交互与 AR/VR" data-i18n-en="Gaze interaction and AR/VR">眼动交互与 AR/VR</h2>
  <p class="lang-zh">我研究如何利用视线选择目标、与手和头部输入协同，并通过交互系统与用户实验验证设计。导师：<a href="https://me.seu.edu.cn/nyf_31777/list.htm">牛亚峰教授</a>。</p>
  <p class="lang-en">I study gaze-based target selection and coordination with hand and head input, using interactive systems and user experiments to evaluate designs. Advised by <a href="https://me.seu.edu.cn/nyf_31777/list.htm">Prof. Yafeng Niu</a>.</p>
  <div class="hero-topics"><span data-i18n-zh="凝视与平滑追踪" data-i18n-en="Gaze and smooth pursuit">凝视与平滑追踪</span><span data-i18n-zh="多通道协同" data-i18n-en="Multimodal input">多通道协同</span><span data-i18n-zh="系统原型与用户研究" data-i18n-en="Prototypes and user studies">系统原型与用户研究</span></div>
  <div class="hero-actions"><a class="btn hero-action-primary" href="{{ '/cv/' | relative_url }}" data-i18n-zh="查看简历" data-i18n-en="View CV">查看简历</a><a href="{{ '/publications/' | relative_url }}" data-i18n-zh="完整论文目录" data-i18n-en="All publications">完整论文目录</a><a href="mailto:wangyiyan@seu.edu.cn" data-i18n-zh="邮件联系" data-i18n-en="Email me">邮件联系</a></div>
</section>

{% include research-overview.html %}

<section class="module-panel featured-research">
  <div class="module-heading"><span class="module-symbol" aria-hidden="true">◎</span><h2 data-i18n-zh="代表研究" data-i18n-en="Research highlights">代表研究</h2></div>
  <p class="module-lede" data-i18n-zh="从交互机制、应用设计到跨学科系统，展示六项代表工作。" data-i18n-en="Six selected works spanning interaction mechanisms, application design, and interdisciplinary systems.">从交互机制、应用设计到跨学科系统，展示六项代表工作。</p>
  {% include research-highlights.html %}
</section>

<section class="module-panel homepage-research-systems">
  <div class="module-heading"><span class="module-symbol" aria-hidden="true">⌘</span><h2 data-i18n-zh="研究系统与原型" data-i18n-en="Research systems and prototypes">研究系统与原型</h2><a class="module-more" href="{{ '/projects/#research-systems' | relative_url }}" data-i18n-zh="项目详情" data-i18n-en="Explore projects">项目详情</a></div>
  {% assign research_systems = site.portfolio | where: 'research_system', true | sort: 'project_order' %}
  <div class="project-catalog project-catalog--featured">{% for project in research_systems %}{% include project-summary.html project=project %}{% endfor %}</div>
</section>

<section class="module-panel homepage-projects">
  <div class="module-heading"><span class="module-symbol" aria-hidden="true">⌘</span><h2 data-i18n-zh="从研究到工具" data-i18n-en="From research to tools">从研究到工具</h2><a class="module-more" href="{{ '/projects/' | relative_url }}" data-i18n-zh="全部项目" data-i18n-en="All projects">全部项目</a></div>
  {% assign featured_projects = site.portfolio | where: 'featured', true | where: 'project_kind', 'software' | sort: 'project_order' %}
  <div class="project-catalog project-catalog--featured">{% for project in featured_projects %}{% include project-summary.html project=project %}{% endfor %}</div>
</section>

<section class="module-panel homepage-news">
  <div class="module-heading"><span class="module-symbol" aria-hidden="true">◷</span><h2 data-i18n-zh="研究与成长时间轴" data-i18n-en="Research milestones">研究与成长时间轴</h2></div>
  <ul class="news-list">
    <li><span class="news-date">2026.10</span><span class="lang-zh">眼控交互范式生成方法相关发明专利申请获受理，关联<a href="{{ '/projects/voice-gaze-ui/' | relative_url }}">自然语言驱动的眼控界面生成</a>项目；第二发明人。</span><span class="lang-en">The invention patent application related to the <a href="{{ '/projects/voice-gaze-ui/' | relative_url }}">natural language-driven gaze interface</a> project was accepted for filing; second inventor.</span></li>
    <li><span class="news-date">2026.10</span><span class="lang-zh">眼动驱动超表面合作论文被 <em>Opto-Electronic Advances</em> 接收，共同第一作者（3 位共同一作中第 2 位）。</span><span class="lang-en">Our paper on gaze-driven metasurfaces was accepted by <em>Opto-Electronic Advances</em>. Co-first author (second of three equal contributors).</span></li>
    <li><span class="news-date">2026.09</span><span class="lang-zh">SPMark 被 <em>Virtual Reality</em> 接收，研究混合纸与数字环境中的平滑追踪文本选择。</span><span class="lang-en">SPMark was accepted by <em>Virtual Reality</em>, studying smooth-pursuit text selection in hybrid paper–digital environments.</span></li>
    <li><span class="news-date">2026.09</span><span class="lang-zh">眼手级联交互合作论文发表于 <em>Advanced Engineering Informatics</em>。</span><span class="lang-en">Our work on gaze–hand cascaded interaction appeared in <em>Advanced Engineering Informatics</em>.</span></li>
    {% for event in site.data.research_milestones %}<li><span class="news-date">{{ event.date }}</span><span class="lang-zh">{{ event.zh }}</span><span class="lang-en">{{ event.en }}</span></li>{% endfor %}
  </ul>
</section>
