import { useEffect, useState } from "react";
import { ContHeader } from "./styles";
import { Hamburger, List } from "phosphor-react";
import { MenuMobile } from "../menuMobile";

export function Header() {
  const [noBorder, setNoBorder] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

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

  function handleMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  function closeMenu() {
    setMenuIsVisible(false);
  }

  return (
    <>
    <MenuMobile menuIsVisible={menuIsVisible} closeMenu={closeMenu}/>
    <ContHeader className="mobile">
      <div className={noBorder ? 'noBorder' : ' '}>
        <h1> CE. </h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
        </nav>

        <button onClick={ handleMenu }>
          <List size={32} color="#00D2DF" />
        </button>
      </div>

    </ContHeader>
    </>
  );
}
