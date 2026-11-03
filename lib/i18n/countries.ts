import type { Lang } from "./index";

// Sorrend: en, de, fr, es, hu, pl, ru
const rows: Record<string, [string, string, string, string, string, string, string]> = {
  GLOBAL: ["Global", "Global", "International", "Global", "Globális", "Globalne", "Весь мир"],
  GB: ["United Kingdom", "Vereinigtes Königreich", "Royaume-Uni", "Reino Unido", "Egyesült Királyság", "Wielka Brytania", "Великобритания"],
  IE: ["Ireland", "Irland", "Irlande", "Irlanda", "Írország", "Irlandia", "Ирландия"],
  DE: ["Germany", "Deutschland", "Allemagne", "Alemania", "Németország", "Niemcy", "Германия"],
  AT: ["Austria", "Österreich", "Autriche", "Austria", "Ausztria", "Austria", "Австрия"],
  CH: ["Switzerland", "Schweiz", "Suisse", "Suiza", "Svájc", "Szwajcaria", "Швейцария"],
  FR: ["France", "Frankreich", "France", "Francia", "Franciaország", "Francja", "Франция"],
  IT: ["Italy", "Italien", "Italie", "Italia", "Olaszország", "Włochy", "Италия"],
  ES: ["Spain", "Spanien", "Espagne", "España", "Spanyolország", "Hiszpania", "Испания"],
  PT: ["Portugal", "Portugal", "Portugal", "Portugal", "Portugália", "Portugalia", "Португалия"],
  NL: ["Netherlands", "Niederlande", "Pays-Bas", "Países Bajos", "Hollandia", "Holandia", "Нидерланды"],
  BE: ["Belgium", "Belgien", "Belgique", "Bélgica", "Belgium", "Belgia", "Бельгия"],
  SE: ["Sweden", "Schweden", "Suède", "Suecia", "Svédország", "Szwecja", "Швеция"],
  NO: ["Norway", "Norwegen", "Norvège", "Noruega", "Norvégia", "Norwegia", "Норвегия"],
  DK: ["Denmark", "Dänemark", "Danemark", "Dinamarca", "Dánia", "Dania", "Дания"],
  FI: ["Finland", "Finnland", "Finlande", "Finlandia", "Finnország", "Finlandia", "Финляндия"],
  PL: ["Poland", "Polen", "Pologne", "Polonia", "Lengyelország", "Polska", "Польша"],
  CZ: ["Czechia", "Tschechien", "Tchéquie", "Chequia", "Csehország", "Czechy", "Чехия"],
  HU: ["Hungary", "Ungarn", "Hongrie", "Hungría", "Magyarország", "Węgry", "Венгрия"],
  US: ["United States", "USA", "États-Unis", "Estados Unidos", "Egyesült Államok", "Stany Zjednoczone", "США"],
  CA: ["Canada", "Kanada", "Canada", "Canadá", "Kanada", "Kanada", "Канада"],
  BR: ["Brazil", "Brasilien", "Brésil", "Brasil", "Brazília", "Brazylia", "Бразилия"],
  AU: ["Australia", "Australien", "Australie", "Australia", "Ausztrália", "Australia", "Австралия"],
  JP: ["Japan", "Japan", "Japon", "Japón", "Japán", "Japonia", "Япония"],
  KR: ["South Korea", "Südkorea", "Corée du Sud", "Corea del Sur", "Dél-Korea", "Korea Południowa", "Южная Корея"],
  QA: ["Qatar", "Katar", "Qatar", "Catar", "Katar", "Katar", "Катар"],
};

const INDEX: Record<Lang, number> = { en: 0, de: 1, fr: 2, es: 3, hu: 4, pl: 5, ru: 6 };

export const countryNames = (lang: Lang, code: string): string => rows[code]?.[INDEX[lang]] ?? code;
