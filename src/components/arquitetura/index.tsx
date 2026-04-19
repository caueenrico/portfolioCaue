import { useState, useEffect, useRef, useCallback } from 'react';
import { diagrams } from './diagrams';
import type { DiagramNode, DiagramConnection } from './diagrams';
import { ArchSection, TabBar, Tab, DiagramCanvas } from './styles';

const NODE_W = 100;
const NODE_H = 50;
const STAGGER_NODE = 400;
const STAGGER_CONN = 300;

export function Arquitetura() {
  const [activeTab, setActiveTab] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleTabSwitch = useCallback((idx: number) => {
    if (idx === activeTab) return;
    setGlitching(true);
    setTimeout(() => {
      setActiveTab(idx);
      setAnimKey((k) => k + 1);
      setGlitching(false);
    }, 80);
  }, [activeTab]);

  const handleReplay = useCallback(() => {
    setAnimKey((k) => k + 1);
  }, []);

  const diagram = diagrams[activeTab];
  const totalNodes = diagram.nodes.length;

  return (
    <ArchSection id="arquitetura" ref={sectionRef}>
      <div className="archInner" data-aos="fade-up">
        <span className="sectionLabel">Arquitetura</span>
        <h2>Arquitetura em Ação</h2>
        <p className="sectionDesc">
          Diagramas de soluções AWS montados em tempo real — do DNS ao deploy.
        </p>

        <TabBar>
          {diagrams.map((d, i) => (
            <Tab
              key={d.name}
              active={i === activeTab}
              onClick={() => handleTabSwitch(i)}
            >
              {d.name}
            </Tab>
          ))}
        </TabBar>

        <DiagramCanvas className={glitching ? 'glitching' : ''}>
          <div className="canvasHeader">
            <span className="diagramTitle">
              {'// '}{diagram.name.toLowerCase().replace(/\s+/g, '_')}.arch
            </span>
            <button className="replayBtn" onClick={handleReplay}>
              ⟳ replay
            </button>
          </div>

          {isVisible && (
            <DiagramSVG
              key={`${activeTab}-${animKey}`}
              nodes={diagram.nodes}
              connections={diagram.connections}
            />
          )}

          <div className="progressBar">
            <div className="progressTrack">
              <div
                className="progressFill"
                style={{
                  width: isVisible ? '100%' : '0%',
                  transitionDelay: isVisible ? `${totalNodes * STAGGER_NODE}ms` : '0ms',
                }}
              />
            </div>
            <span className="progressText">
              {isVisible ? `${totalNodes}/${totalNodes} nodes` : 'waiting...'}
            </span>
          </div>
        </DiagramCanvas>
      </div>
    </ArchSection>
  );
}

function DiagramSVG({
  nodes,
  connections,
}: {
  nodes: DiagramNode[];
  connections: DiagramConnection[];
}) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  return (
    <svg
      viewBox="0 0 450 280"
      style={{ width: '100%', height: 'auto', overflow: 'visible' }}
    >
      <defs>
        <style>{`
          @keyframes nodeAppear {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes drawConn {
            from { stroke-dashoffset: 500; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes nodePulse {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(232,168,56,0.2)); }
            50% { filter: drop-shadow(0 0 6px rgba(232,168,56,0.4)); }
          }
        `}</style>
      </defs>

      {connections.map((conn, i) => {
        const from = nodeMap.get(conn.from);
        const to = nodeMap.get(conn.to);
        if (!from || !to) return null;

        const x1 = from.x + NODE_W / 2;
        const y1 = from.y + NODE_H / 2;
        const x2 = to.x + NODE_W / 2;
        const y2 = to.y + NODE_H / 2;
        const delay = (nodes.length + i) * STAGGER_CONN;

        return (
          <line
            key={`${conn.from}-${conn.to}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(232, 168, 56, 0.3)"
            strokeWidth="1"
            strokeDasharray="500"
            strokeDashoffset="500"
            style={{
              animation: `drawConn 0.8s ease-out ${delay}ms forwards`,
            }}
          />
        );
      })}

      {nodes.map((node, i) => {
        const isCompute = node.type === 'compute';
        const strokeColor = isCompute
          ? 'rgba(0, 210, 223, 0.5)'
          : 'rgba(232, 168, 56, 0.5)';
        const fillColor = isCompute
          ? 'rgba(0, 210, 223, 0.08)'
          : 'rgba(232, 168, 56, 0.08)';
        const textColor = isCompute
          ? 'rgba(0, 210, 223, 0.85)'
          : 'rgba(232, 168, 56, 0.85)';
        const subColor = isCompute
          ? 'rgba(0, 210, 223, 0.5)'
          : 'rgba(232, 168, 56, 0.5)';

        return (
          <g
            key={node.id}
            style={{
              opacity: 0,
              transformOrigin: `${node.x + NODE_W / 2}px ${node.y + NODE_H / 2}px`,
              animation: `nodeAppear 0.5s ease-out ${i * STAGGER_NODE}ms forwards, nodePulse 3s ease-in-out ${nodes.length * STAGGER_NODE + 500}ms infinite`,
            }}
          >
            <rect
              x={node.x} y={node.y}
              width={NODE_W} height={NODE_H}
              rx={6}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={1}
            />
            <text
              x={node.x + NODE_W / 2}
              y={node.y + 20}
              textAnchor="middle"
              fill={textColor}
              fontFamily="'DM Mono', monospace"
              fontSize={9}
            >
              {node.label}
            </text>
            <text
              x={node.x + NODE_W / 2}
              y={node.y + 35}
              textAnchor="middle"
              fill={subColor}
              fontFamily="'DM Mono', monospace"
              fontSize={7}
            >
              {node.sublabel}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
