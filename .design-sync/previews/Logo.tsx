import React from "react";
import { Logo } from "servier-slide-ds";

export function ColorMark() {
  return <Logo variant="color" size={32} />;
}

export function ColorWithSignature() {
  return <Logo variant="color" size={32} withSignature />;
}

export function WhiteOnDark() {
  return (
    <div style={{ background: "var(--sv-bleu-nuit)", padding: 24, display: "inline-block" }}>
      <Logo variant="white" size={32} withSignature />
    </div>
  );
}

export function NavySmall() {
  return <Logo variant="navy" size={18} />;
}
