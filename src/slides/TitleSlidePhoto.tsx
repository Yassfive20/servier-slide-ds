import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SmileHalf } from "../primitives/Smile";
import { Logo } from "../primitives/Logo";

/** Title slide variant with a full-bleed photo on the right two-thirds. */
export function TitleSlidePhoto({
  title,
  accent,
  date,
  imageUrl,
}: {
  title: React.ReactNode;
  accent?: React.ReactNode;
  date?: string;
  imageUrl: string;
}) {
  return (
    <SlideFrame footer="none">
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 460, background: "var(--sv-bleu-nuit)", overflow: "hidden" }}>
        <SmileHalf edge="left" color="var(--sv-bleu-descendu)" size={520} thickness={80} />
        <div style={{ position: "absolute", left: 48, top: 110, width: 360 }}>
          <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 32, color: "#fff", lineHeight: 1.2 }}>
            {title} {accent && <span style={{ color: "var(--sv-orange)" }}>{accent}</span>}
          </div>
        </div>
        {date && <div style={{ position: "absolute", left: 48, bottom: 34, color: "#fff", fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 13 }}>{date}</div>}
      </div>
      <div style={{ position: "absolute", left: 460, right: 0, top: 0, bottom: 0, backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", right: 40, bottom: 34 }}>
        <Logo variant="white" withSignature size={22} />
      </div>
    </SlideFrame>
  );
}
