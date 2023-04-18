import { ContHeader } from "./styles";

function handleScroll() {
  const nav = document.querySelector("nav");
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }
}


export function Header() {
  return (
    <ContHeader>
      <h1> CE. </h1>

      <nav>
        <a href="#projetos">Home</a>
        <a href="">Sobre mim</a>
        <a href="">Experiência</a>
        <a href="">Projetos</a>
      </nav>
    </ContHeader>
  );
}
