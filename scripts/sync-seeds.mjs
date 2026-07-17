import { cp, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const workspaceRoot = path.resolve(rootDir, "..");
const publicDir = path.join(rootDir, "public");

await mkdir(publicDir, { recursive: true });

const copies = [
  ["outputs/ai-hotwords-top10.html", "ai-hotwords-top10.seed.html"],
  ["outputs/term-detail.html", "term-detail.seed.html"],
  ["outputs/glossary-data.js", "glossary-data.seed.js"],
  ["outputs/term-detail-data.js", "term-detail-data.seed.js"]
];

await Promise.all(
  copies.map(([source, target]) =>
    cp(path.join(workspaceRoot, source), path.join(publicDir, target))
  )
);

console.log("Seed files synced from outputs/");
