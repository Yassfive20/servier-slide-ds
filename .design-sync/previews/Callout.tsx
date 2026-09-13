import React from "react";
import { Callout } from "servier-slide-ds";

export function NavyQuote() {
  return (
    <div style={{ width: 420 }}>
      <Callout>
        "Payers consistently cite unmet need in second-line therapy as the deciding factor for formulary placement."
      </Callout>
    </div>
  );
}

export function OrangeStat() {
  return (
    <div style={{ width: 420 }}>
      <Callout color="var(--sv-orange)">
        68% of surveyed physicians would switch within the first year of launch, given comparable access terms.
      </Callout>
    </div>
  );
}
