import Image from "next/image";
import perfil from "../assets/perfil.png";
import { Header } from "../components/header";
import {
  ContainerExperiencia,
  ContainerGeral,
  ContainerHero,
  ContainerProjetos,
  ContainerSobreMim,
  HeaderContainer,
  Hero,
  LinkButtons,
  SobreMim,
} from "../styles/styles";
import {
  GitCommit,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  Download,
  WhatsappLogo,
} from "phosphor-react";
import { Experiencias } from "../components/experiencia";
import { Projeto } from "../components/projetos";
import { Footer } from "../components/footer/footer";
import TypewriterComponent from "typewriter-effect";
import Typewriter from "typewriter-effect";

export default function Home() {
  const nomeType = (
    <TypewriterComponent 
      options={{
        strings: ["Pai", "Dev", "Caue Enrico"],
        autoStart: true,
        loop: true,
        wrapperClassName: "typewriter",
        // cursorClassName: "typewriter",
        cursor: " ",
      }}
    />
  )
  return (
    <ContainerGeral id="home">
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Hero>
        <div className="caue">
          <span>Olá, Eu sou</span>
          <h1>
            {nomeType}
          </h1>
          <p>
            Desenvolvedor Front-end <br /> e futuro full-stack
          </p>

          <LinkButtons>
            <a
              href="https://www.linkedin.com/in/caue-enrico/"
              target="_blank"
              className="gradienteAzul"
            >
              <LinkedinLogo size={24} />
              LinkedIn
            </a>

            <a
              href="https://github.com/caueenrico"
              target="_blank"
              className="gradienteRosa"
            >
              <GithubLogo size={24} />
              GitHub
            </a>
          </LinkButtons>
        </div>
      </Hero>
      <ContainerSobreMim id="sobre">
        <div className="containerImg">
          <Image src={perfil} alt="eu" />
        </div>
        <SobreMim>
          <h1>Sobre Mim</h1>

          <h2>Guarujá, São Paulo</h2>

          <div className="textoSobre">
            <p>
              Sempre fui apaixonado por ciência e tecnologia, o que me levou a
              obter uma bolsa de 100% para um curso técnico de petróleo e gás
              durante o ensino médio. Destaquei-me nesse curso e um professor me
              incentivou a seguir a carreira de engenharia química.
            </p>
            <p>
              No entanto,foi durante a graduação em engenharia química que
              descobri minha verdadeira paixão pela programação. Fiquei
              empolgado com as aulas e decidi aprofundar meus conhecimentos na
              área. Após superar alguns desafios pessoais, decidi seguir meu
              caminho na tecnologia.
            </p>
            <p>
              Em julho de 2021, mergulhei de cabeça na área de tecnologia ao
              iniciar o curso de Análise e Desenvolvimento de Sistemas e
              investir em cursos para aprimorar minhas habilidades como
              programador front-end.
            </p>
            <p>
              Considero-me resiliente e dedicado, com habilidades de trabalho em
              equipe bem desenvolvidas. Fico entusiasmado em aprender novas
              tecnologias e estou sempre em busca de aprimoramento
            </p>
          </div>

          <div>
            <YoutubeLogo size={32} />
            <InstagramLogo size={32} />
            <LinkedinLogo size={32} />
            <GithubLogo size={32} />
          </div>

          <LinkButtons>
            <a download={'/curriculo.'} className="gradienteAzul">
              <Download size={32} />
              Curriculo
            </a>

            <a href="" className="gradienteRosa">
              <WhatsappLogo size={24} />
              WhatsApp
            </a>
          </LinkButtons>
        </SobreMim>
      </ContainerSobreMim>

      <ContainerExperiencia id="experiencia">
        <Experiencias />
      </ContainerExperiencia>

      <ContainerProjetos id="projetos">
        <h1>Projetos</h1>

        <div className="projetos">
          <Projeto />
          <Projeto />
          <Projeto />
        </div>
      </ContainerProjetos>
      <Footer />
    </ContainerGeral>
  );
}
