# SEO CHECKLIST

Use this checklist before launching any page or feature. Items marked **[BLOCKER]** are critical for indexability or represent high-impact ranking signals that should never be skipped.

---

## 1. Indexability & Crawlability

- [ ] **[BLOCKER]** `robots.txt` exists at the root and does not accidentally block important pages or assets
- [ ] **[BLOCKER]** Pages intended for indexing are not blocked by `noindex` meta tag or `X-Robots-Tag` header
- [ ] **[BLOCKER]** XML sitemap exists and is submitted to Google Search Console and Bing Webmaster Tools
- [ ] Sitemap is referenced in `robots.txt`
- [ ] Sitemap only includes canonical, indexable URLs (no 301s, 404s, or noindexed pages)
- [ ] Pages behind authentication are excluded from the sitemap
- [ ] Crawl depth to important pages is ≤ 3 clicks from the homepage

---

## 2. Canonical & URL Structure

- [ ] **[BLOCKER]** Every page has a `<link rel="canonical" href="...">` pointing to the preferred URL
- [ ] **[BLOCKER]** Canonical URLs use HTTPS
- [ ] Trailing slash usage is consistent across the site
- [ ] `www` vs non-`www` is consistent and the alternate redirects to the preferred version
- [ ] URL slugs are lowercase, hyphen-separated, and descriptive (no `?id=123` patterns for content pages)
- [ ] Paginated pages use `rel="next"` / `rel="prev"` or a canonical pointing to the main series page
- [ ] No duplicate content across multiple accessible URLs without canonicalization

---

## 3. Title Tags

- [ ] **[BLOCKER]** Every page has a unique `<title>` tag
- [ ] **[BLOCKER]** Title is 50–60 characters to avoid truncation in SERPs
- [ ] Primary keyword appears near the beginning of the title
- [ ] Brand name is included (typically appended: `Page Name | Brand`)
- [ ] Titles are written for humans, not just keyword-stuffed

---

## 4. Meta Descriptions

- [ ] Every page has a unique `<meta name="description">` tag
- [ ] Description is 140–160 characters
- [ ] Description accurately summarizes the page and includes a compelling reason to click
- [ ] No duplicate meta descriptions across pages

---

## 5. Open Graph & Social Meta

