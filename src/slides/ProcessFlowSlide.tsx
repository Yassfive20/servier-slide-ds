import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";
import { Icon, IconName } from "../icons/Icon";

export interface ProcessStep {
  title: string;
  body?: string;
  icon?: IconName;
}

/** Horizontal process/flow diagram: numbered nodes connected by arrows. */
export function ProcessFlowSlide({
  eyebrow = "Process",
  title,
  steps,
  pageNumber,
}: {
  eyebrow?: string;
  title: string;
  steps: ProcessStep[];
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 68, right: 68, top: 280, display: "flex", alignItems: "flex-start" }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "var(--sv-bleu-nuit)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                }}
              >
                {s.icon ? <Icon name={s.icon} size={26} color="#fff" /> : <span style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 20 }}>{i + 1}</span>}
              </div>
              <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 14, color: "var(--sv-orange)", marginBottom: 6 }}>{s.title}</div>
              {s.body && <div style={{ fontFamily: "var(--sv-font-body)", fontSize: 12, color: "var(--sv-bleu-nuit)", lineHeight: 1.5, padding: "0 6px" }}>{s.body}</div>}
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: 40, marginTop: 22 }}>
                <Icon name="arrowRight" size={24} color="var(--sv-bleu-clair)" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </SlideFrame>
  );
}
