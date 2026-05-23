import { Container, SkillGroup } from "./styles";
import { useTranslation } from "@/i18n/useTranslation";

interface SkillGroupData {
  icon: string;
  title: string;
  items: string[];
}

export function Capacidades() {
  const { t, tArray } = useTranslation();
  const groups = tArray<SkillGroupData>('skills.groups');

  return (
    <Container>
      <span className="sectionLabel">{t('skills.label')}</span>
      <h2>{t('skills.h2')}</h2>
      <p className="sectionDesc">{t('skills.desc')}</p>

      <div className="grid">
        {groups.map((group) => (
          <SkillGroup key={group.title}>
            <div className="groupHeader">
              <span className="icon">{group.icon}</span>
              <span className="groupLabel">{group.title}</span>
            </div>
            <div className="skills">
              {group.items.map((skill) => (
                <span key={skill} className="skill">{skill}</span>
              ))}
            </div>
          </SkillGroup>
        ))}
      </div>
    </Container>
  );
}
