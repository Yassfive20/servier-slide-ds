import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** A roadmap is a bar chart on a time axis, so it obeys the same rules: thin bars, hairline grid, colour carrying phase rather than decoration. */
export function ExhibitRoadmapGantt() {
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
        Eighteen-month plan, four overlapping workstreams
      </div>

      <div style={{ position: "absolute", left: 100, top: 168, display: "flex", gap: 28,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-tick)",
                     color: "var(--sv-ex-ink-2)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s1,#f55b41)" }} />Explore</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s2,#47bfd9)" }} />Realize</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s3,#9c7dcc)" }} />Test</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i style={{ width: 14, height: 14, borderRadius: 3, background: "var(--dv-s4,#91c461)" }} />Deploy</span>
      </div>
      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 384 }}>
        <svg viewBox="0 0 860 306" width={1080} height={384} role="img"
             aria-label="Eighteen-month plan, four overlapping workstreams">

<line x1="220.0" y1="0" x2="220.0" y2="272" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="282.0" y="294.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Q1</text>
<line x1="344.0" y1="0" x2="344.0" y2="272" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="406.0" y="294.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Q2</text>
<line x1="468.0" y1="0" x2="468.0" y2="272" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="530.0" y="294.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Q3</text>
<line x1="592.0" y1="0" x2="592.0" y2="272" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="654.0" y="294.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Q4</text>
<line x1="716.0" y1="0" x2="716.0" y2="272" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="778.0" y="294.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Q1+1</text>
<line x1="840.0" y1="0" x2="840.0" y2="272" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="208.0" y="21.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Fit-to-standard workshops</text>
<path d="M220.0,8.0 H319.3 A4,4 0 0 1 323.3,12.0 V22.0 A4,4 0 0 1 319.3,26.0 H220.0 Z" fill="var(--dv-s1,#f55b41)"/>
<text x="208.0" y="55.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Gap resolution &amp; DAB</text>
<path d="M288.9,42.0 H388.2 A4,4 0 0 1 392.2,46.0 V56.0 A4,4 0 0 1 388.2,60.0 H288.9 Z" fill="var(--dv-s1,#f55b41)"/>
<text x="208.0" y="89.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Configuration</text>
<path d="M323.3,76.0 H491.6 A4,4 0 0 1 495.6,80.0 V90.0 A4,4 0 0 1 491.6,94.0 H323.3 Z" fill="var(--dv-s2,#47bfd9)"/>
<text x="208.0" y="123.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>WRICEF build</text>
<path d="M357.8,110.0 H526.0 A4,4 0 0 1 530.0,114.0 V124.0 A4,4 0 0 1 526.0,128.0 H357.8 Z" fill="var(--dv-s2,#47bfd9)"/>
<text x="208.0" y="157.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>String &amp; integration test</text>
<path d="M461.1,144.0 H594.9 A4,4 0 0 1 598.9,148.0 V158.0 A4,4 0 0 1 594.9,162.0 H461.1 Z" fill="var(--dv-s3,#9c7dcc)"/>
<text x="208.0" y="191.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>UAT</text>
<path d="M564.4,178.0 H663.8 A4,4 0 0 1 667.8,182.0 V192.0 A4,4 0 0 1 663.8,196.0 H564.4 Z" fill="var(--dv-s3,#9c7dcc)"/>
<text x="208.0" y="225.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Cutover &amp; dress rehearsals</text>
<path d="M633.3,212.0 H732.7 A4,4 0 0 1 736.7,216.0 V226.0 A4,4 0 0 1 732.7,230.0 H633.3 Z" fill="var(--dv-s4,#91c461)"/>
<text x="208.0" y="259.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Go-live &amp; hypercare</text>
<path d="M736.7,246.0 H801.6 A4,4 0 0 1 805.6,250.0 V260.0 A4,4 0 0 1 801.6,264.0 H736.7 Z" fill="var(--dv-s4,#91c461)"/>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: showing sequence and overlap. Colour groups bars into phases — if every bar is a different colour, the reader learns nothing from the colour.
      </div>
    </SlideFrame>
  );
}
