# Portfolio Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the portfolio from a confused "Arquiteto E desenvolvedor" positioning into a bilingual (PT/EN) "Hands-on Solutions Architect" site, with content rewrites, in-house i18n, anti-FOUC, and SEO (hreflang, JSON-LD, sitemap).

**Architecture:** All translatable copy lives in `src/i18n/locales/{pt,en}.json`. A React Context (`LanguageContext`) holds the current language and exposes `useTranslation()`. The query string `?lang=pt|en` is canonical for SEO; selection persists in `localStorage`. An inline script in `_document.tsx` sets `<html lang>` and `data-lang` before React hydrates to eliminate language flash. SEO meta + hreflang + Person JSON-LD are injected by a dedicated `<SEO />` component reading from translations. Visual layer (Tesseract grid, particles, styles) is untouched.

**Tech Stack:** Next.js 13.3 (Pages Router, SSG), React 18, TypeScript 5, Stitches CSS, Phosphor icons, AOS. Adds `next-sitemap` (runtime dep).

**Reference spec:** `docs/superpowers/specs/2026-05-23-portfolio-rewrite-design.md` — every content string and structural decision in this plan traces back to that document.

**Validation model:** This project has no automated test suite and the spec explicitly excludes adding one. Each task replaces "write failing test / run / implement / run" with "implement / manual smoke test / commit". Smoke tests are concrete commands the engineer runs to confirm the change works before committing.

---

## File Structure (created or modified)

**New files**

| Path | Responsibility |
|------|----------------|
| `src/i18n/locales/pt.json` | All Portuguese strings, nested by section |
| `src/i18n/locales/en.json` | All English strings, nested by section |
| `src/i18n/detectLanguage.ts` | Pure helper that resolves the initial language (query → localStorage → browser → default `en`) |
| `src/i18n/LanguageContext.tsx` | Context Provider, holds `lang`, exposes `setLang`, persists to localStorage, syncs URL query |
| `src/i18n/useTranslation.ts` | Hook returning `{ t, lang, setLang }`; `t(path)` does dot-path lookup against current locale |
| `src/components/header/LanguageToggle.tsx` | `PT | EN` button pair used by header (desktop) and menuMobile (mobile drawer) |
| `src/components/seo/SEO.tsx` | Injects per-language meta tags, OG, Twitter cards, hreflang, and Person JSON-LD into `<Head>` |
| `public/robots.txt` | Allows all crawlers, points at sitemap |
| `next-sitemap.config.js` | Config for `next-sitemap` to emit `sitemap.xml` listing the three canonical URLs |

**Modified files**

| Path | Change |
|------|--------|
| `src/pages/_app.tsx` | Wrap component tree with `<LanguageProvider>` |
| `src/pages/_document.tsx` | Add anti-FOUC inline script that sets `<html lang>` + `data-lang` before hydration; remove hardcoded `<meta>` tags now owned by `<SEO />` |
| `src/pages/index.tsx` | Replace hardcoded strings with `t()` calls; mount `<SEO />`; tech badge list reordered |
| `src/components/header/index.tsx` | Translated nav labels via `t()`; render `<LanguageToggle />` |
| `src/components/menuMobile/index.tsx` | Translated nav labels via `t()`; render `<LanguageToggle />` inside drawer |
| `src/components/experiencia/index.tsx` | Translated timeline pulled from JSON; bullets, descriptions, photo captions, company lines |
| `src/components/capacidades/index.tsx` | Restructured from 6 to 5 groups; data sourced from JSON |
| `src/components/certificados/index.tsx` | Section labels translated; cert categories left as-is (deferred per spec §3.5) |
| `src/components/footer/footer.tsx` | Translated tagline; copyright line |
| `package.json` | Add `next-sitemap`; add `postbuild` script |
| `next.config.js` | No changes anticipated; verified during Task 16 |

**Untouched**

`src/components/arquitetura/*` (stays commented out), `src/components/easterEggs/*`, `src/styles/*`, all assets in `src/assets/` and `public/`.

---

## Task Ordering Rationale

The plan progresses in 4 phases:

1. **i18n foundation** (Tasks 1–5): get the bilingual infrastructure working end-to-end with one demo string before touching real content. Anti-FOUC ships in this phase so subsequent visual checks are not muddled by language flicker.
2. **Toggle & navigation** (Tasks 6–8): user-visible switch wired up. After Phase 2 the user can toggle languages on the live site — only the nav reads from translations so far, the rest is still hardcoded PT.
3. **Content migration** (Tasks 9–13): one component per task, replacing hardcoded strings with `t()` calls and pulling structured content (timeline, skill groups, value cards) from JSON.
4. **SEO** (Tasks 14–16): meta tags, hreflang, JSON-LD, sitemap, robots, build validation, manual checks.

Each task ends with a commit. The site remains in a runnable state after every task (even mid-migration: any component not yet migrated still renders hardcoded PT).

---

## Phase 1 — i18n Foundation

### Task 1: Create JSON locale skeletons with hero strings

**Goal:** Get one section's content (Hero) into both `pt.json` and `en.json` so the infrastructure built in subsequent tasks has something real to read.

**Files:**
- Create: `src/i18n/locales/pt.json`
- Create: `src/i18n/locales/en.json`

- [ ] **Step 1: Create `src/i18n/locales/pt.json` with the full nested skeleton**

Create the file with this exact content:

