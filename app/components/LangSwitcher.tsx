"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGS, LANG_LABEL, type Lang } from "@/lib/i18n";

export default function LangSwitcher({ current, label }: { current: Lang; label: string }) {
  const pathname = usePathname() || `/${current}/`;
  const segments = pathname.split("/"); // ["", "en", "country", "GB", ""]

  return (
    <nav className="lang-switcher" aria-label={label}>
      {LANGS.map((l) => {
        const next = [...segments];
        next[1] = l;
        const href = next.join("/") || `/${l}/`;
        return (
          <Link
            key={l}
            href={href}
            hrefLang={l}
            lang={l}
            title={LANG_LABEL[l]}
            aria-current={l === current ? "true" : undefined}
            className={l === current ? "active" : undefined}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
