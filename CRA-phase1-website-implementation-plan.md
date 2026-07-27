# CRA-ENG Phase 1 Website Implementation Plan

## Document Purpose

This roadmap maps the approved Phase 1 positioning and first core-page copy onto the existing static CRA-ENG website.

It is based on:

- `CRA-phase1-positioning-refinement.md`
- `CRA-phase1-core-pages-copy-draft.md`

This is a planning document only. No website HTML, CSS, JavaScript, image, sitemap, robots, or deployment file has been changed.

---

# 1. Current Website Structure

## 1.1 Current Shared Files

- `header.html`
- `footer.html`
- `css/style.css`
- `js/script.js`
- `favicon.png`
- `robots.txt`
- `sitemap.xml`
- `CNAME`

## 1.2 Current Main Commercial Pages

- `index.html`
- `about.html`
- `services.html`
- `industries.html`
- `process.html`
- `case-study.html`
- `engineering-review.html`
- `manufacturing-execution-support.html`
- `supplier-qualification-factory-assessment.html`
- `product-development-process.html`
- `contact.html`
- `blog.html`

## 1.3 Current Legacy Insight Pages

- `ce-certification-preparation.html`
- `emc-testing-cost.html`
- `emc-testing-first-time.html`
- `emi-pcb-design-problems.html`
- `emi-problems-in-pcb.html`
- `enclosure-design-for-emc-compliance.html`
- `evaluate-hardware-prototype.html`
- `hardware-development-process.html`
- `hardware-prototype-compliance-guide.html`
- `iot-engineering-challenges.html`
- `pre-compliance-testing.html`
- `prototype-design-mistakes.html`
- `prototype-fail-emc-testing.html`
- `structural-design-risks-smart-devices.html`

## 1.4 Existing Technical Issues to Resolve During Coding

- Broken shared header and footer image paths
- Character-encoding corruption in visible copy
- Broken local links and missing images
- No general responsive navigation or mobile layout
- Duplicate and conflicting CSS rules
- Inconsistent shared and page-specific headers
- Weak or missing metadata
- No canonical URLs
- Inconsistent use of `www.cra-eng.com`
- Shared component files included in the sitemap
- Duplicate EMI topics
- Contact form success cannot be reliably verified
- Legacy placeholder branding and copyright text

These technical repairs should be completed as part of Phase 1 implementation, but they must not distract from the positioning changes.

---

# 2. Current Pages to Keep

“Keep” means retain the URL or file because it has ongoing functional or potential search value. The content may still require changes.

## 2.1 Keep as Core Phase 1 Destinations

| Current file | Action | Phase 1 role |
|---|---|---|
| `index.html` | Keep URL; replace page completely | New homepage |
| `about.html` | Keep URL; rewrite | About CRA-ENG |
| `contact.html` | Keep temporarily; redirect or rewrite | Legacy contact entry |
| `case-study.html` | Keep temporarily; redirect or rebuild | Legacy case-study entry |
| `manufacturing-execution-support.html` | Keep URL initially; rewrite and reposition | Supporting China execution capability page |
| `supplier-qualification-factory-assessment.html` | Keep URL initially; rewrite or redirect later | Supplier development support |
| `engineering-review.html` | Keep temporarily; reposition or archive | Product/supplier readiness support |
| `blog.html` | Keep temporarily; convert or redirect | Legacy insights entry |

## 2.2 Keep as Legacy Insight Content

Retain these URLs during Phase 1 unless search data shows they have no value:

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

Required treatment:

- Remove them from primary navigation.
- Group them under an “Engineering & Compliance Archive” in Insights.
- Repair metadata, broken links, and corrupted copy.
- Add contextual links to relevant new commercial pages.
- Do not allow legacy electronics topics to dominate the homepage or brand.

## 2.3 Keep Shared and Configuration Files

- `header.html`
- `footer.html`
- `css/style.css`
- `js/script.js`
- `robots.txt`
- `sitemap.xml`
- `CNAME`
- `favicon.png`