```json
{
  "meta": {
    "title": "Cauê Enrico — Arquiteto de Soluções | Hands-on em AWS e Integrações",
    "description": "Arquiteto de soluções na Ultracargo. Hands-on em AWS, integrações SAP, .NET, Node.js e pipelines CI/CD. Background entre operação portuária e tecnologia.",
    "ogLocale": "pt_BR",
    "htmlLang": "pt-BR"
  },
  "nav": {
    "about": "Sobre",
    "experience": "Trajetória",
    "skills": "Capacidades",
    "contact": "Contato"
  },
  "hero": {
    "title": "Arquiteto de",
    "titleAccent": "Soluções",
    "location": "Cauê Enrico · Guarujá, SP",
    "bio": "Desenho como sistemas são construídos, conectados e operam em produção: workloads na AWS, integrações entre ERPs e serviços, pipelines CI/CD. Arquiteto com background em desenvolvimento.",
    "ctaLinkedin": "LinkedIn",
    "ctaWhatsapp": "WhatsApp",
    "ctaGithub": "GitHub",
    "portraitAlt": "Cauê Enrico — Arquiteto de Soluções"
  },
  "about": {
    "label": "Sobre",
    "h2Line1": "Arquitetura de",
    "h2Line2": "ponta a ponta.",
    "p1": "Projeto soluções de ponta a ponta. Defino arquitetura, escolho workloads na AWS, modelo integrações entre ERPs e serviços, configuro pipelines CI/CD. Acompanho cada decisão até a produção e respondo pelas escolhas que sustentam escalabilidade, segurança e confiabilidade.",
    "p2": "Trabalho com soluções orientadas a eventos (SQS), aplico padrões como CQRS e Outbox, e mantenho stack diversa: .NET, Node.js, Python, React e Angular. Uso o que melhor resolve o problema.",
    "recognitionTitle": "Reconhecido pela Ultracargo em 2024",
    "recognitionSub": "Projeto de IA para prevenção de fraudes em terminais portuários",
    "cards": [
      {
        "title": "Arquitetura de Soluções",
        "body": "Decido como sistemas são construídos e conectados. Escolho padrões (CQRS, Outbox, event-driven), defino limites entre serviços, e projeto integrações que sobrevivem a picos de carga e falhas isoladas."
      },
      {
        "title": "Cloud & DevOps",
        "body": "Workloads na AWS (EC2, S3, SQS, Cognito), pipelines CI/CD em Azure DevOps, Docker e IaC com Terraform. Cuido do ciclo todo, do desenho da infra ao hotfix em produção."
      },
      {
        "title": "Contexto de Operação",
        "body": "Trago contexto de operação para cada decisão técnica. Priorizo o que sustenta o negócio em vez do que apenas parece sofisticado."
      }
    ]
  },
  "experience": {
    "label": "Trajetória",
    "h2": "Experiência Profissional",
    "desc": "Da operação portuária à arquitetura de software: uma trajetória construída com propósito técnico, liderança e entrega real em sistemas críticos.",
    "items": [
      {
        "period": "Jun 2024 — Atual",
        "badge": "★ Reconhecido em 2024",
        "title": "Analista de Sistemas Pleno",
        "company": "Ultracargo · Matriz",
        "description": "Responsável pela arquitetura das principais soluções da empresa. Liderei o projeto de reconhecimento facial com IA para prevenção de fraudes em terminais portuários, reconhecido internamente pelo impacto direto na segurança das operações.",
        "achievements": [
          "Definição da arquitetura das principais soluções, com escolha de workloads na AWS e padrões para garantir resiliência e consistência (CQRS, Outbox, event-driven)",
          "Modelagem de integrações com SAP via PI/PO e CPI, conectando sistemas legados ao ecossistema corporativo",
          "Pipelines CI/CD em Azure DevOps com build, test e deploy automatizados, observabilidade e hotfix em produção",
          "Decisões de infraestrutura em AWS (EC2, S3, CloudFront, Cognito, SQS) e Azure App Services, com IaC em Terraform",
          "Interlocução direta com áreas de negócio (logística, jurídico, operações) para traduzir requisitos em soluções viáveis"
        ],
        "captions": [
          "Reconhecimento #techparamover · Ultracargo 2024",
          "Entrega da placa de premiação · Ultracargo 2024",
          "Implantação de sistema · Terminal Aratu"
        ]
      },
      {
        "period": "Jun 2023 — Jun 2024",
        "title": "Desenvolvedor Full Stack",
        "company": "Freelancer",
        "description": "Desenvolvimento de aplicações web responsivas e APIs para clientes de diferentes segmentos. Entrega de soluções com autenticação, dashboards analíticos e integrações com APIs externas."
      },
      {
        "period": "Jun 2022 — Jun 2024",
        "title": "Técnico de Controle e Qualidade Operacional",
        "company": "Ultracargo Santos",
        "description": "Controle de operações marítimas no centro operacional da Ultracargo Santos. Comunicação técnica em inglês com tripulações internacionais e desenvolvimento dos primeiros cálculos operacionais automatizados, o que abriu meu caminho para a área de tecnologia."
      },
      {
        "period": "Jan 2016 — Jan 2017",
        "title": "Aspirante a Oficial, Arma de Infantaria",
        "company": "Exército Brasileiro",
        "description": "Aprovado em concurso nacional de alta competitividade. A formação intensiva em estratégia, liderança sob pressão e trabalho em equipe moldou minha atuação técnica e de gestão."
      }
    ]
  },
  "skills": {
    "label": "Capacidades",
    "h2": "Arquitetura & Tecnologia",
    "desc": "Competências organizadas por domínio, do design de sistemas à entrega em produção com qualidade e segurança.",
    "groups": [
      {
        "icon": "⬡",
        "title": "System Design & Integration",
        "items": ["Event-driven Architecture", "CQRS", "Outbox Pattern", "Microsserviços", "Clean Architecture", "SOLID", "APIs REST", "SAP PI/PO", "SAP CPI", "Integração de ERPs e Sistemas Legados"]
      },
      {
        "icon": "△",
        "title": "Cloud & DevOps",
        "items": ["AWS (EC2, S3, CloudFront, Cognito, SQS)", "Azure App Services", "Azure DevOps Pipelines", "Terraform (IaC)", "Docker", "CI/CD", "Observabilidade"]
      },
      {
        "icon": "{ }",
        "title": "Engineering",
        "items": [".NET 8 (C#)", "Node.js", "TypeScript", "Python", "React", "Next.js", "Angular", "React Native", "Tailwind CSS"]
      },
      {
        "icon": "◇",
        "title": "Data",
        "items": ["SQL Server", "PostgreSQL", "SQLite", "Modelagem Relacional", "Migrations", "Otimização de Queries"]
      },
      {
        "icon": "⊕",
        "title": "Business Domain",
        "items": ["Operações Portuárias", "Logística", "Sistemas Críticos", "Alinhamento com Stakeholders", "Inglês Intermediário"]
      }
    ]
  },
  "education": {
    "label": "Formação",
    "h2Line1": "Educação &",
    "h2Line2": "Certificações",
    "items": [
      { "degree": "Análise e Desenvolvimento de Sistemas", "institution": "Universidade Anhembi Morumbi", "period": "2021 — 2023" },
      { "degree": "Academia SAP S/4HANA ABAP", "institution": "Ka Solution", "period": "2024" },
      { "degree": "Especialização Full Stack", "institution": "Rocketseat · Ignite & Explorer", "period": "2022 — 2023" }
    ],
    "certificatesLabel": "Certificados",
    "certificatesSub": "+25 extracurriculares"
  },
  "contact": {
    "label": "Contato",
    "h2Line1": "Vamos construir",
    "h2Line2": "algo juntos?",
    "linkedinLabel": "LinkedIn",
    "whatsappLabel": "WhatsApp",
    "emailLabel": "E-mail",
    "githubLabel": "GitHub"
  },
  "footer": {
    "tagline": "Arquiteto de Soluções · Guarujá, SP",
    "copyright": "© {{year}} Cauê Enrico. Todos os direitos reservados."
  }
}
```

