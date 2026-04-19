import { CarouselWrapper, Track, CertCard } from "./styles";

const certs = [
  // Rocketseat — mais recentes
  { category: "DevOps", name: "IAC com Terraform", issuer: "Rocketseat", year: "2025" },
  { category: "DevOps", name: "Containers com Docker e Docker Compose", issuer: "Rocketseat", year: "2025" },
  { category: "DevOps", name: "Fundamentos da Cultura DevOps", issuer: "Rocketseat", year: "2025" },
  { category: "Back-end", name: "Fundamentos do .NET", issuer: "Rocketseat", year: "2024" },
  { category: "Performance", name: "HTTP e Performance", issuer: "Rocketseat", year: "2024" },
  { category: "Front-end", name: "Aprofundando em Hooks", issuer: "Rocketseat", year: "2024" },
  // DevSuperior
  { category: "Full Stack", name: "Bootcamp Spring React", issuer: "DevSuperior", year: "2021" },
  // DIO
  { category: "Front-end", name: "Angular", issuer: "DIO", year: "2022" },
  { category: "JavaScript", name: "Orientação a Objetos", issuer: "DIO", year: "2022" },
  { category: "JavaScript", name: "Javascript Assíncrono", issuer: "DIO", year: "2022" },
  { category: "JavaScript", name: "Debugging e Error Handling", issuer: "DIO", year: "2022" },
  { category: "JavaScript", name: "Map, Filter e Reduce", issuer: "DIO", year: "2022" },
  { category: "JavaScript", name: "Coleções JavaScript", issuer: "DIO", year: "2022" },
  { category: "JavaScript", name: "Funções JavaScript — Intermediário", issuer: "DIO", year: "2022" },
  { category: "JavaScript", name: "Variáveis e Tipos", issuer: "DIO", year: "2022" },
  { category: "JavaScript", name: "Sintaxe e Operadores", issuer: "DIO", year: "2022" },
  { category: "Back-end", name: "Introdução ao PHP", issuer: "DIO", year: "2022" },
  { category: "Front-end", name: "Programação para Internet com JavaScript", issuer: "DIO", year: "2021" },
  { category: "Fundamentos", name: "Introdução ao Git e ao GitHub", issuer: "DIO", year: "2021" },
  { category: "JavaScript", name: "Sintaxe Básica em JavaScript", issuer: "DIO", year: "2021" },
  { category: "Front-end", name: "Bootstrap", issuer: "DIO", year: "2021" },
  { category: "Front-end", name: "Flexbox em CSS", issuer: "DIO", year: "2021" },
  { category: "Front-end", name: "HTML 5 e CSS 3", issuer: "DIO", year: "2021" },
  { category: "Fundamentos", name: "Lógica de Programação", issuer: "DIO", year: "2021" },
];

// Duplica a lista para criar o loop infinito contínuo
const loopedCerts = [...certs, ...certs];

export function Certificados() {
  return (
    <CarouselWrapper>
      <Track className="track">
        {loopedCerts.map((cert, i) => (
          <CertCard key={i}>
            <span className="certCategory">{cert.category}</span>
            <span className="certName">{cert.name}</span>
            <div className="certMeta">
              <span className="certIssuer">{cert.issuer}</span>
              <span className="certYear">{cert.year}</span>
            </div>
          </CertCard>
        ))}
      </Track>
    </CarouselWrapper>
  );
}
