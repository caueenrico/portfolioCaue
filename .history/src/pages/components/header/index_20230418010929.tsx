import { ContHeader } from "./styles";


export function Header({border}: boolean) {
  return (
    <ContHeader className={border}>
      <h1> CE. </h1>

      <nav>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#experiencia">Experiência</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </ContHeader>
  );
}