- [ ] **Step 2: Create `src/i18n/locales/en.json` with the matching English content**

Create the file with this exact content:

```json
{
  "meta": {
    "title": "Cauê Enrico — Solutions Architect | Hands-on Cloud & Integration",
    "description": "Solutions Architect at Ultracargo. Hands-on with AWS, SAP integrations, .NET, Node.js, and CI/CD pipelines. Background bridging port operations and software architecture.",
    "ogLocale": "en_US",
    "htmlLang": "en"
  },
  "nav": {
    "about": "About",
    "experience": "Experience",
    "skills": "Skills",
    "contact": "Contact"
  },
  "hero": {
    "title": "Solutions",
    "titleAccent": "Architect",
    "location": "Cauê Enrico · Brazil",
    "bio": "I design how systems are built, connected, and behave in production: AWS workloads, ERP integrations, CI/CD pipelines. Architect with a developer background.",
    "ctaLinkedin": "LinkedIn",
    "ctaWhatsapp": "WhatsApp",
    "ctaGithub": "GitHub",
    "portraitAlt": "Cauê Enrico — Solutions Architect"
  },
  "about": {
    "label": "About",
    "h2Line1": "End-to-end",
    "h2Line2": "architecture.",
    "p1": "I design solutions end-to-end. I define the architecture, choose AWS workloads, model ERP and service integrations, and set up CI/CD pipelines. I follow every decision to production and own the choices that keep systems scalable, secure, and reliable.",
    "p2": "I work with event-driven solutions (SQS), apply patterns like CQRS and Outbox, and keep a diverse stack: .NET, Node.js, Python, React, and Angular. I pick what best fits the problem.",
    "recognitionTitle": "Recognized by Ultracargo in 2024",
    "recognitionSub": "AI project for fraud prevention at port terminals",
    "cards": [
      {
        "title": "Solutions Architecture",
        "body": "I decide how systems are built and connected. I choose patterns (CQRS, Outbox, event-driven), define service boundaries, and design integrations that survive load spikes and isolated failures."
      },
      {
        "title": "Cloud & DevOps",
        "body": "AWS workloads (EC2, S3, SQS, Cognito), CI/CD on Azure DevOps, Docker, and Terraform-based IaC. I own the full cycle, from infrastructure design to production hotfixes."
      },
      {
        "title": "Operational Context",
        "body": "I bring operational context to every technical decision. I prioritize what supports the business over what merely looks sophisticated."
      }
    ]
  },
  "experience": {
    "label": "Experience",
    "h2": "Professional Background",
    "desc": "From port operations to software architecture: a path built with technical purpose, leadership, and real delivery in mission-critical systems.",
    "items": [
      {
        "period": "Jun 2024 — Present",
        "badge": "★ Recognized in 2024",
        "title": "Software Engineer (Solutions Architecture)",
        "company": "Ultracargo · Brazil's largest independent liquid bulk logistics operator",
        "description": "I own the architecture of the company's main software initiatives. I led an AI-based facial recognition project for fraud prevention at port terminals, internally recognized for its direct impact on operational security.",
        "achievements": [
          "Architecture decisions across the company's main solutions, including AWS workload selection and patterns for resilience and consistency (CQRS, Outbox, event-driven)",
          "SAP integration design via PI/PO and CPI, connecting legacy systems to the corporate ecosystem",
          "CI/CD pipelines on Azure DevOps with automated build, test, and deploy, plus observability and production hotfixes",
          "Infrastructure decisions on AWS (EC2, S3, CloudFront, Cognito, SQS) and Azure App Services, with Terraform-based IaC",
          "Direct stakeholder alignment with business units (logistics, legal, operations) to turn requirements into viable solutions"
        ],
        "captions": [
          "Recognition #techparamover · Ultracargo 2024",
          "Award ceremony · Ultracargo 2024",
          "System deployment · Aratu Terminal"
        ]
      },
      {
        "period": "Jun 2023 — Jun 2024",
        "title": "Full Stack Developer",
        "company": "Freelancer",
        "description": "Built responsive web applications and APIs for clients across multiple sectors. Delivered solutions with authentication, analytics dashboards, and third-party API integrations."
      },
      {
        "period": "Jun 2022 — Jun 2024",
        "title": "Operational Control & Quality Technician",
        "company": "Ultracargo Santos · Liquid bulk operations center",
        "description": "Maritime operations control at Ultracargo Santos. Technical communication in English with international vessel crews and development of the first automated operational calculations, which opened my path into the technology field."
      },
      {
        "period": "Jan 2016 — Jan 2017",
        "title": "Officer Candidate, Infantry",
        "company": "Brazilian Army",
        "description": "Selected through a highly competitive national entrance exam. Intensive training in strategy, leadership under pressure, and teamwork shaped both my technical and management approach."
      }
    ]
  },
  "skills": {
    "label": "Skills",
    "h2": "Architecture & Engineering",
    "desc": "Capabilities organized by domain, from system design to production delivery with quality and security.",
    "groups": [
      {
        "icon": "⬡",
        "title": "System Design & Integration",
        "items": ["Event-driven Architecture", "CQRS", "Outbox Pattern", "Microservices", "Clean Architecture", "SOLID", "REST APIs", "SAP PI/PO", "SAP CPI", "ERP & Legacy System Integration"]
      },
      {
        "icon": "△",
        "title": "Cloud & DevOps",
        "items": ["AWS (EC2, S3, CloudFront, Cognito, SQS)", "Azure App Services", "Azure DevOps Pipelines", "Terraform (IaC)", "Docker", "CI/CD", "Observability"]
      },
      {
        "icon": "{ }",
        "title": "Engineering",
        "items": [".NET 8 (C#)", "Node.js", "TypeScript", "Python", "React", "Next.js", "Angular", "React Native", "Tailwind CSS"]
      },
      {
        "icon": "◇",
        "title": "Data",
        "items": ["SQL Server", "PostgreSQL", "SQLite", "Relational Modeling", "Migrations", "Query Optimization"]
      },
      {
        "icon": "⊕",
        "title": "Business Domain",
        "items": ["Port Operations", "Logistics", "Mission-Critical Systems", "Stakeholder Alignment", "Intermediate English"]
      }
    ]
  },
  "education": {
    "label": "Education",
    "h2Line1": "Education &",
    "h2Line2": "Certifications",
    "items": [
      { "degree": "Associate Degree in Systems Analysis and Development", "institution": "Anhembi Morumbi University", "period": "2021 — 2023" },
      { "degree": "SAP S/4HANA ABAP Academy", "institution": "Ka Solution", "period": "2024" },
      { "degree": "Full Stack Specialization", "institution": "Rocketseat · Ignite & Explorer", "period": "2022 — 2023" }
    ],
    "certificatesLabel": "Certificates",
    "certificatesSub": "+25 extracurricular"
  },
  "contact": {
    "label": "Contact",
    "h2Line1": "Let's build",
    "h2Line2": "something together?",
    "linkedinLabel": "LinkedIn",
    "whatsappLabel": "WhatsApp",
    "emailLabel": "Email",
    "githubLabel": "GitHub"
  },
  "footer": {
    "tagline": "Solutions Architect · Brazil",
    "copyright": "© {{year}} Cauê Enrico. All rights reserved."
  }
}
```