These files should remain but will require controlled updates during implementation.

---

# 3. Pages to Rewrite

## 3.1 `index.html`

### Rewrite level

Complete replacement.

### New role

Position CRA-ENG as:

> Your China Execution Partner for Specialty Vehicles and Mobile Equipment

### Required content

- Clear B2B target audience
- Non-compete statement
- Why companies need a China Execution Partner
- Execution responsibilities
- Component and assembly scope
- Mobile grooming vehicle component focus
- Execution process
- Client/CRA-ENG/supplier responsibility model
- Evidence
- Anonymous engagement preview
- Qualified project CTA

---

## 3.2 `about.html`

### Rewrite level

Complete replacement.

### New role

Establish CRA-ENG as:

- Engineering-led
- China-based
- Supplier-independent
- Execution-focused
- Experienced in OEM manufacturing and supplier management

### Required content

- Why CRA-ENG exists
- Who CRA-ENG supports
- What China execution means
- Supplier independence
- Responsibility boundaries
- Verified experience
- Confidentiality
- Location and contact

### Prohibited implications

- CRA-ENG owns a large factory network
- CRA-ENG manufactures complete vehicles
- CRA-ENG designs entire vehicle platforms

---

## 3.3 `manufacturing-execution-support.html`

### Rewrite level

Substantial rewrite.

### New role

Support the broader `capabilities.html` page with detailed production and supplier-execution information.

### Recommended page title

China Manufacturing Execution Support for Custom Components

### Required content

- Production readiness
- Production follow-up
- Quality control
- Nonconformance and corrective action
- Supplier change control
- Consolidation
- Repeat production supply

Avoid using it as the main positioning page once `capabilities.html` exists.

---

## 3.4 `supplier-qualification-factory-assessment.html`

### Rewrite level

Substantial rewrite.

### New role

Supplier Development & Qualification.

### Required content

- Process-capability-based supplier search
- Technical RFQs
- Supplier comparison
- Factory and quality-system assessment
- Project-volume fit
- Prototype responsiveness
- Risk identification
- Backup supplier considerations

Use a canonical destination or later rename to `supplier-development.html`.

---

## 3.5 `contact.html`

### Rewrite level

Short transition page or redirect.

### New role

Route visitors to `start-a-project.html`.

### Recommended approach

During initial deployment:

- Retain `contact.html`.
- Replace the current generic contact page with either:
  - A lightweight project-contact page linking to the new intake page, or
  - A client-side redirect with a visible fallback link.
- Use canonical metadata pointing to `start-a-project.html`.

Do not leave two competing project forms.

---

## 3.6 `case-study.html`

### Rewrite level

Short transition page or redirect.

### New role

Route visitors to `case-studies.html`.

Do not retain unsupported mini-case claims from the current site.

---

## 3.7 `blog.html`

### Rewrite level

Substantial rewrite or redirect.

### New role

Route to `insights.html` and organize content into:

- Specialty Vehicle Execution
- Mobile Grooming Vehicle Components
- Supplier Development
- First Articles and Production Readiness
- Quality and Change Control
- Engineering & Compliance Archive

---

# 4. Pages to Archive, Merge, or Redirect

## 4.1 `services.html`

### Action

Redirect to `capabilities.html`.

### Reason

The current page is generic, thin, and uses inconsistent site structure. The new Capabilities page will provide a stronger, execution-led framework.

---

## 4.2 `industries.html`

### Action

Redirect to `markets.html`.

### Reason

“Markets” supports the refined page architecture and can clearly identify the companies CRA-ENG supports without suggesting CRA-ENG manufactures their vehicles.

---

## 4.3 `process.html`

### Action

Redirect to `how-we-execute.html`.

### Reason

The new page will present approval gates, client inputs, CRA-ENG responsibilities, supplier activities, and deliverables.

---

## 4.4 `product-development-process.html`

### Action

Merge useful content into `how-we-execute.html`, then redirect.

