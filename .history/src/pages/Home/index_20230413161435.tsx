import Image from "next/image";
import LooperBG from "../../assets/LooperBG.svg";
import perfil from "../../assets/perfil.png";
import { Header } from "../components/header";
import { ContainerExperiencia, ContainerGeral, ContainerHero, Hero, ImageContainer, SobreMim } from "./styles";
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

        <SobreMim>
          <h1>Sobre Mim</h1>

          <h2>Guarujá, São Paulo</h2>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id egestas dui. 
          Nullam finibus aliquam enim quis faucibus. Aenean ac commodo dolor, nec bibendum velit.
          </p>

          <div>
            <YoutubeLogo />
            
          </div>


        </SobreMim>

      </ContainerExperiencia>
    </ContainerGeral>
  );
}
