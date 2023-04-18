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
    descricao: 
      <p>
        Atualmente como Técnico de Controle e Qualidade Operacional, fico
        responsável pelas operações marítimas no porto de santos, comunicação
        com a tripulação a bordo em inglês, cálculos de quantidades e análises
        físico químicas{" "}
      </p>
    ,
  });

  function handlePutExp(event: any) {
    const nomedoButton = event.target.name;

    if (nomedoButton === "Ultracargo") {
      setActive("Ultracargo");
      setExp({
        title: "Técni de Controle e Qualidade operacional",
        empresa: "Ultracargo",
        periodo: "Jun 2016 - Atual",
        descricao: <p>
        Atualmente como Técnico de Controle e Qualidade Operacional, fico
        responsável pelas operações marítimas no porto de santos, comunicação
        com a tripulação a bordo em inglês, cálculos de quantidades e análises
        físico químicas{" "}
      </p>,
      });
    } else if (nomedoButton === "Exército Brasileiro") {
      setActive("Exército Brasileiro");
      setExp({
        title: "Soldado",
        empresa: "Exército Brasileiro",
        periodo: "Jan 2014 - Dez 2015",
        descricao:
<p>
        Atualmente como Técnico de Controle e Qualidade Operacional, fico
        responsável pelas operações marítimas no porto de santos, comunicação
        com a tripulação a bordo em inglês, cálculos de quantidades e análises
        físico químicas{" "}
      </p>      });
    } else if (nomedoButton === "jovem Empreendedor") {
      setActive("jovem Empreendedor");
      setExp({
        title: "Jovem Empreendedor",
        empresa: "SEBRAE",
        periodo: "Jan 2014 - Dez 2015",
        descricao:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
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
            active={active === "jovem Empreendedor" ? "active" : ""}
            name={"jovem Empreendedor"}
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
