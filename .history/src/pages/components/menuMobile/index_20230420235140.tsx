import { ClosedCaptioning, X } from "phosphor-react";
import { Container} from "./styles";

interface MenuMobileProps {
  menuIsVisible: boolean;
}

export function MenuMobile({ menuIsVisible, closeMenu }: MenuMobileProps) {


  return (
    <Container isOpen={menuIsVisible}>
      <X size={24} color="#fff" onClick={closeMenu}/>

      <nav>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#experiencia">Experiência</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </Container>
  );
}
