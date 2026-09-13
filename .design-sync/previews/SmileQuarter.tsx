import React from "react";
import { SmileQuarter } from "servier-slide-ds";

export function BottomLeftCorner() {
  return (
    <div style={{ position: "relative", width: 400, height: 300, overflow: "hidden", background: "#fff", border: "1px solid var(--sv-grey-light)" }}>
      <SmileQuarter corner="bottom-left" />
    </div>
  );
}

export function TopRightOrange() {
  return (
    <div style={{ position: "relative", width: 400, height: 300, overflow: "hidden", background: "var(--sv-bleu-nuit)" }}>
      <SmileQuarter corner="top-right" color="var(--sv-orange)" thickness={40} size={320} />
    </div>
  );
}

export function BottomRightThin() {
  return (
    <div style={{ position: "relative", width: 400, height: 300, overflow: "hidden", background: "#fff" }}>
      <SmileQuarter corner="bottom-right" color="var(--sv-cyan)" thickness={24} size={260} />
    </div>
  );
}
