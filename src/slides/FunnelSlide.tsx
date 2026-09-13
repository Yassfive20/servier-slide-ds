import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

export interface FunnelStage {
  label: string;
  value: string;
}

const FUNNEL_COLORS = ["var(--sv-bleu-nuit)", "var(--sv-bleu-descendu)", "var(--sv-cyan)", "var(--sv-bleu-clair)"];

/** Vertical funnel: stages shrink in width top to bottom, each with a value label. */
export function FunnelSlide({
  eyebrow = "Funnel",
  title,
  stages,
  pageNumber,
}: {
  eyebrow?: string;
  title: string;
  stages: FunnelStage[];
  pageNumber?: number;
}) {
  const maxW = 760;
  const minW = 260;
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: "50%", top: 190, transform: "translateX(-50%)", display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
        {stages.map((s, i) => {
          const w = maxW - ((maxW - minW) * i) / Math.max(stages.length - 1, 1);
          return (
            <div
              key={i}
              style={{
                width: w,
                background: FUNNEL_COLORS[i % FUNNEL_COLORS.length],
                color: "#fff",
                textAlign: "center",
                padding: "12px 10px",
                boxSizing: "border-box",
                fontFamily: "var(--sv-font-body)",
                fontSize: 14,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700 }}>{s.label}</span>
              <span>{s.value}</span>
            </div>
          );
        })}
      </div>
    </SlideFrame>
  );
}
