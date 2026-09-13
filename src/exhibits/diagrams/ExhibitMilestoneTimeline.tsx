import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** A milestone timeline is not a roadmap — it carries dates, not durations. */
export function ExhibitMilestoneTimeline() {
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
        Build completes this month; four milestones remain
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 258 }}>
        <svg viewBox="0 0 880 210" width={1080} height={258} role="img"
             aria-label="Build completes this month; four milestones remain">

<line x1="30" y1="112" x2="850" y2="112" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="2"/>
<line x1="30" y1="112" x2="456.4" y2="112" stroke="var(--dv-s1,#f55b41)" strokeWidth="4"/>
<circle cx="46.4" cy="112" r="6" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<line x1="46.4" y1="101" x2="46.4" y2="76" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="46.4" y="66.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Kick-off</text>
<circle cx="177.6" cy="112" r="6" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<line x1="177.6" y1="123" x2="177.6" y2="148" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="177.6" y="158.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Fit-gap complete</text>
<circle cx="308.8" cy="112" r="6" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<line x1="308.8" y1="101" x2="308.8" y2="76" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="308.8" y="66.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Design freeze</text>
<circle cx="456.4" cy="112" r="11" fill="none" stroke="var(--sv-ex-warning,#b8860b)" strokeWidth="2"/>
<circle cx="456.4" cy="112" r="6" fill="var(--sv-ex-warning,#b8860b)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<line x1="456.4" y1="123" x2="456.4" y2="148" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="456.4" y="158.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Build complete</text>
<circle cx="604.0" cy="112" r="6" fill="var(--sv-ex-muted,#8f8ea6)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<line x1="604.0" y1="101" x2="604.0" y2="76" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="604.0" y="66.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "600" }}>UAT sign-off</text>
<circle cx="735.2" cy="112" r="6" fill="var(--sv-ex-muted,#8f8ea6)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<line x1="735.2" y1="123" x2="735.2" y2="148" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="735.2" y="158.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "600" }}>Cutover start</text>
<circle cx="825.4" cy="112" r="6" fill="var(--sv-ex-muted,#8f8ea6)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<line x1="825.4" y1="101" x2="825.4" y2="76" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="825.4" y="66.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "600" }}>Go-live</text>
<text x="30" y="200" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Filled axis = elapsed · ring = current milestone</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: reporting progress to a steering committee. For durations and overlap use the roadmap card instead.
      </div>
    </SlideFrame>
  );
}
