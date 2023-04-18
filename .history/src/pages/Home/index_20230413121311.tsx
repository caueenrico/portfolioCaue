import Image from "next/image";
import LooperBG from "../../assets/LooperBG.svg"
import { Header } from "../components/header";
import { ContainerGeral, ContainerHero, Hero, ImageContainer } from "./styles";

export default function Home() {
  return (
    <ContainerGeral>
      <ContainerHero>
        <Header />
        <Hero>
          <div>
            <span>Olá, Eu sou</span>
            <h1>Caue Enrico</h1>
            <p>Desenvolvedor Front-end  e futuro full-stack</p>

            <div>
              <a href="">linkeDin</a>
              <a href="">GitHub</a>
            </div>
          </div>

          <ImageContainer></ImageContainer>
          <Image src={LooperBG} alt="bg"/>
          

        </Hero>
      </ContainerHero>
    </ContainerGeral>
  );
}
