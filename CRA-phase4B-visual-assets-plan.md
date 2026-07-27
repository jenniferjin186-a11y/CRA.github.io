# CRA-ENG Phase 4B Visual Assets Plan

Date: July 27, 2026

## Scope

This phase prepares the folder, filename, image-selection, and technical standards for CRA-ENG visual assets. It does not add images or change page content, layout, colors, typography, CTAs, header, footer, JavaScript, or CSS design rules.

## Folder Structure

```text
/images/hero/
/images/og/
```

- `/images/hero/` stores page-specific hero background images.
- `/images/og/` stores social-sharing images for Open Graph and Twitter/X previews.

Both folders are intentionally empty. No downloaded, generated, or placeholder images are included.

## Hero Image List

| Page | Required path |
|---|---|
| Home | `/images/hero/hero-specialty-vehicles-mobile-equipment.jpg` |
| Why China Execution Partner | `/images/hero/hero-china-execution-partner.jpg` |
| Capabilities | `/images/hero/hero-manufacturing-execution-capabilities.jpg` |
| Markets | `/images/hero/hero-specialty-equipment-markets.jpg` |
| Mobile Grooming Vehicle Components | `/images/hero/hero-mobile-grooming-vehicle-components.jpg` |
| Specialty Vehicle Components | `/images/hero/hero-specialty-vehicle-components.jpg` |
| Mobile Equipment Components | `/images/hero/hero-mobile-equipment-components.jpg` |
| Outdoor & Off-grid Equipment | `/images/hero/hero-outdoor-off-grid-equipment.jpg` |
| How We Execute | `/images/hero/hero-execution-process.jpg` |
| About | `/images/hero/hero-cra-engineering-team.jpg` |
| NDA & Confidentiality | `/images/hero/hero-confidential-project-management.jpg` |
| Case Studies | `/images/hero/hero-execution-case-studies.jpg` |
| Start a Project | `/images/hero/hero-project-discussion.jpg` |

These paths already exist in `css/style.css`. Adding an approved file with the exact mapped name activates it without an HTML change.

## Hero CSS Verification

The existing hero system is ready for production assets:

- Homepage and interior heroes support page-specific `--hero-image` paths.
- Backgrounds use `cover`, centered positioning, and no repeat.
- Dark navy gradients overlay every mapped image.
- White headings and light supporting copy maintain contrast.
- A navy fallback remains visible if an image is absent.
- Homepage height uses responsive limits and smaller mobile padding.
- Homepage cropping shifts at tablet and mobile breakpoints.
- Interior hero padding responds through `clamp()` and a mobile breakpoint.
- Cover cropping prevents empty image bands on different screen sizes.

No Phase 4B CSS change is required. Page-specific crop adjustments should be considered only after real assets are installed and reviewed.

## File Naming Rules

1. Use lowercase, kebab-case filenames.
2. Use only letters, numbers, and hyphens.
3. Do not use spaces, underscores, dates, or version labels.
4. Use `.jpg` exactly as mapped.
5. Keep one approved production file per page.
6. Do not append `-final`, `-new`, or numbered suffixes.
7. Store hero files only in `/images/hero/`.
8. Store social files only in `/images/og/`.
9. Export in sRGB.
10. Remove embedded camera or location metadata when confidentiality requires it.

## Recommended Image Style

Use professional B2B industrial photography showing:

- Specialty vehicle interiors and upfit environments
- Custom components and fabricated assemblies
- Manufacturing execution and production follow-up
- Quality inspection and measurement
- Prototype review and validation
- Supplier technical collaboration
- Installation kits and coordinated component supply

Images should feel engineering-led, industrial, credible, controlled, and premium B2B.

### Composition

- Position the main subject toward the center-right when possible.
- Keep the left 40–45% calm enough for white hero text.
- Keep critical details within the central 70% of the frame.
- Avoid important details near the outer 10% because cover crops vary.
- Prefer medium-wide working scenes over extreme close-ups.
- Remove or obscure customer, supplier, vehicle, drawing, and product identifiers unless publication is approved.

### Page Direction

