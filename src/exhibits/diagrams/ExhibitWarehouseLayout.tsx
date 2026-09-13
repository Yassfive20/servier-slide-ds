import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** The slide that ends an hour of arguing about slotting. */
export function ExhibitWarehouseLayout() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        Operations
      </div>

      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        Four aisles, three inbound doors, one cold zone
      </div>

      <div style={{ position: "absolute", left: 216, top: 206, width: 848, height: 424 }}>
        <svg viewBox="0 0 880 440" width={848} height={424} role="img"
             aria-label="Four aisles, three inbound doors, one cold zone">

<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="var(--sv-ex-connector,#8f8ea6)"/></marker></defs>
<rect x="118" y="22" width="752" height="320" rx="6" fill="var(--sv-ex-lane,#f3f7fd)" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="2"/>
<rect x="112" y="62" width="12" height="56" rx="1" fill="var(--dv-s1,#f55b41)"/>
<g transform="translate(24.0,72.0) scale(1.8333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.82" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="6.5" width="13" height="10" rx="0.8"/>
      <path d="M14.5,16.5 V9.5 H18.5 L22,13.5 V16.5 Z"/>
      <circle cx="6" cy="18.5" r="2.2"/><circle cx="18" cy="18.5" r="2.2"/>
      <path d="M1.5,18.5 H3.8 M8.2,18.5 H15.8"/></g>
<text x="46" y="128" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "650" }}>D1</text>
<rect x="112" y="154" width="12" height="56" rx="1" fill="var(--dv-s1,#f55b41)"/>
<g transform="translate(24.0,164.0) scale(1.8333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.82" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="6.5" width="13" height="10" rx="0.8"/>
      <path d="M14.5,16.5 V9.5 H18.5 L22,13.5 V16.5 Z"/>
      <circle cx="6" cy="18.5" r="2.2"/><circle cx="18" cy="18.5" r="2.2"/>
      <path d="M1.5,18.5 H3.8 M8.2,18.5 H15.8"/></g>
<text x="46" y="220" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "650" }}>D2</text>
<rect x="112" y="246" width="12" height="56" rx="1" fill="var(--dv-s1,#f55b41)"/>
<g transform="translate(24.0,256.0) scale(1.8333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="0.82" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="6.5" width="13" height="10" rx="0.8"/>
      <path d="M14.5,16.5 V9.5 H18.5 L22,13.5 V16.5 Z"/>
      <circle cx="6" cy="18.5" r="2.2"/><circle cx="18" cy="18.5" r="2.2"/>
      <path d="M1.5,18.5 H3.8 M8.2,18.5 H15.8"/></g>
