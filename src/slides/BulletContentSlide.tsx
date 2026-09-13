import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

export interface BulletItem {
  lead: string;
  body?: string;
}

/** Standard content slide: heading + a vertical list of lead-in + description bullets. */
export function BulletContentSlide({
  eyebrow,
  title,
  items,
  pageNumber,
  footerTitle,
}: {
  eyebrow?: string;
  title: string;
  items: BulletItem[];
  pageNumber?: number;
  footerTitle?: string;
}) {
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber} footerTitle={footerTitle}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 68, top: 190, right: 68, bottom: 90, display: "flex", flexDirection: "column", gap: 26, overflow: "auto" }}>
        {items.map((it, i) => (
          <div key={i}>
            <div style={{ fontFamily: "var(--sv-font-body)", fontSize: 18, color: "var(--sv-bleu-nuit)", display: "flex", gap: 10 }}>
              <span>•</span>
              <span style={{ fontWeight: 700 }}>{it.lead}</span>
            </div>
            {it.body && <div style={{ marginLeft: 20, marginTop: 4, fontFamily: "var(--sv-font-body)", fontSize: 14, color: "var(--sv-bleu-nuit)", lineHeight: 1.5 }}>{it.body}</div>}
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
