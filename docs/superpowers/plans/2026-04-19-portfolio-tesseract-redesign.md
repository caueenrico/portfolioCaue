# Portfolio Tesseract Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio's visual identity from cyan-accented dark theme to an Interstellar Tesseract aesthetic (gold/amber palette, 3D perspective grid, floating data particles), add an animated AWS architecture diagram section, and wire up retro-gaming easter eggs.

**Architecture:** All changes are CSS/visual-layer. The Stitches theme tokens get updated to gold, then each component's styles are swapped from cyan references to gold. New components (Arquitetura, EasterEggs) are added as standard React components with SVG + CSS animations. No new npm dependencies.

**Tech Stack:** Next.js 13, Stitches v1.2.8, TypeScript, React 18, SVG, Web Audio API, CSS animations.

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/styles/index.ts` | Modify | Stitches theme tokens — gold palette |
| `src/styles/global.ts` | Modify | Tesseract grid, particles, scrollbar, selection, pixel cursor |
| `src/styles/styles.ts` | Modify | Hero, About, ValueCard, Education/Contact — cyan→gold |
| `src/components/header/styles.ts` | Modify | Logo, nav hover, scroll border — cyan→gold |
| `src/components/header/index.tsx` | Modify | Logo click chiptune, menu icon color |
| `src/components/menuMobile/styles.ts` | Modify | Logo, nav links, close btn — cyan→gold |
| `src/components/experiencia/styles.ts` | Modify | Timeline line, dots, badges, tech tags — cyan→gold |
| `src/components/capacidades/styles.ts` | Modify | Skill icons, tags, group hover — cyan→gold |
| `src/components/certificados/styles.ts` | Modify | Category label, hover border — cyan→gold |
| `src/components/footer/styles.ts` | Modify | Logo, social hover — cyan→gold |
| `src/components/footer/footer.tsx` | Modify | Logo click handler |
| `src/components/arquitetura/index.tsx` | Create | Architecture animation component |
| `src/components/arquitetura/styles.ts` | Create | Architecture section styled components |
| `src/components/arquitetura/diagrams.ts` | Create | SVG diagram data (nodes, connections, 3 tabs) |
| `src/components/easterEggs/useEasterEggs.ts` | Create | Easter egg hooks (Konami, cursor, chiptune) |
| `src/pages/index.tsx` | Modify | Import Arquitetura + EasterEggs, add section + nav link |

---

### Task 1: Update Stitches Theme Tokens

**Files:**
- Modify: `src/styles/index.ts`

- [ ] **Step 1: Update the theme colors**

Replace the theme colors to add gold tokens and update accent references:

```ts
// src/styles/index.ts
import { createStitches } from "@stitches/react";
import type * as Stitches from '@stitches/react';

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css
} = createStitches({
  theme: {
    colors: {
      white: "#F0F0F5",
      offwhite: "#C8C8D4",
      cyan: "#00D2DF",
      cyanDim: "rgba(0, 210, 223, 0.12)",
      cyanGlow: "rgba(0, 210, 223, 0.06)",
      gold: "#E8A838",
      goldDim: "rgba(232, 168, 56, 0.15)",
      goldGlow: "rgba(232, 168, 56, 0.4)",
      goldSubtle: "rgba(232, 168, 56, 0.08)",
      bg: "#000000",
      bgSurface: "#050508",
      bgCard: "#0A0A12",
      bgHover: "#0F0F1A",
      border: "rgba(232, 168, 56, 0.08)",
      borderHover: "rgba(232, 168, 56, 0.25)",
      borderAccent: "rgba(232, 168, 56, 0.22)",
      textSecondary: "#9090A8",
      textMuted: "#5C5C70",
      // Legacy aliases
      blue: "#00D2DF",
      dark: "#000000",
      dark200: "#050508",
      graylight: "#9090A8",
    },
  },
  media: {
    bp1: '(min-width: 1239px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1239px)',
    cel1: '(max-width: 577px)',
  },
});
```

- [ ] **Step 2: Verify the app still compiles**

Run: `npm run dev`
Expected: Dev server starts without errors. Page loads (colors may look broken until other files are updated — that's expected).

- [ ] **Step 3: Commit**

```bash
git add src/styles/index.ts
git commit -m "feat: update Stitches theme tokens to Tesseract gold palette"
```

---

### Task 2: Update Global Styles (Tesseract Grid, Particles, Scrollbar)

**Files:**
- Modify: `src/styles/global.ts`

- [ ] **Step 1: Rewrite global.ts with Tesseract background, particles, and updated scrollbar**

```ts
// src/styles/global.ts
import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '#000000',
    color: '#F0F0F5',
    overflowX: 'hidden',
    position: 'relative',
  },

  'body, input, textarea, button': {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: '1rem',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: "'Syne', sans-serif",
  },

  '::selection': {
    backgroundColor: 'rgba(232, 168, 56, 0.25)',
    color: '#F0F0F5',
  },

  '::-webkit-scrollbar': {
    width: '4px',
  },

  '::-webkit-scrollbar-track': {
    background: '#000000',
  },

  '::-webkit-scrollbar-thumb': {
    background: 'rgba(232, 168, 56, 0.3)',
    borderRadius: '2px',
  },

  // Tesseract grid background
  '#tesseract-grid': {
    position: 'fixed',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
    perspective: '800px',
    overflow: 'hidden',
  },

  '#tesseract-grid .grid-plane': {
    position: 'absolute',
    width: '200%',
    height: '200%',
    top: '-50%',
    left: '-50%',
    transformOrigin: 'center center',
    transform: 'rotateX(60deg)',
    backgroundImage: `
      linear-gradient(rgba(232, 168, 56, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232, 168, 56, 0.06) 1px, transparent 1px)
    `,
    backgroundSize: '80px 80px',
  },

  // Floating data particles
  '.data-particle': {
    position: 'fixed',
    fontFamily: "'DM Mono', monospace",
    color: 'rgba(232, 168, 56, 0.15)',
    pointerEvents: 'none',
    zIndex: 0,
    userSelect: 'none',
  },

  // Pixel cursor class (toggled by easter egg)
  '.pixel-cursor, .pixel-cursor *': {
    cursor: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27%3E%3Crect x=%276%27 y=%270%27 width=%274%27 height=%274%27 fill=%27%23E8A838%27/%3E%3Crect x=%270%27 y=%276%27 width=%274%27 height=%274%27 fill=%27%23E8A838%27/%3E%3Crect x=%2712%27 y=%276%27 width=%274%27 height=%274%27 fill=%27%23E8A838%27/%3E%3Crect x=%276%27 y=%2712%27 width=%274%27 height=%274%27 fill=%27%23E8A838%27/%3E%3Crect x=%276%27 y=%276%27 width=%274%27 height=%274%27 fill=%27%23000%27/%3E%3C/svg%3E") 8 8, crosshair !important',
  },

  // Konami pixel dimension mode
  '.pixel-dimension': {
    filter: 'contrast(1.1) saturate(1.2)',
  },

  '.pixel-dimension::after': {
    content: '""',
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    pointerEvents: 'none',
    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
    animation: 'scanlines 0.1s steps(2) infinite',
  },

  '@keyframes scanlines': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(4px)' },
  },

  // Reduced motion
  '@media (prefers-reduced-motion: reduce)': {
    '.data-particle': { display: 'none' },
    '#tesseract-grid': { display: 'none' },
  },
});
```

- [ ] **Step 2: Verify the app compiles and the background is pure black**

Run: `npm run dev`
Expected: Page loads with black background, gold scrollbar, gold text selection.

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.ts
git commit -m "feat: add Tesseract grid background, gold scrollbar, pixel cursor styles"
```

