import Link from "next/link";
import { notFound } from "next/navigation";
import ChannelCard from "../../components/ChannelCard";
import { getChannelsByCountry, getCountries, getCountry } from "@/lib/db";
import { CATEGORY_LABEL, flag } from "@/lib/labels";

export function generateStaticParams() {
  return getCountries().map((c) => ({ code: c.code }));
}

export default async function CountryPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const country = getCountry(code);
  if (!country) notFound();

  const channels = getChannelsByCountry(code);
  const groups = new Map<string, typeof channels>();
  for (const ch of channels) {
    const list = groups.get(ch.category) ?? [];
    list.push(ch);
    groups.set(ch.category, list);
  }

  return (
    <>
      <div className="crumbs">
        <Link href="/">Országok</Link> / {country.name}
      </div>
      <h1>
        {flag(country.code)} {country.name}
      </h1>
      <p className="lead">{channels.length} legális, ingyenes forrás.</p>

      {[...groups.entries()].map(([category, list]) => (
        <section key={category}>
          <h2>{CATEGORY_LABEL[category]}</h2>
          <div className="channel-list">
            {list.map((ch) => (
              <ChannelCard key={ch.id} channel={ch} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
