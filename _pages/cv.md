---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<h2 data-i18n-zh="教育经历" data-i18n-en="Education">教育经历</h2>

<div class="lang-zh">

<h3><strong>东南大学</strong> 机械工程学院</h3>

<em>2024.09 - 至今 机械工程 博士</em>
- 导师：牛亚峰

<em>2021.09 - 2024.06 设计学 硕士</em>

<h3><strong>中国农业大学</strong> 工学院</h3>

<em>2017.08 - 2021.06 工业设计 本科</em>

<em>2018.09 - 2021.06 数据科学与大数据技术 双学位</em>

</div>

<div class="lang-en">

<h3><strong>Southeast University</strong>, School of Mechanical Engineering</h3>

<em>2024.09 - Present &nbsp; PhD in Mechanical Engineering</em>
- Advisor: Yafeng Niu

<em>2021.09 - 2024.06 &nbsp; MS in Design Science</em>

<h3><strong>China Agricultural University</strong>, College of Engineering</h3>

<em>2017.08 - 2021.06 &nbsp; BS in Industrial Design</em>

<em>2018.09 - 2021.06 &nbsp; Dual degree in Data Science & Big Data Technology</em>

</div>

---

<h2 data-i18n-zh="研究经历" data-i18n-en="Research Experience">研究经历</h2>

<div class="lang-zh">

<h3><strong>融合实体控制器的眼控系统视触觉交互机制研究</strong></h3>

<em>2021.01 - 至今 参与 国家自然科学基金面上项目 72171044</em>

- 基金申请书文献综述撰写、技术路线图绘制，成功申请
- 硕士课题：混合数字纸文本标绘眼触控交互研究（HoloLens 2, MRTK3）
- 凝视眨眼复合交互动作研究，论文被 Advanced Engineering Informatics 接收
- 眼动密码输入方法发明专利（已公开）

<h3><strong>眼控装备系统视触觉交互机制研究</strong></h3>

<em>2023 - 2025 技术负责人 教育部联合基金</em>

- 负责项目技术路线规划、实验设计与实施推进

<h3><strong>面向眼控系统交互式界面元素的视觉表征与评价机制研究</strong></h3>

<em>2021.01 - 2021.12 参与 国家自然科学基金青年基金项目 71801037</em>

- 研究平滑追踪眼控界面的控件尺寸和速度权衡，论文被 Displays (JCR Q1) 接收

<h3><strong>《眼控交互范式设计》专著编写</strong></h3>

<em>2024 - 2025 参与编写 / 技术统稿 科学出版社（已出版）</em>

- 牛亚峰著，科学出版社 2025.12 出版，ISBN 978-7-03-083699-1，“智能人机交互前沿技术丛书”，全书约 30 万字
- 主笔第一章“绪论”（约 3 万字），系统建立眼控交互的知识体系；参与全书技术统稿与审阅

<h3><strong>头戴式 NIR 眼动追踪系统（自研硬件平台）</strong></h3>

<em>2025 - 至今 硬件与算法负责人</em>

- 双目近眼 NIR 相机 + 双路场景相机布局；整机约 50 g，前摄视场约 114°
- 近眼采样约 240 Hz，深度学习瞳孔检测约 60 fps，注视精度约 1–2°，并实现双目辐辏近距深度估计
- 在 LPW / TEyeD PitW / 自有 NIR 三个数据集上横向对比多组瞳孔检测模型，确定 YOLO 实时部署方案（自有 NIR 检测率约 93%，68 FPS）
- 对比 Linear / Poly2 / Poly3 / Vector 四种注视校准方法，最优 Poly3（RMSE 9.36 px）
- 完成 ArUco 屏幕校准 MVP 与 Streamlit 分析工具链（配置–采集–处理–结果全闭环）

</div>

<div class="lang-en">

<h3><strong>Visual-Haptic Interaction Mechanisms in Eye-Control Systems with Physical Controllers</strong></h3>

<em>2021.01 - Present &nbsp; Participant &nbsp; NSFC General Program 72171044</em>

- Wrote literature review and drew technical roadmap for the grant proposal (successfully funded)
- Master's thesis: Mixed digital-paper text annotation via eye-touch interaction (HoloLens 2, MRTK3)
- Gaze-blink compound interaction study; paper accepted by Advanced Engineering Informatics
- Eye-tracking password input invention patent (published)

<h3><strong>Visual-Haptic Interaction Mechanisms in Eye-Control Equipment Systems</strong></h3>

