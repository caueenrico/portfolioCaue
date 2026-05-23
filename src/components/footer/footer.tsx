import { Container } from "./styles";
import { useTranslation } from "@/i18n/useTranslation";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const copyright = t('footer.copyright').replace('{{year}}', String(year));

  return (
    <Container>
      <div className="footerLeft">
        <span className="footerLogo">CE.</span>
        <span className="footerTagline">{t('footer.tagline')}</span>
      </div>

      <div className="footerRight">
        <div className="socialLinks">
          <a href="https://www.linkedin.com/in/caue-enrico/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/caueenrico" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:caueenrico@gmail.com">Email</a>
        </div>
        <span className="copyright">{copyright}</span>
      </div>
    </Container>
  );
}
