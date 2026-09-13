import React from "react";
import { DocumentTitleSlide } from "servier-slide-ds";

export function Default() {
  return (
    <DocumentTitleSlide
      title="Regulatory pathway assessment"
      subtitle="A market access readiness report for the Q3 board review"
      imageUrl="https://picsum.photos/id/1025/900/900"
    />
  );
}

export function NoImage() {
  return (
    <DocumentTitleSlide
      title="Competitive landscape brief"
      subtitle="Second-line therapy, EU5 markets"
    />
  );
}
