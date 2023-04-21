import { ClosedCaptioning, X } from "phosphor-react";
import { Container } from "./styles";

export function MenuMobile({ isVisible }: any) {
  return (
    <Container>
      <X size={24} color="#ff"/>

      <nav>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#experiencia">Experiência</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </Container>
  );
}
