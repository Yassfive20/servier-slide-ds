import React from "react";
import { TimelineSlide } from "servier-slide-ds";

export function RegulatoryPathway() {
  return (
    <TimelineSlide
      title="Regulatory pathway to launch"
      events={[
        { date: "Q1 2026", caption: "Filing submitted" },
        { date: "Q3 2026", caption: "HTA review begins" },
        { date: "Q1 2027", caption: "Conditional approval" },
        { date: "Q3 2027", caption: "Pricing agreed" },
        { date: "Q4 2027", caption: "National launch" },
      ]}
      pageNumber={6}
    />
  );
}

export function ProgramMilestones() {
  return (
    <TimelineSlide
      title="Clinical program milestones"
      events={[
        { date: "2024", caption: "Phase II readout" },
        { date: "2025", caption: "Phase III initiated" },
        { date: "2026", caption: "Interim analysis" },
        { date: "2027", caption: "Primary completion" },
      ]}
      lineColor="var(--sv-bleu-nuit)"
      panelBg="var(--sv-beige)"
    />
  );
}
