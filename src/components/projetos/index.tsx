import Image from "next/image";
import { ProjetoCont } from "./styles";

import { LinkSimple } from "phosphor-react";

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

      <a href={link} className="linkimage" target="_blank"> 
      <Image src={img} alt="coffe"/>
      </a>
      
      <h1>{nomeDoProjeto}</h1>

      <p>
        {descricao}
      </p>

      <span>Tecnologias usadas no projeto: {tecnologias} </span>

      <a className="buttonLink" href={link} target="_blank"> <LinkSimple size={24}/> Visualizar</a>
    </ProjetoCont>
  
  );
}
