import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ChannelCard from "../../../components/ChannelCard";
import { getChannelsByCountry, getCountries } from "@/lib/db";
import { LANGS, alternates, countryNames, fill, isLang, ui } from "@/lib/i18n";
import { CATEGORY_ORDER, flag, toView } from "@/lib/view";

export const dynamicParams = false;

export function generateStaticParams() {
  const codes = getCountries().map((c) => c.code);
  return LANGS.flatMap((lang) => codes.map((code) => ({ lang, code })));
}

type P = { params: Promise<{ lang: string; code: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, code } = await params;
  if (!isLang(lang)) return {};
  return {
    title: `${countryNames(lang, code)} – ${ui[lang].siteName}`,
    alternates: alternates(lang, `/country/${code}/`),
  };
}

export default async function CountryPage({ params }: P) {
  const { lang, code } = await params;
  if (!isLang(lang)) notFound();
  const t = ui[lang];

  const channels = getChannelsByCountry(code).map((c) => toView(c, lang));
  if (channels.length === 0) notFound();

  return (
    <>
      <div className="crumbs">
        <Link href={`/${lang}/`}>{t.country.crumb}</Link> / {countryNames(lang, code)}
      </div>
      <h1>
        {flag(code)} {countryNames(lang, code)}
      </h1>
      <p className="lead">{fill(t.country.lead, { n: channels.length })}</p>

      {CATEGORY_ORDER.map((category) => {
        const list = channels.filter((c) => c.category === category);
        if (list.length === 0) return null;
        return (
          <section key={category}>
            <h2>{t.category[category]}</h2>
            <div className="channel-list">
              {list.map((ch) => (
                <ChannelCard key={ch.id} channel={ch} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
