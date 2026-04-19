import { Container } from "./styles";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <div className="footerLeft">
        <span className="footerLogo">CE.</span>
        <span className="footerTagline">Arquiteto de Software · Guarujá, SP</span>
      </div>

      <div className="footerRight">
        <div className="socialLinks">
          <a href="https://www.linkedin.com/in/caue-enrico/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/caueenrico" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:caueenrico@gmail.com">Email</a>
        </div>
        <span className="copyright">© {year} Cauê Enrico. Todos os direitos reservados.</span>
      </div>
    </Container>
  );
}
