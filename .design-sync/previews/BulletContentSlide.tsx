import React from "react";
import { BulletContentSlide } from "servier-slide-ds";

export function Default() {
  return (
    <BulletContentSlide
      eyebrow="Market context"
      title="Key access barriers to address before launch"
      pageNumber={6}
      items={[
        {
          lead: "Fragmented reimbursement pathways",
          body: "Three of the five target markets require separate HTA submissions with divergent evidence thresholds, adding an estimated 6-9 months to the access timeline.",
        },
        {
          lead: "Limited real-world evidence in the second-line setting",
          body: "Payers in Germany and France have flagged the absence of comparative RWE as a key gap in early scientific advice meetings.",
        },
        {
          lead: "Competitive pricing pressure",
          body: "Two biosimilar entrants are expected within 18 months of launch, compressing the pricing corridor for negotiation.",
        },
      ]}
    />
  );
}

export function LeadOnly() {
  return (
    <BulletContentSlide
      eyebrow="Executive summary"
      title="What changed this quarter"
      footerTitle="Q3 Business Review"
      items={[
        { lead: "Regulatory filing accepted in two priority markets" },
        { lead: "Payer advisory board rescheduled to October" },
        { lead: "Competitor discontinued its Phase III program" },
      ]}
    />
  );
}
