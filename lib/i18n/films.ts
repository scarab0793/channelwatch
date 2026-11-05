import type { Lang } from "./index";

export type FilmsText = {
  nav: string;
  metaTitle: string;
  h1: string;
  lead: string;
  open: string;
  free: { h: string; p: string };
  warn: { h: string; p: string; until: string };
  status: { pd_uk: string; cc: string; us_only: string };
  notice: string;
};

export const filmsText: Record<Lang, FilmsText> = {
  en: {
    nav: "Free films",
    metaTitle: "Free films – public domain & Creative Commons",
    h1: "Free films: public domain and Creative Commons",
    lead: "Public domain depends on the country. This page uses UK/EU rules: a film is free only when the director, screenplay author, dialogue author and composer all died more than 70 years ago – or when its licence explicitly allows sharing.",
    open: "Watch ↗",
    free: { h: "Free to watch", p: "Public domain in the UK/EU or released under a Creative Commons licence." },
    warn: {
      h: "Often called “public domain” – but not in the UK/EU",
      p: "These films are public domain in the United States only. In the UK and EU they are still protected, so we do not link to copies.",
      until: "Protected in the UK at least until {year}",
    },
    status: { pd_uk: "Public domain (UK/EU)", cc: "Creative Commons (credit required)", us_only: "US public domain only" },
    notice: "This is general information, not legal advice. Check the licence of each copy – hosting sites also contain uploads that are not free. No series are listed yet.",
  },
  de: {
    nav: "Freie Filme",
    metaTitle: "Freie Filme – gemeinfrei & Creative Commons",
    h1: "Freie Filme: gemeinfrei und Creative Commons",
    lead: "Gemeinfreiheit hängt vom Land ab. Diese Seite folgt dem UK/EU-Recht: Ein Film ist nur frei, wenn Regisseur, Drehbuchautor, Dialogautor und Komponist vor mehr als 70 Jahren gestorben sind – oder wenn die Lizenz das Teilen ausdrücklich erlaubt.",
    open: "Ansehen ↗",
    free: { h: "Frei ansehbar", p: "Im UK/EU gemeinfrei oder unter einer Creative-Commons-Lizenz veröffentlicht." },
    warn: {
      h: "Oft „gemeinfrei“ genannt – aber nicht im UK/EU",
      p: "Diese Filme sind nur in den USA gemeinfrei. Im UK und in der EU sind sie weiterhin geschützt, daher verlinken wir keine Kopien.",
      until: "Im UK mindestens bis {year} geschützt",
    },
    status: { pd_uk: "Gemeinfrei (UK/EU)", cc: "Creative Commons (Namensnennung)", us_only: "Nur in den USA gemeinfrei" },
    notice: "Dies ist eine allgemeine Information, keine Rechtsberatung. Prüfen Sie die Lizenz jeder Kopie – auf Hosting-Seiten gibt es auch nicht freie Uploads. Serien sind noch nicht aufgeführt.",
  },
  fr: {
    nav: "Films libres",
    metaTitle: "Films libres – domaine public & Creative Commons",
    h1: "Films libres : domaine public et Creative Commons",
    lead: "Le domaine public dépend du pays. Cette page suit le droit britannique/européen : un film est libre uniquement si le réalisateur, l'auteur du scénario, l'auteur des dialogues et le compositeur sont tous morts depuis plus de 70 ans – ou si sa licence autorise explicitement le partage.",
    open: "Regarder ↗",
    free: { h: "À regarder librement", p: "Dans le domaine public au Royaume-Uni/UE ou publiés sous licence Creative Commons." },
    warn: {
      h: "Souvent dits « du domaine public » – mais pas au Royaume-Uni/UE",
      p: "Ces films ne sont dans le domaine public qu'aux États-Unis. Au Royaume-Uni et dans l'UE ils sont encore protégés ; nous ne renvoyons donc pas vers des copies.",
      until: "Protégé au Royaume-Uni au moins jusqu'en {year}",
    },
    status: { pd_uk: "Domaine public (UK/UE)", cc: "Creative Commons (mention requise)", us_only: "Domaine public aux États-Unis seulement" },
    notice: "Information générale, pas un conseil juridique. Vérifiez la licence de chaque copie – les sites d'hébergement contiennent aussi des mises en ligne non libres. Aucune série n'est encore listée.",
  },
  es: {
    nav: "Películas libres",
    metaTitle: "Películas libres – dominio público y Creative Commons",
    h1: "Películas libres: dominio público y Creative Commons",
    lead: "El dominio público depende del país. Esta página sigue las normas del Reino Unido/UE: una película es libre solo si el director, el guionista, el autor de los diálogos y el compositor murieron hace más de 70 años – o si su licencia permite expresamente compartirla.",
    open: "Ver ↗",
    free: { h: "De libre visionado", p: "En dominio público en el Reino Unido/UE o publicadas con licencia Creative Commons." },
    warn: {
      h: "A menudo llamadas «de dominio público», pero no en el Reino Unido/UE",
      p: "Estas películas son de dominio público solo en Estados Unidos. En el Reino Unido y la UE siguen protegidas, por eso no enlazamos copias.",
      until: "Protegida en el Reino Unido al menos hasta {year}",
    },
    status: { pd_uk: "Dominio público (UK/UE)", cc: "Creative Commons (con atribución)", us_only: "Dominio público solo en EE. UU." },
    notice: "Información general, no asesoramiento jurídico. Compruebe la licencia de cada copia: los sitios de alojamiento también contienen subidas que no son libres. Aún no hay series.",
  },
  hu: {
    nav: "Szabad filmek",
    metaTitle: "Szabad filmek – közkincs és Creative Commons",
    h1: "Szabad filmek: közkincs és Creative Commons",
    lead: "A közkincs országonként eltér. Ez az oldal a brit/uniós szabályt követi: egy film csak akkor szabad, ha a rendező, a forgatókönyvíró, a párbeszédek szerzője és a zeneszerző is több mint 70 éve halt meg – vagy ha a licenc kifejezetten engedi a megosztást.",
    open: "Megnézem ↗",
    free: { h: "Szabadon nézhető", p: "Az Egyesült Királyságban/EU-ban közkincs, vagy Creative Commons licenccel jelent meg." },
    warn: {
      h: "Gyakran „közkincsnek” hívják – de az Egyesült Királyságban/EU-ban nem az",
      p: "Ezek a filmek csak az USA-ban közkincsek. Az Egyesült Királyságban és az EU-ban még védettek, ezért nem linkelünk másolatokat.",
      until: "Az Egyesült Királyságban legalább {year}-ig védett",
    },
    status: { pd_uk: "Közkincs (UK/EU)", cc: "Creative Commons (névmegjelöléssel)", us_only: "Csak az USA-ban közkincs" },
    notice: "Általános tájékoztatás, nem jogi tanács. Ellenőrizze minden másolat licencét – a tárhelyoldalakon nem szabad feltöltések is vannak. Sorozatok még nincsenek.",
  },
  pl: {
    nav: "Wolne filmy",
    metaTitle: "Wolne filmy – domena publiczna i Creative Commons",
    h1: "Wolne filmy: domena publiczna i Creative Commons",
    lead: "Domena publiczna zależy od kraju. Ta strona stosuje przepisy brytyjskie/unijne: film jest wolny tylko wtedy, gdy reżyser, autor scenariusza, autor dialogów i kompozytor zmarli ponad 70 lat temu – albo gdy licencja wprost zezwala na udostępnianie.",
    open: "Oglądaj ↗",
    free: { h: "Do swobodnego oglądania", p: "W domenie publicznej w Wielkiej Brytanii/UE lub wydane na licencji Creative Commons." },
    warn: {
      h: "Często nazywane „domeną publiczną” – ale nie w Wielkiej Brytanii/UE",
      p: "Te filmy są w domenie publicznej tylko w USA. W Wielkiej Brytanii i UE są nadal chronione, dlatego nie linkujemy kopii.",
      until: "Chroniony w Wielkiej Brytanii co najmniej do {year}",
    },
    status: { pd_uk: "Domena publiczna (UK/UE)", cc: "Creative Commons (z uznaniem autorstwa)", us_only: "Domena publiczna tylko w USA" },
    notice: "To ogólna informacja, nie porada prawna. Sprawdź licencję każdej kopii – serwisy hostingowe zawierają też nielegalne wgrania. Seriali jeszcze nie ma.",
  },
  ru: {
    nav: "Свободные фильмы",
    metaTitle: "Свободные фильмы – общественное достояние и Creative Commons",
    h1: "Свободные фильмы: общественное достояние и Creative Commons",
    lead: "Общественное достояние зависит от страны. Здесь действуют правила Великобритании/ЕС: фильм свободен, только если режиссёр, автор сценария, автор диалогов и композитор умерли более 70 лет назад – или если лицензия прямо разрешает распространение.",
    open: "Смотреть ↗",
    free: { h: "Можно смотреть свободно", p: "Общественное достояние в Великобритании/ЕС или лицензия Creative Commons." },
    warn: {
      h: "Часто называют «общественным достоянием» – но не в Великобритании/ЕС",
      p: "Эти фильмы в общественном достоянии только в США. В Великобритании и ЕС они ещё защищены, поэтому мы не даём ссылок на копии.",
      until: "Защищён в Великобритании минимум до {year}",
    },
    status: { pd_uk: "Общественное достояние (UK/ЕС)", cc: "Creative Commons (с указанием автора)", us_only: "Общественное достояние только в США" },
    notice: "Это общая информация, а не юридическая консультация. Проверяйте лицензию каждой копии – на хостингах есть и несвободные загрузки. Сериалов пока нет.",
  },
};
