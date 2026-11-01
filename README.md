# Channelwatch

Static, six-language dashboard on illegal migration to the UK, built from official data (Home Office, MoJ, NAO, Migration Observatory): small boat arrivals, asylum claims, support and costs, crime statistics and court-verified cases, with sources.

| Language | Page |
| --- | --- |
| English | [`index.html`](index.html) |
| Deutsch | [`de/index.html`](de/index.html) |
| Français | [`fr/index.html`](fr/index.html) |
| Español | [`es/index.html`](es/index.html) |
| Magyar (Csatornafigyelő) | [`hu/index.html`](hu/index.html) |
| Polski | [`pl/index.html`](pl/index.html) |

Last data update: 1 November 2026 (small boat arrivals to 30 October; quarterly Home Office figures to June 2026, next release 26 November 2026).

## Structure

Each page is one self-contained HTML file with no build step: styles, the arrivals chart and the Monitor / Analysis tabs are inline, and every page has a language switcher under the title. Only the web fonts load from Google Fonts. GitHub Pages serves the root of `main`.

All six pages share the same structure and the same links. When updating figures, change them in every language:

- the "Key figures" tiles, the `d` array in the chart script (last bar) and the chart caption,
- the news feed, local news table and the relevant analysis text,
- the update date in the header.

## Notes

- Daily small boat figures are provisional and may be revised.
- The "Verified cases" section lists only cases with a court verdict reported by a reputable outlet.
- Number formats follow each language (for example 21,869 / 21.869 / 21 869) and the chart axis labels are localised in the chart script.
