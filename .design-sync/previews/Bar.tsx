import React from "react";
import { Bar } from "servier-slide-ds";

export function OrangeHeader() {
  return (
    <div style={{ width: 420 }}>
      <Bar>Market access readiness</Bar>
    </div>
  );
}

export function NavyHeader() {
  return (
    <div style={{ width: 420 }}>
      <Bar color="var(--sv-bleu-nuit)">Competitive landscape</Bar>
    </div>
  );
}
