# Ebron Sustain

Lovable Prompt — Ebron Sustainable Solution Website

Paste the section below into Lovable. Upload the logo PNGs alongside the prompt so Lovable can pick the right variant per placement.

Project

Build an elegant marketing website for Ebron Sustainable Solution, a Nigerian social enterprise that brings clean cookstoves, solar home systems, and off-grid energy to rural communities through education, community partnership, and flexible financing. The brand archetype is The Caregiver: warm, human, trustworthy.

The aesthetic target is climate-tech meets Kinfolk. The palette is punchy (bright leaf green, deep forest, sunny yellow), but the execution is editorial and restrained: generous whitespace, serif display type, real documentary photography, and copy that reads like it was written by a person rather than a marketing generator.

The site is a single-page marketing site with anchor navigation (Home / Our Work / Impact / Story / Team / Contact all scroll to sections), plus a separate /partner page for organizations and funders.

Voice & Copy Rules

The copy in this brief is final. Do not rewrite it, do not "improve" it, do not add flourishes. It has been carefully written to avoid the following AI-writing patterns, and any regeneration should preserve that:

No em dashes as rhythm devices. Use commas, periods, or parentheses.

No "Not X, but Y" constructions.

No staccato sentence fragments strung together for drama.

No aphoristic one-liners at the end of sections.

No italicized single-word emphasis.

Avoid: "empower," "leverage," "unlock," "harness," "seamless," "cutting-edge," "innovative," "at the intersection of," "truly," "genuinely," "actually" as intensifiers.

Use "rural communities," "rural households," or "families we work with" as the default. Only use "village" or "villages" when referring to something specifically village-level (a village head, village-scale infrastructure).

Brand Identity

Logo

I'm uploading the Ebron logo files with this prompt. There are two main marks:

Primary wordmark: EBRON in a heavy geometric bold sans, with the "O" replaced by a green circle containing a yellow lightning bolt. "SUSTAINABLE SOLUTION" sits beneath as a small tagline. Use this in the main navigation.

Alternate mark: A four-leaf mark (green leaves forming a rounded clover shape) with EBRON set beneath. Use this in the footer and as the favicon.

Pick the version that fits each context, and use the reversed (white) version on dark green backgrounds. Render the wordmark as an image rather than trying to recreate it in HTML, since the lightning-bolt "O" is custom.

Brand Colors

Lock these into the Tailwind config as CSS variables:

--ebron-green: #7CB342 (bright leaf green, primary brand color)

--ebron-green-dark: #1F4C2C (deep forest green, for headings and dark sections)

--ebron-yellow: #F9C74F (warm yellow, from the bolt, for small accents)

--ebron-cream: #F7F3EA (warm ivory, main page background)

--ebron-sand: #ECE5D3 (soft sand, alternate section background)

--ebron-charcoal: #1E1E1C (near-black, body text)

--ebron-muted: #6E6A62 (warm grey, secondary text and dividers)

Usage rules:

Body copy: --ebron-charcoal on cream, --ebron-cream on dark green.

Headings: --ebron-green-dark. Bright green is reserved for CTAs, small accents, and the logo. Never use bright green for large headings.

Primary CTAs: --ebron-green background, --ebron-cream text, hover shifts to --ebron-green-dark.

Accent details (small numerals, key stats, decorative underlines): --ebron-yellow.

Dark hero and impact sections: --ebron-green-dark background.

Never use pure white or pure black.

Typography

Display and headings: Fraunces (Google Fonts, variable). Large sizes, tight leading.

Body: Inter, 17-18px, line-height 1.7.

Eyebrow labels: Inter uppercase, 12px, letter-spacing 0.18em, in --ebron-green.

Do not use bold in body copy. If you need emphasis, use italics sparingly, and never on a single isolated word for effect.

Numerals in stats are Fraunces, not Inter.

Layout & Motion

Max content width around 1280px, with full-bleed sections for hero and impact.

Section vertical padding: 140-180px desktop, 80px mobile.

Asymmetric editorial layouts. Text often offset to one side with an image beside it.

Motion is subtle: fade-up on scroll (16px translate, 600ms ease-out). Slow ken-burns on the hero image over 20 seconds. Text link hover is a 2px yellow underline that draws from left to right. Button hover shifts from bright green to dark green.

No parallax, no scroll-jacking, no bouncy springs.

Imagery

