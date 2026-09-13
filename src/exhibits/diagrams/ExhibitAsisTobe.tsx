import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** A comparison diagram has to show the *difference*, not two lists side by side. */
export function ExhibitAsisTobe() {
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
        The to-be flow removes both re-keying steps
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 368 }}>
        <svg viewBox="0 0 880 300" width={1080} height={368} role="img"
             aria-label="The to-be flow removes both re-keying steps">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<defs><marker id="arA" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--dv-s2,#47bfd9)"/></marker></defs>
<defs><marker id="arB" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--dv-s1,#f55b41)"/></marker></defs>
<rect x="0" y="0" width="880" height="128" rx="6" fill="var(--sv-ex-lane,#f3f7fd)"/>
<text x="16" y="26" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "700" }}>AS-IS · 5 STEPS · 2 RE-KEYS</text>
<rect x="16.0" y="44.0" width="148.0" height="58.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="90.0" y="77.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Paper pick list</text>
<rect x="194.0" y="44.0" width="148.0" height="58.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="268.0" y="77.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Manual count</text>
<path d="M165.0,73.0 H190.0" fill="none" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.4" markerEnd="url(#arA)"/>
<rect x="372.0" y="44.0" width="148.0" height="58.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="446.0" y="77.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Key into WMS</text>
<path d="M343.0,73.0 H368.0" fill="none" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.4" markerEnd="url(#arA)"/>
<rect x="550.0" y="44.0" width="148.0" height="58.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="624.0" y="77.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Re-key into ERP</text>
<path d="M521.0,73.0 H546.0" fill="none" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.4" markerEnd="url(#arA)"/>
<rect x="728.0" y="44.0" width="148.0" height="58.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="802.0" y="77.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Batch upload</text>
<path d="M699.0,73.0 H724.0" fill="none" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.4" markerEnd="url(#arA)"/>
<rect x="0" y="152" width="880" height="128" rx="6" fill="var(--sv-ex-lane,#f3f7fd)"/>
<text x="16" y="178" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "700" }}>TO-BE · 3 STEPS · 0 RE-KEYS</text>
<rect x="16.0" y="196.0" width="148.0" height="58.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="90.0" y="229.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>RF-guided pick</text>
<rect x="194.0" y="196.0" width="148.0" height="58.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="268.0" y="229.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Scan confirm</text>
<path d="M165.0,225.0 H190.0" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.4" markerEnd="url(#arB)"/>
<rect x="372.0" y="196.0" width="148.0" height="58.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="446.0" y="229.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Post in EWM</text>
<path d="M343.0,225.0 H368.0" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.4" markerEnd="url(#arB)"/>
<rect x="550" y="196" width="326" height="58" rx="5" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1" strokeDasharray="5 4"/>
<text x="713.0" y="230" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>two steps eliminated</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: justifying a process change. If both rows have the same number of boxes, the diagram is not yet making an argument.
      </div>
    </SlideFrame>
  );
}
