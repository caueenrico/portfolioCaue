import { Header } from "../components/header";
import { ContainerGeral, ContainerHero, Hero } from "./styles";

export default function Home() {
  return (
    <ContainerGeral>
      <ContainerHero>
        <Header />
        <Hero>
          <div>
            <span>Olá, Eu so</span>
          </div>
        </Hero>
      </ContainerHero>
    </ContainerGeral>
  );
}