- [ ] **Step 3: Smoke test — JSONs parse**

Run:

```
node -e "console.log(JSON.parse(require('fs').readFileSync('src/i18n/locales/pt.json','utf8')).hero.title)"
node -e "console.log(JSON.parse(require('fs').readFileSync('src/i18n/locales/en.json','utf8')).hero.title)"
```

Expected output:

```
Arquiteto de
Solutions
```

If either command errors, the JSON is malformed; fix syntax before committing.

- [ ] **Step 4: Commit**

```
git add src/i18n/locales/pt.json src/i18n/locales/en.json
git commit -m "feat(i18n): add PT and EN locale files with full content"
```

---

### Task 2: Implement `detectLanguage.ts`

**Goal:** Pure helper that runs in both browser and inline-script contexts to resolve which language to load. Has no React dependencies so it can also be stringified into the anti-FOUC inline script in Task 5.

**Files:**
- Create: `src/i18n/detectLanguage.ts`

- [ ] **Step 1: Create `src/i18n/detectLanguage.ts`**

```typescript
export type Lang = 'pt' | 'en';

export const STORAGE_KEY = 'portfolio-lang';
export const QUERY_KEY = 'lang';

export function normalize(input: string | null | undefined): Lang | null {
  if (!input) return null;
  const lower = input.toLowerCase();
  if (lower === 'pt' || lower.startsWith('pt-') || lower.startsWith('pt_')) return 'pt';
  if (lower === 'en' || lower.startsWith('en-') || lower.startsWith('en_')) return 'en';
  return null;
}

export function detectLanguage(opts?: {
  search?: string;
  storage?: Storage | null;
  navigatorLang?: string | null;
}): Lang {
  const search = opts?.search ?? (typeof window !== 'undefined' ? window.location.search : '');
  const storage = opts?.storage ?? (typeof window !== 'undefined' ? window.localStorage : null);
  const navLang = opts?.navigatorLang ?? (typeof navigator !== 'undefined' ? navigator.language : null);

  const queryParam = new URLSearchParams(search).get(QUERY_KEY);
  const fromQuery = normalize(queryParam);
  if (fromQuery) return fromQuery;

  const stored = storage ? storage.getItem(STORAGE_KEY) : null;
  const fromStorage = normalize(stored);
  if (fromStorage) return fromStorage;

  const fromNav = normalize(navLang);
  if (fromNav) return fromNav;

  return 'en';
}
```

- [ ] **Step 2: Smoke test — pure logic**

Run:

```
npx ts-node -e "import { detectLanguage } from './src/i18n/detectLanguage'; console.log(detectLanguage({ search: '?lang=pt', storage: null, navigatorLang: null })); console.log(detectLanguage({ search: '', storage: { getItem: () => 'en', setItem: () => {}, removeItem: () => {}, clear: () => {}, key: () => null, length: 0 }, navigatorLang: 'pt-BR' })); console.log(detectLanguage({ search: '', storage: null, navigatorLang: 'pt-BR' })); console.log(detectLanguage({ search: '', storage: null, navigatorLang: 'fr-FR' }));"
```

Expected output:

```
pt
en
pt
en
```

If `ts-node` is not installed, install it once globally with `npm i -g ts-node` or run a one-off via `npx --yes ts-node`. If the smoke test fails, fix `detectLanguage.ts` before committing.

- [ ] **Step 3: Commit**

```
git add src/i18n/detectLanguage.ts
git commit -m "feat(i18n): add detectLanguage helper with query/storage/navigator precedence"
```

---

### Task 3: Implement `LanguageContext.tsx` and `useTranslation.ts`

**Goal:** Make the resolved language available to the React tree and provide a `t(path)` lookup. Persistence to localStorage and URL sync happen here.

**Files:**
- Create: `src/i18n/LanguageContext.tsx`
- Create: `src/i18n/useTranslation.ts`

- [ ] **Step 1: Create `src/i18n/LanguageContext.tsx`**

```tsx
import { createContext, useCallback, useEffect, useMemo, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import pt from './locales/pt.json';
import en from './locales/en.json';
import { detectLanguage, Lang, STORAGE_KEY, QUERY_KEY } from './detectLanguage';

type Locale = typeof pt;

interface LanguageContextValue {
  lang: Lang;
  setLang: (next: Lang) => void;
  locale: Locale;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const LOCALES: Record<Lang, Locale> = { pt, en: en as Locale };

function readInitialLang(): Lang {
  if (typeof document !== 'undefined') {
    const fromDataset = document.documentElement.dataset.lang;
    if (fromDataset === 'pt' || fromDataset === 'en') return fromDataset;
  }
  return detectLanguage();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [lang, setLangState] = useState<Lang>('en');

  // First client-side render: read what the anti-FOUC script already resolved.
  useEffect(() => {
    setLangState(readInitialLang());
  }, []);

  // React to query string changes (deep-link, back/forward).
  useEffect(() => {
    const q = router.query[QUERY_KEY];
    if (q === 'pt' || q === 'en') {
      setLangState(q);
    }
  }, [router.query]);

  const setLang = useCallback(
    (next: Lang) => {
      setLangState(next);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, next);
        document.documentElement.lang = LOCALES[next].meta.htmlLang;
        document.documentElement.dataset.lang = next;
      }
      router.replace(
        { pathname: router.pathname, query: { ...router.query, [QUERY_KEY]: next } },
        undefined,
        { shallow: true, scroll: false }
      );
    },
    [router]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, locale: LOCALES[lang] }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
```

- [ ] **Step 2: Create `src/i18n/useTranslation.ts`**

```typescript
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function lookup(obj: any, path: string): unknown {
  return path.split('.').reduce<any>((acc, segment) => {
    if (acc == null) return acc;
    return acc[segment];
  }, obj);
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within <LanguageProvider>');
  }
  const { lang, setLang, locale } = ctx;

  function t(path: string): string {
    const value = lookup(locale, path);
    if (typeof value === 'string') return value;
    if (process.env.NODE_ENV !== 'production') {
      // Visible failure in dev, silent in prod.
      console.warn(`[i18n] missing translation for "${path}" in lang="${lang}"`);
    }
    return path;
  }

  function tArray<T = unknown>(path: string): T[] {
    const value = lookup(locale, path);
    return Array.isArray(value) ? (value as T[]) : [];
  }

  function tObject<T = unknown>(path: string): T {
    const value = lookup(locale, path);
    return (value ?? {}) as T;
  }

  return { t, tArray, tObject, lang, setLang };
}
```

