import React from "react";
import { ClosingSlide } from "servier-slide-ds";

export function WithMessage() {
  return <ClosingSlide message="Thank you — questions welcome" />;
}

export function NoMessage() {
  return <ClosingSlide />;
}
