# CRA-ENG Phase 4C Launch Preparation Report

**Phase:** 4C — Launch Preparation  
**Date:** July 27, 2026  
**Scope:** Technical launch preparation only; no redesign, marketing copy rewrite, CSS change, JavaScript change, or hero-system change.

## Executive Assessment

The website structure is substantially prepared for launch. Structured data, an endpoint-ready project inquiry form, and a branded 404 page are now implemented. Static accessibility checks passed for the Phase 4 public pages.

The site is **not yet production-ready** because the approved hero and Open Graph assets have not been supplied, the project form has no submission endpoint, and final browser/device testing plus production-domain validation remain outstanding.

## 1. Schema Implementation Status

### Organization schema — implemented

Added once on `index.html` as JSON-LD with:

- CRA-ENG name and organization identity
- Canonical website URL
- Existing logo reference: `https://www.cra-eng.com/images/logo.png`
- Business description
- Available business email: `info@cra-eng.com`
- Shenzhen, China location
- Business-inquiry contact point and English language support

The Organization entity uses the stable ID `https://www.cra-eng.com/#organization` so other schema can reference it without duplicating the organization record.

### Service schema — implemented

Added once on `capabilities.html` and linked to the Organization entity. The offer catalog includes:

- China Execution Partner
- Supplier Development
- Prototype Coordination
- Production Quality Control
- Manufacturing Execution Support

The schema describes execution support without claiming that CRA-ENG is a factory or finished-equipment manufacturer.

### Breadcrumb schema — implemented

Breadcrumb JSON-LD was added to the 12 interior public pages:

- Why China Execution Partner
- Capabilities
- Markets
- Mobile Grooming Vehicle Components
- Specialty Vehicle Components
- Mobile Equipment Components
- Outdoor & Off-grid Equipment Components
- How We Execute
- About
- NDA & Confidentiality
- Case Studies
- Start a Project

Market-detail pages use `Home > Markets > Current Page`. The confidentiality page uses `Home > About > NDA & Confidentiality`. Other primary pages use `Home > Current Page`.

### Schema validation status

Local parsing confirmed:

- Every JSON-LD block is syntactically valid JSON.
- Every public page has exactly one schema block.
- No duplicate Organization or Service entities were inserted.
- `capabilities.html` uses one `@graph` block for Service and Breadcrumb data.

**Remaining validation:** Test the deployed URLs in Schema.org Validator and Google Rich Results Test after the production domain is serving the final files. Local JSON validation cannot confirm Google-specific eligibility or live URL accessibility.

## 2. Start a Project Form Status

`start-a-project.html` now contains the complete requested field structure:

- Name
- Company
- Email
- Website
- Product / Equipment Type
- Component or System
- Current Challenge
- Development Stage
- Timeline

Technical preparation completed:

- Every field has a stable, machine-friendly `name` value.
- Every control has a unique `id` and an explicitly associated `<label>`.
- Appropriate input types and autocomplete attributes are present.
- Required fields are marked with native HTML `required` validation.
- Development-stage options have explicit values.
- The former `mailto:` form action was removed.
- A `data-project-form` hook is available for a future integration.
- `data-submission-status="not-connected"` records the current technical state.

The submit button is intentionally disabled and the form note directs users to email until an external endpoint is selected. This prevents a misleading or lossy form submission before launch integration.

### Form work still required

Before enabling submission:

1. Select the submission service or server endpoint.
2. Add the endpoint to the form `action` or integrate it through approved JavaScript.
3. Add spam protection, such as a honeypot and provider-side rate limiting or CAPTCHA where appropriate.
4. Define success, validation-error, server-error, and offline states.
5. Add a privacy notice or link if personal data will be stored or processed.
6. Test keyboard-only submission, mobile input behavior, email delivery, reply-to handling, and failure recovery.
7. Remove `disabled` and `aria-disabled="true"` only after the endpoint is verified.

## 3. 404 Page Status

Created `404.html` using the current CRA-ENG system:

- Shared asynchronously loaded header and footer
- Existing typography, button, spacing, and core-page classes
- One H1: “Page Not Found”
- Clear explanation
- Return to Homepage CTA
- Start a Project CTA
- `noindex, follow` robots directive

No CSS or JavaScript changes were required.

**Deployment requirement:** Confirm the hosting platform serves `404.html` for unknown paths while returning an actual HTTP 404 status. A custom page returned with HTTP 200 would create a soft-404 SEO issue.

## 4. Accessibility Findings

### Passed static checks

All 13 Phase 4 public pages were checked.

- Exactly one H1 exists on every public page.
- No heading level skips were detected in the static page markup.
- All page-level `<img>` elements have `alt` attributes.
- The form has no unlabeled inputs, selects, or textareas.
- The navigation toggle is a native button with `aria-expanded`, `aria-controls`, and an accessible label.
- The primary navigation has an accessible name.
- Current-page navigation state is exposed with `aria-current="page"` by the existing script.
- Escape-key support exists for the mobile navigation and dropdown behavior.
- Navigation links meet the existing touch-target sizing rules.
- Global `:focus-visible` styling is present.
- Reduced-motion preferences are respected.
- The principal blue primary button (`#1E5A96` with white text) provides strong text contrast; the darker hover state increases contrast.

