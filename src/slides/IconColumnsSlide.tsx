import React from "react";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";
import { ColumnItem } from "../primitives/Panels";
import { Icon, IconName } from "../icons/Icon";

export interface IconColumn {
  icon: IconName;
  title: string;
  body: string;
}

/** Heading + 2-4 icon-led columns — the Servier "text slide avec colonnes" pattern. */
export function IconColumnsSlide({
  eyebrow,
  title,
  columns,
  pageNumber,
}: {
  eyebrow: string;
  title: string;
  columns: IconColumn[];
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="bar" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 68, top: 190, right: 68, bottom: 80, display: "flex", gap: 48 }}>
        {columns.map((c, i) => (
          <div key={i} style={{ flex: 1 }}>
            <ColumnItem icon={<Icon name={c.icon} size={32} />} title={c.title}>
              {c.body}
            </ColumnItem>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
