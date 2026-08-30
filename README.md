# Code Crafted Labs Portfolio

Production portfolio for Ritik Singh and Code Crafted Labs. The application presents backend and cloud engineering services, case studies, experience, pricing, a digital visiting card, and a standalone ReliefLink product site.

Live site: [codecraftedlabs.co.in](https://codecraftedlabs.co.in)

## What is included

- Responsive engineering portfolio with About, Services, Projects, Experience, Pricing, Contact, and Products sections
- Animated product rail for ReliefLink, EmpSaaS, Flight Scanners, Hope Foundation, and the digital card
- Standalone digital visiting card with contact and profile actions
- Isolated ReliefLink landing page with its own design system, metadata, inquiry form, and legal pages
- Resend-powered project and ReliefLink inquiry forms
- Optional, separately recorded SMS consent
- Route metadata, canonical links, Open Graph data, structured data, sitemap, robots configuration, and `llms.txt`
- Security headers, no-index handling for private biodata, optimized images, local font loading, reduced-motion support, and keyboard focus states

## Technology

- Next.js 15 App Router
- React 19 and TypeScript
- Tailwind CSS 4 for the portfolio design system
- Scoped CSS Modules for ReliefLink
- `next/font` for self-hosted, optimized fonts
- Resend for transactional form email
- Vercel Analytics in Vercel production environments
- Bun for package management and project commands

## Routes

| Route | Purpose | Search indexing |
| --- | --- | --- |
| `/` | Main Code Crafted Labs portfolio | Enabled |
| `/card` | Digital visiting card | Enabled |
| `/privacy` | Portfolio privacy policy | Enabled |
| `/sms-terms` | Portfolio SMS program terms | Enabled |
| `/relieflink` | Standalone ReliefLink product page | Enabled |
| `/relieflink/privacy` | ReliefLink privacy policy | Enabled |
| `/relieflink/terms` | ReliefLink SMS terms | Enabled |
| `/biodata` | Personal biodata and print view | Disabled with metadata and response headers |
| `/sitemap.xml` | Search-engine sitemap | Public |
| `/robots.txt` | Crawler rules and sitemap discovery | Public |
| `/llms.txt` | Plain-text site summary for AI agents | Public |

ReliefLink deliberately has no portfolio navigation or footer. Its route layout and CSS module isolate its visual system while the root layout continues to provide global accessibility and analytics behavior.

## Local development

### Requirements

- [Bun](https://bun.sh/) installed
- A Resend account and verified sending domain if form delivery is required

### Setup

```bash
git clone <repository-url>
cd portfolio-site
bun install
cp .env.example .env.local
bun dev
```

Open [http://localhost:3000](http://localhost:3000). ReliefLink is available at [http://localhost:3000/relieflink](http://localhost:3000/relieflink).

The pages render without a Resend key, but form submissions require a valid `RESEND_API_KEY`.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | For form delivery | Server-only Resend credential used by both inquiry actions |
| `ANALYZE` | No | Set to `true` when running the analyzer build |
| `VERCEL` | Managed by Vercel | Enables Vercel Analytics only in a Vercel environment; do not set manually for normal local development |

Never commit `.env.local` or a real API key. The repository contains only a safe `.env.example` placeholder.

The sender identity and inquiry destination are defined server-side in:

- `src/app/actions/contact.ts`
- `src/app/relieflink/actions.ts`

The configured `from` address must belong to a domain verified in Resend.

## Commands

```bash
# Development server
bun dev

# ESLint
bun run lint

# Production build
bun run build

# Start the production server after a build
bun run start

# Generate a bundle analysis build
bun run analyze
```

Before deployment, run both lint and the production build. The build intentionally does not duplicate the lint step.

## Project structure

```text
src/
├── app/
│   ├── actions/contact.ts       # Portfolio contact server action
│   ├── biodata/                 # Private, no-index biodata page
│   ├── card/                    # Digital visiting card
│   ├── privacy/                 # Portfolio privacy policy
│   ├── relieflink/              # Isolated product page, form, and legal routes
│   ├── sms-terms/               # Portfolio SMS terms
│   ├── layout.tsx               # Root metadata, fonts, skip link, analytics
│   ├── page.tsx                 # Portfolio page composition
│   ├── robots.ts                # robots.txt generator
│   └── sitemap.ts               # sitemap.xml generator
└── components/
    ├── sections/                # Portfolio content sections
    └── terminal/                # Lazy-loaded interactive terminal

public/
└── images/                      # Local optimized product and profile assets
```

## Forms and data flow

Both forms use Next.js server actions. Submitted values are carried in the request body as `FormData`; they are not placed in query parameters or exposed in the URL.

### Portfolio inquiry

The portfolio form accepts contact details, project context, budget, a message, and optional SMS consent. The server action:

1. trims and length-limits every field;
2. validates the required name, email, message, and optional SMS phone number;
3. silently accepts honeypot submissions without forwarding them;
4. records the SMS disclosure version, source, and submission timestamp when consent is selected;
5. sends the inquiry and a separate confirmation email through Resend; and
6. returns a styled success or error state to the client.

### ReliefLink inquiry

The ReliefLink form collects name, email, phone, city/location, errand details, and optional SMS consent. It performs client and server validation, escapes user content before inserting it into HTML email, sends a plain-text and HTML inquiry, and sends the visitor a confirmation message.

Do not log submitted form values or expose `RESEND_API_KEY` to client components. If fields change, update the form, server validation, email content, privacy notice, and consent disclosure together.

## Adding or updating products

Products are defined in `src/components/sections/Products.tsx`.

Each product has:

- a display name and concise description;
- an internal or external URL;
- either an optimized local logo or an existing Lucide icon; and
- an `external` flag for links that open in a new tab.

The marquee renders two identical groups to create the continuous animation. Keep the duplicate group hidden from assistive technology and removed from keyboard tab order. When the product list changes, also update the Products entry in `src/app/llms.txt/route.ts`.

## SEO and discoverability

- Global metadata lives in `src/app/layout.tsx`.
- Route-specific metadata is exported by independent pages such as `/card` and `/relieflink`.
- Canonical URLs use `https://codecraftedlabs.co.in`.
- `src/app/sitemap.ts` contains public indexable routes.
- `src/app/robots.ts` advertises the sitemap.
- Person, ProfilePage, and Service structured data are emitted as JSON-LD.
- `/biodata` is excluded from indexing through both page metadata and `X-Robots-Tag`.
- `src/app/llms.txt/route.ts` provides a concise machine-readable overview.

Use keywords naturally in headings and body copy. The metadata keyword list is supplementary; descriptive content, internal links, performance, and authoritative backlinks matter more for search visibility.

When adding an indexable page, provide a unique title and description, canonical URL, Open Graph data, one logical `h1`, descriptive image alternatives, and a sitemap entry.

## Privacy, SMS, and accessibility

The project includes separate privacy and SMS terms for Code Crafted Labs and ReliefLink. SMS checkboxes are optional, unchecked by default, and separate from form submission consent. Consent is not a condition of purchase, and the disclosure includes message frequency, carrier-rate language, STOP, and HELP instructions.

These pages and disclosures are implementation support, not a substitute for legal review. Re-check them whenever the business, data recipients, analytics, vendors, retention practices, jurisdictions, or messaging program changes.

Accessibility conventions include semantic sections and headings, a global skip link, visible keyboard focus, sufficiently large controls, descriptive alternatives for meaningful images, decorative-image suppression, accessible form feedback, and reduced-motion behavior. Preserve these conventions when adding interactions.

## Security and performance

`next.config.ts` applies a Content Security Policy and headers for content-type protection, frame blocking, referrer control, HSTS, opener isolation, and browser permissions. Review the policy before adding a third-party script, image host, API, iframe, or embedded widget.

Performance practices include:

- `next/image` with explicit sizing and responsive `sizes`;
- `next/font` with `display: swap` and no render-blocking font CDN;
- dynamic imports for below-the-fold portfolio sections;
- lazy loading for non-critical images and interactive terminal code;
- AVIF/WebP output and long image cache lifetimes;
- production-only analytics; and
- reduced-motion handling for marquee and page animation.

For performance-sensitive changes, run a production build and audit the exact production route in Lighthouse. Target 90 or better for Performance, Accessibility, Best Practices, and SEO.

## Deployment

Vercel is the primary deployment target because the project uses Next.js server actions, optimized images, and Vercel Analytics.

1. Import the repository into Vercel.
2. Keep Bun as the detected package manager.
3. Add `RESEND_API_KEY` to the appropriate Vercel environments.
4. Confirm the production sending domain is verified in Resend.
5. Build and deploy.
6. Test both forms, confirmation email delivery, canonical metadata, legal links, `robots.txt`, `sitemap.xml`, and the no-index response for `/biodata`.

The repository also contains a Dockerfile for self-hosting. When self-hosting, provide HTTPS at the edge, pass the same environment variables securely, and verify that Next.js image optimization and server actions work through the reverse proxy.

## Maintenance checklist

Before merging or deploying a content or UI change:

- Run `bun run lint` and `bun run build`.
- Test internal links, external links, form validation, loading, success, and error states.
- Confirm no personal data appears in URLs, client logs, or analytics events.
- Check responsive layouts and keyboard navigation.
- Confirm animation stops or simplifies when reduced motion is requested.
- Update route metadata, sitemap entries, structured data, and `llms.txt` where relevant.
- Revisit privacy and SMS disclosures when collection or communication behavior changes.
- Run Lighthouse against the changed production route.

## License and content

This is a private portfolio project. Source code, personal information, branding, written content, and media are not licensed for reuse unless the owner grants permission.
