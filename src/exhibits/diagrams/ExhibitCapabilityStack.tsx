import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Blocks, not arrows — this form deliberately says nothing about sequence. */
export function ExhibitCapabilityStack() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Stack
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Fifteen capabilities in five groups
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 356 }}>
        <svg viewBox="0 0 880 290" width={1080} height={356} role="img"
             aria-label="Fifteen capabilities in five groups">

<rect x="0.0" y="0" width="166.4" height="34" rx="4" fill="var(--dv-s1,#f55b41)"/>
<text x="83.2" y="22" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Plan</text>
<rect x="0.0" y="46" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="83.2" y="74" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Demand</text>
<rect x="0.0" y="104" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="83.2" y="132" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Supply</text>
<rect x="0.0" y="162" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="83.2" y="190" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Slotting</text>
<rect x="178.4" y="0" width="166.4" height="34" rx="4" fill="var(--dv-s2,#47bfd9)"/>
<text x="261.6" y="22" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Source</text>
<rect x="178.4" y="46" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="261.6" y="74" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Purchasing</text>
<rect x="178.4" y="104" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="261.6" y="132" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Vendor mgmt</text>
<rect x="178.4" y="162" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="261.6" y="190" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Inbound</text>
<rect x="356.8" y="0" width="166.4" height="34" rx="4" fill="var(--dv-s3,#9c7dcc)"/>
<text x="440.0" y="22" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Store</text>
<rect x="356.8" y="46" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="440.0" y="74" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Put-away</text>
<rect x="356.8" y="104" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="440.0" y="132" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Replenish</text>
<rect x="356.8" y="162" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="440.0" y="190" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Inventory</text>
<rect x="535.2" y="0" width="166.4" height="34" rx="4" fill="var(--dv-s4,#91c461)"/>
<text x="618.4" y="22" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Deliver</text>
<rect x="535.2" y="46" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="618.4" y="74" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Wave</text>
<rect x="535.2" y="104" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="618.4" y="132" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Pick / pack</text>
<rect x="535.2" y="162" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="618.4" y="190" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Ship</text>
<rect x="713.6" y="0" width="166.4" height="34" rx="4" fill="var(--dv-s5,#d0d0d0)"/>
<text x="796.8" y="22" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>Enable</text>
<rect x="713.6" y="46" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="796.8" y="74" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Master data</text>
<rect x="713.6" y="104" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="796.8" y="132" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Analytics</text>
<rect x="713.6" y="162" width="166.4" height="48" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="796.8" y="190" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)" }}>Integration</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: scoping what a programme covers, or as the base layer a heat-map is painted onto. Pairs with the capability map card.
      </div>
    </SlideFrame>
  );
}
