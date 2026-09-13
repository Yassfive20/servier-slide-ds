import React from "react";
import { annulusPath, polarToCartesian } from "./arc";

/** Single value 0-100 shown as a half-ring or full donut, filled portion vs track. */
export function PercentageRing({
  value,
  mode = "half",
  color = "var(--sv-bleu-nuit)",
  track = "var(--sv-blanc)",
  size = 180,
  thickness,
  label,
  labelPosition = "center",
}: {
  value: number;
  mode?: "half" | "full";
  color?: string;
  track?: string;
  size?: number;
  thickness?: number;
  label?: React.ReactNode;
  labelPosition?: "center" | "above";
}) {
  const t = thickness ?? size * 0.24;
  const outerR = size / 2;
  const innerR = outerR - t;
  const cx = size / 2;
  const cy = mode === "half" ? size / 2 : size / 2;
  const sweep = mode === "half" ? 180 : 360;
  const start = mode === "half" ? -90 : 0;
  const filledEnd = start + (sweep * Math.min(Math.max(value, 0), 100)) / 100;
  const height = mode === "half" ? size * 0.55 : size;

  return (
    <div style={{ position: "relative", width: size, height: height + (labelPosition === "above" ? 28 : 0) }}>
      {labelPosition === "above" && label != null && (
        <div style={{ textAlign: "center", fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: "var(--sv-size-stat)", color: "var(--sv-bleu-nuit)" }}>
          {label}
        </div>
      )}
      <svg width={size} height={height} viewBox={`0 0 ${size} ${height}`}>
        <path d={annulusPath(cx, cy, outerR, innerR, start, start + sweep)} fill={track} />
        {value > 0 && <path d={annulusPath(cx, cy, outerR, innerR, start, filledEnd)} fill={color} />}
      </svg>
      {labelPosition === "center" && label != null && (
        <div
          style={{
            position: "absolute",
            top: mode === "half" ? "auto" : 0,
            bottom: mode === "half" ? 0 : "auto",
            left: 0,
            width: size,
            height: mode === "half" ? height * 0.6 : height,
            display: "flex",
            alignItems: mode === "half" ? "flex-end" : "center",
            justifyContent: "center",
            fontFamily: "var(--sv-font-heading)",
            fontWeight: 700,
            fontSize: "var(--sv-size-stat)",
            color: "var(--sv-bleu-nuit)",
            paddingBottom: mode === "half" ? size * 0.08 : 0,
          }}
        >
          {/* half mode: the label's box sits low enough to underlap the ring's own
              band (little vertical room below a half-ring) - a white backdrop keeps
              it legible regardless of the ring color behind it. */}
          <span style={mode === "half" ? { background: "var(--sv-blanc)", borderRadius: 999, padding: "2px 14px" } : undefined}>
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export interface RingSegment {
  label: string;
  value: number;
  color: string;
}

/**
 * Multi-segment ring ("camembert stylisé") — the Servier take on a donut/pie chart,
 * rendered as a half- or full-ring made of proportional colored wedges.
 */
export function SegmentedRing({
  segments,
  mode = "half",
  size = 420,
  thickness,
  showLabels = true,
  showLegend = false,
}: {
  segments: RingSegment[];
  mode?: "half" | "full";
  size?: number;
  thickness?: number;
  showLabels?: boolean;
  showLegend?: boolean;
}) {
  const t = thickness ?? size * 0.22;
  const outerR = size / 2;
  const innerR = outerR - t;
  const cx = size / 2;
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const sweep = mode === "half" ? 180 : 360;
  const start = mode === "half" ? -90 : -90 + 0; // full ring also starts at top for readability
  // Labels sit outside the ring (labelR > outerR) and can land at any angle,
  // including straight up/down - pad the canvas so a label there never clips
  // the container edge, and draw everything relative to a shifted center.
  const labelClearance = 50;
  const labelBoxHalf = 32;
  const padTop = showLabels ? labelClearance + labelBoxHalf : 10;
  const padBottom = !showLabels ? 10 : mode === "full" ? labelClearance + labelBoxHalf : 20;
  const height = (mode === "half" ? size * 0.62 : size) + padTop + padBottom;
  const cy = size / 2 + padTop;

  let angle = start;
  const wedges = segments.map((seg) => {
    const segSweep = (seg.value / total) * sweep;
    const a0 = angle;
    const a1 = angle + segSweep;
    angle = a1;
    const mid = (a0 + a1) / 2;
    // Enough clearance that the label never underlaps the ring itself - a
    // label sitting flush against the ring's edge can visually collide with
    // a same-colored wedge (e.g. the caption text is navy, so is a segment).
    const labelR = outerR + labelClearance;
    const lp = polarToCartesian(cx, cy, labelR, mid);
    return { ...seg, a0, a1, lp };
  });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
      <div style={{ position: "relative", width: size + 140, height }}>
        <svg
          width={size + 140}
          height={height}
          viewBox={`${-70} 0 ${size + 140} ${height}`}
        >
          {wedges.map((w, i) => (
            <path key={i} d={annulusPath(cx, cy, outerR, innerR, w.a0, w.a1)} fill={w.color} />
          ))}
        </svg>
        {showLabels &&
          wedges.map((w, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: w.lp.x + 70 - 60,
                top: w.lp.y - 20,
                width: 120,
                textAlign: "center",
                fontFamily: "var(--sv-font-body)",
              }}
            >
              <div style={{ fontWeight: 700, color: w.color, fontSize: 20 }}>{Math.round((w.value / total) * 100)}%</div>
              <div style={{ fontSize: "var(--sv-size-small)", color: "var(--sv-bleu-nuit)" }}>{w.label}</div>
            </div>
          ))}
      </div>
      {showLegend && (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {segments.map((s, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--sv-font-body)", fontSize: "var(--sv-size-small)", color: "var(--sv-bleu-nuit)" }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: s.color, display: "inline-block" }} />
              {s.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Icons/labels distributed evenly along a half-ring track — Servier's "ecosystem wheel". */
export function RadialIconRing({
  items,
  size = 640,
  thickness,
  color = "var(--sv-bleu-clair)",
}: {
  items: { icon: React.ReactNode; label: string; caption?: string }[];
  size?: number;
  thickness?: number;
  color?: string;
}) {
  const t = thickness ?? size * 0.18;
  const outerR = size / 2;
  const innerR = outerR - t;
  const trackR = (outerR + innerR) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const height = size * 0.56;
  const n = items.length;

  return (
    <div style={{ position: "relative", width: size, height: height + 90 }}>
      <svg width={size} height={height} viewBox={`0 0 ${size} ${height}`}>
        <path d={annulusPath(cx, cy, outerR, innerR, -90, 90)} fill={color} />
      </svg>
      {items.map((item, i) => {
        const angle = -90 + (180 / (n - 1 || 1)) * i;
        const p = polarToCartesian(cx, cy, trackR, angle);
        const below = angle > -20 && angle < 20;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: p.x - 60,
              top: below ? p.y - 90 : p.y - 34,
              width: 120,
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>{item.icon}</div>
            <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: "var(--sv-orange)", fontSize: "var(--sv-size-small)" }}>{item.label}</div>
            {item.caption && <div style={{ fontFamily: "var(--sv-font-body)", fontSize: 12, color: "var(--sv-bleu-nuit)" }}>{item.caption}</div>}
          </div>
        );
      })}
    </div>
  );
}
