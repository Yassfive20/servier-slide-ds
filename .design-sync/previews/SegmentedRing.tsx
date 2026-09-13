import React from "react";
import { SegmentedRing } from "servier-slide-ds";

export function HalfWithLegend() {
  return (
    <SegmentedRing
      mode="half"
      showLegend
      segments={[
        { label: "Oncology", value: 38, color: "var(--sv-orange)" },
        { label: "Cardiometabolic", value: 27, color: "var(--sv-cyan)" },
        { label: "Neurology", value: 20, color: "var(--sv-violet)" },
        { label: "Immunology", value: 15, color: "var(--sv-jaune)" },
      ]}
    />
  );
}

export function FullDonutCompetitive() {
  return (
    <SegmentedRing
      mode="full"
      showLegend
      segments={[
        { label: "Our therapy", value: 34, color: "var(--sv-orange)" },
        { label: "Competitor A", value: 29, color: "var(--sv-violet)" },
        { label: "Competitor B", value: 22, color: "var(--sv-cyan)" },
        { label: "Other entrants", value: 15, color: "var(--sv-jaune)" },
      ]}
    />
  );
}

export function HalfNoLegend() {
  return (
    <SegmentedRing
      mode="half"
      showLegend={false}
      segments={[
        { label: "Approved", value: 55, color: "var(--sv-cyan)" },
        { label: "Under review", value: 30, color: "var(--sv-orange)" },
        { label: "Pending filing", value: 15, color: "var(--sv-violet)" },
      ]}
    />
  );
}
