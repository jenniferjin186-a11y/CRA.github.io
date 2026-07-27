# CRA-ENG Phase 3B Mobile Equipment & Hero System Report

Date: July 27, 2026

## Scope Completed

This phase completed two connected tasks:

1. Created the Mobile Equipment Components market page.
2. Prepared a unified, page-specific hero background-image system across the major CRA-ENG pages.

The approved visual system remains unchanged: navy and blue colors, full-width sections, centered interior section headings, established cards, existing CTAs, typography, spacing, responsive behavior, and shared header/footer integration.

No hero images were generated, downloaded, copied, or added.

## Part 1: Mobile Equipment Page

Created:

- `mobile-equipment-components.html`

### Positioning

The page positions CRA-ENG as a China Execution Partner supporting:

- Mobile equipment manufacturers
- Field service equipment companies
- Utility equipment brands
- Commercial equipment companies

The page explicitly states that CRA-ENG is not:

- A finished-equipment manufacturer
- A factory
- A generic sourcing agent
- A product reseller

### Completed Page Structure

#### Hero

H1:

> Mobile Equipment Components & Manufacturing Support

The hero explains that CRA-ENG helps mobile equipment companies develop, source, validate, and manage custom components through China-side execution.

CTAs:

- Discuss Your Project
- View Capabilities

#### Industry Challenges

Covered:

- Custom low-volume components
- Multiple supplier coordination
- Prototype development
- Manufacturing consistency
- Field-use reliability
- Supplier communication challenges

#### Components CRA-ENG Supports

Completed cards:

- Custom Fabricated Assemblies
- Electrical Systems
- Enclosures and Mounting Structures
- Fluid and Mechanical Systems
- Control Components
- Installation Kits

The copy remains focused on components, assemblies, supplier execution, readiness, quality, and repeat supply. It does not position CRA-ENG as a complete-equipment manufacturer.

#### Supplier and Production Execution

Completed execution phases:

1. Supplier Qualification
2. Prototype Coordination
3. Production Follow-Up
4. Quality Control
5. Change Management

#### Responsibility Model

The approved model is retained:

- The client owns product requirements, system design, integration decisions, final approval, and release.
- CRA-ENG owns agreed China-side execution, supplier coordination, prototype follow-up, production readiness, quality control, changes, and repeat supply.
- The supplier owns manufacturing execution, production conformity, records, and supplier-caused corrective action.

#### Final CTA

The CTA asks qualified visitors to share the application, current drawing or sample, supplier status, volume, stage, and timeline.

### Mobile Equipment SEO

Implemented:

- Unique title: `Mobile Equipment Components & Manufacturing Support | CRA-ENG`
- Unique meta description
- `index, follow` robots metadata
- Self-referencing canonical URL
- Open Graph title, description, type, URL, and image metadata
- Twitter large-image card metadata
- Exactly one H1

## Part 2: Unified Hero Background System

### Implementation Method

The existing hero HTML was preserved. No page content, CTA text, section structure, or layout was rewritten.

Each major page now has a page-specific body class that sets a shared CSS custom property:

```css
--hero-image: url('/images/hero/page-specific-file.jpg');
```

The homepage `home-hero` and interior `core-hero` components now use:

- A full-width background image path
- Cover sizing
- Centered positioning
- No repeat
- A dark navy overlay gradient
- White content
- A solid navy fallback while image files are absent

This approach keeps all image selection in one CSS mapping and avoids duplicating hero layout markup on every page.

### Hero Path Mapping

| Page | Body class | Future image filename |
|---|---|---|
| Home | `hero-home` | `hero-specialty-vehicles-mobile-equipment.jpg` |
| Why a China Execution Partner | `hero-why-execution` | `hero-china-execution-partner.jpg` |
| Capabilities | `hero-capabilities` | `hero-manufacturing-execution-capabilities.jpg` |
| Markets | `hero-markets` | `hero-specialty-equipment-markets.jpg` |
| Mobile Grooming Vehicle Components | `hero-mobile-grooming` | `hero-mobile-grooming-vehicle-components.jpg` |
| Specialty Vehicle Components | `hero-specialty-vehicle` | `hero-specialty-vehicle-components.jpg` |
| Mobile Equipment Components | `hero-mobile-equipment` | `hero-mobile-equipment-components.jpg` |
| Outdoor & Off-grid Equipment | `hero-outdoor-off-grid` | `hero-outdoor-off-grid-equipment.jpg` |
| How We Execute | `hero-how-execute` | `hero-execution-process.jpg` |
| About | `hero-about` | `hero-cra-engineering-team.jpg` |
| NDA & Confidentiality | `hero-confidentiality` | `hero-confidential-project-management.jpg` |
| Case Studies | `hero-case-studies` | `hero-execution-case-studies.jpg` |
| Start a Project | `hero-start-project` | `hero-project-discussion.jpg` |

