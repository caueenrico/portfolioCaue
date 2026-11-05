import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";
import { Chars, Words } from "../type";
import portrait from "@/assets/portrait.png";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="top">
      <div className="hero__top" data-hero-fade>
        <p>
          {t("hero.role")}
          <br />
          <span className="muted">{t("hero.level")}</span>
        </p>
        <p className="hero__loc">{t("hero.location")}</p>
      </div>

      <h1 className="hero__name" aria-label="Cauê Enrico">
        <span className="hero__line hero__line--a">
          <Chars text="CAUÊ" />
        </span>
        <span className="hero__portrait">
          <Image
            src={portrait}
            alt={t("hero.portraitAlt")}
            fill
            priority
            sizes="(min-width: 900px) 30vw, 60vw"
          />
        </span>
        <span className="hero__line hero__line--b">
          <Chars text="ENRICO" />
        </span>
      </h1>

      <div className="hero__bottom">
        <p className="hero__scroll" data-hero-fade>
          <span aria-hidden="true">↓</span> {t("hero.scroll")}
        </p>
        <p className="hero__statement">
          <Words text={t("hero.statement")} />
        </p>
        <div className="hero__aside" data-hero-fade>
          <p className="hero__stack">{t("hero.stack")}</p>
          <a className="link-arrow" href="#contato">
            {t("hero.ctaEmail")} <span aria-hidden="true">→</span>
          </a>
          <a className="link-arrow" href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
            {t("hero.ctaCv")} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
