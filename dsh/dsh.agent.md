# DSH Agent 速查（给 agent 读的）

> 面向运行在 **DeepSeek Harness (`dsh`)** 里的 agent，以及要帮人配置 dsh 的 agent。
> 本文件是 `index.html` 的精简机读版。**动手前先读 `~/.dsh/AGENTS.md` 与项目根的 `AGENTS.md` / `CLAUDE.md`。**
> 基线：dsh `0.1.5-rc.2`，Node `v22.22.2`，macOS，实测日期 2026-09-18 ~ 09-22。

---

## 0. 先建立正确心智模型

```
Model + Harness = Agent
```

- dsh 不是"一个 CLI 产品"，是**装配系统**：模型、工具、UI、沙箱都是插件。
- `profile` = 产品形态（`web` / `headless` / `acp` / `sdk` / `sdk-minimal`）。
- `bundle` = 一组插件的预设配置（如 `@deepseek-ai/dsh-base` + `@deepseek-ai/dsh-web-app`）。
- `patch` = YAML 顶层数组的覆盖层，按 `id` 改插件、禁用插件、插入新插件。
- **在 dsh 里"加功能" = 写 patch / 装 bundle，不是改源码。**

### 配置树叠加顺序（后者覆盖前者）

```
bundle 层（package.json 的 dsh.profile.bundles 顺序）
  → profile 的 cordis.patch.yml（~/.dsh/profiles/<name>/）
  → home 层 $DSH_HOME/cordis.patch.yml（对所有 profile 生效，优先级高于 profile 层）
  → --patch 命令行覆盖层
  → telemetry 开关
```

> 注意：home 级 patch **高于** profile 级 patch。`~/.dsh/cordis.patch.yml` 里的旧注释写反了，以本条与官方源码 `allPatches()` 为准。

---

## 1. 文件与路径

| 路径 | 是什么 |
|---|---|
| `~/.dsh/` | `DSH_HOME`（可用环境变量重定向，做实验别碰真的） |
| `~/.dsh/AGENTS.md` | 全局工作记忆，每次会话加载 |
| `~/.dsh/cordis.patch.yml` | home 级 patch，对所有 profile 生效 |
| `~/.dsh/profiles/<name>/package.json` | `dsh.profile.bundles`（顺序）+ `patchReload` |
| `~/.dsh/profiles/<name>/cordis.patch.yml` | profile 级 patch（日常改这里） |
| `~/.dsh/profiles/<name>/cordis.yml` | 空根，dsh 每次都重写，**不要手改** |
| `~/.dsh/profiles/<name>/pnpm-workspace.yaml` | 插件安装策略（nodeLinker / allowBuilds / minimumReleaseAgeExclude） |
| `~/.dsh/profiles/<name>/node_modules/` | 树外插件装在这里 |
| `~/.dsh/skills/` | 用户级 skill（rank 400），本机是指向 `~/.claude/skills` 的软链 |
| `~/.dsh/hooks.json` | 经过筛选的 Claude Code hooks 桥接副本 |
| `~/.dsh/sessions/<workspace-slug>/session-*/session.v3.jsonl.zstd` | 会话持久化（zstd 压缩的 JSONL） |
| `~/.dsh/task-board/ledger-v2.json` | 任务看板账本（含 cron 调度、权限门） |
| `~/.dsh/dsh-usage/usage-ledger.json` | 按天 token / 成本账本 |

---

## 2. 命令（先读，不要乱跑）

```bash
# 启动
dsh web                                   # = dsh --profile web，默认 127.0.0.1:3080
dsh --profile web --port 8080 --no-open
dsh --profile headless "任务"              # 一次性：最终答案 stdout，推理 stderr，退出
dsh --profile acp                         # ACP stdio
dsh --profile sdk                         # SDK JSON-RPC stdio
dsh --profile tui                         # 社区 TUI（需另装 @deepseek-harness-tui/dsh-tui）

# 看配置（不启动也能看；会重写 profile 的 cordis.yml）
dsh --profile web --dump-default-config   # 只看 bundle 默认层
dsh --profile web --dump-config           # 叠加用户 patch 后的完整树

# 插件（转发给 profile 目录里的 pnpm）
dsh plugin --profile web add <npm-pkg>
dsh plugin --profile web remove <npm-pkg>

# 新建 profile / 临时覆盖层
dsh --profile rescue --from-default-profile web
dsh --profile web --patch ./extra.yml
```

