import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** A plain influence/interest grid tells you who matters. */
export function ExhibitStakeholderNetwork() {
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
        Three stakeholders sit in manage-closely, and two of them talk
      </div>

      <div style={{ position: "absolute", left: 293, top: 206, width: 694, height: 424 }}>
        <svg viewBox="0 0 720 440" width={694} height={424} role="img"
             aria-label="Three stakeholders sit in manage-closely, and two of them talk">

<rect x="50" y="10" width="650" height="374" fill="var(--sv-ex-lane,#f3f7fd)"/>
<rect x="375.0" y="10" width="325.0" height="187.0" fill="var(--sv-ex-node,#ffffff)"/>
<line x1="375.0" y1="10" x2="375.0" y2="384" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<line x1="50" y1="197.0" x2="700" y2="197.0" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="688" y="30" textAnchor="end" opacity="0.8" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--dv-s1,#f55b41)", fontWeight: "700" }}>MANAGE CLOSELY</text>
<text x="62" y="30" opacity="0.8" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "700" }}>KEEP INFORMED</text>
<text x="62" y="217.0" opacity="0.8" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "700" }}>MONITOR</text>
<text x="688" y="217.0" textAnchor="end" opacity="0.8" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "700" }}>KEEP SATISFIED</text>
<line x1="583.0" y1="54.9" x2="310.0" y2="39.9" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1" opacity="0.6"/>
<line x1="583.0" y1="54.9" x2="453.0" y2="152.1" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1" opacity="0.6"/>
<line x1="622.0" y1="226.9" x2="277.5" y2="253.1" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1" opacity="0.6"/>
<line x1="310.0" y1="39.9" x2="245.0" y2="92.3" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1" opacity="0.6"/>
<line x1="453.0" y1="152.1" x2="277.5" y2="253.1" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1" opacity="0.6"/>
<line x1="583.0" y1="54.9" x2="518.0" y2="301.7" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1" opacity="0.6"/>
<circle cx="583.0" cy="54.9" r="9" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="569.0" y="58.9" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Ops director</text>
<circle cx="622.0" cy="226.9" r="9" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="608.0" y="230.9" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>CFO</text>
<circle cx="310.0" cy="39.9" r="9" fill="var(--dv-s1,#f55b41)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="324.0" y="43.9" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink,#24226a)" }}>Site managers</text>
<circle cx="453.0" cy="152.1" r="9" fill="var(--sv-ex-quiet,#d0d0d0)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="439.0" y="156.1" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>IT lead</text>
<circle cx="245.0" cy="92.3" r="9" fill="var(--sv-ex-quiet,#d0d0d0)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="259.0" y="96.3" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Warehouse leads</text>
<circle cx="518.0" cy="301.7" r="9" fill="var(--sv-ex-quiet,#d0d0d0)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="504.0" y="305.7" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Works council</text>
<circle cx="277.5" cy="253.1" r="9" fill="var(--sv-ex-quiet,#d0d0d0)" stroke="var(--sv-ex-surface,#ffffff)" strokeWidth="2"/>
<text x="291.5" y="257.1" textAnchor="start" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Finance BP</text>
<text x="375.0" y="432" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "600" }}>Influence →</text>
<text x="14" y="197.0" textAnchor="middle" transform="rotate(-90 14 197.0)" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "600" }}>Interest →</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: planning engagement before a contested decision. Keep the ties to the ones you would actually use.
      </div>
    </SlideFrame>
  );
}