The future `hero-outdoor-off-grid` mapping is present in CSS. The page `outdoor-off-grid-equipment-components.html` does not currently exist, so no HTML class could be assigned during this phase. The class should be added to that page when it is created.

### Updated Existing Pages

Hero classes were added to:

- `index.html`
- `why-china-execution-partner.html`
- `capabilities.html`
- `markets.html`
- `mobile-grooming-vehicle-components.html`
- `specialty-vehicle-components.html`
- `how-we-execute.html`
- `about.html`
- `nda-confidentiality.html`
- `case-studies.html`
- `start-a-project.html`

The new `mobile-equipment-components.html` page was created with its hero class already assigned.

### CSS Changes

Updated `css/style.css` to:

- Use a custom hero-image property on the homepage hero.
- Use the same custom hero-image system on interior-page heroes.
- Preserve the existing dark-blue overlay and white text.
- Preserve homepage and interior hero sizing and responsive behavior.
- Add all 13 required page-to-filename mappings.
- Provide a navy gradient fallback when a referenced image is absent.

No card, typography, section, CTA, color, or spacing rules were changed.

## Image Folder

Created the standard directory:

- `/images/hero/`

The directory is intentionally empty. No placeholder graphics or text-overlay images were added.

## Image Installation Instructions

When approved hero photography becomes available:

1. Add each JPG directly to `images/hero/`.
2. Use the filenames in the mapping table exactly, including capitalization and hyphens.
3. Do not edit page HTML or CSS if the filenames remain unchanged.
4. Use wide, high-resolution industrial photography suitable for a cover crop. A source around 1920 pixels wide is recommended.
5. Keep important subjects away from the left-side text area where possible.
6. Do not embed headings, captions, logos, or other text into the image.
7. Avoid images that imply CRA-ENG owns a factory, manufactures complete vehicles, or sells finished equipment.
8. Compress images for web delivery while preserving sufficient detail behind the dark overlay.
9. After adding the files, review desktop and mobile crops and adjust only `background-position` if a page requires a subject-specific crop.
10. Update each page’s Open Graph image metadata separately if the new hero image should also be used for social sharing.

Until the files are added, heroes display the existing navy fallback with readable white text and the normal CTA hierarchy.

## Validation Results

- All 12 currently existing major pages contain the correct hero class.
- All 12 currently existing major pages retain exactly one H1.
- Thirteen required filename mappings are present in CSS.
- The `images/hero/` directory exists and contains no generated or downloaded images.
- The new mobile-equipment page contains six required sections.
- Mobile-equipment title, description, canonical, robots, and Open Graph metadata are present.
- No missing local links were detected on the new page.
- No shared header, footer, or JavaScript file was modified.

## Files Created

- `mobile-equipment-components.html`
- `CRA-phase3B-mobile-equipment-hero-system-report.md`
- Empty directory: `images/hero/`

## Files Modified

- `index.html`
- `why-china-execution-partner.html`
- `capabilities.html`
- `markets.html`
- `mobile-grooming-vehicle-components.html`
- `specialty-vehicle-components.html`
- `how-we-execute.html`
- `about.html`
- `nda-confidentiality.html`
- `case-studies.html`
- `start-a-project.html`
- `css/style.css`

## Remaining Follow-Up Tasks

1. Create `outdoor-off-grid-equipment-components.html` with body classes `core-page hero-outdoor-off-grid`.
2. Add the 13 approved hero image files.
3. Review hero image crops after real assets are installed.
4. Update Markets, footer, and other internal links to the dedicated Specialty Vehicle and Mobile Equipment pages during the next shared-link phase.
5. Update page-specific Open Graph image URLs after hero assets are approved.
6. Add new public URLs to the sitemap and complete structured data during the site-wide SEO phase.