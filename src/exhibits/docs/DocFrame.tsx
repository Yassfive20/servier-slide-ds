import React from "react";
import { SlideFrame } from "../../primitives/SlideFrame";

/** Shared chrome for the exhibit documentation cards: same eyebrow / title / body / footnote
 *  geometry as the exhibit components, so the cards sit in the same index as the parts. */
export function DocFrame({ eyebrow, title, note, children }: {
  eyebrow: string; title: string; note?: string; children: React.ReactNode;
}) {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", left: 100, top: 64, fontFamily: "var(--sv-font-heading)",
                     fontWeight: 700, fontSize: "var(--sv-size-eyebrow)", letterSpacing: "0.08em",
                     textTransform: "uppercase", color: "var(--sv-ex-muted)" }}>
        {eyebrow}
      </div>
      <div style={{ position: "absolute", left: 100, top: 92, width: 1080,
                     fontFamily: "var(--sv-font-heading)", fontWeight: 700,
                     fontSize: "var(--sv-size-title)", color: "var(--sv-ex-ink)", lineHeight: 1.2 }}>
        {title}
      </div>
      <div style={{ position: "absolute", left: 100, top: 180, width: 1080, height: 400,
                     fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-label)",
                     color: "var(--sv-ex-ink)", lineHeight: 1.35 }}>
        {children}
      </div>
      {note && (
        <div style={{ position: "absolute", left: 100, bottom: 72, width: 1080,
                       fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-ex-size-note)",
                       color: "var(--sv-ex-muted)" }}>
          {note}
        </div>
      )}
    </SlideFrame>
  );
}

export const th: React.CSSProperties = {
  textAlign: "left", padding: "8px 12px", fontFamily: "var(--sv-font-heading)", fontWeight: 700,
  fontSize: "var(--sv-size-small)", letterSpacing: "0.06em", textTransform: "uppercase",
  color: "var(--sv-ex-muted)", borderBottom: "1px solid var(--sv-ex-axis)",
};
export const td: React.CSSProperties = {
  padding: "8px 12px", borderBottom: "1px solid var(--sv-ex-grid)", verticalAlign: "top",
};
export const code: React.CSSProperties = {
  fontFamily: "ui-monospace, monospace", fontSize: "var(--sv-size-small)", color: "var(--sv-ex-ink-2)",
};
