import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** A layer diagram is only worth drawing if each band names what actually sits in it. */
export function ExhibitLayeredArchitecture() {
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
        Five tiers, each with named components rather than labels
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 377 }}>
        <svg viewBox="0 0 860 300" width={1080} height={377} role="img"
             aria-label="Five tiers, each with named components rather than labels">

<rect x="120" y="0" width="740" height="52" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="120" y="0" width="6" height="52" rx="3" fill="var(--dv-s1,#f55b41)"/>
<text x="108" y="30.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Experience</text>
<text x="144" y="30.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Fiori launchpad · RF devices · mobile</text>
<rect x="120" y="60" width="740" height="52" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="120" y="60" width="6" height="52" rx="3" fill="var(--dv-s2,#47bfd9)"/>
<text x="108" y="90.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Process</text>
<text x="144" y="90.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Embedded EWM · MM · LE · TM</text>
<rect x="120" y="120" width="740" height="52" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="120" y="120" width="6" height="52" rx="3" fill="var(--dv-s3,#9c7dcc)"/>
<text x="108" y="150.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Integration</text>
<text x="144" y="150.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>IDoc · OData · CPI · Talend</text>
<rect x="120" y="180" width="740" height="52" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="120" y="180" width="6" height="52" rx="3" fill="var(--dv-s4,#91c461)"/>
<text x="108" y="210.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Data</text>
<text x="144" y="210.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>S/4HANA core tables · CDS views</text>
<rect x="120" y="240" width="740" height="52" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="108" y="270.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Platform</text>
<text x="144" y="270.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>BTP · HANA Cloud · identity</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: orienting a technical audience. If two layers talk to each other in a way that matters, a stack is the wrong form — draw the flow instead.
      </div>
    </SlideFrame>
  );
}
