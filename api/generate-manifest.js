import { readSeedAsset, isAuthorized } from "./_lib/content-store.js";

const DISCOVERY_SOURCES = [
  { name: "OpenAI News", url: "https://openai.com/news/rss.xml", type: "rss", weight: 5 },
  { name: "Anthropic News", url: "https://www.anthropic.com/news/rss.xml", type: "rss", weight: 5 },
  { name: "Google AI Blog", url: "https://blog.google/technology/ai/rss/", type: "rss", weight: 4 },
  { name: "Google DeepMind Blog", url: "https://deepmind.google/discover/blog/rss.xml", type: "rss", weight: 4 },
  { name: "Meta AI Blog", url: "https://ai.meta.com/blog/rss/", type: "rss", weight: 4 },
  { name: "NVIDIA Technical Blog", url: "https://developer.nvidia.com/blog/feed/", type: "rss", weight: 4 },
  { name: "Hugging Face Blog", url: "https://huggingface.co/blog/feed.xml", type: "rss", weight: 4 },
  { name: "InfoQ AI", url: "https://www.infoq.com/artificial-intelligence/rss/", type: "rss", weight: 3 },
  { name: "MIT AI News", url: "https://news.mit.edu/rss/topic/artificial-intelligence2", type: "rss", weight: 3 },
  { name: "arXiv cs.AI", url: "https://export.arxiv.org/api/query?search_query=cat:cs.AI+OR+cat:cs.CL+OR+cat:cs.LG&sortBy=submittedDate&sortOrder=descending&max_results=25", type: "rss", weight: 3 }
];

const SCORING_RULES = `
筛选目标：大众视角下近24小时真正值得关注的 AI 术语、缩写、机制、方法、工作流、评测、安全、检索、训练、推理、协议或系统概念。
必须排除：模型名、产品名、公司名、版本号、人物名、纯新闻事件名。
新鲜度：减少长期稳定术语；历史重复最多2个，且必须近24小时显著升温。
来源多样性：TOP10 至少覆盖5个不同来源机构；同一机构最多2个词。
定义链接：先选词，再找官方或权威定义链接；链接必须能直接支持该术语解释。
展示：一句话解释不加句号；缩写类榜单名称优先用缩写；官方定义中写出英文全称；关联词必须来自现有术语库或本次TOP10。
评分：综合覆盖来源数、出现频次、来源权威度、出现位置、术语属性权重，并归一化为 60-100。
`;

function todayInShanghai() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function nowInShanghai() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day} ${value.hour}:${value.minute} CST`;
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function extractTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeEntities(stripHtml(match[1])) : "";
}

function extractRssItems(xml, source) {
  const blocks = xml.match(/<item[\s\S]*?<\/item>|<entry[\s\S]*?<\/entry>/gi) || [];
  return blocks.slice(0, 30).map((block) => ({
    source: source.name,
    weight: source.weight,
    title: extractTag(block, "title"),
    summary: extractTag(block, "description") || extractTag(block, "summary"),
    link: extractTag(block, "link") || (block.match(/<link[^>]+href="([^"]+)"/i)?.[1] || "")
  })).filter((item) => item.title);
}

async function fetchSource(source) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(source.url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "aiglossary-hotword-bot/1.0"
      }
    });
    if (!response.ok) return [];
    const text = await response.text();
    return extractRssItems(text, source);
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

async function collectSignals() {
  const settled = await Promise.allSettled(DISCOVERY_SOURCES.map(fetchSource));
  return settled.flatMap((result) => (result.status === "fulfilled" ? result.value : []));
}

function extractTermsFromText(text) {
  const matches = String(text || "").match(/english:\s*"([^"]+)"/g) || [];
  return Array.from(new Set(matches.map((item) => item.replace(/^english:\s*"/, "").replace(/"$/, ""))));
}

function extractRecentHotwords(text, limit = 80) {
  return extractTermsFromText(text).slice(-limit);
}

function safeJsonParse(text) {
  const raw = String(text || "").trim();
  try {
    return JSON.parse(raw);
  } catch {
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("模型没有返回 JSON");
    return JSON.parse(match[0]);
  }
}

async function callModel({ date, publishedAt, signals, glossaryTerms, recentHotwords }) {
  const apiKey = process.env.OPENAI_API_KEY || process.env.AI_API_KEY || process.env.ZHIPU_API_KEY;
  if (!apiKey) {
    throw new Error("缺少 OPENAI_API_KEY、AI_API_KEY 或 ZHIPU_API_KEY，无法云端生成每日热词");
  }

  const baseUrl = (process.env.OPENAI_BASE_URL || process.env.ZHIPU_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
  const model = process.env.HOTWORDS_MODEL || process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const sourceBrief = signals.slice(0, 120).map((item, index) =>
    `${index + 1}. [${item.source}｜权重${item.weight}] ${item.title}\n${item.summary}\n${item.link}`
  ).join("\n\n");

  const prompt = `你是 AI 热词榜编辑。请按规则生成 ${date} 的 TOP10 AI 热词榜。

