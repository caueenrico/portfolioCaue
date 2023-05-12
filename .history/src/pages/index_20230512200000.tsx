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
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

import dashGo from "../assets/dashGo.png";
import todolist from "../assets/todolist.png";
import coffedelivery from "../assets/coffedeli.png";
import gitblog from "../assets/gitBlog.png";

export default function Home() {
  const nomeType = (
    <TypewriterComponent
      options={{
        strings: ["Caue Enrico", "Apaixonado por tecnologia", "Criativo"],
        autoStart: true,
        loop: true,
        wrapperClassName: "typewriter",
        // cursorClassName: "typewriter",
        cursor: " ",
      }}
    />
  );

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <ContainerGeral id="home">
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Hero>
        <div className="caue">
          <span data-aos="fade-up">Olá, Eu sou</span>
          <h1 data-aos="fade-up">{nomeType}</h1>
          <p data-aos="fade-up">
            Desenvolvedor Front-end <br /> e futuro full-stack
          </p>

          <LinkButtons data-aos="fade-up">
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
          <Image src={perfil} alt="eu" data-aos="fade-rigth" />
        </div>
        <SobreMim data-aos="fade-up">
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
            <a
              href={"/curriculo.pdf"}
              download={"meu curriculo"}
              className="gradienteAzul"
            >
              <Download size={32} />
              Curriculo
            </a>

            <a
              href="https://wa.me/message/DALDHTPD7YKUD1"
              className="gradienteRosa"
            >
              <WhatsappLogo size={24} />
              WhatsApp
            </a>
          </LinkButtons>
        </SobreMim>
      </ContainerSobreMim>

      <ContainerExperiencia id="experiencia">
        <div data-aos="fade-up">
          <Experiencias />
        </div>
      </ContainerExperiencia>

      <ContainerProjetos id="projetos">
        <h1 data-aos="fade-up">Projetos</h1>

        <div className="projetos" data-aos="fade-up">
          <Projeto
            img={coffedelivery}
            nomeDoProjeto="CoffeDelivey"
            descricao="Este é um site completo para uma loja especializada em cafés, 
            com uma ampla variedade de opções disponíveis. Uma aplicação completa, 
            o site oferece uma experiência de compra online fácil e conveniente, 
            com um catálogo completo que apresenta todas as opções de café disponíveis. 
            Além disso, a plataforma oferece um carrinho de compras seguro e eficiente, 
            onde é possível adicionar e remover itens antes de finalizar a compra. Também tem um
            formulário para o frete e um checkout transparente de fácil entendimento. Ainda não está responsivo, pois o intuito desse projeto era 
            treinar minhas habilidades com as tecnologias abaixo"
            tecnologias="ReactJS, StyleComponents, Typescript"
            link="https://coffedelivery.vercel.app/"
          />
          <Projeto
            img={gitblog}
            nomeDoProjeto="GitBlog"
            descricao="Uma das aplicações mais legais que ja fiz, um blog inovador 
            que utiliza a API do GitHub para criar automaticamente miniaturas de 
            postagens e páginas estilizadas a partir de issues criadas. A aplicação 
            também exibe informações relevantes, como número de comentários e dados do 
            usuário, como descrição e número de seguidores. Além disso, possui uma barra de pesquisa para buscar conteúdo relacionado. É um projeto desafiador e completo que demonstra habilidades avançadas de desenvolvimento de front-end.
            "
            tecnologias="ReactJS, StyleComponents, TypeScript"
            link="https://git-blog-sigma.vercel.app/"
          />
          <Projeto
            img={dashGo}
            nomeDoProjeto="DashGo"
            descricao="projeto para dashboards"
            tecnologias="typescript, reactjs, tawild"
            link="https://dashgo-wine.vercel.app/dashboard"
          />
          <Projeto
            img={todolist}
            nomeDoProjeto="ToDo List"
            descricao="usuario pode definir suas tarefas"
            tecnologias="react JS, Css, JavaScript"
            link="https://todochallenge.vercel.app/"
          />
        </div>

     
      </ContainerProjetos>
      <Footer />
    </ContainerGeral>
  );
}
