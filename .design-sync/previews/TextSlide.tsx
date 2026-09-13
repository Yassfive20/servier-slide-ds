import React from "react";
import { TextSlide } from "servier-slide-ds";

export function Default() {
  return (
    <TextSlide
      eyebrow="Market context"
      title="A shifting regulatory landscape"
      paragraphs={[
        "Over the past 18 months, three major markets have revised their reimbursement frameworks, creating both new access pathways and new compliance requirements for market entrants.",
        "Companies that adapt their evidence-generation strategy early are positioned to capture first-mover advantage in the newly opened segments, while those who wait risk being locked out of favorable pricing negotiations.",
      ]}
      pageNumber={4}
    />
  );
}

export function LongForm() {
  return (
    <TextSlide
      eyebrow="Executive summary"
      title="Why this matters now"
      paragraphs={[
        "The therapeutic area under review has seen a 34% increase in diagnosed incidence over five years, driven largely by improved screening infrastructure in secondary care.",
        "Current standard of care leaves a meaningful unmet need in the second-line setting, where response rates plateau below 40% and treatment discontinuation due to tolerability remains a persistent barrier to sustained benefit.",
        "Our analysis indicates a window of roughly 24 months before two competing programs are expected to reach the same regulatory milestone, making the sequencing of the next two trial phases the single most consequential decision on the roadmap.",
      ]}
    />
  );
}
