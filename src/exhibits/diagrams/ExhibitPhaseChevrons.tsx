import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The orientation slide. */
export function ExhibitPhaseChevrons() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Programme
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        We are here — Explore, closing fit-to-standard
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 161 }}>
        <svg viewBox="0 0 860 128" width={1080} height={161} role="img"
             aria-label="We are here — Explore, closing fit-to-standard">

<path d="M0.0,0 H167.6 L189.6,64.0 L167.6,128.0 H0.0 Z" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1.5"/>
<text x="94.8" y="60.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "15px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Prepare</text>
<text x="94.8" y="80.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Mobilise</text>
<text x="94.8" y="93.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>standards</text>
<path d="M167.6,0 H335.2 L357.2,64.0 L335.2,128.0 H167.6 L189.6,64.0 Z" fill="var(--dv-s1,#f55b41)" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.5"/>
<text x="262.4" y="60.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "15px", fill: "#ffffff", fontWeight: "650" }}>Explore</text>
<text x="262.4" y="80.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "#ffffff" }}>Fit-to-standard</text>
<text x="262.4" y="93.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "#ffffff" }}>gap log</text>
<path d="M335.2,0 H502.8 L524.8,64.0 L502.8,128.0 H335.2 L357.2,64.0 Z" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1.5"/>
<text x="430.0" y="60.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "15px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Realize</text>
<text x="430.0" y="80.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Config</text>
<text x="430.0" y="93.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>WRICEF build</text>
<path d="M502.8,0 H670.4 L692.4,64.0 L670.4,128.0 H502.8 L524.8,64.0 Z" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1.5"/>
<text x="597.6" y="60.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "15px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Deploy</text>
<text x="597.6" y="80.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Cutover</text>
<text x="597.6" y="93.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>dress rehearsal</text>
<path d="M670.4,0 H838.0 L860.0,64.0 L838.0,128.0 H670.4 L692.4,64.0 Z" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1.5"/>
<text x="765.2" y="60.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "15px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Run</text>
<text x="765.2" y="80.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Hypercare</text>
<text x="765.2" y="93.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>handover to AMS</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: opening a steering-committee deck. Keep to five or six phases; past that the chevrons get too narrow to label.
      </div>
    </SlideFrame>
  );
}
