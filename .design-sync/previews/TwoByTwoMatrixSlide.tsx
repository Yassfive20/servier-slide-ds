import React from "react";
import { TwoByTwoMatrixSlide } from "servier-slide-ds";

export function MarketPrioritization() {
  return (
    <TwoByTwoMatrixSlide
      title="Market prioritization matrix"
      xAxis={["Low market attractiveness", "High market attractiveness"]}
      yAxis={["Low access complexity", "High access complexity"]}
      quadrants={[
        { label: "Monitor", items: ["Portugal", "Greece"] },
        { label: "Priority launch", items: ["Germany", "France", "Italy"] },
        { label: "Deprioritize", items: ["Slovakia", "Croatia"] },
        { label: "Selective / partner", items: ["Spain", "Poland"] },
      ]}
      pageNumber={11}
    />
  );
}

export function EvidenceGapImpactEffort() {
  return (
    <TwoByTwoMatrixSlide
      eyebrow="Evidence planning"
      title="Evidence gap: impact vs. effort"
      xAxis={["Low effort", "High effort"]}
      yAxis={["Low payer impact", "High payer impact"]}
      quadrants={[
        { label: "Quick wins", items: ["Indirect comparison update", "Budget impact refresh"] },
        { label: "Strategic bets", items: ["Head-to-head RCT", "Long-term registry"] },
        { label: "Deprioritize", items: ["Legacy chart review"] },
        { label: "Fill opportunistically", items: ["Real-world adherence study", "Patient-reported outcomes"] },
      ]}
    />
  );
}