### Reason

The current general product-development process is broader than the new China execution position and overlaps the current Process page.

---

## 4.5 `engineering-review.html`

### Phase 1 action

Retain temporarily but remove from primary navigation.

### Later action

Either:

- Rewrite as Product & Supplier Readiness, or
- Merge into Capabilities and How We Execute, then redirect.

### Reason

“Engineering Review” reinforces the old consulting position. Relevant technical review activities should be presented as part of supplier and production execution.

---

## 4.6 Duplicate EMI Pages

### Pages

- `emi-pcb-design-problems.html`
- `emi-problems-in-pcb.html`

### Action

Select the stronger page after reviewing content, backlinks, and search performance. Merge unique content into that page and redirect the weaker URL.

### Reason

The pages target nearly the same topic and can compete against each other.

---

## 4.7 Broken or Nonexistent Blog Destinations

Current references include pages that do not exist:

- `pre-compliance-testing-electronics.html`
- `emc-design-best-practices.html`
- `product-development-risks.html`
- `rapid-prototyping-guide.html`

### Action

Remove these entries from the new Insights index unless the articles are intentionally created later.

Do not create placeholder pages solely to preserve broken links.

---

## 4.8 Shared Component and Verification Files

Remove from the sitemap:

- `header.html`
- `footer.html`
- `google53d5596a4189cef1.html`

The Google verification file may remain at the site root but should not be treated as a search landing page.

---

# 5. New Pages to Create

## 5.1 Phase 1 Core Pages

### `why-china-execution-partner.html`

Purpose:

- Explain the commercial need for local execution
- Contrast execution with supplier sourcing and final inspection
- Present seven common execution gaps
- Explain the three-party responsibility model

Approved first-draft copy exists in:

- `CRA-phase1-core-pages-copy-draft.md`

### `mobile-grooming-vehicle-components.html`

Purpose:

- Target companies similar to Wag’n Tails
- Explain relevant component and supply programs
- Maintain an explicit non-compete position

Approved first-draft copy exists in:

- `CRA-phase1-core-pages-copy-draft.md`

### `capabilities.html`

Purpose:

Organize the offer around:

- Develop
- Produce
- Deliver

Primary capabilities:

- Supplier development
- Custom component sourcing
- Engineering communication
- Prototype coordination
- First article validation
- Production readiness
- Quality and change control
- Consolidation and installation kits
- Repeat production supply

### `how-we-execute.html`

Purpose:

Show the gated path from intake to repeat production:

1. Project intake
2. Technical definition
3. Supplier strategy
4. Supplier qualification
5. Prototype coordination
6. First article validation
7. Production readiness
8. Production and quality control
9. Consolidation and delivery
10. Repeat supply and changes

### `markets.html`

Purpose:

Route visitors to support-oriented market pages:

- Mobile Grooming Vehicle Components
- Specialty Vehicle Components
- Mobile Equipment Components
- Outdoor & Off-Grid Equipment Components

### `specialty-vehicle-components.html`

Purpose:

Target specialty vehicle manufacturers, commercial vehicle conversion companies, and vehicle upfitters without implying CRA-ENG manufactures finished vehicles.

### `start-a-project.html`

Purpose:

Create a qualified B2B intake process.

Required inputs:

- Company and website
- Company type
- Vehicle or equipment application
- Component or subsystem
- Current project stage
- Drawings or samples available
- Current supplier status
- Expected volume
- Target timing
- Main problem
- NDA requirement

### `nda-confidentiality.html`

Purpose:

Explain verified procedures covering:

- NDA availability
- Drawings and samples
- Supplier disclosure
- Photography
- External distribution
- Project conflicts
- Client approval

## 5.2 Evidence Pages

### `case-studies.html`

Purpose:

Organize evidence by execution problem:

- Supplier development
- Prototype and first article
- Production readiness
- Quality recovery
- Change control
- Consolidation and installation kits

### `vehicle-power-management-specialty-mobile-unit.html`

Working public title:

> China-Side Supplier and Prototype Coordination for a Specialty Mobile Unit Power System

Publish only after:

- CRA-ENG’s role is verified
- Identifying details are removed
- Disclosure is approved
- Images are approved
- Outcomes are verified or omitted

## 5.3 Insights Page

### `insights.html`

Purpose:

Replace the current generic Blog index and organize new content around the commercial position.

## 5.4 Adjacent Market Pages

Create after the primary pages are substantive:

- `mobile-equipment-components.html`
- `outdoor-off-grid-equipment-components.html`

These pages can be linked from Markets as “coming next” only if that label is intentionally used. Prefer not to publish empty pages.

---

# 6. Navigation Changes

## 6.1 New Primary Navigation

- Markets
- Capabilities
- How We Execute
- Why a China Execution Partner
- Case Studies
- About
- Start a Project

`Start a Project` should be visually styled as the primary navigation CTA.

## 6.2 Markets Dropdown

- Mobile Grooming Vehicle Components
- Specialty Vehicle Components
- Mobile Equipment Components
- Outdoor & Off-Grid Equipment Components

Only link to published, substantive pages.

## 6.3 Capabilities Dropdown

Phase 1 may use section links within `capabilities.html`:

- Supplier Development
- Custom Components
- Prototypes & First Articles
- Production & Quality Control
- Change Control
- Consolidation & Installation Kits
- Repeat Production Supply

Separate capability pages can be created later if search demand and content depth justify them.

## 6.4 Remove From Primary Navigation

- Current Services dropdown
- Industries
- Process
- Singular Case Study
- Visit Blog
- Generic Contact
- Engineering Review
- Manufacturing Execution Support

These are replaced by the refined architecture.

## 6.5 Mobile Navigation Requirements

The coding phase must add:

- Visible menu button
- Keyboard-operable navigation
- Touch-friendly dropdowns or expandable groups
- Appropriate `aria` attributes
- Escape and outside-click behavior where applicable
- Clear focus styling
- Body scroll control when the menu is open
- Responsive layout without horizontal overflow

Do not depend on hover for core navigation.

---

# 7. Homepage Replacement Plan

## 7.1 Replacement Method

Replace the body content of `index.html` while preserving:

- Correct document structure
- Required favicon and font assets
- Shared header and footer integration
- Analytics or verification code if currently used and valid
- Custom domain behavior

Do not preserve the current homepage sections merely for reuse if they conflict with the new positioning.

## 7.2 New Homepage Sequence

### 1. Hero

- China Execution Partner position
- Target customer
- Execution scope
- Non-compete statement
- Primary and secondary CTAs

### 2. Who We Support

- Mobile grooming vehicle companies
- Specialty vehicle manufacturers
- Vehicle upfitters
- Mobile equipment manufacturers

### 3. Why Companies Need a China Execution Partner

- Seven execution gaps
- Link to dedicated page

### 4. What CRA-ENG Executes

- Supplier development
- Custom component sourcing
- Engineering communication
- Prototypes and first articles
- Production readiness
- Quality and change control
- Consolidation and kits
- Repeat supply

### 5. Component and Assembly Scope

- Water and fluid handling
- Auxiliary power and electrical
- Fabricated components and interiors
- Installation and service supply

### 6. Mobile Grooming Vehicle Focus

- Manufacturer-facing introduction
- Component scope
- Non-compete clarification
- Link to dedicated page

### 7. How We Execute

- Eight-step overview
- Link to detailed process

### 8. Responsibility and Control

- Client owns
- CRA-ENG owns within scope
- Supplier owns

### 9. More Than Supplier Introductions

- Execution after supplier selection
- Supplier-independent positioning

### 10. Evidence

- Verified documentation and work examples

### 11. Anonymous Engagement Preview

- Conservative, de-identified power-program example

### 12. Final CTA

- Component or supply challenge
- Confidential project discussion
- NDA option

## 7.3 Current Homepage Sections to Remove

