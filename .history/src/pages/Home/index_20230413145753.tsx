import Image from "next/image";
import LooperBG from "../../assets/LooperBG.svg"
import { Header } from "../components/header";
import { ContainerGeral, ContainerHero, Hero, ImageContainer } from "./styles";

export default function Home() {
  return (
    <ContainerGeral>
      <ContainerHero>
        <Header />
        
      </ContainerHero>
      <Hero>
          <div className="caue">
            <span>Olá, Eu sou</span>
            <h1>Caue Enrico</h1>
            <p>Desenvolvedor Front-end <br /> e futuro full-stack</p>

            <div className="linksButtons">
              <a href="" className="linkdin">linkeDin</a>
            
              <a href="" className="github">

                spanGitHub
              </a>
              

            </div>
          </div>

          <ImageContainer>
            <Image src={LooperBG} alt="bg"/>
          </ImageContainer>

        </Hero>
    </ContainerGeral>
  );
}
