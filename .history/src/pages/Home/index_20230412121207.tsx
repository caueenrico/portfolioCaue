import { Header } from "../components/header";
import { ContainerGeral, ContainerHero } from "./styles";

export default function Home() {
  return (
    <ContainerGeral>
      <ContainerHero>
        <Header />
      </ContainerHero>
    </ContainerGeral>
  );
}
