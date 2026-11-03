import { getAllChannels, getCountries } from "@/lib/db";
import SearchClient from "./SearchClient";

export default function SearchPage() {
  const channels = getAllChannels();
  const countries = getCountries().map((c) => ({ code: c.code, name: c.name }));

  return (
    <>
      <h1>Keresés</h1>
      <p className="lead">Keress csatornanévre, szűrj országra vagy típusra.</p>
      <SearchClient channels={channels} countries={countries} />
    </>
  );
}
