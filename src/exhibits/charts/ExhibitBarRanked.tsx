import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Sorted descending with the subject of the sentence in brand colour and every other bar in the de-emphasis grey. */
export function ExhibitBarRanked() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Exhibit
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Put-away travel accounts for a third of all touch time
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 361 }}>
        <svg viewBox="0 0 820 274" width={1080} height={361} role="img"
             aria-label="Put-away travel accounts for a third of all touch time">

<text x="178.0" y="21.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Put-away travel time</text>
<path d="M190.0,6.0 H756.0 A4,4 0 0 1 760.0,10.0 V24.0 A4,4 0 0 1 756.0,28.0 H190.0 Z" fill="var(--dv-s1,#f55b41)"/>
<text x="768.0" y="21.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>34%</text>
<text x="178.0" y="61.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Pick confirmation</text>
<path d="M190.0,46.0 H655.4 A4,4 0 0 1 659.4,50.0 V64.0 A4,4 0 0 1 655.4,68.0 H190.0 Z" fill="var(--sv-ex-quiet,#d0d0d0)"/>
<text x="667.4" y="61.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>28%</text>
<text x="178.0" y="101.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Replenishment</text>
<path d="M190.0,86.0 H538.1 A4,4 0 0 1 542.1,90.0 V104.0 A4,4 0 0 1 538.1,108.0 H190.0 Z" fill="var(--sv-ex-quiet,#d0d0d0)"/>
<text x="550.1" y="101.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>21%</text>
<text x="178.0" y="141.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Cycle counting</text>
<path d="M190.0,126.0 H403.9 A4,4 0 0 1 407.9,130.0 V144.0 A4,4 0 0 1 403.9,148.0 H190.0 Z" fill="var(--sv-ex-quiet,#d0d0d0)"/>
<text x="415.9" y="141.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>13%</text>
<text x="178.0" y="181.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Packing</text>
<path d="M190.0,166.0 H336.9 A4,4 0 0 1 340.9,170.0 V184.0 A4,4 0 0 1 336.9,188.0 H190.0 Z" fill="var(--sv-ex-quiet,#d0d0d0)"/>
<text x="348.9" y="181.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>9%</text>
<text x="178.0" y="221.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Goods receipt</text>
<path d="M190.0,206.0 H286.6 A4,4 0 0 1 290.6,210.0 V224.0 A4,4 0 0 1 286.6,228.0 H190.0 Z" fill="var(--sv-ex-quiet,#d0d0d0)"/>
<text x="298.6" y="221.0" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>6%</text>
<line x1="190" y1="0" x2="190" y2="240" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: comparing magnitude across named categories. Always sort — an unsorted category axis makes the reader do the ranking. Single series, so no legend box.
      </div>
    </SlideFrame>
  );
}
