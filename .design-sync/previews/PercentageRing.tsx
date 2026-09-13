import React from "react";
import { PercentageRing } from "servier-slide-ds";

export function HalfRing() {
  return <PercentageRing value={72} mode="half" label="72%" size={200} />;
}

export function FullDonut() {
  return <PercentageRing value={45} mode="full" label="45%" size={200} color="var(--sv-orange)" track="var(--sv-bleu-clair)" />;
}

export function LowValue() {
  return <PercentageRing value={12} mode="half" label="12%" size={200} color="var(--sv-cyan)" />;
}
