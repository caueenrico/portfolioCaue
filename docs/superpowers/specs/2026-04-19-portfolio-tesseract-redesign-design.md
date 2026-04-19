# Portfolio Tesseract Redesign — Design Spec

## Overview

Full visual redesign of Cauê Enrico's portfolio with an **Interstellar Tesseract (5th Dimension)** aesthetic. The theme transforms the visual layer — backgrounds, colors, animations, effects — while keeping all content strictly professional. A new **"Arquitetura em Ação"** section showcases animated AWS architecture diagrams. Interactive **easter eggs** add retro gaming surprises for curious visitors.

**Tech stack**: Next.js 13 + Stitches + TypeScript (unchanged).

---

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `bg` | `#000000` | Page background (pure black) |
| `bgSurface` | `#050508` | Alternate section background |
| `bgCard` | `#0A0A12` | Card/content backgrounds |
| `gold` | `#E8A838` | Primary accent (Tesseract lines, borders, hovers) |
| `goldDim` | `rgba(232,168,56,0.15)` | Subtle gold (grid lines, partículas) |
| `goldGlow` | `rgba(232,168,56,0.4)` | Glow effects |
| `cyan` | `#00D2DF` | Secondary accent (compute nodes, links) |
| `cyanDim` | `rgba(0,210,223,0.15)` | Subtle cyan |
| `text1` | `#F0F0F5` | Primary text |
| `text2` | `#9090A8` | Secondary text |
| `text3` | `#5C5C70` | Muted text |
| `border` | `rgba(232,168,56,0.08)` | Default borders |
| `borderHover` | `rgba(232,168,56,0.25)` | Hover borders |

**Fonts**: Unchanged — Syne (headings), DM Sans (body), DM Mono (labels/code).

---

## Global Visual Changes

### Tesseract Grid Background

A perspective CSS grid rendered as a pseudo-element on the page body:
- Lines in `goldDim` forming a receding 3D grid
- `perspective: 800px` + `rotateX(60deg)` on a full-width/height element
- Subtle parallax on scroll (CSS `transform` driven by scroll position via a lightweight JS listener — no heavy libraries)
- Covers the full page, fixed position, `z-index: -1`

### Floating Data Particles

CSS-only animated elements scattered across the page:
- Small monospace text fragments: binary (`01100`, `10011`), tech keywords (`async`, `deploy`, `lambda`)
- `position: fixed`, various sizes (7-10px), low opacity (`0.1-0.3`)
- Animated with `@keyframes` — slow drift (30-60s cycle), slight rotation
- 10-15 particles max for performance
- `pointer-events: none` so they don't interfere with interaction

### Scrollbar

Custom scrollbar thumb in gold gradient (replacing current cyan).

### Selection Color

Text selection highlight in `gold` with dark text.

---

## Sections

### 1. Header

- **Structure**: Unchanged (fixed, glassmorphic with backdrop blur)
- **Visual changes**:
  - Logo "CE." color: `gold` (was `cyan`)
  - Bottom border: `1px solid rgba(232,168,56, 0.1)` on scroll
  - Nav link hover: gold underline instead of cyan
  - Mobile menu: gold accents

### 2. Hero

- **Structure**: Same two-column layout (text left, portrait right)
- **Visual changes**:
  - Remove current floating cyan orbs
  - Tesseract grid is the background (global, visible here)
  - Shimmer gradient on "Arquiteto de Software": gold-to-cyan gradient (was cyan-only)
  - Availability badge pulse: gold dot
  - Tech stack badges: border `goldDim`, hover glow `goldGlow`
  - CTA primary (LinkedIn): gold background, dark text
  - CTA secondary: gold border outline
  - Portrait ring animation: gold rings pulsing outward (was cyan)
  - Keep staggered reveal animations and scan line

### 3. Sobre (About)

- **Structure**: Unchanged (two columns: text + value cards)
- **Visual changes**:
  - Section borders: gold tint
  - Value cards: `bgCard` background, `border` border, hover → `borderHover` + `goldGlow` box-shadow
  - Recognition badge: keep gold (already matches)
  - Card icons: gold color

### 4. Arquitetura em Ação (NEW SECTION)

**Position**: After "Sobre", before "Trajetória".

