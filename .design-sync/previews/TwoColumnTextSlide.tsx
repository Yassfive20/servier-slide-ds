import React from "react";
import { TwoColumnTextSlide } from "servier-slide-ds";

export function Default() {
  return (
    <TwoColumnTextSlide
      eyebrow="Regulatory pathway"
      title="Two routes to accelerated approval"
      pageNumber={11}
      columns={[
        "The conditional marketing authorization route offers the fastest path to patients, contingent on post-launch confirmatory evidence commitments that must be resourced from day one.",
        "The standard centralized procedure carries a longer review timeline but removes the risk of a post-marketing evidence shortfall triggering a label restriction or withdrawal.",
      ]}
    />
  );
}

export function ThreeColumns() {
  return (
    <TwoColumnTextSlide
      eyebrow="Launch readiness"
      title="What each function needs to deliver by Q1"
      columns={[
        "Market access: finalize payer value dossiers for the three priority markets and secure early scientific advice sign-off.",
        "Medical affairs: complete KOL mapping and lock the publication plan for the pivotal trial readout.",
        "Commercial: validate the pricing corridor against the latest competitive intelligence and confirm the launch sequence.",
      ]}
    />
  );
}
