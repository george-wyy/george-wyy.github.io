---
title: "眼控交互范式演进：从 Dwell 到多模态"
title_en: "Evolution of Eye-Control Interaction: From Dwell to Multimodal"
date: 2026-01-10
tags: [论文解读, Eye Tracking, HCI, 综述]
excerpt_zh: "梳理眼控交互的四大范式——凝视驻留、眨眼触发、平滑追踪、多模态融合——的演进脉络与设计取舍。"
excerpt_en: "A survey of four eye-control interaction paradigms — dwell, blink, smooth pursuit, and multimodal — tracing their evolution and design trade-offs."
---

<div class="lang-zh" markdown="1">

## 什么是眼控交互？

眼控交互（Eye-Control Interaction）是指利用眼动追踪技术，将用户的眼球运动转化为计算机输入指令的交互方式。它的吸引力在于：眼球运动是人类最快速、最自然的指向行为——我们在与物理世界交互时，注视几乎总是先于手的动作。如果能把这种"看向哪里"的信息直接用于交互，理论上可以实现比传统输入方式更快、更直觉的操作。

然而，眼动作为输入通道有一个根本性的挑战：眼睛同时承担着感知和控制两种角色。我们时刻在"看"世界以获取信息，而眼控交互要求我们的"看"同时被解读为操作命令。如何区分"用户在看某个按钮"和"用户想要点击这个按钮"——这是贯穿所有眼控范式设计的核心问题。

本文梳理了眼控交互的四大范式及其演进脉络。相关内容也可参阅我们发表在《包装工程》上的综述论文"基于设计工效学的眼控交互范式设计研究现状与进展"。

## 范式一：凝视驻留（Dwell-Based）

凝视驻留是最早也最直觉的眼控方案：用户注视某个目标一段固定时间（通常 300-1000 毫秒），系统将其解释为选择指令。这一思路至少可以追溯到 Jacob (1990) 的开创性工作。

**优点**：概念简单，用户易于理解；不需要额外的输入设备。

**核心问题——Midas Touch**：这个由 Jacob 命名的经典问题指出，用户每次注视都可能被误解为操作意图。驻留时间设置过短，误触发频繁；设置过长，交互效率下降，用户感到不自然。Majaranta & Raiha (2002) 的研究系统分析了驻留时间对打字速度和错误率的权衡关系。

**改进方向**：自适应驻留时间（根据目标大小和用户熟练度动态调整）、以及 Mott et al. (2017) 提出的 Cluster-based 方法，通过分析注视模式的空间聚类来改善触发判断。

## 范式二：眨眼触发（Blink-Triggered）

为解决 Midas Touch，研究者开始探索其他眼动事件作为触发信号。眨眼是一种自然选择：用户注视目标后执行一次自主眨眼（voluntary blink）来确认选择。

**时空特征**：自主眨眼与自然眨眼（involuntary blink）在持续时间上存在差异——自主眨眼通常更长（>300ms），可以通过时间阈值区分。Heikkila & Raiha (2012) 的工作详细研究了眨眼参数对交互性能的影响。

**优点**：免手操作，适合行动不便的用户（如 ALS 患者）；相比 dwell 有更明确的触发意图。

**局限**：长时间使用会导致眼疲劳；自然眨眼的变异性使得阈值设定困难；在某些用户群体中（如老年人），自主眨眼的控制能力下降。

## 范式三：平滑追踪（Smooth Pursuit）

平滑追踪范式利用了一种独特的眼球运动——当视觉目标匀速移动时，人眼会产生平滑追踪（smooth pursuit）运动来跟随它。Vidal et al. (2013) 提出了基于这一原理的交互方案：屏幕上多个目标沿不同轨迹运动，系统通过匹配用户的眼球运动轨迹与目标运动轨迹来判断用户正在追踪哪个目标。

**优点**：从根本上避免了 Midas Touch——只有当用户主动追踪一个移动目标时才会产生平滑追踪，普通注视不会触发。不需要校准（因为判断的是运动轨迹的相关性，而非绝对注视位置）。

