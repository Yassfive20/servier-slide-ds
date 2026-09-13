import React from "react";
import { StepsSlide } from "servier-slide-ds";

export function LaunchReadiness() {
  return (
    <StepsSlide
      eyebrow="Launch readiness"
      title="Path to market access"
      intro="Four gated milestones from filing to national reimbursement."
      steps={[
        { label: "1", caption: "Regulatory filing" },
        { label: "2", caption: "HTA dossier submission" },
        { label: "3", caption: "Pricing negotiation" },
        { label: "4", caption: "National rollout" },
      ]}
      pageNumber={5}
    />
  );
}

export function EvidenceGeneration() {
  return (
    <StepsSlide
      eyebrow="Clinical evidence"
      title="Building the evidence package"
      steps={[
        { label: "1", caption: "Phase III readout" },
        { label: "2", caption: "Real-world evidence collection" },
        { label: "3", caption: "Payer value dossier" },
      ]}
      panelBg="var(--sv-bleu-clair)"
    />
  );
}
