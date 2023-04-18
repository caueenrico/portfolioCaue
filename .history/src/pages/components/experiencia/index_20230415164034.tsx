import { useState } from "react";
import { ButtonsCont, Container, DisplayExp, ExperienciasDescricao } from "./styles";
import { ButtonExp } from "../buttonsExp";

export function Experiencias() {
  const [buttonActive, setButtonActive ] = useState(false)

  function handlePutExp(){
    setButtonActive(true)

  }

  return (
    <Container>
      <h1>Experiências</h1>

      <DisplayExp>
        <ButtonsCont>
          <ButtonExp active={'active'} name={'ultra'}/>
          <ButtonExp />
          <ButtonExp />
        </ButtonsCont>

        <ExperienciasDescricao>
          <h2>Técnico de Controle e Qualidade operacional</h2>
          <span>Ultracargo | Jun 2016 - Atual</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at
            mattis metus. Nullam sit amet mauris condimentum, volutpat augue in,
            mattis urna.
          </p>
        </ExperienciasDescricao>
      </DisplayExp>
    </Container>
  );
}
