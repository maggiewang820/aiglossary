import { isAuthorized, publishAssets, readSeedAsset, resolveRefreshPayload } from "./_lib/content-store.js";

async function resolveForcedSeedPayload() {
  return {
    mode: "seed",
    homepage: await readSeedAsset("homepage"),
    detail: await readSeedAsset("detail"),
    glossaryData: await readSeedAsset("glossaryData"),
    termDetailData: await readSeedAsset("termDetailData"),
    notes: "手动回滚到仓库种子版本"
  };
}

export default async function handler(request, response) {
  if (!isAuthorized(request)) {
    response.status(401).json({ ok: false, message: "Unauthorized" });
    return;
  }

  try {
    const payload = request.query?.mode === "seed"
      ? await resolveForcedSeedPayload()
      : await resolveRefreshPayload();
    const result = await publishAssets(payload);
    response.status(200).json({
      ok: true,
      mode: payload.mode,
      notes: payload.notes || "",
      publishedAt: payload.publishedAt || "",
      assets: {
        homepage: result.homepageBlob.url,
        detail: result.detailBlob.url,
        glossaryData: result.glossaryBlob.url,
        termDetailData: result.termDetailBlob.url,
        metadata: result.metadataBlob.url
      }
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      message: error instanceof Error ? error.message : "Unknown error"
    });
  }
}
