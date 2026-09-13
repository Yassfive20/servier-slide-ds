import React from "react";
import { SmileSymbol } from "servier-slide-ds";

export function OnNavy() {
  return (
    <div style={{ background: "var(--sv-bleu-nuit)", width: 320, height: 240, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SmileSymbol size={150} />
    </div>
  );
}

export function SmallOnNavy() {
  return (
    <div style={{ background: "var(--sv-bleu-nuit)", width: 200, height: 160, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SmileSymbol size={80} />
    </div>
  );
}
