import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** A maturity model without a marker is a definition list. */
export function ExhibitMaturityLadder() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Analysis
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Warehouse operations sit at level 3 today
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 402 }}>
        <svg viewBox="0 0 860 320" width={1080} height={402} role="img"
             aria-label="Warehouse operations sit at level 3 today">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="100.0" y="236.0" width="118.0" height="44" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="159.0" y="260.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>1 · Ad hoc</text>
<text x="159.0" y="280.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Paper and tribal</text>
<text x="159.0" y="293.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>knowledge</text>
<rect x="232.0" y="192.0" width="118.0" height="88" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="291.0" y="216.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2 · Repeatable</text>
<text x="291.0" y="236.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Documented,</text>
<text x="291.0" y="249.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>inconsistently</text>
<text x="291.0" y="262.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>followed</text>
<rect x="364.0" y="148.0" width="118.0" height="132" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="423.0" y="172.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3 · Defined</text>
<text x="423.0" y="192.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Standard process,</text>
<text x="423.0" y="205.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>measured</text>
<rect x="496.0" y="104.0" width="118.0" height="176" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="555.0" y="128.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>4 · Managed</text>
<text x="555.0" y="148.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Exception-driven,</text>
<text x="555.0" y="161.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>KPI governed</text>
<rect x="628.0" y="60.0" width="118.0" height="220" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="687.0" y="84.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>5 · Optimising</text>
<text x="687.0" y="104.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Continuous</text>
<text x="687.0" y="117.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>improvement loop</text>
<path d="M423.0,296 V282" stroke="var(--dv-s1,#f55b41)" strokeWidth="2" markerEnd="url(#ar)"/>
<text x="423.0" y="312" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s1,#f55b41)", fontWeight: "650" }}>we are here</text>
<text x="0" y="18" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Target: level 4 by go-live + 6 months</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: framing an assessment result or setting an improvement target.
      </div>
    </SlideFrame>
  );
}
