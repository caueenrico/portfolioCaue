import { useEffect, useState } from "react";
import { ContHeader } from "./styles";
import { Hamburger, List } from "phosphor-react";
import { MenuMobile } from "../menuMobile";

export function Header() {
  const [noBorder, setNoBorder] = useState(false);

  useEffect(() => {
    function posicaoScroll() {
      if (window.scrollY > 10) {
        setNoBorder(true);
      } else {
        setNoBorder(false);
      }
    }

    window.addEventListener("scroll", posicaoScroll);
  });

  console.log(noBorder);

  return (
    
    <ContHeader className="mobile">
      <div className={noBorder ? 'noBorder' : ' '}>
        <h1> CE. </h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
        </nav>

        <button onClick={() => console.log('clicou')}>
          <List size={24} color="#00D2DF" />
        </button>
      </div>

    </ContHeader>
  );
}