**局限**：目标必须持续运动，这限制了界面设计；选择速度受目标运动周期影响；在复杂场景中多个目标的轨迹需要足够不同以避免混淆。Esteves et al. (2015) 将这一范式扩展到了多种交互场景，进一步探索了其适用边界。

## 范式四：多模态融合（Multimodal）

多模态范式的核心思想是：不再试图仅用眼动解决所有问题，而是将眼动与其他输入通道组合使用。眼动承担"指向"功能（快速锁定目标），其他通道承担"确认"功能。

**Eye + Hand**：Pfeuffer et al. (2017) 系统研究了注视加触控的交互设计空间。用户看向目标后通过手势确认，既保留了注视的速度优势，又避免了误触发。

**Eye + Foot**：脚部输入作为确认通道，解放双手用于其他任务。Klamka et al. (2015) 和后续工作探索了注视加脚踏的交互模式，特别适合双手被占用的工业场景。

**Eye + Voice**：语音命令作为确认手段，例如"看向目标后说出命令"。Stellmach & Dachselt (2012) 的工作探索了注视加语音的多种组合模式。

**优点**：有效解决了 Midas Touch；各通道发挥各自优势；设计空间丰富。

**局限**：增加了系统复杂度；需要额外的传感器或输入设备；多通道的时序协调是一个设计难点。

## 未来方向：隐式交互与注意力感知

当前的一个重要趋势是从显式的眼控交互（用户有意识地用眼睛"操作"）向隐式交互转变——系统通过分析用户的自然注视行为来推断意图，而不要求用户改变自然的观看习惯。

**注意力感知系统（Attention-Aware Systems）**通过持续分析用户的注视模式（注视时长、扫视路径、注意力分配），推断用户的认知状态和交互意图。例如，系统可以检测用户是否在阅读（vs. 浏览）、是否感到困惑、或者对哪个区域特别关注，并据此主动调整界面或提供帮助。

**基于瞳孔的认知状态推断**也是一个活跃方向。瞳孔直径的变化与认知负荷密切相关（task-evoked pupillary response），可以作为自适应系统调整难度或信息呈现方式的依据。

这些方向的共同特点是：眼动数据不再是直接的"命令"，而是理解用户状态的"信号"——从控制范式走向感知范式，这可能是眼控交互领域最深刻的转变。

</div>

<div class="lang-en" markdown="1">

## What Is Eye-Control Interaction?

Eye-control interaction uses eye tracking technology to translate eye movements into computer input commands. Its appeal is straightforward: eye movement is the fastest and most natural pointing behavior humans possess -- when interacting with the physical world, our gaze almost always precedes our hands. If we could directly use this "where you look" information for interaction, we could theoretically achieve faster, more intuitive operations than traditional input methods.

However, using gaze as an input channel presents a fundamental challenge: the eyes simultaneously serve perception and control. We constantly "look" at the world to gather information, while eye-control interaction requires that our "looking" also be interpreted as operational commands. How to distinguish "the user is looking at a button" from "the user wants to click this button" -- this is the central problem running through all eye-control paradigm design.

This article surveys four major eye-control paradigms and their evolution. Related content can also be found in our review paper "Research Status and Progress of Eye-Control Interaction Paradigm Design Based on Design Ergonomics" published in Packaging Engineering.

## Paradigm 1: Dwell-Based

Dwell-based selection is the earliest and most intuitive eye-control approach: the user fixates on a target for a fixed duration (typically 300-1000 milliseconds), and the system interprets this as a selection command. This concept dates back at least to Jacob's (1990) pioneering work.

**Advantages**: Conceptually simple, easy for users to understand; requires no additional input devices.

**The Core Problem -- Midas Touch**: This classic problem, named by Jacob, notes that every fixation may be misinterpreted as operational intent. Set the dwell time too short and false activations are frequent; set it too long and interaction efficiency drops while users feel unnatural. Majaranta & Raiha (2002) systematically analyzed the trade-off between dwell time, typing speed, and error rates.

