import React from "react";
import { RadialIconRing, Icon } from "servier-slide-ds";

export function StakeholderEcosystem() {
  return (
    <RadialIconRing
      items={[
        { icon: <Icon name="handsHeart" color="var(--sv-bleu-nuit)" />, label: "Patients", caption: "Access & advocacy" },
        { icon: <Icon name="headCross" color="var(--sv-bleu-nuit)" />, label: "Physicians", caption: "Prescribing behavior" },
        { icon: <Icon name="building" color="var(--sv-bleu-nuit)" />, label: "Payers", caption: "Reimbursement" },
        { icon: <Icon name="peopleSearch" color="var(--sv-bleu-nuit)" />, label: "Regulators", caption: "Approval pathway" },
        { icon: <Icon name="globe" color="var(--sv-bleu-nuit)" />, label: "Distributors", caption: "Market access" },
      ]}
    />
  );
}

export function ClinicalCapabilities() {
  return (
    <RadialIconRing
      color="var(--sv-orange)"
      items={[
        { icon: <Icon name="flask" color="var(--sv-bleu-nuit)" />, label: "R&D", caption: "Pipeline depth" },
        { icon: <Icon name="cardio" color="var(--sv-bleu-nuit)" />, label: "Clinical evidence", caption: "Phase III readout" },
        { icon: <Icon name="chartUp" color="var(--sv-bleu-nuit)" />, label: "Commercial", caption: "Launch forecast" },
        { icon: <Icon name="target" color="var(--sv-bleu-nuit)" />, label: "Market access", caption: "Pricing strategy" },
      ]}
    />
  );
}
