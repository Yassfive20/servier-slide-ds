import React from "react";

export type IconName =
  | "heartPulse"
  | "headCross"
  | "peopleSearch"
  | "cellSearch"
  | "peopleIdea"
  | "handCross"
  | "pointingHand"
  | "handsHeart"
  | "arrowsHeart"
  | "cellCluster"
  | "brainSquiggle"
  | "cellBlob"
  | "capsule"
  | "chartUp"
  | "flask"
  | "laptop"
  | "oncology"
  | "cardio"
  | "neurology"
  | "immuno"
  | "target"
  | "check"
  | "arrowRight"
  | "calendar"
  | "building"
  | "globe";

const paths: Record<IconName, React.ReactNode> = {
  heartPulse: <path d="M12.5 6.5c1.6-2 5-2.2 6.4.3 1.6 2.8-1 6-6.4 10.7C6.6 13 4 9.8 5.6 7c1.4-2.5 4.7-2.3 6.4-.3zM4 12h2.4l1.3-2.6L9.6 15l1.6-3h6.8" />,
  headCross: <><path d="M9 20c-2.8-1-5-3.6-5-7a7 7 0 0 1 13.9-1.2c.9.4 1.6 1.3 1.6 2.4 0 1.5-1.2 2.6-2.6 2.6H16v3.2c0 1-.8 1.8-1.8 1.8H9z" /><path d="M11 8v4M9 10h4" /></>,
  peopleSearch: <><circle cx="8" cy="7" r="2.4" /><path d="M3.5 18c0-3 2-4.8 4.5-4.8s4.5 1.8 4.5 4.8" /><circle cx="17.5" cy="15.5" r="3" /><path d="M19.8 17.8 22 20" /></>,
  cellSearch: <><circle cx="10" cy="10" r="6" /><circle cx="8" cy="8" r="0.9" fill="currentColor" stroke="none" /><circle cx="12" cy="9" r="0.7" fill="currentColor" stroke="none" /><circle cx="9" cy="12" r="0.6" fill="currentColor" stroke="none" /><path d="M14.5 14.5 20 20" /></>,
  peopleIdea: <><circle cx="6.5" cy="8" r="2.3" /><path d="M2.5 19c0-3 1.8-4.8 4-4.8s4 1.8 4 4.8" /><circle cx="15.5" cy="6.5" r="2.6" /><path d="M15.5 9.4v2M13.7 13c1 .6 2.6.6 3.6 0" /><path d="M8.5 12.5 12.2 8" /></>,
  handCross: <><path d="M4 20c0-4 3-6.5 4.5-6.5h6c1.5 0 2.5.9 2.5 2v.3c0 1-.8 1.9-1.9 2.1l-4.6 1" /><path d="M8.5 13.5V6.5c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5" /></>,
  pointingHand: <><path d="M9 21c-2-2-5-5.5-5-8 0-1 .8-1.7 1.7-1.7.8 0 1.3.4 1.8 1.2" /><path d="M7.5 12V6.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8V11" /><path d="M11 11V5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8V11" /><path d="M14.6 11V7c0-1 .8-1.8 1.8-1.8S18.2 6 18.2 7v7c0 4-2.5 7-6.5 7" /></>,
  handsHeart: <><path d="M12 6.5c1.4-1.8 4.4-2 5.7.3 1.4 2.5-.9 5.3-5.7 9.4-4.8-4.1-7.1-6.9-5.7-9.4 1.3-2.3 4.3-2.1 5.7-.3z" /></>,
  arrowsHeart: <><path d="M12 7c1.2-1.6 3.8-1.7 4.9.3 1.2 2.2-.8 4.6-4.9 8.1-4.1-3.5-6.1-5.9-4.9-8.1 1.1-2 3.7-1.9 4.9-.3z" /><path d="M4 5.5l-1.5 1.8L4 9M20 15l1.5 1.8L20 18.6" /></>,
  cellCluster: <><circle cx="12" cy="12" r="7.2" /><circle cx="9" cy="9.5" r="1" fill="currentColor" stroke="none" /><circle cx="14.5" cy="9" r="0.8" fill="currentColor" stroke="none" /><circle cx="9.5" cy="14" r="0.7" fill="currentColor" stroke="none" /><circle cx="14" cy="14.5" r="1" fill="currentColor" stroke="none" /></>,
  brainSquiggle: <><path d="M8 5.5c-2.8.4-4.5 3-3.8 5.6-1 .8-1.2 2.4-.2 3.4-.3 1.7 1 3.3 2.8 3.3.5 1 1.6 1.7 2.8 1.6 1 0 1.9-.6 2.3-1.5.5.3 1.1.5 1.7.4 1.5-.1 2.6-1.4 2.5-2.9 1.3-.5 2-2 1.5-3.3.9-.9.9-2.4-.1-3.3.4-2.5-1.6-4.7-4.1-4.6" /></>,
  cellBlob: <><path d="M12 4.5c3.6 0 6.5 2.6 6.5 6.8 0 4.6-3.4 8.2-7.2 8.2-3.3 0-5.8-2.6-5.8-6 0-2 .9-3 .4-4.5-.6-1.8.4-4.5 6.1-4.5z" /><circle cx="16" cy="16" r="1.6" /></>,
  capsule: <><rect x="4" y="9.5" width="16" height="5" rx="2.5" transform="rotate(-25 12 12)" /><path d="M9.8 8.3 14.2 15.7" /></>,
  chartUp: <><path d="M4 19h16" /><path d="M6 19v-4M10.5 19v-7M15 19v-3M19 19V7" /><path d="M14.5 6.5 19 6l.5 4.5" /></>,
  flask: <><path d="M10 3.5h4M10.5 3.5v5.3L6 17c-.6 1.2.3 2.5 1.6 2.5h8.8c1.3 0 2.2-1.3 1.6-2.5l-4.5-8.2V3.5" /><circle cx="9.5" cy="14.5" r="0.7" fill="currentColor" stroke="none" /><circle cx="12.5" cy="16" r="0.5" fill="currentColor" stroke="none" /><circle cx="14" cy="13.5" r="0.6" fill="currentColor" stroke="none" /></>,
  laptop: <><rect x="4" y="5.5" width="16" height="10" rx="1.2" /><circle cx="12" cy="9.3" r="2.3" /><path d="M2.5 19h19" /></>,
  oncology: <><circle cx="12" cy="12" r="3" /><circle cx="12" cy="5.5" r="1.3" /><circle cx="18.5" cy="12" r="1.3" /><circle cx="12" cy="18.5" r="1.3" /><circle cx="5.5" cy="12" r="1.3" /><circle cx="16.4" cy="7.6" r="1.1" /><circle cx="16.4" cy="16.4" r="1.1" /><circle cx="7.6" cy="16.4" r="1.1" /><circle cx="7.6" cy="7.6" r="1.1" /></>,
  cardio: <><path d="M12 7.5c1.1-1.5 3.4-1.6 4.4.3 1.1 2-.7 4.2-4.4 7.4-3.7-3.2-5.5-5.4-4.4-7.4 1-1.9 3.3-1.8 4.4-.3z" /><path d="M4.5 6.5a8 8 0 0 0 0 11M19.5 6.5a8 8 0 0 1 0 11" /><path d="M4.5 6.5l1.8 1.8M4.5 17.5l1.8-1.8M19.5 6.5l-1.8 1.8M19.5 17.5l-1.8-1.8" /></>,
  neurology: <><path d="M9 5c-2.5.3-4 2.7-3.4 5-1 .8-1.1 2.2-.2 3.1-.3 1.5.9 3 2.5 3 .5.9 1.5 1.5 2.6 1.4v-12c0-.3-.9-.5-1.5-.5z" /><path d="M6 10h2.5M6.5 13.5H9" /></>,
  immuno: <><ellipse cx="12" cy="12" rx="7" ry="4.5" transform="rotate(-35 12 12)" /><circle cx="10.5" cy="10" r="0.9" fill="currentColor" stroke="none" /><circle cx="13.5" cy="12.5" r="0.7" fill="currentColor" stroke="none" /><circle cx="11" cy="14" r="0.6" fill="currentColor" stroke="none" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></>,
  check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />,
  arrowRight: <path d="M4 12h15M13 6l6 6-6 6" />,
  calendar: <><rect x="3.5" y="5.5" width="17" height="15" rx="1.5" /><path d="M3.5 10h17M8 3.5v4M16 3.5v4" /></>,
  building: <><rect x="5" y="4" width="10" height="16" /><path d="M15 9h4v11h-4M8 7.5h1M11 7.5h1M8 10.5h1M11 10.5h1M8 13.5h1M11 13.5h1M8 16.5h1M11 16.5h1" /></>,
  globe: <><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.5 2.2 2.5 13.8 0 16M12 4c-2.5 2.2-2.5 13.8 0 16" /></>,
};

export function Icon({
  name,
  size = 28,
  color = "var(--sv-bleu-nuit)",
  strokeWidth = 1.6,
}: {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
