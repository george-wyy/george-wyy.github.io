---
title: "Tobii 眼动接入与校准工作台"
title_en: "Tobii access and calibration workbench"
collection: portfolio
permalink: /projects/tobiifree/
project_id: tobiifree
project_kind: software
project_order: 3
featured: true
period: '2026'
summary_zh: "基于 tobiifree 扩展校准验证、误差校正与方案保存，并在独立分支加入 Tobii 4C 的 WebUSB 接入支持。"
summary_en: "Extends tobiifree with calibration validation, error correction, and saved profiles, plus Tobii 4C WebUSB support on a separate branch."
repository: https://github.com/george-wyy/tobiifree
---

<p class="lang-zh">基于 <a href="https://github.com/Aetherall/tobiifree">Aetherall/tobiifree</a> 的个人扩展，围绕眼动设备接入、校准质量检查和误差校正构建研究工具。上游提供设备协议与基础接入能力；本项目重点展示以下扩展。</p>
<p class="lang-en">A personal extension of <a href="https://github.com/Aetherall/tobiifree">Aetherall/tobiifree</a>, focused on device access, calibration validation, and error correction for gaze research. The upstream project provides the protocol and base connectivity; the contributions below extend that foundation.</p>

<h2 data-i18n-zh="校准验证与误差校正" data-i18n-en="Calibration validation and correction">校准验证与误差校正</h2>
<ul class="lang-zh">
  <li>提供 5、9、13 点校准后验证，检查不同屏幕位置的注视误差。</li>
  <li>在设备自带校准之上，增加仿射、二阶及三阶多项式校正，并可切换比较校正前后效果。</li>
  <li>显示平均、P95、最大误差和逐点残差；支持保存、载入与导出校准方案。</li>
</ul>
<ul class="lang-en">
  <li>Post-calibration validation with 5-, 9-, and 13-point grids.</li>
  <li>Affine, quadratic, and cubic correction layered on onboard calibration, with a runtime comparison toggle.</li>
  <li>Mean, P95, maximum, and per-point residuals; saved, loadable, and exportable calibration profiles.</li>
</ul>

<h2 data-i18n-zh="Tobii 4C 浏览器接入" data-i18n-en="Tobii 4C browser access">Tobii 4C 浏览器接入</h2>
<p class="lang-zh">在 <a href="https://github.com/george-wyy/tobiifree/tree/feat/tobii-4c-support">feat/tobii-4c-support</a> 分支扩展 WebUSB 设备识别与接入。仓库记录了 macOS / Chrome 下的 90 Hz 注视数据流和五点仿射校准验证。该支持限于 WebUSB 路径，尚未覆盖原生 Linux 守护进程。</p>
<p class="lang-en">The <a href="https://github.com/george-wyy/tobiifree/tree/feat/tobii-4c-support">feat/tobii-4c-support</a> branch adds WebUSB device detection and access. The repository documents a 90 Hz gaze stream and five-point affine calibration on macOS / Chrome. Support is limited to the WebUSB path and does not extend to the native Linux daemon.</p>

<p class="lang-zh">项目处于实验阶段。校准工作台位于主分支，4C 支持位于独立分支；项目沿用上游 GPL-3.0 许可证。</p>
<p class="lang-en">Experimental software. The calibration workbench is on main, while 4C support is on a separate branch. The project retains the upstream GPL-3.0 license.</p>

[GitHub · README](https://github.com/george-wyy/tobiifree#fork-additions)
