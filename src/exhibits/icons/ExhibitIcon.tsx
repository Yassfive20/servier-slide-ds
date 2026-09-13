import React from "react";

/** Warehouse and supply-chain pictograms. Colour comes from currentColor —
 *  set it on the container, never inside the icon. */
const PATHS: Record<string, React.ReactNode> = {
  "pallet": (
    <>
      <rect x="2" y="10" width="20" height="3.2" rx="0.6"/>
            <rect x="2" y="18" width="20" height="3.2" rx="0.6"/>
            <path d="M4.5,13.2 V18 M11,13.2 V18 M19.5,13.2 V18"/>
    </>
  ),
  "pallet-load": (
    <>
      <rect x="4" y="3" width="16" height="8" rx="0.8"/>
            <path d="M12,3 V11"/>
            <rect x="2" y="12.5" width="20" height="2.8" rx="0.6"/>
            <rect x="2" y="19" width="20" height="2.6" rx="0.6"/>
            <path d="M4.5,15.3 V19 M11,15.3 V19 M19.5,15.3 V19"/>
    </>
  ),
  "carton": (
    <>
      <rect x="3" y="6.5" width="18" height="14.5" rx="0.8"/>
            <path d="M3,6.5 L12,11 L21,6.5"/>
            <path d="M12,11 V21"/>
    </>
  ),
  "cartons": (
    <>
      <rect x="2.5" y="12" width="9" height="9" rx="0.8"/>
            <rect x="12.5" y="12" width="9" height="9" rx="0.8"/>
            <rect x="7.5" y="3" width="9" height="9" rx="0.8"/>
            <path d="M7,12 V21 M17,12 V21 M12,3 V12"/>
    </>
  ),
  "handling-unit": (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="1"/>
            <rect x="6" y="8" width="7.5" height="5" rx="0.6"/>
            <path d="M7.5,15.5 H17.5 M16,8 H18 M16,11 H18"/>
    </>
  ),
  "drum": (
    <>
      <path d="M5,6.5 V17.5"/><path d="M19,6.5 V17.5"/>
            <ellipse cx="12" cy="6.5" rx="7" ry="2.6"/>
            <path d="M5,17.5 A7,2.6 0 0 0 19,17.5"/>
            <path d="M5,10.5 A7,2.6 0 0 0 19,10.5"/>
            <path d="M5,14 A7,2.6 0 0 0 19,14"/>
    </>
  ),
  "forklift": (
    <>
      <rect x="2.5" y="9" width="9.5" height="7" rx="1"/>
            <path d="M4.5,11 H9.5"/>
            <path d="M14.5,3 V16"/>
            <path d="M14.5,14 H20.5"/>
            <circle cx="6" cy="18.5" r="2.4"/><circle cx="12" cy="19" r="1.8"/>
    </>
  ),
  "pallet-jack": (
    <>
      <path d="M4,3.5 H7"/><path d="M5.5,3.5 V13"/>
            <path d="M5.5,13 H20"/><path d="M8,16.5 H20"/>
            <path d="M8,13 V16.5"/>
            <circle cx="6" cy="19" r="1.7"/><circle cx="19" cy="18.8" r="1.5"/>
    </>
  ),
  "reach-truck": (
    <>
      <rect x="2.5" y="10" width="8" height="6.5" rx="1"/>
            <path d="M13,2.5 V17"/><path d="M16.5,5 V17"/>
            <path d="M13,12 H21"/>
            <circle cx="5.5" cy="19" r="2.2"/><circle cx="14.5" cy="19.2" r="1.7"/>
    </>
  ),
  "conveyor": (
    <>
      <path d="M2,16.5 H22"/>
            <circle cx="5" cy="13.5" r="2.4"/><circle cx="11" cy="13.5" r="2.4"/>
            <circle cx="17" cy="13.5" r="2.4"/>
            <path d="M4,19 V21 M12,19 V21 M20,19 V21"/>
            <path d="M2,19 H22"/>
    </>
  ),
  "agv": (
    <>
      <rect x="2.5" y="10" width="19" height="7" rx="1.5"/>
            <path d="M12,10 V6.5"/><circle cx="12" cy="5" r="1.5"/>
            <path d="M6,13.5 H10 M14,13.5 H18"/>
            <circle cx="7" cy="19.5" r="1.8"/><circle cx="17" cy="19.5" r="1.8"/>
    </>
  ),
  "rf-gun": (
    <>
      <rect x="4" y="3.5" width="11" height="7" rx="1"/>
            <rect x="6" y="5.5" width="7" height="3.5" rx="0.5"/>
            <path d="M7.5,10.5 L6.5,20.5 H11 L12,10.5"/>
            <path d="M17,7 H21 M17,4.5 H19.5 M17,9.5 H19.5"/>
    </>
  ),
  "barcode": (
    <>
      <path d="M3,5 V19 M5.5,5 V19 M7.5,5 V19 M10.5,5 V19 M12.5,5 V19
                     M15,5 V19 M17,5 V19 M19.5,5 V19 M21,5 V19"
                  strokeWidth="1.4"/>
    </>
  ),
  "label-printer": (
    <>
      <rect x="2.5" y="9" width="19" height="7" rx="1"/>
            <path d="M6,9 V4 H18 V9"/>
            <rect x="6" y="16" width="12" height="5.5" rx="0.6"/>
            <path d="M8.5,18.5 H15.5"/>
            <circle cx="18" cy="12.5" r="0.9"/>
    </>
  ),
  "mobile-device": (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2"/>
            <path d="M6,6 H18 M6,18 H18"/>
            <path d="M10.5,20 H13.5"/>
    </>
  ),
  "warehouse": (
    <>
      <path d="M2,10 L12,3.5 L22,10"/>
            <path d="M4,10 V21 H20 V10"/>
            <rect x="9" y="14" width="6" height="7" rx="0.4"/>
            <path d="M7,21 H17"/>
    </>
  ),
  "dock-door": (
    <>
      <rect x="3.5" y="3.5" width="17" height="15" rx="1"/>
            <path d="M3.5,7.5 H20.5 M3.5,11 H20.5 M3.5,14.5 H20.5"/>
            <path d="M2,18.5 H22"/>
            <path d="M8,21 H16"/>
    </>
  ),
  "racking": (
    <>
      <path d="M3,3.5 V21 M21,3.5 V21 M12,3.5 V21"/>
            <path d="M3,9.5 H21 M3,15.5 H21 M3,21 H21"/>
            <rect x="4.5" y="5.5" width="5.5" height="4"/>
            <rect x="13.5" y="11.5" width="5.5" height="4"/>
            <rect x="4.5" y="17" width="5.5" height="4"/>
    </>
  ),
  "bin": (
    <>
      <path d="M3.5,6.5 H20.5 L18.5,20 H5.5 Z"/>
            <path d="M6.5,10.5 H17.5"/>
            <rect x="9" y="13" width="6" height="3.5" rx="0.4"/>
    </>
  ),
  "floor-sign": (
    <>
      <rect x="2.5" y="3.5" width="19" height="8" rx="1"/>
            <path d="M7,7.5 H15 M12.5,5 L15.5,7.5 L12.5,10"/>
            <path d="M12,11.5 V20.5"/>
            <path d="M7.5,20.5 H16.5"/>
    </>
  ),
  "cold-storage": (
    <>
      <path d="M12,3 V21 M4.5,7.5 L19.5,16.5 M19.5,7.5 L4.5,16.5"/>
            <path d="M9.5,5.5 L12,8 L14.5,5.5 M9.5,18.5 L12,16 L14.5,18.5"/>
            <path d="M5,11 L6.5,12 L5,13 M19,11 L17.5,12 L19,13"/>
    </>
  ),
  "hazmat": (
    <>
      <path d="M12,2.5 L21.5,12 L12,21.5 L2.5,12 Z"/>
            <path d="M12,8 V13.5"/>
            <circle cx="12" cy="16.8" r="0.9" fill="currentColor" stroke="none"/>
    </>
  ),
  "operator": (
    <>
      <circle cx="12" cy="5.5" r="3"/>
            <path d="M5.5,21 V17 C5.5,13.4 8.4,11.5 12,11.5 C15.6,11.5 18.5,13.4 18.5,17 V21"/>
            <path d="M9,12.5 L10.5,17 M15,12.5 L13.5,17"/>
    </>
  ),
  "supervisor": (
    <>
      <circle cx="9.5" cy="5.5" r="2.9"/>
            <path d="M3.5,21 V17 C3.5,13.5 6.2,11.6 9.5,11.6 C11.6,11.6 13.4,12.4 14.6,13.8"/>
            <circle cx="17.5" cy="17" r="4.5"/>
            <path d="M15.5,17 L17,18.6 L19.8,15.6"/>
    </>
  ),
  "clipboard": (
    <>
      <rect x="4" y="4" width="16" height="17.5" rx="1.5"/>
            <rect x="8.5" y="2" width="7" height="4" rx="1"/>
            <path d="M8,11 H16 M8,14.5 H16 M8,18 H13"/>
    </>
  ),
  "truck": (
    <>
      <rect x="1.5" y="6.5" width="13" height="10" rx="0.8"/>
            <path d="M14.5,16.5 V9.5 H18.5 L22,13.5 V16.5 Z"/>
            <circle cx="6" cy="18.5" r="2.2"/><circle cx="18" cy="18.5" r="2.2"/>
            <path d="M1.5,18.5 H3.8 M8.2,18.5 H15.8"/>
    </>
  ),
  "trailer": (
    <>
      <rect x="2" y="6" width="19" height="10.5" rx="0.8"/>
            <path d="M6,6 V16.5 M11,6 V16.5 M16,6 V16.5"/>
            <circle cx="7" cy="19" r="1.8"/><circle cx="11.5" cy="19" r="1.8"/>
            <path d="M2,16.5 V19"/>
    </>
  ),
  "container": (
    <>
      <rect x="1.5" y="6.5" width="21" height="11" rx="0.8"/>
            <path d="M5,6.5 V17.5 M8.5,6.5 V17.5 M12,6.5 V17.5
                     M15.5,6.5 V17.5 M19,6.5 V17.5"/>
            <path d="M3,17.5 V19.5 M21,17.5 V19.5"/>
    </>
  ),
  "inspect": (
    <>
      <circle cx="10.5" cy="10.5" r="6.5"/>
            <path d="M15.2,15.2 L21,21"/>
            <path d="M8,10.5 L10,12.5 L13.5,8.5"/>
    </>
  ),
  "scale": (
    <>
      <rect x="2.5" y="14.5" width="19" height="5.5" rx="1"/>
            <rect x="7.5" y="7" width="9" height="5.5" rx="0.8"/>
            <path d="M12,12.5 V14.5"/>
            <path d="M9.5,9.5 H14.5"/>
    </>
  ),
  "stretch-wrap": (
    <>
      <rect x="6" y="3" width="12" height="9" rx="0.8"/>
            <path d="M6,5.5 C10,7 14,4 18,5.5 M6,8.5 C10,10 14,7 18,8.5"/>
            <rect x="3" y="13.5" width="18" height="2.6" rx="0.6"/>
            <rect x="3" y="19" width="18" height="2.4" rx="0.6"/>
            <path d="M5.5,16.1 V19 M12,16.1 V19 M18.5,16.1 V19"/>
    </>
  ),
};

export type ExhibitIconName = keyof typeof PATHS;

export function ExhibitIcon({
  name,
  size = 32,
  strokeWidth = 1.6,
}: {
  name: ExhibitIconName;
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={(strokeWidth * 24) / size}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

export const EXHIBIT_ICON_NAMES = Object.keys(PATHS) as ExhibitIconName[];
