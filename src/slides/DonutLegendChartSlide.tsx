import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";
import { SegmentedRing, RingSegment } from "../primitives/RingChart";

/** Full donut chart with a side legend — quarterly / categorical breakdowns. */
export function DonutLegendChartSlide({
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
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} intro={intro} />
      </div>
      <div style={{ position: "absolute", left: 68, top: 260 }}>
        <SegmentedRing segments={segments} mode="full" size={340} showLabels={false} showLegend />
      </div>
    </SlideFrame>
  );
}
