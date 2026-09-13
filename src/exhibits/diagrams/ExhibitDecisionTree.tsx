import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Makes a policy arguable. */
export function ExhibitDecisionTree() {
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
        Four outcomes, one decision rule
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 405 }}>
        <svg viewBox="0 0 880 330" width={1080} height={405} role="img"
             aria-label="Four outcomes, one decision rule">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<path d="M85.0,128 L160,166.0 L85.0,204 L10,166.0 Z" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-warning,#b8860b)" strokeWidth="2"/>
<text x="85.0" y="163.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Standard</text>
<text x="85.0" y="176.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>covers it?</text>
<path d="M325.0,40 L400,78.0 L325.0,116 L250,78.0 Z" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-warning,#b8860b)" strokeWidth="2"/>
<text x="325.0" y="82.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Config only?</text>
<path d="M325.0,216 L400,254.0 L325.0,292 L250,254.0 Z" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-warning,#b8860b)" strokeWidth="2"/>
<text x="325.0" y="251.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Process can</text>
<text x="325.0" y="264.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>change?</text>
<rect x="500" y="8" width="176" height="44" rx="22" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="588" y="35" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s1,#f55b41)", fontWeight: "600" }}>Fit — document</text>
<rect x="500" y="96" width="176" height="44" rx="22" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="588" y="123" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s1,#f55b41)", fontWeight: "600" }}>Config item</text>
<rect x="500" y="184" width="176" height="44" rx="22" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<text x="588" y="211" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s1,#f55b41)", fontWeight: "600" }}>Change process</text>
<rect x="500" y="262" width="176" height="44" rx="22" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s2,#47bfd9)" strokeWidth="2"/>
<text x="588" y="289" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--dv-s2,#47bfd9)", fontWeight: "600" }}>WRICEF — build</text>
<path d="M160,166 H205.0 V78 H246" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#ar)"/>
<rect x="189.0" y="114.0" width="32" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="205.0" y="126.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>yes</text>
<path d="M160,166 H205.0 V254 H246" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#ar)"/>
<rect x="189.0" y="202.0" width="32" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="205.0" y="214.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>no</text>
<path d="M400,78 H450.0 V30 H496" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#ar)"/>
<rect x="434.0" y="46.0" width="32" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="450.0" y="58.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>no config</text>
<path d="M400,78 H450.0 V118 H496" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#ar)"/>
<rect x="434.0" y="90.0" width="32" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="450.0" y="102.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>yes</text>
<path d="M400,254 H450.0 V206 H496" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#ar)"/>
<rect x="434.0" y="222.0" width="32" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="450.0" y="234.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>yes</text>
<path d="M400,254 H450.0 V284 H496" fill="none" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.3" markerEnd="url(#ar)"/>
<rect x="434.0" y="261.0" width="32" height="16" rx="3" fill="var(--sv-ex-surface,#ffffff)"/>
<text x="450.0" y="273.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "9.5px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>no</text>
<text x="0" y="318" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Every branch is labelled and every path terminates in a named outcome</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: agreeing a rule that will be applied many times — fit-gap classification, escalation thresholds, exception handling.
      </div>
    </SlideFrame>
  );
}
