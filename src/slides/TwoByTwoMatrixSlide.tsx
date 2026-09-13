import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

export interface MatrixQuadrant {
  label: string;
  items: string[];
  color?: string;
}

/** Generic 2x2 matrix (priority/impact-effort/SWOT-style) with labeled axes. */
export function TwoByTwoMatrixSlide({
  eyebrow = "Matrix",
  title,
  xAxis,
  yAxis,
  quadrants,
  pageNumber,
}: {
  eyebrow?: string;
  title: string;
  xAxis: [string, string];
  yAxis: [string, string];
  /** [top-left, top-right, bottom-left, bottom-right] */
  quadrants: [MatrixQuadrant, MatrixQuadrant, MatrixQuadrant, MatrixQuadrant];
  pageNumber?: number;
}) {
  const defaultColors = ["var(--sv-bleu-clair)", "var(--sv-vert)", "var(--sv-jaune)", "var(--sv-orange)"];
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 140, top: 200, right: 68, bottom: 90 }}>
        <div style={{ position: "absolute", left: -30, top: 0, bottom: 40, display: "flex", alignItems: "center" }}>
          <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 13, color: "var(--sv-bleu-nuit)" }}>
            {yAxis[1]} &uarr; {yAxis[0]}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 12, height: "100%" }}>
          {quadrants.map((q, i) => (
            <div key={i} style={{ background: q.color ?? defaultColors[i], padding: 18, boxSizing: "border-box" }}>
              <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 14, color: "var(--sv-bleu-nuit)", marginBottom: 8 }}>{q.label}</div>
              <ul style={{ margin: 0, paddingLeft: 16, fontFamily: "var(--sv-font-body)", fontSize: 13, color: "var(--sv-bleu-nuit)", lineHeight: 1.6 }}>
                {q.items.map((it, k) => (
                  <li key={k}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 10, fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 13, color: "var(--sv-bleu-nuit)" }}>
          {xAxis[0]} &rarr; {xAxis[1]}
        </div>
      </div>
    </SlideFrame>
  );
}
