import { getRuntimeEnvStatus } from "./_lib/content-store.js";

export default async function handler(_request, response) {
  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.status(200).json({
    ok: true,
    environment: process.env.VERCEL_ENV || "unknown",
    ...getRuntimeEnvStatus()
  });
}
