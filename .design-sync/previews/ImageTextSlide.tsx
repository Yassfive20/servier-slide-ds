import React from "react";
import { ImageTextSlide } from "servier-slide-ds";

export function Default() {
  return (
    <ImageTextSlide
      eyebrow="Patient access"
      title="Reaching patients earlier in the diagnostic pathway"
      pageNumber={8}
      imageUrl="https://picsum.photos/id/1062/440/600"
      paragraphs={[
        "Diagnostic delay remains the single largest driver of late-stage presentation in the markets we assessed, with an average of 14 months between first symptom and specialist referral.",
        "Partnering with primary care networks to embed a simple screening trigger could shift a meaningful share of patients into earlier, more treatable stages of disease.",
      ]}
    />
  );
}

export function LongBody() {
  return (
    <ImageTextSlide
      eyebrow="Competitive landscape"
      title="Why the next 24 months matter"
      imageUrl="https://picsum.photos/id/1069/440/600"
      paragraphs={[
        "Two competing programs are tracking toward the same regulatory milestone within a comparable timeframe, narrowing the window for a differentiated first-mover launch.",
        "Our commercial model shows that a six-month lead in market access negotiations translates into a materially stronger formulary position at the payer renewal cycle.",
        "Sequencing the confirmatory trial ahead of the label expansion filing preserves that lead without compromising the strength of the submitted evidence package.",
      ]}
    />
  );
}
