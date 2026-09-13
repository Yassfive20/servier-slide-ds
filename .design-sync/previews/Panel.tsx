import React from "react";
import { Panel } from "servier-slide-ds";

export function BeigeCard() {
  return (
    <div style={{ width: 320, height: 220 }}>
      <Panel>
        <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: "var(--sv-bleu-nuit)", fontSize: 16, marginBottom: 8 }}>
          Regulatory pathway
        </div>
        <div style={{ fontFamily: "var(--sv-font-body)", color: "var(--sv-bleu-nuit)", fontSize: 14, lineHeight: 1.5 }}>
          Standard review expected across all three priority markets, with rolling submission in the EU.
        </div>
      </Panel>
    </div>
  );
}

export function LavenderCard() {
  return (
    <div style={{ width: 320, height: 220 }}>
      <Panel bg="var(--sv-beige)">
        <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: "var(--sv-bleu-nuit)", fontSize: 16, marginBottom: 8 }}>
          Competitive intensity
        </div>
        <div style={{ fontFamily: "var(--sv-font-body)", color: "var(--sv-bleu-nuit)", fontSize: 14, lineHeight: 1.5 }}>
          Two late-stage entrants targeting the same indication within 18 months of our launch window.
        </div>
      </Panel>
    </div>
  );
}
