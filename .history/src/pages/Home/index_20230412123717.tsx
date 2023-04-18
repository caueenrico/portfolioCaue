import { Header } from "../components/header";
import { ContainerGeral, ContainerHero } from "./styles";

export default function Home() {
  return (
    <ContainerGeral>
      <ContainerHero>
        <Header />
        <Hero></Hero>
      </ContainerHero>
    </ContainerGeral>
  );
}
