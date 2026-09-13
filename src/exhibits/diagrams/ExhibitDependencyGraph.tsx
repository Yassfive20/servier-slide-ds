import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** A dependency diagram earns its place only when the edges are real. */
export function ExhibitDependencyGraph() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Network
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Five of eight workstreams sit on the critical path
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 407 }}>
        <svg viewBox="0 0 880 332" width={1080} height={407} role="img"
             aria-label="Five of eight workstreams sit on the critical path">

<defs><marker id="dg" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<defs><marker id="dgc" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--dv-s1,#f55b41)"/></marker></defs>
<path d="M126,121.0 H161.0 V49.0 H192" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="2.4" markerEnd="url(#dgc)"/>
<path d="M126,121.0 H161.0 V193.0 H192" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#dg)"/>
<path d="M312,49.0 H347.0 V121.0 H378" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="2.4" markerEnd="url(#dgc)"/>
<path d="M312,193.0 H347.0 V121.0 H378" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#dg)"/>
<path d="M498,121.0 H533.0 V121.0 H564" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="2.4" markerEnd="url(#dgc)"/>
<path d="M498,121.0 H440.0 V261.0 H378" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#dg)"/>
<path d="M498,261.0 H533.0 V261.0 H564" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#dg)"/>
<path d="M684,121.0 H719.0 V185.0 H750" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="2.4" markerEnd="url(#dgc)"/>
<path d="M684,261.0 H719.0 V185.0 H750" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#dg)"/>
<rect x="10" y="92" width="116" height="58" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="68.0" y="118.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Master data</text>
<text x="68.0" y="132.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>cleanse</text>
<rect x="196" y="20" width="116" height="58" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="254.0" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Config</text>
<text x="254.0" y="60.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>freeze</text>
<rect x="196" y="164" width="116" height="58" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="254.0" y="190.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Interface</text>
<text x="254.0" y="204.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>build</text>
<rect x="382" y="92" width="116" height="58" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="440.0" y="118.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Integration</text>
<text x="440.0" y="132.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>test</text>
<rect x="382" y="232" width="116" height="58" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="440.0" y="258.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Training</text>
<text x="440.0" y="272.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>material</text>
<rect x="568" y="92" width="116" height="58" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="626.0" y="125.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>UAT</text>
<rect x="568" y="232" width="116" height="58" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<text x="626.0" y="258.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Key user</text>
<text x="626.0" y="272.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>training</text>
<rect x="754" y="156" width="116" height="58" rx="5" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="812.0" y="189.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Go-live</text>
<text x="0" y="322" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Heavy edges and outlined nodes = critical path · a slip on any of them moves go-live</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: explaining why a date cannot move, or which delay actually matters. If everything is on the critical path, the diagram is telling you the plan has no slack.
      </div>
    </SlideFrame>
  );
}
