import React from "react";
import { TitleSlideCover } from "servier-slide-ds";

export function DarkCover() {
  return <TitleSlideCover title="Q3 business review, presented to the" accent="executive committee" date="13/09/2026" />;
}

export function LightCover() {
  return <TitleSlideCover title="Market entry strategy for" accent="Southern Europe" date="01/10/2026" dark={false} />;
}