Warm, documentary photography of rural Nigerian and West African life. Women cooking, children, solar panels on rural rooftops, hands, golden-hour landscapes, market scenes. Search Unsplash for terms like: "nigeria village woman", "african woman cooking", "solar panel africa", "rural nigeria market", "african child home", "cookstove", "golden hour africa landscape". Every image should look photographed, not stock. Apply filter: saturate(0.97) contrast(1.02) on all imagery.

Iconography

Thin-line Lucide icons (1.25px stroke), 20px, in --ebron-green-dark. Icons are secondary. Never lead a section with icons.

Global Elements

Navigation (fixed top)

Background: translucent cream with backdrop blur. Subtle 1px bottom border in muted at 15% once the user has scrolled.

Left: uploaded Ebron logo wordmark, cream-background version, height around 36px.

Center: Our Work · Impact · Story · Team · Partner (Inter 15px, --ebron-charcoal, hover to --ebron-green-dark with a 2px yellow underline).

Right: bright green pill button "Get In Touch" that scrolls to contact.

Mobile: hamburger opens a full-screen --ebron-green-dark overlay with cream links in large Fraunces italic.

Footer

Background --ebron-green-dark, text --ebron-cream.

Left column: the four-leaf Ebron mark (reversed/white version) at around 64px, followed by "Clean energy for a sustainable future." in Fraunces italic, and a two-line description.

Middle column: quick links (Our Work, Impact, Story, Team, Partner With Us, Contact).

Right column: email, phone, "Based in Nigeria. Serving rural communities across the South." Social icons in cream (Instagram, LinkedIn, X).

Bottom bar (thin 1px cream-at-15% divider above): "© 2026 Ebron Sustainable Solution."

Homepage Sections (in order)

1. Hero

Full-viewport height. Full-bleed background: golden-hour photograph of a rural Nigerian setting, warm light, ideally with a woman in the foreground going about her day. A soft dark green gradient overlay (--ebron-green-dark at 45% opacity) fades from bottom-left to transparent top-right.

Text sits bottom-left with generous padding:

Eyebrow (small caps, --ebron-yellow): CLEAN COOKSTOVES. SOLAR HOME SYSTEMS. OFF-GRID POWER.

H1 (Fraunces, 96px+, --ebron-cream): Clean energy and clean cooking for rural Nigeria.

Sub (Inter, 20px, --ebron-cream at 85%): We partner with rural communities across Nigeria to bring clean cookstoves, solar home systems, and off-grid energy through education, trust, and financing that meets families where they are.

Two CTAs: primary bright-green pill "See Our Work" (scrolls to Our Work); secondary cream-outline ghost button "Partner With Us" (/partner).

2. Manifesto strip

--ebron-cream background. A single paragraph in Fraunces, 32px, --ebron-green-dark, centered, max-width 900px:

Millions of families in rural Nigeria still cook over open fires and rely on kerosene lamps after dark. That means hours spent gathering firewood, smoke inside the home, and health problems that a different technology would prevent. We are working to change that, one household at a time.

A small --ebron-yellow horizontal accent line below the paragraph (80px wide, 3px tall). No decorative flourish beyond that.

3. Our Work

--ebron-sand background. Eyebrow: WHAT WE DO. H2 (Fraunces, 56px, --ebron-green-dark): Three ways we work with rural households.

Three cards in a row (stack on mobile). Each: cream background, 1px --ebron-muted-at-20% border, no shadows, corners at 4px max. Card structure:

Photograph at top (16:10, warm-toned).

Small eyebrow label in --ebron-green.

H3 in Fraunces 28px, --ebron-green-dark.

Short body paragraph in Inter.

"Learn more →" text link in --ebron-green-dark with a yellow underline that grows on hover.

Card 1 — CLEAN COOKSTOVES

Our clean cookstoves use far less firewood than open fires and cut smoke inside the home significantly. They are designed to work with the pots and cooking styles rural households already use, so families do not have to change how they cook to benefit from the switch.

Card 2 — SOLAR HOME SYSTEMS

Solar systems sized for rural households: reliable lighting after dark, phone charging, and enough power for fans and small appliances. Every system is installed by our team, and we stay in contact after setup to handle maintenance and upgrades.

Card 3 — OFF-GRID COMMUNITY SOLUTIONS

