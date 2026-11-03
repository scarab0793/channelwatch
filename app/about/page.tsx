export const metadata = { title: "Tudnivalók – Legális TV" };

export default function About() {
  return (
    <div className="prose">
      <h1>Tudnivalók</h1>

      <h2>Mit csinál az oldal?</h2>
      <p>
        Összegyűjti azokat a TV-csatornákat és ingyenes szolgáltatásokat, amelyek élő adását a műsorszolgáltató maga
        kínálja ingyen, és a hivatalos oldalukra irányít. Az adást nem mi közvetítjük, és nem ágyazzuk be.
      </p>

      <h2>Mit nem csinál?</h2>
      <ul>
        <li>Nem gyűjt és nem linkel „IPTV-listákat", mert azok többsége jogosulatlan stream.</li>
        <li>Nem kerüli meg a területi korlátozásokat (nem VPN-ajánló).</li>
        <li>Nem ígéri, hogy „minden csatorna" megtalálható: a jogok országonként és szolgáltatónként külön vannak eladva.</li>
      </ul>

      <h2>A jelölések jelentése</h2>
      <ul>
        <li><strong>Regisztráció nélkül / ingyenes regisztrációval:</strong> kell-e fiók az élő nézéshez.</li>
        <li><strong>Területhez kötött:</strong> az adás általában csak az adott országban nézhető. Egyes országokban TV-licenc is kell hozzá (például az Egyesült Királyságban az élő adáshoz).</li>
        <li><strong>Világszerte elérhető:</strong> a szolgáltató nemzetközi közönségnek szánja az adást.</li>
      </ul>

      <h2>Pontosság</h2>
      <p>
        A szolgáltatók gyakran változtatják az oldalaikat és a hozzáférési feltételeket. Ha egy link nem működik vagy a
        feltételek megváltoztak, érdemes jelezni, hogy javítsuk.
      </p>
    </div>
  );
}
