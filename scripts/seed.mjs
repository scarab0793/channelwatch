// Felépíti a SQLite adatbázist a data/channels.json fájlból.
// Futtatás: npm run seed  (Node >= 22.5 kell, a beépített node:sqlite modullal)
import { DatabaseSync } from "node:sqlite";
import { readFileSync, existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jsonPath = path.join(root, "data", "channels.json");
const dbPath = path.join(root, "data", "tv.db");

const data = JSON.parse(readFileSync(jsonPath, "utf8"));

if (existsSync(dbPath)) rmSync(dbPath);
const db = new DatabaseSync(dbPath);

db.exec(`
  PRAGMA foreign_keys = ON;

  CREATE TABLE countries (
    code TEXT PRIMARY KEY,
    name_en TEXT NOT NULL
  );

  CREATE TABLE platforms (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL
  );

  CREATE TABLE channels (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    country TEXT NOT NULL REFERENCES countries(code),
    category TEXT NOT NULL CHECK (category IN ('public','news','civic','fast','commercial_free')),
    languages TEXT NOT NULL,
    platform TEXT NOT NULL REFERENCES platforms(id),
    url TEXT NOT NULL,
    access TEXT NOT NULL CHECK (access IN ('free','free_account')),
    geo TEXT NOT NULL CHECK (geo IN ('national','global')),
    note_key TEXT,
    last_checked TEXT,
    link_status TEXT NOT NULL DEFAULT 'unchecked'
  );

  -- Ahol a csatorna/szolgáltatás elérhető a saját országán kívül is (pl. Zattoo: DE, AT, CH)
  CREATE TABLE channel_availability (
    channel_id TEXT NOT NULL REFERENCES channels(id),
    country TEXT NOT NULL REFERENCES countries(code),
    PRIMARY KEY (channel_id, country)
  );

  -- Egy csatorna minden országa: a saját + az elérhetőségi lista
  CREATE VIEW channel_countries AS
    SELECT id AS channel_id, country FROM channels
    UNION
    SELECT channel_id, country FROM channel_availability;

  CREATE INDEX idx_channels_country ON channels(country);
  CREATE INDEX idx_channels_category ON channels(category);

  -- Későbbi bővítéshez (EPG, "hol nézhetem ezt?"):
  CREATE TABLE programmes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    channel_id TEXT NOT NULL REFERENCES channels(id),
    title TEXT NOT NULL,
    starts_at TEXT NOT NULL,
    ends_at TEXT NOT NULL,
    description TEXT
  );
  CREATE INDEX idx_programmes_channel_time ON programmes(channel_id, starts_at);
`);

const insCountry = db.prepare("INSERT INTO countries (code, name_en) VALUES (?, ?)");
const insPlatform = db.prepare("INSERT INTO platforms (id, name) VALUES (?, ?)");
const insChannel = db.prepare(
  `INSERT INTO channels (id, name, country, category, languages, platform, url, access, geo, note_key)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
);

const insAvail = db.prepare("INSERT INTO channel_availability (channel_id, country) VALUES (?, ?)");

db.exec("BEGIN");
for (const c of data.countries) insCountry.run(c.code, c.name_en);
for (const p of data.platforms) insPlatform.run(p.id, p.name);
for (const ch of data.channels) {
  insChannel.run(ch.id, ch.name, ch.country, ch.category, ch.languages, ch.platform, ch.url, ch.access, ch.geo, ch.note_key ?? null);
  for (const code of ch.available_in ?? []) insAvail.run(ch.id, code);
}
db.exec("COMMIT");

const n = db.prepare("SELECT COUNT(*) AS n FROM channels").get().n;
console.log(`Adatbázis kész: ${n} csatorna, ${data.countries.length} ország -> ${path.relative(root, dbPath)}`);
db.close();
