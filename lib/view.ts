import { getCountries, type Channel } from "./db";
import { countryNames, fill, notes, ui, type Lang } from "./i18n";

export const CATEGORY_ORDER = ["public", "news", "civic", "commercial_free", "fast"] as const;

// Az országkódból zászló emoji (a GLOBAL külön kezelve).
export function flag(code: string): string {
  if (code === "GLOBAL") return "🌍";
  return code
    .toUpperCase()
    .split("")
    .map((c) => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join("");
}

export type ChannelView = {
  id: string;
  name: string;
  url: string;
  country: string;
  flag: string;
  countryName: string;
  category: Channel["category"];
  categoryLabel: string;
  access: Channel["access"];
  accessLabel: string;
  geo: Channel["geo"];
  geoLabel: string;
  note: string;
  openLabel: string;
  openAria: string;
};

export function toView(ch: Channel, lang: Lang): ChannelView {
  const t = ui[lang];
  const country = countryNames(lang, ch.country);
  const noteTpl = ch.note_key ? notes[ch.note_key]?.[lang] : undefined;
  return {
    id: ch.id,
    name: ch.name,
    url: ch.url,
    country: ch.country,
    flag: flag(ch.country),
    countryName: country,
    category: ch.category,
    categoryLabel: t.category[ch.category],
    access: ch.access,
    accessLabel: t.access[ch.access],
    geo: ch.geo,
    geoLabel: t.geo[ch.geo],
    note: noteTpl ? fill(noteTpl, { country }) : "",
    openLabel: t.card.open,
    openAria: fill(t.card.openAria, { name: ch.name }),
  };
}

export type CountryView = { code: string; name: string; flag: string; count: number };

/** Országok lokalizált névvel, a GLOBAL elöl, a többi a nyelv szabályai szerint rendezve. */
export function getCountryViews(lang: Lang): CountryView[] {
  const collator = new Intl.Collator(lang);
  return getCountries()
    .map((c) => ({ code: c.code, name: countryNames(lang, c.code), flag: flag(c.code), count: c.channel_count }))
    .sort((a, b) => {
      if (a.code === "GLOBAL") return -1;
      if (b.code === "GLOBAL") return 1;
      return collator.compare(a.name, b.name);
    });
}
