import Image from "next/image";
import 
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
            <h1>Caue Enrico</h1>
            <p>Desenvolvedor Front-end  e futuro full-stack</p>

            <div>
              <a href="">linkeDin</a>
              <a href="">GitHub</a>
            </div>
          </div>

          <Image src={LooperBG} />
        </Hero>
      </ContainerHero>
    </ContainerGeral>
  );
}
