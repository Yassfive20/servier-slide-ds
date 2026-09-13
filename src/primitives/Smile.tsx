import React from "react";

export type SmileCorner = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export type SmileEdge = "left" | "right" | "top" | "bottom";

interface SmileBaseProps {
  color?: string;
  thickness?: number;
  size?: number;
  className?: string;
}

/**
 * The Servier "sourire" — a quarter- or half-ring of the brand's graphic territory.
 * Implemented as a full ring clipped by its container, so it always reads as an
 * unclosed arc bleeding off an edge, per the brand rule (never close the ring).
 */
export function SmileQuarter({
  corner = "bottom-left",
  color = "var(--sv-bleu-clair)",
  thickness = 60,
  size = 420,
  className,
}: SmileBaseProps & { corner?: SmileCorner }) {
  const r = (size - thickness) / 2;
  const pos: React.CSSProperties = { position: "absolute", width: size, height: size };
  if (corner === "bottom-left") Object.assign(pos, { left: -size / 2, top: `calc(100% - ${size / 2}px)` });
  if (corner === "top-left") Object.assign(pos, { left: -size / 2, top: -size / 2 });
  if (corner === "top-right") Object.assign(pos, { left: `calc(100% - ${size / 2}px)`, top: -size / 2 });
  if (corner === "bottom-right")
    Object.assign(pos, { left: `calc(100% - ${size / 2}px)`, top: `calc(100% - ${size / 2}px)` });

  return (
    <svg style={pos} className={className} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={thickness} />
    </svg>
  );
}

export function SmileHalf({
  edge = "left",
  color = "var(--sv-bleu-clair)",
  thickness = 70,
  size = 480,
  className,
}: SmileBaseProps & { edge?: SmileEdge }) {
  const r = (size - thickness) / 2;
  const pos: React.CSSProperties = { position: "absolute", width: size, height: size };
  if (edge === "left") Object.assign(pos, { left: -size / 2, top: `calc(50% - ${size / 2}px)` });
  if (edge === "right") Object.assign(pos, { left: `calc(100% - ${size / 2}px)`, top: `calc(50% - ${size / 2}px)` });
  if (edge === "top") Object.assign(pos, { top: -size / 2, left: `calc(50% - ${size / 2}px)` });
  if (edge === "bottom") Object.assign(pos, { top: `calc(100% - ${size / 2}px)`, left: `calc(50% - ${size / 2}px)` });

  return (
    <svg style={pos} className={className} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={thickness} />
    </svg>
  );
}

/** Small standalone smile badge (used behind step numbers, ordinals, icons). */
export function SmileBadge({
  color = "var(--sv-orange)",
  thickness = 14,
  size = 72,
  children,
  className,
}: SmileBaseProps & { children?: React.ReactNode }) {
  const r = (size - thickness) / 2;
  return (
    <span className={className} style={{ position: "relative", display: "inline-block", width: size, height: size * 0.72 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: "absolute", top: 0, left: 0 }} aria-hidden="true">
        <path d={`M ${thickness / 2} ${size / 2} A ${r} ${r} 0 0 0 ${size - thickness / 2} ${size / 2}`} fill="none" stroke={color} strokeWidth={thickness} strokeLinecap="butt" />
      </svg>
      {children != null && (
        <span style={{ position: "absolute", top: 0, left: 0, width: size, textAlign: "center", fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: "var(--sv-bleu-nuit)", fontSize: size * 0.33 }}>
          {children}
        </span>
      )}
    </span>
  );
}

/** The full symbol: smile + star, used on the closing slide. */
export function SmileSymbol({ size = 160, smileColor = "#fff", starColor = "var(--sv-orange)" }: { size?: number; smileColor?: string; starColor?: string }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M 20 45 A 20 20 0 0 0 60 45" fill="none" stroke={smileColor} strokeWidth={11} />
      <path
        d="M70 8 l3 8 8 -2 -5 7 7 5 -8 1 1 8 -6 -6 -6 6 1 -8 -8 -1 7 -5 -5 -7 8 2 3 -8z"
        fill={starColor}
        transform="translate(0,-2)"
      />
    </svg>
  );
}
