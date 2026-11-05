// Schematics for the "What I build" panels. Coordinates live in a 420x280 viewBox.
// Labels are technical terms and stay in English in both languages.

export interface DiagramNode {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  accent?: boolean;
}

export interface DiagramEdge {
  d: string;
  dashed?: boolean;
}

export interface Diagram {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  frame?: { x: number; y: number; w: number; h: number; label: string };
}

export const DIAGRAMS: Diagram[] = [
  {
    nodes: [
      { x: 10, y: 122, w: 90, h: 36, label: "AI agent" },
      { x: 160, y: 118, w: 110, h: 44, label: "MCP server", accent: true },
      { x: 160, y: 24, w: 110, h: 34, label: "IdP · OIDC" },
      { x: 160, y: 222, w: 110, h: 34, label: "Audit log" },
      { x: 320, y: 58, w: 90, h: 34, label: "ERP" },
      { x: 320, y: 123, w: 90, h: 34, label: "Contracts" },
      { x: 320, y: 188, w: 90, h: 34, label: "Ops API" },
    ],
    edges: [
      { d: "M100 140 H160" },
      { d: "M215 58 V118", dashed: true },
      { d: "M215 162 V222", dashed: true },
      { d: "M270 140 H295 V75 H320" },
      { d: "M270 140 H320" },
      { d: "M295 140 V205 H320" },
    ],
  },
  {
    nodes: [
      { x: 10, y: 122, w: 80, h: 36, label: "User" },
      { x: 140, y: 112, w: 120, h: 56, label: "AgentCore", accent: true },
      { x: 320, y: 40, w: 90, h: 34, label: "LLM" },
      { x: 320, y: 123, w: 90, h: 34, label: "RAG" },
      { x: 320, y: 206, w: 90, h: 34, label: "MCP tools" },
      { x: 140, y: 226, w: 120, h: 34, label: "Langfuse" },
    ],
    edges: [
      { d: "M90 140 H140" },
      { d: "M260 140 H295 V57 H320" },
      { d: "M260 140 H320" },
      { d: "M295 140 V223 H320" },
      { d: "M200 168 V226", dashed: true },
    ],
    frame: { x: 125, y: 22, w: 293, h: 158, label: "Amazon Bedrock" },
  },
  {
    nodes: [
      { x: 10, y: 182, w: 80, h: 36, label: "Prompt" },
      { x: 160, y: 178, w: 110, h: 44, label: "Generator", accent: true },
      { x: 320, y: 182, w: 90, h: 36, label: "Dashboard" },
      { x: 120, y: 64, w: 76, h: 32, label: "Catalog" },
      { x: 200, y: 64, w: 50, h: 32, label: "MCP" },
      { x: 254, y: 64, w: 70, h: 32, label: "Sheets" },
    ],
    edges: [
      { d: "M90 200 H160" },
      { d: "M270 200 H320" },
      { d: "M158 96 V140 H215 V178" },
      { d: "M225 96 V178" },
      { d: "M289 96 V140 H235 V178" },
    ],
    frame: { x: 108, y: 34, w: 310, h: 210, label: "serverless · per workspace" },
  },
  {
    nodes: [
      { x: 14, y: 52, w: 70, h: 36, label: "API" },
      { x: 120, y: 42, w: 110, h: 56, label: "DB + Outbox", accent: true },
      { x: 290, y: 52, w: 100, h: 36, label: "Relay" },
      { x: 290, y: 140, w: 100, h: 36, label: "Queue" },
      { x: 170, y: 226, w: 100, h: 34, label: "SAP CPI" },
      { x: 290, y: 226, w: 100, h: 34, label: "Services" },
    ],
    edges: [
      { d: "M84 70 H120" },
      { d: "M230 70 H290" },
      { d: "M340 88 V140" },
      { d: "M340 176 V226" },
      { d: "M340 176 V200 H220 V226" },
    ],
    frame: { x: 4, y: 28, w: 236, h: 80, label: "one transaction" },
  },
];
