# DESIGN SYSTEM

This file defines the design tokens, component conventions, and visual language for **this project**.

## Aesthetic Direction

**Theme**: Code-editor noir with sharp monospace typography and electric blue accents

**Tone**: Technical, direct, slightly rebellious

**Memorable differentiator**: Browser-window portfolio mockups inside a hand-coded studio aesthetic rather than a generic agency layout

**Light / Dark**: System-adaptive

## Color Tokens

```css
:root {
  --color-bg:            #0a0c12;
  --color-bg-subtle:     #10121a;
  --color-surface:       #181b26;

  --color-text-primary:   #9ea5cc;
  --color-text-secondary: #5a618a;
  --color-text-disabled:  #353a5c;
  --color-text-inverse:   #dde3f8;

  --color-accent:         #4a7fd4;
  --color-accent-hover:   #7aa8f0;
  --color-accent-muted:   #152140;

  --color-success:  #27ae60;
  --color-warning:  #c48b2d;
  --color-error:    #c44747;
  --color-info:     #4a7fd4;

  --color-border:         #242840;
  --color-border-strong:  #c8d0e8;
}
```

## Typography

```css
:root {
  --font-display: 'IBM Plex Mono', monospace;
  --font-body:    'JetBrains Mono', monospace;
  --font-mono:    'Fira Code', monospace;
}
```

**Import source**: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;600;700&family=Fira+Code:wght@300;400;500&display=swap`

## Spacing Scale

```css
:root {
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-5:  1.25rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
}
```

## Border, Radius, Elevation

```css
:root {
  --radius-sm: 2px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-full: 9999px;

  --border-thin:   1px solid var(--color-border);
  --border-medium: 2px solid var(--color-border);
  --border-strong: 2px solid var(--color-border-strong);

  --shadow-sm: 0 8px 24px rgba(74, 127, 212, 0.08);
  --shadow-md: 0 16px 48px rgba(74, 127, 212, 0.12);
  --shadow-lg: 0 20px 56px rgba(10, 12, 18, 0.3);
  --shadow-xl: 0 0 0 2px rgba(122, 168, 240, 0.5);
}
```

## Motion

```css
:root {
  --duration-fast:   150ms;
  --duration-base:   250ms;
  --duration-slow:   400ms;
  --duration-slower: 700ms;

  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in:      cubic-bezier(0.4, 0, 1, 1);
  --ease-out:     cubic-bezier(0, 0, 0.2, 1);
  --ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

Always wrap non-essential animation in `prefers-reduced-motion`.

## Breakpoints

```css
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
```

## Component Patterns

### Primary CTA
- **Used for**: Hero and pricing conversion actions
- **Variants**: `nav-cta`, `btn-primary`, `form-submit`
- **Key tokens used**: `--color-accent`, `--color-accent-hover`, `--font-body`, `--radius-sm`
- **Accessibility notes**: Preserve visible focus and 44px minimum target size.
- **Do / Don't**: Use one dominant accent action per section. Do not place multiple competing primary actions side by side.

### Portfolio Card
- **Used for**: Work previews and mockup navigation
- **Variants**: `wide`, standard linked card
- **Key tokens used**: `--color-bg-subtle`, `--color-text-inverse`, `--color-accent-hover`, `--shadow-md`
- **Accessibility notes**: Linked cards must reveal their overlay content on focus, not only hover.
- **Do / Don't**: Keep mock-browser previews abstract and legible. Do not hide essential information behind pointer-only interactions.

### Section Header
- **Used for**: Services, portfolio, FAQ, contact section intros
- **Variants**: dark-section, light-section
- **Key tokens used**: `--font-display`, `--color-accent`, `--color-accent-hover`, `--space-16`
- **Accessibility notes**: Preserve a logical heading level per section and maintain eyebrow contrast above 3:1.
- **Do / Don't**: Keep the eyebrow short and meaningful. Do not use headers as decorative filler.

## Icon System

- **Library**: Custom text symbols and inline decorative glyphs
- **Default size**: `1rem` to `1.25rem`
- **Stroke width**: Not applicable
- **Usage rule**: Standalone icon-only controls require an accessible label. Decorative glyphs stay `aria-hidden`.

## Grid & Layout

- **Max content width**: `1200px`
- **Page gutter (mobile)**: `20px`
- **Page gutter (desktop)**: `56px`
- **Column system**: CSS Grid with alternating one-column and two-column sections

## Notes & Decisions Log

| Date | Decision | Reason |
|------|----------|--------|
| 2026-03-10 | Portfolio cards that link to real mockups must use visible focus treatment. | Hover-only disclosure fails keyboard users. |
| 2026-03-10 | Captain Dave's mockup uses Merriweather + Libre Franklin, not Inter. | AGENTS forbids Inter and the mockup needs a more characterful pairing. |
