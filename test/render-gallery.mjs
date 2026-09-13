import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import fs from "node:fs";
import * as DS from "../dist/index.js";

const IMG = "https://picsum.photos/id/64/500/500";

const picks = {
  TitleSlideCover: DS.TitleSlideCover({ title: "Title of your presentation in ", accent: "few lines", date: "13/09/2026" }),
  SectionDividerSlide: DS.SectionDividerSlide({ partLabel: "Part 1", subtitle: "Subtitle", tag: "TITLE", pageNumber: 3 }),
  BulletContentSlide: DS.BulletContentSlide({
    eyebrow: "Text slide",
    title: "Consectetuer adipiscing elit",
    items: [
      { lead: "Lorem ipsum dolor sit amet", body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." },
      { lead: "Ut enim ad minim veniam", body: "Quis nostrud exercitation ullamco laboris nisi ut aliquip." },
    ],
    pageNumber: 5,
    footerTitle: "Footer of your presentation",
  }),
  QuoteSlide: DS.QuoteSlide({ title: "Dressez un portrait", quote: "Une citation est un extrait court d'une œuvre écrite.", name: "Name Surname", role: "Profession and position", imageUrl: IMG, pageNumber: 8 }),
  StepsSlide: DS.StepsSlide({
    eyebrow: "Numbers slide",
    title: "Steps or key figures",
    intro: "Itaque earum rerum hic tenetur a sapiente delectus.",
    steps: [1, 2, 3, 4].map((n) => ({ label: n, caption: "Nam libero tempore, cum soluta nobis est eligendi optio" })),
    pageNumber: 10,
  }),
  SegmentedRingChartSlide: DS.SegmentedRingChartSlide({
    eyebrow: "Graph slide",
    title: "Camembert stylisé",
    intro: "Itaque earum rerum hic tenetur a sapiente delectus.",
    segments: [
      { label: "quia aspernatur aut odit", value: 45, color: "var(--sv-orange)" },
      { label: "quia voluptas sit aspernatur", value: 6, color: "var(--sv-cyan)" },
      { label: "sit aspernatur aut odit", value: 37, color: "var(--sv-bleu-nuit)" },
      { label: "quia voluptas aut odit", value: 12, color: "var(--sv-violet)" },
    ],
    pageNumber: 17,
  }),
  ProcessFlowSlide: DS.ProcessFlowSlide({
    title: "Our process",
    steps: [
      { title: "Discover", body: "Understand the context", icon: "peopleSearch" },
      { title: "Design", body: "Shape the solution", icon: "peopleIdea" },
      { title: "Deliver", body: "Ship and measure", icon: "check" },
    ],
  }),
  TwoByTwoMatrixSlide: DS.TwoByTwoMatrixSlide({
    title: "Prioritization matrix",
    xAxis: ["Low effort", "High effort"],
    yAxis: ["Low impact", "High impact"],
    quadrants: [
      { label: "Quick wins", items: ["Automate reporting", "Simplify onboarding"] },
      { label: "Major projects", items: ["Platform migration"] },
      { label: "Fill-ins", items: ["Minor UI tweaks"] },
      { label: "Thankless tasks", items: ["Legacy cleanup"] },
    ],
  }),
  BenchmarkingTableSlide: DS.BenchmarkingTableSlide({
    title: "Competitive benchmark",
    columns: ["Us", "Competitor A", "Competitor B"],
    rows: [
      { criterion: "Regulatory coverage", values: [true, false, true] },
      { criterion: "Time to market", values: ["6 mo", "9 mo", "12 mo"] },
      { criterion: "Local presence", values: [true, true, false] },
    ],
    highlightColumn: 0,
  }),
  ClosingSlide: DS.ClosingSlide({}),
};

const outDir = "test/gallery";
fs.mkdirSync(outDir, { recursive: true });

for (const [name, element] of Object.entries(picks)) {
  const html = renderToStaticMarkup(element);
  const page = `<!doctype html><html><head><meta charset="utf-8">
  <link rel="stylesheet" href="../../dist/styles.css">
  <style>body{margin:0;background:#eee}</style>
  </head><body>${html}</body></html>`;
  fs.writeFileSync(`${outDir}/${name}.html`, page);
}
console.log("wrote", Object.keys(picks).length, "gallery pages to", outDir);