- Generic “Why Products Fail” grid
- Broad engineering execution cards in their current form
- Generic five-step product development process
- Current industries icon grid
- Unsupported or weakly supported statistics
- Current case-study claims unless verified
- Duplicate contact CTAs
- EMC-dominant positioning

## 7.4 Current Homepage Elements That May Be Reused Conceptually

- Hero plus clear CTAs
- Card-based capability layout
- Process visualization
- Case-study preview
- Final CTA section

The content, hierarchy, styling, and responsive behavior should be rebuilt.

---

# 8. Header Changes

## 8.1 Brand Area

- Correct the logo path.
- Use a logo sized for desktop and mobile.
- Link the logo to `/` or `index.html`.
- Use accurate alt text: `CRA-ENG`.
- Avoid inline sizing when shared CSS can control the image.

## 8.2 Navigation

Replace current links with the new navigation structure.

Add:

- Mobile menu control
- Accessible expanded/collapsed states
- Active-page state
- Clear primary CTA

## 8.3 Services Dropdown

Remove the current Services dropdown.

Replace it with:

- Markets dropdown
- Capabilities dropdown

## 8.4 Header Behavior

- Maintain a stable height.
- Avoid layout shift after asynchronous fragment loading.
- Ensure the fixed header does not obscure page anchors.
- Make scroll behavior resilient when the shared header has not yet loaded.
- Ensure dropdowns work with mouse, keyboard, and touch.

## 8.5 Shared Fragment Decision

The site currently loads `header.html` with JavaScript `fetch()`.

During coding, choose one of two approaches:

### Option A: Retain shared fetch fragments

Advantages:

- Easier shared maintenance
- Minimal structural change

Requirements:

- Correct paths
- Error fallback
- Delay dependent JavaScript until injection completes
- Test under GitHub Pages

### Option B: Inline the shared header in each page

Advantages:

- Header appears without JavaScript
- Better resilience and potentially less layout shift

Disadvantages:

- More repetitive maintenance

### Recommendation

For the current small static site, retain shared fragments only if loading and accessibility are made reliable. Otherwise, use a simple build step or carefully inline the header. Do not retain the current fragile implementation unchanged.

---

# 9. Footer Changes

## 9.1 Positioning Statement

Replace the current broad description with:

> CRA-ENG supports specialty vehicle and mobile equipment companies with custom component and supplier execution in China.

Add:

> We support the companies that build specialized mobile units. We do not build or sell finished vehicles.

## 9.2 Footer Columns

### Markets

- Mobile Grooming Vehicle Components
- Specialty Vehicle Components
- Mobile Equipment Components
- Outdoor & Off-Grid Equipment Components

### Execution

- Capabilities
- How We Execute
- Why a China Execution Partner
- Case Studies

### Company

- About
- NDA & Confidentiality
- Insights
- Start a Project

### Contact

- Business email
- Shenzhen, China, if accurate
- Working language or time-zone information if useful
- NDA availability

## 9.3 Footer Repairs

- Correct the footer logo path.
- Correct malformed list markup.
- Replace placeholder company name and copyright text.
- Use the correct current year approach.
- Ensure footer links are keyboard accessible.
- Stack footer columns on mobile.
- Do not list nonlinked services as if they were navigation.

---

# 10. Image Requirements

## 10.1 Image Principles

Use:

- Real components
- Real specialized mobile unit environments
- Real supplier production
- Real prototype and first article inspection
- Real quality-control activity
- Real consolidation and kits
- Real CRA-ENG team activity

Avoid:

- Competitor-owned imagery
- Consumer grooming-service imagery
- Generic pet photos
- Generic handshake photos
- Unrelated PCB imagery
- Images that imply CRA-ENG manufactures complete vehicles
- Factory photos that imply CRA-ENG owns the facility
- AI images presented as project evidence

## 10.2 Homepage Images

### Hero

Required:

- Wide specialty mobile unit or component-execution image
- Subject positioned to preserve copy readability
- No competitor branding
- No implication that CRA-ENG built the finished vehicle

