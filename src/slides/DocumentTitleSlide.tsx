import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { Logo } from "../primitives/Logo";

/** Report/document cover: square photo block on the left, title+subtitle on the right. */
export function DocumentTitleSlide({
  title,
  subtitle,
  imageUrl,
  imageBg = "var(--sv-orange)",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageUrl?: string;
  imageBg?: string;
}) {
  return (
    <SlideFrame footer="none">
      <div
        style={{
          position: "absolute",
          left: 40,
          top: 40,
          bottom: 40,
          width: 480,
          background: imageBg,
          backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div style={{ position: "absolute", left: 560, top: 220, width: 620 }}>
        <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 40, color: "var(--sv-orange)", lineHeight: 1.2, textTransform: "uppercase" }}>
          {title}
        </div>
        {subtitle && <div style={{ marginTop: 12, fontFamily: "var(--sv-font-body)", fontStyle: "italic", fontSize: 20, color: "var(--sv-bleu-nuit)" }}>{subtitle}</div>}
      </div>
      <div style={{ position: "absolute", right: 40, bottom: 34 }}>
        <Logo withSignature size={24} />
      </div>
    </SlideFrame>
  );
}