<text x="46" y="312" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10px", fill: "var(--sv-ex-muted,#8f8ea6)", fontWeight: "650" }}>D3</text>
<text x="46" y="40" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--dv-s1,#f55b41)", fontWeight: "700" }}>INBOUND YARD</text>
<rect x="144" y="52" width="104" height="260" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1" strokeDasharray="4 3"/>
<text x="196.0" y="70" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>STAGING</text>
<g transform="translate(158.0,88.0) scale(1.5000)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.00" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="8" rx="0.8"/>
      <path d="M12,3 V11"/>
      <rect x="2" y="12.5" width="20" height="2.8" rx="0.6"/>
      <rect x="2" y="19" width="20" height="2.6" rx="0.6"/>
      <path d="M4.5,15.3 V19 M11,15.3 V19 M19.5,15.3 V19"/></g>
<g transform="translate(204.0,88.0) scale(1.5000)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.00" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="8" rx="0.8"/>
      <path d="M12,3 V11"/>
      <rect x="2" y="12.5" width="20" height="2.8" rx="0.6"/>
      <rect x="2" y="19" width="20" height="2.6" rx="0.6"/>
      <path d="M4.5,15.3 V19 M11,15.3 V19 M19.5,15.3 V19"/></g>
<g transform="translate(158.0,162.0) scale(1.5000)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.00" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="8" rx="0.8"/>
      <path d="M12,3 V11"/>
      <rect x="2" y="12.5" width="20" height="2.8" rx="0.6"/>
      <rect x="2" y="19" width="20" height="2.6" rx="0.6"/>
      <path d="M4.5,15.3 V19 M11,15.3 V19 M19.5,15.3 V19"/></g>
<g transform="translate(204.0,162.0) scale(1.5000)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.00" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="8" rx="0.8"/>
      <path d="M12,3 V11"/>
      <rect x="2" y="12.5" width="20" height="2.8" rx="0.6"/>
      <rect x="2" y="19" width="20" height="2.6" rx="0.6"/>
      <path d="M4.5,15.3 V19 M11,15.3 V19 M19.5,15.3 V19"/></g>
<g transform="translate(158.0,236.0) scale(1.5000)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.00" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="8" rx="0.8"/>
      <path d="M12,3 V11"/>
      <rect x="2" y="12.5" width="20" height="2.8" rx="0.6"/>
      <rect x="2" y="19" width="20" height="2.6" rx="0.6"/>
      <path d="M4.5,15.3 V19 M11,15.3 V19 M19.5,15.3 V19"/></g>
<g transform="translate(204.0,236.0) scale(1.5000)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.00" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="8" rx="0.8"/>
      <path d="M12,3 V11"/>
      <rect x="2" y="12.5" width="20" height="2.8" rx="0.6"/>
      <rect x="2" y="19" width="20" height="2.6" rx="0.6"/>
      <path d="M4.5,15.3 V19 M11,15.3 V19 M19.5,15.3 V19"/></g>
<rect x="272" y="52" width="42" height="260" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(277.0,66.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(277.0,130.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(277.0,194.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(277.0,258.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<rect x="344" y="52" width="42" height="260" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(349.0,66.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(349.0,130.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(349.0,194.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(349.0,258.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<path d="M329.0,58 V306" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.3" strokeDasharray="6 5" opacity="0.7"/>
<text x="329.0" y="44" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>A1</text>
<rect x="406" y="52" width="42" height="260" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(411.0,66.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(411.0,130.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(411.0,194.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(411.0,258.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<rect x="478" y="52" width="42" height="260" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(483.0,66.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(483.0,130.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(483.0,194.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(483.0,258.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<path d="M463.0,58 V306" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.3" strokeDasharray="6 5" opacity="0.7"/>
<text x="463.0" y="44" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>A2</text>
<rect x="540" y="52" width="42" height="260" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(545.0,66.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(545.0,130.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(545.0,194.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(545.0,258.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<rect x="612" y="52" width="42" height="260" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(617.0,66.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(617.0,130.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(617.0,194.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(617.0,258.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<path d="M597.0,58 V306" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.3" strokeDasharray="6 5" opacity="0.7"/>
<text x="597.0" y="44" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>A3</text>
<rect x="674" y="52" width="42" height="260" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(679.0,66.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(679.0,130.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(679.0,194.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(679.0,258.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<rect x="746" y="52" width="42" height="260" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(751.0,66.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(751.0,130.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(751.0,194.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<g transform="translate(751.0,258.0) scale(1.3333)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
      <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
      <rect x="4.5" y="5.5" width="5.5" height="4"/>
      <rect x="13.5" y="11.5" width="5.5" height="4"/>
      <rect x="4.5" y="17" width="5.5" height="4"/></g>
<path d="M731.0,58 V306" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.3" strokeDasharray="6 5" opacity="0.7"/>
<text x="731.0" y="44" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>A4</text>
<g transform="translate(317.0,210.0) scale(1.4167)" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="10" width="8" height="6.5" rx="1"/>
      <path d="M13,2.5 V17"/><path d="M16.5,5 V17"/>
      <path d="M13,12 H21"/>
      <circle cx="5.5" cy="19" r="2.2"/><circle cx="14.5" cy="19.2" r="1.7"/></g>
<g transform="translate(583.0,120.0) scale(1.4167)" fill="none" stroke="var(--dv-s1,#f55b41)" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="9" width="9.5" height="7" rx="1"/>
      <path d="M4.5,11 H9.5"/>
      <path d="M14.5,3 V16"/>
      <path d="M14.5,14 H20.5"/>
      <circle cx="6" cy="18.5" r="2.4"/><circle cx="12" cy="19" r="1.8"/></g>
<g transform="translate(426.0,258.0) scale(1.0000)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.50" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5.5" r="3"/>
      <path d="M5.5,21 V17 C5.5,13.4 8.4,11.5 12,11.5 C15.6,11.5 18.5,13.4 18.5,17 V21"/>
      <path d="M9,12.5 L10.5,17 M15,12.5 L13.5,17"/></g>
<rect x="810" y="52" width="38" height="116" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.8"/>
<g transform="translate(811.0,72.0) scale(1.5000)" fill="none" stroke="var(--dv-s2,#47bfd9)" strokeWidth="1.07" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12,3 V21 M4.5,7.5 L19.5,16.5 M19.5,7.5 L4.5,16.5"/>
      <path d="M9.5,5.5 L12,8 L14.5,5.5 M9.5,18.5 L12,16 L14.5,18.5"/>
      <path d="M5,11 L6.5,12 L5,13 M19,11 L17.5,12 L19,13"/></g>
<text x="829.0" y="130" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--dv-s2,#47bfd9)", fontWeight: "700" }}>COLD</text>
<text x="829.0" y="145" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--dv-s2,#47bfd9)", fontWeight: "700" }}>2–8°C</text>
<rect x="810" y="184" width="38" height="128" rx="4" fill="var(--sv-ex-node,#ffffff)" stroke="var(--sv-ex-node-stroke,#d0d0d0)" strokeWidth="1"/>
<g transform="translate(812.0,204.0) scale(1.4167)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.06" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="3" width="12" height="9" rx="0.8"/>
      <path d="M6,5.5 C10,7 14,4 18,5.5 M6,8.5 C10,10 14,7 18,8.5"/>
      <rect x="3" y="13.5" width="18" height="2.6" rx="0.6"/>
      <rect x="3" y="19" width="18" height="2.4" rx="0.6"/>
      <path d="M5.5,16.1 V19 M12,16.1 V19 M18.5,16.1 V19"/></g>
<g transform="translate(814.0,246.0) scale(1.2500)" fill="none" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.20" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="14.5" width="19" height="5.5" rx="1"/>
      <rect x="7.5" y="7" width="9" height="5.5" rx="0.8"/>
      <path d="M12,12.5 V14.5"/>
      <path d="M9.5,9.5 H14.5"/></g>
<text x="829.0" y="300" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)", fontWeight: "700" }}>PACK</text>
<path d="M118,368 H306" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.4"/>
<path d="M118,363 V373 M306,363 V373" stroke="var(--sv-ex-ink-2,#5b5a7f)" strokeWidth="1.4"/>
<text x="212" y="358" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>40 m</text>
<text x="328" y="372" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>Dashed blue = travel path · aisle width 3.2 m (VNA-capable) · drawn to scale</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: discussing layout, aisle width, zone sizing or dock allocation. Keep it to proportion — a plan view that lies about distance is worse than no plan view.
      </div>
    </SlideFrame>
  );
}
