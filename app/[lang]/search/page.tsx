import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SearchClient from "./SearchClient";
import { getAllChannels } from "@/lib/db";
import { alternates, isLang, ui } from "@/lib/i18n";
import { CATEGORY_ORDER, getCountryViews, toView } from "@/lib/view";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: `${ui[lang].search.h1} – ${ui[lang].siteName}`, alternates: alternates(lang, "/search/") };
}

export default async function SearchPage({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = ui[lang];

  const items = getAllChannels().map((c) => toView(c, lang));
  const countries = getCountryViews(lang).map((c) => ({ code: c.code, name: c.name }));
  const categories = CATEGORY_ORDER.map((key) => ({ key, label: t.category[key] }));

  return (
    <>
      <h1>{t.search.h1}</h1>
      <p className="lead">{t.search.lead}</p>
      <SearchClient items={items} countries={countries} categories={categories} t={t.search} />
    </>
  );
}
