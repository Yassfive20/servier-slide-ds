import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The landscape-rationalisation slide. */
export function ExhibitConsolidation() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Join
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Five systems and five support contracts become one
      </div>

      <div style={{ position: "absolute", left: 144, top: 206, width: 992, height: 424 }}>
        <svg viewBox="0 0 880 376" width={992} height={424} role="img"
             aria-label="Five systems and five support contracts become one">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="10" y="20" width="220" height="46" rx="4" fill="var(--sv-ex-legacy,#ededed)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1" strokeDasharray="4 3"/>
<text x="120" y="48" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>SAP ECC — Lyon</text>
<path d="M230,43 C320,43 380,145 554,145" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="10" y="86" width="220" height="46" rx="4" fill="var(--sv-ex-legacy,#ededed)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1" strokeDasharray="4 3"/>
<text x="120" y="114" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>SAP ECC — Rouen</text>
<path d="M230,109 C320,109 380,145 554,145" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="10" y="152" width="220" height="46" rx="4" fill="var(--sv-ex-legacy,#ededed)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1" strokeDasharray="4 3"/>
<text x="120" y="180" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Infor WMS — Lille</text>
<path d="M230,175 C320,175 380,145 554,145" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="10" y="218" width="220" height="46" rx="4" fill="var(--sv-ex-legacy,#ededed)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1" strokeDasharray="4 3"/>
<text x="120" y="246" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Custom WMS — Nantes</text>
<path d="M230,241 C320,241 380,145 554,145" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="10" y="284" width="220" height="46" rx="4" fill="var(--sv-ex-legacy,#ededed)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1" strokeDasharray="4 3"/>
<text x="120" y="312" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Excel — Toulouse</text>
<path d="M230,307 C320,307 380,145 554,145" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="560" y="108" width="300" height="76" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2.5"/>
<text x="710" y="140" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "16px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Single S/4HANA</text>
<text x="710" y="162" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>one client · one chart of accounts</text>
<text x="120" y="366" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "650" }}>5 systems · 5 support contracts</text>
<text x="710" y="366" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s1,#f55b41)", fontWeight: "650" }}>1 system · 1 upgrade path</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: making the case for a single instance. Put the count of whatever the client pays for — contracts, interfaces, upgrade projects — under each side.
      </div>
    </SlideFrame>
  );
}