For projects larger than a single home: water pumping, shared solar for clinics or schools, streetlights, and business power for market vendors. We plan these projects alongside community leaders and cooperatives, sized to what the community actually needs.

Learn More behavior: Each card's "Learn more →" click opens a modal overlay (dark green backdrop at 70% opacity, cream modal panel, max-width 720px, generous padding, subtle fade-in animation). The modal can be closed by the X in the top right, clicking the backdrop, or pressing Escape.

Modal contents for each card (each modal has: a larger version of the card image, the offering title in Fraunces 40px, four short sections with eyebrow labels, and a single CTA at the bottom):

Modal — Clean Cookstoves

What's included: The stove itself, a training session for the primary cook, spare parts availability in the community, and follow-up visits during the first three months of use.

How families use it: Our stoves work with the pots and cooking methods that are already part of daily life in rural homes. Most families cut their firewood use by around half and report significantly less smoke in the kitchen.

How the financing works: Small installment payments arranged through community savings groups (esusu, ajo). Payment schedules are set with each household based on how income comes in through the year.

What happens after installation: We stay in contact through community ambassadors, most of whom cook on our stoves in their own homes. Repairs, spare parts, and additional training remain available as part of the ongoing relationship.

CTA: "Ask us about a cookstove" opens the contact form with subject pre-filled.

Modal — Solar Home Systems

What's included: Solar panel or panels, battery storage, wiring, LED lighting, and phone-charging ports. Larger systems can also power fans, radios, and small appliances. Full installation is included.

How we size the system: We meet with the household first to understand what is actually needed. Some families want lighting and phone charging only. Others want power for a small business or fans during hot months. Every system is sized accordingly.

How the financing works: Same flexible installment plans as our cookstoves, structured through community savings groups.

What happens after installation: We handle maintenance, offer upgrades as households need more power, and keep spare parts stocked with community ambassadors.

CTA: "Ask us about a solar system" opens the contact form with subject pre-filled.

Modal — Off-Grid Community Solutions

What we build: Solar-powered water pumps, streetlights, shared solar for clinics or schools, and business-scale power for market vendors and small enterprises.

How we start: We begin by meeting with community leaders, cooperatives, and local government to understand which needs come first. Nothing is planned until those conversations have happened.

How each project is designed: Every deployment is specific to the community. There are no template projects. Sizing, siting, and ownership models are all worked out with the community involved.

Partnership: Larger installations usually involve a partner (an NGO, cooperative, or government agency) who helps sustain the system long-term. We build the partnership into the plan from the beginning.

CTA: "Ask us about a community project" opens the contact form with subject pre-filled.

4. Our Approach

--ebron-cream background. Split layout, left column (40% width, sticky on scroll):

Eyebrow: HOW WE WORK

H2 (Fraunces, 56px, --ebron-green-dark): Our approach.

Short paragraph: The families we work with do not need a sales pitch. What they need is to see the technology work in a home like theirs, from someone they already trust. That shapes how we do everything.

Right column (60% width): four principles stacked. Each has a numeral (Fraunces italic, 40px, --ebron-yellow, "01"-"04"), a title in Fraunces 24px --ebron-green-dark, and a short paragraph in Inter body.

01 — LISTEN FIRST

Before we suggest anything, we spend time with community leaders, women's savings groups, and elders. We want to understand how families cook, what they currently spend on fuel, and what they would actually want from a change.

02 — SHOW, DON'T SELL

We cook a real meal on the stove in a real kitchen, so the person who cooks every day can feel the difference before she is ever asked to buy. No brochures, no slideshows.

03 — FINANCE FOR REAL INCOMES

Most rural households cannot pay for a stove or solar system upfront. We offer installment plans through community savings groups, so payments line up with harvests, market days, and other income patterns.

04 — STAY AFTER INSTALLATION

The relationship does not end when the stove is delivered. We provide spare parts, additional training, and connect households with community ambassadors who can help neighbors with questions as they come up.

5. Impact

Full-bleed --ebron-green-dark background. Cream text.

Eyebrow (--ebron-yellow): WHAT WE'RE TRACKING. H2 (Fraunces, cream, 56px): The change we can measure.

Four large stats in a row (2x2 on mobile). Each: huge Fraunces numeral in --ebron-yellow (around 88px), short label in cream small caps beneath.

4-6 HRS · daily firewood gathering, eliminated per household

~50% · reduction in cooking fuel consumption

