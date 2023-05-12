import Image from "next/image";
import { ProjetoCont } from "./styles";

import coffedeli from '../../assets/coffedeli.png'
import dashGo from '../../assets/dashGo.png'
import { LinkBreak, LinkSimple } from "phosphor-react";

type ProjetoProps = {
  img: any,
  nomeDoProjeto: string,
  descricao: string,
  tecnologias: string,
  link: string
}

export function Projeto({img , nomeDoProjeto, descricao, tecnologias, link}: ProjetoProps) {
  return (
    <ProjetoCont id="jlkj">
      
      <Image src={img} alt="coffe"/>
   

      <h1>{nomeDoProjeto}</h1>

      <p>
        {descricao}
      </p>

      <span>Tecnologias usadas no projeto: {tecnologias} </span>

      <a href={link}> <LinkSimple size={24}/> Visualizar</a>
    </ProjetoCont>
  
  );
}
