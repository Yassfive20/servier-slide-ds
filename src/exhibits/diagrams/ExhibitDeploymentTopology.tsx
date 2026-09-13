import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The transport route drawn honestly, including the emergency path teams pretend does not exist. */
export function ExhibitDeploymentTopology() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Architecture
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Three-system landscape with a controlled back-path
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 301 }}>
        <svg viewBox="0 0 860 240" width={1080} height={301} role="img"
             aria-label="Three-system landscape with a controlled back-path">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="0" y="30" width="230" height="120" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<rect x="0" y="30" width="230" height="30" rx="6" fill="var(--dv-s1,#f55b41)"/>
<rect x="0" y="52" width="230" height="8" fill="var(--dv-s1,#f55b41)"/>
<text x="115.0" y="51" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>DEV</text>
<text x="115.0" y="92" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Development</text>
<text x="115.0" y="112" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>sandbox + golden</text>
<text x="115.0" y="134" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>client 100</text>
<rect x="315" y="30" width="230" height="120" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s2,#47bfd9)" strokeWidth="2"/>
<rect x="315" y="30" width="230" height="30" rx="6" fill="var(--dv-s2,#47bfd9)"/>
<rect x="315" y="52" width="230" height="8" fill="var(--dv-s2,#47bfd9)"/>
<text x="430.0" y="51" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>QAS</text>
<text x="430.0" y="92" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Quality</text>
<text x="430.0" y="112" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>integration + UAT</text>
<text x="430.0" y="134" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>client 200</text>
<path d="M232.0,90.0 H311.0" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="243.3" y="82.0" width="60.4" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="273.5" y="94.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>transport</text>
<rect x="630" y="30" width="230" height="120" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s5,#d0d0d0)" strokeWidth="2"/>
<rect x="630" y="30" width="230" height="30" rx="6" fill="var(--dv-s5,#d0d0d0)"/>
<rect x="630" y="52" width="230" height="8" fill="var(--dv-s5,#d0d0d0)"/>
<text x="745.0" y="51" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "13px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "700" }}>PRD</text>
<text x="745.0" y="92" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "600" }}>Production</text>
<text x="745.0" y="112" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>live</text>
<text x="745.0" y="134" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>client 300</text>
<path d="M547.0,90.0 H626.0" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.4" markerEnd="url(#ar)"/>
<rect x="558.3" y="82.0" width="60.4" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="588.5" y="94.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>transport</text>
<path d="M745.0,150 V186 H115.0 V150" fill="none" stroke="var(--sv-ex-critical,#b3261e)" strokeWidth="1.4" strokeDasharray="5 4" markerEnd="url(#ar)"/>
<rect x="370.0" y="178" width="150" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="445.0" y="190" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-critical,#b3261e)" }}>emergency fix, re-imported</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: agreeing transport governance or explaining why a fix cannot ship today.
      </div>
    </SlideFrame>
  );
}