${SCORING_RULES}

现有术语库/历史词片段，候选尽量避免重复：
${glossaryTerms.slice(0, 260).join(", ")}

最近历史热词，重复最多2个：
${recentHotwords.join(", ")}

近24-72小时多源信号：
${sourceBrief}

请只返回 JSON，不要 Markdown。格式：
{
  "date": "${date}",
  "publishedAt": "${publishedAt}",
  "items": [
    {
      "rank": 1,
      "english": "缩写或英文术语",
      "chinese": "中文名",
      "brief": "一句话解释，不加句号",
      "officialDefinition": "官方/权威定义，缩写类写出英文全称",
      "link": "https://...",
      "source": "发现来源摘要",
      "sourceLabel": "定义来源名称",
      "related": ["必须来自现有术语库或本次TOP10"],
      "score": 96,
      "scoreBreakdown": "覆盖 x · 频次 x · 权重 x · 位置 x · 热度 x"
    }
  ]
}`;

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "你只输出可解析 JSON。你会严格遵守用户的筛选、去重、来源多样性与链接规则。" },
        { role: "user", content: prompt }
      ]
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`模型调用失败：${response.status} ${body.slice(0, 300)}`);
  }
  const data = await response.json();
  return safeJsonParse(data.choices?.[0]?.message?.content || "");
}

function normalizeItems(payload, date) {
  const items = Array.isArray(payload.items) ? payload.items : [];
  if (items.length !== 10) {
    throw new Error(`模型必须返回10个热词，当前为 ${items.length} 个`);
  }
  return items.map((item, index) => ({
    rank: index + 1,
    english: String(item.english || "").trim(),
    chinese: String(item.chinese || "").trim(),
    brief: String(item.brief || "").replace(/[。.\s]+$/g, "").trim(),
    officialDefinition: String(item.officialDefinition || item.definition || "").trim(),
    link: String(item.link || "").trim(),
    source: String(item.source || "").trim(),
    sourceLabel: String(item.sourceLabel || item.source || "查看来源").trim(),
    related: Array.isArray(item.related) ? item.related.slice(0, 4).map(String) : [],
    score: Number(item.score) || Math.max(60, 99 - index * 3),
    scoreBreakdown: String(item.scoreBreakdown || "覆盖 0 · 频次 0 · 权重 0 · 位置 0 · 热度 0").trim()
  })).map((item) => {
    for (const field of ["english", "chinese", "brief", "officialDefinition", "link"]) {
      if (!item[field]) throw new Error(`${date} 第 ${item.rank} 个热词缺少 ${field}`);
    }
    if (!/^https?:\/\//i.test(item.link)) throw new Error(`${item.english} 链接不是 http/https`);
    return item;
  });
}

function toJsLiteral(value, indent = 10) {
  const pad = " ".repeat(indent);
  const json = JSON.stringify(value, null, 2);
  return json.replace(/^/gm, pad).trimStart();
}

function findMatchingBracket(source, openIndex) {
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let i = openIndex; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = "";
      }
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "[" || char === "{") depth += 1;
    if (char === "]" || char === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  throw new Error("无法匹配 JS 数据块括号");
}

function upsertDateArray(source, date, items, insertMarker, indent) {
  const key = `"${date}"`;
  const literal = `${key}: ${toJsLiteral(items, indent)}`;
  const keyIndex = source.indexOf(`${key}: [`);
  if (keyIndex >= 0) {
    const openIndex = source.indexOf("[", keyIndex);
    const closeIndex = findMatchingBracket(source, openIndex);
    return source.slice(0, keyIndex) + literal + source.slice(closeIndex + 1);
  }
  const markerIndex = source.indexOf(insertMarker);
  if (markerIndex < 0) throw new Error(`找不到插入标记：${insertMarker}`);
  const prefix = source.slice(0, markerIndex).trimEnd();
  const suffix = source.slice(markerIndex);
  return `${prefix},\n${" ".repeat(indent - 2)}${literal}${suffix}`;
}

function upsertPublishedAt(source, date, publishedAt) {
  const key = `"${date}"`;
  const literal = `${key}: "${publishedAt}"`;
  const keyIndex = source.indexOf(`${key}: "`);
  if (keyIndex >= 0) {
    const endIndex = source.indexOf("\n", keyIndex);
    const hasComma = source.slice(keyIndex, endIndex).trimEnd().endsWith(",");
    return source.slice(0, keyIndex) + literal + (hasComma ? "," : "") + source.slice(endIndex);
  }
  const marker = "\n      });";
  const markerIndex = source.indexOf(marker, source.indexOf("const hotwordPublishedAt"));
  if (markerIndex < 0) throw new Error("找不到发布时间对象结尾");
  const prefix = source.slice(0, markerIndex).trimEnd();
  const suffix = source.slice(markerIndex);
  return `${prefix},\n        ${literal}${suffix}`;
}

