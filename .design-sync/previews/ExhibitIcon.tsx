import React from "react";
import { ExhibitIcon } from "servier-slide-ds";

export function Sample() {
  return (
    <div style={{ display: "flex", gap: 16, padding: 24 }}>
      <ExhibitIcon name="pallet" />
      <ExhibitIcon name="pallet-load" />
      <ExhibitIcon name="carton" />
      <ExhibitIcon name="cartons" />
      <ExhibitIcon name="handling-unit" />
      <ExhibitIcon name="stretch-wrap" />
    </div>
  );
}
