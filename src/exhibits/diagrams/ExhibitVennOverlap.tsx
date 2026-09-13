import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** A Venn is only informative when every region is *named*. */
export function ExhibitVennOverlap() {
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
        Delivery and stock are shared across all three modules
      </div>

      <div style={{ position: "absolute", left: 269, top: 206, width: 742, height: 424 }}>
        <svg viewBox="0 0 700 400" width={742} height={424} role="img"
             aria-label="Delivery and stock are shared across all three modules">

<circle cx="268" cy="168" r="118" fill="var(--dv-s1,#f55b41)" fillOpacity="0.18" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<circle cx="432" cy="168" r="118" fill="var(--dv-s2,#47bfd9)" fillOpacity="0.18" stroke="var(--dv-s2,#47bfd9)" strokeWidth="2"/>
<circle cx="350" cy="288" r="118" fill="var(--dv-s3,#9c7dcc)" fillOpacity="0.18" stroke="var(--dv-s3,#9c7dcc)" strokeWidth="2"/>
<text x="196" y="120" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "15px", fill: "var(--dv-s1,#f55b41)", fontWeight: "700" }}>MM</text>
<text x="508" y="120" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "15px", fill: "var(--dv-s2,#47bfd9)", fontWeight: "700" }}>EWM</text>
<text x="350" y="380" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "15px", fill: "var(--dv-s3,#9c7dcc)", fontWeight: "700" }}>TM</text>
<text x="350" y="148" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Stock</text>
<text x="350" y="218" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Delivery</text>
<text x="287" y="258" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Transfer order</text>
<text x="413" y="258" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Handling unit</text>
<text x="196" y="176" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Valuation</text>
<text x="512" y="176" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Bin / task</text>
<text x="350" y="336" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Carrier</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: explaining where module boundaries blur. Three circles is the maximum that stays readable — four needs a matrix.
      </div>
    </SlideFrame>
  );
}
