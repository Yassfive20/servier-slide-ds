import React from "react";
import { SectionDividerSlide } from "servier-slide-ds";

export function PartOne() {
  return (
    <SectionDividerSlide
      partLabel="Part 1"
      subtitle="Market context and competitive landscape"
      tag="MARKET ACCESS"
      pageNumber={2}
    />
  );
}

export function PartTwo() {
  return (
    <SectionDividerSlide
      partLabel="Part 2"
      subtitle="Clinical evidence and regulatory pathway"
      tag="EVIDENCE"
      pageNumber={9}
    />
  );
}

export function PartThree() {
  return (
    <SectionDividerSlide
      partLabel="Part 3"
      subtitle="Launch readiness and recommendations"
      tag="LAUNCH"
      accentColor="var(--sv-orange)"
      panelColor="var(--sv-bleu-nuit)"
      pageNumber={17}
    />
  );
}
