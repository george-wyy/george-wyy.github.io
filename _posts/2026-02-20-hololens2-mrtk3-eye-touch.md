---
title: "HoloLens 2 + MRTK3 眼触控交互开发笔记"
title_en: "HoloLens 2 + MRTK3: Eye-Touch Interaction Development Notes"
date: 2026-02-20
tags: [工具, HoloLens, MRTK, AR, Eye Tracking]
excerpt_zh: "基于 HoloLens 2 和 MRTK3 开发眼触控交互系统的实践经验，涵盖眼动追踪配置、空间定位和多模态交互。"
excerpt_en: "Practical experience developing eye-touch interaction systems with HoloLens 2 and MRTK3, covering eye tracking setup, spatial anchoring, and multimodal interaction."
---

<div class="lang-zh" markdown="1">

## HoloLens 2 的眼动追踪能力

HoloLens 2 内置了一对近红外摄像头用于眼动追踪，无需额外硬件即可获取用户的注视方向。其主要参数如下：

- **采样率**：约 30 Hz，对于交互设计足够，但不适合精细的眼动行为分析（如微扫视研究）
- **精度**：约 1.5 度视角误差，在正常使用距离下对应大约 2-3 厘米的目标偏差
- **输出**：提供注视射线（Gaze Ray）的起点和方向，而非屏幕坐标——这是 3D 空间交互与传统 2D 眼动追踪的根本区别

首次使用时系统会引导用户完成眼动校准（追踪屏幕上移动的宝石图标）。校准质量直接影响后续所有交互的可靠性，建议每次更换用户或重新佩戴设备后重新校准。

## MRTK3 中的眼动交互配置

MRTK3（Mixed Reality Toolkit 3）是 HoloLens 2 开发的标准中间件。相比 MRTK 2.x，MRTK3 采用了更模块化的架构，眼动追踪相关的核心组件包括：

**GazeInteractor**：这是 MRTK3 中负责眼动射线投射的组件。它会持续发射一条从用户眼睛出发的射线，与场景中的可交互对象进行碰撞检测。需要挂载在 MRTK XR Rig 的相应节点上。

**StatefulInteractable**：场景中需要响应注视的对象需要添加此组件。它支持多种交互状态——包括 IsGazeHovered，当用户的注视射线命中该对象时触发。

**EyeTrackingProvider**：底层的数据提供者，负责从 HoloLens 2 的眼动硬件获取原始注视数据并转换为 Unity 坐标系中的射线。

配置时需要注意在 Unity 的 Project Settings > OpenXR 中启用 Eye Gaze Interaction Profile，并在应用的 manifest 中声明 GazeInput 能力。遗漏这一步是最常见的"眼动不工作"问题来源。

## 空间定位：锚定物理对象

在 AR 环境中，一个核心挑战是将虚拟内容精确锚定到物理世界中的特定位置。HoloLens 2 提供了多种空间定位方案：

**World Anchors**：HoloLens 2 的 SLAM 系统会自动建立空间地图，可以在特定位置放置世界锚点。优点是无需额外标记物，缺点是对动态环境适应性有限。

**Marker Tracking**：使用 Vuforia 或 ArToolkit 等视觉标记系统，在物理对象上贴附特定图案（如 ArUco 标记），通过 HoloLens 的 RGB 摄像头识别标记位置。这种方式精度更高（毫米级），特别适合需要与具体物理对象交互的场景。

**QR Code Tracking**：HoloLens 2 原生支持 QR 码检测与空间定位，实现简单但精度略低于专用 fiducial marker。

实际项目中，我推荐混合使用：用 marker tracking 做初始对齐，然后切换到 world anchor 保持稳定性——这样即使标记被遮挡，虚拟内容也不会漂移。

## 眼触控多模态交互设计

"眼触控"（Eye-Touch）的核心思想是将注视用于快速选择目标，用手势用于确认操作——解决了纯眼控交互中的 Midas Touch 问题（注视即触发的误操作问题）。

在 MRTK3 中实现这种多模态交互的基本思路是：

1. **注视选择阶段**：GazeInteractor 持续追踪用户注视的对象，被注视的对象进入"预选中"状态（可以用视觉高亮反馈）
2. **手势确认阶段**：当用户对预选中的对象执行 Air Tap（食指捏合）或其他手势时，确认选择
3. **状态管理**：需要处理注视目标切换时的状态清理、手势识别的时间窗口、以及多对象同时被注视时的优先级

这种设计的优势在于：注视提供了快速的隐式指向（用户自然地看向感兴趣的对象），手势提供了明确的显式确认（避免误触发），两个通道互补。

## 实用建议与常见坑

**校准相关**：
- 每次更换用户必须重新校准。不同用户的瞳距和眼球特征差异显著
- 佩戴眼镜的用户可能需要调整设备位置以获得最佳追踪质量
- 校准后让用户看向已知位置验证精度，再开始正式实验

**开发调试**：
- Unity Editor 中无法获取真实眼动数据，需使用 MRTK3 的模拟输入（鼠标模拟注视）进行基本逻辑调试
- 部署到设备上测试是不可替代的——模拟器中的交互感受与真实佩戴差异很大
- 使用 Device Portal 的实时预览功能可以看到用户的第一人称视角，方便旁观调试

**性能相关**：
- 眼动数据处理本身开销很小，但注视射线的碰撞检测频率（每帧一次）在场景复杂时可能成为瓶颈
- 建议为可注视对象使用简化的碰撞体（Collider），而非 Mesh Collider
- 注视数据天然带有噪声，建议对注视点做轻度的时间平滑处理

