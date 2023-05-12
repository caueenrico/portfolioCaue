import Image from "next/image";
import { ProjetoCont } from "./styles";

import coffedeli from '../../assets/coffedeli.png'
import dashGo from '../../assets/dashGo.png'
import { LinkBreak, LinkSimple } from "phosphor-react";

type ProjetoProps = {
  img: any,
  V

}

export function Projeto({img , nomeDoProjeto, descricao}: ProjetoProps) {
  return (
    <ProjetoCont id="jlkj">
      
      <Image src={} alt="coffe"/>
   

      <h1>Nome do Projeto</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        blandit interdum odio eu varius.
      </p>

      <span>Tecnologias usadas no projeto: NextJS, TypeScript </span>

      <a href="http://"> <LinkSimple size={24}/> Visualizar</a>
    </ProjetoCont>
  
  );
}
