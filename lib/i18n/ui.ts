import type { Lang } from "./index";

export type UI = {
  siteName: string;
  metaTitle: string;
  metaDescription: string;
  nav: { countries: string; search: string; about: string; language: string };
  home: { h1: string; lead: string; notice: string; channels: string };
  country: { crumb: string; lead: string };
  search: {
    h1: string;
    lead: string;
    placeholder: string;
    allCountries: string;
    allTypes: string;
    results: string;
    searchAria: string;
    countryAria: string;
    typeAria: string;
  };
  card: { open: string; openAria: string };
  category: { public: string; news: string; commercial_free: string; fast: string };
  access: { free: string; free_account: string };
  geo: { national: string; global: string };
  footer: string;
  about: { title: string; metaTitle: string; sections: { h: string; p?: string; ul?: string[] }[] };
};

export const ui: Record<Lang, UI> = {
  en: {
    siteName: "Legal TV",
    metaTitle: "Legal TV – free, official live channels",
    metaDescription: "Legal, free live TV channels by country, always linking to the official source.",
    nav: { countries: "Countries", search: "Search", about: "About", language: "Language" },
    home: {
      h1: "Legal, free live TV – by country",
      lead: "{total} official sources in {groups} groups. Each channel links to the official site of the broadcaster or service – we don't stream anything and never link to unauthorised streams.",
      notice:
        "Some streams can only be watched in the given country, with a TV licence or after a free registration. We flag this for each channel, but always check the exact terms on the provider's site.",
      channels: "{n} channels",
    },
    country: { crumb: "Countries", lead: "{n} legal, free sources." },
    search: {
      h1: "Search",
      lead: "Search by channel name, or filter by country or type.",
      placeholder: "E.g. BBC, ZDF, news, NHK…",
      allCountries: "All countries",
      allTypes: "All types",
      results: "{n} results",
      searchAria: "Search by channel name",
      countryAria: "Country",
      typeAria: "Type",
    },
    card: { open: "Open ↗", openAria: "Open {name} on the official site" },
    category: { public: "Public broadcaster", news: "News channel", commercial_free: "Free commercial", fast: "Free (FAST) platform" },
    access: { free: "No registration", free_account: "Free registration" },
    geo: { national: "Geo-restricted", global: "Available worldwide" },
    footer:
      "This site does not stream anything; it only links to the official, free sources of channels. Access conditions (territory, registration, TV licence) are always set by the provider.",
    about: {
      title: "About",
      metaTitle: "About – Legal TV",
      sections: [
        {
          h: "What does this site do?",
          p: "It collects TV channels and free services whose live broadcast is offered free of charge by the broadcaster itself, and sends you to their official site. We don't stream or embed anything.",
        },
        {
          h: "What it does not do",
          ul: [
            "It doesn't collect or link “IPTV lists”, because most of them are unauthorised streams.",
            "It doesn't circumvent geo-restrictions (it is not a VPN recommender).",
            "It doesn't promise that “every channel” is listed: broadcasting rights are sold separately by country and provider.",
          ],
        },
        {
          h: "What the labels mean",
          ul: [
            "No registration / Free registration: whether you need an account to watch live.",
            "Geo-restricted: the stream can usually only be watched in the given country. Some countries also require a TV licence (for example for live TV in the UK).",
            "Available worldwide: the provider intends the stream for an international audience.",
          ],
        },
        {
          h: "Accuracy",
          p: "Providers often change their sites and access conditions. If a link is broken or the conditions have changed, please let us know so we can fix it.",
        },
      ],
    },
  },

  de: {
    siteName: "Legal TV",
    metaTitle: "Legal TV – kostenlose, offizielle Live-Sender",
    metaDescription: "Legale, kostenlose Live-TV-Sender nach Ländern, mit Link zur offiziellen Quelle.",
    nav: { countries: "Länder", search: "Suche", about: "Info", language: "Sprache" },
    home: {
      h1: "Legales, kostenloses Live-TV – nach Ländern",
      lead: "{total} offizielle Quellen in {groups} Gruppen. Jeder Sender verlinkt auf die offizielle Seite des Senders oder Dienstes – wir streamen nichts und verlinken nie auf nicht autorisierte Streams.",
      notice:
        "Einige Streams sind nur im jeweiligen Land, mit TV-Lizenz oder nach einer kostenlosen Registrierung nutzbar. Das kennzeichnen wir bei jedem Sender, die genauen Bedingungen findest du aber immer auf der Seite des Anbieters.",
      channels: "{n} Sender",
    },
    country: { crumb: "Länder", lead: "{n} legale, kostenlose Quellen." },
    search: {
      h1: "Suche",
      lead: "Suche nach Sendernamen oder filtere nach Land und Typ.",
      placeholder: "Z. B. BBC, ZDF, Nachrichten, NHK…",
      allCountries: "Alle Länder",
      allTypes: "Alle Typen",
      results: "{n} Treffer",
      searchAria: "Nach Sendernamen suchen",
      countryAria: "Land",
      typeAria: "Typ",
    },
    card: { open: "Öffnen ↗", openAria: "{name} auf der offiziellen Seite öffnen" },
    category: { public: "Öffentlich-rechtlich", news: "Nachrichtensender", commercial_free: "Kostenlos (kommerziell)", fast: "Kostenlose (FAST-)Plattform" },
    access: { free: "Ohne Registrierung", free_account: "Kostenlose Registrierung" },
    geo: { national: "Regional beschränkt", global: "Weltweit verfügbar" },
    footer:
      "Diese Seite streamt nichts, sondern verlinkt nur auf die offiziellen, kostenlosen Quellen der Sender. Die Zugangsbedingungen (Gebiet, Registrierung, TV-Lizenz) legt immer der Anbieter fest.",
    about: {
      title: "Info",
      metaTitle: "Info – Legal TV",
      sections: [
        {
          h: "Was macht diese Seite?",
          p: "Sie sammelt TV-Sender und kostenlose Dienste, deren Live-Programm der Anbieter selbst gratis anbietet, und leitet dich auf die offizielle Seite weiter. Wir streamen oder betten nichts ein.",
        },
        {
          h: "Was sie nicht tut",
          ul: [
            "Sie sammelt und verlinkt keine „IPTV-Listen“, da die meisten davon nicht autorisierte Streams sind.",
            "Sie umgeht keine Regionssperren (sie ist keine VPN-Empfehlung).",
            "Sie verspricht nicht, dass „jeder Sender“ aufgeführt ist: Senderechte werden je Land und Anbieter getrennt verkauft.",
          ],
        },
        {
          h: "Was die Kennzeichnungen bedeuten",
          ul: [
            "Ohne Registrierung / Kostenlose Registrierung: ob du für das Live-Programm ein Konto brauchst.",
            "Regional beschränkt: der Stream ist in der Regel nur im jeweiligen Land abrufbar. In manchen Ländern ist zusätzlich eine TV-Lizenz nötig (z. B. für Live-TV im Vereinigten Königreich).",
            "Weltweit verfügbar: der Anbieter richtet den Stream an ein internationales Publikum.",
          ],
        },
        {
          h: "Genauigkeit",
          p: "Anbieter ändern oft ihre Seiten und Zugangsbedingungen. Wenn ein Link nicht funktioniert oder sich die Bedingungen geändert haben, gib uns bitte Bescheid, damit wir es korrigieren.",
        },
      ],
    },
  },

  fr: {
    siteName: "Legal TV",
    metaTitle: "Legal TV – chaînes en direct gratuites et officielles",
    metaDescription: "Chaînes de télévision en direct, légales et gratuites, par pays, avec un lien vers la source officielle.",
    nav: { countries: "Pays", search: "Recherche", about: "À propos", language: "Langue" },
    home: {
      h1: "TV en direct légale et gratuite – par pays",
      lead: "{total} sources officielles dans {groups} groupes. Chaque chaîne renvoie vers le site officiel du diffuseur ou du service – nous ne diffusons rien et ne renvoyons jamais vers des flux non autorisés.",
      notice:
        "Certains flux ne sont accessibles que dans le pays concerné, avec une redevance TV ou après une inscription gratuite. Nous l'indiquons pour chaque chaîne, mais vérifiez toujours les conditions exactes sur le site du fournisseur.",
      channels: "{n} chaînes",
    },
    country: { crumb: "Pays", lead: "{n} sources légales et gratuites." },
    search: {
      h1: "Recherche",
      lead: "Cherchez par nom de chaîne, ou filtrez par pays ou par type.",
      placeholder: "Ex. BBC, ZDF, actualités, NHK…",
      allCountries: "Tous les pays",
      allTypes: "Tous les types",
      results: "{n} résultats",
      searchAria: "Rechercher par nom de chaîne",
      countryAria: "Pays",
      typeAria: "Type",
    },
    card: { open: "Ouvrir ↗", openAria: "Ouvrir {name} sur le site officiel" },
    category: { public: "Service public", news: "Chaîne d'information", commercial_free: "Commerciale gratuite", fast: "Plateforme gratuite (FAST)" },
    access: { free: "Sans inscription", free_account: "Inscription gratuite" },
    geo: { national: "Restreint géographiquement", global: "Disponible dans le monde entier" },
    footer:
      "Ce site ne diffuse rien ; il renvoie uniquement vers les sources officielles et gratuites des chaînes. Les conditions d'accès (territoire, inscription, redevance TV) sont toujours fixées par le fournisseur.",
    about: {
      title: "À propos",
      metaTitle: "À propos – Legal TV",
      sections: [
        {
          h: "Que fait ce site ?",
          p: "Il rassemble les chaînes de télévision et les services gratuits dont le direct est proposé gratuitement par le diffuseur lui-même, et vous renvoie vers leur site officiel. Nous ne diffusons ni n'intégrons rien.",
        },
        {
          h: "Ce qu'il ne fait pas",
          ul: [
            "Il ne collecte ni ne référence de « listes IPTV », car la plupart sont des flux non autorisés.",
            "Il ne contourne pas les restrictions géographiques (ce n'est pas un site de recommandation de VPN).",
            "Il ne promet pas que « toutes les chaînes » y figurent : les droits de diffusion sont vendus séparément par pays et par fournisseur.",
          ],
        },
        {
          h: "Signification des étiquettes",
          ul: [
            "Sans inscription / Inscription gratuite : si un compte est nécessaire pour regarder le direct.",
            "Restreint géographiquement : le flux n'est généralement visible que dans le pays concerné. Certains pays exigent aussi une redevance TV (par exemple pour la télévision en direct au Royaume-Uni).",
            "Disponible dans le monde entier : le fournisseur destine le flux à un public international.",
          ],
        },
        {
          h: "Exactitude",
          p: "Les fournisseurs modifient souvent leurs sites et leurs conditions d'accès. Si un lien ne fonctionne pas ou si les conditions ont changé, merci de nous le signaler pour que nous corrigions.",
        },
      ],
    },
  },

  es: {
    siteName: "Legal TV",
    metaTitle: "Legal TV – canales en directo gratuitos y oficiales",
    metaDescription: "Canales de televisión en directo legales y gratuitos por país, con enlace a la fuente oficial.",
    nav: { countries: "Países", search: "Buscar", about: "Acerca de", language: "Idioma" },
    home: {
      h1: "TV en directo legal y gratuita – por país",
      lead: "{total} fuentes oficiales en {groups} grupos. Cada canal enlaza con el sitio oficial de la emisora o del servicio: no retransmitimos nada y nunca enlazamos a emisiones no autorizadas.",
      notice:
        "Algunas emisiones solo se pueden ver en el país correspondiente, con licencia de TV o tras un registro gratuito. Lo indicamos en cada canal, pero consulta siempre las condiciones exactas en el sitio del proveedor.",
      channels: "{n} canales",
    },
    country: { crumb: "Países", lead: "{n} fuentes legales y gratuitas." },
    search: {
      h1: "Buscar",
      lead: "Busca por nombre de canal o filtra por país y tipo.",
      placeholder: "P. ej. BBC, ZDF, noticias, NHK…",
      allCountries: "Todos los países",
      allTypes: "Todos los tipos",
      results: "{n} resultados",
      searchAria: "Buscar por nombre de canal",
      countryAria: "País",
      typeAria: "Tipo",
    },
    card: { open: "Abrir ↗", openAria: "Abrir {name} en el sitio oficial" },
    category: { public: "Servicio público", news: "Canal de noticias", commercial_free: "Comercial gratuito", fast: "Plataforma gratuita (FAST)" },
    access: { free: "Sin registro", free_account: "Registro gratuito" },
    geo: { national: "Restringido por región", global: "Disponible en todo el mundo" },
    footer:
      "Este sitio no retransmite nada; solo enlaza con las fuentes oficiales y gratuitas de los canales. Las condiciones de acceso (territorio, registro, licencia de TV) las fija siempre el proveedor.",
    about: {
      title: "Acerca de",
      metaTitle: "Acerca de – Legal TV",
      sections: [
        {
          h: "¿Qué hace este sitio?",
          p: "Reúne canales de televisión y servicios gratuitos cuya emisión en directo ofrece gratis la propia emisora, y te lleva a su sitio oficial. No retransmitimos ni incrustamos nada.",
        },
        {
          h: "Lo que no hace",
          ul: [
            "No recopila ni enlaza «listas IPTV», porque la mayoría son emisiones no autorizadas.",
            "No elude las restricciones geográficas (no es un recomendador de VPN).",
            "No promete que estén «todos los canales»: los derechos de emisión se venden por separado según el país y el proveedor.",
          ],
        },
        {
          h: "Qué significan las etiquetas",
          ul: [
            "Sin registro / Registro gratuito: si necesitas una cuenta para ver el directo.",
            "Restringido por región: la emisión normalmente solo se puede ver en el país indicado. Algunos países exigen además licencia de TV (por ejemplo, para la televisión en directo en el Reino Unido).",
            "Disponible en todo el mundo: el proveedor dirige la emisión a una audiencia internacional.",
          ],
        },
        {
          h: "Exactitud",
          p: "Los proveedores cambian a menudo sus sitios y sus condiciones de acceso. Si un enlace no funciona o las condiciones han cambiado, avísanos para que lo corrijamos.",
        },
      ],
    },
  },

  hu: {
    siteName: "Legal TV",
    metaTitle: "Legal TV – ingyenes, hivatalos élő csatornák",
    metaDescription: "Legális, ingyenes élő TV-csatornák országok szerint, mindig a hivatalos forrásra mutató linkkel.",
    nav: { countries: "Országok", search: "Keresés", about: "Tudnivalók", language: "Nyelv" },
    home: {
      h1: "Legális, ingyenes élő TV – országok szerint",
      lead: "{total} hivatalos forrás {groups} csoportban. Minden csatornánál a műsorszolgáltató vagy a szolgáltatás hivatalos oldalára vezet a link – nem közvetítünk adást, és nem linkelünk jogosulatlan streamekre.",
      notice:
        "Egyes adások csak az adott országban, TV-licenc birtokában vagy ingyenes regisztrációval nézhetők. Ezt minden csatornánál jelezzük, de a pontos feltételeket mindig a szolgáltató oldalán találod.",
      channels: "{n} csatorna",
    },
    country: { crumb: "Országok", lead: "{n} legális, ingyenes forrás." },
    search: {
      h1: "Keresés",
      lead: "Keress csatornanévre, szűrj országra vagy típusra.",
      placeholder: "Pl. BBC, ZDF, hírek, NHK…",
      allCountries: "Minden ország",
      allTypes: "Minden típus",
      results: "{n} találat",
      searchAria: "Keresés csatornanévre",
      countryAria: "Ország",
      typeAria: "Típus",
    },
    card: { open: "Megnyitás ↗", openAria: "{name} megnyitása a hivatalos oldalon" },
    category: { public: "Közszolgálati", news: "Hírcsatorna", commercial_free: "Ingyenes kereskedelmi", fast: "Ingyenes (FAST) platform" },
    access: { free: "Regisztráció nélkül", free_account: "Ingyenes regisztrációval" },
    geo: { national: "Területhez kötött", global: "Világszerte elérhető" },
    footer:
      "Az oldal nem közvetít adást, csak a csatornák hivatalos, ingyenes forrásaira linkel. A hozzáférés feltételeit (terület, regisztráció, TV-licenc) mindig az adott szolgáltató határozza meg.",
    about: {
      title: "Tudnivalók",
      metaTitle: "Tudnivalók – Legal TV",
      sections: [
        {
          h: "Mit csinál az oldal?",
          p: "Összegyűjti azokat a TV-csatornákat és ingyenes szolgáltatásokat, amelyek élő adását a műsorszolgáltató maga kínálja ingyen, és a hivatalos oldalukra irányít. Az adást nem mi közvetítjük, és nem ágyazzuk be.",
        },
        {
          h: "Mit nem csinál?",
          ul: [
            "Nem gyűjt és nem linkel „IPTV-listákat”, mert azok többsége jogosulatlan stream.",
            "Nem kerüli meg a területi korlátozásokat (nem VPN-ajánló).",
            "Nem ígéri, hogy „minden csatorna” megtalálható: a jogok országonként és szolgáltatónként külön vannak eladva.",
          ],
        },
        {
          h: "A jelölések jelentése",
          ul: [
            "Regisztráció nélkül / Ingyenes regisztrációval: kell-e fiók az élő nézéshez.",
            "Területhez kötött: az adás általában csak az adott országban nézhető. Egyes országokban TV-licenc is kell hozzá (például az Egyesült Királyságban az élő adáshoz).",
            "Világszerte elérhető: a szolgáltató nemzetközi közönségnek szánja az adást.",
          ],
        },
        {
          h: "Pontosság",
          p: "A szolgáltatók gyakran változtatják az oldalaikat és a hozzáférési feltételeket. Ha egy link nem működik vagy a feltételek megváltoztak, érdemes jelezni, hogy javítsuk.",
        },
      ],
    },
  },

  pl: {
    siteName: "Legal TV",
    metaTitle: "Legal TV – bezpłatne, oficjalne kanały na żywo",
    metaDescription: "Legalne, bezpłatne kanały telewizyjne na żywo według krajów, z linkiem do oficjalnego źródła.",
    nav: { countries: "Kraje", search: "Szukaj", about: "O serwisie", language: "Język" },
    home: {
      h1: "Legalna, bezpłatna telewizja na żywo – według krajów",
      lead: "{total} oficjalnych źródeł w {groups} grupach. Każdy kanał prowadzi do oficjalnej strony nadawcy lub usługi – niczego nie transmitujemy i nigdy nie linkujemy do nieautoryzowanych transmisji.",
      notice:
        "Niektóre transmisje można oglądać tylko w danym kraju, z licencją TV lub po bezpłatnej rejestracji. Zaznaczamy to przy każdym kanale, ale dokładne warunki zawsze sprawdzaj na stronie dostawcy.",
      channels: "Kanałów: {n}",
    },
    country: { crumb: "Kraje", lead: "Legalnych, bezpłatnych źródeł: {n}." },
    search: {
      h1: "Szukaj",
      lead: "Szukaj po nazwie kanału albo filtruj według kraju lub typu.",
      placeholder: "Np. BBC, ZDF, wiadomości, NHK…",
      allCountries: "Wszystkie kraje",
      allTypes: "Wszystkie typy",
      results: "Wyniki: {n}",
      searchAria: "Szukaj po nazwie kanału",
      countryAria: "Kraj",
      typeAria: "Typ",
    },
    card: { open: "Otwórz ↗", openAria: "Otwórz {name} na oficjalnej stronie" },
    category: { public: "Nadawca publiczny", news: "Kanał informacyjny", commercial_free: "Komercyjny, bezpłatny", fast: "Bezpłatna platforma (FAST)" },
    access: { free: "Bez rejestracji", free_account: "Bezpłatna rejestracja" },
    geo: { national: "Ograniczenie regionalne", global: "Dostępne na całym świecie" },
    footer:
      "Ta strona niczego nie transmituje; linkuje wyłącznie do oficjalnych, bezpłatnych źródeł kanałów. Warunki dostępu (terytorium, rejestracja, licencja TV) zawsze ustala dostawca.",
    about: {
      title: "O serwisie",
      metaTitle: "O serwisie – Legal TV",
      sections: [
        {
          h: "Czym zajmuje się ta strona?",
          p: "Zbiera kanały telewizyjne i bezpłatne usługi, których transmisję na żywo nadawca sam udostępnia za darmo, i kieruje na ich oficjalną stronę. Niczego nie transmitujemy ani nie osadzamy.",
        },
        {
          h: "Czego nie robi",
          ul: [
            "Nie zbiera i nie linkuje „list IPTV”, bo większość z nich to nieautoryzowane transmisje.",
            "Nie omija ograniczeń regionalnych (to nie jest polecacz VPN).",
            "Nie obiecuje, że znajdziesz „każdy kanał”: prawa do emisji są sprzedawane osobno dla każdego kraju i dostawcy.",
          ],
        },
        {
          h: "Co oznaczają oznaczenia",
          ul: [
            "Bez rejestracji / Bezpłatna rejestracja: czy do oglądania na żywo potrzebne jest konto.",
            "Ograniczenie regionalne: transmisję zwykle można oglądać tylko w danym kraju. W niektórych krajach potrzebna jest też licencja TV (np. do telewizji na żywo w Wielkiej Brytanii).",
            "Dostępne na całym świecie: dostawca kieruje transmisję do międzynarodowej widowni.",
          ],
        },
        {
          h: "Dokładność",
          p: "Dostawcy często zmieniają swoje strony i warunki dostępu. Jeśli link nie działa lub warunki się zmieniły, daj nam znać, żebyśmy mogli to poprawić.",
        },
      ],
    },
  },

  ru: {
    siteName: "Legal TV",
    metaTitle: "Legal TV – бесплатные официальные каналы в прямом эфире",
    metaDescription: "Легальные бесплатные телеканалы в прямом эфире по странам со ссылкой на официальный источник.",
    nav: { countries: "Страны", search: "Поиск", about: "О сайте", language: "Язык" },
    home: {
      h1: "Легальное бесплатное ТВ в прямом эфире – по странам",
      lead: "{total} официальных источников в {groups} группах. Каждый канал ведёт на официальный сайт вещателя или сервиса – мы ничего не транслируем и никогда не ссылаемся на неавторизованные трансляции.",
      notice:
        "Некоторые трансляции доступны только в определённой стране, с телевизионной лицензией или после бесплатной регистрации. Мы отмечаем это у каждого канала, но точные условия всегда проверяйте на сайте провайдера.",
      channels: "Каналов: {n}",
    },
    country: { crumb: "Страны", lead: "Легальных бесплатных источников: {n}." },
    search: {
      h1: "Поиск",
      lead: "Ищите по названию канала или фильтруйте по стране и типу.",
      placeholder: "Напр. BBC, ZDF, новости, NHK…",
      allCountries: "Все страны",
      allTypes: "Все типы",
      results: "Найдено: {n}",
      searchAria: "Поиск по названию канала",
      countryAria: "Страна",
      typeAria: "Тип",
    },
    card: { open: "Открыть ↗", openAria: "Открыть {name} на официальном сайте" },
    category: { public: "Общественное вещание", news: "Новостной канал", commercial_free: "Бесплатный коммерческий", fast: "Бесплатная платформа (FAST)" },
    access: { free: "Без регистрации", free_account: "Бесплатная регистрация" },
    geo: { national: "Ограничен по региону", global: "Доступен по всему миру" },
    footer:
      "Этот сайт ничего не транслирует, а лишь ссылается на официальные бесплатные источники каналов. Условия доступа (территория, регистрация, телевизионная лицензия) всегда определяет провайдер.",
    about: {
      title: "О сайте",
      metaTitle: "О сайте – Legal TV",
      sections: [
        {
          h: "Что делает этот сайт?",
          p: "Он собирает телеканалы и бесплатные сервисы, прямой эфир которых сам вещатель предлагает бесплатно, и направляет вас на их официальный сайт. Мы ничего не транслируем и не встраиваем.",
        },
        {
          h: "Чего он не делает",
          ul: [
            "Не собирает и не публикует «IPTV-списки», потому что большинство из них – неавторизованные трансляции.",
            "Не обходит региональные ограничения (это не сайт рекомендаций VPN).",
            "Не обещает, что представлены «все каналы»: права на вещание продаются отдельно для каждой страны и провайдера.",
          ],
        },
        {
          h: "Что означают пометки",
          ul: [
            "Без регистрации / Бесплатная регистрация: нужна ли учётная запись для просмотра прямого эфира.",
            "Ограничен по региону: трансляцию обычно можно смотреть только в указанной стране. В некоторых странах дополнительно нужна телевизионная лицензия (например, для прямого эфира в Великобритании).",
            "Доступен по всему миру: провайдер предназначает трансляцию для международной аудитории.",
          ],
        },
        {
          h: "Точность",
          p: "Провайдеры часто меняют свои сайты и условия доступа. Если ссылка не работает или условия изменились, сообщите нам, чтобы мы это исправили.",
        },
      ],
    },
  },
};
