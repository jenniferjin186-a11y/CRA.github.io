# CRA-ENG Website Modification Plan Summary

## Status

The website has been audited and a strategic modification plan has been completed. No existing website source files have been modified.

The work completed so far is planning and documentation only. Implementation remains pending.

---

# 1. Key Decisions and Recommendations

## 1.1 Reposition CRA-ENG as a China Execution Partner

### Decision

Position CRA-ENG as:

> The China Execution Partner for specialty-vehicle and mobile-equipment companies—managing custom components, suppliers, prototypes, production, quality, and delivery.

### Reason

The current positioning as a general engineering consultancy is too broad and does not make CRA-ENG immediately relevant to companies similar to Wag’n Tails. Specialty-vehicle manufacturers need an accountable China-side execution team more than they need abstract engineering advice or a conventional sourcing agent.

The new position defines:

- The customer: specialty-vehicle and mobile-equipment companies
- The geography: China
- The responsibility: execution
- The scope: components, suppliers, prototypes, production, quality, and delivery
- The outcome: reliable production supply with less management burden

---

## 1.2 Focus the Initial Market on Mobile Pet Care and Specialty Vehicles

### Decision

Prioritize these markets during the first release:

1. Mobile pet care vehicles
2. Specialty vehicles and commercial conversions

Expand later into:

3. Mobile equipment
4. Outdoor and off-grid equipment

### Reason

Mobile pet care vehicles provide a clear, differentiated entry market with tangible component and subsystem needs:

- Water and wastewater systems
- Pumps, heaters, valves, and plumbing
- Auxiliary power and electrical systems
- Cabinets and fabricated interiors
- Grooming equipment
- Mounting hardware
- Installation kits
- Replacement parts

Leading with all four markets at equal depth would weaken the initial message. Mobile equipment and outdoor/off-grid products are logical adjacent markets but should be developed after the core positioning is established.

---

## 1.3 Position CRA-ENG Between the Client and Its China Supply Base

### Decision

Communicate the division of responsibility as:

> The client owns the vehicle, product, and customer experience. CRA-ENG owns execution across the China supply base.

### Reason

Companies similar to Wag’n Tails manufacture and integrate their specialty vehicles domestically. CRA-ENG should not imply that it replaces the client’s vehicle engineering, certification responsibility, or final assembly operation.

The more credible role is to execute custom components, assemblies, supplier programs, validation, quality control, consolidation, and repeat supply in China.

---

## 1.4 Differentiate CRA-ENG From Sourcing Agents and Factories

### Decision

The site should explain that CRA-ENG is:

- Not a supplier directory
- Not a transactional sourcing agent
- Not tied to one factory
- Not a general consultancy
- Not a finished-vehicle manufacturer

CRA-ENG should instead be presented as an accountable execution team.

### Reason

Generic sourcing language commoditizes the service and attracts price-led inquiries. Specialty-vehicle companies need application understanding, specifications, acceptance criteria, supplier coordination, change control, and production accountability.

The core differentiation should be:

| Typical sourcing approach | CRA-ENG approach |
|---|---|
| Finds available products | Develops against application requirements |
| Relies on supplier claims | Defines and verifies acceptance criteria |
| Focuses on unit price | Manages technical, quality, and delivery risk |
| Introduces factories | Coordinates execution across suppliers |
| Ends at shipment | Supports changes and repeat production |

---

## 1.5 Replace the Homepage Completely

### Decision

Replace the existing homepage content rather than editing it incrementally.

The new homepage should contain:

1. Positioning hero
2. Target customer identification
3. Buyer problems
4. CRA-ENG execution capabilities
5. Component and system categories
6. Mobile pet care focus
7. Execution process
8. Differentiation from sourcing agents
9. Evidence and trust
10. Featured case study or representative engagement
11. Relevant insights
12. Final project CTA

### Reason

The current homepage is organized around broad engineering support, EMC risk, generic product categories, and unsupported or weakly supported proof points. Its structure does not communicate the new audience or offer within ten seconds.

The replacement homepage must immediately answer:

- Who is this for?
- What does CRA-ENG execute?
- Why is China-side execution difficult?
- How is CRA-ENG different?
- What should the visitor do next?

---

## 1.6 Use a Focused Primary Navigation

### Decision

Recommended navigation:

- Markets
- Capabilities
- How We Execute
- Case Studies
- Insights
- About
- Start a Project

### Reason

The current navigation reflects the old general consulting structure. The new navigation follows the buyer’s evaluation process:

1. Confirm market relevance
2. Inspect capabilities
3. Understand the operating model
4. Review evidence
5. Evaluate expertise
6. Establish trust
7. Start a conversation

