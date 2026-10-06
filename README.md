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

- **Forms**: the Advertiser, Publisher, and Contact forms submit to endpoint URLs read from environment variables (see `lib/form-submit.ts`). This is now configured — `.env.local` has all three pointed at your Formspree endpoint (`https://formspree.io/f/mwlpalza`), so locally, `npm run dev` and submitting any form will send real emails to your Formspree inbox right away.

  **One step left for production:** `.env.local` is git-ignored and never gets deployed, so you still need to add the same three variables to Vercel: Project → Settings → Environment Variables →
  ```
  NEXT_PUBLIC_ADVERTISER_FORM_ENDPOINT = https://formspree.io/f/mwlpalza
  NEXT_PUBLIC_PUBLISHER_FORM_ENDPOINT  = https://formspree.io/f/mwlpalza
  NEXT_PUBLIC_CONTACT_FORM_ENDPOINT    = https://formspree.io/f/mwlpalza
  ```
  then redeploy (`NEXT_PUBLIC_*` vars are baked in at build time, so a redeploy is required after adding them).

  All three forms currently share one Formspree form/inbox. Each submission includes a `_subject` field ("New VisionovaHQ Advertiser Application" / "...Publisher Application" / "...Contact Message") so you can tell them apart at a glance. If you'd rather have three separate inboxes, create two more forms at formspree.io and swap in their URLs above — no code changes needed either way, since the forms just read whatever URL is in these three variables.
- Update `lib/seo.ts` `siteConfig.url` to your production domain before deploying.
