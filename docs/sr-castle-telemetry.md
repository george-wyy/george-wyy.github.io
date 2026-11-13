# 城堡任务：公开试玩与可选记录

页面为 `demos/sr-castle.html`，首页有试玩和算法入口。原游戏在 MyLibrary 内的文件保持不变，本站复制版独立运行，不依赖 MyLibrary 服务。

## 记录方式

复用第一款游戏的可选发送器 `demos/mtrl-telemetry.js`，由 `sr-castle-telemetry-config.js` 指向同一个自有 Supabase 项目内的独立表 `sr_castle_events`。原来的 `mtrl_events` 表和第一款游戏的默认端点保持不变。

- 默认不勾选上传，昵称可选；勾选且通过 9 道理解题后，记录匿名访问/开始事件。不统计所有打开页面的访问量。
- 同一浏览器共用已有匿名编号，换设备、清除站点数据或禁止存储时可能改变。此编号不是身份认证，不使用设备指纹。
- start：试玩模式、理解题答错次数、条件顺序、各局房间位置/颜色与试次安排。
- round：全局试次编号，以及所属局、条件、局内试次、阶段、起点、路径、选门反应时间、拿分反应时间和得分。每局有 39 个学习试次、9 个重新学习试次和 1 个测试选择，共 49 条；四局共 196 条。
- complete：总分、每局最终入口选择、阶段 1 偏好、是否换路、按原演示规则排除的状态，以及全部试次日志。测试选择本身不计分。
- 不主动收集 IP、账户、User-Agent 或完整来源网址；托管服务自身仍可能有网络日志。

上传只在后台进行，4 秒超时，每事件最多尝试 3 次，最多暂存 256 条，事件 UUID 主键保证重试去重。关闭网页后内存队列不保留，也不保证能记录精确退出时间。未配置、缺脚本、脚本抛错、网络或数据库不可用，都不能阻塞游戏。上传成功、失败和重试均静默处理，只在开头保留说明与勾选项。

## 数据库与查看

在自有项目 SQL Editor 执行 `docs/sr-castle-telemetry.sql`。公网客户端只能插入事件，不能读取、更新、删除记录，也不能指定服务器接收时间。管理员在 Supabase Dashboard 查看/导出。数据为客户端提交，不能当成服务端核验的正式实验数据，也没有防灌水保证。

拥有者查询整局结果：

```sql
select created_at, session_id, visitor_id, nickname,
       payload->'blocks' as blocks, payload->>'total_score' as total_score,
       jsonb_array_length(payload->'log') as trials
from public.sr_castle_events
where kind = 'complete' and nickname <> 'connection-sr-browser-test'
order by created_at desc;
```

沿用第一款游戏的导出/保留做法：先导出、再手动清理超过 90 天的数据；没有自动删除任务。不要把后台私钥或数据库密码写入网页。免费项目暂停只影响记录上传。

## 同时修复的原游戏问题

- 测试选门结束后清空路径，避免上一座城堡的路径带入下一局，确保随机起点生效。
- 切离试玩或重绘当前试次时移除旧空格监听，避免算法页中按空格仍给隐藏游戏加分。

## 本地验证

```sh
node scripts/tests/mtrl-telemetry.test.mjs
node scripts/tests/sr-castle.test.mjs
```

使用无依赖 DOM 替身推进实际游戏函数，覆盖四条件、四局、缺脚本、脚本抛错、请求失败/卡住、不同游戏表隔离、完整日志大小与标签切换。真实浏览器和线上权限验证结果另见完成记录。

## 真实接入完成记录（2026-11-13）

- 在自有 `mtrl-game`（`fkqhwyfasytbjvnagvna`，Tokyo，Free）项目中创建 `sr_castle_events`。
- 公钥 POST 201、重复 UUID 409/23505；GET/PATCH/DELETE 与指定 created_at 的写入均被拒绝（401/42501）。
- 真实浏览器完成奖励重估条件的一局：管理员 SQL 确认 visit 1、start 1、round 49、complete 1，最后试次 49，complete.payload.log 长度 49。
- 合成记录昵称为 `connection-sr-browser-test`；接口权限测试使用 `connection-test` 且 payload.test=true。两类均保留作验证证据，分析真实访客时排除。
- 本地第一款游戏 12 项回归检查、第二款游戏 6 项流程/隔离/故障检查通过；Jekyll 构建通过。四局全流程为本地 DOM 替身验证，真实浏览器验证了一局。
- 尚未推送或部署至 GitHub Pages；公网访问需发布后验证。

## 触屏操作更新（2026-11-13）

入口、开门和领分方块改为有名称的原生按钮；手机触摸目标不小于 44px。画布保持最小高度，门和提示文字使用可随屏幕旋转变化的最小间距，不通过重新渲染当前试次来适应旋转。重复点门或领分不会重复计入路径或得分。start/complete 的 payload 用 ui_version=touch-1 区分界面，原任务条件与记录表保持一致，上传继续静默运行。

已在 320px/390px 竖屏、844px 横屏和电脑宽度的浏览器中检查门不重叠、目标不被裁切，实测点门和点方块领分进入下一回合。原有 12 项测试与城堡游戏 7 项检查通过（含连续点按防重）。未做真实 iOS/Android 设备测试。
