import React from "react";
import { DocFrame, th, td, code } from "./DocFrame";

const ROWS: [string, string, string][] = [
  ["Rank named things by size", "Ranked bar — sorted, one bar emphasised", "ExhibitBarRanked"],
  ["One item’s story against context", "Ranked bar in emphasis mode — subject in colour, rest recede", "ExhibitBarRanked"],
  ["Compare 2–3 scenarios per category", "Grouped column", "ExhibitColumnGrouped"],
  ["See composition across items", "100% stacked bar, horizontal", "ExhibitStacked100"],
  ["How a total moves A → B", "Waterfall", "ExhibitWaterfall"],
  ["Measures against thresholds", "Bullet vs target", "ExhibitBulletTarget"],
  ["Change over time", "Line, end-labelled — no legend box", "ExhibitLineTrend"],
  ["Headline numbers", "KPI row — never a one-bar bar chart", "ExhibitKpiRow"],
];

/** Chart picker — the reader has to … → use this form. Seven chart forms cover every quantitative claim a steering deck makes. */
export function ExhibitRulesChartPicker() {
  return (
    <DocFrame eyebrow="Exhibit rules · 2 of 5" title="Chart picker: the reader has to… → use"
              note="Start from the reader's job, not the data shape. If none of these fit, the claim is probably a diagram (see the diagram picker) or two exhibits.">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr><th style={th}>The reader has to…</th><th style={th}>Use</th><th style={th}>Card</th></tr>
        </thead>
        <tbody>
          {ROWS.map(([job, form, card]) => (
            <tr key={job}>
              <td style={{ ...td, fontWeight: 700, width: 340 }}>{job}</td>
              <td style={{ ...td, color: "var(--sv-ex-ink-2)" }}>{form}</td>
              <td style={{ ...td, ...code, width: 220 }}>{card}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DocFrame>
  );
}
