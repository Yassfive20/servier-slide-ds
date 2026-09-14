import React from "react";
import { DocFrame, code } from "./DocFrame";

const SERIES = [
  ["--sv-ex-series-1", "orange"], ["--sv-ex-series-2", "cyan"], ["--sv-ex-series-3", "violet"], ["--sv-ex-series-4", "vert"],
];
const STATUS = [
  ["--sv-ex-good", "good"], ["--sv-ex-warning", "warning"], ["--sv-ex-serious", "serious"], ["--sv-ex-critical", "critical"],
];
const SEQ = ["100", "200", "300", "400", "500", "600"];

const h: React.CSSProperties = { fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 18, marginBottom: 8 };
const p: React.CSSProperties = { color: "var(--sv-ex-ink-2)", fontSize: "var(--sv-size-small)", lineHeight: 1.4, marginTop: 8 };
const swatchRow: React.CSSProperties = { display: "flex", gap: 6 };

function Swatch({ v, label }: { v: string; label: string }) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ height: 36, borderRadius: 4, background: `var(${v})` }} />
      <div style={{ ...code, fontSize: 11, marginTop: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</div>
    </div>
  );
}

/** Palette rules — the validated four-slot series order, the ceiling, the therapeutic-area collision, status and sequential ramps. */
export function ExhibitRulesPalette() {
  return (
    <DocFrame eyebrow="Exhibit rules · 4 of 5" title="Palette: four series, and why that is the ceiling"
              note="Do not use --sv-chart-1..6 in exhibits: chart-3 is the text colour, chart-5 (jaune) is invisible projected, chart-5/6 fail normal-vision separation. Never generate a new hue.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={h}>Series — use in this order</div>
          <div style={swatchRow}>{SERIES.map(([v, l]) => <Swatch key={v} v={v} label={l} />)}</div>
          <div style={p}>
            <b>Four is the ceiling.</b> A fifth series folds into “Other”, facets into small multiples, or splits into two exhibits.
          </div>
          <div style={p}>
            <b>Relief rule.</b> Cyan and vert sit below 3:1 on white. Permitted only because every exhibit direct-labels its values — the labels are the mitigation, not decoration.
          </div>
          <div style={p}>Everything that is context, not subject: <span style={code}>--sv-ex-quiet</span>.</div>
        </div>
        <div>
          <div style={h}>Therapeutic-area collision</div>
          <div style={swatchRow}>
            {[["--sv-ta-oncologie", "oncologie"], ["--sv-ta-cardio", "cardio"], ["--sv-ta-neurologie", "neuro"], ["--sv-ta-immuno", "immuno"]]
              .map(([v, l]) => <Swatch key={v} v={v} label={l} />)}
          </div>
          <div style={p}>
            The four series colours are exactly the four therapeutic-area colours. In a deck using both, orange means “series 1” and “cardiology” at once.
          </div>
          <div style={p}>
            <b>Rule:</b> when an exhibit is about therapeutic areas, colour follows the <span style={code}>--sv-ta-*</span> token and the series order is abandoned. Never both in one deck.
          </div>
        </div>
        <div>
          <div style={h}>Status — always icon + label</div>
          <div style={swatchRow}>{STATUS.map(([v, l]) => <Swatch key={v} v={v} label={l} />)}</div>
          <div style={p}>The brand has no status palette; these sit clear of the series set. Colour alone never carries a status.</div>
          <div style={{ ...h, marginTop: 16 }}>Sequential — one hue, monotonic</div>
          <div style={swatchRow}>{SEQ.map((s) => <Swatch key={s} v={`--sv-ex-seq-${s}`} label={s} />)}</div>
          <div style={p}>Continuous magnitude may use the full range. <b>Ordinal</b> scales (funnel stages, tiers, maturity levels) start no lighter than step 300.</div>
        </div>
      </div>
    </DocFrame>
  );
}
