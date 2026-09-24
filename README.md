# VisionovaHQ

Premium marketing website for VisionovaHQ, a global performance advertising network. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy

This project deploys directly to Vercel. Push to GitHub, import the repo in Vercel, and deploy — no additional configuration required.

## Structure

- `app/` — routes, layouts, metadata (App Router)
- `components/` — UI, layout, home, forms, and shared components
- `lib/` — site content/data, SEO helpers, utilities
- `public/` — static assets (favicon, OG image)

## Notes

- **Forms**: the Advertiser, Publisher, and Contact forms submit to endpoint URLs read from environment variables. Until those are set, submitting a form shows a clear inline error instead of a fake success message. To connect them:
  1. Create a free account at [Formspree](https://formspree.io) (or Web3Forms / Getform / Basin — any service that accepts a plain `fetch` + `FormData` POST works).
  2. Create one form per site form (Advertiser, Publisher, Contact) and copy each endpoint URL.
  3. Copy `.env.local.example` to `.env.local` and paste in your three endpoint URLs.
  4. Locally: restart `next dev`. On Vercel: add the same three variables under Project → Settings → Environment Variables, then redeploy — `NEXT_PUBLIC_*` variables are baked in at build time, so a redeploy is required after adding or changing them.
  5. Submissions will then arrive by email (or in your form service's dashboard), depending on how you configure that service.
- Update `lib/seo.ts` `siteConfig.url` to your production domain before deploying.
