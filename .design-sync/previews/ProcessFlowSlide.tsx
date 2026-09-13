import React from "react";
import { ProcessFlowSlide } from "servier-slide-ds";

export function RegulatoryPathway() {
  return (
    <ProcessFlowSlide
      title="Regulatory pathway to approval"
      steps={[
        { title: "Pre-submission", body: "Scientific advice with EMA", icon: "calendar" },
        { title: "Dossier filing", body: "Full CTD submission", icon: "flask" },
        { title: "Assessment", body: "CHMP review cycle", icon: "cellSearch" },
        { title: "Approval", body: "Marketing authorization granted", icon: "check" },
      ]}
      pageNumber={15}
    />
  );
}

export function AccessJourney() {
  return (
    <ProcessFlowSlide
      eyebrow="Market access"
      title="From approval to patient access"
      steps={[
        { title: "Pricing filing", body: "Submit to national authority", icon: "building" },
        { title: "HTA review", body: "Value dossier assessment", icon: "chartUp" },
        { title: "Reimbursement", body: "Listing decision & tariff", icon: "target" },
      ]}
    />
  );
}
