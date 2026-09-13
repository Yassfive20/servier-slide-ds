import React from "react";

/**
 * Approximation of the Servier lockup (wordmark + smile/star + optional signature).
 * NOTE: the real brand logo is a custom-drawn mark, not a font — this is a faithful
 * stand-in built from the brand's own colors/shapes for use before real logo artwork
 * is supplied. Swap for the real SVG lockup when available.
 */
export function Logo({
  variant = "color",
  withSignature = false,
  size = 22,
}: {
  variant?: "color" | "white" | "navy";
  withSignature?: boolean;
  size?: number;
}) {
  const wordColor = variant === "color" ? "var(--sv-bleu-nuit)" : variant === "white" ? "#fff" : "var(--sv-bleu-nuit)";
  const starColor = variant === "white" ? "#fff" : "var(--sv-orange)";
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}>
      <div style={{ display: "inline-flex", alignItems: "flex-start", gap: 3 }}>
        <span
          style={{
            fontFamily: "var(--sv-font-heading)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: size,
            color: wordColor,
            letterSpacing: 0.5,
          }}
        >
          SERVIER
        </span>
        <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 100 100" style={{ marginTop: -2 }} aria-hidden="true">
          <path d="M50 6 l7 20 20 -6 -13 17 17 13 -20 2 2 20 -13 -15 -13 15 2 -20 -20 -2 17 -13 -13 -17 20 6z" fill={starColor} />
        </svg>
      </div>
      {withSignature && (
        <span style={{ fontFamily: "var(--sv-font-body)", fontStyle: "italic", fontSize: size * 0.42, color: "var(--sv-orange)" }}>
          moved by you
        </span>
      )}
    </div>
  );
}
