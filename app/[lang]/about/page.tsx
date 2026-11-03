import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternates, isLang, ui } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: ui[lang].about.metaTitle, alternates: alternates(lang, "/about/") };
}

export default async function About({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = ui[lang].about;

  return (
    <div className="prose">
      <h1>{t.title}</h1>
      {t.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.p && <p>{s.p}</p>}
          {s.ul && (
            <ul>
              {s.ul.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
