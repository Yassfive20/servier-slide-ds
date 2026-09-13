import esbuild from "esbuild";
import { execSync } from "node:child_process";

await esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/index.js",
  format: "esm",
  platform: "browser",
  external: ["react", "react-dom", "react/jsx-runtime"],
  jsx: "automatic",
  loader: { ".css": "css" },
});

await esbuild.build({
  entryPoints: ["src/styles.css"],
  bundle: true,
  outfile: "dist/styles.css",
  loader: { ".woff2": "dataurl" },
});

execSync("npx tsc", { stdio: "inherit" });

console.log("build OK");