Preferred dimensions:

- Desktop source: approximately 1920 × 1080
- Mobile crop: approximately 1080 × 1350
- WebP

### Audience Cards

Four consistent images:

- Mobile grooming vehicle manufacturing/upfit context
- Specialty vehicle production/upfit context
- Vehicle upfitter or installed-component context
- Mobile equipment manufacturing context

### Execution Sections

- Supplier technical discussion
- Prototype measurement
- First article inspection
- Production follow-up
- Multi-supplier components
- Installation kit

### Diagrams

- Client → CRA-ENG → multiple suppliers
- Client/CRA-ENG/supplier responsibility model
- Requirement → supplier → prototype → production → consolidation → repeat supply

## 10.3 Mobile Grooming Vehicle Page Images

Required categories:

- Mobile grooming unit production or upfit environment
- Freshwater or wastewater tank
- Pump and plumbing components
- Hose, valve, and fitting assembly
- Auxiliary power component
- Control or wiring assembly
- Fabricated wet-area component
- Cabinet or interior hardware
- Mounting bracket or installation hardware
- Vehicle installation kit
- Replacement-part kit
- Prototype or first article inspection

Rights and context:

- Obtain permission for any client vehicle.
- Remove identifying logos where required.
- Caption images accurately.
- Never attribute a complete vehicle to CRA-ENG unless CRA-ENG actually built it—which is outside the approved position.

## 10.4 Why China Execution Partner Page Images

- Technical question or issue log
- Supplier capability review
- Prototype versus production comparison
- First article report
- Production inspection
- Revision-control diagram
- Multiple supplier consolidation
- Before/after kit organization

## 10.5 About Page Images

- CRA-ENG team
- Factory visit
- Technical review
- Measurement or inspection
- Supplier meeting
- Redacted project documentation

## 10.6 Image Standards

- Prefer WebP.
- Define width and height attributes.
- Use responsive `srcset` where beneficial.
- Compress hero images to an appropriate visual/performance balance.
- Use descriptive filenames.
- Write contextual alt text.
- Do not embed important copy inside images.
- Lazy-load below-the-fold content images.
- Do not lazy-load the primary hero image.

Recommended filenames:

- `cra-china-execution-specialty-vehicle.webp`
- `mobile-grooming-vehicle-water-components.webp`
- `grooming-unit-plumbing-assembly.webp`
- `specialty-vehicle-first-article-inspection.webp`
- `multi-supplier-vehicle-installation-kit.webp`
- `cra-supplier-production-quality-review.webp`

---

# 11. SEO Title and Meta Update Plan

## 11.1 Domain Standard

Use:

> `https://www.cra-eng.com`

for:

- Canonical URLs
- Open Graph URLs
- Sitemap URLs
- Structured data
- Robots sitemap reference

## 11.2 Required Metadata for Every Public Page

- Unique `<title>`
- Unique meta description
- One H1
- Self-referencing canonical
- `robots` directive
- Open Graph title
- Open Graph description
- Open Graph type
- Open Graph URL
- Open Graph image
- Twitter card
- Descriptive image alt text
- Appropriate structured data

## 11.3 Phase 1 Page Metadata