---

### Task 3: Update Hero + About + Education/Contact Styles

**Files:**
- Modify: `src/styles/styles.ts`

This is the largest style file. Every cyan reference gets swapped to gold. The orbs become gold-tinted. The scan line becomes gold.

- [ ] **Step 1: Update all animations and the PageWrapper**

Replace the animation definitions and PageWrapper at the top of `src/styles/styles.ts`:

```ts
// Replace the pulseGlow keyframes
const pulseGlow = keyframes({
  '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 168, 56, 0)' },
  '50%': { boxShadow: '0 0 24px 4px rgba(232, 168, 56, 0.15)' },
});

// Replace orbFloat1 background (in HeroSection &::before)
// Will be done in step 2

// Replace the ringPulse keyframes — keep as is, colors are in the component

// Replace the PageWrapper background
export const PageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#000000',
  overflowX: 'hidden',
  position: 'relative',
  zIndex: 1,
});
```

- [ ] **Step 2: Update HeroSection — orbs, scan line, badges, portrait ring to gold**

In `src/styles/styles.ts`, update the HeroSection styled component. Key changes:

1. Replace `&::before` (orb 1) gradient: `rgba(0, 210, 223, 0.07)` → `rgba(232, 168, 56, 0.05)`
2. Replace `&::after` (orb 2) gradient: `rgba(0, 210, 223, 0.05)` → `rgba(232, 168, 56, 0.04)`
3. Replace `.scanLine` gradient: `rgba(0,210,223,0.4)` → `rgba(232,168,56,0.4)`
4. Replace `.availabilityBadge::before` background: `#00D2DF` → `#E8A838`
5. Replace `.availabilityBadge::before` pulseGlow (already updated in step 1)
6. Replace `.heroTitle .accent` gradient: cyan gradient → `linear-gradient(100deg, #E8A838 0%, #F0C060 40%, #E8A838 60%, #C08020 100%)`
7. Replace `.heroRole::before` background: `#00D2DF` → `#E8A838`, box-shadow: `rgba(0, 210, 223, 0.8)` → `rgba(232, 168, 56, 0.8)`
8. Replace `.techBadge:hover` color: `#00D2DF` → `#E8A838`, borderColor: `rgba(0,210,223,0.3)` → `rgba(232,168,56,0.3)`, background: `rgba(0,210,223,0.06)` → `rgba(232,168,56,0.06)`
9. Replace `.techBadge::after` gradient: `rgba(0,210,223,0.12)` → `rgba(232,168,56,0.12)`
10. Replace `.portraitRing` border: `rgba(0, 210, 223, 0.25)` → `rgba(232, 168, 56, 0.25)`
11. Replace `.portraitRing2` border: `rgba(0, 210, 223, 0.12)` → `rgba(232, 168, 56, 0.12)`
12. Replace `.portraitFrame` border: `rgba(0, 210, 223, 0.2)` → `rgba(232, 168, 56, 0.2)`, boxShadow: `rgba(0, 210, 223, 0.1)` → `rgba(232, 168, 56, 0.1)`
13. Replace background in `.backgroundImage` dot grid: keep as is (white dots are fine)
14. Replace `PageWrapper` background: `#08090E` → `#000000`

- [ ] **Step 3: Update CTARow — primary button gold, secondary button gold border**

In `src/styles/styles.ts`, update CTARow:

1. `.ctaPrimary` background: `#00D2DF` → `#E8A838`, border: `#00D2DF` → `#E8A838`, boxShadow: `rgba(0, 210, 223, 0.2)` → `rgba(232, 168, 56, 0.2)`
2. `.ctaPrimary:hover` color: `#00D2DF` → `#E8A838`, boxShadow: `rgba(0, 210, 223, 0.25)` → `rgba(232, 168, 56, 0.25)`
3. `.ctaSecondary:hover` borderColor: `rgba(0, 210, 223, 0.4)` → `rgba(232, 168, 56, 0.4)`, color: `#00D2DF` → `#E8A838`

- [ ] **Step 4: Update AboutSection — section labels, value cards to gold**

