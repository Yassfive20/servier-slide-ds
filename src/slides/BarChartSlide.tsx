import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

const SERIES_COLORS = ["var(--sv-bleu-nuit)", "var(--sv-orange)", "var(--sv-cyan)", "var(--sv-jaune)"];

/** Real column/bar chart (histogram), for actual multi-series data. */
export function BarChartSlide({
  eyebrow,
  title,
  data,
  keys,
  pageNumber,
}: {
  eyebrow: string;
  title: string;
  data: Record<string, string | number>[];
  keys: string[];
  pageNumber?: number;
}) {
  return (
    <SlideFrame footer="minimal" pageNumber={pageNumber}>
      <div style={{ position: "absolute", left: 68, top: 44, right: 68 }}>
        <SlideHeading eyebrow={eyebrow} title={title} />
      </div>
      <div style={{ position: "absolute", left: 68, top: 190, right: 68, bottom: 60 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid vertical={false} stroke="var(--sv-grey)" />
            <XAxis dataKey="name" stroke="var(--sv-bleu-nuit)" fontSize={12} tickLine={false} />
            <YAxis stroke="var(--sv-bleu-nuit)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend />
            {keys.map((k, i) => (
              <Bar key={k} dataKey={k} fill={SERIES_COLORS[i % SERIES_COLORS.length]} radius={[3, 3, 0, 0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SlideFrame>
  );
}
