export const LANGS = ["en", "de", "fr", "es", "hu", "pl", "ru"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export const LANG_LABEL: Record<Lang, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  hu: "Magyar",
  pl: "Polski",
  ru: "Русский",
};

export function isLang(x: string): x is Lang {
  return (LANGS as readonly string[]).includes(x);
}

export const SITE_URL = "https://channelwatch.live";

/** Canonical és hreflang alternatívák egy oldalhoz (path pl. "/" vagy "/country/GB/"). */
export function alternates(lang: Lang, pagePath: string) {
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[l] = `/${l}${pagePath}`;
  languages["x-default"] = `/${DEFAULT_LANG}${pagePath}`;
  return { canonical: `/${lang}${pagePath}`, languages };
}

export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

export { ui, type UI } from "./ui";
export { notes } from "./notes";
export { countryNames } from "./countries";