In `src/styles/styles.ts`, update AboutSection:

1. `.sectionLabel` color: `$cyan` → `$gold`
2. `.sectionLabel::before` background: `rgba(0, 210, 223, 0.6)` → `rgba(232, 168, 56, 0.6)`
3. Background: `#0D0E18` → `#050508`
4. Border top/bottom: keep as is (white alpha borders are neutral)

- [ ] **Step 5: Update ValueCard — accent line and hover to gold**

In `src/styles/styles.ts`, update ValueCard:

1. `&:hover` borderColor: `rgba(0, 210, 223, 0.22)` → `rgba(232, 168, 56, 0.22)`, boxShadow cyan → `rgba(232, 168, 56, 0.08)`
2. `&::before` (accent line) on hover: `rgba(0, 210, 223, 0.6)` → `rgba(232, 168, 56, 0.6)`
3. `.cardIcon` color: `#00D2DF` → `#E8A838`, background: `rgba(0, 210, 223, 0.08)` → `rgba(232, 168, 56, 0.08)`, border: `rgba(0, 210, 223, 0.15)` → `rgba(232, 168, 56, 0.15)`

- [ ] **Step 6: Update SectionWrapper alt tone**

In `src/styles/styles.ts`, update SectionWrapper:

1. `alt` variant background: `#0D0E18` → `#050508`

- [ ] **Step 7: Update EducationContactSection — labels, contacts to gold**

In `src/styles/styles.ts`, update EducationContactSection:

1. `.sectionLabel` color: `$cyan` → `$gold`
2. `.sectionLabel::before` background: `rgba(0, 210, 223, 0.6)` → `rgba(232, 168, 56, 0.6)`
3. `.contactItem:hover` borderColor: `rgba(0, 210, 223, 0.25)` → `rgba(232, 168, 56, 0.25)`
4. `.itemIcon` background: `rgba(0, 210, 223, 0.08)` → `rgba(232, 168, 56, 0.08)`, border: `rgba(0, 210, 223, 0.15)` → `rgba(232, 168, 56, 0.15)`

- [ ] **Step 8: Verify the hero and about sections render with gold accents**

Run: `npm run dev`
Expected: Hero shows gold shimmer on "Software", gold badges, gold portrait ring. About section has gold labels and card accents.

- [ ] **Step 9: Commit**

```bash
git add src/styles/styles.ts
git commit -m "feat: swap Hero, About, Education/Contact styles from cyan to gold"
```

---

### Task 4: Update Header Styles

**Files:**
- Modify: `src/components/header/styles.ts`
- Modify: `src/components/header/index.tsx`

- [ ] **Step 1: Update header styles — logo, nav hover, scroll border to gold**

In `src/components/header/styles.ts`, make these replacements:

1. `.inner` background: `rgba(8, 9, 14, 0.7)` → `rgba(0, 0, 0, 0.7)`
2. `&.scrolled .inner` background: `rgba(8, 9, 14, 0.95)` → `rgba(0, 0, 0, 0.95)`, borderBottomColor: `rgba(0, 210, 223, 0.12)` → `rgba(232, 168, 56, 0.12)`
3. `.logo` color: `#00D2DF` → `#E8A838`
4. `nav a:hover` color: `#00D2DF` → `#E8A838`

- [ ] **Step 2: Update header index.tsx — menu icon color**

In `src/components/header/index.tsx`, change the List icon color:

```tsx
<List size={22} color="#E8A838" />
```

- [ ] **Step 3: Verify header renders with gold logo and hover**

Run: `npm run dev`
Expected: "CE." logo is gold, nav links hover gold, scroll border is gold.

- [ ] **Step 4: Commit**

```bash
git add src/components/header/styles.ts src/components/header/index.tsx
git commit -m "feat: update header to gold accent colors"
```

---

### Task 5: Update Mobile Menu Styles

**Files:**
- Modify: `src/components/menuMobile/styles.ts`

- [ ] **Step 1: Update mobile menu — logo, links, close button to gold**

In `src/components/menuMobile/styles.ts`:

1. Background: `#08090E` → `#000000`
2. `.logo` color: `#00D2DF` → `#E8A838`
3. `.closeBtn:hover` borderColor: `rgba(0, 210, 223, 0.4)` → `rgba(232, 168, 56, 0.4)`
4. `nav a:hover` color: `#00D2DF` → `#E8A838`

- [ ] **Step 2: Verify mobile menu on narrow viewport**

Run: `npm run dev`, resize to mobile width, open hamburger menu.
Expected: Gold logo, gold hover on nav links.

- [ ] **Step 3: Commit**

```bash
git add src/components/menuMobile/styles.ts
git commit -m "feat: update mobile menu to gold accent colors"
```

---

### Task 6: Update Experience Timeline Styles

**Files:**
- Modify: `src/components/experiencia/styles.ts`

- [ ] **Step 1: Update timeline — line, dots, company, tech tags, achievements to gold**

In `src/components/experiencia/styles.ts`:

1. Timeline `&::before` gradient: `rgba(0, 210, 223, 0.4)` → `rgba(232, 168, 56, 0.4)`, `rgba(0, 210, 223, 0.05)` → `rgba(232, 168, 56, 0.05)`
2. `.dot` background: `rgba(0, 210, 223, 0.25)` → `rgba(232, 168, 56, 0.25)`, border: `rgba(0, 210, 223, 0.4)` → `rgba(232, 168, 56, 0.4)`
3. `&:hover .dot` background: `rgba(0, 210, 223, 0.5)` → `rgba(232, 168, 56, 0.5)`
4. `.content:hover` borderColor: `rgba(0, 210, 223, 0.18)` → `rgba(232, 168, 56, 0.18)`
5. `.company` color: `#00D2DF` → `#E8A838`
6. `.achievements li::before` color: `#00D2DF` → `#E8A838`
7. `.tech:hover` color: `#00D2DF` → `#E8A838`, borderColor: `rgba(0, 210, 223, 0.25)` → `rgba(232, 168, 56, 0.25)`, background: `rgba(0, 210, 223, 0.05)` → `rgba(232, 168, 56, 0.05)`
8. `.sectionLabel` color: `$cyan` → `$gold`
9. Featured variant `.dot`: background `#00D2DF` → `#E8A838`, border: `rgba(0, 210, 223, 0.7)` → `rgba(232, 168, 56, 0.7)`, boxShadow: `rgba(0, 210, 223, 0.45)` → `rgba(232, 168, 56, 0.45)`
10. Featured `.content` borderColor: `rgba(0, 210, 223, 0.15)` → `rgba(232, 168, 56, 0.15)`, background: `#0E101C` → `#0A0A12`

