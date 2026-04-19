import { Container, SkillGroup } from "./styles";

const skillGroups = [
  {
    icon: "⬡",
    label: "Arquitetura & Integração",
    skills: ["SOLID", "Clean Architecture", "Microsserviços", "APIs REST", "SAP PI/PO", "SAP CPI", "Sistemas Legados", "ERPs"],
  },
  {
    icon: "{ }",
    label: "Back-end",
    skills: [".NET 8 (C#)", "Node.js", "Python", "TypeScript", "Autenticação & Segurança", "APIs RESTful"],
  },
  {
    icon: "□",
    label: "Front-end & Mobile",
    skills: ["React.js", "Next.js", "Angular", "React Native", "Tailwind CSS", "shadcn/ui"],
  },
  {
    icon: "△",
    label: "Cloud & DevOps",
    skills: ["Azure DevOps", "Azure Pipelines", "Azure App Services", "AWS EC2/S3", "AWS CloudFront", "AWS Cognito/SQS", "Docker", "Terraform", "CI/CD"],
  },
  {
    icon: "◇",
    label: "Banco de Dados",
    skills: ["SQL Server", "PostgreSQL", "SQLite", "Modelagem Relacional", "Migrations", "Otimização de Queries"],
  },
  {
    icon: "⊕",
    label: "Operação & Negócio",
    skills: ["Operações Portuárias", "Logística", "Inglês Intermediário", "Visão de Negócio"],
  },
];

export function Capacidades() {
  return (
    <Container>
      <span className="sectionLabel">Capacidades</span>
      <h2>Arquitetura & Tecnologia</h2>
      <p className="sectionDesc">
        Competências organizadas por domínio, do design de sistemas à entrega em produção com qualidade e segurança.
      </p>

      <div className="grid">
        {skillGroups.map((group) => (
          <SkillGroup key={group.label}>
            <div className="groupHeader">
              <span className="icon">{group.icon}</span>
              <span className="groupLabel">{group.label}</span>
            </div>
            <div className="skills">
              {group.skills.map((skill) => (
                <span key={skill} className="skill">{skill}</span>
              ))}
            </div>
          </SkillGroup>
        ))}
      </div>
    </Container>
  );
}
