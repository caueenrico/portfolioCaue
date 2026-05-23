import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header } from "../components/header";
import { Experiencias } from "../components/experiencia";
import { Capacidades } from "../components/capacidades";
import { Certificados } from "../components/certificados";
import { Footer } from "../components/footer/footer";
import { useEasterEggs } from "../components/easterEggs/useEasterEggs";
import { useTranslation } from "@/i18n/useTranslation";

import {
  PageWrapper,
  HeroSection,
  CTARow,
  AboutSection,
  ValueCard,
  SectionWrapper,
  EducationContactSection,
} from "../styles/styles";

import portrait from "../assets/Retrato profissional com toque futurista.png";

import {
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
  WhatsappLogo,
} from "phosphor-react";

const HERO_BADGES = ['AWS', 'Azure DevOps', 'SAP PI/PO', 'Terraform', 'Docker', '.NET', 'Node.js', 'Python', 'React'];

const VALUE_CARD_ICONS = ['⬡', '△', '⊕'];

const PARTICLES = [
  { text: '01100', top: '12%', left: '8%', size: 8, delay: 0 },
  { text: 'async', top: '25%', left: '85%', size: 9, delay: 5 },
  { text: '10011', top: '45%', left: '92%', size: 7, delay: 12 },
  { text: 'deploy', top: '60%', left: '5%', size: 8, delay: 18 },
  { text: '11010', top: '78%', left: '88%', size: 7, delay: 8 },
  { text: 'lambda', top: '35%', left: '3%', size: 9, delay: 25 },
  { text: '00101', top: '85%', left: '15%', size: 8, delay: 32 },
  { text: 'event', top: '15%', left: '78%', size: 8, delay: 40 },
  { text: '10110', top: '55%', left: '12%', size: 7, delay: 15 },
  { text: 'queue', top: '70%', left: '82%', size: 9, delay: 22 },
];

