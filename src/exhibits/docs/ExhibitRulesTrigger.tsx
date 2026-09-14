import React from "react";
import { DocFrame } from "./DocFrame";

const RULES = [
  { n: "1", lead: "A quantitative claim is an exhibit, not bullets.",
    body: "If a sentence contains a number, comparison, trend, share, sequence or date range, that sentence is the exhibit's title and the slide carries a chart or diagram." },
  { n: "2", lead: "Every exhibit title is an assertion.",
    body: "“Put-away travel is a third of touch time” — never “Touch time analysis”. The title states what the reader should conclude; the exhibit proves it." },
  { n: "3", lead: "Physical things are drawn, not named in a box.",
    body: "Warehouses, equipment, vehicles, people, dock and yard activity use the ExhibitIcon pictograms. Abstract subjects — governance, dependencies, decision logic, system landscapes — stay as boxes." },
  { n: "4", lead: "Cards are patterns, not templates.",
    body: "The sample data in every exhibit card is illustrative. Take the form — marks, spacing, labelling, palette — and never let a card's numbers or names reach a real slide." },
];

/** When a slide becomes an exhibit — the four rules that decide whether to reach for the exhibit library at all. */
export function ExhibitRulesTrigger() {
  return (
    <DocFrame eyebrow="Exhibit rules · 1 of 5" title="When a slide becomes an exhibit"
              note="Pick the form with the chart picker (charts) or the diagram picker (relationships), then apply the palette rules. Icons only where rule 3 allows.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 48px" }}>
        {RULES.map((r) => (
          <div key={r.n} style={{ display: "flex", gap: 20 }}>
            <div style={{ flex: "0 0 44px", height: 44, borderRadius: 22, background: "var(--sv-orange)",
                          color: "var(--sv-blanc)", fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                          fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {r.n}
            </div>
            <div>
              <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 20, lineHeight: 1.25, marginBottom: 6 }}>{r.lead}</div>
              <div style={{ color: "var(--sv-ex-ink-2)" }}>{r.body}</div>
            </div>
          </div>
        ))}
      </div>
    </DocFrame>
  );
}
