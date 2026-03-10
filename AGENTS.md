# AGENTS

## Frontend Design

### Core Principles

Every design should be **unique, intentional, and unforgettable**. Do not reference, borrow from, or build upon any prior designs or websites created in previous conversations. Each project is a blank slate - fresh aesthetic, fresh palette, fresh layout logic.

Mockups and templates must also be visually and structurally distinct from the main NotFound site in this repo (`/index.html`, `/styles.css`, `/app.js`). Do not reuse its layout system, section sequencing, motion language, typography stack, component styling, browser-mockup treatment, or a "same site with different colors" approach.

---

### Design Thinking (Do This First)

Before writing any code, commit to a clear aesthetic direction by answering:

- **Purpose**: What problem does this interface solve? Who is the user?
- **Tone**: Pick a bold direction and own it fully. Examples: brutally minimal, maximalist editorial, retro-futuristic, luxury/refined, organic/natural, playful, industrial/utilitarian, art-deco geometric, brutalist/raw. Never default to "clean and modern" without specificity.
- **Differentiator**: What is the ONE thing a user will remember about this design?
- **Constraints**: Note any framework, performance, or technical requirements upfront.

---

### Visual Design Standards

**Typography**
- Choose fonts that are distinctive, characterful, and unexpected. Pair a strong display font with a refined body font.
- Never use: Inter, Roboto, Arial, or generic system fonts.
- Google Fonts, Adobe Fonts, and variable fonts are all valid sources - choose based on what serves the aesthetic.

**Color & Theme**
- Use CSS custom properties (`--var`) for all palette values.
- Commit to a dominant color story with sharp contrast accents. Avoid timid, evenly-distributed palettes.
- Vary freely between light and dark themes across projects - never default to one.

**Layout & Composition**
- Use unexpected spatial arrangements: asymmetry, diagonal flow, overlapping elements, grid-breaking heroes.
- Apply generous negative space OR controlled density - never aimless middle ground.
- Responsive behavior must be built in from the start, not retrofitted.

**Motion & Interaction**
- Prefer CSS-only animations in HTML. Use the Motion library when building in React.
- Prioritize high-impact moments: a well-orchestrated page load with staggered reveals beats scattered micro-interactions.
- Hover states should surprise. Scroll-triggered reveals should feel earned.

**Backgrounds & Atmosphere**
- Create depth with gradient meshes, noise textures, layered transparencies, geometric patterns, or grain overlays.
- Match the background atmosphere to the overall aesthetic tone - do not default to flat solid colors.

---

### Accessibility (High Priority)

Accessibility is a first-class concern, not an afterthought. Full requirements and a pre-ship checklist live in [`ACCESSIBILITY_CHECKLIST.md`](./ACCESSIBILITY_CHECKLIST.md). The non-negotiable minimums are:

- Use semantic HTML before reaching for ARIA.
- All text meets WCAG AA contrast (4.5:1 body, 3:1 large text and UI components).
- Every interactive element is keyboard-reachable and operable.
- Focus indicators are always visible - never remove `outline` without a replacement.
- All meaningful images have descriptive `alt` text; decorative images use `alt=""`.
- All animations respect `@media (prefers-reduced-motion: reduce)`.
- Every form input has a programmatically associated `<label>`.

Before marking any page or component done, work through `ACCESSIBILITY_CHECKLIST.md` in full.

---

### SEO (High Priority)

Every page should be optimized for discoverability. Full requirements and a pre-launch checklist live in [`SEO_CHECKLIST.md`](./SEO_CHECKLIST.md). The non-negotiable minimums are:

- One unique `<title>` and `<meta name="description">` per page.
- One `<h1>` per page; logical heading hierarchy with no skipped levels.
- `<link rel="canonical">` on every production page.
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) on every page.
- Semantic landmark regions (`<header>`, `<main>`, `<footer>`, `<nav>`).
- All images have descriptive `alt` text and are appropriately sized.
- Structured data (JSON-LD) added for any page type that qualifies (articles, products, events, local business, FAQs).

Before launching any page, work through `SEO_CHECKLIST.md` in full.

---

### Design Tokens & Component Patterns

At the start of each project, populate [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) with the color tokens, typography choices, spacing scale, and component patterns for that project. Once populated, all generated UI must use only the tokens defined there - no ad-hoc hex values or arbitrary spacing. Update `DESIGN_SYSTEM.md` whenever new patterns are introduced.

---

### What to Avoid

- Generic "AI slop" aesthetics: purple gradients on white, card grids with rounded corners and drop shadows, hero sections with a centered headline and a CTA button
- Reusing font pairings, color palettes, or layout patterns from previously generated designs
- Reusing the NotFound site's structure or motifs for mockups/templates: fixed developer-style nav, code/editor aesthetic, glowing orb hero, marquee strip, browser-window portfolio cards, stacked metric cards, or the same section rhythm with only a palette swap
- Defaulting to Space Grotesk, Poppins, or other overused choices
- Placeholder accessibility (e.g., `alt="image"`, unlabeled icon buttons)
- SEO afterthoughts (missing meta, non-semantic structure, heading chaos)
