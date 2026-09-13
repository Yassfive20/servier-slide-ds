import React from "react";
import { IconColumnsSlide } from "servier-slide-ds";

export function Default() {
  return (
    <IconColumnsSlide
      eyebrow="Launch readiness"
      title="Three capabilities we need in place before filing"
      pageNumber={14}
      columns={[
        { icon: "peopleSearch", title: "Payer insight", body: "Structured advisory boards across the top five reimbursement markets." },
        { icon: "peopleIdea", title: "KOL alignment", body: "Early engagement with treating physicians on the evolving standard of care." },
        { icon: "target", title: "Access strategy", body: "A pricing and positioning plan tested against payer willingness to pay." },
      ]}
    />
  );
}

export function FourColumns() {
  return (
    <IconColumnsSlide
      eyebrow="Evidence generation"
      title="How we close the real-world evidence gap"
      columns={[
        { icon: "flask", title: "Trial design", body: "A pragmatic comparator arm added to the Phase IIIb protocol." },
        { icon: "chartUp", title: "Outcomes tracking", body: "A patient registry spanning the first 24 months post-launch." },
        { icon: "cellSearch", title: "Biomarker analysis", body: "Retrospective subgroup analysis to support label refinement." },
        { icon: "globe", title: "Cross-market pooling", body: "Harmonized data collection across all EU5 markets." },
      ]}
    />
  );
}
