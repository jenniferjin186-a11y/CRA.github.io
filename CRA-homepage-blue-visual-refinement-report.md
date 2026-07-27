# CRA-ENG Homepage Blue Visual Refinement Report

Date: July 27, 2026

## Scope

This refinement changed only the homepage presentation. The approved homepage content strategy, ten-section sequence, internal links, and existing image set were preserved. No images were added, generated, searched for, or replaced.

## Visual Changes Summary

### Full-width hero

- Replaced the split two-column composition with a full-width background hero using the existing `images/banner-home.jpg` asset.
- Added a layered dark-blue overlay that keeps the engineering environment visible while maintaining strong text contrast.
- Removed the separate right-side image, floating caption card, and extra boundary statement from the hero.
- Constrained the hero message to an eyebrow, focused H1, concise supporting paragraph, and two clear actions.
- Kept the primary conversion action visually dominant while rendering the secondary action as a white outline on the dark image.

### Blue brand system

The homepage now uses the approved palette:

- Primary Navy: `#0B2A4A`
- Secondary Blue: `#123B66`
- Accent Blue: `#1E5A96`
- Light Blue Background: `#EEF5FB`
- White: `#FFFFFF`

Orange button fills, borders, badges, highlights, focus accents, and decorative elements were converted to blue. The formerly orange CSS compatibility variables now resolve to the approved accent blue so legacy shared components do not reintroduce orange.

### Section rhythm and hierarchy

- Preserved full-browser-width section backgrounds with content inside the centered 1200px container.
- Strengthened the white, light-blue, white, dark-blue, white, light-blue, and dark-blue visual cadence.
- Used differentiated vertical spacing for standard, process, evidence, and final CTA sections.
- Kept all non-hero section headings centered and constrained supporting copy to readable line lengths.
- Maintained the desktop horizontal process timeline and mobile vertical timeline.

### Card and component system

- Standardized cards with a 14px radius, subtle blue border, controlled navy shadow, and restrained hover lift.
- Converted all numbered badges to pale-blue/blue treatments.
- Kept the CRA-ENG responsibility card visually prominent using an accent-blue border rather than an orange treatment.
- Converted component-list borders, media accents, notes, and case-study borders to the blue system.
- Standardized homepage buttons at a 48px minimum height, consistent padding, 10px radius, and matched hover behavior.

### Compact evidence banner

- Rebuilt “Judge the Execution by the Work” as a compact evidence presentation.
- Centered the title and short explanation above the existing supplier-quality image.
- Rendered the image at a 16:5 / 3.2:1 desktop proportion and approximately 3:1 on mobile.
- Placed the anonymous engagement preview in a compact horizontal evidence card below the banner on desktop and a stacked card on mobile.
- Reduced the image's visual dominance while retaining the title, description, caption, and case-study link.

## Hero Redesign Explanation

The new hero communicates the core positioning in one visual field: the audience is specialty vehicle manufacturers, vehicle upfitters, and mobile equipment companies; CRA-ENG manages China-side custom component and supplier execution; and the value is controlled repeat production. The full-width engineering photograph provides immediate operational context, while the navy overlay, large white headline, short paragraph, and two-action hierarchy make the message scannable within the first screen.

The detailed boundary and execution explanation remain available in the sections immediately below the hero, preventing the first screen from becoming text-heavy.

## Responsive and Visual Validation

The implementation was rendered and checked at:

- Desktop: 1440 × 1000
- Mobile: 390 × 844

Validation results:

- Ten approved homepage sections remain present.
- No horizontal overflow was detected at either viewport.
- All existing images loaded successfully.
- Hero CTA buttons render at a consistent 48px height on mobile.
- The desktop evidence image renders at 1200 × 375 pixels, a 3.2:1 ratio.
- The mobile evidence image renders at approximately 3:1.
- Section-heading alignment remains centered.
- The hero background uses the existing image and approved dark-blue overlay.
- Primary CTA color resolves to `#1E5A96`; hover resolves to `#123B66`.

## Modified or Created Files

- `index.html` — full-width hero markup and compact evidence-section structure.
- `css/style.css` — approved blue palette, hero treatment, CTA system, section rhythm, card refinements, evidence banner, and responsive rules.
- `CRA-homepage-blue-visual-refinement-report.md` — implementation and validation record.

No header, footer, JavaScript, or other page files were modified.

## Remaining Recommendations

These are intentionally outside this refinement scope:

1. Apply the same blue component system to internal pages during their individual design phases so the site feels consistent beyond the homepage.
2. Review header and footer logo contrast separately if a future brand asset update is approved; neither shared component was changed here.
3. Validate the final production deployment on physical iOS and Android devices, especially viewport behavior around the fixed header.
4. Run a formal accessibility audit during Phase 1B completion, including keyboard navigation, focus order, contrast measurement, and reduced-motion behavior across shared components.
5. Reassess image crops only if approved replacement photography becomes available; the current pass deliberately uses the existing assets without additions.