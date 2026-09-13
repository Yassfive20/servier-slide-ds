import React from "react";
import { Icon } from "servier-slide-ds";

export function TherapeuticAreas() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Icon name="cardio" size={40} />
      <Icon name="oncology" size={40} />
      <Icon name="neurology" size={40} />
      <Icon name="immuno" size={40} />
    </div>
  );
}

export function ActionsAndUI() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Icon name="check" size={32} />
      <Icon name="arrowRight" size={32} />
      <Icon name="calendar" size={32} />
      <Icon name="globe" size={32} />
    </div>
  );
}

export function ColoredLarge() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Icon name="chartUp" size={48} color="var(--sv-orange)" strokeWidth={1.4} />
      <Icon name="flask" size={48} color="var(--sv-cyan)" strokeWidth={1.4} />
      <Icon name="target" size={48} color="var(--sv-violet)" strokeWidth={1.4} />
    </div>
  );
}
