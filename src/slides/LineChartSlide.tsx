import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { SlideFrame } from "../primitives/SlideFrame";
import { SlideHeading } from "../primitives/Heading";

const SERIES_COLORS = ["var(--sv-bleu-nuit)", "var(--sv-orange)", "var(--sv-cyan)", "var(--sv-vert)"];

/** Trend / line chart, for time-series or multi-series comparisons. */
export function LineChartSlide({
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
          <LineChart data={data}>
            <CartesianGrid vertical={false} stroke="var(--sv-grey)" />
            <XAxis dataKey="name" stroke="var(--sv-bleu-nuit)" fontSize={12} tickLine={false} />
            <YAxis stroke="var(--sv-bleu-nuit)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend />
            {keys.map((k, i) => (
              <Line key={k} type="monotone" dataKey={k} stroke={SERIES_COLORS[i % SERIES_COLORS.length]} strokeWidth={2.5} dot={false} isAnimationActive={false} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </SlideFrame>
  );
}
