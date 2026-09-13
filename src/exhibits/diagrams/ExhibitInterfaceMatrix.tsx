import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Once a landscape passes about eight interfaces the arrow diagram turns to spaghetti and a matrix reads faster. */
export function ExhibitInterfaceMatrix() {
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
        Nine interfaces, four still to build
      </div>

      <div style={{ position: "absolute", left: 158, top: 206, width: 965, height: 424 }}>
        <svg viewBox="0 0 860 378" width={965} height={424} role="img"
             aria-label="Nine interfaces, four still to build">

<text x="208.3" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>S/4HANA</text>
<text x="325.0" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>SAP TM</text>
<text x="441.7" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Legacy WMS</text>
<text x="558.3" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>MES</text>
<text x="675.0" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Carrier hub</text>
<text x="791.7" y="46.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "10.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>BW/4HANA</text>
<text x="138" y="103.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>S/4HANA</text>
<text x="138" y="149.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>SAP TM</text>
<text x="138" y="195.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Legacy WMS</text>
<text x="138" y="241.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>MES</text>
<text x="138" y="287.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>Carrier hub</text>
<text x="138" y="333.0" textAnchor="end" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11.5px", fill: "var(--sv-ex-ink-2,#5b5a7f)" }}>BW/4HANA</text>
<line x1="150" y1="76.0" x2="850.0" y2="76.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="150.0" y1="76" x2="150.0" y2="352.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="150" y1="122.0" x2="850.0" y2="122.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="266.7" y1="76" x2="266.7" y2="352.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="150" y1="168.0" x2="850.0" y2="168.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="383.3" y1="76" x2="383.3" y2="352.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="150" y1="214.0" x2="850.0" y2="214.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="500.0" y1="76" x2="500.0" y2="352.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="150" y1="260.0" x2="850.0" y2="260.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="616.7" y1="76" x2="616.7" y2="352.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="150" y1="306.0" x2="850.0" y2="306.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="733.3" y1="76" x2="733.3" y2="352.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="150" y1="352.0" x2="850.0" y2="352.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<line x1="850.0" y1="76" x2="850.0" y2="352.0" stroke="var(--sv-ex-grid,#ededed)" strokeWidth="1"/>
<rect x="150.0" y="76.0" width="116.7" height="46" fill="var(--sv-ex-lane,#f3f7fd)"/>
<rect x="266.7" y="122.0" width="116.7" height="46" fill="var(--sv-ex-lane,#f3f7fd)"/>
<rect x="383.3" y="168.0" width="116.7" height="46" fill="var(--sv-ex-lane,#f3f7fd)"/>
<rect x="500.0" y="214.0" width="116.7" height="46" fill="var(--sv-ex-lane,#f3f7fd)"/>
<rect x="616.7" y="260.0" width="116.7" height="46" fill="var(--sv-ex-lane,#f3f7fd)"/>
<rect x="733.3" y="306.0" width="116.7" height="46" fill="var(--sv-ex-lane,#f3f7fd)"/>
<text x="325.0" y="105.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "17px", fill: "var(--dv-s1,#f55b41)" }}>●</text>
<text x="558.3" y="105.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "17px", fill: "var(--sv-ex-warning,#b8860b)" }}>◐</text>
<text x="675.0" y="105.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "17px", fill: "var(--sv-ex-warning,#b8860b)" }}>◐</text>
<text x="791.7" y="105.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "17px", fill: "var(--dv-s1,#f55b41)" }}>●</text>
<text x="675.0" y="151.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "17px", fill: "var(--dv-s1,#f55b41)" }}>●</text>
<text x="208.3" y="197.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "17px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>○</text>
<text x="208.3" y="243.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "17px", fill: "var(--sv-ex-warning,#b8860b)" }}>◐</text>
<text x="325.0" y="289.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "17px", fill: "var(--dv-s1,#f55b41)" }}>●</text>
<text x="208.3" y="335.0" textAnchor="middle" style={{ fontFamily: "var(--sv-font-body)", fontSize: "17px", fill: "var(--dv-s1,#f55b41)" }}>●</text>
<text x="150" y="376" style={{ fontFamily: "var(--sv-font-body)", fontSize: "11px", fill: "var(--sv-ex-muted,#8f8ea6)" }}>● live  ◐ to build  ○ retires with legacy · row sends, column receives</text>

        </svg>
      </div>

      <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                     color: "var(--sv-ex-muted)" }}>
        Use when: the interface count outgrows a landscape diagram, or you need to show build status per interface.
      </div>
    </SlideFrame>
  );
}