<em>2023 - 2025 &nbsp; Technical Lead &nbsp; Ministry of Education Joint Fund</em>

- Led technical roadmap planning, experiment design, and implementation

<h3><strong>Visual Representation and Evaluation of Interactive Interface Elements for Eye-Control Systems</strong></h3>

<em>2021.01 - 2021.12 &nbsp; Participant &nbsp; NSFC Youth Fund 71801037</em>

- Studied widget-size and speed trade-offs in smooth-pursuit eye-control interfaces; paper accepted by Displays (JCR Q1)

<h3><strong>Book: "Eye-Control Interaction Paradigm Design"</strong></h3>

<em>2024 - 2025 &nbsp; Contributing Author / Technical Editor &nbsp; Science Press (published)</em>

- By Yafeng Niu, Science Press, Dec 2025, ISBN 978-7-03-083699-1; part of the "Frontier Technologies in Intelligent HCI" series (~300,000 characters)
- Authored Chapter 1, "Introduction" (~30,000 characters), establishing the knowledge framework for eye-control interaction; contributed to technical editing of the full manuscript

<h3><strong>Head-Mounted NIR Eye-Tracking System (in-house hardware platform)</strong></h3>

<em>2025 - Present &nbsp; Hardware and Algorithm Lead</em>

- Binocular near-eye NIR cameras plus dual scene cameras; ~50 g total weight, ~114° front-camera FOV
- ~240 Hz near-eye sampling, ~60 fps deep-learning pupil detection, ~1–2° gaze accuracy, with binocular-vergence near-field depth estimation
- Benchmarked pupil-detection models across LPW / TEyeD PitW / in-house NIR datasets; selected YOLO for real-time deployment (~93% detection rate, 68 FPS on in-house NIR)
- Compared Linear / Poly2 / Poly3 / Vector gaze-calibration methods; Poly3 performed best (RMSE 9.36 px)
- Built an ArUco screen-calibration MVP and a Streamlit toolchain covering configure–collect–process–results

</div>

---

<h2 data-i18n-zh="论文与专著" data-i18n-en="Publications and Monograph">论文与专著</h2>

<div class="lang-zh">

完整列表详见 [论文成果](/publications/) 页面。

**在审 / 在投（4 篇）**

<ol class="patent-list">
  <li><u>Wang, Y.</u> et al. Gaze2Foot: Foot Primitives and Stabilization Mechanisms for Gaze-Foot Target Selection Across Postures. <em>ACM TOCHI</em>（CCF-A），一作，在审</li>
  <li><u>Wang, Y.</u> et al. SPMark: Improving Small-Target Text Selection with Smooth-Pursuit Gaze Interaction in Hybrid Paper–Digital Environments. <em>Virtual Reality</em>（Springer, SCI），一作，一审修回、评审中</li>
  <li><u>Wang, Y.</u> et al. Gaze Localizes, the Head Confirms: Staged Head–Eye Coordination for Hands-Free Selection in Dense AR. <em>IJHCI</em>（SCI），一作，在审</li>
  <li>Gaze-Driven Topological Phase-Transition Metasurfaces. <em>Opto-Electronic Advances</em>，共同一作，大修</li>
</ol>

**代表性已发表论文**

<ol class="patent-list">
  <li>牛亚峰, <u>王以俨</u>, 黄炜驰, 范林涵. (2025). 基于设计工效学的眼控交互范式设计研究现状与进展. 《包装工程》（中文核心），学生一作</li>
  <li>Niu, Y., Tian, J., Xue, C., Wang, Y., Yang, W., &amp; <u>Wang, Y.-Y.</u> (2025). Enhancing gaze interaction performance through fisheye expansion and dynamic trigger strategies. <em>Advanced Engineering Informatics</em>, 65, 103122.</li>
  <li><u>Wang, Y.</u>, Tian, J., Xue, C., Yang, W., &amp; Niu, Y. (2024). Research on a spatial-temporal characterisation of blink-triggered eye control interactions. <em>Advanced Engineering Informatics</em>, 59, 102297.（一作）</li>
  <li><u>Wang, Y.</u>, Wen, C., Tian, J., Huang, W.-C., Niu, Y., Yang, W., &amp; Xue, C. (2024). Design recommendations of target size and tracking speed … for smooth pursuit in eye-control system. <em>Displays</em>, 81, 102608.（一作）</li>
</ol>

**专著**

