import React from "react";

/**
 * The recurring two-line slide heading: bold orange eyebrow line over a navy title line.
 * Seen on nearly every content slide in the Servier template.
 */
export function SlideHeading({
  eyebrow,
  title,
  intro,
  color = "var(--sv-bleu-nuit)",
  eyebrowColor = "var(--sv-orange)",
  align = "left",
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  color?: string;
  eyebrowColor?: string;
  align?: "left" | "center";
}) {
  return (
    <div style={{ textAlign: align }}>
      {eyebrow && (
        <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: "var(--sv-size-title)", color: eyebrowColor, lineHeight: 1.15 }}>
          {eyebrow}
        </div>
      )}
      <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 400, fontSize: "var(--sv-size-title)", color, lineHeight: 1.15 }}>
        {title}
      </div>
      {intro && (
        <div style={{ marginTop: 16, fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-size-body)", color, maxWidth: 900 }}>
          {intro}
        </div>
      )}
    </div>
  );
}
