import Image from "next/image";
import { ProjetoCont } from "./styles";

import coffedeli from '../../../assets/coffedeli.png'
import { LinkBreak, LinkSimple } from "phosphor-react";

export function Projeto() {
  return (
    <>
    <h1></h1>
    <ProjetoCont>
      <Image src={coffedeli} alt="coffe"/>

      <h1>Nome do Projeto</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        blandit interdum odio eu varius.
      </p>

      <span>Tecnologias usadas no projeto: NextJS, TypeScript </span>

      <a href="http://"> <LinkSimple size={24}/> Visualizar</a>
    </ProjetoCont>
    </>
  );
}
