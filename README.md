# Vercel 部署版 AI 热词站

这个目录是当前网站的 Vercel 版本，目标是两件事：

- 把现有站点稳定部署到 Vercel
- 通过 Vercel Cron 每天自动刷新线上内容

## 当前结构

- `public/*.seed.*`
  - 当前站点的种子版本
  - 默认会直接使用这里的首页与详情页内容
- `api/site.js`
  - 首页分发接口
  - 优先返回 Vercel Blob 中最新发布的首页；若没有，则回退到种子文件
- `api/term-detail.js`
  - 详情页分发接口
  - 优先返回 Vercel Blob 中最新发布的详情页；若没有，则回退到种子文件
- `api/cron-refresh.js`
  - 每日定时刷新接口
  - 默认会把种子文件重新发布到 Blob
  - 如果配置了外部清单地址，则会拉取最新 HTML 并覆盖线上内容
- `vercel.json`
  - 路由重写与定时任务配置

## 自动更新机制

当前实现分成两层：

1. Vercel 负责“定时发布”
2. 上游数据源负责“生成当天新榜单”

也就是说，Vercel 已经能做到每天早上 9 点自动跑一次，但它是否能产出“全新的当天热词”，取决于是否配置了外部生成源。

### 默认行为

如果未配置 `HOTWORDS_SOURCE_MANIFEST_URL`：

- 定时任务仍会执行
- 但会回退发布当前仓库里的种子版本
- 这适合先把站部署起来

### 真正每日更新的推荐方式

配置环境变量 `HOTWORDS_SOURCE_MANIFEST_URL`，让它指向一个 JSON 清单，例如：

```json
{
  "publishedAt": "2026-07-08 12:00 CST",
  "notes": "今日热词已重刷",
  "homepageHtmlUrl": "https://example.com/ai-hotwords-top10.html",
  "termDetailHtmlUrl": "https://example.com/term-detail.html"
}
```

也支持直接把内容内嵌到清单里：

```json
{
  "homepageHtml": "<!DOCTYPE html>...",
  "termDetailHtml": "<!DOCTYPE html>..."
}
```

可选字段：

- `glossaryDataJs`
- `glossaryDataJsUrl`
- `termDetailDataJs`
- `termDetailDataJsUrl`

## 定时任务时间

`vercel.json` 当前配置为：

- `0 1 * * *`

这是按 UTC 计算，对应北京时间每天 `09:00`。

## 部署步骤

1. 进入 `vercel-app/`
2. 安装依赖
3. 绑定或新建 Vercel 项目
4. 配置环境变量
5. 部署

建议至少配置这些环境变量：

- `BLOB_READ_WRITE_TOKEN`
- `CRON_SECRET`

如果你希望真正每天自动拿到新热词，再额外配置：

- `HOTWORDS_SOURCE_MANIFEST_URL`
- `OPENAI_API_KEY`

## 环境变量说明

- `BLOB_READ_WRITE_TOKEN`
  - Vercel Blob 的读写令牌
- `CRON_SECRET`
  - 用于保护 `/api/cron-refresh`
  - 手动触发时也可以通过 `Authorization: Bearer xxx` 或 `?secret=xxx` 调用
- `HOTWORDS_SOURCE_MANIFEST_URL`
  - 外部清单地址
  - Vercel Cron 会从这里拿到最新首页和详情页
- `OPENAI_API_KEY`
  - 用于云端自动生成每日热词榜
- `OPENAI_BASE_URL`
  - 可选，OpenAI 兼容接口地址，默认 `https://api.openai.com/v1`
- `HOTWORDS_MODEL`
  - 可选，每日热词筛选所用模型，默认 `gpt-4.1-mini`
- `BLOB_ACCESS`
  - 可选，Blob 存储访问模式，当前项目默认 `private`

## 云端自动生成每日热词

当前版本已经内置每日热词生成接口：

```text
/api/generate-manifest
```

这个接口会：

- 抓取多源 AI 新闻、博客、论文与技术社区信号
- 按当前确认的热词筛选规则生成 TOP10
- 排除模型名、产品名、公司名、版本号、人物名、纯新闻事件名
- 尽量避免与术语库和历史热词高重复
- 生成首页、详情页、术语数据所需的 manifest

要让每天 09:00 的 `/api/cron-refresh` 自动使用它，请把环境变量设置为：

```text
HOTWORDS_SOURCE_MANIFEST_URL=https://你的域名/api/generate-manifest?secret=你的CRON_SECRET
```

例如：

```text
HOTWORDS_SOURCE_MANIFEST_URL=https://aiglossary-two.vercel.app/api/generate-manifest?secret=aiglossary_refresh_20260717
```

同时必须配置：

```text
OPENAI_API_KEY=你的模型 API Key
```

如果使用 OpenAI 兼容服务，也可以配置：

```text
OPENAI_BASE_URL=https://你的兼容接口/v1
HOTWORDS_MODEL=你的模型名
```

配置完成后需要重新部署一次。手动测试顺序：

```text
https://你的域名/api/generate-manifest?secret=你的CRON_SECRET
https://你的域名/api/cron-refresh?secret=你的CRON_SECRET
```

## 本地同步种子文件

如果你更新了工作区里的站点页面，可以执行：

```bash
npm run sync:seed
```

它会把 `outputs/` 里的最新页面同步到 `public/` 里的种子文件。

## 这版方案的边界

这套 Vercel 方案已经解决了：

- 网站部署
- 固定域名访问
- 每天定时执行
- 不重新部署也能覆盖线上内容

但“真正自动生成当天热词”本身，仍然需要上游生成服务。

原因很简单：你现在这套热词规则包含了多源扫描、去重、链接验证、来源多样性控制和人工口径约束，这部分本质上是一个独立的生成流水线，不只是静态托管。

如果你愿意，我下一步可以继续把“热词生成器”也补成一个 Vercel 可跑的版本，不过那一步会需要你提供可用的数据源接口或模型密钥。

## GitHub + Vercel 推荐部署方式

这个仓库建议作为 Vercel 项目的源码仓库使用：

1. 将本目录代码推送到 GitHub 仓库
2. 在 Vercel 中选择 `Import Project`
3. 选择该 GitHub 仓库
4. Framework Preset 选择 `Other`
5. 配置环境变量
6. 创建 Vercel Blob Store，并把读写 Token 填入 `BLOB_READ_WRITE_TOKEN`
7. 部署完成后访问 `/` 即为首页，访问 `/term-detail.html?term=AGI` 即为术语详情页

### 数据库/存储说明

当前版本使用 **Vercel Blob** 作为线上内容存储：

- 每日首页 HTML
- 术语详情 HTML
- AI 术语库数据
- 热词详情数据
- 最近一次刷新元信息

这可以满足当前“每天自动更新热词榜、保留线上最新内容、固定域名访问”的需求。

如果后续要做登录、多用户收藏、后台编辑和结构化历史查询，可以再升级为 Supabase 或 Neon 数据库。

### 自动任务说明

`vercel.json` 中的 Cron 配置为：

```json
{
  "path": "/api/cron-refresh",
  "schedule": "0 1 * * *"
}
```

Vercel Cron 使用 UTC 时间，因此 `0 1 * * *` 对应北京时间每天 09:00。
