import React from "react";
import { DocFrame, code } from "./DocFrame";
import { ExhibitIcon, EXHIBIT_ICON_NAMES } from "../icons/ExhibitIcon";

/** The 31 warehouse and supply-chain pictograms, by name, with the four usage rules. */
export function ExhibitIconLibrary() {
  return (
    <DocFrame eyebrow="Exhibit rules · 5 of 5" title="Icon library: 31 pictograms for physical things"
              note="Icons inherit currentColor — set colour on the container, never inside the icon. One stroke weight throughout. An icon never carries meaning alone: it always sits with a label. Never decorative.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "14px 12px", color: "var(--sv-bleu-nuit)" }}>
        {EXHIBIT_ICON_NAMES.map((n) => (
          <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                                padding: "10px 4px", background: "var(--sv-ex-lane)", borderRadius: 6 }}>
            <ExhibitIcon name={n} size={36} />
            <div style={{ ...code, fontSize: 12, textAlign: "center" }}>{n}</div>
          </div>
        ))}
      </div>
    </DocFrame>
  );
}