- [ ] **Step 2: Verify timeline renders with gold accents**

Run: `npm run dev`, scroll to Trajetória section.
Expected: Gold timeline line, gold dots, gold company name, gold tech tag hover.

- [ ] **Step 3: Commit**

```bash
git add src/components/experiencia/styles.ts
git commit -m "feat: update experience timeline to gold accent colors"
```

---

### Task 7: Update Skills Grid Styles

**Files:**
- Modify: `src/components/capacidades/styles.ts`

- [ ] **Step 1: Update skills — icons, tags, group hover to gold**

In `src/components/capacidades/styles.ts`:

1. `.sectionLabel` color: `$cyan` → `$gold`
2. SkillGroup `&:hover` borderColor: `rgba(0, 210, 223, 0.2)` → `rgba(232, 168, 56, 0.2)`
3. `.icon` background: `rgba(0, 210, 223, 0.08)` → `rgba(232, 168, 56, 0.08)`, border: `rgba(0, 210, 223, 0.15)` → `rgba(232, 168, 56, 0.15)`, color: `#00D2DF` → `#E8A838`
4. `.skill:hover` color: `#00D2DF` → `#E8A838`, background: `rgba(0, 210, 223, 0.06)` → `rgba(232, 168, 56, 0.06)`, borderColor: `rgba(0, 210, 223, 0.22)` → `rgba(232, 168, 56, 0.22)`

- [ ] **Step 2: Verify skills grid renders with gold**

Run: `npm run dev`, scroll to Capacidades.
Expected: Gold icons, gold hover on skill tags.

- [ ] **Step 3: Commit**

```bash
git add src/components/capacidades/styles.ts
git commit -m "feat: update skills grid to gold accent colors"
```

---

### Task 8: Update Certificates Carousel Styles

**Files:**
- Modify: `src/components/certificados/styles.ts`

- [ ] **Step 1: Update certificates — category label, hover border to gold**

In `src/components/certificados/styles.ts`:

1. CarouselWrapper `&::before` gradient: `#08090E` → `#000000`
2. CarouselWrapper `&::after` gradient: `#08090E` → `#000000`
3. CertCard `&:hover` borderColor: `rgba(0, 210, 223, 0.25)` → `rgba(232, 168, 56, 0.25)`
4. `.certCategory` color: `#00D2DF` → `#E8A838`

- [ ] **Step 2: Verify carousel renders with gold**

Run: `npm run dev`, scroll to certificates carousel.
Expected: Gold category labels, gold hover borders.

- [ ] **Step 3: Commit**

```bash
git add src/components/certificados/styles.ts
git commit -m "feat: update certificates carousel to gold accent colors"
```

---

### Task 9: Update Footer Styles

**Files:**
- Modify: `src/components/footer/styles.ts`

- [ ] **Step 1: Update footer — logo, social hover to gold**

In `src/components/footer/styles.ts`:

1. `.footerLogo` color: `#00D2DF` → `#E8A838`
2. `.socialLinks a:hover` color: `#00D2DF` → `#E8A838`

- [ ] **Step 2: Verify footer renders with gold**

Run: `npm run dev`, scroll to footer.
Expected: Gold "CE." logo, gold social link hover.

- [ ] **Step 3: Commit**

```bash
git add src/components/footer/styles.ts
git commit -m "feat: update footer to gold accent colors"
```

---

### Task 10: Update Contact Icon Colors in index.tsx

**Files:**
- Modify: `src/pages/index.tsx`

- [ ] **Step 1: Update all phosphor icon color props from cyan to gold**

In `src/pages/index.tsx`, update the 4 contact item icons:

```tsx
<LinkedinLogo size={18} color="#E8A838" />
```
```tsx
<WhatsappLogo size={18} color="#E8A838" />
```
```tsx
<EnvelopeSimple size={18} color="#E8A838" />
```
```tsx
<GithubLogo size={18} color="#E8A838" />
```

- [ ] **Step 2: Verify contact icons are gold**

Run: `npm run dev`, scroll to contact section.
Expected: All 4 contact icons are gold.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.tsx
git commit -m "feat: update contact icons to gold color"
```

---

### Task 11: Create Architecture Diagram Data

**Files:**
- Create: `src/components/arquitetura/diagrams.ts`

- [ ] **Step 1: Create the diagram data file with 3 architecture diagrams**

```ts
// src/components/arquitetura/diagrams.ts

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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/arquitetura/diagrams.ts
git commit -m "feat: add architecture diagram data for 3 AWS architectures"
```

---

### Task 12: Create Architecture Section Styles

**Files:**
- Create: `src/components/arquitetura/styles.ts`

- [ ] **Step 1: Create the styled components for the architecture section**

```ts
// src/components/arquitetura/styles.ts
import { keyframes, styled } from "@/styles";

const glitchFlash = keyframes({
  '0%': { opacity: 1, transform: 'translate(0)' },
  '20%': { opacity: 0.8, transform: 'translate(-2px, 1px)' },
  '40%': { opacity: 1, transform: 'translate(1px, -1px)' },
  '60%': { opacity: 0.9, transform: 'translate(-1px, 0)' },
  '80%': { opacity: 1, transform: 'translate(2px, 1px)' },
  '100%': { opacity: 1, transform: 'translate(0)' },
});

