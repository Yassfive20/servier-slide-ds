import React from "react";
import { FunnelSlide } from "servier-slide-ds";

export function PatientAccessFunnel() {
  return (
    <FunnelSlide
      title="Patient access funnel"
      stages={[
        { label: "Diagnosed patients", value: "480,000" },
        { label: "Eligible under label", value: "210,000" },
        { label: "Reimbursement approved", value: "96,000" },
        { label: "On treatment", value: "58,000" },
      ]}
      pageNumber={18}
    />
  );
}

export function PipelineConversionFunnel() {
  return (
    <FunnelSlide
      eyebrow="Commercial pipeline"
      title="HCP engagement to prescription funnel"
      stages={[
        { label: "HCPs targeted", value: "3,200" },
        { label: "Detailed by field team", value: "2,050" },
        { label: "Prescribing", value: "740" },
      ]}
    />
  );
}
