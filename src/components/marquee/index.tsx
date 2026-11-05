const TERMS = [
  "Model Context Protocol",
  "Amazon Bedrock",
  "AgentCore",
  "RAG",
  "Python",
  "Node.js",
  ".NET 8",
  "ECS Fargate",
  "Terraform",
  "OAuth 2.0",
  "Langfuse",
  "Event-driven",
];

export function Marquee() {
  // Two identical halves: the track slides -50% and loops seamlessly.
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...TERMS, ...TERMS].map((term, i) => (
          <span key={i} className="marquee__item">
            {term}
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}