**常见问题排查**：
- 眼动完全不工作：检查 OpenXR 配置和 manifest 权限
- 注视偏移严重：重新校准，检查设备是否佩戴到位
- 手势识别率低：确保手部在 HoloLens 的可视范围内（设备前方约 50cm 的区域）

</div>

<div class="lang-en" markdown="1">

## HoloLens 2 Eye Tracking Capabilities

HoloLens 2 includes a pair of near-infrared cameras for built-in eye tracking, requiring no additional hardware to obtain the user's gaze direction. Key specifications:

- **Sampling rate**: ~30 Hz -- sufficient for interaction design, but not for fine-grained oculomotor research (e.g., microsaccade studies)
- **Accuracy**: ~1.5 degrees of visual angle, corresponding to roughly 2-3 cm of target offset at typical usage distances
- **Output**: Provides a gaze ray (origin + direction) rather than screen coordinates -- a fundamental difference between 3D spatial interaction and traditional 2D eye tracking

On first use, the system guides users through eye calibration (tracking a gem icon moving across the display). Calibration quality directly affects all subsequent interaction reliability. Recalibrate whenever switching users or re-donning the device.

## Eye Tracking Configuration in MRTK3

MRTK3 (Mixed Reality Toolkit 3) is the standard middleware for HoloLens 2 development. Compared to MRTK 2.x, MRTK3 adopts a more modular architecture. Core eye tracking components include:

**GazeInteractor**: The component responsible for eye gaze raycasting in MRTK3. It continuously casts a ray from the user's eyes, performing hit detection against interactable objects in the scene. It must be attached to the appropriate node in the MRTK XR Rig.

**StatefulInteractable**: Scene objects that need to respond to gaze must include this component. It supports multiple interaction states -- including IsGazeHovered, triggered when the user's gaze ray hits the object.

**EyeTrackingProvider**: The underlying data provider that retrieves raw gaze data from HoloLens 2 eye tracking hardware and converts it into rays in Unity's coordinate system.

During setup, remember to enable the Eye Gaze Interaction Profile in Unity's Project Settings > OpenXR, and declare the GazeInput capability in the application manifest. Missing this step is the most common source of "eye tracking not working" issues.

## Spatial Anchoring: Registering Physical Objects

In AR environments, a core challenge is precisely anchoring virtual content to specific locations in the physical world. HoloLens 2 offers several spatial anchoring approaches:

**World Anchors**: HoloLens 2's SLAM system automatically builds a spatial map, allowing world anchors at specific positions. The advantage is no additional markers needed; the downside is limited adaptability to dynamic environments.

**Marker Tracking**: Visual marker systems like Vuforia or ArToolkit use specific patterns (e.g., ArUco markers) attached to physical objects, recognized via HoloLens's RGB camera. This approach offers higher precision (millimeter-level), particularly suitable for scenarios requiring interaction with specific physical objects.

**QR Code Tracking**: HoloLens 2 natively supports QR code detection and spatial positioning. Simple to implement but slightly less precise than dedicated fiducial markers.

In practice, I recommend a hybrid approach: use marker tracking for initial alignment, then switch to world anchors for stability -- so virtual content remains stable even when markers are occluded.

## Eye-Touch Multimodal Interaction Design

The core idea of "Eye-Touch" is using gaze for rapid target selection and hand gestures for action confirmation -- solving the Midas Touch problem inherent in pure gaze interaction (unintended activation simply by looking).

The basic approach to implementing this multimodal interaction in MRTK3:

1. **Gaze Selection Phase**: GazeInteractor continuously tracks the object the user is looking at. The gazed object enters a "pre-selected" state (with visual highlight feedback).
2. **Gesture Confirmation Phase**: When the user performs an Air Tap (index finger pinch) or other gesture on the pre-selected object, the selection is confirmed.
3. **State Management**: Handle state cleanup when gaze targets switch, time windows for gesture recognition, and priority when multiple objects are simultaneously gazed.

The design advantage: gaze provides fast implicit pointing (users naturally look at objects of interest), gestures provide explicit confirmation (preventing false activation). The two channels are complementary.

## Practical Tips and Common Pitfalls

**Calibration**:
- Recalibrate for every new user. Interpupillary distance and eye characteristics vary significantly
- Users wearing glasses may need device position adjustments for optimal tracking quality
- After calibration, have users look at known positions to verify accuracy before starting experiments

**Development and Debugging**:
- Unity Editor cannot access real eye tracking data -- use MRTK3's simulated input (mouse simulating gaze) for basic logic debugging
- On-device testing is irreplaceable -- the interaction experience in the simulator differs substantially from actual wear
- Use Device Portal's live preview to see the user's first-person view, facilitating observer-side debugging

**Performance**:
- Eye tracking data processing overhead is minimal, but gaze ray collision detection frequency (once per frame) can become a bottleneck in complex scenes
- Use simplified colliders for gazeable objects rather than Mesh Colliders
- Gaze data is inherently noisy -- apply light temporal smoothing to gaze points

**Common Troubleshooting**:
- Eye tracking completely non-functional: Check OpenXR configuration and manifest permissions
- Severe gaze offset: Recalibrate, verify proper device fit
- Low gesture recognition rate: Ensure hands are within HoloLens's visible range (approximately 50 cm in front of the device)

</div>
