---
title: "04:30 · 雨夜铁馆"
title_en: "04:30 — Rainy Iron Gym"
date: 2026-10-20
tags:
- 实时渲染
- three.js
- WebGPU
- 交互场景
excerpt_zh: 一个用 three.js + WebGPU 实时渲染的交互式 3D 沙盘：安藤忠雄式的清水混凝土铁馆、三层雨幕、真实积水反射、程序化声音，可自由漫游与点击交互。
excerpt_en: An interactive real-time 3D sandbox built with three.js and WebGPU — a Tadao Ando-style exposed-concrete gym, layered rain, real planar reflections, procedural audio, free roaming and click interaction.
collection: portfolio
permalink: /projects/rain-iron-gym/
project_kind: prototype
project_order: 6
featured: true
period: '2026'
summary_zh: 凌晨四点半的雨夜铁馆，全程序化生成的交互式 3D 沙盘场景。
summary_en: A fully procedural interactive 3D sandbox of an iron gym at 4:30 AM in the rain.
---

<section class="module-panel research-project-intro">
  <p data-i18n-zh="凌晨 4:30，雨还在下，铁馆里刚有人练完离开。整个场景在浏览器里实时渲染：没有一张贴图来自下载，没有一段声音来自音频文件。" data-i18n-en="4:30 AM. The rain hasn't stopped. Someone just finished training and left. Everything renders live in the browser — no downloaded textures, no audio files.">凌晨 4:30，雨还在下，铁馆里刚有人练完离开。整个场景在浏览器里实时渲染：没有一张贴图来自下载，没有一段声音来自音频文件。</p>
</section>

<section class="module-panel research-project-section">
  <h2 data-i18n-zh="短片" data-i18n-en="Reel">短片</h2>
  <video controls playsinline preload="metadata"
         poster="{{ '/assets/images/rain-iron-gym-poster.png' | relative_url }}"
         style="width:100%;border-radius:12px;display:block;background:#04060a;">
    <source src="{{ '/assets/videos/rain-iron-gym.mp4' | relative_url }}" type="video/mp4">
  </video>
</section>

<section class="module-panel research-project-section">
  <h2 data-i18n-zh="场景里有什么" data-i18n-en="What's in it">场景里有什么</h2>
  <ul>
    <li data-i18n-zh="安藤忠雄式的清水混凝土建筑：模板缝、螺栓孔、通长横向长窗、悬浮薄屋盖。" data-i18n-en="A Tadao Ando-inspired exposed-concrete building: formwork seams, tie holes, a full-width horizontal window, and a floating thin roof slab.">安藤忠雄式的清水混凝土建筑：模板缝、螺栓孔、通长横向长窗、悬浮薄屋盖。</li>
    <li data-i18n-zh="三层景深雨幕 —— 近、中、远三层不同宽度与速度，配合阵风让雨丝倾斜；落地有溅射冠与抛物线水珠。" data-i18n-en="Three-layer rain with different widths and speeds per depth, wind gusts that tilt the streaks, plus splash crowns and ballistic droplets on impact.">三层景深雨幕 —— 近、中、远三层不同宽度与速度，配合阵风让雨丝倾斜；落地有溅射冠与抛物线水珠。</li>
    <li data-i18n-zh="柏油路面 + 十处积水，用 TSL 的 reflector() 做真实平面反射。" data-i18n-en="Asphalt ground with ten puddles using real planar reflections via TSL reflector().">柏油路面 + 十处积水，用 TSL 的 reflector() 做真实平面反射。</li>
    <li data-i18n-zh="四个剪影人物：深蹲、卧推、站立休息、引体向上。" data-i18n-en="Four silhouette figures: squatting, bench pressing, resting, and doing pull-ups.">四个剪影人物：深蹲、卧推、站立休息、引体向上。</li>
    <li data-i18n-zh="软硬材质分层：泡棉地胶、皮革软垫、会飘的布料、金属、橡胶、玻璃。" data-i18n-en="Layered materials: foam flooring, leather padding, fluttering cloth, metal, rubber, glass.">软硬材质分层：泡棉地胶、皮革软垫、会飘的布料、金属、橡胶、玻璃。</li>
  </ul>
</section>

<section class="module-panel research-project-section">
  <h2 data-i18n-zh="怎么交互" data-i18n-en="How to interact">怎么交互</h2>
  <ul>
    <li data-i18n-zh="拖动环绕沙盘，WASD 漫游，Q/E 升降，Shift 加速。" data-i18n-en="Drag to orbit, WASD to roam, Q/E to ascend, Shift to sprint.">拖动环绕沙盘，WASD 漫游，Q/E 升降，Shift 加速。</li>
    <li data-i18n-zh="场景里有一块 3D 控制台：切换灯光预设、拖动雨量、开关路灯/风扇/水汽。" data-i18n-en="A 3D control console sits in the scene: switch light presets, drag the rain slider, toggle lamps, fan, and mist.">场景里有一块 3D 控制台：切换灯光预设、拖动雨量、开关路灯/风扇/水汽。</li>
    <li data-i18n-zh="点击沙袋会摆动并发声，点击器械有金属撞击声。" data-i18n-en="Click the punching bag to make it swing and thud; clicking equipment produces metallic clanks.">点击沙袋会摆动并发声，点击器械有金属撞击声。</li>
    <li data-i18n-zh="所有声音都是 Web Audio 实时合成的雨、风、电流嗡鸣、撞击与远雷。" data-i18n-en="All audio — rain, wind, electrical hum, impacts, distant thunder — is synthesized live with Web Audio.">所有声音都是 Web Audio 实时合成的雨、风、电流嗡鸣、撞击与远雷。</li>
  </ul>
</section>

<section class="module-panel research-project-section">
  <h2 data-i18n-zh="技术栈" data-i18n-en="Stack">技术栈</h2>
  <ul>
    <li data-i18n-zh="three.js r186 + WebGPURenderer + TSL 节点图。" data-i18n-en="three.js r186 with WebGPURenderer and TSL node graphs.">three.js r186 + WebGPURenderer + TSL 节点图。</li>
    <li data-i18n-zh="体积光锥用顶点色渐变 + 加色混合实现，几乎零额外开销。" data-i18n-en="Volumetric light cones use vertex-colour gradients with additive blending at almost no extra cost.">体积光锥用顶点色渐变 + 加色混合实现，几乎零额外开销。</li>
    <li data-i18n-zh="全部几何与贴图程序化生成；仅相机路径与构图经过多轮迭代校准。" data-i18n-en="All geometry and textures are generated procedurally; only camera paths and composition were hand-tuned across iterations.">全部几何与贴图程序化生成；仅相机路径与构图经过多轮迭代校准。</li>
  </ul>
</section>

<p><a href="{{ '/projects/' | relative_url }}" data-i18n-zh="返回项目列表" data-i18n-en="Back to projects">返回项目列表</a></p>
