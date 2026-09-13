import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Same blocks as the capability stack, now carrying a judgement. */
export function ExhibitCapabilityMap() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Segment
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        The gaps cluster in Store and Deliver
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 368 }}>
        <svg viewBox="0 0 880 300" width={1080} height={368} role="img"
             aria-label="The gaps cluster in Store and Deliver">

<text x="83.2" y="16" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>Plan</text>
<rect x="0.0" y="30" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="83.2" y="58" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Demand</text>
<rect x="0.0" y="88" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="83.2" y="116" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Supply</text>
<rect x="0.0" y="146" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-300,#86BC25)"/>
<text x="83.2" y="174" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Slotting</text>
<text x="261.6" y="16" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>Source</text>
<rect x="178.4" y="30" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="261.6" y="58" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Purchasing</text>
<rect x="178.4" y="88" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-300,#86BC25)"/>
<text x="261.6" y="116" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Vendor mgmt</text>
<rect x="178.4" y="146" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="261.6" y="174" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Inbound</text>
<text x="440.0" y="16" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>Store</text>
<rect x="356.8" y="30" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-500,#046A38)"/>
<text x="440.0" y="58" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "600" }}>Put-away</text>
<rect x="356.8" y="88" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-500,#046A38)"/>
<text x="440.0" y="116" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "600" }}>Replenish</text>
<rect x="356.8" y="146" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-300,#86BC25)"/>
<text x="440.0" y="174" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Inventory</text>
<text x="618.4" y="16" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>Deliver</text>
<rect x="535.2" y="30" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-300,#86BC25)"/>
<text x="618.4" y="58" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Wave</text>
<rect x="535.2" y="88" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-500,#046A38)"/>
<text x="618.4" y="116" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "600" }}>Pick / pack</text>
<rect x="535.2" y="146" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-500,#046A38)"/>
<text x="618.4" y="174" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "600" }}>Ship</text>
<text x="796.8" y="16" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>Enable</text>
<rect x="713.6" y="30" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="796.8" y="58" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Master data</text>
<rect x="713.6" y="88" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-300,#86BC25)"/>
<text x="796.8" y="116" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Analytics</text>
<rect x="713.6" y="146" width="166.4" height="48" rx="4" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="796.8" y="174" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Integration</text>
<rect x="0" y="219" width="14" height="14" rx="3" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="22" y="230" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>1 — meets need</text>
<rect x="180" y="219" width="14" height="14" rx="3" fill="var(--sv-ex-seq-300,#86BC25)"/>
<text x="202" y="230" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>2 — partial</text>
<rect x="360" y="219" width="14" height="14" rx="3" fill="var(--sv-ex-seq-500,#046A38)"/>
<text x="382" y="230" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>3 — significant gap</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: reporting an assessment across a known structure. Because the layout matches the capability stack, the two can be shown in sequence — structure, then verdict.
      </div>
    </SlideFrame>
  );
}
