import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";
import { Bar, Panel } from "../primitives/Panels";

export interface PanelItem {
  title: string;
  body: string;
}

/** 3-4 flat panels in a row, framed by an orange top bar and/or navy bottom bar. */
export function PanelsSlide({
  eyebrow,
  title,
  topBar,
  bottomBar,
  panels,
  panelBg = "var(--sv-grey-light)",
  pageNumber,
}: {
  eyebrow: string;
  title: string;
  topBar?: string;
  bottomBar?: string;
  panels: PanelItem[];
  panelBg?: string;
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 68, right: 68, top: 170 }}>
        {topBar && <Bar color="var(--sv-orange)">{topBar}</Bar>}
        <div style={{ display: "flex", gap: 18, marginTop: topBar ? 24 : 0 }}>
          {panels.map((p, i) => (
            <div key={i} style={{ flex: 1, minHeight: 320 }}>
              <Panel bg={panelBg}>
                <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: "var(--sv-orange)", fontSize: 15, marginBottom: 10 }}>{p.title}</div>
                <div style={{ fontFamily: "var(--sv-font-body)", color: "var(--sv-bleu-nuit)", fontSize: 14, lineHeight: 1.5 }}>{p.body}</div>
              </Panel>
            </div>
          ))}
        </div>
        {bottomBar && (
          <div style={{ marginTop: 24 }}>
            <Bar color="var(--sv-bleu-nuit)">{bottomBar}</Bar>
          </div>
        )}
      </div>
    </SlideFrame>
  );
}