**Improvements**: Adaptive dwell times (dynamically adjusted based on target size and user proficiency), and cluster-based approaches by Mott et al. (2017) that analyze spatial clustering of fixation patterns to improve trigger decisions.

## Paradigm 2: Blink-Triggered

To address the Midas Touch, researchers explored other oculomotor events as trigger signals. Blinking is a natural choice: the user fixates on a target and then performs a voluntary blink to confirm selection.

**Temporal-Spatial Characteristics**: Voluntary blinks differ from involuntary blinks in duration -- voluntary blinks are typically longer (>300ms) and can be distinguished via temporal thresholds. Heikkila & Raiha (2012) studied in detail how blink parameters affect interaction performance.

**Advantages**: Hands-free operation, suitable for users with motor impairments (e.g., ALS patients); more explicit trigger intent compared to dwell.

**Limitations**: Prolonged use causes eye fatigue; natural blink variability makes threshold setting difficult; in some user populations (e.g., elderly), voluntary blink control declines.

## Paradigm 3: Smooth Pursuit

The smooth pursuit paradigm leverages a unique eye movement -- when a visual target moves at constant velocity, the eyes produce smooth pursuit movements to follow it. Vidal et al. (2013) proposed an interaction scheme based on this principle: multiple targets on screen move along different trajectories, and the system determines which target the user is tracking by matching their eye movement trajectory against target movement trajectories.

**Advantages**: Fundamentally avoids the Midas Touch -- smooth pursuit only occurs when users actively track a moving target; ordinary fixations do not trigger it. No calibration needed (since the judgment is based on trajectory correlation, not absolute gaze position).

**Limitations**: Targets must continuously move, constraining interface design; selection speed is bounded by target motion period; in complex scenes, trajectories of multiple targets must be sufficiently distinct to avoid confusion. Esteves et al. (2015) extended this paradigm to various interaction scenarios, further exploring its applicability boundaries.

## Paradigm 4: Multimodal

The multimodal paradigm's core idea: instead of trying to solve everything with eye movement alone, combine gaze with other input channels. Gaze handles "pointing" (rapid target acquisition), while other channels handle "confirmation."

**Eye + Hand**: Pfeuffer et al. (2017) systematically studied the gaze-and-touch interaction design space. Users look at a target then confirm via gesture, preserving gaze's speed advantage while avoiding false activation.

**Eye + Foot**: Foot input as the confirmation channel, freeing hands for other tasks. Klamka et al. (2015) and subsequent work explored gaze-plus-foot-pedal interaction patterns, particularly suited for industrial scenarios where hands are occupied.

**Eye + Voice**: Voice commands as confirmation means, e.g., "look at a target then speak a command." Stellmach & Dachselt (2012) explored various gaze-plus-voice combination modes.

**Advantages**: Effectively solves the Midas Touch; each channel leverages its strengths; rich design space.

**Limitations**: Increases system complexity; requires additional sensors or input devices; temporal coordination across channels is a design challenge.

## Future Directions: Implicit Interaction and Attention-Aware Systems

A major current trend is shifting from explicit eye-control interaction (users consciously "operating" with their eyes) toward implicit interaction -- systems infer intent by analyzing natural gaze behavior without requiring users to change their viewing habits.

**Attention-Aware Systems** continuously analyze gaze patterns (fixation duration, saccade paths, attention distribution) to infer cognitive state and interaction intent. For example, a system might detect whether a user is reading (vs. scanning), feeling confused, or particularly focused on a specific region, and proactively adjust the interface or offer assistance accordingly.

**Pupil-Based Cognitive State Inference** is another active direction. Pupil diameter changes correlate closely with cognitive load (task-evoked pupillary response) and can serve as a basis for adaptive systems to adjust difficulty or information presentation.

These directions share a common thread: eye movement data is no longer a direct "command" but a "signal" for understanding user state -- moving from a control paradigm to a sensing paradigm. This may be the most profound transformation in the field of eye-control interaction.

</div>
