/** Polar->cartesian with 0deg = top (12 o'clock), sweeping clockwise. */
export function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

/** SVG path for one annulus (ring) wedge from startAngle to endAngle, degrees, clockwise from top. */
export function annulusPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number
) {
  // A 360deg sweep is a degenerate SVG arc (start/end points coincide) - nudge
  // just short of a full circle so it still renders as one continuous ring.
  if (endAngle - startAngle >= 360) endAngle = startAngle + 359.99;
  const startOuter = polarToCartesian(cx, cy, outerR, startAngle);
  const endOuter = polarToCartesian(cx, cy, outerR, endAngle);
  const endInner = polarToCartesian(cx, cy, innerR, endAngle);
  const startInner = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${startInner.x} ${startInner.y}`,
    "Z",
  ].join(" ");
}
