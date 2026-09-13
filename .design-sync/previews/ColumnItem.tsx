import React from "react";
import { ColumnItem, Icon } from "servier-slide-ds";

export function WithIcon() {
  return (
    <div style={{ width: 260 }}>
      <ColumnItem icon={<Icon name="flask" size={32} />} title="Clinical evidence">
        Phase III data package supports a differentiated efficacy claim versus standard of care.
      </ColumnItem>
    </div>
  );
}

export function CenteredNoBody() {
  return (
    <div style={{ width: 220 }}>
      <ColumnItem icon={<Icon name="target" size={32} />} title="Market access" align="center" />
    </div>
  );
}

export function TextOnly() {
  return (
    <div style={{ width: 260 }}>
      <ColumnItem title="Regulatory pathway">
        Rolling submission planned in the EU, standard review in the US and Japan.
      </ColumnItem>
    </div>
  );
}
