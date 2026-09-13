import React from "react";
import { TeamSlide } from "servier-slide-ds";

export function EngagementTeam() {
  return (
    <TeamSlide
      title="Your engagement team"
      members={[
        { name: "Claire Mercier", role: "Engagement Lead", imageUrl: "https://picsum.photos/id/64/300/300" },
        { name: "Daniel Okafor", role: "Market Access Director", imageUrl: "https://picsum.photos/id/91/300/300" },
        { name: "Sofia Marín", role: "Health Economics Lead", imageUrl: "https://picsum.photos/id/65/300/300" },
        { name: "Tom Bergström", role: "Regulatory Affairs Advisor", imageUrl: "https://picsum.photos/id/177/300/300" },
      ]}
      pageNumber={3}
    />
  );
}

export function CoreAdvisoryBoard() {
  return (
    <TeamSlide
      eyebrow="Advisory board"
      title="Core advisory board members"
      members={[
        { name: "Dr. Anke Hoffmann", role: "Cardiology, Berlin", imageUrl: "https://picsum.photos/id/338/300/300" },
        { name: "Dr. Louis Fabre", role: "Health Economics, Lyon", imageUrl: "https://picsum.photos/id/342/300/300" },
        { name: "Dr. Maria Conti", role: "Oncology, Milan", imageUrl: "https://picsum.photos/id/349/300/300" },
      ]}
    />
  );
}
