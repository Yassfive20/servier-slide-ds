import React from "react";
import { SegmentedRingChartSlide } from "servier-slide-ds";

export function PayerMixByChannel() {
  return (
    <SegmentedRingChartSlide
      eyebrow="Reimbursement mix"
      title="Coverage by payer channel"
      intro="Share of covered patients by payer type, national scope."
      segments={[
        { label: "Public", value: 24, color: "var(--sv-bleu-nuit)" },
        { label: "Private insurance", value: 31, color: "var(--sv-orange)" },
        { label: "Regional schemes", value: 26, color: "var(--sv-cyan)" },
        { label: "Out-of-pocket", value: 19, color: "var(--sv-jaune)" },
      ]}
      pageNumber={12}
    />
  );
}

export function TherapeuticAreaSplit() {
  return (
    <SegmentedRingChartSlide
      eyebrow="Portfolio"
      title="Pipeline split by therapeutic area"
      segments={[
        { label: "Oncology", value: 38, color: "var(--sv-violet)" },
        { label: "Cardiovascular", value: 24, color: "var(--sv-bleu-nuit)" },
        { label: "Neurology", value: 21, color: "var(--sv-cyan)" },
        { label: "Immunology", value: 17, color: "var(--sv-vert)" },
      ]}
    />
  );
}
