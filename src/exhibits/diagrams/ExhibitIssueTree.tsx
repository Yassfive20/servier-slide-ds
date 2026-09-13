import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The diagnostic workhorse. */
export function ExhibitIssueTree() {
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
        Two drivers explain four of the six hours
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 393 }}>
        <svg viewBox="0 0 880 320" width={1080} height={393} role="img"
             aria-label="Two drivers explain four of the six hours">

<rect x="10" y="130" width="150" height="60" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="85.0" y="156" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Why is dock-to-stock</text>
<text x="85.0" y="171" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>6.2 hrs?</text>
<rect x="250" y="20" width="160" height="46" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="330.0" y="48" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Goods receipt</text>
<path d="M160,160 H205 V43.0 H250" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3"/>
<rect x="470" y="14" width="200" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="482" y="32" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Dock congestion</text>
<path d="M410,43.0 H440.0 V28 H470" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.1"/>
<rect x="470" y="48" width="200" height="28" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.6"/>
<text x="482" y="66" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>ASN accuracy 71%</text>
<path d="M410,43.0 H440.0 V62 H470" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.1"/>
<rect x="250" y="130" width="160" height="46" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="330.0" y="158" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Inspection</text>
<path d="M160,160 H205 V153.0 H250" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3"/>
<rect x="470" y="124" width="200" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="482" y="142" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>QM lot sampling</text>
<path d="M410,153.0 H440.0 V138 H470" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.1"/>
<rect x="470" y="158" width="200" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="482" y="176" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Sample wait time</text>
<path d="M410,153.0 H440.0 V172 H470" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.1"/>
<rect x="250" y="240" width="160" height="46" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="330.0" y="268" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Put-away</text>
<path d="M160,160 H205 V263.0 H250" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3"/>
<rect x="470" y="234" width="200" height="28" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.6"/>
<text x="482" y="252" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Travel distance</text>
<path d="M410,263.0 H440.0 V248 H470" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.1"/>
<rect x="470" y="268" width="200" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="482" y="286" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Bin search rules</text>
<path d="M410,263.0 H440.0 V282 H470" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.1"/>
<rect x="694" y="112" width="160" height="60" rx="4" fill="none" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.6" strokeDasharray="5 4"/>
<text x="774" y="138" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s2,#47bfd9)", fontWeight: "650" }}>Two drivers</text>
<text x="774" y="156" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s2,#47bfd9)", fontWeight: "650" }}>explain 4.1 hrs</text>
<text x="0" y="308" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Branches are MECE — mutually exclusive, collectively exhaustive at each level</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: diagnosing a number nobody can explain. Three levels is usually the limit before it belongs in a working file rather than on a slide.
      </div>
    </SlideFrame>
  );
}
