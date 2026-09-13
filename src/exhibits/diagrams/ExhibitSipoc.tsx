import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The one-slide process scope. */
export function ExhibitSipoc() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Process
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Inbound at a glance — who feeds it, who consumes it
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 307 }}>
        <svg viewBox="0 0 880 250" width={1080} height={307} role="img"
             aria-label="Inbound at a glance — who feeds it, who consumes it">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="0.0" y="0" width="164.8" height="34" rx="4" fill="var(--dv-s1,#f55b41)"/>
<text x="82.4" y="22" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Supplier</text>
<rect x="0.0" y="40" width="164.8" height="114.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="14.0" y="68.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Vendors</text>
<text x="14.0" y="102.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>3PL</text>
<text x="14.0" y="136.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Production</text>
<rect x="178.8" y="0" width="164.8" height="34" rx="4" fill="var(--dv-s2,#47bfd9)"/>
<text x="261.2" y="22" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Input</text>
<rect x="178.8" y="40" width="164.8" height="114.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="192.8" y="68.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>ASN</text>
<text x="192.8" y="102.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Packing list</text>
<text x="192.8" y="136.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>PO</text>
<path d="M165.8,17 H175.8" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="357.6" y="0" width="164.8" height="34" rx="4" fill="var(--dv-s3,#9c7dcc)"/>
<text x="440.0" y="22" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Process</text>
<rect x="357.6" y="40" width="164.8" height="114.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="371.6" y="68.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Receive</text>
<text x="371.6" y="102.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Inspect</text>
<text x="371.6" y="136.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Put away</text>
<path d="M344.6,17 H354.6" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="536.4" y="0" width="164.8" height="34" rx="4" fill="var(--dv-s4,#91c461)"/>
<text x="618.8" y="22" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Output</text>
<rect x="536.4" y="40" width="164.8" height="80.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="550.4" y="68.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Stock on hand</text>
<text x="550.4" y="102.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>GR document</text>
<path d="M523.4,17 H533.4" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="715.2" y="0" width="164.8" height="34" rx="4" fill="var(--dv-s5,#d0d0d0)"/>
<text x="797.6" y="22" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Customer</text>
<rect x="715.2" y="40" width="164.8" height="114.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="729.2" y="68.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Planning</text>
<text x="729.2" y="102.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Finance</text>
<text x="729.2" y="136.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Sales</text>
<path d="M702.2,17 H712.2" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: opening a process workshop or defining scope edges.
      </div>
    </SlideFrame>
  );
}
