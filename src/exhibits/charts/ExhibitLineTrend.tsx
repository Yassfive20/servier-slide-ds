import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Direct end-labels replace legend-hunting. */
export function ExhibitLineTrend() {
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
        Lille inventory accuracy has drifted eight points since April
      </div>

      <div style={{ position: "absolute", left: 100, top: 168, display: "flex", gap: 28,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-tick)",
                     color: "var(--sv-ex-ink-2)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s1,#f55b41)" }} />Lyon</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s2,#47bfd9)" }} />Rouen</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s3,#9c7dcc)" }} />Lille</span>
      </div>
      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 395 }}>
        <svg viewBox="0 0 820 300" width={1080} height={395} role="img"
             aria-label="Lille inventory accuracy has drifted eight points since April">

<line x1="46" y1="228.7" x2="748" y2="228.7" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="36.0" y="232.7" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>80</text>
<line x1="46" y1="175.5" x2="748" y2="175.5" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="36.0" y="179.5" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>85</text>
<line x1="46" y1="122.4" x2="748" y2="122.4" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="36.0" y="126.4" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>90</text>
<line x1="46" y1="69.2" x2="748" y2="69.2" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="36.0" y="73.2" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>95</text>
<line x1="46" y1="16.0" x2="748" y2="16.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="36.0" y="20.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>100</text>
<text x="46.0" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Apr</text>
<text x="133.8" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>May</text>
<text x="221.5" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Jun</text>
<text x="309.2" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Jul</text>
<text x="397.0" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Aug</text>
<text x="484.8" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Sep</text>
<text x="572.5" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Oct</text>
<text x="660.2" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Nov</text>
<text x="748.0" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Dec</text>
<path d="M46.0,143.6 L133.8,133.0 L221.5,111.7 L309.2,101.1 L397.0,79.8 L484.8,69.2 L572.5,58.5 L660.2,47.9 L748.0,37.3" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
<circle cx="748.0" cy="37.3" r="4.5" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="760.0" y="41.3" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>Lyon 98</text>
<path d="M46.0,186.2 L133.8,175.5 L221.5,175.5 L309.2,154.3 L397.0,143.6 L484.8,143.6 L572.5,122.4 L660.2,111.7 L748.0,101.1" fill="none" stroke="var(--dv-s2,#47bfd9)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
<circle cx="748.0" cy="101.1" r="4.5" fill="var(--dv-s2,#47bfd9)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="760.0" y="105.1" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>Rouen 92</text>
<path d="M46.0,111.7 L133.8,122.4 L221.5,143.6 L309.2,164.9 L397.0,175.5 L484.8,186.2 L572.5,186.2 L660.2,196.8 L748.0,207.5" fill="none" stroke="var(--dv-s3,#9c7dcc)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
<circle cx="748.0" cy="207.5" r="4.5" fill="var(--dv-s3,#9c7dcc)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="760.0" y="211.5" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>Lille 82</text>
<line x1="46" y1="250" x2="748" y2="250" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="36.0" y="18.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>%</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: showing change over time. One y-axis only — never a second scale on the right. Two measures of different magnitude become two charts.
      </div>
    </SlideFrame>
  );
}
