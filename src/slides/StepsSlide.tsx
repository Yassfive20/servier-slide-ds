import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";
import { SmileBadge } from "../primitives/Smile";

export interface Step {
  label: React.ReactNode;
  caption: string;
}

/** Heading + intro + a row of numbered smile-badge steps (2-5), each with a caption. */
export function StepsSlide({
  eyebrow,
  title,
  intro,
  steps,
  panelBg = "var(--sv-beige)",
  pageNumber,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  steps: Step[];
  panelBg?: string;
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} intro={intro} />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 260, bottom: 0, background: panelBg }}>
        <div style={{ position: "absolute", left: 68, right: 68, top: 60, display: "flex", justifyContent: "space-between" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ width: `${100 / steps.length - 2}%`, textAlign: "center" }}>
              <SmileBadge size={90} thickness={16} color="var(--sv-orange)">
                {s.label}
              </SmileBadge>
              <div style={{ marginTop: 14, fontFamily: "var(--sv-font-body)", fontSize: 14, color: "var(--sv-bleu-nuit)", lineHeight: 1.5 }}>{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
