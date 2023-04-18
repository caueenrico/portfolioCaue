import { Container, DisplayExp } from "./styles";

export function Experiencias() {
  return (
    <Container>
      <h1>Experiências</h1>

      <DisplayExp>
        <Buttons>
          <button>Ultracargo</button>
          <button>Exército BR</button>
          <button>Jovem Empreendedor</button>
        </Buttons>

        <div>
          <h2>Técnico de Controle e Qualidade operacional</h2>
          <span>ultracargo</span>
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
