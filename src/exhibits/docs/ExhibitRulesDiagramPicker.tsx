import React from "react";
import { DocFrame, code } from "./DocFrame";

const FAMILIES: { name: string; test: string; color: string; cards: string[] }[] = [
  { name: "Flow", test: "one thing leads to another", color: "var(--sv-ex-series-1)",
    cards: ["ProcessLinear", "SwimlaneFlow", "CycleLoop", "AsisTobe", "Sipoc", "WarehouseFlow", "ProcessPictorial",
            "DataObjectFlow", "SankeyFlow", "RoadmapGantt", "PhaseChevrons", "MilestoneTimeline", "CutoverRunbook"] },
  { name: "Network", test: "things connect to each other", color: "var(--sv-ex-series-2)",
    cards: ["SystemLandscape", "InterfaceMatrix", "DependencyGraph", "IssueTree", "DecisionTree", "HubVsP2p",
            "StakeholderNetwork", "OrgGovernance", "DeploymentTopology"] },
  { name: "Stack", test: "things rest on each other", color: "var(--sv-ex-series-3)",
    cards: ["LayeredArchitecture", "Pyramid", "CapabilityStack", "MaturityLadder", "FunnelScope"] },
  { name: "Segment", test: "one thing divides", color: "var(--sv-ex-series-4)",
    cards: ["ProcessHierarchy", "Matrix2x2", "HeatmapGrid", "CapabilityMap", "RolloutWaves", "WarehouseLayout", "RaciMatrix"] },
  { name: "Join", test: "things come together", color: "var(--sv-bleu-descendu)",
    cards: ["ConvergenceStreams", "Consolidation", "VennOverlap"] },
];

/** Diagram picker — organised by the shape of the relationship, not by topic. Name the family first, then pick the card. */
export function ExhibitRulesDiagramPicker() {
  return (
    <DocFrame eyebrow="Exhibit rules · 3 of 5" title="Diagram picker: name the relationship first"
              note="Organised by the shape of the relationship, not by topic: “these things connect to each other” is a Network whether it is systems, people or tasks. Card names are prefixed Exhibit…">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
        {FAMILIES.map((f) => (
          <div key={f.name}>
            <div style={{ borderTop: `4px solid ${f.color}`, paddingTop: 8, marginBottom: 10 }}>
              <div style={{ fontFamily: "var(--sv-font-heading)", fontWeight: 700, fontSize: 20 }}>{f.name}</div>
              <div style={{ color: "var(--sv-ex-ink-2)", fontSize: "var(--sv-size-small)" }}>{f.test}</div>
            </div>
            {f.cards.map((c) => (
              <div key={c} style={{ ...code, lineHeight: 1.7 }}>{c}</div>
            ))}
          </div>
        ))}
      </div>
    </DocFrame>
  );
}