<ol class="patent-list">
  <li>牛亚峰. (2025). 《眼控交互范式设计》. 北京：科学出版社. ISBN 978-7-03-083699-1.（“智能人机交互前沿技术丛书”，全书约 30 万字；<u>王以俨</u>主笔第一章“绪论”约 3 万字，并参与全书技术统稿）</li>
</ol>

</div>

<div class="lang-en">

See the [Publications](/publications/) page for the full list.

**Under review / submitted (4)**

<ol class="patent-list">
  <li><u>Wang, Y.</u> et al. Gaze2Foot: Foot Primitives and Stabilization Mechanisms for Gaze-Foot Target Selection Across Postures. <em>ACM TOCHI</em> (CCF-A), first author, under review</li>
  <li><u>Wang, Y.</u> et al. SPMark: Improving Small-Target Text Selection with Smooth-Pursuit Gaze Interaction in Hybrid Paper–Digital Environments. <em>Virtual Reality</em> (Springer, SCI), first author, revised and under review</li>
  <li><u>Wang, Y.</u> et al. Gaze Localizes, the Head Confirms: Staged Head–Eye Coordination for Hands-Free Selection in Dense AR. <em>IJHCI</em> (SCI), first author, under review</li>
  <li>Gaze-Driven Topological Phase-Transition Metasurfaces. <em>Opto-Electronic Advances</em>, co-first author, major revision</li>
</ol>

**Selected published papers**

<ol class="patent-list">
  <li>Y. Niu, <u>Y. Wang</u>, W. Huang, L. Fan. (2025). Research status and progress of eye-control interaction paradigm design based on design ergonomics. <em>Packaging Engineering</em> (Chinese core journal), student first author</li>
  <li>Niu, Y., Tian, J., Xue, C., Wang, Y., Yang, W., &amp; <u>Wang, Y.-Y.</u> (2025). Enhancing gaze interaction performance through fisheye expansion and dynamic trigger strategies. <em>Advanced Engineering Informatics</em>, 65, 103122.</li>
  <li><u>Wang, Y.</u>, Tian, J., Xue, C., Yang, W., &amp; Niu, Y. (2024). Research on a spatial-temporal characterisation of blink-triggered eye control interactions. <em>Advanced Engineering Informatics</em>, 59, 102297. (first author)</li>
  <li><u>Wang, Y.</u>, Wen, C., Tian, J., Huang, W.-C., Niu, Y., Yang, W., &amp; Xue, C. (2024). Design recommendations of target size and tracking speed … for smooth pursuit in eye-control system. <em>Displays</em>, 81, 102608. (first author)</li>
</ol>

**Monograph**

<ol class="patent-list">
  <li>Y. Niu. (2025). <em>Eye-Control Interaction Paradigm Design</em>. Beijing: Science Press. ISBN 978-7-03-083699-1. (Frontier Technologies in Intelligent HCI series, ~300,000 characters; <u>Y. Wang</u> authored Chapter 1, ~30,000 characters, and contributed to technical editing)</li>
</ol>

</div>

---

<h2 data-i18n-zh="专利" data-i18n-en="Patents">专利</h2>

<div class="lang-zh">

<h3><strong>眼控交互 / 眼动追踪（东南大学，8 项已公开）</strong></h3>

<ol class="patent-list">
  <li>牛亚峰, <u>王以俨</u>, 蔡劼霖, 黄炜驰, 范林涵, 王铸涛. (2026). 近眼AR设备注视隐式自适应校准方法、系统、设备及介质. 申请号 CN202610582485.2，公开号 CN122431533A，公开日 2026-07-21.【发明专利】</li>
  <li>牛亚峰, <u>王以俨</u>, 王妍妍, 黄炜驰, 范林涵, 王铸涛. (2026). 近眼AR设备凝视深度歧义消解方法、交互设备及存储介质. 申请号 CN202610520767.X，公开号 CN122369009A，公开日 2026-07-10.【发明专利】</li>
  <li>牛亚峰, <u>王以俨</u>, 尹慧芳, 黄炜驰, 范林涵, 王铸涛. (2026). 多模态大模型交互消歧方法、系统、设备及介质（基于眼动意图模式分类）. 申请号 CN202610621745.2，公开号 CN122286538A，公开日 2026-06-26.【发明专利】</li>
  <li>牛亚峰, 范林涵, 黄炜驰, <u>王以俨</u>, 王铸涛, 何花. (2026). 一种基于DMA的多通道超声换能器相控阵驱动方法. 申请号 CN202610009022.7，公开号 CN121763911A，公开日 2026-03-31.【发明专利】</li>
  <li>牛亚峰, 黄炜驰, <u>王以俨</u>, 范林涵, 王铸涛. (2026). 基于误差反向引导的眼动交互方法及交互系统. 申请号 CN202511546035.X，公开号 CN121349306A，公开日 2026-01-16.【发明专利】</li>
  <li>牛亚峰, <u>王以俨</u>, 范林涵, 黄炜驰. (2024). 混合凝视平滑追踪的眼触控小目标对象选择方法及设备. 申请号 CN202411140247.3，公开号 CN119045661A，公开日 2024-11-29.【发明专利】</li>
  <li>牛亚峰, <u>王以俨</u>, 黄炜驰, 范林涵. (2024). 基于平滑追踪的混合数字纸的文本标绘系统及标绘方法. 申请号 CN202411140022.8，公开号 CN119045660A，公开日 2024-11-29.【发明专利】</li>
  <li>田景泽, 牛亚峰, <u>王以俨</u>, 何家新, 黄炜驰, 杨文骏. (2023). 眼动密码输入方法、系统及设备. 申请号 CN202310365466.0，公开号 CN116755544A，公开日 2023-09-15.【发明专利】</li>
