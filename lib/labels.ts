export const CATEGORY_LABEL: Record<string, string> = {
  public: "Közszolgálati",
  news: "Hírcsatorna",
  fast: "Ingyenes (FAST) platform",
  commercial_free: "Ingyenes kereskedelmi",
};

export const ACCESS_LABEL: Record<string, string> = {
  free: "Regisztráció nélkül",
  free_account: "Ingyenes regisztrációval",
};

export const GEO_LABEL: Record<string, string> = {
  national: "Területhez kötött",
  global: "Világszerte elérhető",
};

// Az országkódból zászló emoji (a GLOBAL külön kezelve).
export function flag(code: string): string {
  if (code === "GLOBAL") return "🌍";
  return code
    .toUpperCase()
    .split("")
    .map((c) => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join("");
}