export const ArchSection = styled('section', {
  width: '100%',
  padding: '100px 80px',
  position: 'relative',

  '@bp3': {
    padding: '80px 28px',
  },

  '.archInner': {
    maxWidth: 1100,
    margin: '0 auto',
  },

  '.sectionLabel': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.72rem',
    fontWeight: 400,
    letterSpacing: '0.2em',
    color: '$gold',
    textTransform: 'uppercase',
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    gap: 10,

    '&::before': {
      content: '""',
      display: 'inline-block',
      width: 20,
      height: 1,
      background: 'rgba(232, 168, 56, 0.6)',
      flexShrink: 0,
    },
  },

  h2: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
    fontWeight: 800,
    color: '#F0F0F5',
    marginBottom: 14,
    lineHeight: 1.1,
    letterSpacing: '-0.5px',
  },

  '.sectionDesc': {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '1rem',
    color: '#9090A8',
    maxWidth: 560,
    lineHeight: 1.75,
    marginBottom: 40,
  },
});

export const TabBar = styled('div', {
  display: 'flex',
  gap: 8,
  marginBottom: 24,
  flexWrap: 'wrap',
});

export const Tab = styled('button', {
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.75rem',
  letterSpacing: '0.05em',
  padding: '8px 18px',
  borderRadius: 6,
  border: '1px solid rgba(255, 255, 255, 0.08)',
  background: 'transparent',
  color: 'rgba(255, 255, 255, 0.35)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  '&:hover': {
    borderColor: 'rgba(232, 168, 56, 0.2)',
    color: 'rgba(255, 255, 255, 0.6)',
  },

  variants: {
    active: {
      true: {
        background: 'rgba(232, 168, 56, 0.1)',
        borderColor: 'rgba(232, 168, 56, 0.3)',
        color: '#E8A838',
      },
    },
  },
});

export const DiagramCanvas = styled('div', {
  background: '#0A0A12',
  border: '1px solid rgba(232, 168, 56, 0.1)',
  borderRadius: 14,
  padding: '24px',
  position: 'relative',
  minHeight: 340,

  '@cel1': {
    padding: '16px',
    minHeight: 280,
  },

  '.canvasHeader': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  '.diagramTitle': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.7rem',
    color: 'rgba(232, 168, 56, 0.5)',
    letterSpacing: '0.1em',
  },

  '.replayBtn': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.68rem',
    padding: '5px 12px',
    borderRadius: 4,
    border: '1px solid rgba(232, 168, 56, 0.2)',
    background: 'transparent',
    color: 'rgba(232, 168, 56, 0.6)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: 6,

    '&:hover': {
      borderColor: 'rgba(232, 168, 56, 0.4)',
      color: '#E8A838',
    },
  },

  '.progressBar': {
    marginTop: 20,
  },

  '.progressTrack': {
    height: 2,
    background: 'rgba(232, 168, 56, 0.1)',
    borderRadius: 1,
    overflow: 'hidden',
  },

  '.progressFill': {
    height: '100%',
    background: 'linear-gradient(90deg, rgba(232, 168, 56, 0.6), rgba(0, 210, 223, 0.6))',
    borderRadius: 1,
    transition: 'width 0.4s ease',
  },

  '.progressText': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    color: 'rgba(232, 168, 56, 0.35)',
    marginTop: 6,
  },

  // Glitch effect on tab switch
  '&.glitching': {
    animation: `${glitchFlash} 80ms linear`,
  },
});
```

- [ ] **Step 2: Commit**

```bash
git add src/components/arquitetura/styles.ts
git commit -m "feat: add architecture section styled components"
```

---

### Task 13: Create Architecture Animation Component

**Files:**
- Create: `src/components/arquitetura/index.tsx`

- [ ] **Step 1: Create the full Architecture component with SVG animation and tab switching**

```tsx
// src/components/arquitetura/index.tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { diagrams } from './diagrams';
import type { DiagramNode, DiagramConnection } from './diagrams';
import { ArchSection, TabBar, Tab, DiagramCanvas } from './styles';

const NODE_W = 100;
const NODE_H = 50;
const STAGGER_NODE = 400;
const STAGGER_CONN = 300;

export function Arquitetura() {
  const [activeTab, setActiveTab] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // IntersectionObserver to trigger animation on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleTabSwitch = useCallback((idx: number) => {
    if (idx === activeTab) return;
    setGlitching(true);
    setTimeout(() => {
      setActiveTab(idx);
      setAnimKey((k) => k + 1);
      setGlitching(false);
    }, 80);
  }, [activeTab]);

  const handleReplay = useCallback(() => {
    setAnimKey((k) => k + 1);
  }, []);

  const diagram = diagrams[activeTab];
  const totalNodes = diagram.nodes.length;

  return (
    <ArchSection id="arquitetura" ref={sectionRef}>
      <div className="archInner" data-aos="fade-up">
        <span className="sectionLabel">Arquitetura</span>
        <h2>Arquitetura em Ação</h2>
        <p className="sectionDesc">
          Diagramas de soluções AWS montados em tempo real — do DNS ao deploy.
        </p>

        <TabBar>
          {diagrams.map((d, i) => (
            <Tab
              key={d.name}
              active={i === activeTab}
              onClick={() => handleTabSwitch(i)}
            >
              {d.name}
            </Tab>
          ))}
        </TabBar>

        <DiagramCanvas className={glitching ? 'glitching' : ''}>
          <div className="canvasHeader">
            <span className="diagramTitle">
              // {diagram.name.toLowerCase().replace(/\s+/g, '_')}.arch
            </span>
            <button className="replayBtn" onClick={handleReplay}>
              ⟳ replay
            </button>
          </div>

          {isVisible && (
            <DiagramSVG
              key={`${activeTab}-${animKey}`}
              nodes={diagram.nodes}
              connections={diagram.connections}
            />
          )}

          <div className="progressBar">
            <div className="progressTrack">
              <div
                className="progressFill"
                style={{
                  width: isVisible ? '100%' : '0%',
                  transitionDelay: isVisible ? `${totalNodes * STAGGER_NODE}ms` : '0ms',
                }}
              />
            </div>
            <span className="progressText">
              {isVisible ? `${totalNodes}/${totalNodes} nodes` : 'waiting...'}
            </span>
          </div>
        </DiagramCanvas>
      </div>
    </ArchSection>
  );
}