**规则**：启动器只解析自己的 flag；第一个不认识的 token 之后，全部原样交给 profile 里的 app。
所以 `--port` / `--help` 的归属要分清：`dsh --help` 是启动器，`dsh --profile web --help` 是 web app。

**web profile 的 app flag（0.1.5-rc.2）**：`--host`、`--port`、`--no-open`、`--trusted-host`。
**没有 `--resume`**；恢复会话在 Web UI 的会话列表里点（`--resume` 是 TUI app 的），别写错。

---

## 3. patch 写法

```yaml
# 顶层必须是 YAML 数组；每条按 id 命中
- id: timer
  disabled: true          # 禁用插件

- id: approval
  config:                 # config 是"合并"，不是整体替换
    policy: never

- insert:                 # 加新插件必须用 insert；
    - id: ui-shortcuts    # 直接写 id+name 会被当成"按 id 覆盖"而报 not found
      name: dsh-client-ui-shortcuts
```

验证 patch 是否生效：

```bash
dsh --profile web --dump-config | grep -B2 -A6 'patched by'
# 输出里会出现：# == <bundle>, patched by <你的 patch 文件>
```

`patchReload` 有两个值：`live`（监视文件，改完即时生效，会触发前端 HMR）/ `startup`（只在启动时应用）。
**插件装完必须彻底重启 `dsh web` 后端进程**，只刷新浏览器不会加载新模块。

---

## 4. 权限与沙箱（最容易踩的坑）

```yaml
# dsh-base 默认（可用环境变量覆盖）
sandbox-policy.mode: process.env.DSH_PERMISSION_MODE ?? 'workspace-write'
approval.policy:     danger-full-access ? 'never' : 'ask'
```

| `DSH_PERMISSION_MODE` | sandbox | approval |
|---|---|---|
| `read-only` | read-only | ask |
| `workspace-write`（默认） | workspace-write | ask |
| `danger-full-access` | danger-full-access | never |

- `sandbox-policy.workspaceRoot = process.cwd()`：**在哪个目录启动 dsh，哪里才是可写工作区**。
- **dsh 自己的文件沙箱会挡住 `~/.dsh` 的写入**，报 `EPERM: operation not permitted, mkdir '.../.dsh/profiles/...'`。这不是 dsh 坏了。
- 做实验用项目内 `DSH_HOME`：

```bash
export DSH_HOME="$PWD/.dsh-lab"        # 假 home，随便删
dsh --profile web --dump-default-config | head -40
```

- `dsh plugin add` 由 agent 跑通常失败：pnpm 全局 store 在 `~/Library/pnpm/store`，**在工作区外，被沙箱拦成 `Operation not permitted`**。
  → 让用户在自己的普通终端跑；或让 pnpm 用工作区内的 store-dir；不要反复重试。

---

## 5. Agent 工作纪律（从真实 session 里总结）

1. **先对齐目标，再动手**。用户说"改造 dsh 提升体验"时，先问：DSH 是替代 cmux 当主力，还是并行用？动机决定"顺手"的及格线。
2. **分阶段汇报**。长时间排查必须阶段性停下来同步，不要一路查到底。涉及 kill / 重启 / 改配置 / 清缓存，先停下问。
3. **区分"已验证"和"我推测"**。本机踩坑记录里明确标了哪些是实测、哪些只是一次推理。
4. **持久目录约定**：多步脚本类任务放 `~/Projects/<name>/`，不要用临时目录。
5. **子代理显式指定模型**，不要默认继承主模型。
6. **插件有供应链风险**：帮人安装第三方插件前先审代码；核对 npm scope，`@deepseek-ai/dsh` 是官方，`@deepopen/cli`、`@opendeep/cli` 是高风险相近名。
7. **不要全量装"全家桶"**。`@linxin666/dsh-web-all` 会带来 task-board / git-graph / remote-web-ui 等多个 SSE 插件，本机实测首页 62 个 client bundle、约 16.6 MB 未压缩，Chrome 同源 6 连接被长连接占满后会卡死。按需装子包。