0 · kerosene lamps in homes we've electrified

6 · people, on average, whose daily life changes per stove installed

Below the stats, a quiet line in cream Fraunces italic, centered: When Ifeoma stopped cooking on an open fire, her youngest stopped coughing at breakfast.

6. A Story From the Field

--ebron-sand background. Two columns. Left: large portrait photograph (3:4) of a woman in her kitchen, warm light. Right column:

Eyebrow: FROM THE FIELD.

H2 (Fraunces, --ebron-green-dark, 48px): Amaka's story.

Body (Inter, 18px, --ebron-charcoal, generous leading):

Amaka is a mother of four in Imo State. Her days used to start before dawn, with four hours spent gathering firewood before she could even begin cooking. She spent the rest of the morning over an open fire, breathing smoke that gave her children coughs and left burns on her own hands.

Amaka now cooks on one of our stoves, which she decided to buy after seeing her neighbor use one. She pays for it in small installments through her savings group. She has hours back in her day that she did not have before, and her kitchen is no longer full of smoke.

"I did not know cooking could be like this," she says. "I did not know I could have this time back."

A "Read more stories →" link in --ebron-green-dark with yellow underline at the bottom (placeholder link, no destination yet).

7. How Ebron Started

--ebron-cream background. Centered, max-width 800px. Eyebrow: THE STORY. H2 (Fraunces, --ebron-green-dark, 56px): How Ebron started.

Flowing body (Inter, 18px, --ebron-charcoal, generous leading), broken into short paragraphs:

Ebron started because our founder grew up seeing what it costs a household to live without clean energy. On visits to family in the rural south, she watched women spend hours gathering firewood and cooking over smoky open fires. She saw children coughing beside them, and evenings pass in complete darkness once the sun went down.

She also saw how much these communities were already doing for themselves. The savings circles, the mutual support, the ambition parents held for their children. The problem was not a lack of resourcefulness. The problem was that affordable clean-energy technology already existed elsewhere, and it was not reaching the households that needed it.

Ebron was built to close that gap. We work alongside the households and communities we serve. We listen first, demonstrate in real kitchens, offer financing that fits how income actually comes in, and stay reachable long after installation.

That is the work. Simple to describe, harder to do well, and worth doing right.

Small line below: — The Ebron team, Nigeria

8. Team

--ebron-cream background. Eyebrow: THE TEAM. H2 (Fraunces, --ebron-green-dark, 56px, left-aligned): The team.

Sub-line (Inter, 18px, --ebron-muted, max-width 640px): Ebron is a small team with backgrounds in law, energy policy, marketing, and community advocacy. Here's who's building the work.

Below, a 3-column grid (stack to single column on mobile). Each card:

Portrait photo at top (4:5 ratio, warm-toned). Use tasteful Unsplash placeholders until real photos are available (Lovable, please add a code comment noting these are placeholders).

Name in Fraunces 26px, --ebron-green-dark.

Role immediately below the name, Inter uppercase small caps, 12px, --ebron-green, letter-spacing 0.18em.

Bio in Inter 16px, --ebron-charcoal. One short paragraph. No italic tagline, no aphoristic closer.

Card 1 — Nnenna Ebem · CHIEF EXECUTIVE OFFICER

Nnenna is a lawyer with a background in energy policy and clean-energy advocacy. She studied law at the University of Uyo and the Nigerian Law School, and has worked with the Nigerian Electricity Regulatory Commission, the Renewable Energy and Energy Efficiency Alliance of Nigeria, and Talba & Co on energy law matters. She co-founded Youthspire Africa and volunteers with climate advocacy groups. At Ebron, she leads strategy and manages relationships with regulators and policy partners.

Card 2 — Abimbola Abe · CHIEF OPERATING OFFICER

Abimbola runs Ebron's day-to-day operations, marketing, and customer relationships. She is a marketing professional and sustainability advocate, currently studying at Nexford University and certified in Green Digital Skills. Before Ebron, she led customer acquisition in the renewable energy sector, and she co-founded Youthspire, a nonprofit training young people in climate action.

Card 3 — Aruoture Akpofure, Esq. · MANAGING DIRECTOR (VOLUNTEER)

Aruoture is a corporate lawyer with seven years of experience and a specialization in Nigerian renewable-energy regulation. He advises Ebron pro bono on corporate governance, compliance, and the licensing requirements that come with off-grid energy work. He is a member of the Nigerian Bar Association and the Chartered Institute of Arbitrators, and serves on the directorate of the Policy Round Table.