</ol>

<p>另有 1 项已受理待公开：基于触觉运动幻觉诱发跨模态方向性响应的感知确认交互方法、系统、交互设备及存储介质（申请号 CN202610695594.5，2026-05-20 受理）；2 项眼动追踪发明专利正在与代理修改中。</p>

<h3><strong>本科阶段（中国农业大学）</strong></h3>

<ol class="patent-list">
  <li>柳沙, <u>王以俨</u>, 李琳, 李鸿盛, 谭宇. (2021). 一种自动化芦苇笋剥笋装置. 申请号 CN202021067017.6，授权公告号 CN212520711U.【实用新型，已授权】</li>
  <li>柳沙, 龙杨, 李钰冰, 鞠雨欣, 薄佳乐, 杨凤, <u>王以俨</u>. (2020). 立式芦苇笋剥笋装置. 申请号 CN201811180636.3，授权公告号 CN109222129B.【发明专利，已授权】</li>
  <li>柳沙, 鞠雨欣, 李钰冰, 龙杨, <u>王以俨</u>, 杨凤, 彭文博. (2019). 整杆式甘蔗打捆收获机. 申请号 CN201920095424.9，授权公告号 CN209861624U.【实用新型，已授权】</li>
</ol>

</div>

<div class="lang-en">

<h3><strong>Eye-Control / Eye-Tracking (Southeast University, 8 published)</strong></h3>

<ol class="patent-list">
  <li>Y. Niu, <u>Y. Wang</u>, J. Cai, W. Huang, L. Fan, Z. Wang. (2026). Implicit adaptive gaze calibration method, system, device, and medium for near-eye AR. App. No. CN202610582485.2, Pub. No. CN122431533A, 2026-07-21. [Invention Patent]</li>
  <li>Y. Niu, <u>Y. Wang</u>, Y. Wang, W. Huang, L. Fan, Z. Wang. (2026). Near-eye AR device gaze-depth ambiguity resolution method, interactive device, and storage medium. App. No. CN202610520767.X, Pub. No. CN122369009A, 2026-07-10. [Invention Patent]</li>
  <li>Y. Niu, <u>Y. Wang</u>, H. Yin, W. Huang, L. Fan, Z. Wang. (2026). Multimodal LLM interaction disambiguation method, system, device, and medium (gaze-intent pattern classification). App. No. CN202610621745.2, Pub. No. CN122286538A, 2026-06-26. [Invention Patent]</li>
  <li>Y. Niu, L. Fan, W. Huang, <u>Y. Wang</u>, Z. Wang, H. He. (2026). DMA-based multi-channel ultrasonic transducer phased-array driving method. App. No. CN202610009022.7, Pub. No. CN121763911A, 2026-03-31. [Invention Patent]</li>
  <li>Y. Niu, W. Huang, <u>Y. Wang</u>, L. Fan, Z. Wang. (2026). Error-reverse-guided gaze interaction method and interaction system. App. No. CN202511546035.X, Pub. No. CN121349306A, 2026-01-16. [Invention Patent]</li>
  <li>Y. Niu, <u>Y. Wang</u>, L. Fan, W. Huang. (2024). Hybrid gaze-smooth-pursuit eye-touch small-target selection method and device. App. No. CN202411140247.3, Pub. No. CN119045661A, 2024-11-29. [Invention Patent]</li>
  <li>Y. Niu, <u>Y. Wang</u>, W. Huang, L. Fan. (2024). Smooth-pursuit-based hybrid digital-paper text annotation system and method. App. No. CN202411140022.8, Pub. No. CN119045660A, 2024-11-29. [Invention Patent]</li>
  <li>J. Tian, Y. Niu, <u>Y. Wang</u>, J. He, W. Huang, W. Yang. (2023). Eye-tracking password input method, system, and device. App. No. CN202310365466.0, Pub. No. CN116755544A, 2023-09-15. [Invention Patent]</li>
