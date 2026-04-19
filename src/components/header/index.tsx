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

  const handleLogoClick = () => {
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {}
  };

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        closeMenu={() => setMenuIsVisible(false)}
      />
      <ContHeader className={scrolled ? "scrolled" : ""}>
        <div className="inner">
          <a href="#home" className="logo" onClick={handleLogoClick}>CE.</a>

          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#experiencia">Trajetória</a>
            <a href="#capacidades">Capacidades</a>
            {/* <a href="#arquitetura">Arquitetura</a> */}
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
