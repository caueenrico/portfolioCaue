import { useTranslation } from "@/i18n/useTranslation";
import { Words } from "../type";
import { LocalTime } from "../localTime";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/caue-enrico/" },
  { label: "GitHub", href: "https://github.com/caueenrico" },
  { label: "WhatsApp", href: "https://wa.me/5513991648306" },
];

export function Contact() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="contact" id="contato">
      <p className="shead__label">
        <span className="shead__index">({t("contact.index")})</span> {t("contact.label")}
      </p>

      <h2 className="contact__title" data-reveal="words">
        <Words text={t("contact.titleA")} />
        <br />
        <em>
          <Words text={t("contact.titleB")} />
        </em>
      </h2>

      <div className="contact__mail" data-reveal="fade">
        <a href="mailto:caueenrico@gmail.com">caueenrico@gmail.com</a>
        <p>{t("contact.emailHint")}</p>
      </div>

      <ul className="contact__links" data-reveal="fade">
        {LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
        <li>
          <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
            {t("contact.cv")} <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>

      <div className="contact__base">
        <span>
          © {year} Cauê Enrico. {t("contact.rights")}
        </span>
        <LocalTime prefix={t("contact.local")} />
        <a href="#top">
          {t("contact.top")} <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
