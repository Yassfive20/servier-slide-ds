import React from "react";
import { QuoteSlide } from "servier-slide-ds";

export function Default() {
  return (
    <QuoteSlide
      eyebrow="Voice of the client"
      quote="This analysis gave our board the confidence to commit to a Q1 launch instead of waiting another cycle for evidence we may never fully have."
      name="Isabelle Mercier"
      role="VP Market Access, Northern Europe"
      imageUrl="https://picsum.photos/id/1027/400/400"
      pageNumber={19}
    />
  );
}

export function WithBody() {
  return (
    <QuoteSlide
      eyebrow="Executive perspective"
      title="On the access strategy"
      quote="The payer engagement plan changed how we sequenced our regulatory filings across the EU5."
      body="Six months after adopting the recommended sequencing, three of five target markets had granted reimbursement ahead of the original forecast."
      name="Thomas Reyer"
      role="Chief Commercial Officer"
      imageUrl="https://picsum.photos/id/1012/400/400"
    />
  );
}
