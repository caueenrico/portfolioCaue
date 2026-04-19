import { useEffect, useState } from "react";
import { ContHeader } from "./styles";
import { List } from "phosphor-react";
import { MenuMobile } from "../menuMobile";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        closeMenu={() => setMenuIsVisible(false)}
      />
      <ContHeader className={scrolled ? "scrolled" : ""}>
        <div className="inner">
          <a href="#home" className="logo">CE.</a>

          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#experiencia">Trajetória</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>

          <button className="menuBtn" onClick={() => setMenuIsVisible(!menuIsVisible)}>
            <List size={22} color="#E8A838" />
          </button>
        </div>
      </ContHeader>
    </>
  );
}
