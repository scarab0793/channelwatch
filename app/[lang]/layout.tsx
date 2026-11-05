import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LangSwitcher from "../components/LangSwitcher";
import "../globals.css";
import { LANGS, SITE_URL, alternates, isLang, ui } from "@/lib/i18n";
import { filmsText } from "@/lib/i18n/films";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    metadataBase: new URL(SITE_URL),
    title: ui[lang].metaTitle,
    description: ui[lang].metaDescription,
    alternates: alternates(lang, "/"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = ui[lang];

  return (
    <html lang={lang}>
      <body>
        <header className="site-header">
          <div className="wrap header-inner">
            <Link href={`/${lang}/`} className="brand">
              <span className="brand-mark">▶</span> {t.siteName}
            </Link>
            <div className="header-right">
              <nav className="main-nav">
                <Link href={`/${lang}/`}>{t.nav.countries}</Link>
                <Link href={`/${lang}/search/`}>{t.nav.search}</Link>
                <Link href={`/${lang}/films/`}>{filmsText[lang].nav}</Link>
                <Link href={`/${lang}/about/`}>{t.nav.about}</Link>
              </nav>
              <LangSwitcher current={lang} label={t.nav.language} />
            </div>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">{t.footer}</div>
        </footer>
      </body>
    </html>
  );
}
