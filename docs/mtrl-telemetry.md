# 中世纪商人：可选 Supabase 埋点

游戏本体是静态网页，不依赖 Supabase。两个可选脚本 404、脚本抛错、配置缺失、浏览器禁止存储、网络断开、请求超时、数据库暂停或拒绝写入，都不应阻止试玩和结果显示。前端没有管理员密钥，也没有独立的管理网页。

## 启用

1. 登录自己管理的 Supabase 项目，在 SQL Editor 执行同目录的 `mtrl-telemetry.sql`。不要在 Daily Paper Reader 上游共享的数据库上操作。其公开网页里的 publishable key 不能证明你拥有该项目，也不能用于创建新表。
2. 从该项目的设置获取 Project URL 和 **publishable key**，填写 `demos/mtrl-telemetry-config.js`。连接地址限 HTTPS 的 `*.supabase.co`；仅支持 `sb_publishable_` 公钥。不要填写 `sb_secret_`、`service_role`、数据库密码或个人访问令牌。公钥可公开，权限由数据库授权和 RLS 限制。
3. 在本地试玩页勾选上传，开始并完成一局。用 Supabase Table Editor 查看 `mtrl_events`，可筛选 `kind = complete` 后导出 CSV。详细的每轮数据也保留在 complete 的 payload.log 中。
4. 上线前用公钥验证 POST 成功、同 event_id 重试不增加行数、GET/PATCH/DELETE 被拒绝，created_at 不可由客户端指定。SQL 尚未在真实项目执行时不能认为权限已通过实测。

## 数据含义与边界

- 默认不勾选；未同意时不创建持久匿名编号，也不上传昵称或结果。匿名编号是在浏览器存储的随机 UUID，不是身份认证；清除站点数据、换设备或禁用存储会改变编号。
- visit/start 只在勾选并点击开始后记录。因此访问数是同意上传并开始的访问量，不代表所有打开页面的人数。不发送 IP、User-Agent、完整来源网址或账号凭据；托管服务自身可能保留网络日志。
- 每轮事件包含完成轮数、房间、收益、标准价格向量、是否测试轮和两次选门反应时间。start 保存实验设定及资源维度映射；complete 保存完整轮次、是否记笔记、问答错误次数与汇总。昵称最多 40 字，仅作为数据提交，不拼入 HTML。
- 上传在后台串行运行，每次最多等待 4 秒，同一事件最多尝试 3 次，最多暂存 256 条。事件 UUID 主键避免重试重复。待发送记录只在内存中；关页后不重传，不能保证全部到达，也不能精确确定退出时间。按使用反馈，上传成功、失败和重试均不在游戏中提示；只在开头保留上传说明与勾选项。
- 匿名客户端为 insert-only；管理员在 Supabase Dashboard 查看。此权限不阻止别人伪造提交或灌入垃圾数据，客户端成绩不能当成经服务端核验的正式实验结果。若公开后发生滥用，再加有速率限制的接收接口。
- 免费 Supabase 可能因低活跃暂停。该情况仅使上传失败，游戏应继续运行。是否可连通应从目标访客网络实测。

## 管理查询与保留

SQL Editor 查询（仅项目拥有者执行）：

```sql
select created_at, session_id, visitor_id, nickname, round, payload
from public.mtrl_events where kind = 'complete'
order by created_at desc limit 100;

-- 查每局最后完成到哪一轮（缺失事件可能低估进度）
select session_id, max(round) as last_recorded_round,
       bool_or(kind = 'complete') as completed
from public.mtrl_events group by session_id;
```

建议定期导出并清理超过 90 天的记录；未配置自动删除任务。需要清理时先导出，再由拥有者执行：

```sql
delete from public.mtrl_events where created_at < now() - interval '90 days';
```

## 本地验证

`node scripts/tests/mtrl-telemetry.test.mjs`

测试不连接真实数据库，不上传测试记录。线上权限、实际收集与导出只有完成项目配置后才能验证。

## 已完成的真实接入验证（2026-11-13）

项目：`mtrl-game`，Project ID：`fkqhwyfasytbjvnagvna`，区域 Tokyo，个人 Free 组织。网页使用的仅是可公开的 publishable key，未读取或保存数据库密码及 secret key。

- SQL Editor 成功创建表和 insert-only 权限。
- 公开 REST 接口：POST 返回 201；相同 event_id 重试返回 409/23505；GET、PATCH、DELETE 和客户端指定 created_at 均返回 401/42501。
- 本地构建后的真实浏览器完成 20 个训练日加 1 个测试日；管理员查询确认 visit 1 条、start 1 条、round 21 条、complete 1 条，complete.payload.log 长度 21。
- 保留两类明确标记的合成测试数据：`nickname = 'connection-test'`（payload.test=true）和 `nickname = 'connection-browser-test'`。分析真实访客时排除这些昵称；未删除测试记录。
- 12 项本地故障和完整游戏测试通过。GitHub Pages 公网部署及公网访问尚待发布后验证。

## 触屏操作更新（2026-11-13）

进城与收取收益新增可点按按钮，选门使用有名称的原生按钮；保留空格与数字键。三扇门随屏幕宽度缩放，表单控件和点击区域适配手机。重复结算同一试次会被忽略。start/complete 的 payload 用 ui_version=touch-1 区分这版界面；记录仍按完成试次上传，过程无状态提示。

在 320px/390px 竖屏、844px 横屏和电脑宽度的浏览器中验证了布局及点按下一天；未做真实 iOS/Android 设备测试。
