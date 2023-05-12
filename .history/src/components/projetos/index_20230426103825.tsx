import Image from "next/image";
import { ProjetoCont } from "./styles";

import coffedeli from '../../assets/coffedeli.png'
import dashGo from '../../assets/dashGo.png'
import { LinkBreak, LinkSimple } from "phosphor-react";

type ProjetoProps = {
  img: any,
  nomeDoProjeto: string,
  descricao: string,
  tecnologias: string
}

export function Projeto({img , nomeDoProjeto, descricao, tecnologias}: ProjetoProps) {
  return (
    <ProjetoCont id="jlkj">
      
      <Image src={img} alt="coffe"/>
   

      <h1>{nomeDoProjeto}</h1>

      <p>
        {descricao}
      </p>

      <span>Tecnologias usadas no projeto: NextJS, TypeScript </span>

      <a href="http://"> <LinkSimple size={24}/> Visualizar</a>
    </ProjetoCont>
  
  );
}
