import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The core system carries a brand-coloured 2px border; satellites are hairline; anything being decommissioned is dashed and greyed so the retirement story reads without a legend. */
export function ExhibitSystemLandscape() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Architecture
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Target landscape — single S/4HANA core, eight interfaces
      </div>

      <div style={{ position: "absolute", left: 160, top: 206, width: 960, height: 424 }}>
        <svg viewBox="0 0 860 380" width={960} height={424} role="img"
             aria-label="Target landscape — single S/4HANA core, eight interfaces">

<defs><marker id="a2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<text x="8.0" y="16.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>UPSTREAM</text>
<text x="300.0" y="16.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>CORE</text>
<text x="660.0" y="16.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>DOWNSTREAM</text>
<rect x="8" y="30" width="190" height="62" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="103.0" y="58.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "620" }}>Supplier portal</text>
<text x="103.0" y="76.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Ariba · cXML</text>
<rect x="8" y="104" width="190" height="62" rx="5" fill="var(--sv-ex-legacy,#ededed)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1" strokeDasharray="4 3"/>
<text x="103.0" y="132.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "620" }}>Legacy WMS</text>
<text x="103.0" y="150.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>to be decommissioned</text>
<rect x="300" y="60" width="250" height="100" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="425.0" y="107.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "620" }}>S/4HANA</text>
<text x="425.0" y="125.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Embedded EWM · MM · LE</text>
<rect x="300" y="200" width="250" height="62" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="425.0" y="228.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "620" }}>SAP TM</text>
<text x="425.0" y="246.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Transport planning</text>
<rect x="660" y="30" width="190" height="62" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="755.0" y="58.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "620" }}>MES</text>
<text x="755.0" y="76.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Production confirm</text>
<rect x="660" y="104" width="190" height="62" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="755.0" y="132.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "620" }}>Carrier hub</text>
<text x="755.0" y="150.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>EDI · IFTMIN</text>
<rect x="300" y="300" width="250" height="62" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="425.0" y="328.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "620" }}>BW/4HANA</text>
<text x="425.0" y="346.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Reporting</text>
<rect x="660" y="300" width="190" height="62" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="755.0" y="328.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "620" }}>Customs</text>
<text x="755.0" y="346.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>AES · declarations</text>
<path d="M198,61 H249.0 V90 H296" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#a2)"/>
<rect x="223.0" y="67.5" width="52" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="249.0" y="79.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>IDoc</text>
<path d="M198,135 H249.0 V120 H296" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#a2)"/>
<rect x="223.0" y="119.5" width="52" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="249.0" y="131.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>one-way</text>
<path d="M550,90 H605.0 V61 H656" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#a2)"/>
<rect x="579.0" y="67.5" width="52" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="605.0" y="79.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>OData</text>
<path d="M550,120 H605.0 V135 H656" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#a2)"/>
<rect x="579.0" y="119.5" width="52" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="605.0" y="131.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>EDI</text>
<path d="M425,160 H425.0 V200 H421" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#a2)"/>
<rect x="399.0" y="172.0" width="52" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="425.0" y="184.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>queue</text>
<path d="M425,262 H425.0 V300 H421" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#a2)"/>
<rect x="399.0" y="273.0" width="52" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="425.0" y="285.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>CDS</text>
<path d="M550,231 H605.0 V320 H656" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#a2)"/>
<rect x="579.0" y="267.5" width="52" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="605.0" y="279.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>AES</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: setting architecture context. Band the diagram upstream / core / downstream so flow direction is structural, not something the arrows have to prove.
      </div>
    </SlideFrame>
  );
}
