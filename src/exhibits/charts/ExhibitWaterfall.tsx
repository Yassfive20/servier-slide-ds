import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The benefits-case workhorse. */
export function ExhibitWaterfall() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Exhibit
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Four levers bridge €12.4m to the €16.0m target run-rate
      </div>

      <div style={{ position: "absolute", left: 120, top: 206, width: 1041, height: 424 }}>
        <svg viewBox="0 0 820 334" width={1041} height={424} role="img"
             aria-label="Four levers bridge €12.4m to the €16.0m target run-rate">

<line x1="52" y1="276.0" x2="800" y2="276.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="42.0" y="280.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>0</text>
<line x1="52" y1="195.3" x2="800" y2="195.3" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="42.0" y="199.3" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>6</text>
<line x1="52" y1="114.7" x2="800" y2="114.7" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="42.0" y="118.7" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>12</text>
<line x1="52" y1="34.0" x2="800" y2="34.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<text x="42.0" y="38.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>18</text>
<path d="M84.3,276.0 V113.3 A4,4 0 0 1 88.3,109.3 H140.3 A4,4 0 0 1 144.3,113.3 V276.0 Z" fill="var(--dv-s1,#f55b41)"/>
<text x="114.3" y="101.3" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>12.4</text>
<text x="114.3" y="296.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Current</text>
<text x="114.3" y="310.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>run-rate</text>
<path d="M209.0,109.3 V85.1 A4,4 0 0 1 213.0,81.1 H265.0 A4,4 0 0 1 269.0,85.1 V109.3 Z" fill="var(--sv-ex-good,#1e7d4f)"/>
<text x="239.0" y="73.1" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>+2.1</text>
<line x1="144.3" y1="109.3" x2="209.0" y2="109.3" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="239.0" y="296.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Labour</text>
<text x="239.0" y="310.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>productivity</text>
<path d="M333.7,81.1 V67.6 A4,4 0 0 1 337.7,63.6 H389.7 A4,4 0 0 1 393.7,67.6 V81.1 Z" fill="var(--sv-ex-good,#1e7d4f)"/>
<text x="363.7" y="55.6" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>+1.3</text>
<line x1="269.0" y1="81.1" x2="333.7" y2="81.1" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="363.7" y="296.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Inventory</text>
<text x="363.7" y="310.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>accuracy</text>
<path d="M458.3,63.6 V55.5 A4,4 0 0 1 462.3,51.5 H514.3 A4,4 0 0 1 518.3,55.5 V63.6 Z" fill="var(--sv-ex-good,#1e7d4f)"/>
<text x="488.3" y="43.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>+0.9</text>
<line x1="393.7" y1="63.6" x2="458.3" y2="63.6" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="488.3" y="296.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Transport</text>
<text x="488.3" y="310.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>consolidation</text>
<rect x="583.0" y="51.5" width="60.0" height="9.4" fill="var(--sv-ex-critical,#b3261e)"/>
<text x="613.0" y="43.5" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>−0.7</text>
<line x1="518.3" y1="51.5" x2="583.0" y2="51.5" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="613.0" y="296.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Licence &amp;</text>
<text x="613.0" y="310.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>run cost</text>
<path d="M707.7,276.0 V64.9 A4,4 0 0 1 711.7,60.9 H763.7 A4,4 0 0 1 767.7,64.9 V276.0 Z" fill="var(--dv-s1,#f55b41)"/>
<text x="737.7" y="52.9" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink)", fontWeight: 700 }}>16.0</text>
<line x1="643.0" y1="60.9" x2="707.7" y2="60.9" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="737.7" y="296.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>Target</text>
<text x="737.7" y="310.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2)" }}>run-rate</text>
<line x1="52" y1="276" x2="800" y2="276" stroke="var(--sv-ex-axis,#d0d0d0)" strokeWidth="1"/>
<text x="42.0" y="18.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted)", fontVariantNumeric: "tabular-nums" }}>€m</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: explaining how a total moves from A to B. Connector lines between steps are hairline and recessive — the bars carry the story.
      </div>
    </SlideFrame>
  );
}
