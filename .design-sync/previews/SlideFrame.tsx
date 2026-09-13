import React from "react";
import { SlideFrame, SlideHeading } from "servier-slide-ds";

export function MinimalFooter() {
  return (
    <SlideFrame pageNumber={4} footer="minimal">
      <div style={{ padding: "60px 64px" }}>
        <SlideHeading eyebrow="Market entry" title="Competitive landscape overview" />
      </div>
    </SlideFrame>
  );
}

export function BarFooter() {
  return (
    <SlideFrame pageNumber={12} footerTitle="Launch readiness assessment" footer="bar" background="var(--sv-grey-light)">
      <div style={{ padding: "60px 64px" }}>
        <SlideHeading eyebrow="Regulatory pathway" title="Filing milestones by region" />
      </div>
    </SlideFrame>
  );
}

export function DarkNoFooter() {
  return (
    <SlideFrame footer="none" background="var(--sv-bleu-nuit)">
      <div style={{ padding: "60px 64px" }}>
        <SlideHeading eyebrow="Section" title="Patient access strategy" color="#fff" />
      </div>
    </SlideFrame>
  );
}
