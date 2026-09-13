import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

/** Grid of team members: photo, name, role — 3 to 5 per row. */
export function TeamSlide({
  eyebrow = "Team",
  title,
  members,
  pageNumber,
}: {
  eyebrow?: string;
  title: string;
  members: TeamMember[];
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 68, top: 200, right: 68, display: "flex", flexWrap: "wrap", gap: 28 }}>
        {members.map((m, i) => (
          <div key={i} style={{ width: 160, textAlign: "center" }}>
            <div style={{ width: 160, height: 160, borderRadius: "50%", backgroundImage: `url(${m.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center", marginBottom: 12 }} />
            <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 15, color: "var(--sv-bleu-nuit)" }}>{m.name}</div>
            <div style={{ fontFamily: "var(--sv-font-body)", fontSize: 13, color: "var(--sv-orange)" }}>{m.role}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
