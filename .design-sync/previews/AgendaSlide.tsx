import React from "react";
import { AgendaSlide } from "servier-slide-ds";

export function Default() {
  return (
    <AgendaSlide
      heading="Agenda"
      pageNumber={2}
      sections={[
        {
          number: 1,
          title: "Market context",
          items: ["Disease burden and diagnosed population", "Reimbursement landscape by country"],
        },
        {
          number: 2,
          title: "Competitive landscape",
          items: ["Pipeline benchmarking", "Positioning versus standard of care"],
        },
        {
          number: 3,
          title: "Evidence strategy",
          items: ["Clinical trial readouts", "Real-world evidence generation plan"],
        },
        {
          number: 4,
          title: "Launch readiness",
          items: ["Pricing and access scenarios", "Go-to-market timeline"],
        },
      ]}
    />
  );
}

export function ThreeSections() {
  return (
    <AgendaSlide
      heading="Summary"
      sections={[
        { number: "01", title: "Objectives", items: ["Scope and methodology"] },
        { number: "02", title: "Findings", items: ["Key access barriers", "Payer sentiment by segment"] },
        { number: "03", title: "Recommendations", items: ["Prioritized market entry sequence"] },
      ]}
    />
  );
}
