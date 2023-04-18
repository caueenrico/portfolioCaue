import Image from "next/image";
import LooperBG from "../../assets/LooperBG.svg";
import LooperBG from "../../assets/LooperBG.svg";
import { Header } from "../components/header";
import { ContainerExperiencia, ContainerGeral, ContainerHero, Hero, ImageContainer } from "./styles";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

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
          <p>
            Desenvolvedor Front-end <br /> e futuro full-stack
          </p>

          <div className="linksButtons">
            <a href="" className="linkdin">
              <LinkedinLogo size={24} />
              LinkedIn
            </a>

            <a href="" className="github">
              <GithubLogo size={24} />
              GitHub
            </a>
          </div>
        </div>

        <ImageContainer>
          <Image src={LooperBG} alt="bg" />
        </ImageContainer>
      </Hero>


      <ContainerExperiencia>

        <Image src={perfil} alt="eu"/>

      </ContainerExperiencia>
    </ContainerGeral>
  );
}
