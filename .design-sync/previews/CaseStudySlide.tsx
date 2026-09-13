import React from "react";
import { CaseStudySlide } from "servier-slide-ds";

export function NordicLaunchCaseStudy() {
  return (
    <CaseStudySlide
      title="Accelerating Nordic launch readiness"
      challenge="A mid-size biopharma needed to launch in four Nordic markets within eight months, but had no unified pricing corridor and fragmented local evidence packages."
      approach="We built a cross-market pricing model, aligned HTA dossiers to a shared evidence core, and ran parallel payer engagement in Sweden, Denmark, Norway, and Finland."
      result="Reimbursement secured in all four markets within 7 months, with pricing variance held under 12% — ahead of the original 9-month target."
      imageUrl="https://picsum.photos/id/1015/400/640"
      pageNumber={27}
    />
  );
}

export function FieldForceRedesignCaseStudy() {
  return (
    <CaseStudySlide
      eyebrow="Commercial case study"
      title="Right-sizing the oncology field force"
      challenge="Client's oncology sales organization was overextended across low-potential territories, diluting share of voice with key prescribers."
      approach="Segmented 1,800 HCPs by prescribing potential and access complexity, then redesigned territories around a tiered call-frequency model."
      result="Field force reduced by 18% while call reach on top-decile prescribers increased 24%, lifting new-patient starts within two quarters."
    />
  );
}
