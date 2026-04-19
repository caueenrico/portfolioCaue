import Image from "next/image";
import { Container, Timeline, TimelineItem } from "./styles";
import reconhecimento1 from "../../assets/reconhecimento_2024.jpeg";
import reconhecimento2 from "../../assets/reconhecimento_2024_2.jpeg";
import aratu from "../../assets/implantando_sistema_aratu.jpeg";

export function Experiencias() {
  return (
    <Container>
      <span className="sectionLabel">Trajetória</span>
      <h2>Experiência Profissional</h2>
      <p className="sectionDesc">
        Da operação portuária à arquitetura de software: uma trajetória construída com propósito técnico, liderança e entrega real em sistemas críticos.
      </p>

      <Timeline>
        {/* Cargo atual e mais relevante — destaque total */}
        <TimelineItem featured>
          <div className="dot" />
          <div className="content">
            <div className="meta">
              <span className="period">Jun 2024 — Atual</span>
              <span className="badge gold">★ Reconhecido em 2024</span>
            </div>
            <h3>Analista de Sistemas Pleno</h3>
            <span className="company">Ultracargo · Matriz</span>
            <p>
              Responsável pela arquitetura e desenvolvimento das principais soluções da empresa, com foco em sistemas escaláveis, segurança e continuidade operacional.
              Liderei o projeto de reconhecimento facial com IA para prevenção de fraudes nos terminais portuários, reconhecido internamente pelo impacto direto na segurança das operações.
            </p>

            <ul className="achievements">
              <li>Definição de arquitetura de soluções e fluxos de integração com SAP PI/PO e SAP CPI</li>
              <li>Construção e manutenção de pipelines CI/CD com Azure DevOps (build, test, deploy automatizado)</li>
              <li>Deploy e sustentação em AWS (EC2, S3, CloudFront, Cognito, SQS) e Azure App Services</li>
              <li>Conteinerização de serviços com Docker e monitoramento em produção com análise de logs e hotfixes</li>
              <li>Tradução de requisitos das áreas de logística, jurídico e operações em soluções técnicas viáveis</li>
            </ul>

            <div className="techRow">
              {['.NET 8 (C#)', 'Angular', 'React', 'Python', 'Node.js', 'Azure DevOps', 'AWS', 'Docker', 'SAP PI/PO'].map((t) => (
                <span key={t} className="tech">{t}</span>
              ))}
            </div>

            <div className="photoGrid">
              <figure>
                <Image
                  src={reconhecimento1}
                  alt="Reconhecimento Ultracargo 2024 - #techparamover"
                  width={264}
                  height={176}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Reconhecimento #techparamover · Ultracargo 2024</figcaption>
              </figure>
              <figure>
                <Image
                  src={reconhecimento2}
                  alt="Premiação com placa Ultracargo 2024"
                  width={264}
                  height={176}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Entrega da placa de premiação · Ultracargo 2024</figcaption>
              </figure>
              <figure>
                <Image
                  src={aratu}
                  alt="Implantação de sistema no Terminal Aratu - Ultracargo"
                  width={264}
                  height={176}
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Implantação de sistema · Terminal Aratu</figcaption>
              </figure>
            </div>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="dot" />
          <div className="content">
            <div className="meta">
              <span className="period">Jun 2023 — Jun 2024</span>
            </div>
            <h3>Desenvolvedor Full Stack</h3>
            <span className="company">Freelancer</span>
            <p>
              Desenvolvimento de aplicações web responsivas e APIs para clientes de diferentes segmentos. Entrega de soluções com autenticação, dashboards analíticos e integrações com APIs externas.
            </p>
            <div className="techRow">
              {['React.js', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'].map((t) => (
                <span key={t} className="tech">{t}</span>
              ))}
            </div>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="dot" />
          <div className="content">
            <div className="meta">
              <span className="period">Jun 2022 — Jun 2024</span>
            </div>
            <h3>Técnico de Controle e Qualidade Operacional</h3>
            <span className="company">Ultracargo Santos</span>
            <p>
              Controle de operações marítimas no centro operacional de uma das maiores empresas de granéis líquidos do Brasil. Comunicação técnica com tripulações internacionais em inglês e desenvolvimento de cálculos operacionais automatizados.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="dot" />
          <div className="content">
            <div className="meta">
              <span className="period">Jan 2016 — Jan 2017</span>
            </div>
            <h3>Aspirante a Oficial, Arma de Infantaria</h3>
            <span className="company">Exército Brasileiro</span>
            <p>
              Aprovado em concurso nacional de alta competitividade. A formação intensiva em estratégia, liderança sob pressão e trabalho em equipe moldou minha atuação técnica e de gestão.
            </p>
          </div>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
