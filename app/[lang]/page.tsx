import Link from "next/link";
import { notFound } from "next/navigation";
import { fill, isLang, ui } from "@/lib/i18n";
import { getAllChannels } from "@/lib/db";
import { getCountryViews } from "@/lib/view";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = ui[lang];
  const countries = getCountryViews(lang);
  const total = getAllChannels().length; // egyedi források (egy forrás több országban is szerepelhet)

  return (
    <>
      <h1>{t.home.h1}</h1>
      <p className="lead">{fill(t.home.lead, { total, groups: countries.length })}</p>

      <div className="country-grid">
        {countries.map((c) => (
          <Link key={c.code} href={`/${lang}/country/${c.code}/`} className="country-card">
            <span className="country-flag">{c.flag}</span>
            <span>
              <div className="country-name">{c.name}</div>
              <div className="country-count">{fill(t.home.channels, { n: c.count })}</div>
            </span>
          </Link>
        ))}
      </div>

      <div className="notice">{t.home.notice}</div>
    </>
  );
}
