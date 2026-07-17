import { getPublishedAsset } from "./_lib/content-store.js";

export default async function handler(_request, response) {
  const html = await getPublishedAsset("homepage");
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.status(200).send(html);
}
