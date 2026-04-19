import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header } from "../components/header";
import { Experiencias } from "../components/experiencia";
import { Capacidades } from "../components/capacidades";
import { Certificados } from "../components/certificados";
import { Footer } from "../components/footer/footer";

import {
  PageWrapper,
  HeroSection,
  CTARow,
  AboutSection,
  ValueCard,
  SectionWrapper,
  EducationContactSection,
} from "../styles/styles";

import portrait from "../assets/Retrato profissional com toque futurista.png";

import {
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
  WhatsappLogo,
} from "phosphor-react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out' });
  }, []);

  return (
    <PageWrapper id="home">
      <Header />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <HeroSection>
        <div className="scanLine" aria-hidden="true" />
        <div className="heroInner">
          <div className="heroLeft">
            <h1 className="heroTitle">
              Arquiteto de<br />
              <span className="accent">Software</span>
            </h1>

            <p className="heroRole">Cauê Enrico · Guarujá, SP</p>

            <p className="heroDesc">
              Projetando sistemas que escalam. Integrando tecnologia com propósito de negócio.
              De arquitetura e cloud à entrega em produção, com mão na massa e visão sistêmica.
            </p>

            <div className="techBadgeRow">
              {['.NET 8', 'Node.js', 'Python', 'React', 'Angular', 'Azure DevOps', 'AWS', 'Docker', 'SAP PI/PO'].map((t) => (
                <span key={t} className="techBadge">{t}</span>
              ))}
            </div>

            <CTARow>
              <a
                href="https://www.linkedin.com/in/caue-enrico/"
                target="_blank"
                rel="noopener noreferrer"
                className="ctaPrimary"
              >
                <LinkedinLogo size={18} weight="fill" />
                LinkedIn
              </a>

              <a
                href="https://wa.me/5513991648306"
                target="_blank"
                rel="noopener noreferrer"
                className="ctaSecondary"
              >
                <WhatsappLogo size={18} />
                WhatsApp
              </a>

              {/* Adicione o arquivo curriculo.pdf em /public para habilitar este botão */}
              <a
                href="https://github.com/caueenrico"
                target="_blank"
                rel="noopener noreferrer"
                className="ctaSecondary"
              >
                <GithubLogo size={18} />
                GitHub
              </a>
            </CTARow>
          </div>

          <div className="heroRight">
            <div style={{ position: 'relative' }}>
              <div className="portraitRing" aria-hidden="true" />
              <div className="portraitRing2" aria-hidden="true" />
              <div className="portraitFrame">
                <Image
                  src={portrait}
                  alt="Cauê Enrico — Arquiteto de Software"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </HeroSection>

      {/* ─── SOBRE / PROPOSTA DE VALOR ────────────────────────────────── */}
      <AboutSection id="sobre">
        <div className="aboutInner">
          <div className="aboutLeft" data-aos="fade-up">
            <span className="sectionLabel">Sobre</span>
            <h2>Quem projeta,<br />também entrega.</h2>
            <p className="aboutDesc">
              Sou <span className="highlight">Analista de Sistemas na Ultracargo</span> com foco em arquitetura de soluções e desenvolvimento de software. Participo das principais iniciativas tecnológicas da empresa, desde a concepção da arquitetura até a sustentação dos sistemas em produção.
              <br /><br />
              Antes de entrar para o desenvolvimento, trabalhei por anos diretamente na operação portuária da Ultracargo. Essa vivência operacional ainda influencia como leio requisitos e como conecto decisões técnicas ao contexto real do negócio.
              <br /><br />
              No lado técnico, trabalho com <span className="highlight">.NET, Node.js, Python, React e Angular</span>. Na parte de arquitetura, projeto soluções orientadas a eventos usando SQS, aplico padrões como CQRS e Outbox para garantir consistência e resiliência, e estruturo serviços na AWS com EC2, S3, CloudFront e Cognito. Pipelines CI/CD com Azure DevOps e conteinerização com Docker fazem parte do dia a dia.
            </p>

            <div className="recognitionBadge">
              <span className="badgeIcon">★</span>
              <div className="badgeText">
                <span className="badgeTitle">Reconhecido pela Ultracargo em 2024</span>
                <span className="badgeSub">Projeto de IA para prevenção de fraudes em terminais portuários</span>
              </div>
            </div>
          </div>

          <div className="aboutRight" data-aos="fade-up" data-aos-delay="100">
            <ValueCard>
              <div className="cardTop">
                <span className="cardIcon">⬡</span>
                <span className="cardTitle">Arquitetura de Soluções</span>
              </div>
              <p className="cardDesc">
                Definição de arquitetura, escolha de tecnologias, organização de microsserviços e fluxos de integração, sempre alinhado a boas práticas de segurança e escalabilidade.
              </p>
            </ValueCard>

            <ValueCard>
              <div className="cardTop">
                <span className="cardIcon">△</span>
                <span className="cardTitle">Cloud & DevOps</span>
              </div>
              <p className="cardDesc">
                Pipelines CI/CD com Azure DevOps, deploy em AWS e Azure, conteinerização com Docker e sustentação de aplicações em produção, da build ao hotfix.
              </p>
            </ValueCard>

            <ValueCard>
              <div className="cardTop">
                <span className="cardIcon">⊕</span>
                <span className="cardTitle">Visão de Negócio</span>
              </div>
              <p className="cardDesc">
                Background operacional em logística portuária que permite traduzir demandas das áreas de negócio em soluções técnicas precisas, viáveis e sustentáveis.
              </p>
            </ValueCard>
          </div>
        </div>
      </AboutSection>

      {/* ─── TRAJETÓRIA ───────────────────────────────────────────────── */}
      <SectionWrapper id="experiencia" tone="base">
        <div data-aos="fade-up">
          <Experiencias />
        </div>
      </SectionWrapper>

      {/* ─── CAPACIDADES ──────────────────────────────────────────────── */}
      <SectionWrapper id="capacidades" tone="alt">
        <div data-aos="fade-up">
          <Capacidades />
        </div>
      </SectionWrapper>

      {/* ─── PROJETOS (oculto temporariamente) ───────────────────────── */}
      {/* Habilite esta seção quando tiver projetos corporativos para exibir */}

      {/* ─── FORMAÇÃO & CONTATO ───────────────────────────────────────── */}
      <EducationContactSection id="contato">
        <div className="eduContactInner">
          {/* Formação */}
          <div data-aos="fade-up">
            <span className="sectionLabel">Formação</span>
            <h2>Educação &<br />Certificações</h2>

            <ul className="eduList">
              <li>
                <span className="eduDegree">Análise e Desenvolvimento de Sistemas</span>
                <span className="eduInst">Universidade Anhembi Morumbi</span>
                <span className="eduYear">2021 — 2023</span>
              </li>
              <li>
                <span className="eduDegree">Academia SAP S/4HANA</span>
                <span className="eduInst">Ka Solution</span>
                <span className="eduYear">2024</span>
              </li>
              <li>
                <span className="eduDegree">Especialização Full Stack</span>
                <span className="eduInst">Rocketseat · Ignite & Explorer</span>
                <span className="eduYear">2022 — 2023</span>
              </li>
            </ul>

            <div className="certsBlock">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 36, marginBottom: 20 }}>
                <span className="sectionLabel" style={{ display: 'block', marginBottom: 0 }}>
                  Certificados
                </span>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.68rem',
                  color: '#5C5C70',
                  letterSpacing: '0.05em',
                }}>
                  +25 extracurriculares
                </span>
              </div>
              <Certificados />
            </div>
          </div>

          {/* Contato */}
          <div className="contactBlock" data-aos="fade-up" data-aos-delay="100">
            <span className="sectionLabel">Contato</span>
            <h2>Vamos construir<br />algo juntos?</h2>

            <div className="contactLinks">
              <a
                href="https://www.linkedin.com/in/caue-enrico/"
                target="_blank"
                rel="noopener noreferrer"
                className="contactItem"
              >
                <span className="itemIcon">
                  <LinkedinLogo size={18} color="#E8A838" />
                </span>
                <div className="itemText">
                  <span className="itemLabel">LinkedIn</span>
                  <span className="itemValue">linkedin.com/in/caue-enrico</span>
                </div>
              </a>

              <a
                href="https://wa.me/5513991648306"
                target="_blank"
                rel="noopener noreferrer"
                className="contactItem"
              >
                <span className="itemIcon">
                  <WhatsappLogo size={18} color="#E8A838" />
                </span>
                <div className="itemText">
                  <span className="itemLabel">WhatsApp</span>
                  <span className="itemValue">(13) 99164-8306</span>
                </div>
              </a>

              <a
                href="mailto:caueenrico@gmail.com"
                className="contactItem"
              >
                <span className="itemIcon">
                  <EnvelopeSimple size={18} color="#E8A838" />
                </span>
                <div className="itemText">
                  <span className="itemLabel">E-mail</span>
                  <span className="itemValue">caueenrico@gmail.com</span>
                </div>
              </a>

              <a
                href="https://github.com/caueenrico"
                target="_blank"
                rel="noopener noreferrer"
                className="contactItem"
              >
                <span className="itemIcon">
                  <GithubLogo size={18} color="#E8A838" />
                </span>
                <div className="itemText">
                  <span className="itemLabel">GitHub</span>
                  <span className="itemValue">github.com/caueenrico</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </EducationContactSection>

      <Footer />
    </PageWrapper>
  );
}
