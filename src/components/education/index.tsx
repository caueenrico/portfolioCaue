import { useTranslation } from "@/i18n/useTranslation";

interface Degree {
  name: string;
  org: string;
  year: string;
}

export function Education() {
  const { t, tArray } = useTranslation();
  const degrees = tArray<Degree>("education.degrees");
  const certs = tArray<string>("education.certs");
  const languages = tArray<string>("education.languages");

  return (
    <section className="education section" id="formacao">
      <span className="rule" aria-hidden="true" />
      <p className="shead__label">
        <span className="shead__index">({t("education.index")})</span> {t("education.label")}
      </p>

      <div className="education__grid">
        <div>
          <h3 className="education__h">{t("education.degreesLabel")}</h3>
          <ul className="education__list">
            {degrees.map((degree) => (
              <li key={degree.name} data-row>
                <span className="education__name">{degree.name}</span>
                <span className="education__org">{degree.org}</span>
                <span className="education__year">{degree.year}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="education__h">{t("education.certsLabel")}</h3>
          <ul className="education__plain" data-reveal="fade">
            {certs.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
          <h3 className="education__h">{t("education.languagesLabel")}</h3>
          <ul className="education__plain" data-reveal="fade">
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
