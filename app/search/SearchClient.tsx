"use client";

import { useMemo, useState } from "react";
import type { Channel } from "@/lib/db";
import { ACCESS_LABEL, CATEGORY_LABEL, GEO_LABEL, flag } from "@/lib/labels";

type Props = {
  channels: Channel[];
  countries: { code: string; name: string }[];
};

export default function SearchClient({ channels, countries }: Props) {
  const [q, setQ] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const countryName = useMemo(() => new Map(countries.map((c) => [c.code, c.name])), [countries]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return channels.filter((ch) => {
      if (country && ch.country !== country) return false;
      if (category && ch.category !== category) return false;
      if (!needle) return true;
      return (
        ch.name.toLowerCase().includes(needle) ||
        ch.note.toLowerCase().includes(needle) ||
        (countryName.get(ch.country) ?? "").toLowerCase().includes(needle)
      );
    });
  }, [channels, q, country, category, countryName]);

  return (
    <>
      <input
        className="search-box"
        type="search"
        placeholder="Pl. BBC, ZDF, hírek, NHK…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Keresés csatornanévre"
      />
      <div className="filters">
        <select value={country} onChange={(e) => setCountry(e.target.value)} aria-label="Ország">
          <option value="">Minden ország</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Típus">
          <option value="">Minden típus</option>
          {Object.entries(CATEGORY_LABEL).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <p className="country-count">{results.length} találat</p>
      <div className="channel-list">
        {results.map((ch) => (
          <article key={ch.id} className="channel-card">
            <div className="channel-top">
              <div className="channel-name">
                {flag(ch.country)} {ch.name}
              </div>
              <a className="watch-btn" href={ch.url} target="_blank" rel="noopener noreferrer">
                Megnyitás ↗
              </a>
            </div>
            <div className="tags">
              <span className="tag">{CATEGORY_LABEL[ch.category]}</span>
              <span className={`tag ${ch.access === "free" ? "ok" : ""}`}>{ACCESS_LABEL[ch.access]}</span>
              <span className={`tag ${ch.geo === "national" ? "warn" : "ok"}`}>{GEO_LABEL[ch.geo]}</span>
            </div>
            {ch.note && <p className="channel-note">{ch.note}</p>}
          </article>
        ))}
      </div>
    </>
  );
}
