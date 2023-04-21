import { ClosedCaptioning } from "phosphor-react";

export function MenuMobile({ isVisible }: any) {
  return (
    <Container>
      <ClosedCaptioning />

      <nav>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#experiencia">Experiência</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </Container>
  );
}
