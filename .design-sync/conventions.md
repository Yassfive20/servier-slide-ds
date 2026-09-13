## Servier slide design system — build conventions

This library builds consulting-style slide decks in the Servier pharma brand. Every top-level
component you'll compose with is a **full 16:9 slide** (fixed 1280×720 canvas, e.g.
`TitleSlideCover`, `BulletContentSlide`, `SegmentedRingChartSlide`, `TwoByTwoMatrixSlide`) — pass
it content props, never a width/height or a wrapper: it sizes itself. A smaller set of shared
primitives (`Icon`, `Panel`, `Bar`, `Callout`, `SlideHeading`, the `Smile*` ring shapes) compose
*inside* slides if you're extending one, not typically used standalone in a design.

### Setup — one CSS import, no provider
There is **no theme provider and no context wrapper**. Import the library's stylesheet once at
your app root:
```
import "servier-slide-ds/dist/styles.css";
```
This is not optional: every color in the library is a bare `var(--sv-*)` reference with **no
fallback value**, so skipping the import silently renders every slide colorless (unset custom
properties resolve to nothing, not a default). The stylesheet also carries the real Poppins
webfont (embedded, no network fetch needed) — Servier's actual corporate/digital typeface.

### Styling idiom — CSS custom properties, passed as prop values
This system has no utility classes and no styled-theme object. Color customization on a
component (e.g. `PercentageRing`'s `color`/`track`, `SegmentedRing`'s per-segment `color`,
`ComparisonSlide`'s `highlighted` card) takes a **CSS variable string**, not a hex code or a
Tailwind-style class:
```tsx
<PercentageRing value={72} color="var(--sv-orange)" track="var(--sv-bleu-clair)" />
```
Real token names (all defined in the shipped stylesheet — use these, don't invent hex values):
- **Brand**: `--sv-bleu-nuit` (primary navy), `--sv-orange` (primary accent), `--sv-blanc`,
  `--sv-bleu-descendu`, `--sv-bleu-clair`
- **Secondary**: `--sv-violet`, `--sv-jaune`, `--sv-cyan`, `--sv-vert`
- **Neutrals**: `--sv-beige`, `--sv-grey-light`, `--sv-taupe`, `--sv-grey`, `--sv-footer-bg`
- **Chart series** (use in this order for multi-series charts/segments): `--sv-chart-1` through
  `--sv-chart-6`, plus `--sv-chart-track` for an unfilled ring/gauge track
- **Therapeutic-area colors**: `--sv-ta-oncologie`, `--sv-ta-cardio`, `--sv-ta-neurologie`,
  `--sv-ta-immuno`
- **Type**: `--sv-font-heading` / `--sv-font-body` (both Poppins), `--sv-size-title`,
  `--sv-size-body`, `--sv-size-small`, `--sv-size-stat`

The brand's signature graphic device is the **"sourire" (smile) ring** — a partial donut/arc,
never a straight line or a full undecorated circle. It recurs everywhere: as a decorative corner
swoosh (`SmileQuarter`/`SmileHalf`), a step-number badge (`SmileBadge`), the closing mark
(`SmileSymbol`), and as the shape of every percentage/segmented chart (`PercentageRing`,
`SegmentedRing`). When you need a KPI, stat, or proportion visualized and no existing slide fits,
reach for one of those ring primitives rather than a plain bar or a generic donut — a full circle
or a straight progress bar reads as off-brand here.

### Where the truth lives
Read the bound `styles.css` (and its `@import` chain: `tokens/colors.css`,
`tokens/typography.css`, `fonts/poppins.css`) before styling anything — it's the complete,
authoritative token list. Each component's own `.prompt.md` documents its exact props with a
realistic usage example; trust that over guessing a prop shape.

### A real composed example
```tsx
import "servier-slide-ds/dist/styles.css";
import { BulletContentSlide, SegmentedRingChartSlide } from "servier-slide-ds";

<BulletContentSlide
  eyebrow="Market context"
  title="Three access barriers before launch"
  items={[
    { lead: "Fragmented reimbursement pathways", body: "Coverage varies by region and payer type." },
    { lead: "Narrow pricing corridor", body: "Competitor entry expected within 9 months." },
  ]}
  pageNumber={4}
  footerTitle="Q3 Market Access Review"
/>

<SegmentedRingChartSlide
  eyebrow="Portfolio"
  title="Pipeline split by therapeutic area"
  segments={[
    { label: "Oncology", value: 38, color: "var(--sv-chart-1)" },
    { label: "Neurology", value: 24, color: "var(--sv-chart-2)" },
    { label: "Cardiometabolic", value: 21, color: "var(--sv-chart-3)" },
    { label: "Immunology", value: 17, color: "var(--sv-chart-4)" },
  ]}
/>
```
