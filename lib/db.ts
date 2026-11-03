import path from "node:path";
import type { DatabaseSync } from "node:sqlite";

// A node:sqlite modult futásidőben töltjük be (Node >= 22.3), hogy a bundler ne akarja csomagolni.

export type Country = { code: string; name_en: string; channel_count: number };

export type Channel = {
  id: string;
  name: string;
  country: string;
  category: "public" | "news" | "civic" | "fast" | "commercial_free";
  languages: string;
  platform: string;
  platform_name: string;
  url: string;
  access: "free" | "free_account";
  geo: "national" | "global";
  note_key: string | null;
  last_checked: string | null;
  link_status: string;
};

let db: DatabaseSync | null = null;

function getDb(): DatabaseSync {
  if (!db) {
    const sqlite = process.getBuiltinModule("node:sqlite");
    db = new sqlite.DatabaseSync(path.join(process.cwd(), "data", "tv.db"), { readOnly: true });
  }
  return db;
}

// Az SQLite sorai null-prototípusúak; a Next.js kliens komponensek csak sima objektumot fogadnak.
function plain<T>(rows: unknown[]): T[] {
  return rows.map((r) => ({ ...(r as object) })) as T[];
}

const CHANNEL_SELECT = `
  SELECT c.*, p.name AS platform_name
  FROM channels c JOIN platforms p ON p.id = c.platform
`;

export function getCountries(): Country[] {
  return plain<Country>(
    getDb()
      .prepare(
        `SELECT co.code, co.name_en, COUNT(cc.channel_id) AS channel_count
         FROM countries co JOIN channel_countries cc ON cc.country = co.code
         GROUP BY co.code
         HAVING channel_count > 0`
      )
      .all()
  );
}

export function getChannelsByCountry(code: string): Channel[] {
  return plain<Channel>(
    getDb()
      .prepare(
        `${CHANNEL_SELECT} WHERE c.id IN (SELECT channel_id FROM channel_countries WHERE country = ?) ORDER BY c.name COLLATE NOCASE`
      )
      .all(code)
  );
}

export function getAllChannels(): Channel[] {
  return plain<Channel>(getDb().prepare(`${CHANNEL_SELECT} ORDER BY c.name COLLATE NOCASE`).all());
}
