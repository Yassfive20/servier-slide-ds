import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Horizontal, because site names are long and horizontal bars give labels room to breathe. */
export function ExhibitStacked100() {
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
        Fit-to-standard rate varies by 34 points across the four sites
      </div>

      <div style={{ position: "absolute", left: 100, top: 168, display: "flex", gap: 28,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-tick)",
                     color: "var(--sv-ex-ink-2)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s1,#f55b41)" }} />Fit to standard</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s2,#47bfd9)" }} />Config</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s3,#9c7dcc)" }} />Enhancement</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s4,#91c461)" }} />Gap</span>
      </div>
      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 250 }}>
        <svg viewBox="0 0 820 190" width={1080} height={250} role="img"
             aria-label="Fit-to-standard rate varies by 34 points across the four sites">

<text x="138.0" y="23.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Site A — Lyon</text>
<rect x="150.0" y="6.0" width="285.0" height="26.0" fill="var(--dv-s1,#f55b41)"/>
<text x="292.5" y="23.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>46</text>
<rect x="437.0" y="6.0" width="166.5" height="26.0" fill="var(--dv-s2,#47bfd9)"/>
<text x="520.3" y="23.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>27</text>
<rect x="605.5" y="6.0" width="110.3" height="26.0" fill="var(--dv-s3,#9c7dcc)"/>
<text x="660.7" y="23.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>18</text>
<path d="M717.8,6.0 H770.0 A4,4 0 0 1 774.0,10.0 V28.0 A4,4 0 0 1 770.0,32.0 H717.8 Z" fill="var(--dv-s4,#91c461)"/>
<text x="745.9" y="23.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>9</text>
<text x="138.0" y="69.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Site B — Rouen</text>
<rect x="150.0" y="52.0" width="191.4" height="26.0" fill="var(--dv-s1,#f55b41)"/>
<text x="245.7" y="69.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>31</text>
<rect x="343.4" y="52.0" width="210.2" height="26.0" fill="var(--dv-s2,#47bfd9)"/>
<text x="448.5" y="69.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>34</text>
<rect x="555.6" y="52.0" width="135.3" height="26.0" fill="var(--dv-s3,#9c7dcc)"/>
<text x="623.2" y="69.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>22</text>
<path d="M692.9,52.0 H770.0 A4,4 0 0 1 774.0,56.0 V74.0 A4,4 0 0 1 770.0,78.0 H692.9 Z" fill="var(--dv-s4,#91c461)"/>
<text x="733.4" y="69.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>13</text>
<text x="138.0" y="115.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Site C — Lille</text>
<rect x="150.0" y="98.0" width="359.9" height="26.0" fill="var(--dv-s1,#f55b41)"/>
<text x="330.0" y="115.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>58</text>
<rect x="511.9" y="98.0" width="129.0" height="26.0" fill="var(--dv-s2,#47bfd9)"/>
<text x="576.4" y="115.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>21</text>
<rect x="643.0" y="98.0" width="85.4" height="26.0" fill="var(--dv-s3,#9c7dcc)"/>
<text x="685.6" y="115.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>14</text>
<path d="M730.3,98.0 H770.0 A4,4 0 0 1 774.0,102.0 V120.0 A4,4 0 0 1 770.0,124.0 H730.3 Z" fill="var(--dv-s4,#91c461)"/>
<text x="752.2" y="115.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>7</text>
<text x="138.0" y="161.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Site D — Nantes</text>
<rect x="150.0" y="144.0" width="147.8" height="26.0" fill="var(--dv-s1,#f55b41)"/>
<text x="223.9" y="161.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>24</text>
<rect x="299.8" y="144.0" width="179.0" height="26.0" fill="var(--dv-s2,#47bfd9)"/>
<text x="389.2" y="161.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>29</text>
<rect x="480.7" y="144.0" width="191.4" height="26.0" fill="var(--dv-s3,#9c7dcc)"/>
<text x="576.4" y="161.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>31</text>
<path d="M674.2,144.0 H770.0 A4,4 0 0 1 774.0,148.0 V166.0 A4,4 0 0 1 770.0,170.0 H674.2 Z" fill="var(--dv-s4,#91c461)"/>
<text x="724.1" y="161.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fontWeight: 700, fill: "var(--sv-ex-ink,#24226a)" }}>16</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: showing composition. Interior segments too narrow for an inline label are left unlabelled — the legend and the table carry them. Never clip text to fit.
      </div>
    </SlideFrame>
  );
}