“Start a Project” should be visually emphasized as the primary CTA.

---

## 1.7 Reuse Valuable Existing Pages but Consolidate Thin or Duplicate Pages

### Decision

Keep and rewrite:

- `index.html`
- `about.html`
- `contact.html`
- `case-study.html`
- `manufacturing-execution-support.html`
- `supplier-qualification-factory-assessment.html`
- `engineering-review.html`
- `blog.html`

Consolidate:

- `services.html` with `manufacturing-execution-support.html`
- `process.html` with `product-development-process.html`
- Commercial content from `engineering-review.html` with relevant prototype-evaluation content
- Duplicate EMI/PCB articles into one canonical article

### Reason

Reusing existing files reduces implementation risk and can preserve search value. Thin, overlapping, or duplicate pages dilute the message, divide authority, and create unnecessary maintenance.

Existing URLs should not be deleted without evaluating traffic, backlinks, and search indexing. When URLs change, the old files should become redirect pages and the new destinations should use canonical metadata.

---

## 1.8 Move Legacy EMC and General Hardware Content Out of the Commercial Hierarchy

### Decision

Retain technically useful legacy articles in an “Engineering & Compliance” archive within Insights, but remove them from the primary commercial journey.

### Reason

The articles may have search value and demonstrate engineering knowledge. Deleting them immediately could discard useful authority.

However, emphasizing EMC, PCB design, IoT development, and generic certification makes CRA-ENG look like a broad electronics consultancy. The content should support the brand without defining it.

---

## 1.9 Create Market-Specific and Capability-Specific Pages

### Decision

Create the following launch-critical pages:

- `markets.html`
- `mobile-pet-care-vehicles.html`
- `specialty-vehicles.html`
- `capabilities.html`
- `custom-components-assemblies.html`
- `supplier-development.html`
- `production-quality-control.html`
- `kitting-consolidation-delivery.html`
- `how-we-execute.html`
- `start-a-project.html`
- `nda-confidentiality.html`

Create later:

- `water-plumbing-systems.html`
- `mobile-power-electrical-systems.html`
- `fabricated-interiors-hardware.html`
- `prototype-validation.html`
- `mobile-equipment.html`
- `outdoor-off-grid-equipment.html`
- `insights.html`

### Reason

Market pages answer, “Do you understand companies like us?”

Capability pages answer, “Can you execute the work we need?”

Process, case-study, confidentiality, and project-intake pages answer, “Can we trust you, and how do we start?”

This is more persuasive than placing all services and markets on one broad page.

---

## 1.10 Prioritize Kitting and Multi-Supplier Consolidation

### Decision

Give kitting, consolidation, and delivery a dedicated capability page and prominent homepage visibility.

### Reason

Specialty-vehicle manufacturers often use low-to-medium volumes and multiple custom components. Their main problem is not always finding a single factory; it is receiving compatible, inspected, labeled, production-ready parts from several suppliers.

Kitting and consolidation provide a tangible, operationally valuable point of differentiation.

---

## 1.11 Build SEO Around B2B Commercial Intent

### Decision

Prioritize keyword families containing qualifiers such as:

- OEM
- B2B
- Component
- Custom
- Manufacturer
- Supplier
- Assembly
- System
- Production
- Quality
- Vehicle conversion

Core keyword themes:

- China execution partner
- China manufacturing execution partner
- Specialty vehicle components
- Mobile grooming van components
- Mobile grooming vehicle equipment
- China supplier development
- Custom component manufacturing China
- Production quality control China
- Component kitting services China
- Multi-supplier consolidation China

### Reason

Broad keywords such as “China sourcing agent” attract price-focused and poorly qualified inquiries.

Consumer phrases such as “grooming vans for sale” attract groomers shopping for complete vehicles, not vehicle manufacturers seeking component and supply-chain support.

Commercial qualifiers help attract companies with relevant manufacturing and supplier-management needs.

---

## 1.12 Standardize Metadata and Technical SEO

### Decision

Every public page should receive:

- A unique title
- A unique meta description
- One H1
- A self-referencing canonical URL
- Open Graph metadata
- Consistent `https://www.cra-eng.com` URLs
- Descriptive image alt text
- Logical internal links
- Appropriate structured data

The sitemap should contain only intended public landing pages and articles.

### Reason

The current website contains:

- Missing descriptions
- No canonical URLs
- Inconsistent domain forms
- Duplicate topics
- Component files included in the sitemap
- Weak blog metadata
- Broken links
- Corrupted characters

Standardization will clarify page purpose for search engines and support the new topical structure.

---

## 1.13 Use Real Execution Evidence