- [ ] **Step 3: TypeScript check**

Run:

```
npx tsc --noEmit
```

Expected: no errors. If the JSON imports complain about `resolveJsonModule`, add `"resolveJsonModule": true` to `tsconfig.json` `compilerOptions` and re-run. (Most Next.js 13 setups have this already; verify before adding.)

- [ ] **Step 4: Commit**

```
git add src/i18n/LanguageContext.tsx src/i18n/useTranslation.ts
git commit -m "feat(i18n): add LanguageContext provider and useTranslation hook"
```

---

### Task 4: Wire `<LanguageProvider>` in `_app.tsx`

**Goal:** Make the context available across the page tree.

**Files:**
- Modify: `src/pages/_app.tsx`

- [ ] **Step 1: Replace `src/pages/_app.tsx` content**

Replace the entire file with:

```tsx
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { LanguageProvider } from '@/i18n/LanguageContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
```

- [ ] **Step 2: Smoke test — dev server boots without errors**

Run:

```
npm run dev
```

Open `http://localhost:3000` in the browser. The site should render identically to before (everything is still hardcoded PT — the provider is just wrapping the tree, no consumer yet).

Confirm in the browser DevTools console: no errors. Close the dev server (Ctrl+C).

- [ ] **Step 3: Commit**

```
git add src/pages/_app.tsx
git commit -m "feat(i18n): wrap app tree with LanguageProvider"
```

---

### Task 5: Anti-FOUC script in `_document.tsx` and replace hardcoded meta

**Goal:** Resolve the language and set `<html lang>` + `data-lang` before React hydrates, eliminating language flash for returning visitors. Also remove the hardcoded meta tags so the `<SEO />` component (Task 14) can fully own them.

**Files:**
- Modify: `src/pages/_document.tsx`

- [ ] **Step 1: Replace `src/pages/_document.tsx` content**

Replace the entire file with:

```tsx
import { getCssText } from "@/styles";
import { Html, Head, Main, NextScript } from "next/document";

const ANTI_FOUC_SCRIPT = `
(function () {
  try {
    var STORAGE_KEY = 'portfolio-lang';
    var QUERY_KEY = 'lang';
    function normalize(input) {
      if (!input) return null;
      var lower = String(input).toLowerCase();
      if (lower === 'pt' || lower.indexOf('pt-') === 0 || lower.indexOf('pt_') === 0) return 'pt';
      if (lower === 'en' || lower.indexOf('en-') === 0 || lower.indexOf('en_') === 0) return 'en';
      return null;
    }
    var search = window.location.search;
    var queryParam = new URLSearchParams(search).get(QUERY_KEY);
    var stored = null;
    try { stored = window.localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var lang = normalize(queryParam) || normalize(stored) || normalize(navigator.language) || 'en';
    var root = document.documentElement;
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
    root.dataset.lang = lang;
  } catch (e) {
    document.documentElement.lang = 'en';
    document.documentElement.dataset.lang = 'en';
  }
})();
`.trim();

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#08090E" />

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: ANTI_FOUC_SCRIPT }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

- [ ] **Step 2: Smoke test — anti-FOUC sets attributes**

Run:

```
npm run dev
```

Open `http://localhost:3000/?lang=pt` in the browser. Open DevTools and run in the console:

```
document.documentElement.lang
document.documentElement.dataset.lang
```

Expected:

```
'pt-BR'
'pt'
```

Now visit `http://localhost:3000/?lang=en` and re-check:

```
'en'
'en'
```

Visit `http://localhost:3000/` with no query string. With no localStorage set and an EN browser, expect `'en'/'en'`. With a PT browser, expect `'pt-BR'/'pt'`.

Close the dev server.

- [ ] **Step 3: Commit**

```
git add src/pages/_document.tsx
git commit -m "feat(i18n): add anti-FOUC inline script; remove hardcoded meta tags"
```

---

## Phase 2 — Toggle and Navigation

### Task 6: Create `LanguageToggle` component

**Goal:** Reusable `PT | EN` toggle used by both desktop header and mobile drawer.

**Files:**
- Create: `src/components/header/LanguageToggle.tsx`

- [ ] **Step 1: Create `src/components/header/LanguageToggle.tsx`**

```tsx
import { useTranslation } from '@/i18n/useTranslation';
import type { CSSProperties } from 'react';

interface LanguageToggleProps {
  variant?: 'header' | 'drawer';
}

const baseStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.78rem',
  letterSpacing: '0.08em',
  userSelect: 'none',
};

const buttonStyleBase: CSSProperties = {
  background: 'none',
  border: 'none',
  padding: '2px 4px',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  letterSpacing: 'inherit',
  transition: 'color 160ms ease',
};

export function LanguageToggle({ variant = 'header' }: LanguageToggleProps) {
  const { lang, setLang } = useTranslation();

  const activeColor = '#E8A838';
  const inactiveColor = variant === 'drawer' ? 'rgba(240,240,245,0.55)' : 'rgba(240,240,245,0.45)';

  const ptStyle = { ...buttonStyleBase, color: lang === 'pt' ? activeColor : inactiveColor };
  const enStyle = { ...buttonStyleBase, color: lang === 'en' ? activeColor : inactiveColor };

  return (
    <div style={baseStyle} role="group" aria-label="Language toggle">
      <button
        type="button"
        style={ptStyle}
        aria-pressed={lang === 'pt'}
        onClick={() => setLang('pt')}
      >
        PT
      </button>
      <span style={{ color: 'rgba(240,240,245,0.25)' }}>|</span>
      <button
        type="button"
        style={enStyle}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );
}
```

- [ ] **Step 2: TypeScript check**

Run:

```
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```
git add src/components/header/LanguageToggle.tsx
git commit -m "feat(i18n): add LanguageToggle component"
```

---

### Task 7: Update `Header` to use translations and render the toggle

**Goal:** Header navigation reads from translations; toggle visible on desktop.

**Files:**
- Modify: `src/components/header/index.tsx`

- [ ] **Step 1: Replace `src/components/header/index.tsx` content**

Replace the entire file with:

```tsx
import { useEffect, useState } from "react";
import { ContHeader } from "./styles";
import { List } from "phosphor-react";
import { MenuMobile } from "../menuMobile";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "@/i18n/useTranslation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { t } = useTranslation();

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
            <a href="#sobre">{t('nav.about')}</a>
            <a href="#experiencia">{t('nav.experience')}</a>
            <a href="#capacidades">{t('nav.skills')}</a>
            <a href="#contato">{t('nav.contact')}</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <LanguageToggle variant="header" />
            <button className="menuBtn" onClick={() => setMenuIsVisible(!menuIsVisible)}>
              <List size={22} color="#E8A838" />
            </button>
          </div>
        </div>
      </ContHeader>
    </>
  );
}
```

- [ ] **Step 2: Smoke test — toggle works**

Run:

```
npm run dev
```

Visit `http://localhost:3000/`. Click `PT` and `EN` in the header. Confirm:

