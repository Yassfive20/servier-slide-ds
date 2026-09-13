import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { RadialIconRing } from "../primitives/RingChart";
import { Icon, IconName } from "../icons/Icon";

export interface WheelItem {
  icon: IconName;
  label: string;
  caption?: string;
}

/** "Graph slide" — icons and labels distributed evenly around a half-ring track. */
export function RadialIconWheelSlide({ title, items, pageNumber }: { title: string; items: WheelItem[]; pageNumber?: number }) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      {/* Title sits above the ring rather than nested in its hollow: the ring's
          top-center items can hang a caption up to 90px above their icon, so a
          title placed inside the hollow collides with that caption depending on
          the item count/labels - safer to keep the two areas non-overlapping. */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 50, textAlign: "center", fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 28, color: "var(--sv-bleu-nuit)" }}>
        {title}
      </div>
      <div style={{ position: "absolute", left: "50%", top: 150, transform: "translateX(-50%)" }}>
        <RadialIconRing
          size={520}
          items={items.map((it) => ({ icon: <Icon name={it.icon} size={26} color="var(--sv-bleu-nuit)" />, label: it.label, caption: it.caption }))}
        />
      </div>
    </SlideFrame>
  );
}
