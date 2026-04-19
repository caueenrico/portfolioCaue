import Image from "next/image";
import { ProjetoCont } from "./styles";
import { ArrowRight } from "phosphor-react";

type ProjetoProps = {
  img: any;
  label?: string;
  nomeDoProjeto: string;
  descricao: string;
  tecnologias: string[];
  link: string;
};

export function Projeto({ img, label = "Projeto", nomeDoProjeto, descricao, tecnologias, link }: ProjetoProps) {
  return (
    <ProjetoCont>
      <a href={link} target="_blank" rel="noopener noreferrer" className="imageWrap">
        <Image src={img} alt={nomeDoProjeto} fill style={{ objectFit: 'cover' }} />
      </a>

      <div className="cardBody">
        <span className="projectLabel">{label}</span>
        <h2>{nomeDoProjeto}</h2>
        <p>{descricao}</p>

        <div className="techRow">
          {tecnologias.map((t) => (
            <span key={t} className="tech">{t}</span>
          ))}
        </div>

        <a className="projectLink" href={link} target="_blank" rel="noopener noreferrer">
          Ver projeto <ArrowRight size={14} weight="bold" />
        </a>
      </div>
    </ProjetoCont>
  );
}
