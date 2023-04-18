import { useState } from "react";
import {
  ButtonsCont,
  Container,
  DisplayExp,
  ExperienciasDescricao,
} from "./styles";
import { ButtonExp } from "../buttonsExp";

export function Experiencias() {
  const [active, setActive] = useState("");
  const [exp, setExp] = useState({
    title: "Técnico de Controle e Qualidade operacional",
    empresa: "Ultracargo",
    periodo: "Jun 2016 - Atual",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
  });

  function handlePutExp(event: any) {
    const nomedoButton = event.target.name;

    if (nomedoButton === "ultra") {
      setActive("active");
      setExp({
        title: "Técni de Controle e Qualidade operacional",
        empresa: "Ultracargo",
        periodo: "Jun 2016 - Atual",
        descricao:
          "teste test",
      });
    } else {
      console.log("erro");
    }
  }

  return (
    <Container>
      <h1>Experiências</h1>

      <DisplayExp>
        <ButtonsCont>
          <ButtonExp funcao={handlePutExp} active={active} name={"Ultra"} />
          <ButtonExp funcao={handlePutExp} active={active} name={"exercito"} />
          <ButtonExp funcao={handlePutExp} active={active} name={"jovem"} />
        </ButtonsCont>

        <ExperienciasDescricao>
          <h2>{exp.title}</h2>
          <span>
            {exp.empresa} | {exp.periodo}
          </span>
          <p>{exp.descricao}</p>
        </ExperienciasDescricao>
      </DisplayExp>
    </Container>
  );
}
