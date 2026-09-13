import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SmileHalf } from "../primitives/Smile";
import { Logo } from "../primitives/Logo";

/** Cover / title slide — full-bleed background, swoosh bleeding off the left edge, bold title. */
export function TitleSlideCover({
  title,
  accent,
  date,
  dark = true,
}: {
  title: React.ReactNode;
  accent?: React.ReactNode;
  date?: string;
  dark?: boolean;
}) {
  const bg = dark ? "var(--sv-bleu-nuit)" : "#fff";
  const titleColor = dark ? "#fff" : "var(--sv-bleu-nuit)";
  const smileColor = dark ? "var(--sv-bleu-descendu)" : "var(--sv-bleu-clair)";
  return (
    <SlideFrame background={bg} footer="none">
      <SmileHalf edge="left" color={smileColor} size={560} thickness={90} />
      <div style={{ position: "absolute", left: 100, top: 130, width: 480 }}>
        <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: "var(--sv-size-title-cover)", color: titleColor, lineHeight: 1.2 }}>
          {title} {accent && <span style={{ color: "var(--sv-orange)" }}>{accent}</span>}
        </div>
      </div>
      {date && (
        <div style={{ position: "absolute", left: 100, bottom: 40, fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: titleColor, fontSize: 13 }}>
          {date}
        </div>
      )}
      <div style={{ position: "absolute", right: 40, bottom: 34 }}>
        <Logo variant={dark ? "white" : "color"} withSignature size={24} />
      </div>
    </SlideFrame>
  );
}
