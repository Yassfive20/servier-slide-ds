import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** A comparison diagram has to let the reader point at the difference. */
export function ExhibitHubVsP2p() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Network
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Hub topology cuts ten interfaces to five
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 417 }}>
        <svg viewBox="0 0 880 340" width={1080} height={417} role="img"
             aria-label="Hub topology cuts ten interfaces to five">

<defs><marker id="hv" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<defs><marker id="hvb" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--dv-s1,#f55b41)"/></marker></defs>
<line x1="190.0" y1="58.0" x2="294.6" y2="134.0" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1" opacity="0.55"/>
<line x1="190.0" y1="58.0" x2="254.7" y2="257.0" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1" opacity="0.55"/>
<line x1="190.0" y1="58.0" x2="125.3" y2="257.0" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1" opacity="0.55"/>
<line x1="190.0" y1="58.0" x2="85.4" y2="134.0" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1" opacity="0.55"/>
<line x1="294.6" y1="134.0" x2="254.7" y2="257.0" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1" opacity="0.55"/>
<line x1="294.6" y1="134.0" x2="125.3" y2="257.0" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1" opacity="0.55"/>
<line x1="294.6" y1="134.0" x2="85.4" y2="134.0" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1" opacity="0.55"/>
<line x1="254.7" y1="257.0" x2="125.3" y2="257.0" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1" opacity="0.55"/>
<line x1="254.7" y1="257.0" x2="85.4" y2="134.0" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1" opacity="0.55"/>
<line x1="125.3" y1="257.0" x2="85.4" y2="134.0" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1" opacity="0.55"/>
<circle cx="190.0" cy="58.0" r="30" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="190.0" y="62.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>ERP</text>
<circle cx="294.6" cy="134.0" r="30" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="294.6" y="138.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>WMS</text>
<circle cx="254.7" cy="257.0" r="30" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="254.7" y="261.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>TMS</text>
<circle cx="125.3" cy="257.0" r="30" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="125.3" y="261.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>MES</text>
<circle cx="85.4" cy="134.0" r="30" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="85.4" y="138.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>BI</text>
<text x="190" y="24" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Point-to-point</text>
<text x="190" y="316" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-critical,#b3261e)", fontWeight: "700" }}>10 interfaces to maintain</text>
<line x1="690.0" y1="58.0" x2="690" y2="168" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.6"/>
<line x1="794.6" y1="134.0" x2="690" y2="168" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.6"/>
<line x1="754.7" y1="257.0" x2="690" y2="168" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.6"/>
<line x1="625.3" y1="257.0" x2="690" y2="168" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.6"/>
<line x1="585.4" y1="134.0" x2="690" y2="168" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.6"/>
<circle cx="690" cy="168" r="40" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="690" y="168" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s1,#f55b41)", fontWeight: "700" }}>Integration</text>
<text x="690" y="183" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s1,#f55b41)", fontWeight: "700" }}>Suite</text>
<circle cx="690.0" cy="58.0" r="30" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="690.0" y="62.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>ERP</text>
<circle cx="794.6" cy="134.0" r="30" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="794.6" y="138.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>WMS</text>
<circle cx="754.7" cy="257.0" r="30" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="754.7" y="261.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>TMS</text>
<circle cx="625.3" cy="257.0" r="30" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="625.3" y="261.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>MES</text>
<circle cx="585.4" cy="134.0" r="30" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="585.4" y="138.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>BI</text>
<text x="690" y="24" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Hub and spoke</text>
<text x="690" y="316" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--dv-s1,#f55b41)", fontWeight: "700" }}>5 interfaces to maintain</text>
<line x1="440" y1="10" x2="440" y2="300" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: arguing for middleware, or explaining why the interface count grows quadratically. Works for any n — the n(n−1)/2 story tells itself.
      </div>
    </SlideFrame>
  );
}
