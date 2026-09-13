import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Width carries quantity, so the reader sees where the volume goes without reading a number. */
export function ExhibitSankeyFlow() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Flow
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Two-thirds of requirements land in release 1
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 405 }}>
        <svg viewBox="0 0 880 330" width={1080} height={405} role="img"
             aria-label="Two-thirds of requirements land in release 1">

<rect x="10" y="0.0" width="170" height="125.2" rx="3" fill="var(--dv-s1,#f55b41)"/>
<text x="190" y="66.6" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Fit to standard 191</text>
<rect x="10" y="137.2" width="170" height="77.3" rx="3" fill="var(--dv-s2,#47bfd9)"/>
<text x="190" y="179.8" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Config 118</text>
<rect x="10" y="226.5" width="170" height="40.6" rx="3" fill="var(--dv-s3,#9c7dcc)"/>
<text x="190" y="250.8" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Development 62</text>
<rect x="10" y="279.1" width="170" height="26.9" rx="3" fill="var(--sv-ex-quiet,#d0d0d0)"/>
<text x="190" y="296.6" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Deferred 41</text>
<rect x="700" y="0.0" width="170" height="175.6" rx="3" fill="var(--sv-ex-ink-2,#5b5a7f)"/>
<text x="785.0" y="91.8" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-surface,#ffffff)", fontWeight: "650" }}>Release 1 268</text>
<rect x="700" y="187.6" width="170" height="67.5" rx="3" fill="var(--sv-ex-ink-2,#5b5a7f)"/>
<text x="785.0" y="225.4" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-surface,#ffffff)", fontWeight: "650" }}>Release 2 103</text>
<rect x="700" y="267.1" width="170" height="26.9" rx="3" fill="var(--sv-ex-ink-2,#5b5a7f)"/>
<text x="785.0" y="284.6" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-surface,#ffffff)", fontWeight: "650" }}>Out of scope 41</text>
<path d="M320,0.0 C510.0,0.0 510.0,0.0 700,0.0 V98.3 C510.0,98.3 510.0,98.3 320,98.3 Z" fill="var(--dv-s1,#f55b41)" opacity="0.34"/>
<path d="M320,98.3 C510.0,98.3 510.0,187.6 700,187.6 V214.5 C510.0,214.5 510.0,125.2 320,125.2 Z" fill="var(--dv-s1,#f55b41)" opacity="0.34"/>
<path d="M320,137.2 C510.0,137.2 510.0,98.3 700,98.3 V149.4 C510.0,149.4 510.0,188.3 320,188.3 Z" fill="var(--dv-s2,#47bfd9)" opacity="0.34"/>
<path d="M320,188.3 C510.0,188.3 510.0,214.5 700,214.5 V240.7 C510.0,240.7 510.0,214.5 320,214.5 Z" fill="var(--dv-s2,#47bfd9)" opacity="0.34"/>
<path d="M320,226.5 C510.0,226.5 510.0,149.4 700,149.4 V175.6 C510.0,175.6 510.0,252.7 320,252.7 Z" fill="var(--dv-s3,#9c7dcc)" opacity="0.34"/>
<path d="M320,252.7 C510.0,252.7 510.0,240.7 700,240.7 V255.1 C510.0,255.1 510.0,267.1 320,267.1 Z" fill="var(--dv-s3,#9c7dcc)" opacity="0.34"/>
<path d="M320,279.1 C510.0,279.1 510.0,267.1 700,267.1 V294.0 C510.0,294.0 510.0,306.0 320,306.0 Z" fill="var(--sv-ex-quiet,#d0d0d0)" opacity="0.34"/>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: showing how a population divides across stages. Keep to two columns on a slide; three or more belongs in an interactive view.
      </div>
    </SlideFrame>
  );
}
