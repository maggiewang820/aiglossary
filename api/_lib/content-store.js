import { readFile } from "node:fs/promises";
import path from "node:path";
import { get, list, put } from "@vercel/blob";

const BLOB_PREFIX = "ai-hotwords/";
const DEFAULT_BLOB_ACCESS = "private";

export const ASSET_KEYS = Object.freeze({
  homepage: `${BLOB_PREFIX}ai-hotwords-top10.html`,
  detail: `${BLOB_PREFIX}term-detail.html`,
  glossaryData: `${BLOB_PREFIX}glossary-data.js`,
  termDetailData: `${BLOB_PREFIX}term-detail-data.js`,
  metadata: `${BLOB_PREFIX}metadata.json`
});

const SEED_FILES = Object.freeze({
  homepage: "ai-hotwords-top10.seed.html",
  detail: "term-detail.seed.html",
  glossaryData: "glossary-data.seed.js",
  termDetailData: "term-detail-data.seed.js"
});

export function getRuntimeEnvStatus() {
  return {
    hasBlobReadWriteToken: Boolean(process.env.BLOB_READ_WRITE_TOKEN?.trim()),
    hasCronSecret: Boolean(process.env.CRON_SECRET?.trim()),
    hasHotwordsSourceManifestUrl: Boolean(process.env.HOTWORDS_SOURCE_MANIFEST_URL?.trim()),
    hasModelApiKey: Boolean(
      process.env.OPENAI_API_KEY?.trim() ||
      process.env.AI_API_KEY?.trim() ||
      process.env.ZHIPU_API_KEY?.trim()
    ),
    hasModelBaseUrl: Boolean(
      process.env.OPENAI_BASE_URL?.trim() ||
      process.env.ZHIPU_BASE_URL?.trim()
    ),
    hotwordsModel: process.env.HOTWORDS_MODEL || process.env.OPENAI_MODEL || "",
    blobAccess: getBlobAccess()
  };
}

function getBlobOptions(options) {
  const token = process.env.BLOB_READ_WRITE_TOKEN?.trim();
  return token ? { ...options, token } : options;
}

function getBlobAccess() {
  return process.env.BLOB_ACCESS?.trim() || DEFAULT_BLOB_ACCESS;
}

function seedPath(filename) {
  return path.join(process.cwd(), "public", filename);
}

export async function readSeedAsset(kind) {
  const filename = SEED_FILES[kind];
  if (!filename) {
    throw new Error(`Unknown seed kind: ${kind}`);
  }
  return readFile(seedPath(filename), "utf8");
}

async function findBlobUrl(pathname) {
  const result = await list(getBlobOptions({ prefix: pathname, limit: 10 }));
  const target = result.blobs.find((item) => item.pathname === pathname);
  return target?.url || null;
}

export async function readBlobAsset(pathname) {
  const url = await findBlobUrl(pathname);
  if (!url) return null;
  const result = await get(pathname, getBlobOptions({ access: getBlobAccess() }));
  if (!result || result.statusCode === 404) return null;
  if (result.statusCode !== 200 || !result.stream) {
    throw new Error(`Failed to get blob ${pathname}: ${result.statusCode}`);
  }
  return new Response(result.stream).text();
}

export async function writeBlobAsset(pathname, body, contentType) {
  return put(pathname, body, getBlobOptions({
    access: getBlobAccess(),
    addRandomSuffix: false,
    contentType,
    allowOverwrite: true
  }));
}

export async function getPublishedAsset(kind) {
  const pathname = ASSET_KEYS[kind];
  if (!pathname) {
    throw new Error(`Unknown asset kind: ${kind}`);
  }
  try {
    const blobContent = await readBlobAsset(pathname);
    if (blobContent) return blobContent;
  } catch (error) {
    console.warn(`[blob-read-fallback] ${pathname}`, error);
  }
  return readSeedAsset(kind);
}

async function fetchTextAsset(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch remote asset ${url}: ${response.status}`);
  }
  return response.text();
}

export async function resolveRefreshPayload() {
  const manifestUrl = process.env.HOTWORDS_SOURCE_MANIFEST_URL;
  if (!manifestUrl) {
    return {
      mode: "seed",
      homepage: await readSeedAsset("homepage"),
      detail: await readSeedAsset("detail"),
      glossaryData: await readSeedAsset("glossaryData"),
      termDetailData: await readSeedAsset("termDetailData"),
      notes: "未配置 HOTWORDS_SOURCE_MANIFEST_URL，已回退到仓库内置种子版本"
    };
  }

  const response = await fetch(manifestUrl, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch manifest ${manifestUrl}: ${response.status}`);
  }

  const manifest = await response.json();
  const homepage =
    manifest.homepageHtml ||
    (manifest.homepageHtmlUrl ? await fetchTextAsset(manifest.homepageHtmlUrl) : null);
  const detail =
    manifest.termDetailHtml ||
    (manifest.termDetailHtmlUrl ? await fetchTextAsset(manifest.termDetailHtmlUrl) : null);
  const glossaryData =
    manifest.glossaryDataJs ||
    (manifest.glossaryDataJsUrl ? await fetchTextAsset(manifest.glossaryDataJsUrl) : await readSeedAsset("glossaryData"));
  const termDetailData =
    manifest.termDetailDataJs ||
    (manifest.termDetailDataJsUrl ? await fetchTextAsset(manifest.termDetailDataJsUrl) : await readSeedAsset("termDetailData"));

  if (!homepage || !detail) {
    throw new Error("Manifest must provide homepageHtml/homepageHtmlUrl and termDetailHtml/termDetailHtmlUrl");
  }

  return {
    mode: "manifest",
    manifestUrl,
    homepage,
    detail,
    glossaryData,
    termDetailData,
    notes: manifest.notes || "",
    publishedAt: manifest.publishedAt || "",
    manifest
  };
}

export async function publishAssets(payload) {
  const [homepageBlob, detailBlob, glossaryBlob, termDetailBlob, metadataBlob] = await Promise.all([
    writeBlobAsset(ASSET_KEYS.homepage, payload.homepage, "text/html; charset=utf-8"),
    writeBlobAsset(ASSET_KEYS.detail, payload.detail, "text/html; charset=utf-8"),
    writeBlobAsset(ASSET_KEYS.glossaryData, payload.glossaryData, "application/javascript; charset=utf-8"),
    writeBlobAsset(ASSET_KEYS.termDetailData, payload.termDetailData, "application/javascript; charset=utf-8"),
    writeBlobAsset(
      ASSET_KEYS.metadata,
      JSON.stringify(
        {
          refreshedAt: new Date().toISOString(),
          mode: payload.mode,
          publishedAt: payload.publishedAt || "",
          notes: payload.notes || ""
        },
        null,
        2
      ),
      "application/json; charset=utf-8"
    )
  ]);

  return {
    homepageBlob,
    detailBlob,
    glossaryBlob,
    termDetailBlob,
    metadataBlob
  };
}

export function isAuthorized(request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return true;

  const authorization = request.headers.authorization || request.headers.Authorization || "";
  const bearer = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  const querySecret = request.query?.secret || "";

  return bearer === cronSecret || querySecret === cronSecret;
}
