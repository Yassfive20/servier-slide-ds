import React from "react";

/** A flat rectangular panel/card in a neutral tint (beige, lavender, grey) — used for column grids. */
export function Panel({ bg = "var(--sv-grey-light)", children, style }: { bg?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: bg, padding: 24, boxSizing: "border-box", height: "100%", ...style }}>{children}</div>
  );
}

/** Full-width colored header/footer strip (navy or orange), used to frame panel grids. */
export function Bar({ color = "var(--sv-orange)", children }: { color?: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: color,
        color: "#fff",
        textAlign: "center",
        fontFamily: "var(--sv-font-heading)",
        fontWeight: 700,
        fontSize: 16,
        padding: "14px 24px",
        boxSizing: "border-box",
        letterSpacing: 0.5,
      }}
    >
      {children}
    </div>
  );
}

/** Icon/title/body column item, repeated 2-4 across in "panels" / column slides. */
export function ColumnItem({
  icon,
  title,
  children,
  align = "left",
}: {
  icon?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div style={{ textAlign: align }}>
      {icon && <div style={{ marginBottom: 12, display: "flex", justifyContent: align === "center" ? "center" : "flex-start" }}>{icon}</div>}
      <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: "var(--sv-orange)", fontSize: 16, marginBottom: 8 }}>{title}</div>
      {children && <div style={{ fontFamily: "var(--sv-font-body)", color: "var(--sv-bleu-nuit)", fontSize: 15, lineHeight: 1.5 }}>{children}</div>}
    </div>
  );
}

/** Solid navy (or orange) callout box for a supporting quote/paragraph, overlapping photos or chart panels. */
export function Callout({ color = "var(--sv-bleu-nuit)", children }: { color?: string; children: React.ReactNode }) {
  return (
    <div style={{ background: color, color: "#fff", padding: 28, fontFamily: "var(--sv-font-body)", fontSize: 16, lineHeight: 1.55, boxSizing: "border-box" }}>
      {children}
    </div>
  );
}
