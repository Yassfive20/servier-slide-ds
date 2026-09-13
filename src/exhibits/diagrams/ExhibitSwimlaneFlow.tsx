import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Lanes are actors, columns are sequence. */
export function ExhibitSwimlaneFlow() {
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
        Inbound delivery — target process, actor view
      </div>

      <div style={{ position: "absolute", left: 196, top: 206, width: 888, height: 424 }}>
        <svg viewBox="0 0 880 420" width={888} height={424} role="img"
             aria-label="Inbound delivery — target process, actor view">

<rect x="128" y="0" width="752" height="82" fill="var(--sv-ex-lane,#f3f7fd)"/>
<line x1="0" y1="0" x2="880" y2="0" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="114.0" y="45.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Supplier</text>
<line x1="0" y1="82" x2="880" y2="82" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="114.0" y="127.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Goods receipt</text>
<rect x="128" y="164" width="752" height="82" fill="var(--sv-ex-lane,#f3f7fd)"/>
<line x1="0" y1="164" x2="880" y2="164" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="114.0" y="209.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>EWM</text>
<line x1="0" y1="246" x2="880" y2="246" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="114.0" y="291.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Quality</text>
<rect x="128" y="328" width="752" height="82" fill="var(--sv-ex-lane,#f3f7fd)"/>
<line x1="0" y1="328" x2="880" y2="328" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="114.0" y="373.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Finance</text>
<line x1="0" y1="410" x2="880" y2="410" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<line x1="128" y1="0" x2="128" y2="410" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<rect x="144.0" y="15.0" width="92.6" height="52.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="190.3" y="45.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>Dispatch ASN</text>
<rect x="248.6" y="97.0" width="92.6" height="52.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="294.9" y="120.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>Receive at</text>
<text x="294.9" y="133.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>dock</text>
<rect x="353.1" y="179.0" width="92.6" height="52.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="399.4" y="196.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>Create</text>
<text x="399.4" y="209.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>inbound</text>
<text x="399.4" y="222.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>delivery</text>
<path d="M504.0,261.0 L550.3,287.0 L504.0,313.0 L457.7,287.0 Z" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s4,#91c461)" strokeWidth="2"/>
<text x="504.0" y="284.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>QM</text>
<text x="504.0" y="297.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>check</text>
<rect x="562.3" y="179.0" width="92.6" height="52.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="608.6" y="209.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>Put-away (WT)</text>
<rect x="666.9" y="343.0" width="92.6" height="52.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="713.1" y="373.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>Invoice match</text>
<rect x="771.4" y="343.0" width="92.6" height="52.0" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="817.7" y="373.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2)" }}>Post GR/IR</text>
<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<path d="M236.6,41.0 H242.6 V123.0 H245.6" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.5" markerEnd="url(#ar)"/>
<path d="M341.1,123.0 H347.1 V205.0 H350.1" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.5" markerEnd="url(#ar)"/>
<path d="M445.7,205.0 H451.7 V287.0 H454.7" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.5" markerEnd="url(#ar)"/>
<path d="M550.3,287.0 H556.3 V205.0 H559.3" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.5" markerEnd="url(#ar)"/>
<path d="M654.9,205.0 H660.9 V369.0 H663.9" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.5" markerEnd="url(#ar)"/>
<path d="M759.4,369.0 H765.4 V369.0 H768.4" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.5" markerEnd="url(#ar)"/>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: the question is who does what, in what order. If ownership does not matter, drop the lanes and use a plain left-to-right flow.
      </div>
    </SlideFrame>
  );
}