### Decision

Prioritize real photographs and documentation:

- Components
- Vehicle installation environments
- Supplier production
- Prototype inspection
- First articles
- Functional tests
- Corrective-action evidence
- Kitting and packaging
- Real team and factory visits

### Reason

The new position depends on trust and operational credibility. Generic stock imagery cannot prove that CRA-ENG understands vehicle systems or can manage suppliers.

Real evidence will influence qualified buyers more than decorative visuals or unsupported claims.

---

## 1.14 Avoid Unsupported Claims

### Decision

Only publish statistics, results, client logos, testimonials, certifications, case studies, and response-time promises that can be substantiated.

### Reason

Specialty-vehicle buyers are likely to conduct detailed due diligence. Unsupported claims reduce trust and could create legal or reputational risk.

Representative engagement scenarios may be used if they are clearly labeled as examples rather than completed projects.

---

# 2. Recommended Existing-Page Actions

## Keep and Rewrite

| Existing file | Recommended future role |
|---|---|
| `index.html` | New positioning-focused homepage |
| `about.html` | Trust, background, China presence, and working model |
| `contact.html` | Project-intake page or redirect to `start-a-project.html` |
| `case-study.html` | Case-study index or redirect to `case-studies.html` |
| `manufacturing-execution-support.html` | Core China execution service |
| `supplier-qualification-factory-assessment.html` | Supplier development and qualification |
| `engineering-review.html` | Product and supplier readiness |
| `blog.html` | Insights index or redirect to `insights.html` |
| `header.html` | New navigation and CTA |
| `footer.html` | New positioning, site links, trust, and contact information |
| `css/style.css` | Responsive shared design system |
| `js/script.js` | Accessible navigation and limited interactions |
| `robots.txt` | Updated search directives |
| `sitemap.xml` | Regenerated public sitemap |
| `CNAME` | Existing custom-domain configuration |

## Recommended Renames

| Existing file | Proposed destination |
|---|---|
| `blog.html` | `insights.html` |
| `contact.html` | `start-a-project.html` |
| `process.html` | `how-we-execute.html` |
| `services.html` | `capabilities.html` |
| `industries.html` | `markets.html` |
| `case-study.html` | `case-studies.html` |

Renames should use redirect files at the old URLs where practical.

## Recommended Merges

| Existing content | Destination |
|---|---|
| `services.html` + `manufacturing-execution-support.html` | Core China execution capability page |
| `process.html` + `product-development-process.html` | `how-we-execute.html` |
| Commercial parts of `engineering-review.html` + prototype-evaluation material | Product and Supplier Readiness |
| `emi-pcb-design-problems.html` + `emi-problems-in-pcb.html` | One canonical legacy article |
| Existing EMC and certification articles | Engineering & Compliance archive within Insights |

---

# 3. Homepage Replacement Summary

The homepage should communicate within ten seconds:

1. CRA-ENG serves specialty-vehicle and mobile-equipment companies.
2. CRA-ENG operates as the client’s China execution team.
3. The company manages custom components and supplier programs.
4. Its scope runs from requirements and prototypes to production and delivery.
5. The client can begin with a component, drawing, sample, or supplier problem.

Recommended hero:

> Your China Execution Partner for Specialty Vehicles and Mobile Equipment

Recommended supporting copy:

> CRA-ENG helps specialty-vehicle manufacturers develop and produce custom components, assemblies, and equipment in China—from supplier qualification and prototypes through quality-controlled production and delivery.

Recommended primary CTA:

> Discuss a Component or Supply Challenge

Recommended secondary CTA:

> See How We Execute

---

# 4. Image Requirements Summary

## Required Image Categories

- Specialty-vehicle and mobile grooming interiors
- Water and wastewater systems
- Pumps, heaters, valves, and plumbing kits
- Tanks and molded components
- Batteries, inverters, wiring, and control panels
- Stainless steel and aluminum assemblies
- Cabinets and mounting hardware
- Prototype and first-article inspection
- Supplier production environments
- Consolidated component and installation kits
- Packaging and shipment preparation
- CRA-ENG team and factory visits

## Image Rules

- Use owned, licensed, or client-approved images.
- Do not copy imagery from target companies or competitors.
- Do not imply that CRA-ENG manufactured a product it did not supply.
- Label conceptual renders when they are not real products.
- Avoid generic handshakes, circuit boards, and factory skylines.
- Prefer WebP.
- Provide desktop and mobile-safe hero crops.
- Compress images and define dimensions.
- Use descriptive filenames and alt text.
- Remove or blur confidential information.
- Do not use client logos without written permission.

## Recommended Supporting Diagrams

