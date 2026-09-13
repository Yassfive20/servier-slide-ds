import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The point of a convergence diagram is the logic at the meeting point. */
export function ExhibitConvergenceStreams() {
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
        Four independent streams, one AND gate
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 368 }}>
        <svg viewBox="0 0 880 300" width={1080} height={368} role="img"
             aria-label="Four independent streams, one AND gate">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="10" y="40" width="200" height="44" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.8"/>
<text x="110" y="67" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Config complete</text>
<path d="M210,62 C330,62 420,161 654,161" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="2" markerEnd="url(#ar)"/>
<rect x="10" y="106" width="200" height="44" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.8"/>
<text x="110" y="133" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>WRICEF built</text>
<path d="M210,128 C330,128 420,161 654,161" fill="none" stroke="var(--dv-s2,#47bfd9)" strokeWidth="2" markerEnd="url(#ar)"/>
<rect x="10" y="172" width="200" height="44" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s3,#9c7dcc)" strokeWidth="1.8"/>
<text x="110" y="199" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Data migrated</text>
<path d="M210,194 C330,194 420,161 654,161" fill="none" stroke="var(--dv-s3,#9c7dcc)" strokeWidth="2" markerEnd="url(#ar)"/>
<rect x="10" y="238" width="200" height="44" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s4,#91c461)" strokeWidth="1.8"/>
<text x="110" y="265" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Users trained</text>
<path d="M210,260 C330,260 420,161 654,161" fill="none" stroke="var(--dv-s4,#91c461)" strokeWidth="2" markerEnd="url(#ar)"/>
<rect x="660" y="139" width="200" height="44" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-ink,#24226a)" strokeWidth="2"/>
<text x="760" y="166" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Go / no-go gate</text>
<text x="435" y="286" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>All four must be green — the gate is an AND, not a majority</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: several independent tracks have to land together. Name the joining logic explicitly — AND, OR, or quorum.
      </div>
    </SlideFrame>
  );
}
