import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

/** Heading + N plain-text columns (2 or 3), each optionally led by an icon (see ColumnItem for icon variant). */
export function TwoColumnTextSlide({
  eyebrow,
  title,
  columns,
  pageNumber,
}: {
  eyebrow: string;
  title: string;
  columns: string[];
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 68, top: 190, right: 68, bottom: 80, display: "flex", gap: 48 }}>
        {columns.map((c, i) => (
          <p key={i} style={{ flex: 1, margin: 0, fontFamily: "var(--sv-font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--sv-bleu-nuit)" }}>
            {c}
          </p>
        ))}
      </div>
    </SlideFrame>
  );
}