---

## 6. 踩坑速查（完整版看 index.html）

| 症状 | 根因 | 处理 |
|---|---|---|
| `command not found: dsh` | npx 缓存里的 dsh 只在那个会话的 PATH | `npm i -g @deepseek-ai/dsh`，再确认 `npm config get prefix` 的 bin 在 PATH |
| `EPERM ... mkdir '~/.dsh/...'` | dsh 自己的文件沙箱 | 项目内 `DSH_HOME`，或在普通终端跑 |
| GUI/其他 App 里 `dsh --version` 无输出 / 报 ESM SyntaxError | GUI 的 PATH 命中旧 Node（如 `/usr/local/bin/node` v16） | launcher 钉死 Node 22 并**无条件 prepend** 其 bin 目录（dsh 派生的 pnpm 也要用同一个 Node） |
| `dsh plugin add` 失败 | pnpm 10+ 拦构建脚本 / isolated linker / pnpm 11 发布时间门禁 / store 越界 | `allowBuilds`、`nodeLinker: hoisted`、`minimumReleaseAgeExclude`；store 越界交给用户终端 |
| Web 页面用着用着卡死，几分钟又自己恢复 | 大量 client bundle + 多条 SSE 占满 Chrome 同源 6 连接 | 减 UI 插件；别开多个 dsh 标签；`Cmd+Shift+R`；考虑 `patchReload: startup` |
| 右侧栏图片 / PDF 预览变成代码 | `dsh-better-sidebar` 以 extension 优先级接管了 `dsh-resource://file/**` | 停用该插件，恢复内置 preview |
| 开了 TUN 后 dsh API 超时 | Clash 全局模式把 DSH 直连流量丢到海外节点 | TUN + **规则模式**，给 `api.deepseek.com` / `api.moonshot.cn` 加 DIRECT；永远不开全局 |
| TUN 下 `localhost:3080` 连不上，`127.0.0.1:3080` 正常 | fake-ip 把 localhost 解析成 `198.18.x.x` | `fake-ip-filter` 加 localhost；验证：`dscacheutil -q host -a name localhost` |
| `--dump-config` 也报权限错 | 它同样会重写 `profiles/<p>/cordis.yml` | 用项目内 `DSH_HOME` |

---

## 7. 给 agent 的开场提示词（可直接复制）

```text
你是运行在 DeepSeek Harness (dsh) 里的 agent。
先做三件事，再回答我：
1. 读 ~/.dsh/AGENTS.md 和当前项目根的 AGENTS.md / CLAUDE.md；
2. 跑 `dsh --version`、`dsh --profile web --dump-config | grep -c '^- id:'`，确认版本与配置树规模；
3. 用一段话复述 dsh 的配置分层顺序（bundle → profile patch → home patch → --patch）。
之后所有涉及改 ~/.dsh、装插件、重启服务的操作：
- 先给计划并等我确认；
- 先备份要改的文件（package.json / cordis.patch.yml / pnpm-workspace.yaml）；
- 改完用 `dsh --profile web --dump-config` 验证，再重启，再验证一次；
- 明确区分「实测结论」和「推测」。
```

---

## 8. 验证清单（怀疑环境有问题时逐条跑）

```bash
node -v                                  # 期望 v22.x
which -a node dsh pnpm                   # 看 PATH 顺序，GUI 环境尤其要查
dsh --version                            # 期望 0.1.5-rc.2 或更新
dsh web --port 0 --no-open               # 能起来就说明后端没问题（Ctrl+C 退出）
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:3080   # 401 = 服务活着
dscacheutil -q host -a name localhost    # 不应出现 198.18.x.x
dsh --profile web --dump-config | grep -c '^- id:'               # 本机实测 152
```
