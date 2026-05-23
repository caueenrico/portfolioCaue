import { X } from "phosphor-react";
import { Container } from "./styles";
import { LanguageToggle } from "../header/LanguageToggle";
import { useTranslation } from "@/i18n/useTranslation";

interface MenuMobileProps {
  menuIsVisible: boolean;
  closeMenu: () => void;
}

export function MenuMobile({ menuIsVisible, closeMenu }: MenuMobileProps) {
  const { t } = useTranslation();

  return (
    <Container isOpen={menuIsVisible}>
      <div className="menuHeader">
        <span className="logo">CE.</span>
        <button className="closeBtn" onClick={closeMenu} aria-label="Close menu">
          <X size={18} color="rgba(240,240,245,0.7)" />
        </button>
      </div>

      <nav>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#sobre" onClick={closeMenu}>{t('nav.about')}</a>
        <a href="#experiencia" onClick={closeMenu}>{t('nav.experience')}</a>
        <a href="#capacidades" onClick={closeMenu}>{t('nav.skills')}</a>
        <a href="#contato" onClick={closeMenu}>{t('nav.contact')}</a>
      </nav>

      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(240,240,245,0.08)' }}>
        <LanguageToggle variant="drawer" />
      </div>
    </Container>
  );
}
