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
  { name: "arXiv cs.AI", url: "https://export.arxiv.org/api/query?search_query=cat:cs.AI+OR+cat:cs.CL+OR+cat:cs.LG&sortBy=submittedDate&sortOrder=descending&max_results=25", type: "rss", weight: 3 },
  { name: "量子位", url: "https://www.qbitai.com/feed", type: "rss", weight: 3 },
  { name: "InfoQ 中文", url: "https://www.infoq.cn/rss/", type: "rss", weight: 3 },
  { name: "AIBase 中文", url: "https://news.aibase.cn/zh/news", type: "html", weight: 2 },
  { name: "AIBase 热点", url: "https://www.aibase.cn/", type: "html", weight: 2 }
];

const SCORING_RULES = `
这套规则必须与旧版人工更新口径保持一致，Vercel 只是执行环境，不能改变筛选标准。
候选发现：采用双层扫描。第一层为权威术语源、官方博客、技术文档、论文与标准组织，用于保证术语方向和概念边界；第二层为中文热点发现源，包括中文新闻站、社区、论坛、开源动态和行业媒体，用于发现当天突然升温的新术语、新缩写与新概念。
中文热点规则：来自中文新闻站、社区、论坛和开源动态的候选词，至少要在 2 个及以上不同来源同时出现，才可进入候选池；只在单一帖子、单一媒体或单一讨论串中出现的词不入榜。
候选范围：只收录 AI 术语、缩写、方法、机制、工作流、评测、安全、检索、训练与推理等概念；排除模型名、产品名、公司名、版本号、人物名与单纯新闻事件名。
术语库去重：TOP10 绝对不能包含 AI 术语库中已经存在的术语；同义词、大小写变体、空格/连字符变体、缩写加全称变体都按同一术语处理。
来源多样性：单日 TOP10 至少覆盖 5 个不同来源机构；同一机构最多入榜 3 个词；同一主题簇最多入榜 2 个词。
新鲜度：不再使用硬性的历史重复率限制，而是对与昨天、近 3 天、近 7 天重复的术语分别做轻惩罚；如果某个词今天依然明显更热，允许继续入榜。若与前一天完全相同的词超过 5 个，则继续寻找同热度层级下更能代表今天新变化的候选词。
定义链接：每个词必须绑定一个可直接打开、且页面正文能直接定位到该术语定义的权威链接。中文热点源只负责发现候选词，不直接作为最终定义链接；最终链接优先落到官方文档、研究页、技术词汇表、高校或标准组织权威解释。
链接终检：不能使用 404、跳转页、泛新闻首页、公司首页、产品首页或无法直接解释该术语的链接。链接失效时，优先替换为术语提供方的官方文档、研究页或技术词汇表；其次才使用高校、标准组织或主流技术社区的权威解释。
展示：一句话解释不加句号；缩写类榜单名称优先用缩写，不在术语列括号里放全拼；官方定义中写出英文全称；关联词必须来自现有术语库或本次 TOP10。
排序：在满足筛选条件后，再按覆盖来源数、出现频次、来源权威度、出现位置与术语属性五项综合排序，并归一化为 60-100。
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

function extractHtmlItems(html, source) {
  const text = String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ");
  const titleMatches = Array.from(text.matchAll(/<(?:h1|h2|h3|a)[^>]*>([\s\S]{8,180}?)<\/(?:h1|h2|h3|a)>/gi));
  const seen = new Set();
  return titleMatches
    .map((match) => decodeEntities(stripHtml(match[1])))
    .filter((title) => /AI|人工智能|大模型|智能体|Agent|模型|推理|训练|开源|安全|机器人|芯片|算力/i.test(title))
    .filter((title) => {
      const key = title.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 25)
    .map((title) => ({
      source: source.name,
      weight: source.weight,
      title,
      summary: title,
      link: source.url
    }));
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
    return source.type === "html" ? extractHtmlItems(text, source) : extractRssItems(text, source);
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

function normalizeTermKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/[^a-z0-9]+/g, "")
    .trim();
}

function buildTermKeySet(terms) {
  return new Set(terms.map(normalizeTermKey).filter(Boolean));
}

function findDuplicateLibraryTerms(items, libraryTermKeys) {
  return items
    .filter((item) => libraryTermKeys.has(normalizeTermKey(item.english)))
    .map((item) => item.english);
}

function createDuplicateError(date, duplicateTerms) {
  const error = new Error(`${date} 热词与 AI 术语库重复：${duplicateTerms.join(", ")}`);
  error.duplicateTerms = duplicateTerms;
  return error;
}

function findExcludedTerms(items) {
  const blockedNameParts = [
    "openai", "anthropic", "google", "deepmind", "meta", "nvidia", "huggingface", "microsoft",
    "apple", "amazon", "deutschetelekom", "chatgpt", "claude", "gemini", "copilot"
  ];
  return items
    .filter((item) => {
      const key = normalizeTermKey(item.english);
      if (!key) return true;
      if (blockedNameParts.some((part) => key.includes(part))) return true;
      if (/\bgpt[- ]?\d/i.test(item.english)) return true;
      if (/\b(?:investments?|company|launch|news)\b/i.test(item.english)) return true;
      return false;
    })
    .map((item) => item.english);
}

function createExcludedTermError(date, excludedTerms) {
  const error = new Error(`${date} 热词包含模型名、产品名、公司名或非术语项：${excludedTerms.join(", ")}`);
  error.excludedTerms = excludedTerms;
  return error;
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

async function callModel({ date, publishedAt, signals, glossaryTerms, recentHotwords, rejectedTerms = [] }) {
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

AI 术语库已有词，以下词绝对禁止进入 TOP10：
${glossaryTerms.slice(0, 260).join(", ")}

最近历史热词，用于做新鲜度轻惩罚；如果今天依然明显更热，可以继续入榜，但不要与前一天高度重合：
${recentHotwords.join(", ")}

上一轮因重复被拒绝的候选，本轮必须避开：
${rejectedTerms.join(", ") || "无"}

如果你发现最热词已经在禁用清单中，不要改写大小写、增加全称或换同义表达来绕过；必须换成同一热点下更细颗粒、尚未入库的新术语、新缩写、新机制或新工作流。

近24-72小时多源信号：
${sourceBrief}

请只返回 JSON，不要 Markdown。为了支持全自动发布，请在同一套筛选与排序规则下返回 20 个候选：
- 前 10 个是你认为应该发布的 TOP10
- 后 10 个是同一规则下的备选候选
- 备选只用于当主榜命中术语库重复或自身重复时按原排序顺延补位，不得使用另一套标准
格式：
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
      temperature: rejectedTerms.length ? 0.45 : 0.2,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "你只输出可解析 JSON。你会严格遵守用户的筛选、去重、来源多样性与链接规则。凡是进入禁用清单或 AI 术语库已有词的候选，都必须换成非重复的新候选，不能用大小写、空格、连字符、括号全称或同义词绕过。" },
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

function normalizeItems(payload, date, { libraryTermKeys } = {}) {
  const items = Array.isArray(payload.items) ? payload.items : [];
  if (items.length < 10) {
    throw new Error(`模型至少返回10个热词候选，当前为 ${items.length} 个`);
  }
  const normalizedItems = items.map((item, index) => ({
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

  const filteredItems = [];
  const duplicateTerms = [];
  const excludedTerms = [];
  const seenTermKeys = new Set();
  normalizedItems.forEach((item) => {
    const key = normalizeTermKey(item.english);
    if (!key) return;
    const excluded = findExcludedTerms([item]);
    if (excluded.length) {
      excludedTerms.push(item.english);
      return;
    }
    if (libraryTermKeys?.has(key)) {
      duplicateTerms.push(item.english);
      return;
    }
    if (seenTermKeys.has(key)) {
      duplicateTerms.push(item.english);
      return;
    }
    seenTermKeys.add(key);
    filteredItems.push(item);
  });

  if (filteredItems.length < 10) {
    const rejected = [...duplicateTerms, ...excludedTerms];
    if (excludedTerms.length) {
      throw createExcludedTermError(date, rejected.length ? rejected : normalizedItems.map((item) => item.english));
    }
    throw createDuplicateError(date, rejected.length ? rejected : normalizedItems.map((item) => item.english));
  }

  return filteredItems.slice(0, 10).map((item, index) => ({
    ...item,
    rank: index + 1
  }));
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

    const glossaryTerms = extractTermsFromText(glossaryData);
    const libraryTermKeys = buildTermKeySet(glossaryTerms);
    const recentHotwords = extractRecentHotwords(termDetailData);
    let items = null;
    let rejectedTerms = [];
    let lastError = null;
    for (let attempt = 1; attempt <= 1; attempt += 1) {
      try {
        const modelPayload = await callModel({ date, publishedAt, signals, glossaryTerms, recentHotwords, rejectedTerms });
        items = normalizeItems(modelPayload, date, { libraryTermKeys });
        break;
      } catch (error) {
        lastError = error;
        const rejected = [
          ...(Array.isArray(error.duplicateTerms) ? error.duplicateTerms : []),
          ...(Array.isArray(error.excludedTerms) ? error.excludedTerms : [])
        ];
        if (rejected.length) {
          rejectedTerms = Array.from(new Set([...rejectedTerms, ...rejected]));
          continue;
        }
        throw error;
      }
    }

    if (!items) {
      throw new Error(`本次生成未得到10个合格且非术语库重复候选，已拒绝发布：${lastError?.message || "未知错误"}`);
    }

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