1. Nav labels switch between PT (`Sobre / Trajetória / Capacidades / Contato`) and EN (`About / Experience / Skills / Contact`).
2. The URL updates to include `?lang=pt` or `?lang=en` without a page reload.
3. Refreshing the page preserves the chosen language (because localStorage is set).
4. Visiting `http://localhost:3000/?lang=pt` directly loads in Portuguese.

Close the dev server.

- [ ] **Step 3: Commit**

```
git add src/components/header/index.tsx
git commit -m "feat(i18n): translate header nav and mount language toggle"
```

---

### Task 8: Update `MenuMobile` to use translations and render the toggle in drawer

**Goal:** Mobile drawer mirrors header.

**Files:**
- Modify: `src/components/menuMobile/index.tsx`

- [ ] **Step 1: Replace `src/components/menuMobile/index.tsx` content**

Replace the entire file with:

```tsx
import { X } from "phosphor-react";
import { Container } from "./styles";
import { LanguageToggle } from "../header/LanguageToggle";
import { useTranslation } from "@/i18n/useTranslation";

interface MenuMobileProps {
  menuIsVisible: boolean;
  closeMenu: () => void;
}

export function MenuMobile({ menuIsVisible, closeMenu }: MenuMobileProps) {
  const { t } = useTranslation();

  return (
    <Container isOpen={menuIsVisible}>
      <div className="menuHeader">
        <span className="logo">CE.</span>
        <button className="closeBtn" onClick={closeMenu} aria-label="Close menu">
          <X size={18} color="rgba(240,240,245,0.7)" />
        </button>
      </div>

      <nav>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#sobre" onClick={closeMenu}>{t('nav.about')}</a>
        <a href="#experiencia" onClick={closeMenu}>{t('nav.experience')}</a>
        <a href="#capacidades" onClick={closeMenu}>{t('nav.skills')}</a>
        <a href="#contato" onClick={closeMenu}>{t('nav.contact')}</a>
      </nav>

      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(240,240,245,0.08)' }}>
        <LanguageToggle variant="drawer" />
      </div>
    </Container>
  );
}
```

- [ ] **Step 2: Smoke test — drawer toggle**

Run `npm run dev`. Resize the browser to mobile width (or use DevTools device emulator). Open the drawer via the menu button. Click the `PT | EN` toggle inside the drawer. Confirm the page language updates while the drawer is open. Close the dev server.

- [ ] **Step 3: Commit**

```
git add src/components/menuMobile/index.tsx
git commit -m "feat(i18n): translate mobile drawer and include language toggle"
```

---

## Phase 3 — Content Migration

### Task 9: Migrate `src/pages/index.tsx` (Hero, About, Education/Contact)

**Goal:** Replace all hardcoded strings on the home page with `t()` calls. Pull value cards from translations. Reorder hero tech badges.

**Files:**
- Modify: `src/pages/index.tsx`

- [ ] **Step 1: Replace `src/pages/index.tsx` content**

Replace the entire file with:

```tsx
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
```

- [ ] **Step 2: Smoke test — hero/about/education/contact translate**

Run `npm run dev`. Open `http://localhost:3000/`. Toggle PT/EN and confirm:

1. Hero title switches between `Arquiteto de Soluções` and `Solutions Architect`.
2. Hero bio switches.
3. About h2, paragraphs, recognition badge, and the 3 value cards switch.
4. Education list shows correct degree spellings per language.
5. Contact section labels switch.
6. Tech badges in hero remain unchanged (`AWS · Azure DevOps · SAP PI/PO · Terraform · Docker · .NET · Node.js · Python · React`).

Verify in DevTools console: no warnings about missing translations.

Close the dev server.

- [ ] **Step 3: Commit**

```
git add src/pages/index.tsx
git commit -m "feat(i18n): translate hero, about, education, and contact sections"
```

---

### Task 10: Migrate `Experiencias` to translations

**Goal:** Pull the entire timeline (4 items) from translations.

**Files:**
- Modify: `src/components/experiencia/index.tsx`

- [ ] **Step 1: Replace `src/components/experiencia/index.tsx` content**

Replace the entire file with:

```tsx
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

const CURRENT_ROLE_TECH = ['.NET 8 (C#)', 'Angular', 'React', 'Python', 'Node.js', 'Azure DevOps', 'AWS', 'Docker', 'SAP PI/PO'];
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
```

- [ ] **Step 2: Smoke test — timeline renders in both languages**

Run `npm run dev`. Visit `http://localhost:3000/`. Scroll to the timeline. Toggle PT/EN. Confirm:

1. All 4 timeline entries render with the right titles and descriptions per language.
2. First entry shows the badge (`★ Reconhecido em 2024` or `★ Recognized in 2024`), the tech row, and the 3 photo captions in the right language.
3. Second entry shows the freelance tech row only.
4. Third and fourth entries render description only.
5. No console warnings.

Close the dev server.

- [ ] **Step 3: Commit**

```
git add src/components/experiencia/index.tsx
git commit -m "feat(i18n): translate professional experience timeline"
```

---

### Task 11: Migrate and restructure `Capacidades` (5 groups)

**Goal:** Read the 5-group structure from JSON; remove the hardcoded 6-group array.

**Files:**
- Modify: `src/components/capacidades/index.tsx`

- [ ] **Step 1: Replace `src/components/capacidades/index.tsx` content**

Replace the entire file with:

```tsx
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
```

- [ ] **Step 2: Smoke test — 5 groups render, restructured**

Run `npm run dev`. Visit `http://localhost:3000/#capacidades`. Confirm:

1. Section heading: `Arquitetura & Tecnologia` (PT) / `Architecture & Engineering` (EN).
2. Exactly 5 group cards visible. Backend/Frontend/Mobile are no longer separate groups.
3. First group leads with `Event-driven Architecture`, `CQRS`, `Outbox Pattern`.
4. The `Engineering` group lists `.NET 8 (C#)` through `Tailwind CSS`.
5. The `Business Domain` group ends with `Inglês Intermediário` / `Intermediate English`.
6. Toggle changes the section heading, group titles (where they differ), and item names where they differ between languages (e.g. `Microsserviços` ↔ `Microservices`).