| Page | SEO title | Meta description |
|---|---|---|
| Home | China Execution Partner for Specialty Vehicles \| CRA-ENG | CRA-ENG manages suppliers, custom components, first articles, production quality, consolidation, and repeat supply in China for specialty vehicle and mobile equipment companies. |
| Why a China Execution Partner | Why Use a China Execution Partner? \| CRA-ENG | Learn how a China execution partner manages factory communication, suppliers, first articles, production quality, changes, consolidation, and repeat supply. |
| Mobile Grooming Vehicle Components | Mobile Grooming Vehicle Components & Supply Support \| CRA-ENG | China-side supplier, prototype, quality, consolidation, installation-kit, and repeat supply support for mobile grooming vehicle manufacturers and conversion companies. |
| Markets | Component & Supply Support for Specialty Mobile Units \| CRA-ENG | Explore China-side component and supplier support for mobile grooming vehicles, specialty vehicles, mobile equipment, and outdoor/off-grid equipment. |
| Specialty Vehicle Components | Specialty Vehicle Components & Supply Chain Support \| CRA-ENG | Custom component, supplier, first article, production quality, consolidation, and repeat supply support for specialty vehicle manufacturers and upfitters. |
| Capabilities | China Component & Supplier Execution Capabilities \| CRA-ENG | Supplier development, custom component sourcing, prototypes, first articles, production quality, change control, consolidation, and repeat supply in China. |
| How We Execute | How CRA-ENG Executes Component Programs in China | See how CRA-ENG manages technical requirements, suppliers, prototypes, first articles, production, quality, consolidation, and repeat supply. |
| About | About CRA-ENG \| China Execution Partner | CRA-ENG is an engineering-led, China-based execution partner supporting specialty vehicle and mobile equipment companies with supplier and component programs. |
| Start a Project | Start a China Component Execution Project \| CRA-ENG | Discuss a custom component, supplier, prototype, production, quality, consolidation, or repeat supply challenge with CRA-ENG. |
| NDA & Confidentiality | NDA & Project Confidentiality \| CRA-ENG | Learn how CRA-ENG handles NDAs, drawings, samples, supplier disclosure, project information, and confidential manufacturing programs. |
| Case Studies | China Component & Supplier Execution Case Studies \| CRA-ENG | Review examples of supplier development, prototype coordination, first article validation, production quality, change control, and consolidation. |
| Insights | Specialty Vehicle Supply & China Execution Insights | Practical insights for specialty vehicle and mobile equipment companies managing custom components and suppliers in China. |

## 11.4 Structured Data

Recommended:

- `Organization` on Home and About
- `Service` on commercial pages
- `BreadcrumbList` on interior pages
- `Article` on Insights content

Do not add:

- Unverified ratings
- Unverified project counts
- Unsupported awards
- Unsupported certifications

## 11.5 Legacy SEO Updates

For retained articles:

- Repair corrupted titles and visible text.
- Add canonical URLs.
- Add missing descriptions.
- Add breadcrumbs.
- Add contextual commercial links.
- Remove broken article links.
- Consolidate duplicate topics.
- Keep legacy compliance content out of primary navigation.

---

# 12. Internal Linking Structure

## 12.1 Core Conversion Flow

```text
Home
  ├── Markets
  │     ├── Mobile Grooming Vehicle Components
  │     ├── Specialty Vehicle Components
  │     ├── Mobile Equipment Components
  │     └── Outdoor & Off-Grid Equipment Components
  ├── Why a China Execution Partner
  ├── Capabilities
  ├── How We Execute
  ├── Case Studies
  └── Start a Project
```

## 12.2 Homepage Links

Home should link to:

- `markets.html`
- `mobile-grooming-vehicle-components.html`
- `specialty-vehicle-components.html`
- `why-china-execution-partner.html`
- `capabilities.html`
- `how-we-execute.html`
- `case-studies.html`
- `start-a-project.html`
- `nda-confidentiality.html`

## 12.3 Why a China Execution Partner Links

Link to:

- Capabilities from solution descriptions
- How We Execute from the process explanation
- Mobile Grooming Vehicle Components from a relevant example
- Specialty Vehicle Components from a relevant example
- Case Studies from proof sections
- Start a Project from all final and mid-page CTAs

## 12.4 Mobile Grooming Vehicle Components Links

Link to:

- Why a China Execution Partner
- Capabilities
- How We Execute
- Relevant anonymous case study
- NDA & Confidentiality
- Start a Project

Future relevant Insights should link back to this market page.

## 12.5 Specialty Vehicle Components Links

Link to:

- Capabilities
- How We Execute
- Why a China Execution Partner
- Case Studies
- Start a Project

## 12.6 Capabilities Links

