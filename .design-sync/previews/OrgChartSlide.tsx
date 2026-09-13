import React from "react";
import { OrgChartSlide } from "servier-slide-ds";

export function LaunchTeamStructure() {
  return (
    <OrgChartSlide
      title="Launch team structure"
      root={{ title: "Launch Steering Committee", subtitle: "General Manager, Europe" }}
      children={[
        { title: "Market Access", subtitle: "Pricing & HTA" },
        { title: "Medical Affairs", subtitle: "Evidence & KOLs" },
        { title: "Commercial", subtitle: "Sales & marketing" },
        { title: "Regulatory Affairs", subtitle: "Submissions" },
      ]}
      pageNumber={5}
    />
  );
}

export function DeliveryGovernance() {
  return (
    <OrgChartSlide
      eyebrow="Governance"
      title="Program delivery governance"
      root={{ title: "Program Sponsor" }}
      children={[
        { title: "Workstream: Evidence" },
        { title: "Workstream: Pricing" },
        { title: "Workstream: Operations" },
      ]}
    />
  );
}
