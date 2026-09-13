import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Physical layout beats a process flow when the argument is about distance, congestion or zone sizing — and physical things are drawn, not named in a box. */
export function ExhibitWarehouseFlow() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Operations
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Goods cross six zones between dock and dock
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 417 }}>
        <svg viewBox="0 0 880 340" width={1080} height={417} role="img"
             aria-label="Goods cross six zones between dock and dock">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="0" y="26" width="880" height="212" rx="8" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1.5"/>
<g transform="translate(6.0,0.0) scale(0.9167)" fill="none" stroke="var(--sv-ex-muted,#8f8ea6)" strokeWidth="1.64" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2,10 L12,3.5 L22,10"/>
      <path d="M4,10 V21 H20 V10"/>
      <rect x="9" y="14" width="6" height="7" rx="0.4"/>
      <path d="M7,21 H17"/></g>
<text x="34" y="16" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "650" }}>DC LYON · 18,400 m²</text>
<rect x="0.0" y="52" width="124.4" height="150" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<g transform="translate(21.2,86.0) scale(1.7500)" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="0.86" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="6.5" width="13" height="10" rx="0.8"/>
      <path d="M14.5,16.5 V9.5 H18.5 L22,13.5 V16.5 Z"/>
      <circle cx="6" cy="18.5" r="2.2"/><circle cx="18" cy="18.5" r="2.2"/>
      <path d="M1.5,18.5 H3.8 M8.2,18.5 H15.8"/></g>
<g transform="translate(67.2,86.0) scale(1.7500)" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="0.86" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="15" rx="1"/>
      <path d="M3.5,7.5 H20.5 M3.5,11 H20.5 M3.5,14.5 H20.5"/>
      <path d="M2,18.5 H22"/>
      <path d="M8,21 H16"/></g>
<text x="62" y="76" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Receiving</text>
<text x="62" y="152" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>3 doors · 42</text>
<text x="62" y="165" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>ASN/day</text>
<rect x="168.4" y="52" width="97.8" height="150" rx="6" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(199.3,86.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.86" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="8" rx="0.8"/>
      <path d="M12,3 V11"/>
      <rect x="2" y="12.5" width="20" height="2.8" rx="0.6"/>
      <rect x="2" y="19" width="20" height="2.6" rx="0.6"/>
      <path d="M4.5,15.3 V19 M11,15.3 V19 M19.5,15.3 V19"/></g>
<text x="217" y="76" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Staging</text>
<text x="217" y="152" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>12 positions</text>
<rect x="310.2" y="52" width="139.3" height="150" rx="6" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(338.9,86.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.86" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(384.9,86.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.86" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="10" width="8" height="6.5" rx="1"/>
      <path d="M13,2.5 V17"/><path d="M16.5,5 V17"/>
      <path d="M13,12 H21"/>
      <circle cx="5.5" cy="19" r="2.2"/><circle cx="14.5" cy="19.2" r="1.7"/></g>
<text x="380" y="76" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Bulk storage</text>
<text x="380" y="152" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>4 aisles · 1,840</text>
<text x="380" y="165" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>bins</text>
<rect x="493.5" y="52" width="124.4" height="150" rx="6" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(514.7,86.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.86" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5,6.5 H20.5 L18.5,20 H5.5 Z"/>
      <path d="M6.5,10.5 H17.5"/>
      <rect x="9" y="13" width="6" height="3.5" rx="0.4"/></g>
<g transform="translate(560.7,86.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.86" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3.5" width="11" height="7" rx="1"/>
      <rect x="6" y="5.5" width="7" height="3.5" rx="0.5"/>
      <path d="M7.5,10.5 L6.5,20.5 H11 L12,10.5"/>
      <path d="M17,7 H21 M17,4.5 H19.5 M17,9.5 H19.5"/></g>
<text x="556" y="76" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Pick faces</text>
<text x="556" y="152" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>620 SKU</text>
<rect x="661.9" y="52" width="97.8" height="150" rx="6" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(692.8,86.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.86" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="3" width="12" height="9" rx="0.8"/>
      <path d="M6,5.5 C10,7 14,4 18,5.5 M6,8.5 C10,10 14,7 18,8.5"/>
      <rect x="3" y="13.5" width="18" height="2.6" rx="0.6"/>
      <rect x="3" y="19" width="18" height="2.4" rx="0.6"/>
      <path d="M5.5,16.1 V19 M12,16.1 V19 M18.5,16.1 V19"/></g>
<text x="711" y="76" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Pack</text>
<text x="711" y="152" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>6 stations</text>
<rect x="803.7" y="52" width="76.3" height="150" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s5,#d0d0d0)" strokeWidth="2"/>
<g transform="translate(823.9,86.0) scale(1.7500)" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="0.86" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="6.5" width="13" height="10" rx="0.8"/>
      <path d="M14.5,16.5 V9.5 H18.5 L22,13.5 V16.5 Z"/>
      <circle cx="6" cy="18.5" r="2.2"/><circle cx="18" cy="18.5" r="2.2"/>
      <path d="M1.5,18.5 H3.8 M8.2,18.5 H15.8"/></g>
<text x="842" y="76" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Despatch</text>
<text x="842" y="152" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>2 doors</text>
<path d="M127.4,127 H163.4" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<rect x="123.5" y="106" width="45.8" height="14" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="146" y="117" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>GR post</text>
<path d="M269.2,127 H305.2" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<rect x="262.6" y="106" width="51.2" height="14" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="288" y="117" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>put-away</text>
<path d="M452.5,127 H488.5" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<rect x="451.3" y="106" width="40.4" height="14" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="472" y="117" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>replen</text>
<path d="M620.9,127 H656.9" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<rect x="625.1" y="106" width="29.6" height="14" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="640" y="117" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>pick</text>
<path d="M762.7,127 H798.7" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<rect x="766.9" y="106" width="29.6" height="14" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="782" y="117" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>load</text>
<path d="M555.7,202 V226 H379.9 V206" fill="none" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#ar)"/>
<rect x="427.7" y="218" width="80.2" height="15" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="467.8" y="230" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--dv-s2,#47bfd9)" }}>returns to bulk</text>
<text x="0" y="272" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Solid = forward flow · Dashed = exception flow · zone width proportional to footprint</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: discussing slotting, travel time or dock capacity. A legend earns its place here because the dashed encoding repeats.
      </div>
    </SlideFrame>
  );
}
