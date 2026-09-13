import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";

export interface TimelineEvent {
  date: string;
  caption: string;
}

/** Horizontal dotted timeline: date labels above the line, captions below each marker. */
export function TimelineSlide({
  title,
  events,
  lineColor = "var(--sv-orange)",
  panelBg = "var(--sv-grey-light)",
  pageNumber,
}: {
  title?: string;
  events: TimelineEvent[];
  lineColor?: string;
  panelBg?: string;
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      {title && (
        <div style={{ position: "absolute", left: 68, top: 44, fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 28, color: "var(--sv-bleu-nuit)" }}>
          {title}
        </div>
      )}
      <div style={{ position: "absolute", left: 0, right: 0, top: 300, bottom: 0, background: panelBg }} />
      <div style={{ position: "absolute", left: 68, right: 68, top: 340, height: 2, background: lineColor }} />
      <div style={{ position: "absolute", left: 68, right: 68, top: 340, display: "flex", justifyContent: "space-between" }}>
        {events.map((e, i) => (
          <div key={i} style={{ position: "relative", textAlign: "center", width: `${100 / events.length}%` }}>
            <div style={{ position: "absolute", top: -50, left: "50%", transform: "translateX(-50%)", fontFamily: "var(--sv-font-body)", fontSize: 13, color: "var(--sv-bleu-nuit)", whiteSpace: "nowrap" }}>
              {e.date}
            </div>
            <div style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", width: 16, height: 16, borderRadius: "50%", background: "#fff", border: `3px solid ${lineColor}`, boxSizing: "border-box" }} />
            <div style={{ marginTop: 26, fontFamily: "var(--sv-font-body)", fontSize: 13, color: "var(--sv-bleu-nuit)", padding: "0 6px" }}>{e.caption}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
