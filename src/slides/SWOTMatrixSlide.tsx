import React from "react";
import { TwoByTwoMatrixSlide } from "./TwoByTwoMatrixSlide";

/** Classic SWOT analysis — a labeled convenience wrapper around TwoByTwoMatrixSlide. */
export function SWOTMatrixSlide({
  title = "SWOT Analysis",
  strengths,
  weaknesses,
  opportunities,
  threats,
  pageNumber,
}: {
  title?: string;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  pageNumber?: number;
}) {
  return (
    <TwoByTwoMatrixSlide
      eyebrow="SWOT"
      title={title}
      xAxis={["Internal", "External"]}
      yAxis={["Helpful", "Harmful"]}
      quadrants={[
        { label: "Strengths", items: strengths, color: "var(--sv-vert)" },
        { label: "Opportunities", items: opportunities, color: "var(--sv-bleu-clair)" },
        { label: "Weaknesses", items: weaknesses, color: "var(--sv-jaune)" },
        { label: "Threats", items: threats, color: "var(--sv-orange)" },
      ]}
      pageNumber={pageNumber}
    />
  );
}
