import { useTranslation } from "@/i18n/useTranslation";
import { Words } from "../type";

interface Note {
  k: string;
  v: string;
}

export function About() {
  const { t, tArray } = useTranslation();
  const notes = tArray<Note>("about.notes");

  return (
    <section className="about section" id="sobre">
      <span className="rule" aria-hidden="true" />
      <p className="shead__label">
        <span className="shead__index">({t("about.index")})</span> {t("about.label")}
      </p>

      <p className="about__text">
        <Words text={t("about.text")} />
      </p>

      <dl className="about__notes">
        {notes.map((note) => (
          <div key={note.k} data-reveal="fade">
            <dt>{note.k}</dt>
            <dd>{note.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