</ol>

<p>One further patent is filed and awaiting publication: perceptual-confirmation interaction based on tactile-motion-illusion-induced cross-modal directional response (App. No. CN202610695594.5, filed 2026-05-20). Two more eye-tracking patents are in revision with the patent agent.</p>

<h3><strong>Undergraduate Period (China Agricultural University)</strong></h3>

<ol class="patent-list">
  <li>S. Liu, <u>Y. Wang</u>, L. Li, H. Li, Y. Tan. (2021). Automatic reed-shoot peeling device. App. No. CN202021067017.6, Grant No. CN212520711U. [Utility Model, Granted]</li>
  <li>S. Liu, Y. Long, Y. Li, Y. Ju, J. Bo, F. Yang, <u>Y. Wang</u>. (2020). Vertical reed-shoot peeling device. App. No. CN201811180636.3, Grant No. CN109222129B. [Invention Patent, Granted]</li>
  <li>S. Liu, Y. Ju, Y. Li, Y. Long, <u>Y. Wang</u>, F. Yang, W. Peng. (2019). Whole-stalk sugarcane bundling harvester. App. No. CN201920095424.9, Grant No. CN209861624U. [Utility Model, Granted]</li>
</ol>

</div>

---

<h2 data-i18n-zh="软件著作权" data-i18n-en="Registered Software">软件著作权</h2>

<div class="lang-zh">
<ol class="patent-list">
  <li>殷成刚, <u>王以俨</u>. (2020). 基于Python的工程信息交互仿真软件（V1.0）. 中国农业大学.</li>
  <li>殷成刚, <u>王以俨</u>. (2020). 基于Python语言的新产品开发流程动画仿真软件（V1.0）. 中国农业大学.</li>
  <li>殷成刚, <u>王以俨</u>. (2020). 基于Python语言多项目并行开发时间管理软件（V1.0）. 中国农业大学.</li>
</ol>
</div>

<div class="lang-en">
<ol class="patent-list">
  <li>C. Yin, <u>Y. Wang</u>. (2020). Python-Based Engineering Information Communication Simulation Software (v1.0). China Agricultural University.</li>
  <li>C. Yin, <u>Y. Wang</u>. (2020). Python-Based New Product Development Process Animation Simulation Software (v1.0). China Agricultural University.</li>
  <li>C. Yin, <u>Y. Wang</u>. (2020). Python-Based Multi-Project Concurrent Development Time-Management Software (v1.0). China Agricultural University.</li>
</ol>
</div>

---

<h2 data-i18n-zh="技能" data-i18n-en="Skills">技能</h2>

<div class="lang-zh">

- **眼动与 XR**：Pupil Labs、Tobii、自研 NIR 眼动仪；HoloLens 2、Unity、MRTK3、Vuforia
- **编程与算法**：Python（PyTorch、YOLO、OpenCV、PySide6）、C#、R
- **实验与统计**：工效学实验设计、pandas / scipy / statsmodels、SPSS、质性研究
- **语言**：中文（母语）、英语

</div>

<div class="lang-en">

- **Eye tracking & XR**: Pupil Labs, Tobii, in-house NIR eye tracker; HoloLens 2, Unity, MRTK3, Vuforia
- **Programming & algorithms**: Python (PyTorch, YOLO, OpenCV, PySide6), C#, R
- **Experiments & statistics**: ergonomic experiment design, pandas / scipy / statsmodels, SPSS, qualitative methods
- **Languages**: Chinese (native), English

</div>

---

<h2 data-i18n-zh="荣誉" data-i18n-en="Awards">荣誉</h2>

<div class="lang-zh">

- 国家奖学金（2018-2019、2019-2020）
- 北京市优秀毕业生（2021）

</div>

<div class="lang-en">

- National Scholarship (2018-2019, 2019-2020)
- Beijing Outstanding Graduate (2021)

</div>
