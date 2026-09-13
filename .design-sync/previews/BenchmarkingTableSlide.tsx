import React from "react";
import { BenchmarkingTableSlide } from "servier-slide-ds";

export function CompetitiveBenchmark() {
  return (
    <BenchmarkingTableSlide
      title="Competitive benchmark"
      columns={["Us", "Competitor A", "Competitor B"]}
      rows={[
        { criterion: "Regulatory coverage", values: [true, false, true] },
        { criterion: "Time to market", values: ["6 months", "9 months", "12 months"] },
        { criterion: "Local presence", values: [true, true, false] },
        { criterion: "Digital platform", values: [true, false, false] },
      ]}
      highlightColumn={0}
      pageNumber={14}
    />
  );
}

export function FeatureComparison() {
  return (
    <BenchmarkingTableSlide
      eyebrow="Feature comparison"
      title="Platform capabilities"
      columns={["Starter", "Growth", "Enterprise"]}
      rows={[
        { criterion: "Users included", values: ["5", "25", "Unlimited"] },
        { criterion: "API access", values: [false, true, true] },
        { criterion: "SSO", values: [false, false, true] },
      ]}
      highlightColumn={1}
    />
  );
}
