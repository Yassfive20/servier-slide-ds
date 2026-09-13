import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

/** Challenge / Approach / Result structure — the standard consulting case-study slide. */
export function CaseStudySlide({
  eyebrow = "Case study",
  title,
  challenge,
  approach,
  result,
  imageUrl,
  pageNumber,
}: {
  eyebrow?: string;
  title: string;
  challenge: string;
  approach: string;
  result: string;
  imageUrl?: string;
  pageNumber?: number;
}) {
  const blocks = [
    { label: "Challenge", text: challenge, bg: "var(--sv-grey-light)" },
    { label: "Approach", text: approach, bg: "var(--sv-bleu-clair)" },
    { label: "Result", text: result, bg: "var(--sv-bleu-nuit)", dark: true },
  ];
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      {imageUrl && <div style={{ position: "absolute", left: 68, top: 190, width: 220, height: 320, backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }} />}
      <div style={{ position: "absolute", left: imageUrl ? 320 : 68, right: 68, top: 190, display: "flex", flexDirection: "column", gap: 14 }}>
        {blocks.map((b, i) => (
          <div key={i} style={{ background: b.bg, padding: 18, boxSizing: "border-box" }}>
            <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 13, color: b.dark ? "var(--sv-orange)" : "var(--sv-orange)", marginBottom: 6 }}>{b.label}</div>
            <div style={{ fontFamily: "var(--sv-font-body)", fontSize: 14, lineHeight: 1.5, color: b.dark ? "#fff" : "var(--sv-bleu-nuit)" }}>{b.text}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
