# Mopau Studio Marketing Site Requirements

## Mission, Audience, and Key Calls-to-Action
- **Mission**: Communicate Mopau Studio's ability to ship "inevitable" digital experiences by combining research-led design with full-stack TypeScript delivery. The site should make it simple for purposeful, product-led teams to understand Mopau's value and start a conversation.
- **Primary personas**:
  1. **Product and innovation leads** at scale-ups who need a partner to run strategy sprints and deliver measurable product increments.
  2. **Marketing and digital experience directors** responsible for brand consistency across campaigns who require a nimble studio that can own design systems and front-end craft.
  3. **Founders/operations leaders** at purposeful startups who need an embedded team to launch or refresh their customer-facing product with confidence.
- **Key calls-to-action** (CTAs):
  - "Start a project" button in the hero and sticky navigation leading to the contact form.
  - "Download deck" secondary CTA to capture leads interested in credentials.
  - Section-level anchors for Services, Work, and Contact to encourage scroll depth and direct linking from outbound campaigns.

## Information Architecture & Wireframes
| Page / Section | Purpose | Key Modules / Wireframe Notes |
| --- | --- | --- |
| **Home** (`/`) | Snapshot of Mopau's value prop with links into deeper sections. | Hero (tagline, lede, primary/secondary CTA), Services grid (3 cards), Selected Work list (logo + result metric), Contact form anchored at bottom. Navigation anchors to sections. |
| **Services** (`/services`) | Expand each capability with process, deliverables, and proof. | Hero with service statement, tabbed or stacked cards per service, testimonial pull-quote, CTA to book discovery call. |
| **Work** (`/work`) | Case studies and outcomes. | Filterable grid of case cards (logo, problem, impact metric), detail page template with problem/approach/outcome structure, CTA banner to contact. |
| **Studio** (`/studio`) | Culture, team, and ways of working. | Timeline/values list, remote-first collaboration tools, leadership bios, hiring CTA. |
| **Resources** (`/resources`) | Thought leadership, templates, downloadable deck. | Article list, featured download cards (deck, playbooks), newsletter signup. |
| **Contact** (`/contact`) | Dedicated inquiry surface for leads. | Form (name, email, company, project notes, timeline), optional Calendly embed, office/location info. |

### Wireframe Descriptions
- **Hero**: Large H1 "Digital experiences that feel inevitable" with supporting paragraph and dual CTAs. Background gradient or abstract pattern aligned with brand palette. Desktop layout: copy left, supporting image/right column. Mobile: stacked.
- **Services Grid**: Three equal cards featuring title, 1-sentence value, icons illustrating strategy, design, and delivery. Cards link to dedicated service details.
- **Selected Work List**: Vertical list of case highlights with company name, short descriptor, and bold metric (e.g., ↑38% signups). Optional CTA "See case study" per item.
- **Contact Form**: Two-column card on desktop with form on left and trust badges/social proof on right. Submit button "Send brief" triggers API or Netlify form.

## Content & Asset Responsibilities
| Content Area | Owner | Source of Truth | Storage Location / Notes |
| --- | --- | --- | --- |
| Messaging & copy (hero, services, case studies) | Strategy Lead (Mopau) | Approved doc in Notion "Mopau Web Copy" | Synced into repository as Markdown/TSX (`src/pages/`, `src/content/`). |
| Imagery & illustrations | Design Lead | Figma file "Mopau Brand" | Exported assets saved in `public/images/` (WebP, SVG). |
| Logos & brand marks | Brand Ops | Brand asset library | Place optimized versions in `public/brand/`. |
| Downloadable deck & templates | Partnerships Lead | Google Drive folder "Credentials" | Add zipped exports to `public/downloads/`; link via `/resources`. |
| Case study metrics | Client success | Airtable "Outcomes" base | Sync highlights manually during release cycles. |
| CMS integration | Not planned for MVP | N/A | Future consideration: Sanity or Contentful if editing becomes a bottleneck. |

## Acceptance Criteria for MVP Launch
1. **Navigation & IA**: Header includes Home, Services, Work, Studio, Resources, and Contact links (anchor to /#contact acceptable for MVP). Footer repeats CTAs plus social/contact info.
2. **Hero & Messaging**: Mission statement, lede, and dual CTAs visible above the fold on desktop and mobile breakpoints.
3. **Services Section**: Three service cards with concise descriptions and anchors for future deep pages.
4. **Selected Work Section**: Minimum two case highlights with company name, engagement summary, and measurable outcome metric.
5. **Contact Section**: Form with required name/email inputs, textarea for project notes, and functioning submission handler (even if mock).
6. **Brand Assets**: Placeholder imagery and icons pulled from `public/images/` to demonstrate brand direction.
7. **Performance & Accessibility**: Lighthouse performance & accessibility scores ≥ 90 on desktop; keyboard focus visible for all interactive elements.
8. **Analytics/Tracking Ready**: Environment variable hooks for analytics (e.g., Plausible) plus privacy-friendly banner copy prepared.
9. **Content Governance**: README updated to reference requirements doc and instructions for updating copy/assets.

Use this document to drive future issues (e.g., individual case study pages, CMS integration, analytics configuration) and PR acceptance criteria.