Link each capability to:

- Relevant process section
- Relevant market page
- Relevant case study
- Start a Project

Initially use anchored sections rather than creating thin standalone pages.

## 12.7 How We Execute Links

Link:

- Supplier-development stages to Capabilities
- Market examples to relevant market pages
- Confidentiality references to NDA & Confidentiality
- Proof references to Case Studies
- Every practical entry point to Start a Project

## 12.8 About Links

Link to:

- How We Execute
- Why a China Execution Partner
- NDA & Confidentiality
- Case Studies
- Start a Project

## 12.9 Insights Links

Every new Insight should link to:

1. One relevant market page
2. One relevant capability or execution page
3. Start a Project where commercially appropriate

Legacy articles should link contextually to the new commercial architecture without forcing unrelated keyword connections.

## 12.10 Anchor Text Guidance

Use descriptive anchor text:

- Mobile grooming vehicle component support
- China supplier development
- First article validation process
- Multi-supplier consolidation
- Vehicle installation kits
- Specialty vehicle component program

Avoid:

- Click here
- Learn more, when a more descriptive phrase fits
- Repeating the exact same keyword unnaturally

---

# 13. Implementation Sequence

## Stage 1: Preparation

1. Approve all core-page copy.
2. Verify capabilities and responsibility boundaries.
3. Verify supplier-independence language.
4. Validate the anonymous case study.
5. Inventory usable images and evidence.
6. Approve URL and redirect map.
7. Back up the current production state.

## Stage 2: Shared Foundation

1. Refactor `css/style.css` into a responsive shared system.
2. Replace `header.html`.
3. Replace `footer.html`.
4. Update `js/script.js`.
5. Fix shared image paths.
6. Establish page templates and metadata patterns.

## Stage 3: Core Pages

1. Replace `index.html`.
2. Create `why-china-execution-partner.html`.
3. Create `mobile-grooming-vehicle-components.html`.
4. Create `capabilities.html`.
5. Create `how-we-execute.html`.
6. Create `start-a-project.html`.

## Stage 4: Market and Trust Pages

1. Create `markets.html`.
2. Create `specialty-vehicle-components.html`.
3. Rewrite `about.html`.
4. Create `nda-confidentiality.html`.

## Stage 5: Evidence and Insights

1. Create `case-studies.html`.
2. Create the anonymous case study after verification.
3. Create `insights.html`.
4. Reorganize legacy articles.

## Stage 6: Redirects and Cleanup

1. Redirect `services.html`.
2. Redirect `industries.html`.
3. Redirect `process.html`.
4. Redirect `product-development-process.html`.
5. Redirect `contact.html`.
6. Redirect `case-study.html`.
7. Redirect or replace `blog.html`.
8. Consolidate duplicate EMI pages.
9. Remove broken internal links.

## Stage 7: SEO and Validation

1. Add metadata and canonicals.
2. Add structured data.
3. Update `robots.txt`.
4. Regenerate `sitemap.xml`.
5. Validate every link and image.
6. Test form submission success and failure.
7. Test desktop, tablet, and mobile layouts.
8. Test keyboard and touch navigation.
9. Run accessibility and performance checks.
10. Verify production deployment and redirects.

---

# 14. Phase 1 Completion Criteria

Phase 1 is complete when:

- The homepage communicates target, problem, responsibility, and differentiation within ten seconds.
- Every core page contains the non-compete boundary where relevant.
- Primary navigation follows the refined architecture.
- All core pages are responsive and accessible.
- No primary CTA leads to a broken or ambiguous form.
- Shared header and footer load reliably.
- All published claims are verified.
- The anonymous case study is accurate and de-identified.
- Canonical URLs use `https://www.cra-eng.com`.
- The sitemap contains only intended public pages.
- Legacy content no longer defines the commercial brand.
- Internal links connect markets, capabilities, process, proof, and conversion.
- No broken local links or missing shared images remain.
- The GitHub Pages production site is validated after deployment.

