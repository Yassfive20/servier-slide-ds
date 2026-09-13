import React from "react";
import { ComparisonSlide } from "servier-slide-ds";

export function LaunchScenarios() {
  return (
    <ComparisonSlide
      title="Launch scenario comparison"
      cards={[
        {
          title: "Scenario A — Fast follower",
          items: ["Launch 6 months post-leader", "Lean field force (25 FTE)", "Lower list price, faster uptake"],
        },
        {
          title: "Scenario B — Differentiated entry",
          items: ["Launch with full HTA package", "Full field force (60 FTE)", "Premium pricing, evidence-led"],
          highlighted: true,
        },
        {
          title: "Scenario C — Niche first",
          items: ["Single high-need indication first", "Specialist-only field team", "Expand indications year 2"],
        },
      ]}
      pageNumber={9}
    />
  );
}

export function PayerNegotiationOptions() {
  return (
    <ComparisonSlide
      eyebrow="Pricing strategy"
      title="Payer negotiation options"
      cards={[
        {
          title: "Managed entry agreement",
          items: ["Outcomes-based rebate", "Faster listing", "Higher admin burden"],
          highlighted: true,
        },
        {
          title: "List price with confidential discount",
          items: ["Simple to administer", "Slower payer review", "Reference-price risk"],
        },
      ]}
    />
  );
}