function DiagramSVG({
  nodes,
  connections,
}: {
  nodes: DiagramNode[];
  connections: DiagramConnection[];
}) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  return (
    <svg
      viewBox="0 0 450 280"
      style={{ width: '100%', height: 'auto', overflow: 'visible' }}
    >
      <defs>
        <style>{`
          @keyframes nodeAppear {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes drawConn {
            from { stroke-dashoffset: 500; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes nodePulse {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(232,168,56,0.2)); }
            50% { filter: drop-shadow(0 0 6px rgba(232,168,56,0.4)); }
          }
        `}</style>
      </defs>

      {/* Connections */}
      {connections.map((conn, i) => {
        const from = nodeMap.get(conn.from);
        const to = nodeMap.get(conn.to);
        if (!from || !to) return null;

        const x1 = from.x + NODE_W / 2;
        const y1 = from.y + NODE_H / 2;
        const x2 = to.x + NODE_W / 2;
        const y2 = to.y + NODE_H / 2;
        const delay = (nodes.length + i) * STAGGER_CONN;

        return (
          <line
            key={`${conn.from}-${conn.to}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(232, 168, 56, 0.3)"
            strokeWidth="1"
            strokeDasharray="500"
            strokeDashoffset="500"
            style={{
              animation: `drawConn 0.8s ease-out ${delay}ms forwards`,
            }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => {
        const isCompute = node.type === 'compute';
        const strokeColor = isCompute
          ? 'rgba(0, 210, 223, 0.5)'
          : 'rgba(232, 168, 56, 0.5)';
        const fillColor = isCompute
          ? 'rgba(0, 210, 223, 0.08)'
          : 'rgba(232, 168, 56, 0.08)';
        const textColor = isCompute
          ? 'rgba(0, 210, 223, 0.85)'
          : 'rgba(232, 168, 56, 0.85)';
        const subColor = isCompute
          ? 'rgba(0, 210, 223, 0.5)'
          : 'rgba(232, 168, 56, 0.5)';

        return (
          <g
            key={node.id}
            style={{
              opacity: 0,
              transformOrigin: `${node.x + NODE_W / 2}px ${node.y + NODE_H / 2}px`,
              animation: `nodeAppear 0.5s ease-out ${i * STAGGER_NODE}ms forwards, nodePulse 3s ease-in-out ${nodes.length * STAGGER_NODE + 500}ms infinite`,
            }}
          >
            <rect
              x={node.x} y={node.y}
              width={NODE_W} height={NODE_H}
              rx={6}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={1}
            />
            <text
              x={node.x + NODE_W / 2}
              y={node.y + 20}
              textAnchor="middle"
              fill={textColor}
              fontFamily="'DM Mono', monospace"
              fontSize={9}
            >
              {node.label}
            </text>
            <text
              x={node.x + NODE_W / 2}
              y={node.y + 35}
              textAnchor="middle"
              fill={subColor}
              fontFamily="'DM Mono', monospace"
              fontSize={7}
            >
              {node.sublabel}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
```

- [ ] **Step 2: Verify the component compiles**

Run: `npm run dev`
Expected: No errors (component not yet mounted in the page).

- [ ] **Step 3: Commit**

```bash
git add src/components/arquitetura/index.tsx
git commit -m "feat: add Architecture animation component with SVG diagrams"
```

---

### Task 14: Create Easter Eggs Hook

**Files:**
- Create: `src/components/easterEggs/useEasterEggs.ts`

- [ ] **Step 1: Create the easter eggs hook with Konami code, pixel cursor, and chiptune**

```ts
// src/components/easterEggs/useEasterEggs.ts
import { useEffect, useCallback } from 'react';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

function playChiptune() {
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
  } catch {
    // Web Audio not available — silently skip
  }
}

function playKonamiSound() {
  try {
    const ctx = new AudioContext();
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.15);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.15);
    });
  } catch {
    // Web Audio not available
  }
}

export function useEasterEggs() {
  // Konami code detector
  useEffect(() => {
    const buffer: string[] = [];

    function handleKey(e: KeyboardEvent) {
      buffer.push(e.key);
      if (buffer.length > KONAMI.length) buffer.shift();

      if (buffer.length === KONAMI.length && buffer.every((k, i) => k === KONAMI[i])) {
        buffer.length = 0;
        activatePixelDimension();
      }
    }

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Shift key pixel cursor
  useEffect(() => {
    function handleDown(e: KeyboardEvent) {
      if (e.key === 'Shift') document.documentElement.classList.add('pixel-cursor');
    }
    function handleUp(e: KeyboardEvent) {
      if (e.key === 'Shift') document.documentElement.classList.remove('pixel-cursor');
    }

    document.addEventListener('keydown', handleDown);
    document.addEventListener('keyup', handleUp);
    return () => {
      document.removeEventListener('keydown', handleDown);
      document.removeEventListener('keyup', handleUp);
      document.documentElement.classList.remove('pixel-cursor');
    };
  }, []);

  const handleLogoClick = useCallback(() => {
    playChiptune();
  }, []);

  return { handleLogoClick };
}

function activatePixelDimension() {
  playKonamiSound();
  document.documentElement.classList.add('pixel-dimension');

  // Screen shake
  document.body.style.animation = 'none';
  document.body.offsetHeight; // force reflow
  document.body.style.animation = 'shake 0.2s ease';

  // Add shake keyframes if not present
  if (!document.getElementById('shake-style')) {
    const style = document.createElement('style');
    style.id = 'shake-style';
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translate(0); }
        25% { transform: translate(-3px, 2px); }
        50% { transform: translate(2px, -3px); }
        75% { transform: translate(-2px, 1px); }
      }
    `;
    document.head.appendChild(style);
  }

  setTimeout(() => {
    document.documentElement.classList.remove('pixel-dimension');
    document.body.style.animation = '';
  }, 10000);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/easterEggs/useEasterEggs.ts
git commit -m "feat: add easter eggs hook (Konami code, pixel cursor, chiptune)"
```

---

### Task 15: Wire Up Tesseract Grid, Particles, Architecture Section, and Easter Eggs in index.tsx

**Files:**
- Modify: `src/pages/index.tsx`
- Modify: `src/components/header/index.tsx`

- [ ] **Step 1: Add Tesseract grid, particles, architecture section, and easter eggs to index.tsx**

Update `src/pages/index.tsx` — add imports, Tesseract grid div, floating particles, Architecture component, and easter eggs hook:

```tsx
// src/pages/index.tsx
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header } from "../components/header";
import { Experiencias } from "../components/experiencia";
import { Capacidades } from "../components/capacidades";
import { Certificados } from "../components/certificados";
import { Arquitetura } from "../components/arquitetura";
import { Footer } from "../components/footer/footer";
import { useEasterEggs } from "../components/easterEggs/useEasterEggs";

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

export default function Home() {
  useEasterEggs();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out' });
  }, []);

  return (
    <>
      {/* Tesseract Grid Background */}
      <div id="tesseract-grid" aria-hidden="true">
        <div className="grid-plane" />
      </div>

      {/* Floating Data Particles */}
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

        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <HeroSection>
          <div className="scanLine" aria-hidden="true" />
          <div className="heroInner">
            <div className="heroLeft">
              <h1 className="heroTitle">
                Arquiteto de<br />
                <span className="accent">Software</span>
              </h1>

              <p className="heroRole">Cauê Enrico · Guarujá, SP</p>

              <p className="heroDesc">
                Projetando sistemas que escalam. Integrando tecnologia com propósito de negócio.
                De arquitetura e cloud à entrega em produção, com mão na massa e visão sistêmica.
              </p>

              <div className="techBadgeRow">
                {['.NET 8', 'Node.js', 'Python', 'React', 'Angular', 'Azure DevOps', 'AWS', 'Docker', 'SAP PI/PO'].map((t) => (
                  <span key={t} className="techBadge">{t}</span>
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
                  LinkedIn
                </a>

                <a
                  href="https://wa.me/5513991648306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctaSecondary"
                >
                  <WhatsappLogo size={18} />
                  WhatsApp
                </a>

                <a
                  href="https://github.com/caueenrico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctaSecondary"
                >
                  <GithubLogo size={18} />
                  GitHub
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
                    alt="Cauê Enrico — Arquiteto de Software"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </HeroSection>

        {/* ─── SOBRE / PROPOSTA DE VALOR ────────────────────────────────── */}
        <AboutSection id="sobre">
          <div className="aboutInner">
            <div className="aboutLeft" data-aos="fade-up">
              <span className="sectionLabel">Sobre</span>
              <h2>Quem projeta,<br />também entrega.</h2>
              <p className="aboutDesc">
                Sou <span className="highlight">Analista de Sistemas na Ultracargo</span> com foco em arquitetura de soluções e desenvolvimento de software. Participo das principais iniciativas tecnológicas da empresa, desde a concepção da arquitetura até a sustentação dos sistemas em produção.
                <br /><br />
                Antes de entrar para o desenvolvimento, trabalhei por anos diretamente na operação portuária da Ultracargo. Essa vivência operacional ainda influencia como leio requisitos e como conecto decisões técnicas ao contexto real do negócio.
                <br /><br />
                No lado técnico, trabalho com <span className="highlight">.NET, Node.js, Python, React e Angular</span>. Na parte de arquitetura, projeto soluções orientadas a eventos usando SQS, aplico padrões como CQRS e Outbox para garantir consistência e resiliência, e estruturo serviços na AWS com EC2, S3, CloudFront e Cognito. Pipelines CI/CD com Azure DevOps e conteinerização com Docker fazem parte do dia a dia.
              </p>

              <div className="recognitionBadge">
                <span className="badgeIcon">★</span>
                <div className="badgeText">
                  <span className="badgeTitle">Reconhecido pela Ultracargo em 2024</span>
                  <span className="badgeSub">Projeto de IA para prevenção de fraudes em terminais portuários</span>
                </div>
              </div>
            </div>

            <div className="aboutRight" data-aos="fade-up" data-aos-delay="100">
              <ValueCard>
                <div className="cardTop">
                  <span className="cardIcon">⬡</span>
                  <span className="cardTitle">Arquitetura de Soluções</span>
                </div>
                <p className="cardDesc">
                  Definição de arquitetura, escolha de tecnologias, organização de microsserviços e fluxos de integração, sempre alinhado a boas práticas de segurança e escalabilidade.
                </p>
              </ValueCard>

              <ValueCard>
                <div className="cardTop">
                  <span className="cardIcon">△</span>
                  <span className="cardTitle">Cloud & DevOps</span>
                </div>
                <p className="cardDesc">
                  Pipelines CI/CD com Azure DevOps, deploy em AWS e Azure, conteinerização com Docker e sustentação de aplicações em produção, da build ao hotfix.
                </p>
              </ValueCard>

              <ValueCard>
                <div className="cardTop">
                  <span className="cardIcon">⊕</span>
                  <span className="cardTitle">Visão de Negócio</span>
                </div>
                <p className="cardDesc">
                  Background operacional em logística portuária que permite traduzir demandas das áreas de negócio em soluções técnicas precisas, viáveis e sustentáveis.
                </p>
              </ValueCard>
            </div>
          </div>
        </AboutSection>

        {/* ─── ARQUITETURA EM AÇÃO ───────────────────────────────────────── */}
        <Arquitetura />

        {/* ─── TRAJETÓRIA ───────────────────────────────────────────────── */}
        <SectionWrapper id="experiencia" tone="base">
          <div data-aos="fade-up">
            <Experiencias />
          </div>
        </SectionWrapper>

        {/* ─── CAPACIDADES ──────────────────────────────────────────────── */}
        <SectionWrapper id="capacidades" tone="alt">
          <div data-aos="fade-up">
            <Capacidades />
          </div>
        </SectionWrapper>

        {/* ─── FORMAÇÃO & CONTATO ───────────────────────────────────────── */}
        <EducationContactSection id="contato">
          <div className="eduContactInner">
            <div data-aos="fade-up">
              <span className="sectionLabel">Formação</span>
              <h2>Educação &<br />Certificações</h2>

              <ul className="eduList">
                <li>
                  <span className="eduDegree">Análise e Desenvolvimento de Sistemas</span>
                  <span className="eduInst">Universidade Anhembi Morumbi</span>
                  <span className="eduYear">2021 — 2023</span>
                </li>
                <li>
                  <span className="eduDegree">Academia SAP S/4HANA</span>
                  <span className="eduInst">Ka Solution</span>
                  <span className="eduYear">2024</span>
                </li>
                <li>
                  <span className="eduDegree">Especialização Full Stack</span>
                  <span className="eduInst">Rocketseat · Ignite & Explorer</span>
                  <span className="eduYear">2022 — 2023</span>
                </li>
              </ul>

              <div className="certsBlock">
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 36, marginBottom: 20 }}>
                  <span className="sectionLabel" style={{ display: 'block', marginBottom: 0 }}>
                    Certificados
                  </span>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.68rem',
                    color: '#5C5C70',
                    letterSpacing: '0.05em',
                  }}>
                    +25 extracurriculares
                  </span>
                </div>
                <Certificados />
              </div>
            </div>

            <div className="contactBlock" data-aos="fade-up" data-aos-delay="100">
              <span className="sectionLabel">Contato</span>
              <h2>Vamos construir<br />algo juntos?</h2>

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
                    <span className="itemLabel">LinkedIn</span>
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
                    <span className="itemLabel">WhatsApp</span>
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
                    <span className="itemLabel">E-mail</span>
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
                    <span className="itemLabel">GitHub</span>
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

- [ ] **Step 2: Update header to use handleLogoClick from easter eggs**

In `src/components/header/index.tsx`, add the chiptune click to the logo. Since the hook is used in the parent, pass the handler via a simple inline approach — add an `onClick` on the logo anchor:

```tsx
// src/components/header/index.tsx
import { useEffect, useState } from "react";
import { ContHeader } from "./styles";
import { List } from "phosphor-react";
import { MenuMobile } from "../menuMobile";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

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
            <a href="#sobre">Sobre</a>
            <a href="#experiencia">Trajetória</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#arquitetura">Arquitetura</a>
            <a href="#contato">Contato</a>
          </nav>

          <button className="menuBtn" onClick={() => setMenuIsVisible(!menuIsVisible)}>
            <List size={22} color="#E8A838" />
          </button>
        </div>
      </ContHeader>
    </>
  );
}
```

Note: The nav link "Projetos" was replaced with "Arquitetura" to link to the new section.

- [ ] **Step 3: Update mobile menu nav links to match**

In `src/components/menuMobile/index.tsx`, update the nav link from "Projetos" to "Arquitetura" and update the href to `#arquitetura`.

- [ ] **Step 4: Verify the full site renders correctly**

Run: `npm run dev`
Expected:
- Tesseract grid visible behind all content
- Floating particles drifting slowly
- All sections have gold accents
- Architecture section animates diagrams on scroll
- Tab switching has glitch effect
- Replay button works
- Konami code triggers pixel dimension (↑↑↓↓←→←→BA)
- Shift key shows pixel cursor
- Logo click plays chiptune beep
- Nav includes "Arquitetura" link

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.tsx src/components/header/index.tsx src/components/menuMobile/index.tsx src/components/easterEggs/useEasterEggs.ts
git commit -m "feat: wire up Tesseract grid, particles, Architecture section, and easter eggs"
```

---

### Task 16: Final Visual QA and Polish

**Files:**
- Various (fixes as needed)

- [ ] **Step 1: Run the dev server and check all sections top to bottom**

Run: `npm run dev`

Check each section:
1. Header: gold logo, gold nav hover, gold mobile icon
2. Hero: gold shimmer, gold badges, gold portrait ring, gold CTAs
3. About: gold labels, gold value cards
4. Architecture: tabs work, diagrams animate, replay works, glitch on tab switch
5. Timeline: gold line, gold dots, gold company names
6. Skills: gold icons, gold tag hover
7. Certificates: gold category, gold hover border
8. Education/Contact: gold labels, gold icons
9. Footer: gold logo, gold social hover
10. Easter eggs: Konami code, Shift cursor, logo click sound

- [ ] **Step 2: Check responsive (resize to mobile)**

Check at 375px and 768px widths:
- Hero stacks vertically
- Architecture diagram scales via viewBox
- Mobile menu has gold accents
- Particles hidden on mobile (below 768px)

- [ ] **Step 3: Check reduced motion**

In browser devtools, enable "prefers-reduced-motion: reduce".
Expected: Particles hidden, Tesseract grid hidden, Architecture diagrams static (replay button still works).

- [ ] **Step 4: Fix any visual issues found**

Apply targeted CSS fixes as needed.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "fix: final visual polish and responsive QA for Tesseract redesign"
```
