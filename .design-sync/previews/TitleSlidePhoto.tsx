import React from "react";
import { TitleSlidePhoto } from "servier-slide-ds";

export function Default() {
  return (
    <TitleSlidePhoto
      title="Market entry strategy for"
      accent="Southern Europe"
      date="13/09/2026"
      imageUrl="https://picsum.photos/id/1005/900/900"
    />
  );
}

export function NoDate() {
  return (
    <TitleSlidePhoto
      title="Launch readiness review:"
      accent="oncology portfolio"
      imageUrl="https://picsum.photos/id/1074/900/900"
    />
  );
}
