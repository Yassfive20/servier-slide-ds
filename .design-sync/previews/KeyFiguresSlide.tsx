import React from "react";
import { KeyFiguresSlide } from "servier-slide-ds";

export function LaunchResults() {
  return (
    <KeyFiguresSlide
      eyebrow="Year 1 results"
      title="Launch performance at a glance"
      intro="Key indicators tracked since national launch, versus forecast."
      figures={[
        { value: "1er", caption: "Market entrant in class" },
        { value: "5M", caption: "Patients addressable" },
        { value: "+21%", caption: "Share vs. forecast" },
        { value: "18", caption: "Markets live" },
      ]}
      pageNumber={9}
    />
  );
}

export function AccessSnapshot() {
  return (
    <KeyFiguresSlide
      eyebrow="Patient access"
      title="Reimbursement snapshot"
      figures={[
        { value: "92%", caption: "Population covered" },
        { value: "34j", caption: "Median time to access" },
        { value: "12", caption: "Payer agreements signed" },
      ]}
    />
  );
}