Close the dev server.

- [ ] **Step 3: Commit**

```
git add src/components/capacidades/index.tsx
git commit -m "feat(i18n): restructure capabilities into 5 architect-vocabulary groups"
```

---

### Task 12: Translate `Certificados` section labels

**Goal:** The wrapper labels (`Certificados` / `Certificates`, `+25 extracurriculares` / `+25 extracurricular`) come from `index.tsx` (already done in Task 9). The carousel component itself only renders cert data — no user-facing strings on the wrapper change. Inside the carousel, the existing categories stay in English per spec §3.5 (deferred). This task is a no-op on the component itself; we leave it as-is and only confirm.

**Files:**
- No file changes; verification only.

- [ ] **Step 1: Confirm `src/components/certificados/index.tsx` is unchanged from main**

Run:

```
git diff --stat src/components/certificados/index.tsx
```

Expected: no changes (empty output). If there are unexpected changes, investigate before continuing.

- [ ] **Step 2: Smoke test — carousel still renders**

Run `npm run dev`. Scroll to the Education/Certificates section. Confirm the certificates carousel still scrolls and shows the 24 entries. Toggle PT/EN and confirm the wrapper labels above the carousel switch (`Certificados` ↔ `Certificates`, `+25 extracurriculares` ↔ `+25 extracurricular`) but the carousel content itself stays the same.

Close the dev server.

- [ ] **Step 3: No commit needed** (no code changes). Skip.

---

### Task 13: Translate `Footer`

**Goal:** Footer tagline and copyright switch with language.

**Files:**
- Modify: `src/components/footer/footer.tsx`

- [ ] **Step 1: Replace `src/components/footer/footer.tsx` content**

Replace the entire file with:

```tsx
import { Container } from "./styles";
import { useTranslation } from "@/i18n/useTranslation";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const copyright = t('footer.copyright').replace('{{year}}', String(year));

  return (
    <Container>
      <div className="footerLeft">
        <span className="footerLogo">CE.</span>
        <span className="footerTagline">{t('footer.tagline')}</span>
      </div>

      <div className="footerRight">
        <div className="socialLinks">
          <a href="https://www.linkedin.com/in/caue-enrico/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/caueenrico" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:caueenrico@gmail.com">Email</a>
        </div>
        <span className="copyright">{copyright}</span>
      </div>
    </Container>
  );
}
```

- [ ] **Step 2: Smoke test — footer translates**

Run `npm run dev`. Scroll to the footer. Toggle PT/EN. Confirm tagline switches (`Arquiteto de Soluções · Guarujá, SP` ↔ `Solutions Architect · Brazil`) and copyright switches (`© 2026 Cauê Enrico. Todos os direitos reservados.` ↔ `© 2026 Cauê Enrico. All rights reserved.`). Close the dev server.

- [ ] **Step 3: Commit**

```
git add src/components/footer/footer.tsx
git commit -m "feat(i18n): translate footer tagline and copyright"
```

---

## Phase 4 — SEO

### Task 14: Create `SEO` component and mount it in `index.tsx`

**Goal:** Inject per-language `<title>`, `<meta description>`, OpenGraph, Twitter Cards, hreflang, and Person JSON-LD into `<Head>`.

**Files:**
- Create: `src/components/seo/SEO.tsx`
- Modify: `src/pages/index.tsx`

- [ ] **Step 1: Create `src/components/seo/SEO.tsx`**

```tsx
import Head from 'next/head';
import { useTranslation } from '@/i18n/useTranslation';

const SITE_URL = 'https://caueenrico.vercel.app';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cauê Enrico',
  jobTitle: 'Solutions Architect',
  worksFor: { '@type': 'Organization', name: 'Ultracargo' },
  address: { '@type': 'PostalAddress', addressCountry: 'BR' },
  url: SITE_URL,
  sameAs: [
    'https://www.linkedin.com/in/caue-enrico/',
    'https://github.com/caueenrico',
  ],
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Anhembi Morumbi University' },
    { '@type': 'EducationalOrganization', name: 'Ka Solution' },
    { '@type': 'EducationalOrganization', name: 'Rocketseat' },
  ],
};

export function SEO() {
  const { t, lang } = useTranslation();
  const title = t('meta.title');
  const description = t('meta.description');
  const ogLocale = t('meta.ogLocale');
  const canonicalUrl = lang === 'pt' ? `${SITE_URL}/?lang=pt` : `${SITE_URL}/?lang=en`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Cauê Enrico" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="pt-BR" href={`${SITE_URL}/?lang=pt`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}/?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />
    </Head>
  );
}
```

- [ ] **Step 2: Mount `<SEO />` at the top of `src/pages/index.tsx`**

Open `src/pages/index.tsx`. Add the import next to the others near the top:

```tsx
import { SEO } from "../components/seo/SEO";
```

Inside the `Home` component's return, add `<SEO />` as the very first child inside the top-level fragment (before the Tesseract grid div):

```tsx
  return (
    <>
      <SEO />

      <div id="tesseract-grid" aria-hidden="true">
```

- [ ] **Step 3: Add a placeholder OG image**

Run:

```
copy "src\assets\Retrato profissional com toque futurista.png" "public\og-image.png"
```

(This duplicates the existing portrait as the initial OG image. A dedicated 1200x630 social card is a follow-up nice-to-have per spec §8.)

- [ ] **Step 4: Smoke test — meta tags present and switch by language**

Run `npm run dev`. Visit `http://localhost:3000/?lang=pt`. Open DevTools → Elements → expand `<head>`. Confirm:

1. `<title>` contains `Arquiteto de Soluções`.
2. `<meta name="description">` is the Portuguese description.
3. `<meta property="og:locale" content="pt_BR">` is present.
4. Three `<link rel="alternate" hreflang="...">` tags are present (`pt-BR`, `en`, `x-default`).
5. A `<script type="application/ld+json">` block is present and contains `"@type": "Person"`.
6. `<link rel="canonical" href="https://caueenrico.vercel.app/?lang=pt">` is present.

Toggle to EN. Re-check that `<title>`, description, `og:locale`, and canonical update accordingly.

Close the dev server.

- [ ] **Step 5: Commit**

```
git add src/components/seo/SEO.tsx src/pages/index.tsx public/og-image.png
git commit -m "feat(seo): add SEO component with meta, OG, hreflang, JSON-LD"
```

---

### Task 15: Install and configure `next-sitemap`; add `robots.txt`

**Goal:** Generate a sitemap listing the three canonical URLs and emit a `robots.txt` allowing all crawlers.

**Files:**
- Modify: `package.json`
- Create: `next-sitemap.config.js`
- Create: `public/robots.txt`

- [ ] **Step 1: Install `next-sitemap`**