- [ ] `og:title` is set
- [ ] `og:description` is set
- [ ] `og:image` is set — image is at least 1200×630px
- [ ] `og:url` matches the canonical URL
- [ ] `og:type` is set (`website`, `article`, `product`, etc.)
- [ ] `twitter:card` is set (`summary_large_image` preferred)
- [ ] `twitter:title`, `twitter:description`, `twitter:image` are set
- [ ] OG tags validated via [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 6. Heading Structure

- [ ] **[BLOCKER]** Each page has exactly one `<h1>` that clearly describes the page topic
- [ ] Heading hierarchy is logical: `h1 → h2 → h3` with no skipped levels
- [ ] Primary keyword appears in the `<h1>`
- [ ] Headings are descriptive enough to make sense out of context (screen reader / outline view)
- [ ] Headings are not used purely for visual styling — CSS handles styling, HTML handles meaning

---

## 7. Content Quality

- [ ] Page has a clear primary topic and does not try to rank for too many unrelated keywords
- [ ] Body content is substantive and original (not duplicated from other pages or external sources)
- [ ] Content is structured with headings, short paragraphs, and lists where appropriate
- [ ] Internal links use descriptive anchor text — no "click here" or "read more"
- [ ] Outbound links to authoritative sources open appropriately (consider `rel="noopener"`)
- [ ] Thin pages (< 300 words) are either improved, consolidated, or noindexed

---

## 8. Images

- [ ] **[BLOCKER]** All `<img>` elements have descriptive `alt` attributes (decorative images use `alt=""`)
- [ ] Image filenames are descriptive and hyphen-separated (e.g. `red-running-shoes.webp`, not `IMG_4832.jpg`)
- [ ] Images are served in modern formats (WebP preferred; AVIF where supported)
- [ ] Images are sized appropriately — no serving a 3000px image for a 400px slot
- [ ] `width` and `height` attributes are set on `<img>` to prevent layout shift (CLS)
- [ ] Hero and above-the-fold images are not lazy-loaded (`loading="eager"` or omit the attribute)
- [ ] Below-the-fold images use `loading="lazy"`

---

## 9. Structured Data (Schema Markup)

Add JSON-LD schema appropriate to the page type. Validate with [Google Rich Results Test](https://search.google.com/test/rich-results).

- [ ] Homepage: `Organization` or `WebSite` schema with `SearchAction` (Sitelinks Searchbox)
- [ ] Article / Blog post: `Article` or `BlogPosting` with `datePublished`, `dateModified`, `author`
- [ ] Product page: `Product` with `offers`, `aggregateRating`
- [ ] Local business: `LocalBusiness` with address, phone, hours, geo coordinates
- [ ] Event: `Event` with date, location, offers
- [ ] FAQ page: `FAQPage` with `Question` and `Answer` pairs
- [ ] Breadcrumbs: `BreadcrumbList` on all pages with breadcrumb navigation
- [ ] No structured data is marked up for content that isn't visible on the page

---

## 10. Core Web Vitals & Performance

Test with [PageSpeed Insights](https://pagespeed.web.dev/) or Lighthouse.

- [ ] **[BLOCKER]** Largest Contentful Paint (LCP): ≤ 2.5s
- [ ] **[BLOCKER]** Cumulative Layout Shift (CLS): ≤ 0.1
- [ ] Interaction to Next Paint (INP): ≤ 200ms
- [ ] First Contentful Paint (FCP): ≤ 1.8s
- [ ] Time to First Byte (TTFB): ≤ 800ms
- [ ] Render-blocking resources are minimized (defer/async JS, inline critical CSS)
- [ ] Fonts use `font-display: swap` to prevent invisible text during load
- [ ] Server responses use compression (gzip or Brotli)
- [ ] Static assets are cached with appropriate `Cache-Control` headers
- [ ] Third-party scripts (analytics, chat widgets) are loaded asynchronously

---

## 11. Mobile & HTTPS

- [ ] **[BLOCKER]** Site is served entirely over HTTPS — no mixed content
- [ ] **[BLOCKER]** Site is mobile-friendly — passes [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Viewport meta tag is present: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Tap targets are at least 48×48px with adequate spacing
- [ ] No horizontal scrolling on mobile at standard viewport widths
- [ ] Font sizes are legible on mobile without zooming (minimum 16px for body)

---

## 12. Internationalization (if applicable)

- [ ] `hreflang` attributes are set correctly for all language/region variants
- [ ] Each `hreflang` page references all other alternates including itself
- [ ] `x-default` is set for the default language fallback
- [ ] URLs for alternate languages use consistent structure (subdomain, subdirectory, or ccTLD)
- [ ] Localized pages have fully translated content — not just translated UI with English body copy

---

## 13. Google Search Console

- [ ] Property is verified in Google Search Console
- [ ] XML sitemap is submitted
- [ ] No manual actions or security issues reported
- [ ] Core Web Vitals report reviewed
- [ ] Coverage report has no unexpected excluded or errored pages
- [ ] Rich Results report checked for schema eligibility

---

## Quick Reference: Common Issues to Avoid

| Issue | Impact |
|-------|--------|
| Missing or duplicate title tags | High — direct ranking signal |
| Missing canonical tags | High — duplicate content dilutes ranking |
| Blocked by robots.txt | Critical — page won't be indexed |
| Slow LCP | High — direct ranking signal on mobile |
| CLS > 0.1 | Medium-High — ranking signal + UX degradation |
| Missing alt text | Medium — image search visibility + accessibility |
| No structured data on eligible pages | Medium — missed rich result opportunities |
| HTTP pages | High — trust signal, browser warnings |
| Non-descriptive anchor text | Medium — internal link equity distribution |