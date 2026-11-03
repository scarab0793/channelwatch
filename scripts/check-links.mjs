// Ellenőrzi, hogy a csatornák hivatalos linkjei elérhetők-e, és beírja az eredményt az adatbázisba.
// Futtatás: npm run check-links   (előtte: npm run seed)
// Fontos: ez csak azt nézi, hogy az oldal válaszol-e. Azt, hogy az élő adás tényleg ingyenes és legális
// az adott országban, kézzel kell ellenőrizni, mielőtt egy csatorna bekerül a listára.
import { DatabaseSync } from "node:sqlite";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const db = new DatabaseSync(path.join(root, "data", "tv.db"));
const rows = db.prepare("SELECT id, url FROM channels").all();
const update = db.prepare("UPDATE channels SET link_status = ?, last_checked = ? WHERE id = ?");

async function check(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: ctrl.signal });
    if (res.status === 405 || res.status === 403) {
      res = await fetch(url, { method: "GET", redirect: "follow", signal: ctrl.signal });
    }
    // 403/429 gyakran csak bot-védelem: "korlátozott", nem "hibás"
    if (res.ok) return "ok";
    if (res.status === 403 || res.status === 429) return "restricted";
    return `http_${res.status}`;
  } catch {
    return "unreachable";
  } finally {
    clearTimeout(timer);
  }
}

const today = new Date().toISOString().slice(0, 10);
let bad = 0;
for (const r of rows) {
  const status = await check(r.url);
  update.run(status, today, r.id);
  if (status !== "ok") {
    bad++;
    console.log(`${status.padEnd(12)} ${r.id}  ${r.url}`);
  }
}
console.log(`\nKész: ${rows.length} link, ebből ${bad} nem "ok". Nézd át kézzel a fentieket.`);
db.close();
