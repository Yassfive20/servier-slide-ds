import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** An org chart of boxes and names tells the reader nothing they cannot get from a distribution list. */
export function ExhibitOrgGovernance() {
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
        Three tiers, each with a stated decision right
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 368 }}>
        <svg viewBox="0 0 880 300" width={1080} height={368} role="img"
             aria-label="Three tiers, each with a stated decision right">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="340.0" y="0.0" width="200.0" height="52.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="440.0" y="23.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Steering committee</text>
<text x="440.0" y="40.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>monthly · decisions &gt; €250k</text>
<rect x="340.0" y="96.0" width="200.0" height="52.0" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="440.0" y="119.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Design Authority Board</text>
<text x="440.0" y="136.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>weekly · design decisions</text>
<rect x="10" y="200" width="146" height="52" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="83" y="230" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>EWM workstream</text>
<path d="M83,176 V200" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.2" markerEnd="url(#ar)"/>
<rect x="188" y="200" width="146" height="52" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="261" y="230" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Integration</text>
<path d="M261,176 V200" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.2" markerEnd="url(#ar)"/>
<rect x="366" y="200" width="146" height="52" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="439" y="230" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Data migration</text>
<path d="M439,176 V200" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.2" markerEnd="url(#ar)"/>
<rect x="544" y="200" width="146" height="52" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="617" y="230" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Change &amp; training</text>
<path d="M617,176 V200" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.2" markerEnd="url(#ar)"/>
<rect x="722" y="200" width="146" height="52" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="795" y="230" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Test management</text>
<path d="M795,176 V200" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.2" markerEnd="url(#ar)"/>
<path d="M440,52 V96" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<path d="M83,176 H795" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<path d="M440,148 V176" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4"/>
<text x="556" y="78" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>escalates unresolved gaps</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: setting up a programme or fixing an escalation problem. Name what each body decides, not who sits on it.
      </div>
    </SlideFrame>
  );
}
