import React from "react";
import { SmileBadge } from "servier-slide-ds";

export function StepOne() {
  return <SmileBadge>1</SmileBadge>;
}

export function StepTwoCyan() {
  return <SmileBadge color="var(--sv-cyan)">2</SmileBadge>;
}

export function StepThreeNavy() {
  return <SmileBadge color="var(--sv-bleu-nuit)">3</SmileBadge>;
}

export function StepFourLarge() {
  return <SmileBadge color="var(--sv-violet)" size={100} thickness={18}>4</SmileBadge>;
}
