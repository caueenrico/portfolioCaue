import { useState } from "react";
import {
  ButtonsCont,
  Container,
  DisplayExp,
  ExperienciasDescricao,
} from "./styles";
import { ButtonExp } from "../buttonsExp";

export function Experiencias() {
  const [active, setActive] = useState("Ultracargo");
  const [exp, setExp] = useState({
    title: "Técnico de Controle e Qualidade operacional",
    empresa: "Ultracargo",
    periodo: "Jun 2016 - Atual",
    descricao: (
      <p>
        Atualmente como Técnico de Controle e Qualidade Operacional, fico
        responsável pelas operações marítimas no porto de santos, comunicação
        com a tripulação a bordo em inglês, cálculos de quantidades e análises
        físico químicas{" "}
      </p>
    ),
  });

  function handlePutExp(event: any) {
    const nomedoButton = event.target.name;

    if (nomedoButton === "Ultracargo") {
      setActive("Ultracargo");
      setExp({
        title: "Técnico de Controle e Qualidade operacional",
        empresa: "Ultracargo",
        periodo: "Jun 2016 - Atual",
        descricao: (
          <p>
            Atualmente como Técnico de Controle e Qualidade Operacional, fico
            responsável pelas operações marítimas no porto de santos,
            comunicação com a tripulação a bordo em inglês, cálculos de
            quantidades e análises físico químicas{" "}
          </p>
        ),
      });
    } else if (nomedoButton === "Exército Brasileiro") {
      setActive("Exército Brasileiro");
      setExp({
        title: "Aspirante a Oficial",
        empresa: "Exército Brasileiro",
        periodo: "Jan 2016 - Dez 2016",
        descricao: (
          <p>
            Fui aprovado no concurso para aluno oficial do exército brasileiro
            .Passar neste concurso para mim foi uma grande vitória na época, me formei
            aspirante a oficial temporário. Pude vivenciar na "pele" o trabalho
            em equipe, a força, o espirito de liderança, estratégia e
            patriotismo{" "}
          </p>
        ),
      });
    } else if (nomedoButton === "Jovem Empreendedor") {
      setActive("Jovem Empreendedor");
      setExp({
        title: "Jovem Empreendedor",
        empresa: "Governo do Estado de São Paulo",
        periodo: "Jan 2014 - Dez 2014",
        descricao: (
          <p>
            Fui selecionado para participar do programa jovem empreendedor do
            Governo do Estado de São Paulo, onde durante os finais de semanas
            ministrava atividades para os frequentadores da escola da família,
            tive a oportunidade dar aula de reforço de matemática basica, aulas
            de informatica, inglês Básico e atividades esportivas. Foi uma
            experiência incrivel para mim, pois com 16 anos tive a oportunidade
            de desenvolver minha comunicação, responsabilidade e maturidade{" "}
          </p>
        ),
      });
    }
  }

  return (
    <Container>
      <h1>Experiências</h1>

      <DisplayExp>
        <ButtonsCont>
          <ButtonExp
            funcao={handlePutExp}
            active={active === "Ultracargo" ? "active" : ""}
            name={"Ultracargo"}
          />
          <ButtonExp
            funcao={handlePutExp}
            active={active === "Exército Brasileiro" ? "active" : ""}
            name={"Exército Brasileiro"}
          />
          <ButtonExp
            funcao={handlePutExp}
            active={active === "Jovem Empreendedor" ? "active" : ""}
            name={"Jovem Empreendedor"}
          />
        </ButtonsCont>

        <ExperienciasDescricao>
          <h2>{exp.title}</h2>
          <span>
            {exp.empresa} | {exp.periodo}
          </span>
          {exp.descricao}
        </ExperienciasDescricao>
      </DisplayExp>
    </Container>
  );
}
