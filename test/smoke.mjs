import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as DS from "../dist/index.js";

const IMG = "https://picsum.photos/400/400";

const cases = {
  TitleSlideCover: { title: "Title of your presentation in", accent: "few lines", date: "13/09/2026" },
  TitleSlidePhoto: { title: "Title of your", accent: "presentation", date: "13/09/2026", imageUrl: IMG },
  DocumentTitleSlide: { title: "Document title", subtitle: "Subtitle", imageUrl: IMG },
  SectionDividerSlide: { partLabel: "Part 1", subtitle: "Subtitle", tag: "TITLE", pageNumber: 3 },
  AgendaSlide: { sections: [
    { number: 1, title: "Title part 1", items: ["Slide 1", "Slide 2"] },
    { number: 2, title: "Title part 2", items: ["Slide 1"] },
    { number: 3, title: "Title part 3", items: ["Slide 1", "Slide 2"] },
    { number: 4, title: "Title part 4", items: ["Slide 1"] },
  ], pageNumber: 5 },
  ClosingSlide: { message: "Thank you" },
  BulletContentSlide: { eyebrow: "Text slide", title: "Consectetuer adipiscing elit", items: [{ lead: "Lorem ipsum", body: "Dolor sit amet" }], pageNumber: 5, footerTitle: "Footer" },
  TextSlide: { eyebrow: "Text slide", title: "La slide texte", paragraphs: ["Lorem ipsum dolor sit amet."], pageNumber: 6 },
  TwoColumnTextSlide: { eyebrow: "Text slide", title: "Avec deux colonnes", columns: ["Col 1 text", "Col 2 text"], pageNumber: 9 },
  IconColumnsSlide: { eyebrow: "Text slide", title: "Avec trois colonnes", columns: [
    { icon: "peopleIdea", title: "Lorem ipsum", body: "Body text" },
    { icon: "cellSearch", title: "Lorem ipsum", body: "Body text" },
    { icon: "peopleSearch", title: "Lorem ipsum", body: "Body text" },
  ], pageNumber: 13 },
  ImageTextSlide: { eyebrow: "Text and image", title: "Pour illustrer vos propos", paragraphs: ["Para one", "Para two"], imageUrl: IMG, pageNumber: 7 },
  QuoteSlide: { title: "Dressez un portrait", quote: "Une citation est un extrait court.", body: "Body text", name: "Name Surname", role: "Profession", imageUrl: IMG, pageNumber: 8 },
  StepsSlide: { eyebrow: "Numbers slide", title: "Steps or key figures", intro: "Intro text", steps: [
    { label: 1, caption: "Caption one" },
    { label: 2, caption: "Caption two" },
    { label: 3, caption: "Caption three" },
    { label: 4, caption: "Caption four" },
  ], pageNumber: 10 },
  KeyFiguresSlide: { eyebrow: "Key figures", title: "Les chiffres significatifs", intro: "Intro text", figures: [
    { value: "1er", caption: "Caption" },
    { value: "5M", caption: "Caption" },
    { value: "+21", caption: "Caption" },
  ], pageNumber: 15 },
  PercentageRingsSlide: { eyebrow: "Percentage slide", title: "Représenté avec le sourire", intro: "Intro text", stats: [
    { value: 22, caption: "Caption" },
    { value: 50, caption: "Caption" },
    { value: 95, caption: "Caption" },
  ], pageNumber: 14 },
  PanelsSlide: { eyebrow: "4 panels slide", title: "Comme un organigram", topBar: "Itaque earum rerum", panels: [
    { title: "Lorem ipsum", body: "Body" },
    { title: "Lorem ipsum", body: "Body" },
    { title: "Lorem ipsum", body: "Body" },
    { title: "Lorem ipsum", body: "Body" },
  ], pageNumber: 11 },
  SegmentedRingChartSlide: { eyebrow: "Graph slide", title: "Camembert stylisé", intro: "Intro", segments: [
    { label: "quia aspernatur", value: 45, color: "var(--sv-orange)" },
    { label: "quia voluptas", value: 6, color: "var(--sv-cyan)" },
    { label: "sit aspernatur", value: 37, color: "var(--sv-bleu-nuit)" },
    { label: "quia voluptas", value: 12, color: "var(--sv-violet)" },
  ], pageNumber: 17 },
  DonutLegendChartSlide: { eyebrow: "Graph slide", title: "Avec légende", intro: "Intro", segments: [
    { label: "1er trim.", value: 59, color: "var(--sv-bleu-nuit)" },
    { label: "2e trim.", value: 23, color: "var(--sv-violet)" },
    { label: "3e trim.", value: 10, color: "var(--sv-orange)" },
    { label: "4e trim.", value: 9, color: "var(--sv-jaune)" },
  ], pageNumber: 18 },
  RadialIconWheelSlide: { title: "Graph slide", items: [
    { icon: "cardio", label: "Lorem ipsum", caption: "caption" },
    { icon: "peopleSearch", label: "Lorem ipsum", caption: "caption" },
    { icon: "headCross", label: "Lorem ipsum", caption: "caption" },
    { icon: "pointingHand", label: "Lorem ipsum", caption: "caption" },
    { icon: "peopleIdea", label: "Lorem ipsum", caption: "caption" },
  ], pageNumber: 16 },
  BarChartSlide: { eyebrow: "Graph slide", title: "Histogramme", data: [
    { name: "Cat 1", "Série 1": 10, "Série 2": 20 },
    { name: "Cat 2", "Série 1": 15, "Série 2": 8 },
  ], keys: ["Série 1", "Série 2"], pageNumber: 19 },
  LineChartSlide: { eyebrow: "Graph slide", title: "Trend", data: [
    { name: "Jan", A: 10, B: 20 },
    { name: "Feb", A: 15, B: 18 },
  ], keys: ["A", "B"] },
  TimelineSlide: { title: "Timeline", events: [
    { date: "01/24", caption: "caption" },
    { date: "02/24", caption: "caption" },
    { date: "03/24", caption: "caption" },
  ], pageNumber: 20 },
  TakeawaySlide: { title: "À retenir", items: ["Point one", "Point two"], imageUrl: IMG, pageNumber: 21 },
  BenchmarkingTableSlide: { title: "Competitive benchmark", columns: ["Us", "Competitor A", "Competitor B"], rows: [
    { criterion: "Feature 1", values: [true, false, true] },
    { criterion: "Feature 2", values: [true, true, "Partial"] },
  ], highlightColumn: 0 },
  ComparisonSlide: { title: "Option comparison", cards: [
    { title: "Option A", items: ["Point 1", "Point 2"], highlighted: true },
    { title: "Option B", items: ["Point 1", "Point 2"] },
  ] },
  TwoByTwoMatrixSlide: { title: "Prioritization matrix", xAxis: ["Low effort", "High effort"], yAxis: ["Low impact", "High impact"], quadrants: [
    { label: "Quick wins", items: ["Item"] },
    { label: "Major projects", items: ["Item"] },
    { label: "Fill-ins", items: ["Item"] },
    { label: "Thankless tasks", items: ["Item"] },
  ] },
  SWOTMatrixSlide: { strengths: ["S1"], weaknesses: ["W1"], opportunities: ["O1"], threats: ["T1"] },
  ProcessFlowSlide: { title: "Our process", steps: [
    { title: "Discover", body: "Body", icon: "peopleSearch" },
    { title: "Design", body: "Body", icon: "peopleIdea" },
    { title: "Deliver", body: "Body", icon: "check" },
  ] },
  OrgChartSlide: { title: "Team structure", root: { title: "CEO", subtitle: "Executive" }, children: [
    { title: "CFO" }, { title: "COO" }, { title: "CTO" },
  ] },
  FunnelSlide: { title: "Sales funnel", stages: [
    { label: "Leads", value: "10,000" },
    { label: "Qualified", value: "3,000" },
    { label: "Closed", value: "500" },
  ] },
  CaseStudySlide: { title: "Client success story", challenge: "Challenge text", approach: "Approach text", result: "Result text", imageUrl: IMG },
  TeamSlide: { title: "Our team", members: [
    { name: "Name One", role: "Role", imageUrl: IMG },
    { name: "Name Two", role: "Role", imageUrl: IMG },
  ] },
};

let failed = 0;
for (const [name, props] of Object.entries(cases)) {
  const Comp = DS[name];
  if (!Comp) {
    console.error(`MISSING export: ${name}`);
    failed++;
    continue;
  }
  try {
    const html = renderToStaticMarkup(React.createElement(Comp, props));
    if (!html || html.length < 50) throw new Error("suspiciously short output");
  } catch (e) {
    console.error(`RENDER FAIL: ${name}:`, e.message);
    failed++;
  }
}

console.log(`\n${Object.keys(cases).length - failed}/${Object.keys(cases).length} components rendered OK`);
if (failed) process.exit(1);
