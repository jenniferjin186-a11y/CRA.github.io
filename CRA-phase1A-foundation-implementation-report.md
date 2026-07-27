# CRA-ENG Phase 1A Foundation Implementation Report

## Status

Phase 1A foundation implementation is complete.

This phase changed only the shared site foundation and created the five requested placeholder templates. It did not rewrite the existing homepage or other commercial pages, and it did not add final page content.

## Files Identified Before Implementation

### Files changed

- `header.html`
- `footer.html`
- `css/style.css`
- `js/script.js`

### Files created

- `markets.html`
- `capabilities.html`
- `how-we-execute.html`
- `why-china-execution-partner.html`
- `start-a-project.html`
- `CRA-phase1A-foundation-implementation-report.md`

## Risks Identified Before Implementation

### Shared stylesheet regression

All existing pages use `css/style.css`. Replacing duplicated legacy styles with a clean foundation could change spacing, cards, grids, headers, or footers on pages not being redesigned in Phase 1A.

Mitigation:

- Common legacy selectors for cards, grids, heroes, timelines, CTAs, blog cards, and footers were retained.
- A limited compatibility rule was added for pages that still contain an inline legacy header.
- Individual page redesign remains deferred.

### Duplicate fragment loading

Several existing pages contain inline JavaScript that already fetches `header.html` and `footer.html`.

Mitigation:

- The shared script loads a fragment only when its container is empty.
- Initialization waits for shared fragments before attaching navigation behavior.
- The logic is defensive if a page has no header or footer slot.

Remaining limitation:

- Existing inline fragment loaders have not yet been removed from legacy pages. They should be standardized during each page rewrite.

### Navigation links to unfinished content

The new navigation requires destinations that did not previously exist.

Mitigation:

- All new primary navigation destinations created in Phase 1A now exist.
- `Case Studies` and `About` point to existing files.
- The new pages use `noindex, follow` while they contain placeholder content.

### Mobile and accessibility behavior

The previous navigation depended on desktop layout and hover behavior.

Mitigation:

- The new navigation has an accessible menu button, `aria-expanded`, `aria-controls`, visible focus styles, Escape-key closing, outside-click closing, touch-sized controls, body scroll control, and responsive layout rules.

## 1. Header Changes

`header.html` now includes:

- Correct logo path: `images/logo.png`
- Logo link to the homepage
- Semantic primary navigation list
- New navigation structure:
  - Markets
  - Capabilities
  - How We Execute
  - Why a China Execution Partner
  - Case Studies
  - About
  - Start a Project
- Visually emphasized `Start a Project` CTA
- Mobile navigation toggle
- Accessible navigation labels and state attributes
- Active-page hooks using `data-nav-link`

Current link decisions:

- `Case Studies` points to the existing `case-study.html` until the plural case-study page is created in a later phase.
- `About` continues to use the existing `about.html` URL.
- All other primary links point to files created in Phase 1A.

## 2. Footer Changes

`footer.html` now uses the approved positioning:

> CRA-ENG supports specialty vehicle and mobile equipment companies with custom component and supplier execution in China.

It also states:

> We support the companies that build specialized mobile units. We do not build or sell finished vehicles.

The footer is organized into:

- Markets
- Execution
- Company
- Contact

Additional changes:

- Corrected footer logo path
- Corrected list structure
- Removed old Home-E and placeholder branding
- Added CRA-ENG copyright
- Added automatic current-year support
- Added direct email link
- Retained Shenzhen, China and NDA availability
- Added responsive footer layout

## 3. CSS Foundation Changes

`css/style.css` was replaced with a shared responsive foundation containing:

### Design tokens

- Navy, blue, orange, neutral, border, and surface colors
- Shared spacing scale
- Container widths
- Border radii
- Shadows
- Header height
- Transition timing

### Typography

- Figtree-first font stack
- Responsive H1, H2, and H3 sizes
- Improved line heights
- Consistent body copy
- Eyebrow and lead text styles

### Layout

- Standard and narrow containers
- Section spacing
- Two-, three-, and four-column grid helpers
- Responsive cards
- Shared hero and page-hero foundations
- CTA layout
- Footer layout

### Components

- Primary, secondary, and small buttons
- Card foundation
- Navigation
- Mobile menu
- Dropdown foundation for future nested navigation
- Timeline compatibility
- Blog-card compatibility
- Legacy hero, grid, card, CTA, and footer compatibility

### Responsive breakpoints

- Desktop navigation adjustments below 1100px
- Mobile navigation and two-column conversion below 960px
- Single-column layouts below 680px
- Reduced-motion support

