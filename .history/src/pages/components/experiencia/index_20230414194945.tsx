import { useState } from "react";
import { ButtonsCont, Container, DisplayExp } from "./styles";

export function Experiencias({isActive}: any) {
  const [buttonActive, setButtonActive ] = useState(false)

  function handlePutExp(){
    setButtonActive(true)

  }

  return (
    <Container>
      <h1>Experiências</h1>

      <DisplayExp>
        <ButtonsCont>
          <button >Ultracargo</button>
          <button>Exército BR</button>
          <button>Jovem Empreendedor  </button>
        </ButtonsCont>

        <div>
          <h2>Técnico de Controle e Qualidade operacional</h2>
          <span>ultracargo | Jun 2016 - Atual</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at
            mattis metus. Nullam sit amet mauris condimentum, volutpat augue in,
            mattis urna.
          </p>
        </div>
      </DisplayExp>
    </Container>
  );
}
