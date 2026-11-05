import { useTranslation } from "@/i18n/useTranslation";
import { SectionHead } from "../type";

interface Step {
  title: string;
  body: string;
}

export function Method() {
  const { t, tArray } = useTranslation();
  const steps = tArray<Step>("method.steps");

  return (
    <section className="method section section--dark" id="metodo">
      <SectionHead
        tone="dark"
        index={t("method.index")}
        label={t("method.label")}
        title={t("method.title")}
        titleEm={t("method.titleEm")}
      />
      <p className="section__lead" data-reveal="fade">{t("method.intro")}</p>

      <ol className="steps">
        {steps.map((step, i) => (
          <li className="step" key={i} data-row>
            <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="step__title">{step.title}</h3>
            <p className="step__body">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
