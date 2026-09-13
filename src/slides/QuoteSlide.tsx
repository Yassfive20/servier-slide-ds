import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";

/** Portrait with a smile-shaped mask, oversized quote marks, quote text and attribution. */
export function QuoteSlide({
  eyebrow = "Quote slide",
  title,
  quote,
  body,
  name,
  role,
  imageUrl,
  pageNumber,
}: {
  eyebrow?: string;
  title?: string;
  quote: string;
  body?: string;
  name: string;
  role: string;
  imageUrl: string;
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44 }}>
        <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 28, color: "var(--sv-bleu-nuit)" }}>{eyebrow}</div>
        {title && <div style={{ fontFamily: "var(--sv-font-heading)", fontSize: 28, color: "var(--sv-bleu-nuit)" }}>{title}</div>}
      </div>

      <div style={{ position: "absolute", left: 68, top: 190, width: 340, height: 310 }}>
        <div style={{ position: "absolute", left: 32, top: 35, width: 275, height: 275, borderRadius: "50%", background: "var(--sv-orange)" }} />
        <div style={{ position: "absolute", left: 32, top: 0, width: 275, height: 275, backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      </div>
      <div style={{ position: "absolute", left: 68, top: 520 }}>
        <div style={{ fontFamily: "var(--sv-font-body)", color: "var(--sv-orange)", fontSize: 16 }}>{name},</div>
        <div style={{ fontFamily: "var(--sv-font-body)", color: "var(--sv-orange)", fontSize: 16 }}>{role}</div>
      </div>

      <div style={{ position: "absolute", left: 470, top: 190, right: 68 }}>
        <div style={{ fontFamily: "var(--sv-font-heading)", color: "var(--sv-orange)", fontSize: 40, lineHeight: 0.6 }}>&laquo;</div>
        <p style={{ marginTop: 24, fontFamily: "var(--sv-font-body)", fontSize: 19, color: "var(--sv-bleu-nuit)", lineHeight: 1.5 }}>{quote}</p>
        <div style={{ textAlign: "right", fontFamily: "var(--sv-font-heading)", color: "var(--sv-orange)", fontSize: 40, lineHeight: 0.6 }}>&raquo;</div>
        {body && <p style={{ marginTop: 20, fontFamily: "var(--sv-font-body)", fontSize: 15, color: "var(--sv-bleu-nuit)", lineHeight: 1.6 }}>{body}</p>}
      </div>
    </SlideFrame>
  );
}