**Layout**:
- Section title: "Arquitetura em Ação"
- Subtitle: "Veja como eu projeto sistemas — diagramas montados em tempo real"
- Tab bar with 3 tabs: `Microservices`, `Event-Driven`, `CI/CD Pipeline`
- Canvas area (bordered container, `bgCard` background) displaying the active diagram
- Bottom: progress indicator ("assembling... 4/7 nodes") + play/replay button

**Tab Styling**:
- Active tab: `gold` background at 10% opacity, gold border, gold text
- Inactive tabs: transparent, subtle border, muted text
- Tab switch: brief pixel-glitch transition effect (easter egg, see below)

**Diagram Rendering** (SVG-based):
- Each diagram is an SVG with `<rect>` nodes and `<line>` connections
- Nodes styled as rounded rectangles with monospace labels (service name + type)
- Color coding: gold borders for infrastructure services (Route 53, S3, SQS, RDS), cyan borders for compute services (Lambda, ECS, EC2)
- Each node has an AWS-style icon placeholder (simple geometric shape, not actual AWS logos to avoid trademark issues)

**Animation Sequence** (triggered when section enters viewport via IntersectionObserver):
1. Nodes appear one by one with `fadeIn + scale(0.5→1)` — 0.5s each, staggered 0.4s apart
2. After each pair of connected nodes exists, the connection line draws itself via `stroke-dashoffset` animation — 0.8s duration
3. After all nodes placed, a subtle pulse glow loops on all nodes
4. Progress text updates as each node appears ("1/7 nodes", "2/7 nodes"...)
5. On completion: brief gold flash on the canvas border

**Replay**: Button resets all animation classes and replays from start.

**Three Diagrams**:

1. **Microservices**: Route 53 → API Gateway → Lambda (.NET 8) → DynamoDB, with CloudFront → S3 branch
2. **Event-Driven**: API Gateway → SQS → Lambda → SNS → (fan-out to: Lambda, SES, CloudWatch)
3. **CI/CD Pipeline**: GitHub → CodePipeline → CodeBuild → ECR → ECS Fargate → CloudWatch, with S3 artifacts branch

Each diagram: 5-8 nodes, 4-7 connections. Simple enough to read, complex enough to impress.

### 5. Trajetória (Experience Timeline)

- **Structure**: Unchanged (vertical timeline)
- **Visual changes**:
  - Timeline accent line: gold (was cyan)
  - Timeline dots: gold with gold glow on hover
  - Featured badge "Reconhecido em 2024": keep gold (already matches)
  - Tech tags: gold border, gold text dim
  - Card borders: `border` default, `borderHover` on hover

### 6. Capacidades (Skills)

- **Structure**: Unchanged (3-column grid, 6 skill groups)
- **Visual changes**:
  - Group header icons: gold
  - Skill tags: `bgCard` background, `border` border
  - Hover: gold border + subtle gold glow

### 7. Certificados (Certificates Carousel)

- **Structure**: Unchanged (infinite horizontal scroll)
- **Visual changes**:
  - Card category label: gold
  - Card border: `border`, hover → `borderHover`
  - Scroll pause on hover: unchanged

### 8. Educação & Contato

- **Structure**: Unchanged (two columns)
- **Visual changes**:
  - Education list markers: gold
  - Contact icons: gold
  - Contact links hover: gold underline

### 9. Footer

- **Structure**: Unchanged
- **Visual changes**:
  - Logo "CE.": gold
  - Social link hover: gold
  - Copyright text: `text3`

---

## Easter Eggs

### Konami Code (↑↑↓↓←→←→BA)

- **Trigger**: Keyboard sequence detected via `keydown` listener
- **Effect**: "Pixel Dimension" mode activates for 10 seconds:
  - CSS filter `pixelate` simulated via SVG filter on `<html>` element (using `<feFlood>` + low-res scaling trick)
  - CRT scan lines overlay (repeating-linear-gradient, semi-transparent)
  - Screen briefly shakes (CSS `transform` animation, 200ms)
  - Optional: short chiptune sound (Web Audio API, synthesized — no external audio files)
- **Exit**: Auto-deactivates after 10 seconds with a fade-out
- **Implementation**: Single event listener on `document`, tracking last 10 keys

### Pixel Cursor on Shift Hold

