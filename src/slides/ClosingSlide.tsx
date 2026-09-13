import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SmileSymbol } from "../primitives/Smile";

/** Final slide: full-bleed navy background, centered smile+star symbol, no text. */
export function ClosingSlide({ message }: { message?: React.ReactNode }) {
  return (
    <SlideFrame background="var(--sv-bleu-nuit)" footer="none">
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
        <SmileSymbol size={150} />
        {message && <div style={{ fontFamily: "var(--sv-font-body)", color: "#fff", fontSize: 18 }}>{message}</div>}
      </div>
    </SlideFrame>
  );
}
