# Legális TV

Ingyenes, legális élő TV-csatornák gyűjteménye országok szerint. Az oldal **nem közvetít adást**: minden csatornánál a műsorszolgáltató vagy a szolgáltatás hivatalos oldalára mutat a link.

## Követelmények

- Node.js **22.5 vagy újabb** (a beépített `node:sqlite` modult használja, nincs natív függőség)

## Indítás

```bash
npm install
npm run dev        # fejlesztői szerver: http://localhost:3000
```

Éles build:

```bash
npm run build
npm start
```

A `dev` és a `build` parancs automatikusan újraépíti az adatbázist (`data/tv.db`) a `data/channels.json` fájlból.

## Nyelvek

Az oldal alapnyelve angol (`/en/`), a nyelvválasztóban elérhető még: német (`/de/`), francia (`/fr/`), spanyol (`/es/`), magyar (`/hu/`), lengyel (`/pl/`) és orosz (`/ru/`). A gyökér (`/`) átirányít az angol változatra.

A fordítások a `lib/i18n/` mappában vannak:

| Fájl | Tartalom |
|---|---|
| `ui.ts` | Felületi szövegek és a Tudnivalók oldal |
| `notes.ts` | A csatornákhoz tartozó jegyzetek (a `channels.json` `note_key` mezője erre mutat) |
| `countries.ts` | Országnevek |
| `index.ts` | A támogatott nyelvek listája (`LANGS`) |

Új nyelv felvétele: add hozzá a `LANGS`-hoz és a `LANG_LABEL`-hez, majd írd meg a hozzá tartozó fordításokat a három fájlban (a TypeScript jelzi, ha valami hiányzik). Új csatornajegyzethez adj egy új kulcsot a `notes.ts`-ben, és hivatkozz rá a `channels.json`-ban.

## Telepítés (GitHub Pages)

A `.github/workflows/deploy.yml` minden `main`-re küldött változásnál, hetente egyszer és kézi indításra is felépíti a statikus oldalt (`out/`), és kiteszi a GitHub Pages-re. Az egyedi domain a `public/CNAME` fájlból jön.

Egyszeri beállítás a GitHubon: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Felépítés

| Mappa / fájl | Szerepe |
|---|---|
| `data/channels.json` | A csatornák, országok és platformok forrásadata (ezt szerkeszd) |
| `scripts/seed.mjs` | Ebből építi a SQLite adatbázist (`data/tv.db`) |
| `scripts/check-links.mjs` | Ellenőrzi, hogy a linkek elérhetők-e (`npm run check-links`) |
| `lib/db.ts` | Adatbázis-lekérdezések |
| `app/[lang]/` | Oldalak nyelvenként: főoldal, országoldal, keresés, tudnivalók |
| `lib/i18n/` | Fordítások (lásd lent) |

## Új csatorna felvétele (szabályok)

Csak akkor kerülhet be egy csatorna, ha mind igaz:

1. A link a **műsorszolgáltató saját hivatalos oldalára** vagy egy **licencelt, ingyenes szolgáltatásra** (pl. Pluto TV, Samsung TV Plus) mutat.
2. Az élő adás **ingyenes** (regisztráció megengedett, fizetős előfizetés nem).
3. A hozzáférési korlátot (`geo`, `access`) a `note` mezőben jelezd, ha van (TV-licenc, területi korlát).
4. **Soha nem kerülhet be** „IPTV-lista", m3u/m3u8 link vagy bármi, aminek a jogtisztasága nem egyértelmű.

Beszúrás után: `npm run seed && npm run check-links`.

## Fontos: a linkek ellenőrzése

A mellékelt linkek hivatalos főoldalak, a hozzájuk tartozó ingyenességi és területi információk pedig forrásokból, **nem élő teszteléssel** lettek összeállítva. Mielőtt élesben publikálod:

1. Futtasd az `npm run check-links` parancsot, és nézd át azokat, amik nem `ok` állapotúak.
2. Egy-egy csatornánál nyisd meg kézzel a linket, és nézd meg, hogy az élő adás tényleg ingyenes-e és milyen feltétellel.
3. Jogi kérdésekben (felelősség, adatvédelem/GDPR, márkanevek használata) konzultálj ügyvéddel.

## Ütemterv

- [x] 1. verzió: ~60 ellenőrizendő legális forrás, országok szerint, keresés és szűrés
- [ ] Műsorújság (EPG): a `programmes` tábla már megvan az adatbázisban. Csak olyan EPG-forrást használj, amelynek a licence engedi a felhasználást (pl. a műsorszolgáltató saját adatai vagy hivatalos API-ja).
- [ ] „Hol nézhetem ezt?" funkció: műsorcím alapján megmutatni, melyik legális szolgáltatón érhető el az adott országban (licencelt adatforrás kell hozzá, pl. TMDB / JustWatch partneri adat).
- [ ] Automatikus, ütemezett linkellenőrzés és hibajelentő űrlap.
- [ ] Angol/magyar nyelvi váltás.
