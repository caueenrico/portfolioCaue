import { useTranslation } from "@/i18n/useTranslation";
import { Words } from "../type";
import { DIAGRAMS, Diagram } from "./diagrams";

interface SystemItem {
  title: string;
  body: string;
  tags: string;
}

function Schematic({ diagram }: { diagram: Diagram }) {
  const { nodes, edges, frame } = diagram;
  return (
    <svg className="schematic" viewBox="0 0 420 280" role="presentation">
      {frame && (
        <g data-dashed>
          <rect className="schematic__frame" x={frame.x} y={frame.y} width={frame.w} height={frame.h} />
          <text className="schematic__frame-label" x={frame.x + 6} y={frame.y - 7}>
            {frame.label}
          </text>
        </g>
      )}
      {edges.map((edge, i) =>
        edge.dashed ? (
          <path key={i} d={edge.d} className="schematic__edge is-dashed" data-dashed />
        ) : (
          <path key={i} d={edge.d} className="schematic__edge" data-draw />
        )
      )}
      {nodes.map((node) => (
        <g key={node.label}>
          <rect
            className={`schematic__node${node.accent ? " is-accent" : ""}`}
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            data-draw
          />
          <text
            className="schematic__label"
            x={node.x + node.w / 2}
            y={node.y + node.h / 2}
            data-label
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Systems() {
  const { t, tArray } = useTranslation();
  const items = tArray<SystemItem>("systems.items");
  const total = String(items.length).padStart(2, "0");

  return (
    <section className="systems" id="sistemas">
      <div className="systems__pin">
        <div className="systems__track">
          <div className="systems__intro">
            <p className="shead__label">
              <span className="shead__index">({t("systems.index")})</span> {t("systems.label")}
            </p>
            <h2 className="shead__title" data-reveal="words">
              <Words text={t("systems.title")} /> <em><Words text={t("systems.titleEm")} /></em>
            </h2>
            <p className="systems__lead" data-reveal="fade">{t("systems.intro")}</p>
            <p className="systems__note" data-reveal="fade">* {t("systems.footnote")}</p>
          </div>

          {items.map((item, i) => (
            <article className="system" key={i}>
              <p className="system__count">
                {t("systems.patternLabel")} {String(i + 1).padStart(2, "0")} / {total}
              </p>
              <Schematic diagram={DIAGRAMS[i]} />
              <h3 className="system__title">{item.title}</h3>
              <p className="system__body">{item.body}</p>
              <p className="system__tags">{item.tags}</p>
            </article>
          ))}
        </div>
        <div className="systems__progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
