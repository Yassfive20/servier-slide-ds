import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The quadrant only earns its place when items are *plotted* rather than listed inside four boxes. */
export function ExhibitMatrix2x2() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Analysis
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Three initiatives sit in the do-now quadrant
      </div>

      <div style={{ position: "absolute", left: 321, top: 206, width: 638, height: 424 }}>
        <svg viewBox="0 0 620 412" width={638} height={424} role="img"
             aria-label="Three initiatives sit in the do-now quadrant">

<rect x="56" y="10" width="554" height="366" fill="var(--sv-ex-lane,#f3f7fd)"/>
<rect x="56" y="10" width="277.0" height="183.0" fill="var(--sv-ex-node,#ffffff)"/>
<line x1="333.0" y1="10" x2="333.0" y2="376" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<line x1="56" y1="193.0" x2="610" y2="193.0" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="68.0" y="30.0" opacity="0.75" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--dv-s1,#f55b41)", fontWeight: "700" }}>DO NOW</text>
<text x="345.0" y="30.0" opacity="0.75" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "700" }}>PLAN</text>
<text x="68.0" y="213.0" opacity="0.75" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "700" }}>FILL-IN</text>
<text x="345.0" y="213.0" opacity="0.75" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "700" }}>RECONSIDER</text>
<circle cx="454.9" cy="83.2" r="7" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="442.9" y="87.2" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Wave optimisation</text>
<circle cx="360.7" cy="119.8" r="7" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="372.7" y="123.8" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Slotting rules</text>
<circle cx="526.9" cy="174.7" r="7" fill="var(--sv-ex-quiet,#d0d0d0)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="514.9" y="178.7" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Voice picking</text>
<circle cx="222.2" cy="247.9" r="7" fill="var(--sv-ex-quiet,#d0d0d0)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="234.2" y="251.9" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Yard mgmt</text>
<circle cx="399.5" cy="273.5" r="7" fill="var(--sv-ex-quiet,#d0d0d0)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="387.5" y="277.5" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Labour mgmt</text>
<circle cx="211.1" cy="105.2" r="7" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="223.1" y="109.2" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Auto replenishment</text>
<circle cx="488.1" cy="295.5" r="7" fill="var(--sv-ex-quiet,#d0d0d0)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="476.1" y="299.5" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Kitting</text>
<text x="333.0" y="404" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "600" }}>Implementation effort →</text>
<text x="16" y="193.0" textAnchor="middle" transform="rotate(-90 16 193.0)" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "600" }}>Business impact →</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: prioritising a shortlist. If every item lands in one quadrant, the axes are wrong — pick dimensions that actually separate them.
      </div>
    </SlideFrame>
  );
}
