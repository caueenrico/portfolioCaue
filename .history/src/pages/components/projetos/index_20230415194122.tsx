import Image from "next/image";
import { ProjetoCont } from "./styles";

import coffedeli from '../../../assets/coffedeli.png'

export function Projeto() {
  return (
    <ProjetoCont>
      <Image src={coffedeli} alt="coffe" size= />

      <h1>Nome do Projeto</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        blandit interdum odio eu varius.
      </p>

      <span>NextJS | TypeScript </span>
    </ProjetoCont>
  );
}
