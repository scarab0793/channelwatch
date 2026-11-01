# Channelwatch / Csatornafigyelő

Static dashboard on illegal migration to the UK, built from official data (Home Office, MoJ, NAO, Migration Observatory): small boat arrivals, asylum claims, support and costs, crime statistics and court-verified cases, with sources.

Az Egyesült Királyság illegális migrációjának statikus dashboardja hivatalos adatokból: csónakos érkezések, menedékkérelmek, ellátások és költségek, bűnözési statisztikák és bíróság által lezárt ügyek, forrásokkal.

| Language | File |
| --- | --- |
| English | [`index.html`](index.html) |
| Magyar | [`hu/index.html`](hu/index.html) |

Last data update: 1 November 2026 (small boat arrivals to 30 October).

## Structure

Each page is one self-contained HTML file with no build step: styles, the arrivals chart and the Monitor / Analysis tabs are inline. Only the web fonts load from Google Fonts. To update the figures, edit the numbers in the "Key figures" block, the `d` array in the chart script, and the news feed, then push; GitHub Pages serves the root of `main`.

## Notes

- Daily small boat figures are provisional and may be revised.
- The "Verified cases" section lists only cases with a court verdict reported by a reputable outlet.
