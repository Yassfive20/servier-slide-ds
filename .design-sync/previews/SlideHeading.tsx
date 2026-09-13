import React from "react";
import { SlideHeading } from "servier-slide-ds";

export function EyebrowAndTitle() {
  return <SlideHeading eyebrow="Market entry strategy" title="Competitive landscape and positioning" />;
}

export function WithIntro() {
  return (
    <SlideHeading
      eyebrow="Clinical evidence"
      title="Phase III readout strengthens the access case"
      intro="Topline results published this quarter support a differentiated value proposition ahead of the first payer submissions."
    />
  );
}

export function CenteredNoEyebrow() {
  return <SlideHeading title="Launch readiness, region by region" align="center" />;
}
