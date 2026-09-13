# servier-slide-ds

A React component library for building client-ready, consulting-style slides in the Servier
brand: title/cover slides, section dividers, agendas, bullet/text content, quotes, KPI and
percentage rings, the Servier "camembert stylisé" segmented ring chart, real bar/line charts,
timelines, benchmarking tables, comparison cards, 2x2/SWOT matrices, process flows, org charts,
funnels, case studies, and team slides.

Extracted from `220926_Servier_charte_graphique_FR.pdf` (brand charter), `220902_Servier_template.potx`
and `PPT template.odp` (PowerPoint templates) — see `../design-tokens.json` in the parent folder
for the raw extracted tokens this library is built on.

## Usage

```tsx
import "servier-slide-ds/dist/styles.css";
import { TitleSlideCover, BulletContentSlide } from "servier-slide-ds";

<TitleSlideCover title="Q3 Business Review" accent="2026" date="13/09/2026" />

<BulletContentSlide
  eyebrow="Key findings"
  title="Market entry readiness"
  items={[{ lead: "Regulatory pathway is clear", body: "..." }]}
  pageNumber={5}
  footerTitle="Q3 Business Review"
/>
```

Every slide renders at a fixed 1280x720 (16:9) canvas via the shared `SlideFrame` primitive.
Colors, type sizes and the "sourire" ring motif are all CSS custom properties defined in
`src/tokens/colors.css` and `src/tokens/typography.css` — override them to re-theme.

## Develop

```
npm install
npm run build   # esbuild bundle + type declarations -> dist/
npm test        # renders every slide component server-side, fails on any runtime error
```

## Known approximations

- The Servier wordmark/logo (`Logo` primitive) is a styled-text stand-in, not the real brand
  artwork — swap in the official SVG lockup when available.
- Typeface is "Century Gothic" with a Poppins/system fallback stack; no font files are bundled.
- Pictograms (`Icon`) are simplified line-icon approximations of the brand's pictogram library,
  not traced from the original vector source.
