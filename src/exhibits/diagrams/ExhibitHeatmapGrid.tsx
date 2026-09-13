import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Magnitude gets one hue from light to dark — never a red-amber-green rainbow, which reads as four unrelated categories and fails for colour-blind viewers. */
export function ExhibitHeatmapGrid() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Analysis
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Nantes is behind on every module
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 384 }}>
        <svg viewBox="0 0 860 306" width={1080} height={384} role="img"
             aria-label="Nantes is behind on every module">

<text x="180.8" y="44" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>Inbound</text>
<text x="302.5" y="44" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>Storage</text>
<text x="424.2" y="44" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>Outbound</text>
<text x="545.8" y="44" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>Phys. inv.</text>
<text x="667.5" y="44" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>Integration</text>
<text x="789.2" y="44" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "650" }}>Reporting</text>
<text x="106" y="84.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Lyon</text>
<rect x="121.0" y="59" width="119.7" height="42" fill="var(--sv-ex-seq-500,#323c8e)"/>
<text x="180.8" y="84.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "650" }}>4</text>
<rect x="242.7" y="59" width="119.7" height="42" fill="var(--sv-ex-seq-500,#323c8e)"/>
<text x="302.5" y="84.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "650" }}>4</text>
<rect x="364.3" y="59" width="119.7" height="42" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="424.2" y="84.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3</text>
<rect x="486.0" y="59" width="119.7" height="42" fill="var(--sv-ex-seq-500,#323c8e)"/>
<text x="545.8" y="84.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "650" }}>4</text>
<rect x="607.7" y="59" width="119.7" height="42" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="667.5" y="84.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3</text>
<rect x="729.3" y="59" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="789.2" y="84.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<text x="106" y="128.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Rouen</text>
<rect x="121.0" y="103" width="119.7" height="42" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="180.8" y="128.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3</text>
<rect x="242.7" y="103" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="302.5" y="128.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<rect x="364.3" y="103" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="424.2" y="128.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<rect x="486.0" y="103" width="119.7" height="42" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="545.8" y="128.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3</text>
<rect x="607.7" y="103" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="667.5" y="128.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<rect x="729.3" y="103" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="789.2" y="128.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<text x="106" y="172.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Lille</text>
<rect x="121.0" y="147" width="119.7" height="42" fill="var(--sv-ex-seq-500,#323c8e)"/>
<text x="180.8" y="172.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "650" }}>4</text>
<rect x="242.7" y="147" width="119.7" height="42" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="302.5" y="172.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3</text>
<rect x="364.3" y="147" width="119.7" height="42" fill="var(--sv-ex-seq-500,#323c8e)"/>
<text x="424.2" y="172.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "650" }}>4</text>
<rect x="486.0" y="147" width="119.7" height="42" fill="var(--sv-ex-seq-500,#323c8e)"/>
<text x="545.8" y="172.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-blanc,#ffffff)", fontWeight: "650" }}>4</text>
<rect x="607.7" y="147" width="119.7" height="42" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="667.5" y="172.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3</text>
<rect x="729.3" y="147" width="119.7" height="42" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="789.2" y="172.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3</text>
<text x="106" y="216.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Nantes</text>
<rect x="121.0" y="191" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="180.8" y="216.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<rect x="242.7" y="191" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="302.5" y="216.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<rect x="364.3" y="191" width="119.7" height="42" fill="var(--sv-ex-seq-100,#f3f7fd)"/>
<text x="424.2" y="216.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>1</text>
<rect x="486.0" y="191" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="545.8" y="216.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<rect x="607.7" y="191" width="119.7" height="42" fill="var(--sv-ex-seq-100,#f3f7fd)"/>
<text x="667.5" y="216.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>1</text>
<rect x="729.3" y="191" width="119.7" height="42" fill="var(--sv-ex-seq-100,#f3f7fd)"/>
<text x="789.2" y="216.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>1</text>
<text x="106" y="260.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Toulouse</text>
<rect x="121.0" y="235" width="119.7" height="42" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="180.8" y="260.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3</text>
<rect x="242.7" y="235" width="119.7" height="42" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="302.5" y="260.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3</text>
<rect x="364.3" y="235" width="119.7" height="42" fill="var(--sv-ex-seq-400,#727aab)"/>
<text x="424.2" y="260.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>3</text>
<rect x="486.0" y="235" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="545.8" y="260.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<rect x="607.7" y="235" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="667.5" y="260.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<rect x="729.3" y="235" width="119.7" height="42" fill="var(--sv-ex-seq-200,#b6c0da)"/>
<text x="789.2" y="260.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>2</text>
<text x="120" y="300" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>1 not started · 2 in progress · 3 designed · 4 tested — one hue, darker is further along</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: the same measure repeats across two dimensions. Cap the scale at four or five steps — more and adjacent shades stop being distinguishable.
      </div>
    </SlideFrame>
  );
}
