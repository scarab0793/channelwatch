import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legális TV – ingyenes, hivatalos élő csatornák",
  description:
    "Ellenőrzött, legális és ingyenes élő TV-csatornák országok szerint, mindig a hivatalos forrásra mutató linkkel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>
        <header className="site-header">
          <div className="wrap header-inner">
            <Link href="/" className="brand">
              <span className="brand-mark">▶</span> Legális TV
            </Link>
            <nav>
              <Link href="/">Országok</Link>
              <Link href="/search">Keresés</Link>
              <Link href="/about">Tudnivalók</Link>
            </nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            Az oldal nem közvetít adást, csak a csatornák hivatalos, ingyenes forrásaira linkel. A hozzáférés
            feltételeit (terület, regisztráció, TV-licenc) mindig az adott szolgáltató határozza meg.
          </div>
        </footer>
      </body>
    </html>
  );
}
