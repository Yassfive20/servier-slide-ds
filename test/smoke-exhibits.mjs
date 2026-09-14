import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as DS from "../dist/index.js";

const skip = new Set(["ExhibitIcon"]);
const names = Object.keys(DS).filter((k) => k.startsWith("Exhibit") && !skip.has(k));

let failed = 0;
for (const name of names) {
  const Comp = DS[name];
  try {
    const html = renderToStaticMarkup(React.createElement(Comp, {}));
    if (!html || html.length < 50) throw new Error("suspiciously short output");
  } catch (e) {
    console.error(`RENDER FAIL: ${name}:`, e.message);
    failed++;
  }
}

// ExhibitIcon needs a name prop - spot-check one
try {
  const html = renderToStaticMarkup(React.createElement(DS.ExhibitIcon, { name: DS.EXHIBIT_ICON_NAMES[0] }));
  if (!html) throw new Error("empty output");
} catch (e) {
  console.error("RENDER FAIL: ExhibitIcon:", e.message);
  failed++;
}

console.log(`\n${names.length + 1 - failed}/${names.length + 1} exhibit components rendered OK`);
if (failed) process.exit(1);
