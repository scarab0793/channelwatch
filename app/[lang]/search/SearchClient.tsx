"use client";

import { useMemo, useState } from "react";
import ChannelCard from "../../components/ChannelCard";
import type { ChannelView } from "@/lib/view";

type Props = {
  items: (ChannelView & { country: string })[];
  countries: { code: string; name: string }[];
  categories: { key: string; label: string }[];
  t: {
    placeholder: string;
    allCountries: string;
    allTypes: string;
    results: string;
    searchAria: string;
    countryAria: string;
    typeAria: string;
  };
};

export default function SearchClient({ items, countries, categories, t }: Props) {
  const [q, setQ] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter((ch) => {
      if (country && ch.country !== country) return false;
      if (category && ch.category !== category) return false;
      if (!needle) return true;
      return (
        ch.name.toLowerCase().includes(needle) ||
        ch.note.toLowerCase().includes(needle) ||
        ch.countryName.toLowerCase().includes(needle)
      );
    });
  }, [items, q, country, category]);

  return (
    <>
      <input
        className="search-box"
        type="search"
        placeholder={t.placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label={t.searchAria}
      />
      <div className="filters">
        <select value={country} onChange={(e) => setCountry(e.target.value)} aria-label={t.countryAria}>
          <option value="">{t.allCountries}</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label={t.typeAria}>
          <option value="">{t.allTypes}</option>
          {categories.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <p className="country-count">{t.results.replace("{n}", String(results.length))}</p>
      <div className="channel-list">
        {results.map((ch) => (
          <ChannelCard key={ch.id} channel={ch} showCountry />
        ))}
      </div>
    </>
  );
}
