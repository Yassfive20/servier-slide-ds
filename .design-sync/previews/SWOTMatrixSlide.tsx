import React from "react";
import { SWOTMatrixSlide } from "servier-slide-ds";

export function LaunchSWOT() {
  return (
    <SWOTMatrixSlide
      strengths={["Best-in-class efficacy data", "Established KOL network"]}
      weaknesses={["Narrow initial label", "Limited real-world evidence"]}
      opportunities={["First-in-class positioning window", "Growing patient advocacy support"]}
      threats={["Fast-follower competitor in phase III", "Tightening HTA thresholds"]}
    />
  );
}

export function PortfolioSWOT() {
  return (
    <SWOTMatrixSlide
      title="Cardiometabolic portfolio SWOT"
      strengths={["Broad indication coverage", "Strong payer relationships in core markets"]}
      weaknesses={["Aging combination-therapy franchise", "Thin pediatric evidence"]}
      opportunities={["Biosimilar-driven budget headroom", "Digital adherence partnerships"]}
      threats={["Patent cliff in 2028", "New entrant with oral formulation"]}
    />
  );
}
