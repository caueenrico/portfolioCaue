export interface DiagramNode {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  type: 'infra' | 'compute';
}

export interface DiagramConnection {
  from: string;
  to: string;
}

export interface Diagram {
  name: string;
  nodes: DiagramNode[];
  connections: DiagramConnection[];
}

export const diagrams: Diagram[] = [
  {
    name: 'Microservices',
    nodes: [
      { id: 'r53', label: 'Route 53', sublabel: 'DNS', x: 50, y: 40, type: 'infra' },
      { id: 'cf', label: 'CloudFront', sublabel: 'CDN', x: 200, y: 40, type: 'infra' },
      { id: 'apigw', label: 'API Gateway', sublabel: 'REST', x: 200, y: 130, type: 'infra' },
      { id: 'lambda', label: 'Lambda', sublabel: '.NET 8', x: 200, y: 220, type: 'compute' },
      { id: 's3', label: 'S3', sublabel: 'Static', x: 350, y: 40, type: 'infra' },
      { id: 'dynamo', label: 'DynamoDB', sublabel: 'NoSQL', x: 80, y: 220, type: 'infra' },
      { id: 'cognito', label: 'Cognito', sublabel: 'Auth', x: 350, y: 130, type: 'compute' },
    ],
    connections: [
      { from: 'r53', to: 'cf' },
      { from: 'cf', to: 'apigw' },
      { from: 'cf', to: 's3' },
      { from: 'apigw', to: 'lambda' },
      { from: 'apigw', to: 'cognito' },
      { from: 'lambda', to: 'dynamo' },
    ],
  },
  {
    name: 'Event-Driven',
    nodes: [
      { id: 'apigw', label: 'API Gateway', sublabel: 'Ingest', x: 50, y: 130, type: 'infra' },
      { id: 'sqs', label: 'SQS', sublabel: 'Queue', x: 175, y: 130, type: 'infra' },
      { id: 'lambda', label: 'Lambda', sublabel: 'Processor', x: 300, y: 130, type: 'compute' },
      { id: 'sns', label: 'SNS', sublabel: 'Fan-out', x: 300, y: 40, type: 'infra' },
      { id: 'lambda2', label: 'Lambda', sublabel: 'Notify', x: 175, y: 40, type: 'compute' },
      { id: 'ses', label: 'SES', sublabel: 'Email', x: 50, y: 40, type: 'infra' },
      { id: 'cw', label: 'CloudWatch', sublabel: 'Logs', x: 300, y: 220, type: 'infra' },
    ],
    connections: [
      { from: 'apigw', to: 'sqs' },
      { from: 'sqs', to: 'lambda' },
      { from: 'lambda', to: 'sns' },
      { from: 'sns', to: 'lambda2' },
      { from: 'lambda2', to: 'ses' },
      { from: 'lambda', to: 'cw' },
    ],
  },
  {
    name: 'CI/CD Pipeline',
    nodes: [
      { id: 'gh', label: 'GitHub', sublabel: 'Source', x: 50, y: 130, type: 'compute' },
      { id: 'cp', label: 'CodePipeline', sublabel: 'Orchestrator', x: 150, y: 130, type: 'infra' },
      { id: 'cb', label: 'CodeBuild', sublabel: 'Build+Test', x: 250, y: 130, type: 'compute' },
      { id: 'ecr', label: 'ECR', sublabel: 'Registry', x: 350, y: 130, type: 'infra' },
      { id: 'ecs', label: 'ECS Fargate', sublabel: 'Deploy', x: 350, y: 40, type: 'compute' },
      { id: 's3', label: 'S3', sublabel: 'Artifacts', x: 250, y: 40, type: 'infra' },
      { id: 'cw', label: 'CloudWatch', sublabel: 'Monitor', x: 350, y: 220, type: 'infra' },
    ],
    connections: [
      { from: 'gh', to: 'cp' },
      { from: 'cp', to: 'cb' },
      { from: 'cb', to: 'ecr' },
      { from: 'cb', to: 's3' },
      { from: 'ecr', to: 'ecs' },
      { from: 'ecs', to: 'cw' },
    ],
  },
];
