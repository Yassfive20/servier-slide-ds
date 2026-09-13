import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Four headline numbers. */
export function ExhibitKpiRow() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Exhibit
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Warehouse scorecard, quarter to date
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 158 }}>
        <svg viewBox="0 0 820 120" width={1080} height={158} role="img"
             aria-label="Warehouse scorecard, quarter to date">

<rect x="0.0" y="0" width="193.0" height="120" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="18.0" y="30.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>Order lines / hour</text>
<text x="18.0" y="72" style={{ fontFamily: "var(--sv-font-body)", fontSize: "34px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>118</text>
<text x="18.0" y="98.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-good,#1e7d4f)" }}>▲ +14 vs. Q2</text>
<rect x="209.0" y="0" width="193.0" height="120" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="227.0" y="30.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>Inventory accuracy</text>
<text x="227.0" y="72" style={{ fontFamily: "var(--sv-font-body)", fontSize: "34px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>97.4%</text>
<text x="227.0" y="98.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-good,#1e7d4f)" }}>▲ +0.9 pts vs. Q2</text>
<rect x="418.0" y="0" width="193.0" height="120" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="436.0" y="30.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>Dock-to-stock</text>
<text x="436.0" y="72" style={{ fontFamily: "var(--sv-font-body)", fontSize: "34px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>6.2 hrs</text>
<text x="436.0" y="98.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-critical,#b3261e)" }}>▼ +1.1 hrs vs. Q2</text>
<rect x="627.0" y="0" width="193.0" height="120" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="645.0" y="30.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>Perfect order rate</text>
<text x="645.0" y="72" style={{ fontFamily: "var(--sv-font-body)", fontSize: "34px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>91%</text>
<text x="645.0" y="98.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-critical,#b3261e)" }}>▼ −2 pts vs. Q2</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: leading a section with headline figures. Exactly one hero figure per view; a KPI row is the alternative when no single number dominates.
      </div>
    </SlideFrame>
  );
}
