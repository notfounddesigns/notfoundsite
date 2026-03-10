# ACCESSIBILITY CHECKLIST

Use this checklist before marking any page, component, or feature as complete. Work through each section systematically. Items marked **[BLOCKER]** must pass before shipping — they represent WCAG 2.1 AA failures or critical UX barriers.

---

## 1. Document & Page Structure

- [ ] **[BLOCKER]** Page has a descriptive `<title>` that reflects the current content/state
- [ ] **[BLOCKER]** One `<h1>` per page; heading hierarchy is logical with no skipped levels
- [ ] **[BLOCKER]** `<html lang="">` attribute is set to the correct language code (e.g. `lang="en"`)
- [ ] Landmark regions are present: `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] Multiple nav elements use `aria-label` to distinguish them (e.g. "Primary", "Footer")
- [ ] Page has a "Skip to main content" link as the first focusable element
- [ ] Document uses semantic HTML before reaching for ARIA

---

## 2. Color & Contrast

- [ ] **[BLOCKER]** Normal text (< 18pt / 14pt bold) meets 4.5:1 contrast ratio against its background
- [ ] **[BLOCKER]** Large text (≥ 18pt / 14pt bold) meets 3:1 contrast ratio
- [ ] **[BLOCKER]** UI components and graphical objects (icons, form borders, chart lines) meet 3:1 contrast
- [ ] **[BLOCKER]** Information is never conveyed by color alone — always paired with text, pattern, or icon
- [ ] Focus indicators meet 3:1 contrast against adjacent colors
- [ ] Test passes in both light and dark modes if both are supported

**Tools**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/), browser DevTools, Colour Contrast Analyser

---

## 3. Keyboard Navigation

- [ ] **[BLOCKER]** Every interactive element is reachable via `Tab` key
- [ ] **[BLOCKER]** Every interactive element is operable via keyboard (Enter, Space, Arrow keys as appropriate)
- [ ] **[BLOCKER]** No keyboard traps — focus can always be moved away from any component
- [ ] Tab order follows a logical, predictable visual sequence
- [ ] Custom interactive widgets (dropdowns, modals, accordions, carousels) implement correct keyboard patterns per [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [ ] Modal dialogs trap focus within themselves while open and restore focus on close
- [ ] Dropdown menus close on `Escape`
- [ ] No functionality is only accessible via mouse events (`hover`, `mouseenter`, `mouseleave`) without keyboard equivalents

---

## 4. Focus Management

- [ ] **[BLOCKER]** All interactive elements have a visible focus indicator (never `outline: none` without a replacement)
- [ ] Focus ring is visually distinct: minimum 2px solid outline, 3:1 contrast against surroundings
- [ ] After opening a modal or dialog, focus moves into it
- [ ] After closing a modal or dialog, focus returns to the triggering element
- [ ] After page navigation (SPA), focus moves to a logical starting point (e.g. `<h1>` or skip link)
- [ ] Dynamically injected content (toasts, alerts, live regions) is announced without stealing focus unnecessarily

---

## 5. Images & Media

- [ ] **[BLOCKER]** All meaningful `<img>` elements have a descriptive `alt` attribute
- [ ] **[BLOCKER]** Decorative images use `alt=""` and/or `role="presentation"`
- [ ] SVG icons used as interactive controls have `aria-label` or visually-hidden text
- [ ] Complex images (charts, diagrams, infographics) have an extended description nearby or via `aria-describedby`
- [ ] Video content has captions (auto-generated captions do not count — must be reviewed)
- [ ] Audio content has a transcript
- [ ] Autoplaying media can be paused, stopped, or muted by the user
- [ ] No content flashes more than 3 times per second (seizure risk)

---

## 6. Forms

- [ ] **[BLOCKER]** Every form input has a programmatically associated `<label>` (via `for`/`id` or wrapping)
- [ ] **[BLOCKER]** Required fields are indicated both visually and programmatically (`aria-required="true"` or `required`)
- [ ] **[BLOCKER]** Error messages are specific, visible, and associated with the relevant input via `aria-describedby`
- [ ] Placeholder text is not used as a substitute for a label
- [ ] Inline validation does not remove the error message before the user has corrected the field
- [ ] `autocomplete` attributes are set appropriately on personal data fields (name, email, address, etc.)
- [ ] Fieldsets with related inputs use `<fieldset>` and `<legend>`
- [ ] Form submission errors are announced via a live region or by moving focus to the error summary

---

## 7. ARIA Usage

- [ ] ARIA roles, states, and properties are only used when native HTML cannot achieve the same result
- [ ] `aria-label` and `aria-labelledby` are present on all interactive elements that lack visible text labels
- [ ] Live regions (`aria-live`, `role="alert"`, `role="status"`) are used for dynamic content updates
- [ ] `aria-expanded` is toggled correctly on accordions, dropdowns, and disclosure components
- [ ] `aria-hidden="true"` is applied to decorative icons and elements that should be invisible to screen readers
- [ ] No ARIA attributes contradict the element's native semantics (e.g. `role="button"` on an `<a>`)
- [ ] Comboboxes, listboxes, trees, and grids implement the full ARIA pattern per the APG

---

## 8. Motion & Animation

- [ ] **[BLOCKER]** All non-essential animations respect `@media (prefers-reduced-motion: reduce)`
- [ ] No content auto-scrolls, moves, or updates for more than 5 seconds without a pause/stop control
- [ ] Parallax effects are disabled or significantly reduced under `prefers-reduced-motion`
- [ ] Loading spinners and skeleton screens do not cause layout shifts that disorient users

---

## 9. Touch & Pointer

- [ ] All touch targets are at least 44×44px (WCAG 2.5.5 recommended minimum)
- [ ] Interactive elements have sufficient spacing so adjacent targets are not accidentally activated
- [ ] No functionality relies solely on multi-finger gestures without a single-pointer alternative
- [ ] Hover-only tooltips have a keyboard-accessible equivalent (e.g. focus trigger)

---

## 10. Screen Reader Smoke Test

Run through these manually with a screen reader (VoiceOver on macOS/iOS, NVDA on Windows, or TalkBack on Android):

- [ ] Page title is announced correctly on load
- [ ] Heading structure makes sense when navigating by headings alone
- [ ] All images have meaningful or empty alt text (no "image" or filename)
- [ ] Form labels are read before their inputs
- [ ] Error messages are associated with their fields and announced
- [ ] Modal open/close behavior is announced
- [ ] Dynamic content updates (alerts, toasts, live regions) are announced
- [ ] Interactive elements communicate their role and state (e.g. "button", "collapsed", "checked")

---

## Quick Reference: WCAG 2.1 AA Key Criteria

| Criterion | Requirement |
|-----------|-------------|
| 1.1.1 | Non-text content has text alternative |
| 1.3.1 | Info and relationships conveyed through structure |
| 1.4.3 | Normal text: 4.5:1 contrast |
| 1.4.4 | Text resizes to 200% without loss of content |
| 1.4.11 | UI components: 3:1 contrast |
| 2.1.1 | All functionality available from keyboard |
| 2.1.2 | No keyboard traps |
| 2.4.3 | Logical focus order |
| 2.4.7 | Visible focus indicator |
| 3.3.1 | Error identification |
| 3.3.2 | Labels or instructions for inputs |
| 4.1.2 | Name, role, value for all UI components |
| 4.1.3 | Status messages communicated to assistive tech |