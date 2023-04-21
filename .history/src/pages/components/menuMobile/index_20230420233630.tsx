import { ClosedCaptioning, X } from "phosphor-react";
import { Container, MenuMobileContainer} from "./styles";

interface MenuMobileProps {
  menuIsVisible: boolean;
}

export function MenuMobile({ menuIsVisible }: MenuMobileProps) {
  return (
    <MenuMobileContainer>
      <X size={24} color="#fff"/>

      <nav>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#experiencia">Experiência</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </MenuMobileContainer>
  );
}
