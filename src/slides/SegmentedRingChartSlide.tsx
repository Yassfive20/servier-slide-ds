import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";
import { SegmentedRing, RingSegment } from "../primitives/RingChart";

/** The Servier "camembert stylisé" — a half-ring donut chart with proportional colored wedges. */
export function SegmentedRingChartSlide({
  eyebrow,
  title,
  intro,
  segments,
  pageNumber,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  segments: RingSegment[];
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} intro={intro} />
      </div>
      <div style={{ position: "absolute", left: 130, top: 280 }}>
        <SegmentedRing segments={segments} mode="half" size={420} />
      </div>
    </SlideFrame>
  );
}
