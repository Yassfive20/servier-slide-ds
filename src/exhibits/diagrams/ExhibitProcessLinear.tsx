import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The simplest flow: sequence only, no actors. */
export function ExhibitProcessLinear() {
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
        Requirement to deployment — six gates, one artefact each
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 163 }}>
        <svg viewBox="0 0 860 130" width={1080} height={163} role="img"
             aria-label="Requirement to deployment — six gates, one artefact each">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="0.0" y="26.0" width="118.3" height="70.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="59.2" y="58.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Requirement</text>
<text x="59.2" y="75.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>REQ log</text>
<circle cx="16.0" cy="42.0" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="16.0" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>1</text>
<rect x="148.3" y="26.0" width="118.3" height="70.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="207.5" y="58.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Fit-gap</text>
<text x="207.5" y="75.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>workshop</text>
<path d="M119.3,61.0 H144.3" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<circle cx="164.3" cy="42.0" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="164.3" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>2</text>
<rect x="296.7" y="26.0" width="118.3" height="70.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="355.8" y="58.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Design</text>
<text x="355.8" y="75.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>DAB decision</text>
<path d="M267.7,61.0 H292.7" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<circle cx="312.7" cy="42.0" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="312.7" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>3</text>
<rect x="445.0" y="26.0" width="118.3" height="70.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="504.2" y="58.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Build</text>
<text x="504.2" y="75.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>config / WRICEF</text>
<path d="M416.0,61.0 H441.0" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<circle cx="461.0" cy="42.0" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="461.0" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>4</text>
<rect x="593.3" y="26.0" width="118.3" height="70.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="652.5" y="58.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Test</text>
<text x="652.5" y="75.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>UAT sign-off</text>
<path d="M564.3,61.0 H589.3" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<circle cx="609.3" cy="42.0" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="609.3" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>5</text>
<rect x="741.7" y="26.0" width="118.3" height="70.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="800.8" y="58.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Deploy</text>
<text x="800.8" y="75.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>cutover</text>
<path d="M712.7,61.0 H737.7" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<circle cx="757.7" cy="42.0" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="757.7" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>6</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: showing sequence alone. Six steps is the comfortable ceiling — past that the boxes get too narrow to label and the flow wants a hierarchy instead.
      </div>
    </SlideFrame>
  );
}
