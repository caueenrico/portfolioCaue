import Image from "next/image";
import LooperBG from "../../assets/LooperBG.svg";
import perfil from "../../assets/perfil.png";
import { Header } from "../components/header";
import {
  ContainerExperiencia,
  ContainerGeral,
  ContainerHero,
  Hero,
  ImageContainer,
  SobreMim,
} from "./styles";
import {
  GitCommit,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "phosphor-react";

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
        <Image src={perfil} alt="eu" />

        <SobreMim>
          <h1>Sobre Mim</h1>

          <h2>Guarujá, São Paulo</h2>

          <p>
            Sempre fui apaixonado por ciência e tecnologia, o que me levou a
            obter uma bolsa de 100% para um curso técnico de petróleo e gás
            durante o ensino médio. Destaquei-me nesse curso e um professor me
            incentivou a seguir a carreira de engenharia química. 
          </p>

          <p>
            No entanto,foi
            durante a graduação em engenharia química que descobri minha
            verdadeira paixão pela programação. Fiquei empolgado com as aulas e
            decidi aprofundar meus conhecimentos na área. Após superar alguns
            desafios pessoais, decidi seguir meu caminho na tecnologia. 
          </p>
          <p>
            Em julho
            de 2021, mergulhei de cabeça na área de tecnologia ao iniciar o
            curso de Análise e Desenvolvimento de Sistemas e investir em cursos
            para aprimorar minhas habilidades como programador front-end.
          
            Considero-me resiliente e dedicado, com habilidades de trabalho em
            equipe bem desenvolvidas. Fico entusiasmado em aprender novas
            tecnologias e estou sempre em busca de aprimoramento
          </p>

          <div>
            <YoutubeLogo />
            <InstagramLogo />
            <LinkedinLogo />
            <GithubLogo />
          </div>
        </SobreMim>
      </ContainerExperiencia>
    </ContainerGeral>
  );
}
