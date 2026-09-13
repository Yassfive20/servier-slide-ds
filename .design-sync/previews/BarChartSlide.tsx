import React from "react";
import { BarChartSlide } from "servier-slide-ds";

export function MarketSharePlan() {
  return (
    <BarChartSlide
      eyebrow="Commercial forecast"
      title="Market share by country, plan vs. actual"
      data={[
        { name: "France", plan: 18, actual: 21 },
        { name: "Germany", plan: 22, actual: 19 },
        { name: "Italy", plan: 15, actual: 17 },
        { name: "Spain", plan: 12, actual: 13 },
        { name: "UK", plan: 20, actual: 18 },
      ]}
      keys={["plan", "actual"]}
      pageNumber={13}
    />
  );
}

export function TrialEnrollmentBySite() {
  return (
    <BarChartSlide
      eyebrow="Clinical operations"
      title="Patients enrolled by site type"
      data={[
        { name: "Academic", enrolled: 142, target: 160 },
        { name: "Community", enrolled: 98, target: 110 },
        { name: "Specialty", enrolled: 61, target: 70 },
      ]}
      keys={["enrolled", "target"]}
    />
  );
}
