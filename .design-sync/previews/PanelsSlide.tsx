import React from "react";
import { PanelsSlide } from "servier-slide-ds";

export function LaunchWorkstreams() {
  return (
    <PanelsSlide
      eyebrow="Launch plan"
      title="Three workstreams to readiness"
      topBar="Market access program"
      panels={[
        { title: "Regulatory", body: "Complete filing across priority markets and secure conditional approvals ahead of launch." },
        { title: "Market access", body: "Build the payer value dossier and negotiate reimbursement terms in the top five markets." },
        { title: "Commercial", body: "Train field teams and align messaging with the approved label and access conditions." },
      ]}
      pageNumber={7}
    />
  );
}

export function RiskFactors() {
  return (
    <PanelsSlide
      eyebrow="Risk assessment"
      title="Key risks to the launch timeline"
      panels={[
        { title: "Regulatory delay", body: "HTA review extended by six weeks in two priority markets." },
        { title: "Competitive entry", body: "A rival asset may reach the market ahead of us in oncology." },
        { title: "Pricing pressure", body: "Reference pricing could compress net price by up to 15%." },
        { title: "Supply readiness", body: "Manufacturing scale-up needs validation before national rollout." },
      ]}
      bottomBar="Mitigation plan reviewed quarterly"
      panelBg="var(--sv-bleu-clair)"
    />
  );
}
