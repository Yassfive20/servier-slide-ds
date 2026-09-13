import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The deployment-strategy slide. */
export function ExhibitRolloutWaves() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Segment
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Six sites in three waves, widening as the template proves out
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 319 }}>
        <svg viewBox="0 0 880 260" width={1080} height={319} role="img"
             aria-label="Six sites in three waves, widening as the template proves out">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="10" y="30" width="180" height="160" rx="6" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.8"/>
<text x="100.0" y="20" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Wave 1 — pilot</text>
<rect x="26" y="48" width="148" height="34" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="100.0" y="70" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Lyon</text>
<text x="100.0" y="208" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s1,#f55b41)", fontWeight: "650" }}>Q1</text>
<rect x="220" y="30" width="220" height="160" rx="6" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.8"/>
<text x="330.0" y="20" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Wave 2</text>
<rect x="236" y="48" width="188" height="34" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="330.0" y="70" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Rouen</text>
<rect x="236" y="92" width="188" height="34" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="330.0" y="114" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Lille</text>
<text x="330.0" y="208" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s2,#47bfd9)", fontWeight: "650" }}>Q3</text>
<path d="M194,110 H216" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<rect x="470" y="30" width="260" height="160" rx="6" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--dv-s3,#9c7dcc)" strokeWidth="1.8"/>
<text x="600.0" y="20" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Wave 3</text>
<rect x="486" y="48" width="228" height="34" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="600.0" y="70" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Nantes</text>
<rect x="486" y="92" width="228" height="34" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="600.0" y="114" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Toulouse</text>
<rect x="486" y="136" width="228" height="34" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="600.0" y="158" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Bordeaux</text>
<text x="600.0" y="208" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s3,#9c7dcc)", fontWeight: "650" }}>Q1+1</text>
<path d="M444,110 H466" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<text x="0" y="248" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Wave size grows as the template stabilises — the pilot carries one site on purpose</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: agreeing deployment sequence. Put the date under each wave — a wave diagram without dates is a grouping, not a plan.
      </div>
    </SlideFrame>
  );
}