- Home: specialty vehicle or mobile-equipment component review.
- Why China Execution Partner: supplier review or technical coordination.
- Capabilities: prototype measurement, inspection, or controlled production.
- Markets: broad specialty-equipment component context.
- Mobile Grooming: upfit, water, electrical, or installed-component context without consumer pet imagery.
- Specialty Vehicle: vehicle interior, upfit assembly, or installation environment.
- Mobile Equipment: rugged assembly, enclosure, controls, or field-service equipment.
- Outdoor & Off-grid: rugged component, portable-power enclosure, mounting structure, or outdoor assembly.
- How We Execute: technical review, validation, inspection, or workflow.
- About: real CRA-ENG technical or supplier activity.
- NDA: controlled drawing review or redacted documentation.
- Case Studies: inspection evidence or non-identifying component work.
- Start a Project: discussion around a drawing, sample, or component.

## Images to Avoid

- Consumer lifestyle photography
- Pet-owner, grooming-service, or animal imagery
- Generic office meetings and handshakes
- Generic factory stock photography
- Posed marketing-style people photos
- Unrelated PCB imagery
- Images implying CRA-ENG owns a factory
- Images implying CRA-ENG manufactures complete vehicles or finished equipment
- Customer or competitor imagery without permission
- AI imagery presented as project evidence
- Images containing captions, headlines, logos, watermarks, or promotional text

## Hero Image Requirements

- Preferred size: `1920 × 1080 px`
- Minimum size: `1600 × 900 px`
- Aspect ratio: `16:9`
- Format: JPEG (`.jpg`)
- Color space: sRGB
- Orientation: landscape
- Recommended compressed size: `250–500 KB`
- Avoid exceeding `800 KB` unless justified by visual complexity and performance testing.
- Use progressive JPEG export when available.
- Do not upscale a small source.

After installation, verify desktop, tablet, and mobile crops. Adjust only page-specific `background-position` where the real subject requires it.

## Open Graph Naming Standard

Store the initial OG images in `/images/og/`:

| Page | Required filename |
|---|---|
| Home | `og-home.jpg` |
| Specialty Vehicle Components | `og-specialty-vehicle-components.jpg` |
| Mobile Equipment Components | `og-mobile-equipment-components.jpg` |
| Outdoor & Off-grid Equipment | `og-outdoor-off-grid-equipment.jpg` |
| Capabilities | `og-capabilities.jpg` |
| About | `og-about.jpg` |

Future pages should follow `og-[page-slug].jpg`.

## Open Graph Requirements

- Canvas: `1200 × 630 px`
- Aspect ratio: approximately `1.91:1`
- Format: JPEG (`.jpg`)
- Color space: sRGB
- Recommended size: under `500 KB`
- Practical maximum: under `1 MB`
- Keep important content at least 60 px from each edge.
- Use a clear industrial image or restrained CRA-ENG brand composition.
- Maintain high contrast at small preview sizes.
- Use only short, verified wording if text is intentionally designed into the card.
- Do not include customer names, proprietary products, confidential drawings, or unsupported claims.

An OG asset may use its page hero photograph, but it must receive a dedicated 1200 × 630 crop. Metadata should not be changed until the corresponding OG file exists and has been approved.

## Installation Workflow

1. Confirm image rights and publication permission.
2. Check that the image does not misrepresent CRA-ENG’s role.
3. Remove identifying or confidential details when required.
4. Export hero images at 1920 × 1080 using exact mapped filenames.
5. Place hero files in `/images/hero/`.
6. Export OG images at 1200 × 630 using the approved naming standard.
7. Place OG files in `/images/og/`.
8. Review hero crops on desktop, tablet, and mobile.
9. Adjust page-specific positioning only if necessary.
10. Update Open Graph and Twitter image metadata after OG assets exist.
11. Test performance after the full image set is installed.
12. Validate public image URLs after deployment.

## Phase 4B Completion

Completed:

- Hero folder confirmed
- OG folder created
- Thirteen hero mappings documented and verified
- Six initial OG filenames defined
- Overlay, fallback, responsive height, and mobile crop behavior verified
- Style, naming, dimensions, and installation rules documented

Intentionally not performed:

- No images downloaded or generated
- No placeholder images created
- No image captions added
- No HTML or metadata changed
- No CSS changes made
- No page content or layout changed