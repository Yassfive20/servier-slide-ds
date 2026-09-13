import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SmileBadge } from "../primitives/Smile";

export interface AgendaSection {
  number: number | string;
  title: string;
  items: string[];
}

/** Summary / agenda grid: numbered sections in a 2-column layout, each with sub-bullets. */
export function AgendaSlide({ heading = "Summary", sections, pageNumber }: { heading?: string; sections: AgendaSection[]; pageNumber?: number }) {
  const cols: AgendaSection[][] = [[], []];
  sections.forEach((s, i) => cols[i % 2].push(s));
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 100, top: 60, fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 32, color: "var(--sv-orange)" }}>
        {heading}
      </div>
      <div style={{ position: "absolute", left: 100, top: 150, right: 100, bottom: 60, display: "flex", gap: 90 }}>
        {cols.map((col, ci) => (
          <div key={ci} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 40 }}>
            {col.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 20 }}>
                <SmileBadge size={64} thickness={12}>{s.number}</SmileBadge>
                <div>
                  <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: "var(--sv-bleu-nuit)", fontSize: 18, marginBottom: 6 }}>{s.title}</div>
                  <ul style={{ margin: 0, paddingLeft: 18, color: "var(--sv-bleu-nuit)", fontFamily: "var(--sv-font-body)", fontSize: 15 }}>
                    {s.items.map((it, k) => (
                      <li key={k}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
