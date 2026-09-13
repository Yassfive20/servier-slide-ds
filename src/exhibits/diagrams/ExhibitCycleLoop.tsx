import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Use a ring only when the process genuinely has no terminus. */
export function ExhibitCycleLoop() {
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
        The outbound cycle repeats — there is no finish line
      </div>

      <div style={{ position: "absolute", left: 286, top: 206, width: 707, height: 424 }}>
        <svg viewBox="0 0 700 420" width={707} height={424} role="img"
             aria-label="The outbound cycle repeats — there is no finish line">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<circle cx="350.0" cy="73.0" r="52" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="350.0" y="77.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Plan wave</text>
<circle cx="475.5" cy="164.2" r="52" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="475.5" y="168.2" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Release</text>
<circle cx="427.6" cy="311.8" r="52" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="427.6" y="315.8" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Pick</text>
<circle cx="272.4" cy="311.8" r="52" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="272.4" y="308.8" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Pack &amp;</text>
<text x="272.4" y="322.8" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>stage</text>
<circle cx="224.5" cy="164.2" r="52" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="224.5" y="161.2" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Ship &amp;</text>
<text x="224.5" y="175.2" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>confirm</text>
<path d="M405.5,80.8 A136,136 0 0 1 451.0,113.9" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<path d="M485.2,219.4 A136,136 0 0 1 467.9,272.9" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<path d="M378.1,338.1 A136,136 0 0 1 321.9,338.1" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<path d="M232.1,272.9 A136,136 0 0 1 214.8,219.4" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<path d="M249.0,113.9 A136,136 0 0 1 294.5,80.8" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<text x="350" y="201" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>Outbound</text>
<text x="350" y="219" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>cycle</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: the process feeds itself. Four to six stages; past six the ring gets too crowded and a linear flow reads better.
      </div>
    </SlideFrame>
  );
}
