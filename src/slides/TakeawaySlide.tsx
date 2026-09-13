import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

/** "Take away message" slide: bullet list of key points beside a photo. */
export function TakeawaySlide({
  eyebrow = "Take away message",
  title,
  items,
  imageUrl,
  pageNumber,
}: {
  eyebrow?: string;
  title?: string;
  items: string[];
  imageUrl: string;
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, width: 420 }}>
        <ul style={{ margin: "180px 0 0", paddingLeft: 18, fontFamily: "var(--sv-font-body)", fontSize: 16, color: "var(--sv-bleu-nuit)", lineHeight: 2 }}>
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
      <div style={{ position: "absolute", right: 68, top: 44, width: 420 }}>
        <SlideHeading eyebrow={eyebrow} title={title ?? ""} align="left" />
      </div>
      <div style={{ position: "absolute", right: 130, top: 280, width: 420, height: 400, backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }} />
    </SlideFrame>
  );
}
