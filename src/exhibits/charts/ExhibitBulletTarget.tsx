import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Replaces the gauge and the traffic-light table. */
export function ExhibitBulletTarget() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        KPI exhibit
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Two of four target-state KPIs are already inside tolerance
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 240 }}>
        <svg viewBox="0 0 820 182" width={1080} height={240} role="img"
             aria-label="Two of four target-state KPIs are already inside tolerance">

<text x="178.0" y="21.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Order lines / hour</text>
<rect x="190" y="6.0" width="546" height="22" fill="var(--sv-ex-quiet,#d0d0d0)" opacity="0.45"/>
<path d="M190.0,10.0 H615.5 A4,4 0 0 1 619.5,14.0 V20.0 A4,4 0 0 1 615.5,24.0 H190.0 Z" fill="var(--dv-s1,#f55b41)"/>
<line x1="663.2" y1="4.0" x2="663.2" y2="30.0" stroke="var(--sv-ex-ink,#24226a)" strokeWidth="2"/>
<text x="746.0" y="21.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>118</text>
<text x="798.0" y="21.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-critical,#b3261e)", fontWeight: 700 }}>▲</text>
<text x="178.0" y="65.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Inventory accuracy %</text>
<rect x="190" y="50.0" width="546" height="22" fill="var(--sv-ex-quiet,#d0d0d0)" opacity="0.45"/>
<path d="M190.0,54.0 H717.8 A4,4 0 0 1 721.8,58.0 V64.0 A4,4 0 0 1 717.8,68.0 H190.0 Z" fill="var(--dv-s1,#f55b41)"/>
<line x1="730.5" y1="48.0" x2="730.5" y2="74.0" stroke="var(--sv-ex-ink,#24226a)" strokeWidth="2"/>
<text x="746.0" y="65.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>97.4</text>
<text x="798.0" y="65.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-critical,#b3261e)", fontWeight: 700 }}>▲</text>
<text x="178.0" y="109.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Dock-to-stock (hrs)</text>
<rect x="190" y="94.0" width="546" height="22" fill="var(--sv-ex-quiet,#d0d0d0)" opacity="0.45"/>
<path d="M190.0,98.0 H468.1 A4,4 0 0 1 472.1,102.0 V108.0 A4,4 0 0 1 468.1,112.0 H190.0 Z" fill="var(--dv-s1,#f55b41)"/>
<line x1="372.0" y1="92.0" x2="372.0" y2="118.0" stroke="var(--sv-ex-ink,#24226a)" strokeWidth="2"/>
<text x="746.0" y="109.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>6.2</text>
<text x="798.0" y="109.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-critical,#b3261e)", fontWeight: 700 }}>▲</text>
<text x="178.0" y="153.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Perfect order rate %</text>
<rect x="190" y="138.0" width="546" height="22" fill="var(--sv-ex-quiet,#d0d0d0)" opacity="0.45"/>
<path d="M190.0,142.0 H682.9 A4,4 0 0 1 686.9,146.0 V152.0 A4,4 0 0 1 682.9,156.0 H190.0 Z" fill="var(--dv-s1,#f55b41)"/>
<line x1="708.7" y1="136.0" x2="708.7" y2="162.0" stroke="var(--sv-ex-ink,#24226a)" strokeWidth="2"/>
<text x="746.0" y="153.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>91</text>
<text x="798.0" y="153.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-critical,#b3261e)", fontWeight: 700 }}>▲</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: reporting a handful of measures against thresholds. Status colours are reserved — they never double as series colours.
      </div>
    </SlideFrame>
  );
}
