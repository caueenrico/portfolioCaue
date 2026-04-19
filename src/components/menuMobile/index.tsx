import { X } from "phosphor-react";
import { Container } from "./styles";

interface MenuMobileProps {
  menuIsVisible: boolean;
  closeMenu: () => void;
}

export function MenuMobile({ menuIsVisible, closeMenu }: MenuMobileProps) {
  return (
    <Container isOpen={menuIsVisible}>
      <div className="menuHeader">
        <span className="logo">CE.</span>
        <button className="closeBtn" onClick={closeMenu} aria-label="Fechar menu">
          <X size={18} color="rgba(240,240,245,0.7)" />
        </button>
      </div>

      <nav>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#experiencia" onClick={closeMenu}>Trajetória</a>
        <a href="#capacidades" onClick={closeMenu}>Capacidades</a>
        <a href="#arquitetura" onClick={closeMenu}>Arquitetura</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
      </nav>
    </Container>
  );
}