Run:

```
npm install next-sitemap
```

Verify it appears under `dependencies` in `package.json`.

- [ ] **Step 2: Add `postbuild` script to `package.json`**

Open `package.json`. Inside `"scripts"`, add `postbuild`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "postbuild": "next-sitemap"
}
```

- [ ] **Step 3: Create `next-sitemap.config.js` at repo root**

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://caueenrico.vercel.app',
  generateRobotsTxt: false,
  outDir: './public',
  additionalPaths: async () => [
    { loc: '/', changefreq: 'monthly', priority: 1.0 },
    { loc: '/?lang=pt', changefreq: 'monthly', priority: 1.0 },
    { loc: '/?lang=en', changefreq: 'monthly', priority: 1.0 },
  ],
};
```

We set `generateRobotsTxt: false` because we are checking in a hand-written `robots.txt` in the next step.

- [ ] **Step 4: Create `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://caueenrico.vercel.app/sitemap.xml
```

- [ ] **Step 5: Smoke test — build emits sitemap**

Run:

```
npm run build
```

After the build completes, check that `public/sitemap.xml` exists (or `public/sitemap-0.xml` plus a `public/sitemap.xml` index) and lists the three URLs. Run:

```
type public\sitemap.xml
```

Confirm the file references `https://caueenrico.vercel.app/`, `/?lang=pt`, and `/?lang=en`. If multiple sitemap files are generated, `sitemap.xml` should be the index.

Also confirm `public/robots.txt` was not overwritten and still references the sitemap URL.

- [ ] **Step 6: Commit**

```
git add package.json package-lock.json next-sitemap.config.js public/robots.txt public/sitemap.xml public/sitemap-0.xml
git commit -m "feat(seo): add sitemap generation and robots.txt"
```

Note: depending on the next-sitemap version output, the generated filenames may vary slightly. Run `git status` before `git add` and stage whatever sitemap-related files appear under `public/`.

---

### Task 16: Final build + manual validation

**Goal:** Confirm the project builds cleanly and validate the SEO / i18n end-to-end before declaring the rewrite complete.

**Files:** none (validation only).

- [ ] **Step 1: Clean build**

Run:

```
npm run build
```

Expected: build completes with no errors. Warnings about image optimization or fonts are acceptable. If TypeScript or lint errors appear, fix them before continuing.

- [ ] **Step 2: Local production preview**

Run:

```
npm run start
```

Open `http://localhost:3000/`. Walk through this checklist:

1. Page loads in English by default (or PT if the browser is PT and no localStorage is set — clear localStorage to test fresh).
2. Toggle to PT in the header. URL updates to `?lang=pt`. Refresh — language is preserved.
3. Visit `http://localhost:3000/?lang=pt` in a private window — loads in PT immediately, no flash.
4. Visit `http://localhost:3000/?lang=en` in a private window — loads in EN immediately, no flash.
5. Resize to mobile width. Open drawer. Toggle PT/EN inside drawer. Confirm it works.
6. Right-click → View Source on the rendered HTML. Confirm:
   - The 3 `hreflang` tags are present.
   - The `<title>` matches the chosen language.
   - The JSON-LD `<script>` is present and parses (paste into https://search.google.com/test/rich-results to validate).
7. Visit `http://localhost:3000/sitemap.xml` and `http://localhost:3000/robots.txt`. Both load and look correct.

Stop the server.

- [ ] **Step 3: Lighthouse audit (manual)**

In Chrome DevTools → Lighthouse → Run audit on `http://localhost:3000/?lang=en` (Performance + SEO + Accessibility, mobile). Confirm SEO score ≥ 90. Common issues to expect and accept: image LCP warnings (not in scope), unused JS (Stitches/AOS — not in scope).

- [ ] **Step 4: Visual diff**

Open the current production site (`https://caueenrico.vercel.app/`) side-by-side with `http://localhost:3000/`. Walk through every section. Confirm that only the **text content** differs. The Tesseract grid, particles, hero portrait, value cards, timeline visuals, skill cards, certificate carousel, and easter eggs render identically.

- [ ] **Step 5: Commit any small fixes; then merge to main**

If Steps 1–4 surfaced minor issues, fix them in dedicated commits before merging. If everything passes, the implementation is complete — the branch can be merged to `main` (or deployed straight to Vercel from the current branch, depending on the user's deployment preference).

No commit is needed in this task itself if validation passed without surfacing fixes.

---

## Self-Review Checklist (already run by author)

**Spec coverage**

| Spec section | Implemented in task(s) |
|--------------|------------------------|
| §2 Positioning | Tasks 1 (locale content reflects it) |
| §3.1 Hero | Tasks 1, 9 |
| §3.2 About + value cards | Tasks 1, 9 |
| §3.3 Experience timeline | Tasks 1, 10 |
| §3.4 Capabilities (6→5 groups) | Tasks 1, 11 |
| §3.5 Education + certificates | Tasks 1, 9, 12 |
| §3.6 Contact | Tasks 1, 9 |
| §3.7 Header + LanguageToggle | Tasks 6, 7, 8 |
| §4.1 Option C (in-house i18n) | Tasks 1–4 |
| §4.2 File structure | Tasks 1–3 |
| §4.3 Resolution order | Task 2 + the inline script in Task 5 |
| §4.4 JSON shape | Task 1 |
| §4.5 Hook contract | Task 3 |
| §4.6 Anti-FOUC | Task 5 |
| §4.7 SSR/SSG behavior | Verified in Task 16 |
| §5.1 URL strategy | Tasks 3, 14 |
| §5.2 hreflang | Task 14 |
| §5.3 Per-language meta | Tasks 1, 14 |
| §5.4 OG + Twitter | Task 14 |
| §5.5 JSON-LD | Task 14 |
| §5.6 sitemap + robots | Task 15 |
| §5.7 `<html lang>` dynamic | Task 5 (inline script sets it) |
| §6 Files affected | Whole plan |
| §7 Validation | Task 16 |

**Type consistency**

- `Lang = 'pt' | 'en'`: defined in Task 2, consumed unchanged in Tasks 3, 6.
- `useTranslation()` returns `{ t, tArray, tObject, lang, setLang }`: defined in Task 3, every consumer (Tasks 6, 7, 8, 9, 10, 11, 13, 14) uses only the methods declared.
- `t(path: string): string`, `tArray<T>(path): T[]`: signature stable across all tasks.
- JSON shape: defined in Task 1, all later tasks address fields via the same dot-paths (`hero.title`, `about.cards`, `experience.items`, `skills.groups`, etc.).

**Placeholder scan**

No `TBD`, `TODO`, `add error handling`, or "similar to Task N" references in the plan. Every code block contains the actual content the engineer will paste.
