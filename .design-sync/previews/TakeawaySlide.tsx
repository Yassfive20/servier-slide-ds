import React from "react";
import { TakeawaySlide } from "servier-slide-ds";

export function LaunchReadinessTakeaway() {
  return (
    <TakeawaySlide
      eyebrow="Takeaway"
      title="Three actions before Q1 launch"
      items={[
        "Finalize payer value dossier for top 5 markets",
        "Secure early access designation in Germany and France",
        "Lock field force sizing to launch scenario B",
        "Close remaining HTA evidence gaps by December",
      ]}
      imageUrl="https://picsum.photos/id/237/800/800"
      pageNumber={22}
    />
  );
}

export function MarketAccessTakeaway() {
  return (
    <TakeawaySlide
      eyebrow="Key message"
      title="Access is now the binding constraint"
      items={[
        "Reimbursement timelines have doubled since 2022",
        "Pricing corridor narrower than at prior launch",
        "Competitor entry expected within 9 months",
      ]}
      imageUrl="https://picsum.photos/id/1076/800/800"
    />
  );
}
