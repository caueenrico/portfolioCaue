import { useTranslation } from "@/i18n/useTranslation";
import { SectionHead } from "../type";

interface Role {
  period: string;
  role: string;
  org: string;
  body: string;
}

export function Path() {
  const { t, tArray } = useTranslation();
  const roles = tArray<Role>("path.items");

  return (
    <section className="path section" id="trajetoria">
      <SectionHead
        index={t("path.index")}
        label={t("path.label")}
        title={t("path.title")}
        titleEm={t("path.titleEm")}
      />

      <ol className="ledger">
        {roles.map((item, i) => (
          <li className={`ledger__row${i === 0 ? " is-current" : ""}`} key={i} data-row>
            <span className="ledger__period">{item.period}</span>
            <div>
              <h3 className="ledger__role">{item.role}</h3>
              <p className="ledger__org">{item.org}</p>
            </div>
            <p className="ledger__body">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
