import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** R and A get filled marks because they are the ones anyone acts on; C and I stay as quiet letters. */
export function ExhibitRaciMatrix() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Governance
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Every task has exactly one accountable owner
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 397 }}>
        <svg viewBox="0 0 860 316" width={1080} height={397} role="img"
             aria-label="Every task has exactly one accountable owner">

<text x="292.0" y="36" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>Client PO</text>
<text x="416.0" y="36" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>Func. lead</text>
<text x="540.0" y="36" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>Tech lead</text>
<text x="664.0" y="36" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>DAB</text>
<text x="788.0" y="36" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>AMS</text>
<rect x="230" y="52" width="620.0" height="34" fill="var(--sv-ex-lane,#f3f7fd)"/>
<text x="216" y="73.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Fit-gap classification</text>
<text x="292.0" y="73.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>C</text>
<circle cx="416.0" cy="69.0" r="11" fill="var(--dv-s1,#f55b41)"/>
<text x="416.0" y="73.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>R</text>
<circle cx="664.0" cy="69.0" r="11" fill="var(--dv-s2,#47bfd9)"/>
<text x="664.0" y="73.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>A</text>
<text x="216" y="107.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Design decision</text>
<text x="292.0" y="107.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>C</text>
<circle cx="416.0" cy="103.0" r="11" fill="var(--dv-s1,#f55b41)"/>
<text x="416.0" y="107.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>R</text>
<text x="540.0" y="107.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>C</text>
<circle cx="664.0" cy="103.0" r="11" fill="var(--dv-s2,#47bfd9)"/>
<text x="664.0" y="107.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>A</text>
<rect x="230" y="120" width="620.0" height="34" fill="var(--sv-ex-lane,#f3f7fd)"/>
<text x="216" y="141.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Config build</text>
<circle cx="416.0" cy="137.0" r="11" fill="var(--dv-s1,#f55b41)"/>
<text x="416.0" y="141.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>R</text>
<text x="540.0" y="141.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>C</text>
<text x="788.0" y="141.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>I</text>
<text x="216" y="175.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>WRICEF spec</text>
<circle cx="416.0" cy="171.0" r="11" fill="var(--dv-s2,#47bfd9)"/>
<text x="416.0" y="175.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>A</text>
<circle cx="540.0" cy="171.0" r="11" fill="var(--dv-s1,#f55b41)"/>
<text x="540.0" y="175.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>R</text>
<text x="664.0" y="175.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>C</text>
<rect x="230" y="188" width="620.0" height="34" fill="var(--sv-ex-lane,#f3f7fd)"/>
<text x="216" y="209.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Unit &amp; string test</text>
<text x="292.0" y="209.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>I</text>
<circle cx="416.0" cy="205.0" r="11" fill="var(--dv-s2,#47bfd9)"/>
<text x="416.0" y="209.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>A</text>
<circle cx="540.0" cy="205.0" r="11" fill="var(--dv-s1,#f55b41)"/>
<text x="540.0" y="209.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>R</text>
<text x="788.0" y="209.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>C</text>
<text x="216" y="243.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>UAT sign-off</text>
<circle cx="292.0" cy="239.0" r="11" fill="var(--dv-s2,#47bfd9)"/>
<text x="292.0" y="243.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>A</text>
<circle cx="416.0" cy="239.0" r="11" fill="var(--dv-s1,#f55b41)"/>
<text x="416.0" y="243.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>R</text>
<text x="788.0" y="243.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>I</text>
<rect x="230" y="256" width="620.0" height="34" fill="var(--sv-ex-lane,#f3f7fd)"/>
<text x="216" y="277.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Cutover go/no-go</text>
<circle cx="292.0" cy="273.0" r="11" fill="var(--dv-s2,#47bfd9)"/>
<text x="292.0" y="277.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>A</text>
<text x="416.0" y="277.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>C</text>
<text x="540.0" y="277.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>C</text>
<circle cx="664.0" cy="273.0" r="11" fill="var(--dv-s1,#f55b41)"/>
<text x="664.0" y="277.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>R</text>
<text x="788.0" y="277.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>C</text>
<line x1="230" y1="52" x2="230" y2="290" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="230" y="312" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>R responsible · A accountable · C consulted · I informed — exactly one A per row</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: ownership is contested. Keep to about eight rows; a full RACI belongs in a register, and only the disputed slice belongs on a slide.
      </div>
    </SlideFrame>
  );
}
