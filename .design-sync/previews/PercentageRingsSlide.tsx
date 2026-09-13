import React from "react";
import { PercentageRingsSlide } from "servier-slide-ds";

export function PayerCoverage() {
  return (
    <PercentageRingsSlide
      eyebrow="Payer landscape"
      title="Coverage across target markets"
      intro="Share of eligible population with confirmed reimbursement pathway."
      stats={[
        { value: 78, caption: "Public payer coverage" },
        { value: 54, caption: "Private payer coverage" },
        { value: 31, caption: "Restricted / step-therapy" },
      ]}
      pageNumber={11}
    />
  );
}

export function TrialProgress() {
  return (
    <PercentageRingsSlide
      eyebrow="Clinical development"
      title="Trial enrollment progress"
      stats={[
        { value: 88, caption: "Sites activated" },
        { value: 63, caption: "Patients enrolled" },
        { value: 40, caption: "Sites reporting data" },
      ]}
      panelBg="var(--sv-beige)"
      ringColor="var(--sv-orange)"
    />
  );
}
