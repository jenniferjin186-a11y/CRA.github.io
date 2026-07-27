# CRA-ENG Phase 1 Website Implementation Plan — Summary

## Status

The Phase 1 implementation roadmap has been completed.

Full roadmap:

- `CRA-phase1-website-implementation-plan.md`

No website HTML, CSS, JavaScript, images, sitemap, robots, or deployment configuration has been modified.

---

# 1. Key Implementation Decisions

## 1.1 Replace the Homepage Completely

`index.html` will retain its URL but receive a complete content and layout replacement.

Reason:

The current homepage reflects general engineering consulting, EMC risk, and broad product development. It cannot communicate the new China Execution Partner position by making only minor edits.

---

## 1.2 Preserve Useful Existing URLs

Existing pages with possible search or referral value will remain available until traffic and backlink data can be reviewed.

Reason:

Deleting established URLs can discard search value. Rewrites, canonical destinations, and redirect pages provide a safer migration.

---

## 1.3 Create New Core Pages Around the Buyer Journey

New Phase 1 pages will explain:

- Why the service is needed
- Which markets CRA-ENG supports
- What CRA-ENG executes
- How the process works
- How responsibility is divided
- Why CRA-ENG can be trusted
- How a project begins

Reason:

The current site is organized around the old service model. The new architecture follows a B2B buyer’s evaluation process.

---

## 1.4 Frame Market Pages Around Components and Supply Support

Use:

- Mobile Grooming Vehicle Components & Supply Support
- Specialty Vehicle Components & Supply Chain Support
- Mobile Equipment Components & Manufacturing Support
- Outdoor & Off-Grid Equipment Components & Supply Support

Reason:

These names prevent CRA-ENG from appearing to manufacture vehicles or compete with its target customers.

---

## 1.5 Add a Dedicated “Why a China Execution Partner” Page

Reason:

The site must explain why a manufacturer should use CRA-ENG rather than directly managing factories, hiring a sourcing agent, or relying on final inspection.

---

## 1.6 Use One Primary Conversion Destination

`start-a-project.html` will become the main conversion page.

`contact.html` should redirect or provide a transition to that page.

Reason:

Two competing forms create inconsistent qualification, duplicate maintenance, and unclear analytics.

---

## 1.7 Replace the Shared Header and Footer

Reason:

The current shared components contain broken image paths, old navigation, malformed footer markup, placeholder branding, and no usable mobile navigation.

---

## 1.8 Retain Legacy Technical Articles as an Archive

Reason:

Existing EMC and hardware articles may have search value, but they should no longer define CRA-ENG’s commercial identity.

They will be grouped under an Engineering & Compliance Archive within Insights.

---

## 1.9 Consolidate Duplicate and Thin Pages

Planned redirects:

- `services.html` → `capabilities.html`
- `industries.html` → `markets.html`
- `process.html` → `how-we-execute.html`
- `product-development-process.html` → `how-we-execute.html`
- `contact.html` → `start-a-project.html`
- `case-study.html` → `case-studies.html`
- `blog.html` → `insights.html`

Duplicate EMI pages will be consolidated after search and backlink review.

Reason:

This removes overlapping content and creates clearer destinations without abruptly breaking old URLs.

---

## 1.10 Build a Responsive Shared Design System

Reason:

The current global CSS has no complete responsive strategy, contains duplicate rules, and leaves multi-column layouts and navigation unsuitable for mobile devices.

---

## 1.11 Use Real Execution Images

Reason:

The positioning depends on operational trust. Real component, supplier, prototype, quality, consolidation, and team imagery is more credible than generic factory or pet-industry stock photography.

Images must not imply that CRA-ENG manufactures complete vehicles or owns supplier factories.

---

## 1.12 Standardize SEO Around One Domain and One Architecture

Use:

> `https://www.cra-eng.com`

Reason:

The current site mixes domain forms and lacks canonical metadata. The new structure requires consistent titles, descriptions, canonicals, Open Graph data, structured data, internal links, and a clean sitemap.

---

# 2. Files Requiring Modification in the Next Coding Phase

## 2.1 Shared Files

- `header.html`
- `footer.html`
- `css/style.css`
- `js/script.js`
- `robots.txt`
- `sitemap.xml`

Potentially:

- `favicon.png`, only if brand assets change
- `CNAME`, only if domain configuration changes; no change is currently recommended

## 2.2 Core Existing Pages

- `index.html`
- `about.html`
- `contact.html`
- `case-study.html`
- `blog.html`
- `manufacturing-execution-support.html`
- `supplier-qualification-factory-assessment.html`
- `engineering-review.html`

## 2.3 Redirect or Merge Pages

- `services.html`
- `industries.html`
- `process.html`
- `product-development-process.html`
- One of:
  - `emi-pcb-design-problems.html`
  - `emi-problems-in-pcb.html`

## 2.4 Legacy Articles Requiring Technical Cleanup

- `ce-certification-preparation.html`
- `emc-testing-cost.html`
- `emc-testing-first-time.html`
- `enclosure-design-for-emc-compliance.html`
- `evaluate-hardware-prototype.html`
- `hardware-development-process.html`
- `hardware-prototype-compliance-guide.html`
- `iot-engineering-challenges.html`
- `pre-compliance-testing.html`
- `prototype-design-mistakes.html`
- `prototype-fail-emc-testing.html`
- `structural-design-risks-smart-devices.html`
- Retained canonical EMI article

Required cleanup may include:

- Header and footer integration
- Character encoding
- Metadata
- Canonicals
- Broken links
- Image paths
- Contextual links to new commercial pages

## 2.5 Image Files

Existing images may require:

- Replacement
- Compression
- Renaming
- WebP conversion
- Responsive crops

New image assets should be added under a clear structure, such as:

```text
images/
├── brand/
├── markets/
├── capabilities/
├── process/
├── case-studies/
└── insights/
```

Do not reorganize existing images until all current references are mapped.

---

# 3. New Files Required in the Next Coding Phase

## Launch-Critical

- `why-china-execution-partner.html`
- `mobile-grooming-vehicle-components.html`
- `capabilities.html`
- `how-we-execute.html`
- `markets.html`
- `specialty-vehicle-components.html`
- `start-a-project.html`
- `nda-confidentiality.html`

## Evidence and Content

- `case-studies.html`
- `vehicle-power-management-specialty-mobile-unit.html`
- `insights.html`

Create the anonymous case page only after its content and images are verified.

## Adjacent Markets

- `mobile-equipment-components.html`
- `outdoor-off-grid-equipment-components.html`

These can follow the initial launch if adequate content and evidence are not yet available.

---

# 4. Recommended Coding Sequence

1. Verify content, claims, case study, and images.
2. Refactor shared CSS and responsive foundations.
3. Replace header and footer.
4. Replace homepage.
5. Create the three approved core content destinations.
6. Create Capabilities and How We Execute.
7. Create Markets and Specialty Vehicle Components.
8. Rewrite About and create Start a Project.
9. Create NDA & Confidentiality.
10. Create case-study and Insights structures.
11. Add redirects and consolidate duplicate pages.
12. Update metadata, canonicals, structured data, robots, and sitemap.
13. Validate links, forms, accessibility, responsive layouts, and production deployment.

---

# 5. Files Created During This Planning Task

- `CRA-phase1-website-implementation-plan.md`
- `CRA-phase1-website-implementation-plan-summary.md`

No website source files were changed.
