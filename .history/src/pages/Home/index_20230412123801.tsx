import { Header } from "../components/header";
import { ContainerGeral, ContainerHero, Hero } from "./styles";

export default function Home() {
  return (
    <ContainerGeral>
      <ContainerHero>
        <Header />
        <Hero>
          <div>
            <span>Olá, Eu sou</span>
            <h1></h1>
          </div>
        </Hero>
      </ContainerHero>
    </ContainerGeral>
  );
}
