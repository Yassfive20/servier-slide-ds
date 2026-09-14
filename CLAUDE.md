# servier-slide-ds

React/TSX slide component library in the Servier brand, used as a **repo-backed design system for
Claude Design**. Two layers:

- `src/slides/` — 32 full-slide components (cover, agenda, bullets, rings, tables…) with props.
- `src/exhibits/` — 45 static chart/diagram **pattern cards** (`charts/`, `diagrams/`), the
  `ExhibitIcon` pictogram set (`icons/`), and 5 documentation/routing cards (`docs/`).

## Pipeline

```
src/**/*.tsx  →  npm run build (esbuild + tsc → dist/)  →  converter (.ds-sync/, gitignored)
             →  ds-bundle/ (gitignored HTML cards)  →  /design-sync  →  Claude Design project
```

Converter run and browser setup are in `.design-sync/NOTES.md`. **Never hand-edit `ds-bundle/`** —
it is regenerated from source every sync; anything not in `src/` is wiped.

Every component that renders a slide needs an `overrides` entry in `.design-sync/config.json`
(`{"cardMode":"column","viewport":"1280x720"}`) and a preview in `.design-sync/previews/`, or its
card is captured clipped at 900×700.

## Conventions

- `SlideFrame` owns the canvas (1280×720, footer bar 56px). Content is absolutely positioned
  inside it; a footnote at `bottom: 72` clears the footer.
- No hex in components. Colours are `var(--sv-*)` tokens from `src/tokens/*.css` only.
  Exhibits use `--sv-ex-*` (`src/tokens/exhibits.css`), not `--sv-chart-1..6` (see below).
- Inline styles, named exports, `import React from "react"`.
- JSX text: escape `>`, `<`, `{`, `}` — a bare `>` in slide copy breaks the build.
- Font sizes inside exhibit SVGs are absolute px on purpose: the geometry was computed against
  them and the SVG scales as a whole. Do not "fix" them to tokens.
- Exhibit sample data is illustrative and must never reach a real slide.

## Palette rules (validated, do not re-derive)

- `--sv-chart-1..6` fails colour-blindness/legibility: chart-3 is `--sv-text`, chart-5 (jaune) is
  1.61:1 on white, chart-5/6 fail normal-vision separation. Left untouched for existing slides.
- Exhibits use `--sv-ex-series-1..4` = orange · cyan · violet · vert, in that order.
  **Four is the ceiling** — a fifth series folds into "Other", facets, or splits into two exhibits.
  Never generate a new hue.
- Cyan and vert are below 3:1 on white; allowed only because every exhibit direct-labels values.
- **Therapeutic-area collision:** the four series colours are exactly the four `--sv-ta-*`
  colours. An exhibit about therapeutic areas uses `--sv-ta-*` and abandons the series order.
  Never both in one deck.
- Status (`--sv-ex-good/-warning/-serious/-critical`) always ships with an icon and a label.
- Sequential ramp `--sv-ex-seq-100..600`; ordinal scales start no lighter than 300.

## Verify on every change

```
npm run build && npm test && node test/smoke-exhibits.mjs
```

Then render and look — the smoke test catches runtime errors, not layout. `test/render-gallery.mjs`
writes an HTML sheet; screenshot with headless Chrome (path in `.design-sync/NOTES.md`).