9. Values

--ebron-sand background. Eyebrow: WHAT WE STAND ON. H2 (Fraunces, --ebron-green-dark, 48px, left-aligned): Our values.

A 7-item list in a 2-column grid (single column mobile). Each: yellow numeral (01-07 in Fraunces italic), value name in Fraunces 24px --ebron-green-dark, one-sentence description in Inter --ebron-charcoal.

01 Community. Shared progress through local cooperation and participation.

02 Empowerment. Communities with the resources to shape their own futures.

03 Sustainability. Solutions that protect the environment for the next generation.

04 Accessibility. Clean energy and clean cooking that rural households can afford and use.

05 Collaboration. Partnerships built on trust and long-term commitment.

06 Trustworthiness. Confidence earned through transparency and results.

07 Inclusiveness. Every person treated with equal respect, regardless of background or status.

10. Partner With Us

Full-bleed --ebron-green background. Cream text.

Centered: eyebrow in --ebron-green-dark PARTNER WITH US. H2 (Fraunces, --ebron-cream, 64px): Help us reach more households.

Sub (cream at 92%): We are always looking for partners: NGOs, government agencies, funders, corporate teams, and community organizations who want to help expand access to clean energy and clean cooking in rural Nigeria.

Two CTAs: primary (--ebron-green-dark fill, cream text) "Become a Partner" links to /partner; secondary (cream outline, transparent, cream text) "Contact the Team" scrolls to contact.

11. Contact

--ebron-cream background. Two columns.

Left: eyebrow GET IN TOUCH. H2 (Fraunces, --ebron-green-dark, 56px): Get in touch. Short paragraph inviting community leaders, potential partners, or curious readers to reach out. Contact details below in Inter: email, phone, location.

Right: contact form with underline-style fields (1px --ebron-muted underline that thickens to 2px --ebron-green on focus). Fields: Name, Email, Organization (optional), "I'm reaching out as" dropdown (Community leader / Partner or funder / Media / Other), Message, bright green submit button "Send Message."

/partner Page

Same design system, simpler layout.

Hero (smaller). --ebron-cream background, no image. Eyebrow: FOR PARTNERS AND FUNDERS. H1 (Fraunces, --ebron-green-dark, 72px): Partner with Ebron. Paragraph inviting NGOs, government agencies, corporate ESG teams, and philanthropic funders to explore working together.

Ways to Partner. Three cards, same styling as the homepage Our Work section:

Funding Partners. Deploy capital toward measurable impact in rural health, gender, and climate.

Distribution Partners. Cooperatives, NGOs, and community organizations that can help us reach new areas.

Government and Institutional Partners. Local government councils and agencies working on rural electrification, women's health, and climate resilience.

What Partnership Looks Like. Numbered process (01-04): Initial conversation → Community needs assessment → Pilot program → Long-term deployment. Same visual treatment as the Approach section.

Partner contact form. Same styling as the homepage form, dropdown pre-filled to "Partner or funder."

Technical

React + Tailwind. Import Fraunces and Inter from Google Fonts.

Add the Ebron colors as Tailwind theme extensions (available as bg-ebron-green, text-ebron-green-dark, and so on).

Use uploaded logo PNGs directly. Do not recreate the wordmark in HTML.

Fully responsive. Mobile hero H1 around 52px. Sections stack. Nav collapses to a hamburger that opens a full-screen dark-green overlay menu.

Modals for Our Work cards are keyboard-accessible: Escape closes, focus is trapped inside the modal while open, focus returns to the card that opened it on close.

Accessibility: proper heading hierarchy, descriptive alt text on every image, visible focus states (2px --ebron-yellow outline).

Smooth scroll on anchor links. Lazy-load images below the fold. No dark mode.

What to Avoid

Rounded "friendly startup" card corners (4px max, often 0).

Gradients other than the hero image overlay.

Emoji, stock icon illustrations, cartoony vector art.

Centered everything. Use editorial asymmetry.

Bright --ebron-green used for body text or large headings. It is an accent and CTA color only.

Pure white or pure black anywhere on the site.

Any rewriting or "improvement" of the copy in this brief. It is final as written.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ebronsolution.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/db067fe4-9099-4d66-86f4-dc22c0d1b3e3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
