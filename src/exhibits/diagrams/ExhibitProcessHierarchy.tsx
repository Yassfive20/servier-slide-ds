import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The scoping diagram. */
export function ExhibitProcessHierarchy() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Process
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Warehouse management decomposes into four L2 areas
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 377 }}>
        <svg viewBox="0 0 860 300" width={1080} height={377} role="img"
             aria-label="Warehouse management decomposes into four L2 areas">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="330.0" y="8.0" width="200.0" height="46.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="430.0" y="28.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Warehouse management</text>
<text x="430.0" y="45.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>L1</text>
<rect x="8.0" y="110.0" width="190.0" height="46.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="103.0" y="130.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Inbound</text>
<text x="103.0" y="147.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>L2</text>
<path d="M430,54 V82 H103 V110" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="226.0" y="110.0" width="190.0" height="46.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="321.0" y="130.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Storage</text>
<text x="321.0" y="147.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>L2</text>
<path d="M430,54 V82 H321 V110" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="444.0" y="110.0" width="190.0" height="46.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="539.0" y="130.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Outbound</text>
<text x="539.0" y="147.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>L2</text>
<path d="M430,54 V82 H539 V110" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="662.0" y="110.0" width="190.0" height="46.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="757.0" y="130.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Physical inv.</text>
<text x="757.0" y="147.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>L2</text>
<path d="M430,54 V82 H757 V110" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="30" y="186" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="42" y="204" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>ASN</text>
<path d="M103,156 V186" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="30" y="222" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="42" y="240" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>GR posting</text>
<path d="M20,236 H30" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="30" y="258" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="42" y="276" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Put-away</text>
<path d="M20,272 H30" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<path d="M20,170 V272" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<path d="M103,156 V170 H20" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="248" y="186" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="260" y="204" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Slotting</text>
<path d="M321,156 V186" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="248" y="222" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="260" y="240" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Replenish</text>
<path d="M238,236 H248" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="248" y="258" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="260" y="276" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Rearrange</text>
<path d="M238,272 H248" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<path d="M238,170 V272" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<path d="M321,156 V170 H238" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="466" y="186" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="478" y="204" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Wave</text>
<path d="M539,156 V186" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="466" y="222" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="478" y="240" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Picking</text>
<path d="M456,236 H466" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="466" y="258" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="478" y="276" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Packing</text>
<path d="M456,272 H466" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<path d="M456,170 V272" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<path d="M539,156 V170 H456" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="684" y="186" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="696" y="204" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Cycle count</text>
<path d="M757,156 V186" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="684" y="222" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="696" y="240" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Ad-hoc count</text>
<path d="M674,236 H684" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="684" y="258" width="168" height="28" rx="4" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="696" y="276" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Adjust</text>
<path d="M674,272 H684" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<path d="M674,170 V272" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<path d="M757,156 V170 H674" fill="none" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: agreeing scope boundaries before workshops. If you find yourself needing L4, the diagram has become a backlog — put it in a register instead.
      </div>
    </SlideFrame>
  );
}
