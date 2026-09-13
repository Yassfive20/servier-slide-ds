import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Two series is the sweet spot for grouped columns. */
export function ExhibitColumnGrouped() {
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
        Target state cuts touch time in every process area
      </div>

      <div style={{ position: "absolute", left: 100, top: 168, display: "flex", gap: 28,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-tick)",
                     color: "var(--sv-ex-ink-2)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s1,#f55b41)" }} />As-is</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s2,#47bfd9)" }} />To-be</span>
      </div>
      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 395 }}>
        <svg viewBox="0 0 820 300" width={1080} height={395} role="img"
             aria-label="Target state cuts touch time in every process area">

<line x1="52" y1="250.0" x2="800" y2="250.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="42.0" y="254.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>0</text>
<line x1="52" y1="190.5" x2="800" y2="190.5" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="42.0" y="194.5" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>40</text>
<line x1="52" y1="131.0" x2="800" y2="131.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="42.0" y="135.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>80</text>
<line x1="52" y1="71.5" x2="800" y2="71.5" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="42.0" y="75.5" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>120</text>
<line x1="52" y1="12.0" x2="800" y2="12.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="42.0" y="16.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>160</text>
<path d="M101.8,250.0 V191.5 A4,4 0 0 1 105.8,187.5 H121.8 A4,4 0 0 1 125.8,191.5 V250.0 Z" fill="var(--dv-s1,#f55b41)"/>
<text x="113.8" y="180.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>42</text>
<path d="M127.8,250.0 V207.9 A4,4 0 0 1 131.8,203.9 H147.8 A4,4 0 0 1 151.8,207.9 V250.0 Z" fill="var(--dv-s2,#47bfd9)"/>
<text x="139.8" y="196.9" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>31</text>
<text x="126.8" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Receiving</text>
<path d="M251.4,250.0 V152.8 A4,4 0 0 1 255.4,148.8 H271.4 A4,4 0 0 1 275.4,152.8 V250.0 Z" fill="var(--dv-s1,#f55b41)"/>
<text x="263.4" y="141.8" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>68</text>
<path d="M277.4,250.0 V196.0 A4,4 0 0 1 281.4,192.0 H297.4 A4,4 0 0 1 301.4,196.0 V250.0 Z" fill="var(--dv-s2,#47bfd9)"/>
<text x="289.4" y="185.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>39</text>
<text x="276.4" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Put-away</text>
<path d="M401.0,250.0 V23.4 A4,4 0 0 1 405.0,19.4 H421.0 A4,4 0 0 1 425.0,23.4 V250.0 Z" fill="var(--dv-s1,#f55b41)"/>
<text x="413.0" y="12.4" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>155</text>
<path d="M427.0,250.0 V108.2 A4,4 0 0 1 431.0,104.2 H447.0 A4,4 0 0 1 451.0,108.2 V250.0 Z" fill="var(--dv-s2,#47bfd9)"/>
<text x="439.0" y="97.2" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>98</text>
<text x="426.0" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Picking</text>
<path d="M550.6,250.0 V184.1 A4,4 0 0 1 554.6,180.1 H570.6 A4,4 0 0 1 574.6,184.1 V250.0 Z" fill="var(--dv-s1,#f55b41)"/>
<text x="562.6" y="173.1" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>47</text>
<path d="M576.6,250.0 V203.4 A4,4 0 0 1 580.6,199.4 H596.6 A4,4 0 0 1 600.6,203.4 V250.0 Z" fill="var(--dv-s2,#47bfd9)"/>
<text x="588.6" y="192.4" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>34</text>
<text x="575.6" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Packing</text>
<path d="M700.2,250.0 V197.5 A4,4 0 0 1 704.2,193.5 H720.2 A4,4 0 0 1 724.2,197.5 V250.0 Z" fill="var(--dv-s1,#f55b41)"/>
<text x="712.2" y="186.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>38</text>
<path d="M726.2,250.0 V210.9 A4,4 0 0 1 730.2,206.9 H746.2 A4,4 0 0 1 750.2,210.9 V250.0 Z" fill="var(--dv-s2,#47bfd9)"/>
<text x="738.2" y="199.9" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>29</text>
<text x="725.2" y="270.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Shipping</text>
<line x1="52" y1="250" x2="800" y2="250" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="42.0" y="16.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>min</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: the same measure is compared across categories for two or three scenarios. A 2px gap separates adjacent bars — never a stroke.
      </div>
    </SlideFrame>
  );
}
