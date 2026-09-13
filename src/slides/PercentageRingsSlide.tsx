import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";
import { PercentageRing } from "../primitives/RingChart";

export interface PercentageStat {
  value: number;
  caption: string;
}

/** Heading + a row of half-ring percentage stats on a tinted panel. */
export function PercentageRingsSlide({
  eyebrow,
  title,
  intro,
  stats,
  panelBg = "var(--sv-bleu-clair)",
  ringColor = "var(--sv-bleu-nuit)",
  pageNumber,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  stats: PercentageStat[];
  panelBg?: string;
  ringColor?: string;
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, background: panelBg }} />
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} intro={intro} />
      </div>
      <div style={{ position: "absolute", left: 68, right: 68, top: 300, display: "flex", justifyContent: "space-around" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center", width: 220 }}>
            <PercentageRing value={s.value} mode="half" color={ringColor} track="#fff" size={180} label={`${s.value}%`} />
            <div style={{ marginTop: 8, fontFamily: "var(--sv-font-body)", fontSize: 14, color: "var(--sv-bleu-nuit)", lineHeight: 1.5 }}>{s.caption}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
