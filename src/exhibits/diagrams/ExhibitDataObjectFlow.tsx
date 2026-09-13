import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Systems diagrams answer 'what talks to what'; object diagrams answer 'what gets created, from what, and how many'. */
export function ExhibitDataObjectFlow() {
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
        One ASN becomes n handling units and one material document
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 319 }}>
        <svg viewBox="0 0 880 260" width={1080} height={319} role="img"
             aria-label="One ASN becomes n handling units and one material document">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="10.0" y="90.0" width="170.0" height="76.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="95.0" y="125.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Vendor</text>
<text x="95.0" y="142.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>external</text>
<rect x="250.0" y="30.0" width="180.0" height="76.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="340.0" y="65.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Inbound delivery</text>
<text x="340.0" y="82.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>EWM document</text>
<rect x="250.0" y="150.0" width="180.0" height="76.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="340.0" y="185.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Handling unit</text>
<text x="340.0" y="202.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>EWM document</text>
<rect x="500.0" y="90.0" width="180.0" height="76.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="590.0" y="125.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Warehouse task</text>
<text x="590.0" y="142.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>EWM document</text>
<rect x="750.0" y="90.0" width="120.0" height="76.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="810.0" y="125.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Material doc</text>
<text x="810.0" y="142.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>MM</text>
<path d="M180.0,128.0 H215.0 V68.0 H246.0" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="182.0" y="90.0" width="66.0" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="215.0" y="102.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>ASN / IDoc</text>
<path d="M430.0,68.0 H465.0 V128.0 H496.0" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="440.4" y="90.0" width="49.2" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="465.0" y="102.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>creates</text>
<path d="M430.0,188.0 H465.0 V128.0 H496.0" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="432.0" y="150.0" width="66.0" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="465.0" y="162.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>packs into</text>

<path d="M340,106 V150" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#ar)"/>
<rect x="346" y="120" width="70" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="381" y="132" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>1 : n</text>
<path d="M680.0,128.0 H746.0" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="687.6" y="120.0" width="54.8" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="715.0" y="132.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>confirms</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: specifying an interface or explaining a document chain to a technical team.
      </div>
    </SlideFrame>
  );
}
