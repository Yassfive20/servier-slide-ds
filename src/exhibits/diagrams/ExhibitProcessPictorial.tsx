import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The same structure as the linear flow, but drawn for people who work on the floor rather than in the system. */
export function ExhibitProcessPictorial() {
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
        Six steps from gate to bin
      </div>

      <div style={{ position: "absolute", left: 100, top: 206, width: 1080, height: 258 }}>
        <svg viewBox="0 0 880 210" width={1080} height={258} role="img"
             aria-label="Six steps from gate to bin">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="0.0" y="20" width="130.0" height="130" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s1,#f55b41)" strokeWidth="2"/>
<g transform="translate(44.0,40.0) scale(1.7500)" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="0.91" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="6.5" width="13" height="10" rx="0.8"/>
      <path d="M14.5,16.5 V9.5 H18.5 L22,13.5 V16.5 Z"/>
      <circle cx="6" cy="18.5" r="2.2"/><circle cx="18" cy="18.5" r="2.2"/>
      <path d="M1.5,18.5 H3.8 M8.2,18.5 H15.8"/></g>
<text x="65.0" y="104" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Arrive</text>
<text x="65.0" y="122" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>carrier books slot</text>
<circle cx="16.0" cy="34" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="16.0" y="38" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>1</text>
<rect x="150.0" y="20" width="130.0" height="130" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(194.0,40.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.91" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4,3.5 H7"/><path d="M5.5,3.5 V13"/>
      <path d="M5.5,13 H20"/><path d="M8,16.5 H20"/>
      <path d="M8,13 V16.5"/>
      <circle cx="6" cy="19" r="1.7"/><circle cx="19" cy="18.8" r="1.5"/></g>
<text x="215.0" y="104" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Unload</text>
<text x="215.0" y="122" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>dock scan</text>
<circle cx="166.0" cy="34" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="166.0" y="38" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>2</text>
<path d="M131.0,85 H146.0" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<rect x="300.0" y="20" width="130.0" height="130" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(344.0,40.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.91" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.5" cy="10.5" r="6.5"/>
      <path d="M15.2,15.2 L21,21"/>
      <path d="M8,10.5 L10,12.5 L13.5,8.5"/></g>
<text x="365.0" y="104" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Check</text>
<text x="365.0" y="122" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>QM sample</text>
<circle cx="316.0" cy="34" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="316.0" y="38" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>3</text>
<path d="M281.0,85 H296.0" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<rect x="450.0" y="20" width="130.0" height="130" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(494.0,40.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.91" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="9" width="19" height="7" rx="1"/>
      <path d="M6,9 V4 H18 V9"/>
      <rect x="6" y="16" width="12" height="5.5" rx="0.6"/>
      <path d="M8.5,18.5 H15.5"/>
      <circle cx="18" cy="12.5" r="0.9"/></g>
<text x="515.0" y="104" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Label</text>
<text x="515.0" y="122" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>HU created</text>
<circle cx="466.0" cy="34" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="466.0" y="38" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>4</text>
<path d="M431.0,85 H446.0" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<rect x="600.0" y="20" width="130.0" height="130" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(644.0,40.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.91" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="10" width="8" height="6.5" rx="1"/>
      <path d="M13,2.5 V17"/><path d="M16.5,5 V17"/>
      <path d="M13,12 H21"/>
      <circle cx="5.5" cy="19" r="2.2"/><circle cx="14.5" cy="19.2" r="1.7"/></g>
<text x="665.0" y="104" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Put away</text>
<text x="665.0" y="122" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>RF-directed</text>
<circle cx="616.0" cy="34" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="616.0" y="38" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>5</text>
<path d="M581.0,85 H596.0" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<rect x="750.0" y="20" width="130.0" height="130" rx="6" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(794.0,40.0) scale(1.7500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.91" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<text x="815.0" y="104" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "12.5px", fill: "var(--sv-ex-ink,#24226a)", fontWeight: "650" }}>Store</text>
<text x="815.0" y="122" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>bin confirmed</text>
<circle cx="766.0" cy="34" r="10" fill="var(--dv-s1,#f55b41)"/>
<text x="766.0" y="38" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "#ffffff", fontWeight: "700" }}>6</text>
<path d="M731.0,85 H746.0" stroke="var(--sv-ex-connector,#8f8ea6)" strokeWidth="1.6" markerEnd="url(#ar)"/>
<text x="0" y="182" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>The icon carries the noun; the caption carries the system step</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: the audience is operational — key users, supervisors, training material. For a design authority, the plain linear flow is the better register.
      </div>
    </SlideFrame>
  );
}