### Findings requiring live verification

- Header and footer are injected with JavaScript. Confirm they remain understandable during slow loading and define an operational fallback policy for JavaScript failure.
- Perform keyboard testing in a browser to confirm focus order, focus visibility, menu closing behavior, and that focus never becomes obscured by the fixed header.
- Test at 200% and 400% zoom for reflow and horizontal scrolling.
- Test with at least one desktop screen reader and VoiceOver or TalkBack on mobile.
- Verify decorative future hero backgrounds do not carry essential information, because CSS background images have no alternative text.
- When real assets are installed, review every content image and assign descriptive alt text or empty alt text based on purpose.
- The disabled form button correctly prevents submission now, but its full accessible success/error experience must be tested after integration.

## 5. Performance Findings

No performance code changes were made in this phase.

### Current strengths

- The main script is deferred.
- The site uses one shared stylesheet and one shared script.
- Responsive breakpoints and mobile stacking rules already exist.
- Reduced-motion support is present.
- Font origins use preconnect hints.
- Current local assets reviewed include a roughly 31 KB stylesheet, 5 KB script, 29 KB logo, and 329 KB existing home banner.

### Launch risks and recommendations

1. **Missing hero files — launch blocker.** `/images/hero/` contains no image files. Current CSS paths will cause failed image requests and display only the color/gradient fallback until all 13 approved hero files are supplied.
2. **Missing OG files — launch blocker for social previews.** `/images/og/` is empty. Create the assets specified by the Phase 4B plan and update page metadata to the appropriate final OG paths.
3. **Optimize final images.** Export hero images at appropriate desktop and mobile-ready resolutions, compress them, strip unnecessary metadata, and target practical file weights before upload. Consider modern formats with compatible fallbacks if the hosting workflow supports them.
4. **CSS background discovery.** Hero images referenced through CSS are discovered later than HTML images. After final assets exist, measure Largest Contentful Paint and consider selectively preloading only the above-the-fold hero for each page if measurement shows a benefit.
5. **Shared-fragment requests.** `header.html` and `footer.html` add two runtime requests and make navigation dependent on JavaScript. Keep them cached aggressively and confirm fragment-load behavior on the production host.
6. **Font loading.** Google Fonts is render-path work and introduces an external dependency. Confirm acceptable performance and regional availability; self-hosting can be considered in a later measured optimization pass.
7. **Caching and compression.** Configure Brotli or gzip for HTML, CSS, JS, XML, and JSON; use long-lived immutable caching for versioned image assets and shorter validation-based caching for HTML.
8. **Mobile validation.** Test the final site on real devices or throttled profiles for menu usability, input behavior, layout stability, and hero cropping.
9. **Measure before deeper optimization.** Run Lighthouse and WebPageTest against production, then prioritize LCP, CLS, INP, failed requests, and total transfer size based on evidence.

## 6. Files Created or Modified in Phase 4C

### Created

- `404.html`
- `CRA-phase4C-launch-preparation-report.md`

### Modified for structured data

- `index.html`
- `why-china-execution-partner.html`
- `capabilities.html`
- `markets.html`
- `mobile-grooming-vehicle-components.html`
- `specialty-vehicle-components.html`
- `mobile-equipment-components.html`
- `outdoor-off-grid-equipment-components.html`
- `how-we-execute.html`
- `about.html`
- `nda-confidentiality.html`
- `case-studies.html`
- `start-a-project.html`

### Modified for form preparation

- `start-a-project.html`

### Explicitly unchanged

- `css/style.css`
- `js/script.js`
- `header.html`
- `footer.html`
- Page layout, colors, typography, hero system, and core marketing content

## 7. Remaining Launch Tasks

### Critical before launch

1. Supply and optimize all 13 hero images from the Phase 4B mapping.
2. Create required Open Graph images and update each page to its final OG asset.
3. Select, connect, secure, and test the external form submission service.
4. Add or confirm the applicable privacy notice for inquiry data.
5. Configure the host to serve `404.html` with HTTP 404 status.
6. Deploy to a staging or production-equivalent URL and verify every route, asset, canonical, header/footer fragment, and form state.
7. Validate structured data with live URL tools.
8. Run cross-browser, real-mobile, keyboard, zoom, and screen-reader tests.

### Technical production checks

- Confirm HTTPS and one preferred hostname redirect.
- Confirm canonical URLs match the deployed hostname and URL format.
- Confirm `robots.txt` and `sitemap.xml` are reachable on the live domain.
- Submit the final sitemap in Google Search Console and Bing Webmaster Tools.
- Check for broken links, mixed content, console errors, failed network requests, and soft 404s.
- Configure compression, caching headers, security headers, and monitoring.
- Add privacy-conscious analytics only if required and document consent obligations.
- Establish uptime, error, and form-delivery monitoring.

## Final Launch Readiness Assessment

**Status: Conditionally ready for staging; not ready for production launch.**

The core technical structure now has valid local schema, a properly prepared but intentionally inactive inquiry form, a custom 404 page, and a sound static accessibility baseline. Production launch should wait until hero and OG assets are installed, the form endpoint and privacy handling are completed, the custom 404 response is configured, and live browser/accessibility/performance validation passes.
