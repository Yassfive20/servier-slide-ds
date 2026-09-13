import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SmileQuarter } from "../primitives/Smile";

/** Chapter/section break: "PART N" over a quarter-smile, with a small subtitle. */
export function SectionDividerSlide({
  partLabel,
  subtitle,
  tag,
  accentColor = "var(--sv-bleu-nuit)",
  panelColor = "var(--sv-bleu-clair)",
  pageNumber,
}: {
  partLabel: React.ReactNode;
  subtitle?: React.ReactNode;
  tag?: string;
  accentColor?: string;
  panelColor?: string;
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 70, top: 60, width: 296, height: 600, background: panelColor }} />
      <SmileQuarter corner="bottom-left" color={accentColor} size={760} thickness={90} />
      <div style={{ position: "absolute", left: 240, top: 330, width: 600 }}>
        <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 400, fontSize: 44, color: accentColor }}>{partLabel}</div>
        {subtitle && <div style={{ marginTop: 8, fontFamily: "var(--sv-font-body)", fontSize: 20, color: "var(--sv-orange)" }}>{subtitle}</div>}
      </div>
      {tag && (
        <div style={{ position: "absolute", left: 900, top: 358, fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 13, color: accentColor }}>{tag}</div>
      )}
    </SlideFrame>
  );
}