interface ValueCardData {
  title: string;
  body: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export default function Home() {
  useEasterEggs();
  const { t, tArray } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out' });
  }, []);

  const cards = tArray<ValueCardData>('about.cards');
  const educationItems = tArray<EducationItem>('education.items');

  return (
    <>
      <div id="tesseract-grid" aria-hidden="true">
        <div className="grid-plane" />
      </div>

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="data-particle"
          aria-hidden="true"
          style={{
            top: p.top,
            left: p.left,
            fontSize: p.size,
            animation: `float-drift-${i % 3} ${35 + i * 3}s linear infinite`,
            animationDelay: `${p.delay}s`,
            opacity: 0.12 + (i % 3) * 0.05,
          }}
        >
          {p.text}
        </span>
      ))}

      <style jsx global>{`
        @keyframes float-drift-0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -20px) rotate(2deg); }
          50% { transform: translate(-10px, 10px) rotate(-1deg); }
          75% { transform: translate(8px, -8px) rotate(1deg); }
        }
        @keyframes float-drift-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-12px, 18px) rotate(-2deg); }
          66% { transform: translate(20px, -12px) rotate(1.5deg); }
        }
        @keyframes float-drift-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(18px, 15px) rotate(2deg); }
        }
      `}</style>

      <PageWrapper id="home">
        <Header />

        <HeroSection>
          <div className="scanLine" aria-hidden="true" />
          <div className="heroInner">
            <div className="heroLeft">
              <h1 className="heroTitle">
                {t('hero.title')}<br />
                <span className="accent">{t('hero.titleAccent')}</span>
              </h1>

              <p className="heroRole">{t('hero.location')}</p>

              <p className="heroDesc">{t('hero.bio')}</p>

              <div className="techBadgeRow">
                {HERO_BADGES.map((badge) => (
                  <span key={badge} className="techBadge">{badge}</span>
                ))}
              </div>

              <CTARow>
                <a
                  href="https://www.linkedin.com/in/caue-enrico/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctaPrimary"
                >
                  <LinkedinLogo size={18} weight="fill" />
                  {t('hero.ctaLinkedin')}
                </a>

                <a
                  href="https://wa.me/5513991648306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctaSecondary"
                >
                  <WhatsappLogo size={18} />
                  {t('hero.ctaWhatsapp')}
                </a>

                <a
                  href="https://github.com/caueenrico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctaSecondary"
                >
                  <GithubLogo size={18} />
                  {t('hero.ctaGithub')}
                </a>
              </CTARow>
            </div>

            <div className="heroRight">
              <div style={{ position: 'relative' }}>
                <div className="portraitRing" aria-hidden="true" />
                <div className="portraitRing2" aria-hidden="true" />
                <div className="portraitFrame">
                  <Image
                    src={portrait}
                    alt={t('hero.portraitAlt')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </HeroSection>

        <AboutSection id="sobre">
          <div className="aboutInner">
            <div className="aboutLeft" data-aos="fade-up">
              <span className="sectionLabel">{t('about.label')}</span>
              <h2>{t('about.h2Line1')}<br />{t('about.h2Line2')}</h2>
              <p className="aboutDesc">
                {t('about.p1')}
                <br /><br />
                {t('about.p2')}
              </p>

              <div className="recognitionBadge">
                <span className="badgeIcon">★</span>
                <div className="badgeText">
                  <span className="badgeTitle">{t('about.recognitionTitle')}</span>
                  <span className="badgeSub">{t('about.recognitionSub')}</span>
                </div>
              </div>
            </div>

            <div className="aboutRight" data-aos="fade-up" data-aos-delay="100">
              {cards.map((card, idx) => (
                <ValueCard key={idx}>
                  <div className="cardTop">
                    <span className="cardIcon">{VALUE_CARD_ICONS[idx] ?? '◆'}</span>
                    <span className="cardTitle">{card.title}</span>
                  </div>
                  <p className="cardDesc">{card.body}</p>
                </ValueCard>
              ))}
            </div>
          </div>
        </AboutSection>

        <SectionWrapper id="experiencia" tone="base">
          <div data-aos="fade-up">
            <Experiencias />
          </div>
        </SectionWrapper>

        <SectionWrapper id="capacidades" tone="alt">
          <div data-aos="fade-up">
            <Capacidades />
          </div>
        </SectionWrapper>

        <EducationContactSection id="contato">
          <div className="eduContactInner">
            <div data-aos="fade-up">
              <span className="sectionLabel">{t('education.label')}</span>
              <h2>{t('education.h2Line1')}<br />{t('education.h2Line2')}</h2>

              <ul className="eduList">
                {educationItems.map((item, idx) => (
                  <li key={idx}>
                    <span className="eduDegree">{item.degree}</span>
                    <span className="eduInst">{item.institution}</span>
                    <span className="eduYear">{item.period}</span>
                  </li>
                ))}
              </ul>

              <div className="certsBlock">
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 36, marginBottom: 20 }}>
                  <span className="sectionLabel" style={{ display: 'block', marginBottom: 0 }}>
                    {t('education.certificatesLabel')}
                  </span>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.68rem',
                    color: '#5C5C70',
                    letterSpacing: '0.05em',
                  }}>
                    {t('education.certificatesSub')}
                  </span>
                </div>
                <Certificados />
              </div>
            </div>

            <div className="contactBlock" data-aos="fade-up" data-aos-delay="100">
              <span className="sectionLabel">{t('contact.label')}</span>
              <h2>{t('contact.h2Line1')}<br />{t('contact.h2Line2')}</h2>

              <div className="contactLinks">
                <a
                  href="https://www.linkedin.com/in/caue-enrico/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactItem"
                >
                  <span className="itemIcon">
                    <LinkedinLogo size={18} color="#E8A838" />
                  </span>
                  <div className="itemText">
                    <span className="itemLabel">{t('contact.linkedinLabel')}</span>
                    <span className="itemValue">linkedin.com/in/caue-enrico</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/5513991648306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactItem"
                >
                  <span className="itemIcon">
                    <WhatsappLogo size={18} color="#E8A838" />
                  </span>
                  <div className="itemText">
                    <span className="itemLabel">{t('contact.whatsappLabel')}</span>
                    <span className="itemValue">(13) 99164-8306</span>
                  </div>
                </a>

                <a
                  href="mailto:caueenrico@gmail.com"
                  className="contactItem"
                >
                  <span className="itemIcon">
                    <EnvelopeSimple size={18} color="#E8A838" />
                  </span>
                  <div className="itemText">
                    <span className="itemLabel">{t('contact.emailLabel')}</span>
                    <span className="itemValue">caueenrico@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://github.com/caueenrico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactItem"
                >
                  <span className="itemIcon">
                    <GithubLogo size={18} color="#E8A838" />
                  </span>
                  <div className="itemText">
                    <span className="itemLabel">{t('contact.githubLabel')}</span>
                    <span className="itemValue">github.com/caueenrico</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </EducationContactSection>

        <Footer />
      </PageWrapper>
    </>
  );
}
