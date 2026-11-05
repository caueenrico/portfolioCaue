import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import { LanguageToggle } from "./LanguageToggle";
import { LocalTime } from "../localTime";

const LINKS = [
  { href: "#sobre", key: "nav.about" },
  { href: "#sistemas", key: "nav.systems" },
  { href: "#metodo", key: "nav.method" },
  { href: "#trajetoria", key: "nav.path" },
  { href: "#contato", key: "nav.contact" },
];

export function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <>
      <header className="site-header">
        <a href="#top" className="site-header__name">
          Cauê Enrico
        </a>

        <nav className="site-header__nav" aria-label="Principal">
          {LINKS.map((link, i) => (
            <a key={link.href} href={link.href}>
              <span className="site-header__num">0{i + 1}</span>
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="site-header__meta">
          <LocalTime />
          <LanguageToggle />
          <button
            type="button"
            className="site-header__menu"
            aria-expanded={open}
            aria-controls="menu-overlay"
            onClick={() => setOpen(!open)}
          >
            {open ? t("nav.close") : t("nav.menu")}
          </button>
        </div>
      </header>

      <div
        id="menu-overlay"
        className={`menu${open ? " is-open" : ""}`}
        data-lenis-prevent
        aria-hidden={!open}
      >
        <nav>
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${0.08 + i * 0.05}s` : "0s" }}
              onClick={() => setOpen(false)}
            >
              <span>0{i + 1}</span>
              {t(link.key)}
            </a>
          ))}
        </nav>
        <div className="menu__foot">
          <LanguageToggle />
          <a href="mailto:caueenrico@gmail.com" tabIndex={open ? 0 : -1}>
            caueenrico@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
