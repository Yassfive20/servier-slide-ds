import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";
import { SmileBadge } from "../primitives/Smile";

export interface KeyFigure {
  value: React.ReactNode;
  caption: string;
}

/** Heading + intro + a row of big smile-framed key figures ("1er", "5M", "+21", ...). */
export function KeyFiguresSlide({
  eyebrow,
  title,
  intro,
  figures,
  pageNumber,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  figures: KeyFigure[];
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} intro={intro} />
      </div>
      <div style={{ position: "absolute", left: 68, right: 68, top: 300, display: "flex", justifyContent: "space-around" }}>
        {figures.map((f, i) => (
          <div key={i} style={{ textAlign: "center", width: 220 }}>
            <SmileBadge size={110} thickness={18} color="var(--sv-orange)">
              <span style={{ fontSize: 30 }}>{f.value}</span>
            </SmileBadge>
            <div style={{ marginTop: 16, fontFamily: "var(--sv-font-body)", fontSize: 14, color: "var(--sv-bleu-nuit)", lineHeight: 1.5 }}>{f.caption}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
