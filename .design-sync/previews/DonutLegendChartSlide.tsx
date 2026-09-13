import React from "react";
import { DonutLegendChartSlide } from "servier-slide-ds";

export function QuarterlyRevenueMix() {
  return (
    <DonutLegendChartSlide
      eyebrow="Financial review"
      title="Q4 revenue by geography"
      intro="Net sales distribution across regions, current quarter."
      segments={[
        { label: "Europe", value: 41, color: "var(--sv-bleu-nuit)" },
        { label: "North America", value: 32, color: "var(--sv-orange)" },
        { label: "Asia-Pacific", value: 18, color: "var(--sv-cyan)" },
        { label: "Rest of world", value: 9, color: "var(--sv-jaune)" },
      ]}
      pageNumber={15}
    />
  );
}

export function PatientPopulationByStage() {
  return (
    <DonutLegendChartSlide
      eyebrow="Epidemiology"
      title="Diagnosed patients by disease stage"
      segments={[
        { label: "Early stage", value: 35, color: "var(--sv-vert)" },
        { label: "Moderate stage", value: 40, color: "var(--sv-cyan)" },
        { label: "Advanced stage", value: 25, color: "var(--sv-violet)" },
      ]}
    />
  );
}