- Client → CRA-ENG → multiple suppliers
- Requirement-to-delivery workflow
- Multi-supplier consolidation model
- Component-to-installation-kit process
- Client versus CRA-ENG responsibility
- Quality-control approval gates

---

# 5. Files Modified or Created

## Existing Website Files Modified

None.

No HTML, CSS, JavaScript, image, sitemap, robots, or configuration file has been changed.

## Planning Files Created

1. `CRA-website-strategy.md`
   - Contains the complete proposed website architecture, page purposes, SEO targets, and content priorities.

2. `CRA-website-modification-plan-summary.md`
   - Contains this decision summary, rationale, implementation status, and pending tasks.

---

# 6. Pending Tasks and Next Steps

## Before Implementation

1. Confirm the final business positioning statement.
2. Confirm whether mobile pet care vehicles will be the primary launch market.
3. Confirm the exact services CRA-ENG can currently deliver.
4. Define boundaries around engineering design, certification, logistics, and legal responsibility.
5. Verify all existing experience statistics and claims.
6. Identify genuine case studies that can be published.
7. Obtain permission for client names, logos, testimonials, and project images.
8. Confirm NDA and confidentiality procedures.
9. Decide which proposed URL renames should be implemented.
10. Review traffic and backlinks before retiring or redirecting existing URLs.

## Content Preparation

1. Approve homepage copy.
2. Draft Mobile Pet Care Vehicles page.
3. Draft Specialty Vehicles page.
4. Draft Capabilities overview.
5. Draft How We Execute page.
6. Draft Supplier Development page.
7. Draft Production & Quality Control page.
8. Draft Kitting & Delivery page.
9. Rewrite About page.
10. Design the Start a Project questionnaire.
11. Prepare NDA & Confidentiality content.
12. Prepare at least one credible case study.

## Visual Asset Preparation

1. Inventory existing owned images.
2. Identify missing market and capability photographs.
3. Arrange new factory, inspection, component, and team photography.
4. Create the execution-process diagram.
5. Create the multi-supplier consolidation diagram.
6. Prepare desktop and mobile hero crops.
7. Establish filenames, compression standards, and alt text.

## Technical Implementation

1. Repair existing broken paths and character encoding.
2. Replace the shared header and footer.
3. Implement responsive navigation.
4. Establish reusable page and section styles.
5. Replace the homepage.
6. Create launch-critical market and capability pages.
7. Implement redirects for renamed pages.
8. Update internal links.
9. Add canonical and social metadata.
10. Add appropriate structured data.
11. Regenerate the sitemap.
12. Update robots directives if required.
13. Improve the project form and verify submission success.
14. Add accessibility improvements.
15. Optimize images and page performance.

## Validation Before Launch

1. Validate every local link and image.
2. Check HTML structure and headings.
3. Test desktop, tablet, and mobile layouts.
4. Test keyboard and touch navigation.
5. Test the project form with successful and failed submissions.
6. Verify canonical URLs and redirects.
7. Check page titles and descriptions.
8. Validate structured data.
9. Run accessibility and performance audits.
10. Review all claims, case studies, and imagery for accuracy.
11. Verify the production site after deployment.
12. Submit the new sitemap to search engines.

---

# 7. Recommended Implementation Sequence

## Phase 1: Positioning Foundation

1. Approve positioning and service boundaries.
2. Prepare content and evidence.
3. Repair technical defects.
4. Replace header and footer.
5. Replace homepage.
6. Create Markets and Capabilities overviews.
7. Create Mobile Pet Care Vehicles.
8. Create Specialty Vehicles.
9. Create How We Execute.
10. Rebuild About and Start a Project.

## Phase 2: Commercial Depth

1. Custom Components & Assemblies
2. Supplier Development
3. Production & Quality Control
4. Kitting, Consolidation & Delivery
5. Water & Plumbing Systems
6. Mobile Power & Electrical Systems
7. Prototype Validation
8. NDA & Confidentiality

## Phase 3: Proof and Search Acquisition

1. Publish genuine case studies.
2. Replace Blog with Insights.
3. Publish the mobile pet care content cluster.
4. Publish specialty-vehicle supplier and quality content.
5. Consolidate legacy articles.
6. Expand into mobile equipment.
7. Expand into outdoor and off-grid equipment.

---

# Final Recommendation

The first implementation should remain focused on one promise:

> CRA-ENG gives specialty-vehicle companies an accountable team in China to turn component requirements into reliable production supply.

The site should not attempt to communicate every possible engineering capability at launch. It should first establish market relevance, execution ownership, tangible component scope, operational credibility, and a clear path to start a project.
