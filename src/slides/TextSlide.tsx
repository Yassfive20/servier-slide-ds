import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

/** Plain text slide: eyebrow+title heading, then one or more body paragraphs. */
export function TextSlide({
  eyebrow,
  title,
  paragraphs,
  pageNumber,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, width: 380 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 480, top: 60, right: 68, display: "flex", flexDirection: "column", gap: 14 }}>
        {paragraphs.map((p, i) => (
          <p key={i} style={{ margin: 0, fontFamily: "var(--sv-font-body)", fontSize: 12, lineHeight: 1.6, color: "var(--sv-bleu-nuit)" }}>
            {p}
          </p>
        ))}
      </div>
    </SlideFrame>
  );
}
