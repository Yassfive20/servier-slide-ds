import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

export interface ComparisonCard {
  title: string;
  items: string[];
  highlighted?: boolean;
}

/** 2-3 side-by-side option/competitor cards, one optionally highlighted (navy fill). */
export function ComparisonSlide({
  eyebrow = "Comparison",
  title,
  cards,
  pageNumber,
}: {
  eyebrow?: string;
  title: string;
  cards: ComparisonCard[];
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 68, top: 190, right: 68, bottom: 60, display: "flex", gap: 20 }}>
        {cards.map((c, i) => {
          const hi = !!c.highlighted;
          return (
            <div key={i} style={{ flex: 1, background: hi ? "var(--sv-bleu-nuit)" : "var(--sv-grey-light)", padding: 24, boxSizing: "border-box" }}>
              <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 17, color: hi ? "#fff" : "var(--sv-orange)", marginBottom: 14 }}>{c.title}</div>
              <ul style={{ margin: 0, paddingLeft: 18, fontFamily: "var(--sv-font-body)", fontSize: 14, lineHeight: 1.8, color: hi ? "#fff" : "var(--sv-bleu-nuit)" }}>
                {c.items.map((it, k) => (
                  <li key={k}>{it}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SlideFrame>
  );
}
