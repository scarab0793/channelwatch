import Link from "next/link";
import { getCountries } from "@/lib/db";
import { flag } from "@/lib/labels";

export default function Home() {
  const countries = getCountries();
  const total = countries.reduce((sum, c) => sum + c.channel_count, 0);

  return (
    <>
      <h1>Legális, ingyenes élő TV – országok szerint</h1>
      <p className="lead">
        {total} hivatalos forrás {countries.length} csoportban. Minden csatornánál a műsorszolgáltató vagy a
        szolgáltatás hivatalos oldalára vezet a link – nem közvetítünk adást, és nem linkelünk jogosulatlan streamekre.
      </p>

      <div className="country-grid">
        {countries.map((c) => (
          <Link key={c.code} href={`/country/${c.code}`} className="country-card">
            <span className="country-flag">{flag(c.code)}</span>
            <span>
              <div className="country-name">{c.name}</div>
              <div className="country-count">{c.channel_count} csatorna</div>
            </span>
          </Link>
        ))}
      </div>

      <div className="notice">
        Egyes adások csak az adott országban, TV-licenc birtokában vagy ingyenes regisztrációval nézhetők. Ezt minden
        csatornánál jelezzük, de a pontos feltételeket mindig a szolgáltató oldalán találod.
      </div>
    </>
  );
}