- **Trigger**: `keydown`/`keyup` on Shift key
- **Effect**: `cursor: url('data:image/...')` — a 16x16 pixel art crosshair cursor encoded as base64 data URI
- **Revert**: On Shift release, cursor returns to default
- **Implementation**: Toggle a CSS class on `<html>`

### Glitch on Architecture Tab Switch

- **Trigger**: Clicking a tab in the "Arquitetura em Ação" section
- **Effect**: 80ms glitch animation on the canvas:
  - Brief RGB channel split (CSS `text-shadow` with offset red/blue)
  - 2-3 horizontal displacement bars (pseudo-elements with `clip-path`)
  - Pixel noise overlay (tiny repeating background pattern)
- **Implementation**: CSS animation class added on tab click, removed after `animationend`

### Logo Chiptune Click

- **Trigger**: Clicking the "CE." logo in the header
- **Effect**: Short 8-bit beep sound (100ms)
- **Implementation**: Web Audio API — `OscillatorNode` with square wave, frequency sweep 440→880Hz over 100ms. No audio files needed.
- **Note**: Sound only plays after user has interacted with the page (browser autoplay policy)

---

## Animation Performance Guidelines

- All continuous animations use `transform` and `opacity` only (GPU-composited)
- Floating particles: `will-change: transform` on each particle element
- Tesseract grid: single fixed pseudo-element, no repaints on scroll (parallax via `transform: translateY()` driven by `requestAnimationFrame`)
- Architecture SVG animations: triggered once via IntersectionObserver, not looping (except final subtle pulse)
- Easter egg effects: short-lived (80ms-10s), cleanup after completion
- Total continuous animated elements: ~20 (15 particles + grid + portrait rings + availability pulse)
- `prefers-reduced-motion` media query: disable floating particles, grid parallax, and auto-playing architecture animations. Keep static layout and manual replay button.

---

## Responsive Behavior

No structural changes to responsive breakpoints. Visual additions adapt:

- **Tesseract grid**: Reduces line count on mobile (fewer grid lines)
- **Floating particles**: Hidden below 768px (`display: none` at `bp2`)
- **Architecture section**: 
  - Tabs stack horizontally with scroll on mobile
  - Diagram SVG scales via `viewBox` (responsive by nature)
  - Nodes may show abbreviated labels on very small screens
- **Easter eggs**: Konami code works on desktop only (keyboard required). Other easter eggs remain functional.

---

## Files to Modify

1. `src/styles/index.ts` — Update Stitches theme colors (gold palette)
2. `src/styles/global.ts` — Tesseract grid background, particles, scrollbar, selection color, pixel cursor class
3. `src/styles/styles.ts` — Hero, About, Education/Contact styled components (color updates)
4. `src/components/header/styles.ts` — Gold accents
5. `src/components/header/index.tsx` — Logo click sound handler
6. `src/components/experiencia/styles.ts` — Gold timeline
7. `src/components/experiencia/index.tsx` — Minor color updates if hardcoded
8. `src/components/capacidades/` — Gold skill tags (styles update)
9. `src/components/certificados/` — Gold card accents (styles update)
10. `src/components/footer/styles.ts` — Gold accents
11. `src/components/footer/footer.tsx` — Minor updates if needed
12. `src/components/menuMobile/styles.ts` — Gold accents
13. `src/pages/index.tsx` — Add Arquitetura section, easter egg scripts
14. **NEW**: `src/components/arquitetura/index.tsx` — Architecture animation component
15. **NEW**: `src/components/arquitetura/styles.ts` — Architecture section styles
16. **NEW**: `src/components/arquitetura/diagrams.ts` — SVG diagram data (nodes + connections for each tab)
17. **NEW**: `src/components/easterEggs/index.tsx` — Easter egg hooks/logic (Konami, cursor, sound)
18. `src/pages/_document.tsx` — No changes expected (fonts already correct)

---

## Out of Scope

- No changes to text content (names, descriptions, experience entries, skills lists)
- No changes to the projects section (currently commented out — stays commented out)
- No new npm dependencies (all effects achievable with CSS + Web Audio API + SVG)
- No SSR/build config changes
- No actual AWS logos/icons (trademark) — use simple geometric shapes with labels
