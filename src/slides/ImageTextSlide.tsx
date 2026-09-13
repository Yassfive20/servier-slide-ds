import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

/** Full-height photo on the left, heading + body paragraphs on the right. */
export function ImageTextSlide({
  eyebrow,
  title,
  paragraphs,
  imageUrl,
  pageNumber,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  imageUrl: string;
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 60, bottom: 60, width: 440, backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", left: 560, top: 60, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 14 }}>
          {paragraphs.map((p, i) => (
            <p key={i} style={{ margin: 0, fontFamily: "var(--sv-font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--sv-bleu-nuit)" }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
