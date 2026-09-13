import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";
import { Icon } from "../icons/Icon";

export interface BenchmarkRow {
  criterion: string;
  /** true = check, false = cross/blank, string = custom cell text */
  values: (boolean | string)[];
}

/** Comparison table: criteria down the rows, competitors/options across the columns. */
export function BenchmarkingTableSlide({
  eyebrow = "Benchmarking",
  title,
  columns,
  rows,
  highlightColumn,
  pageNumber,
}: {
  eyebrow?: string;
  title: string;
  columns: string[];
  rows: BenchmarkRow[];
  highlightColumn?: number;
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 68, top: 190, right: 68, bottom: 60 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--sv-font-body)" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 13, color: "var(--sv-bleu-nuit)" }} />
              {columns.map((c, i) => (
                <th
                  key={i}
                  style={{
                    padding: "10px 12px",
                    fontFamily: "var(--sv-font-heading)",
                    fontWeight: 700,
                    fontSize: 14,
                    color: i === highlightColumn ? "#fff" : "var(--sv-bleu-nuit)",
                    background: i === highlightColumn ? "var(--sv-bleu-nuit)" : "transparent",
                  }}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri} style={{ background: ri % 2 ? "var(--sv-grey-light)" : "transparent" }}>
                <td style={{ padding: "10px 12px", fontSize: 13, color: "var(--sv-bleu-nuit)", fontWeight: 600 }}>{r.criterion}</td>
                {r.values.map((v, ci) => (
                  <td
                    key={ci}
                    style={{
                      textAlign: "center",
                      padding: "10px 12px",
                      background: ci === highlightColumn ? "var(--sv-bleu-clair)" : "transparent",
                      fontSize: 13,
                      color: "var(--sv-bleu-nuit)",
                    }}
                  >
                    {typeof v === "boolean" ? v && <Icon name="check" size={18} color="var(--sv-orange)" /> : v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideFrame>
  );
}
