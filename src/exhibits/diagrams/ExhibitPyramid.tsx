import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** A pyramid claims something specific: each tier is *supported by* the one beneath, so the bottom is where the work is. */
export function ExhibitPyramid() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Stack
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        The ambition rests on four layers of foundation
      </div>

      <div style={{ position: "absolute", left: 216, top: 206, width: 848, height: 424 }}>
        <svg viewBox="0 0 760 380" width={848} height={424} role="img"
             aria-label="The ambition rests on four layers of foundation">

<path d="M305.0,0 H455.0 L523.8,84 H236.2 Z" fill="var(--dv-s1,#f55b41)" stroke="none" strokeWidth="1"/>
<text x="380.0" y="40.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "14px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Ambition</text>
<text x="380.0" y="60.0" textAnchor="middle" opacity="0.9" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>One way of working across five sites</text>
<path d="M236.2,90 H523.8 L592.5,174 H167.5 Z" fill="var(--dv-s2,#47bfd9)" stroke="none" strokeWidth="1"/>
<text x="380.0" y="130.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "14px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Capabilities</text>
<text x="380.0" y="150.0" textAnchor="middle" opacity="0.9" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Standard EWM processes · single master data</text>
<path d="M167.5,180 H592.5 L661.2,264 H98.8 Z" fill="var(--dv-s3,#9c7dcc)" stroke="none" strokeWidth="1"/>
<text x="380.0" y="220.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "14px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Enablers</text>
<text x="380.0" y="240.0" textAnchor="middle" opacity="0.9" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>S/4HANA · RF infrastructure · trained key users</text>
<path d="M98.8,270 H661.2 L730.0,354 H30.0 Z" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="380.0" y="310.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "14px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Foundations</text>
<text x="380.0" y="330.0" textAnchor="middle" opacity="0.9" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Data quality · governance · change capacity</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: connecting an ambition to what has to be true underneath it. Four tiers maximum; the apex should be one sentence a sponsor would say out loud.
      </div>
    </SlideFrame>
  );
}
