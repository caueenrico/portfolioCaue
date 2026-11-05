import { useTranslation } from "@/i18n/useTranslation";
import { SectionHead } from "../type";

interface Group {
  title: string;
  items: string[];
}

export function Stack() {
  const { t, tArray } = useTranslation();
  const groups = tArray<Group>("stack.groups");

  return (
    <section className="stack section" id="stack">
      <SectionHead
        index={t("stack.index")}
        label={t("stack.label")}
        title={t("stack.title")}
        titleEm={t("stack.titleEm")}
      />

      <div className="stack__grid">
        {groups.map((group) => (
          <div className="stack__group" key={group.title} data-reveal="fade">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
