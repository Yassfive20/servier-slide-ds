import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Vertical because cutover is read as a list under time pressure, not admired. */
export function ExhibitCutoverRunbook() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Plan
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Eight gates between data freeze and go/no-go
      </div>

      <div style={{ position: "absolute", left: 147, top: 206, width: 986, height: 424 }}>
        <svg viewBox="0 0 860 370" width={986} height={424} role="img"
             aria-label="Eight gates between data freeze and go/no-go">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<line x1="92" y1="8" x2="92" y2="336" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="2"/>
<text x="76" y="25" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>T−48h</text>
<circle cx="92" cy="20" r="6" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<rect x="114" y="5" width="736" height="30" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="128" y="25" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Freeze master data</text>
<text x="836" y="25" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Data lead</text>
<text x="76" y="67" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>T−24h</text>
<circle cx="92" cy="62" r="6" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<rect x="114" y="47" width="736" height="30" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="128" y="67" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Final delta extract</text>
<text x="836" y="67" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Data lead</text>
<text x="76" y="109" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>T−12h</text>
<circle cx="92" cy="104" r="6" fill="var(--dv-s2,#47bfd9)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<rect x="114" y="89" width="736" height="30" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="128" y="109" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Stop legacy WMS</text>
<text x="836" y="109" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Ops</text>
<text x="76" y="151" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>T−8h</text>
<circle cx="92" cy="146" r="6" fill="var(--dv-s2,#47bfd9)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<rect x="114" y="131" width="736" height="30" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="128" y="151" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Load open stock</text>
<text x="836" y="151" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Data lead</text>
<text x="76" y="193" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>T−4h</text>
<circle cx="92" cy="188" r="6" fill="var(--dv-s2,#47bfd9)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<rect x="114" y="173" width="736" height="30" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="128" y="193" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Reconcile balances</text>
<text x="836" y="193" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Finance</text>
<text x="76" y="235" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>T−2h</text>
<circle cx="92" cy="230" r="6" fill="var(--dv-s3,#9c7dcc)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<rect x="114" y="215" width="736" height="30" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="128" y="235" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Activate interfaces</text>
<text x="836" y="235" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Integration</text>
<text x="76" y="277" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>T−1h</text>
<circle cx="92" cy="272" r="6" fill="var(--dv-s3,#9c7dcc)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<rect x="114" y="257" width="736" height="30" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="128" y="277" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Smoke test</text>
<text x="836" y="277" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Test lead</text>
<text x="76" y="319" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>T−0</text>
<circle cx="92" cy="314" r="6" fill="var(--sv-ex-critical,#b3261e)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<rect x="114" y="299" width="736" height="30" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="128" y="319" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink,#24226a)" }}>Go / no-go</text>
<text x="836" y="319" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Steerco</text>
<text x="0" y="364" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Dot colour groups tasks into windows · every row names one owner</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: walking a room through cutover. Keep the slide to the gates; the full task list belongs in the cutover plan.
      </div>
    </SlideFrame>
  );
}
