import React from "react";
import { RadialIconWheelSlide } from "servier-slide-ds";

export function TherapeuticAreas() {
  return (
    <RadialIconWheelSlide
      title="Therapeutic areas of focus"
      items={[
        { icon: "cardio", label: "Cardiovascular", caption: "3 assets" },
        { icon: "oncology", label: "Oncology", caption: "5 assets" },
        { icon: "neurology", label: "Neurology", caption: "2 assets" },
        { icon: "immuno", label: "Immunology", caption: "4 assets" },
        { icon: "flask", label: "Rare disease", caption: "1 asset" },
      ]}
      pageNumber={4}
    />
  );
}

export function AccessEcosystem() {
  return (
    <RadialIconWheelSlide
      title="Stakeholders in the access ecosystem"
      items={[
        { icon: "building", label: "HTA bodies" },
        { icon: "peopleSearch", label: "Payers" },
        { icon: "handsHeart", label: "Patient groups" },
        { icon: "headCross", label: "Prescribers" },
      ]}
    />
  );
}