function buildAssets({ date, publishedAt, items, homepage, detail, glossaryData, termDetailData }) {
  const homepageHtml = upsertPublishedAt(
    upsertDateArray(homepage, date, items, "\n      };\n\n      // 仅在生成或更新某日热词榜时改写对应时间", 10),
    date,
    publishedAt
  ).replace(/value="\d{4}-\d{2}-\d{2}"/, `value="${date}"`);

  const detailHtml = upsertDateArray(detail, date, items, "\n              };\n\n              const terms = [];", 20);
  const termDetailDataJs = upsertDateArray(termDetailData, date, items, "\n      };\n\n  const terms = [];", 10);
  return {
    homepageHtml,
    termDetailHtml: detailHtml,
    glossaryDataJs: glossaryData,
    termDetailDataJs
  };
}

export default async function handler(request, response) {
  if (!isAuthorized(request)) {
    response.status(401).json({ ok: false, message: "Unauthorized" });
    return;
  }

  try {
    const date = todayInShanghai();
    const publishedAt = nowInShanghai();
    const [homepage, detail, glossaryData, termDetailData, signals] = await Promise.all([
      readSeedAsset("homepage"),
      readSeedAsset("detail"),
      readSeedAsset("glossaryData"),
      readSeedAsset("termDetailData"),
      collectSignals()
    ]);

    if (signals.length < 8) {
      throw new Error(`候选来源抓取不足：${signals.length} 条`);
    }

    const glossaryTerms = Array.from(new Set([
      ...extractTermsFromText(glossaryData),
      ...extractTermsFromText(termDetailData)
    ]));
    const recentHotwords = extractRecentHotwords(termDetailData);
    const modelPayload = await callModel({ date, publishedAt, signals, glossaryTerms, recentHotwords });
    const items = normalizeItems(modelPayload, date);
    const assets = buildAssets({ date, publishedAt, items, homepage, detail, glossaryData, termDetailData });

    response.status(200).json({
      publishedAt,
      notes: `按已确认筛选规则自动生成 ${date} AI 热词榜；候选信号 ${signals.length} 条`,
      ...assets
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      message: error instanceof Error ? error.message : "Unknown error"
    });
  }
}
