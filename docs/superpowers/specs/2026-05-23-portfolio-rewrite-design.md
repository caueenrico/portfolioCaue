# Portfolio Rewrite — Design Spec

**Date:** 2026-05-23
**Owner:** Cauê Enrico
**Status:** Approved (pending user review of this spec)
**Brainstorm session:** 2026-05-23

---

## 1. Context and Goal

The current portfolio (https://caueenrico.vercel.app) advertises Cauê as "Arquiteto de Software" in the hero but the rest of the page reads as a full-stack developer profile with architecture leanings. Copy repeats "arquitetura E desenvolvimento" across multiple sections, which signals to the reader that the author is unsure of how to position himself. The user wants to fix this and also open the portfolio to international audiences.

### Goals

1. Establish a single, coherent positioning: **Hands-on Solutions Architect** (architect with engineering roots, not "PowerPoint architect").
2. Rewrite all user-facing copy in both Portuguese and English (no literal translation: English uses global-market vocabulary).
3. Implement a PT/EN toggle that persists across sessions and is discoverable by search engines.
4. Make the portfolio rank for searches by name (recruiter doing reference check) and within reason for technical role searches.

### Non-Goals (out of scope)

- Visual redesign (Tesseract grid, particles, color palette, animations all remain).
- Re-enabling the currently-hidden "Arquitetura em Ação" section.
- Rebuilding the certificates carousel component (content may be revised, component stays).
- Custom domain (stays on `caueenrico.vercel.app` for now).
- Adding a blog or any new section.

---

## 2. Positioning Decision

After evaluating three positioning options during brainstorming:

- **A — "Hands-on Solutions Architect"** (selected)
- B — "Software Engineer, Solutions-focused"
- C — "Solutions Architect" with no qualifier

Selected **A** because:

- Reflects the user's day-to-day reality (designs architecture + still ships code, IaC, hotfixes).
- Translates well to both Brazilian and international markets.
- The "hands-on" qualifier protects against the "architect who only draws diagrams" stereotype and compensates for the absence of an official AWS/Azure architect certification.
- Leaves room to evolve the title naturally as certifications are added.

### Title

- **PT:** Arquiteto de Soluções
- **EN:** Solutions Architect

The "hands-on" theme is carried by the hero bio's closing line ("Arquiteto com background em desenvolvimento" / "Architect with a developer background"), not by a subtitle tagline.

---

## 3. Content Rewrite

All content below is final and approved. Implementation should match these strings exactly (with PT/EN going into the i18n JSON files).

### 3.1 Hero

**Title**
- PT: `Arquiteto de Soluções`
- EN: `Solutions Architect`

**Subtitle (location line)**
- PT: `Cauê Enrico · Guarujá, SP`
- EN: `Cauê Enrico · Brazil`

**Bio**
- PT:
  > Desenho como sistemas são construídos, conectados e operam em produção: workloads na AWS, integrações entre ERPs e serviços, pipelines CI/CD. Arquiteto com background em desenvolvimento.
- EN:
  > I design how systems are built, connected, and behave in production: AWS workloads, ERP integrations, CI/CD pipelines. Architect with a developer background.

**Tech badges (same for both languages, reordered to put architecture/cloud first)**

```
AWS · Azure DevOps · SAP PI/PO · Terraform · Docker · .NET · Node.js · Python · React
```

*Note: Angular is intentionally absent from the hero (redundant with React for hero positioning purposes) but remains in the current-role tech row and About bio because that's an accurate representation of the day-to-day stack.*

**CTAs (labels stay; English copies the same words because they are brand names)**: LinkedIn · WhatsApp · GitHub.

### 3.2 About

**H2**
- PT: `Arquitetura de ponta a ponta.`
- EN: `End-to-end architecture.`

**Bio (2 paragraphs, no personal history — history lives in the timeline)**
- PT:
  > Projeto soluções de ponta a ponta. Defino arquitetura, escolho workloads na AWS, modelo integrações entre ERPs e serviços, configuro pipelines CI/CD. Acompanho cada decisão até a produção e respondo pelas escolhas que sustentam escalabilidade, segurança e confiabilidade.
  >
  > Trabalho com soluções orientadas a eventos (SQS), aplico padrões como CQRS e Outbox, e mantenho stack diversa: .NET, Node.js, Python, React e Angular. Uso o que melhor resolve o problema.
- EN:
  > I design solutions end-to-end. I define the architecture, choose AWS workloads, model ERP and service integrations, and set up CI/CD pipelines. I follow every decision to production and own the choices that keep systems scalable, secure, and reliable.
  >
  > I work with event-driven solutions (SQS), apply patterns like CQRS and Outbox, and keep a diverse stack: .NET, Node.js, Python, React, and Angular. I pick what best fits the problem.

**Recognition badge**
- PT: `Reconhecido pela Ultracargo em 2024 · Projeto de IA para prevenção de fraudes em terminais portuários`
- EN: `Recognized by Ultracargo in 2024 · AI project for fraud prevention at port terminals`

**Value cards (3 cards)**

| Icon | Title PT | Title EN | Body PT | Body EN |
|------|----------|----------|---------|---------|
| ⬡ | Arquitetura de Soluções | Solutions Architecture | Decido como sistemas são construídos e conectados. Escolho padrões (CQRS, Outbox, event-driven), defino limites entre serviços, e projeto integrações que sobrevivem a picos de carga e falhas isoladas. | I decide how systems are built and connected. I choose patterns (CQRS, Outbox, event-driven), define service boundaries, and design integrations that survive load spikes and isolated failures. |
| △ | Cloud & DevOps | Cloud & DevOps | Workloads na AWS (EC2, S3, SQS, Cognito), pipelines CI/CD em Azure DevOps, Docker e IaC com Terraform. Cuido do ciclo todo, do desenho da infra ao hotfix em produção. | AWS workloads (EC2, S3, SQS, Cognito), CI/CD on Azure DevOps, Docker, and Terraform-based IaC. I own the full cycle, from infrastructure design to production hotfixes. |
| ⊕ | Contexto de Operação | Operational Context | Trago contexto de operação para cada decisão técnica. Priorizo o que sustenta o negócio em vez do que apenas parece sofisticado. | I bring operational context to every technical decision. I prioritize what supports the business over what merely looks sophisticated. |

### 3.3 Experience (Timeline)

#### Item 1 — Current role (Jun 2024 — present)

**Job title**
- PT: `Analista de Sistemas Pleno` (keep the formal Brazilian title)
- EN: `Software Engineer (Solutions Architecture)` (market-recognizable title for global audiences)

**Company line**
- PT: `Ultracargo · Matriz`
- EN: `Ultracargo · Brazil's largest independent liquid bulk logistics operator`

**Period (both languages):** `Jun 2024 — Present`

**Featured badge**
- PT: `★ Reconhecido em 2024`
- EN: `★ Recognized in 2024`

**Description**
- PT:
  > Responsável pela arquitetura das principais soluções da empresa. Liderei o projeto de reconhecimento facial com IA para prevenção de fraudes em terminais portuários, reconhecido internamente pelo impacto direto na segurança das operações.
- EN:
  > I own the architecture of the company's main software initiatives. I led an AI-based facial recognition project for fraud prevention at port terminals, internally recognized for its direct impact on operational security.

**Achievement bullets**
- PT:
  - Definição da arquitetura das principais soluções, com escolha de workloads na AWS e padrões para garantir resiliência e consistência (CQRS, Outbox, event-driven)
  - Modelagem de integrações com SAP via PI/PO e CPI, conectando sistemas legados ao ecossistema corporativo
  - Pipelines CI/CD em Azure DevOps com build, test e deploy automatizados, observabilidade e hotfix em produção
  - Decisões de infraestrutura em AWS (EC2, S3, CloudFront, Cognito, SQS) e Azure App Services, com IaC em Terraform
  - Interlocução direta com áreas de negócio (logística, jurídico, operações) para traduzir requisitos em soluções viáveis
- EN:
  - Architecture decisions across the company's main solutions, including AWS workload selection and patterns for resilience and consistency (CQRS, Outbox, event-driven)
  - SAP integration design via PI/PO and CPI, connecting legacy systems to the corporate ecosystem
  - CI/CD pipelines on Azure DevOps with automated build, test, and deploy, plus observability and production hotfixes
  - Infrastructure decisions on AWS (EC2, S3, CloudFront, Cognito, SQS) and Azure App Services, with Terraform-based IaC
  - Direct stakeholder alignment with business units (logistics, legal, operations) to turn requirements into viable solutions

**Tech row (both languages, reordered to lead with cloud/integration)**

```
AWS · Azure DevOps · SAP PI/PO · Terraform · Docker · .NET · Node.js · Python · React · Angular
```

**Photos (3 existing images, captions translated)**

| Image | Caption PT | Caption EN |
|-------|-----------|-----------|
| `reconhecimento_2024.jpeg` | Reconhecimento #techparamover · Ultracargo 2024 | Recognition #techparamover · Ultracargo 2024 |
| `reconhecimento_2024_2.jpeg` | Entrega da placa de premiação · Ultracargo 2024 | Award ceremony · Ultracargo 2024 |
| `implantando_sistema_aratu.jpeg` | Implantação de sistema · Terminal Aratu | System deployment · Aratu Terminal |

#### Item 2 — Freelancer (Jun 2023 — Jun 2024)

**Job title**
- PT: `Desenvolvedor Full Stack`
- EN: `Full Stack Developer`

**Company:** `Freelancer` (both languages)

**Description**
- PT: *Desenvolvimento de aplicações web responsivas e APIs para clientes de diferentes segmentos. Entrega de soluções com autenticação, dashboards analíticos e integrações com APIs externas.*
- EN: *Built responsive web applications and APIs for clients across multiple sectors. Delivered solutions with authentication, analytics dashboards, and third-party API integrations.*

**Tech row:** `React.js · Next.js · Node.js · TypeScript · PostgreSQL`

#### Item 3 — Ultracargo Santos (Jun 2022 — Jun 2024)

**Job title**
- PT: `Técnico de Controle e Qualidade Operacional`
- EN: `Operational Control & Quality Technician`

**Company line**
- PT: `Ultracargo Santos`
- EN: `Ultracargo Santos · Liquid bulk operations center`

**Description (rewritten to bridge into the tech transition)**
- PT:
  > Controle de operações marítimas no centro operacional da Ultracargo Santos. Comunicação técnica em inglês com tripulações internacionais e desenvolvimento dos primeiros cálculos operacionais automatizados, o que abriu meu caminho para a área de tecnologia.
- EN:
  > Maritime operations control at Ultracargo Santos. Technical communication in English with international vessel crews and development of the first automated operational calculations, which opened my path into the technology field.

#### Item 4 — Brazilian Army (Jan 2016 — Jan 2017)

**Job title**
- PT: `Aspirante a Oficial, Arma de Infantaria`
- EN: `Officer Candidate, Infantry`

**Company:** `Exército Brasileiro` / `Brazilian Army`

**Description**
- PT: *Aprovado em concurso nacional de alta competitividade. A formação intensiva em estratégia, liderança sob pressão e trabalho em equipe moldou minha atuação técnica e de gestão.*
- EN: *Selected through a highly competitive national entrance exam. Intensive training in strategy, leadership under pressure, and teamwork shaped both my technical and management approach.*

#### Section header

- PT: label `Trajetória`, h2 `Experiência Profissional`, desc `Da operação portuária à arquitetura de software: uma trajetória construída com propósito técnico, liderança e entrega real em sistemas críticos.`
- EN: label `Experience`, h2 `Professional Background`, desc `From port operations to software architecture: a path built with technical purpose, leadership, and real delivery in mission-critical systems.`

### 3.4 Capabilities (Skills)

Restructure from 6 dev-vocabulary groups to 5 architect-vocabulary groups. Backend, Frontend, and Mobile are consolidated into a single "Engineering" group because an architect chooses tools per problem rather than identifying with a layer.

**Section header**
- PT: label `Capacidades`, h2 `Arquitetura & Tecnologia`, desc `Competências organizadas por domínio, do design de sistemas à entrega em produção com qualidade e segurança.`
- EN: label `Skills`, h2 `Architecture & Engineering`, desc `Capabilities organized by domain, from system design to production delivery with quality and security.`

**Groups**

| Icon | Title PT | Title EN | Items (same for both languages with PT/EN spellings noted) |
|------|----------|----------|------|
| ⬡ | System Design & Integration | System Design & Integration | Event-driven Architecture, CQRS, Outbox Pattern, Microsserviços/Microservices, Clean Architecture, SOLID, APIs REST / REST APIs, SAP PI/PO, SAP CPI, Integração de ERPs e Sistemas Legados / ERP & Legacy System Integration |
| △ | Cloud & DevOps | Cloud & DevOps | AWS (EC2, S3, CloudFront, Cognito, SQS), Azure App Services, Azure DevOps Pipelines, Terraform (IaC), Docker, CI/CD, Observabilidade/Observability |
| { } | Engineering | Engineering | .NET 8 (C#), Node.js, TypeScript, Python, React, Next.js, Angular, React Native, Tailwind CSS |
| ◇ | Data | Data | SQL Server, PostgreSQL, SQLite, Modelagem Relacional / Relational Modeling, Migrations, Otimização de Queries / Query Optimization |
| ⊕ | Business Domain | Business Domain | Operações Portuárias / Port Operations, Logística / Logistics, Sistemas Críticos / Mission-Critical Systems, Alinhamento com Stakeholders / Stakeholder Alignment, Inglês Intermediário / Intermediate English |

Removed from current list: `shadcn/ui` (too specific, noise in an architect portfolio).

### 3.5 Education

Three existing entries, content unchanged in PT, translated for EN.

**Section header**
- PT: label `Formação`, h2 `Educação &\nCertificações`
- EN: label `Education`, h2 `Education &\nCertifications`

**Items**

| Degree PT | Degree EN | Institution | Period |
|-----------|-----------|-------------|--------|
| Análise e Desenvolvimento de Sistemas | Associate Degree in Systems Analysis and Development | Universidade Anhembi Morumbi / Anhembi Morumbi University | 2021 — 2023 |
| Academia SAP S/4HANA ABAP | SAP S/4HANA ABAP Academy | Ka Solution | 2024 |
| Especialização Full Stack | Full Stack Specialization | Rocketseat · Ignite & Explorer | 2022 — 2023 |

**Certificates label**
- PT: `Certificados` with subtitle `+25 extracurriculares`
- EN: `Certificates` with subtitle `+25 extracurricular`

The certificates carousel data (24 items) stays as-is. Categories already in English (`DevOps`, `Back-end`, `Front-end`, `JavaScript`, `Performance`, `Fundamentos`, `Full Stack`) are not internationalized for now; this can be revised in a follow-up.

### 3.6 Contact

**Section header**
- PT: label `Contato`, h2 `Vamos construir\nalgo juntos?`
- EN: label `Contact`, h2 `Let's build\nsomething together?`

**Item labels** (values like phone, email, handles do not change)

| PT | EN |
|----|----|
| LinkedIn | LinkedIn |
| WhatsApp | WhatsApp |
| E-mail | Email |
| GitHub | GitHub |

### 3.7 Header and Navigation

**Logo:** `CE.` (unchanged, both languages)

**Navigation items**

| PT | EN |
|----|----|
| Sobre | About |
| Trajetória | Experience |
| Capacidades | Skills |
| Contato | Contact |

**Language toggle**

Visual: textual `PT | EN`, the active language highlighted in the existing gold accent color, the inactive one in muted gray. Placement: after the last nav item, before the mobile menu button. On mobile, lives inside the drawer menu.

Behavior:
- Click on the inactive language switches the app language.
- The new language is reflected immediately in all rendered strings.
- The URL is updated via `router.replace({ query: { lang } })` so the chosen language is shareable and indexable.
- The choice is persisted in `localStorage` under the key `portfolio-lang`.

---

## 4. Technical Architecture

### 4.1 i18n implementation (Option C — in-house Context + JSON)

Rejected alternatives during brainstorming:
- **next-i18next:** correct standard for Next.js but excessive setup for a single-page site with ~300 strings.
- **react-i18next:** lighter than next-i18next but still adds a dependency and requires its own SSR wiring.

**Selected: in-house Context + JSON.** Zero new dependencies, full control over hydration, ~80 lines of code total.

### 4.2 File structure (to create)

```
src/i18n/
├── locales/
│   ├── pt.json
│   └── en.json
├── LanguageContext.tsx       # Provider + persistence
├── useTranslation.ts         # consumption hook
└── detectLanguage.ts         # initial language detection logic
```

### 4.3 Language resolution order (on first render)

1. `?lang=` query parameter (if `pt` or `en`)
2. `localStorage.getItem('portfolio-lang')` (if `pt` or `en`)
3. `navigator.language` (if starts with `pt`, use `pt`; otherwise `en`)
4. Default: `en`

### 4.4 JSON shape (nested by section)

```json
{
  "nav": { "about": "...", "experience": "...", "skills": "...", "contact": "..." },
  "hero": {
    "title": "...",
    "location": "...",
    "bio": "...",
    "ctaLinkedin": "...",
    "ctaWhatsapp": "...",
    "ctaGithub": "..."
  },
  "about": {
    "label": "...",
    "h2": "...",
    "p1": "...",
    "p2": "...",
    "recognition": "...",
    "cards": [
      { "title": "...", "body": "..." },
      { "title": "...", "body": "..." },
      { "title": "...", "body": "..." }
    ]
  },
  "experience": {
    "label": "...",
    "h2": "...",
    "desc": "...",
    "items": [ ... ]
  },
  "skills": {
    "label": "...",
    "h2": "...",
    "desc": "...",
    "groups": [ ... ]
  },
  "education": { ... },
  "certificates": { ... },
  "contact": { ... },
  "footer": { ... }
}
```

Translation lookup happens by dot-path string: `t('hero.title')`, `t('about.cards.0.title')`.

### 4.5 Hook contract

```ts
const { t, lang, setLang } = useTranslation();
// t(key: string): string                   — returns the resolved translation
// lang: 'pt' | 'en'                        — current language
// setLang: (next: 'pt' | 'en') => void     — switches language, updates URL + localStorage
```

If a key is missing, `t` returns the key itself (visible failure) and logs a warning in development.

### 4.6 Flash mitigation (anti-FOUC)

Add an inline script in `_document.tsx` that runs before React hydrates. It:

1. Reads `?lang=` from the URL, falling back to `localStorage`, falling back to `navigator.language`.
2. Sets `document.documentElement.lang` to the resolved language (`pt-BR` or `en`).
3. Sets a `data-lang` attribute on `<html>` that the React tree reads on first render to start with the correct language.

This prevents the first paint from showing English copy and then snapping to Portuguese (or vice versa) for users whose preferred language differs from the SSG default.

`LanguageContext`'s initial state reads `document.documentElement.dataset.lang` (set by the inline script) instead of running its own detection again. The detection logic lives once in the inline script template and is duplicated in `detectLanguage.ts` for the rare path where the script is unavailable (e.g., disabled JavaScript — in which case the static EN copy is what the user sees).

### 4.7 SSR/SSG behavior

The project uses Next.js Pages Router with SSG (single page, no `getServerSideProps`). The pre-rendered HTML always contains English copy (the default). The inline anti-FOUC script and the React Context together ensure that the visible language matches the user's choice from the very first paint when they have a preference stored.

---

## 5. SEO

### 5.1 URL strategy

The query parameter `?lang=pt|en` is the canonical signal for which language is being served. Three indexable URLs:

- `https://caueenrico.vercel.app/` → default (English)
- `https://caueenrico.vercel.app/?lang=pt` → Portuguese
- `https://caueenrico.vercel.app/?lang=en` → English (explicit)

### 5.2 hreflang tags (injected in `<Head>`)

```html
<link rel="alternate" hreflang="pt-BR" href="https://caueenrico.vercel.app/?lang=pt" />
<link rel="alternate" hreflang="en" href="https://caueenrico.vercel.app/?lang=en" />
<link rel="alternate" hreflang="x-default" href="https://caueenrico.vercel.app/" />
```

### 5.3 Meta tags by language

**Portuguese**
- Title: `Cauê Enrico — Arquiteto de Soluções | Hands-on em AWS e Integrações`
- Description: `Arquiteto de soluções na Ultracargo. Hands-on em AWS, integrações SAP, .NET, Node.js e pipelines CI/CD. Background entre operação portuária e tecnologia.`

**English**
- Title: `Cauê Enrico — Solutions Architect | Hands-on Cloud & Integration`
- Description: `Solutions Architect at Ultracargo. Hands-on with AWS, SAP integrations, .NET, Node.js, and CI/CD pipelines. Background bridging port operations and software architecture.`

### 5.4 Open Graph + Twitter Cards

For each language:
- `og:title`, `og:description`, `og:url` mirror the meta tags above
- `og:locale`: `pt_BR` or `en_US`
- `og:image`: 1200x630 social card (initial implementation reuses the existing portrait; a dedicated social card with name/title overlay is a follow-up nice-to-have)
- `twitter:card`: `summary_large_image`

### 5.5 Structured Data (JSON-LD)

A single `schema.org/Person` block injected in `<Head>` (same data regardless of language, since structured data is language-independent for a Person entity):

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Cauê Enrico",
  "jobTitle": "Solutions Architect",
  "worksFor": { "@type": "Organization", "name": "Ultracargo" },
  "address": { "@type": "PostalAddress", "addressCountry": "BR" },
  "url": "https://caueenrico.vercel.app",
  "sameAs": [
    "https://www.linkedin.com/in/caue-enrico/",
    "https://github.com/caueenrico"
  ],
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "Anhembi Morumbi University" },
    { "@type": "EducationalOrganization", "name": "Ka Solution" },
    { "@type": "EducationalOrganization", "name": "Rocketseat" }
  ]
}
```

This is the primary driver for Cauê's name appearing in Google with rich data when recruiters do reference checks.

### 5.6 sitemap.xml and robots.txt

Use `next-sitemap` (one runtime dep, runs at build time). Generates a sitemap listing the three canonical URLs and a basic `robots.txt` allowing all bots and pointing to the sitemap.

### 5.7 `<html lang>` attribute

Already going to be set dynamically by the anti-FOUC script (`pt-BR` or `en`). Reinforces language signals for crawlers.

---

## 6. Files Affected

### New files

- `src/i18n/locales/pt.json`
- `src/i18n/locales/en.json`
- `src/i18n/LanguageContext.tsx`
- `src/i18n/useTranslation.ts`
- `src/i18n/detectLanguage.ts`
- `src/components/seo/SEO.tsx` — component that injects meta, OG, hreflang, JSON-LD into `<Head>`
- `src/components/header/LanguageToggle.tsx` — subcomponent for the PT/EN toggle
- `public/robots.txt`
- `next-sitemap.config.js` — sitemap config

### Modified files (strings replaced with `t()` calls, no visual changes)

- `src/pages/_app.tsx` — wrap with `<LanguageProvider>`
- `src/pages/_document.tsx` — inline anti-FOUC script + dynamic `<html lang>`
- `src/pages/index.tsx` — all strings, plus mount `<SEO />`
- `src/components/header/index.tsx` — translated nav + `<LanguageToggle />`
- `src/components/menuMobile/index.tsx` — translated nav + `<LanguageToggle />` inside drawer
- `src/components/experiencia/index.tsx` — all strings, restructured around timeline items array
- `src/components/capacidades/index.tsx` — all strings, restructured from 6 to 5 groups
- `src/components/certificados/index.tsx` — labels only (cert data stays)
- `src/components/footer/footer.tsx` — any user-facing strings
- `package.json` — add `next-sitemap` dep, add postbuild script for sitemap generation
- `next.config.js` — no changes anticipated (verify during implementation)

### Untouched

- `src/components/arquitetura/*` — section stays commented out
- `src/styles/*` — visual unchanged
- `src/components/easterEggs/*` — behavior unchanged
- All assets in `src/assets/` and `public/`

---

## 7. Validation

This project has no automated test suite today and we are not adding one as part of this work. Validation is manual and consists of:

1. `pnpm dev` / `npm run dev` runs without console errors in either language.
2. `pnpm build` / `npm run build` succeeds; output is SSG.
3. Toggle switches both directions (PT→EN and EN→PT) without console errors and without losing scroll position.
4. After a toggle, reload preserves the selected language (localStorage check).
5. Direct visit to `/?lang=pt` renders Portuguese; `/?lang=en` renders English; `/` renders English.
6. View source on a built page confirms all three hreflang tags, both meta titles/descriptions, OG tags, and the Person JSON-LD block.
7. Validate JSON-LD at https://search.google.com/test/rich-results — should report a recognized Person entity with no errors.
8. Lighthouse SEO score on Vercel preview ≥ 90.
9. OG preview check using https://opengraph.dev/ for both `/?lang=pt` and `/?lang=en` shows correct title, description, and image.
10. Visual diff: compare current production against rewrite preview — only copy should differ. Tesseract grid, particles, hero portrait, value cards, timeline visuals, skill cards, certificate carousel, easter eggs all remain identical.

---

## 8. Out-of-Scope (deferred)

These were discussed during brainstorming and explicitly deferred:

- Custom domain (`caueenrico.com.br` / `.dev`) — would meaningfully improve ranking but the user wants to keep `caueenrico.vercel.app` for now.
- Dedicated social-share image with name and title overlay (initial implementation reuses portrait).
- AWS / Azure architect certification — outside this project's scope, but its absence is why the positioning carefully uses "hands-on" rather than the unqualified "Solutions Architect."
- Re-enabling the "Arquitetura em Ação" section — stays commented out.
- Localization of certificate category labels.
- Reordering / pruning the certificates list itself.
- Any blog or writing section.
