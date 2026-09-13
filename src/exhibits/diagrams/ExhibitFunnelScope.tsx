import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The pass-through percentage beside each step is what makes a funnel argue rather than decorate — it tells the reader which stage is doing the filtering. */
export function ExhibitFunnelScope() {
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
        Of 412 requirements, 15 need development
      </div>

      <div style={{ position: "absolute", left: 190, top: 206, width: 899, height: 424 }}>
        <svg viewBox="0 0 700 330" width={899} height={424} role="img"
             aria-label="Of 412 requirements, 15 need development">

<path d="M10.0,0 H570.0 L516.2,56 H63.8 Z" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="290.0" y="33.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "14px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>412</text>
<text x="586.0" y="32.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Requirements gathered</text>
<path d="M63.8,62 H516.2 L462.5,118 H117.5 Z" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="290.0" y="95.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "14px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>268</text>
<text x="532.2" y="94.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>In scope for release 1</text>
<text x="47.8" y="94.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>65% pass</text>
<path d="M117.5,124 H462.5 L408.8,180 H171.2 Z" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="290.0" y="157.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "14px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>191</text>
<text x="478.5" y="156.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Fit to standard</text>
<text x="101.5" y="156.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>71% pass</text>
<path d="M171.2,186 H408.8 L355.0,242 H225.0 Z" fill="var(--sv-ex-seq-500,#323c8e)"/>
<text x="290.0" y="219.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "14px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "700" }}>62</text>
<text x="424.8" y="218.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Requires config</text>
<text x="155.2" y="218.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>32% pass</text>
<path d="M225.0,248 H355.0 L301.2,304 H278.8 Z" fill="var(--sv-ex-seq-600,#24226a)"/>
<text x="290.0" y="281.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "14px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "700" }}>15</text>
<text x="371.0" y="280.0" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Requires development</text>
<text x="209.0" y="280.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>24% pass</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: showing progressive narrowing. If the counts do not drop meaningfully, the funnel is a stacked bar in disguise.
      </div>
    </SlideFrame>
  );
}
