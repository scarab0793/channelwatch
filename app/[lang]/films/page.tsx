import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternates, fill, isLang } from "@/lib/i18n";
import { filmsText } from "@/lib/i18n/films";
import { getFilms } from "@/lib/films";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: filmsText[lang].metaTitle, alternates: alternates(lang, "/films/") };
}

export default async function Films({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = filmsText[lang];
  const all = getFilms();
  const free = all.filter((f) => f.status !== "us_only");
  const warn = all.filter((f) => f.status === "us_only");

  return (
    <>
      <h1>{t.h1}</h1>
      <p className="lead">{t.lead}</p>

      <h2>{t.free.h}</h2>
      <p className="lead">{t.free.p}</p>
      <div className="country-grid">
        {free.map((f) => (
          <article key={f.id} className="channel-card">
            <div className="channel-top">
              <div className="channel-name">
                {f.title} ({f.year})
              </div>
              <a className="watch-btn" href={f.url} target="_blank" rel="noopener noreferrer" aria-label={`${t.open} ${f.title}`}>
                {t.open}
              </a>
            </div>
            <div className="tags">
              <span className="tag ok">{t.status[f.status]}</span>
              {f.source && <span className="tag">{f.source}</span>}
            </div>
          </article>
        ))}
      </div>

      <h2>{t.warn.h}</h2>
      <p className="lead">{t.warn.p}</p>
      <div className="country-grid">
        {warn.map((f) => (
          <article key={f.id} className="channel-card">
            <div className="channel-name">
              {f.title} ({f.year})
            </div>
            <div className="tags">
              <span className="tag warn">{t.status[f.status]}</span>
            </div>
            <p className="channel-note">{fill(t.warn.until, { year: (f.until ?? "").replace("+", "") })}</p>
          </article>
        ))}
      </div>

      <div className="notice">{t.notice}</div>
    </>
  );
}
