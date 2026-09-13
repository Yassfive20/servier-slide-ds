import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

export interface OrgNode {
  title: string;
  subtitle?: string;
}

/** Simple 2-level org / hierarchy chart: one root box, N child boxes, connecting lines. */
export function OrgChartSlide({
  eyebrow = "Organization",
  title,
  root,
  children,
  pageNumber,
}: {
  eyebrow?: string;
  title: string;
  root: OrgNode;
  children: OrgNode[];
  pageNumber?: number;
}) {
  const boxW = 190;
  const rootTop = 200;
  const childTop = 400;
  const lineTop = rootTop + 64;
  const lineBottom = childTop;

  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: "50%", top: rootTop, transform: "translateX(-50%)", width: boxW, background: "var(--sv-bleu-nuit)", color: "#fff", textAlign: "center", padding: "14px 10px", boxSizing: "border-box" }}>
        <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 14 }}>{root.title}</div>
        {root.subtitle && <div style={{ fontFamily: "var(--sv-font-body)", fontSize: 12, opacity: 0.85 }}>{root.subtitle}</div>}
      </div>

      <svg style={{ position: "absolute", left: 68, right: 68, top: lineTop, height: lineBottom - lineTop, width: `calc(100% - 136px)` }} viewBox={`0 0 1144 ${lineBottom - lineTop}`}>
        <line x1={572} y1={0} x2={572} y2={(lineBottom - lineTop) / 2} stroke="var(--sv-bleu-clair)" strokeWidth={2} />
        <line
          x1={572 - ((children.length - 1) * (1144 / children.length)) / 2}
          y1={(lineBottom - lineTop) / 2}
          x2={572 + ((children.length - 1) * (1144 / children.length)) / 2}
          y2={(lineBottom - lineTop) / 2}
          stroke="var(--sv-bleu-clair)"
          strokeWidth={2}
        />
        {children.map((_, i) => {
          const slot = 1144 / children.length;
          const cx = slot * i + slot / 2;
          return <line key={i} x1={cx} y1={(lineBottom - lineTop) / 2} x2={cx} y2={lineBottom - lineTop} stroke="var(--sv-bleu-clair)" strokeWidth={2} />;
        })}
      </svg>

      <div style={{ position: "absolute", left: 68, right: 68, top: childTop, display: "flex", justifyContent: "space-around" }}>
        {children.map((c, i) => (
          <div key={i} style={{ width: boxW, background: "var(--sv-grey-light)", textAlign: "center", padding: "14px 10px", boxSizing: "border-box" }}>
            <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 13, color: "var(--sv-bleu-nuit)" }}>{c.title}</div>
            {c.subtitle && <div style={{ fontFamily: "var(--sv-font-body)", fontSize: 11, color: "var(--sv-bleu-nuit)" }}>{c.subtitle}</div>}
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
