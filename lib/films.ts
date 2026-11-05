import films from "@/data/films.json";

export type Film = {
  id: string;
  title: string;
  year: number;
  kind: "film" | "series";
  status: "pd_uk" | "cc" | "us_only";
  url?: string;
  source?: string;
  until?: string;
};

export const getFilms = (): Film[] => films as Film[];
