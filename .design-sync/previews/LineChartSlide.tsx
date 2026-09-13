import React from "react";
import { LineChartSlide } from "servier-slide-ds";

export function LaunchTrajectory() {
  return (
    <LineChartSlide
      eyebrow="Commercial performance"
      title="Monthly patient uptake since launch"
      data={[
        { name: "M1", forecast: 400, actual: 320 },
        { name: "M2", forecast: 900, actual: 850 },
        { name: "M3", forecast: 1600, actual: 1700 },
        { name: "M4", forecast: 2400, actual: 2650 },
        { name: "M5", forecast: 3200, actual: 3550 },
        { name: "M6", forecast: 4000, actual: 4400 },
      ]}
      keys={["forecast", "actual"]}
      pageNumber={10}
    />
  );
}

export function PricingErosion() {
  return (
    <LineChartSlide
      eyebrow="Pricing dynamics"
      title="Net price trend by year post-launch"
      data={[
        { name: "Y1", eu: 100, us: 100 },
        { name: "Y2", eu: 94, us: 97 },
        { name: "Y3", eu: 87, us: 91 },
        { name: "Y4", eu: 81, us: 84 },
      ]}
      keys={["eu", "us"]}
    />
  );
}
