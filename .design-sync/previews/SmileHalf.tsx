import React from "react";
import { SmileHalf } from "servier-slide-ds";

export function LeftEdge() {
  return (
    <div style={{ position: "relative", width: 400, height: 300, overflow: "hidden", background: "#fff", border: "1px solid var(--sv-grey-light)" }}>
      <SmileHalf edge="left" />
    </div>
  );
}

export function BottomEdgeOrange() {
  return (
    <div style={{ position: "relative", width: 400, height: 300, overflow: "hidden", background: "var(--sv-bleu-nuit)" }}>
      <SmileHalf edge="bottom" color="var(--sv-orange)" thickness={50} size={420} />
    </div>
  );
}

export function RightEdgeThin() {
  return (
    <div style={{ position: "relative", width: 400, height: 300, overflow: "hidden", background: "#fff" }}>
      <SmileHalf edge="right" color="var(--sv-violet)" thickness={36} size={340} />
    </div>
  );
}