### Accessibility

- Visible `:focus-visible` outline
- Touch-sized navigation controls
- Reduced-motion handling
- Responsive menu behavior without hover dependency

## 4. JavaScript Changes

`js/script.js` now provides:

- Reliable shared header and footer loading
- Safe behavior when fragments or containers are missing
- Mobile menu open/close behavior
- `aria-expanded` and accessible label updates
- Escape-key menu closing with focus return
- Outside-click menu closing
- Automatic menu reset at desktop width
- Body scroll locking when the mobile menu is open
- Active-page detection and `aria-current="page"`
- Scrolled-header state
- Generic accessible dropdown support for future dropdown markup
- Current-year footer update
- Defensive legacy statistics animation
- Reduced dependence on load timing

## 5. Page Templates Created

The following templates were created:

- `markets.html`
- `capabilities.html`
- `how-we-execute.html`
- `why-china-execution-partner.html`
- `start-a-project.html`

Each template contains:

- HTML5 doctype
- `lang="en"`
- UTF-8 charset
- Responsive viewport
- Placeholder SEO title
- Placeholder meta description
- Temporary `noindex, follow`
- Favicon
- Figtree font loading
- Shared stylesheet
- Deferred shared script
- Shared header slot
- Semantic `main` element
- One H1
- Responsive page hero
- Main content placeholder container
- Shared footer slot

The templates intentionally do not contain final page copy or forms.

## 6. Validation Completed

The following checks passed:

- JavaScript syntax check
- Required file existence check
- Header local-link target check
- Template doctype check
- Exactly one title per template
- Exactly one meta description per template
- Exactly one H1 per template
- Exactly one main region per template
- Header and footer slot checks
- Shared script inclusion check
- Git whitespace/error check

All eight links in the shared header point to existing local files.

Browser-based visual QA was not performed because Phase 1A requested foundation implementation rather than browser testing. Visual and interaction QA remains required before production release.

## 7. Modified and Created Files

### Modified

- `header.html`
- `footer.html`
- `css/style.css`
- `js/script.js`

### Created

- `markets.html`
- `capabilities.html`
- `how-we-execute.html`
- `why-china-execution-partner.html`
- `start-a-project.html`
- `CRA-phase1A-foundation-implementation-report.md`

## 8. Remaining Implementation Steps

### Phase 1B: Core content

1. Replace `index.html` with the approved homepage copy and structure.
2. Add final content to `why-china-execution-partner.html`.
3. Create `mobile-grooming-vehicle-components.html` with approved copy.
4. Replace placeholder metadata and remove `noindex` when each page is production-ready.
5. Add approved images and diagrams.

### Phase 1C: Capabilities and process

1. Add final content to `capabilities.html`.
2. Add final content to `how-we-execute.html`.
3. Add final content and market routing to `markets.html`.
4. Create `specialty-vehicle-components.html`.

### Phase 1D: Trust and conversion

1. Rewrite `about.html`.
2. Build and verify the project-intake form in `start-a-project.html`.
3. Create `nda-confidentiality.html`.
4. Verify supplier-independence and experience claims.
5. Define secure document-sharing procedure.

### Evidence and content migration

1. Create `case-studies.html`.
2. Validate and create the anonymous specialty mobile unit case study.
3. Create `insights.html`.
4. Reorganize legacy articles under an Engineering & Compliance Archive.
5. Remove broken article entries and consolidate duplicate EMI pages.

### Technical cleanup

1. Remove legacy inline header/footer loaders as pages are rewritten.
2. Replace placeholder and corrupted text in existing pages.
3. Repair all missing local images and links.
4. Add final canonical, Open Graph, and structured metadata.
5. Update `robots.txt` and regenerate `sitemap.xml`.
6. Add redirect pages for retired URLs.
7. Validate all pages at desktop, tablet, and mobile widths.
8. Test keyboard and touch navigation in a browser.
9. Test the project form under successful and failed submissions.
10. Run accessibility, performance, and production link checks.

## 9. Known Phase 1A Limitations

- The five new pages contain placeholders and are intentionally marked `noindex`.
- The homepage and existing commercial pages still contain old positioning.
- Existing pages may show minor visual changes from the shared CSS refactor and require page-level QA during their rewrite.
- Legacy pages still use mixed inline and centralized fragment loading.
- Header dropdown JavaScript and CSS are available, but the Phase 1A primary navigation is intentionally flat because only the requested template destinations are currently available.
- The current contact form has not been replaced or validated.
- Final imagery has not been selected or added.
- No deployment was performed as part of this phased implementation request.