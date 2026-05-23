import Image from "next/image";
import { Container, Timeline, TimelineItem } from "./styles";
import reconhecimento1 from "../../assets/reconhecimento_2024.jpeg";
import reconhecimento2 from "../../assets/reconhecimento_2024_2.jpeg";
import aratu from "../../assets/implantando_sistema_aratu.jpeg";
import { useTranslation } from "@/i18n/useTranslation";

interface ExperienceItem {
  period: string;
  badge?: string;
  title: string;
  company: string;
  description: string;
  achievements?: string[];
  captions?: string[];
}

const CURRENT_ROLE_TECH = ['AWS', 'Azure DevOps', 'SAP PI/PO', 'Terraform', 'Docker', '.NET 8 (C#)', 'Node.js', 'Python', 'React', 'Angular'];
const FREELANCE_TECH = ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'];

const PHOTOS = [
  { src: reconhecimento1, alt: 'Recognition #techparamover' },
  { src: reconhecimento2, alt: 'Award ceremony' },
  { src: aratu, alt: 'System deployment at Aratu Terminal' },
];

export function Experiencias() {
  const { t, tArray } = useTranslation();
  const items = tArray<ExperienceItem>('experience.items');

  return (
    <Container>
      <span className="sectionLabel">{t('experience.label')}</span>
      <h2>{t('experience.h2')}</h2>
      <p className="sectionDesc">{t('experience.desc')}</p>

      <Timeline>
        {items.map((item, idx) => {
          const isFeatured = idx === 0;
          const tech = idx === 0 ? CURRENT_ROLE_TECH : idx === 1 ? FREELANCE_TECH : null;
          const captions = item.captions ?? [];

          return (
            <TimelineItem key={idx} featured={isFeatured}>
              <div className="dot" />
              <div className="content">
                <div className="meta">
                  <span className="period">{item.period}</span>
                  {item.badge ? <span className="badge gold">{item.badge}</span> : null}
                </div>
                <h3>{item.title}</h3>
                <span className="company">{item.company}</span>
                <p>{item.description}</p>

                {item.achievements && item.achievements.length > 0 ? (
                  <ul className="achievements">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                ) : null}

                {tech ? (
                  <div className="techRow">
                    {tech.map((techName) => (
                      <span key={techName} className="tech">{techName}</span>
                    ))}
                  </div>
                ) : null}

                {captions.length > 0 ? (
                  <div className="photoGrid">
                    {PHOTOS.map((photo, i) => (
                      <figure key={i}>
                        <Image
                          src={photo.src}
                          alt={captions[i] ?? photo.alt}
                          width={264}
                          height={176}
                          style={{ objectFit: 'cover' }}
                        />
                        <figcaption>{captions[i] ?? photo.alt}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : null}
              </div>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Container>
  );
}
