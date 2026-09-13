import React from "react";
import { Logo } from "./Logo";

export const SLIDE_WIDTH = 1280;
export const SLIDE_HEIGHT = 720;

export interface SlideFrameProps {
  children: React.ReactNode;
  background?: string;
  pageNumber?: number;
  footerTitle?: string;
  footer?: "minimal" | "bar" | "none";
  logoVariant?: "color" | "white" | "navy";
  className?: string;
}

/**
 * The 16:9 canvas shared by every slide component: fixed size, consistent page-number
 * + logo placement, optional footer bar. Compose slide content as children.
 */
export function SlideFrame({
  children,
  background = "#fff",
  pageNumber,
  footerTitle,
  footer = "bar",
  logoVariant = "color",
  className,
}: SlideFrameProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
        background,
        overflow: "hidden",
        fontFamily: "var(--sv-font-body)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>{children}</div>

      {footer === "bar" && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 56,
            background: "var(--sv-footer-bg)",
            display: "flex",
            alignItems: "center",
            padding: "0 40px",
            gap: 16,
            boxSizing: "border-box",
          }}
        >
          {pageNumber != null && (
            <span style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: "var(--sv-bleu-nuit)", fontSize: 14 }}>{pageNumber}</span>
          )}
          {footerTitle && (
            <span style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: "var(--sv-bleu-nuit)", fontSize: 14 }}>{footerTitle}</span>
          )}
          <span style={{ marginLeft: "auto" }}>
            <Logo size={16} />
          </span>
        </div>
      )}

      {footer === "minimal" && (
        <>
          {pageNumber != null && (
            <span style={{ position: "absolute", left: 40, bottom: 20, fontFamily: "var(--sv-font-heading)", fontWeight: 700, color: "var(--sv-bleu-nuit)", fontSize: 13 }}>
              {pageNumber}
            </span>
          )}
          <span style={{ position: "absolute", right: 40, bottom: 20 }}>
            <Logo size={18} variant={logoVariant} />
          </span>
        </>
      )}
    </div>
  );
}
