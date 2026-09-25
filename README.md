# spelectrical

Marketing site for SP Electrical, a Cape Town electrician (residential, commercial, industrial), with quote/contact sections and a Cape Town service-area list.

Status: Active

## Tech stack

- Next.js 16 (static export via `output: "export"` in `next.config.mjs`), React 19, TypeScript
- Tailwind CSS 4, Radix UI primitives, shadcn/ui-style `components/ui`, lucide-react
- Vercel Analytics (`@vercel/analytics`)

## Project structure

- `app/` — `layout.tsx`, `page.tsx` (Home composing all sections), `globals.css`
- `components/` — `header`, `hero`, `about`, `services`, `why-choose-us`, `testimonials`, `service-area`, `contact`, `footer`, `theme-provider`
- `components/ui/` — shared UI primitives (button, card, dialog, form, etc.)
- `hooks/`, `lib/` — client hooks and utilities
- `public/` — static assets; `styles/` — extra styles

## Run locally

From `package.json` scripts only:

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## Deployment

Cloudflare Pages (static export). From `next.config.mjs` + existing README notes:

- Build command: `npm run build` (runs `next build`, emits static export)
- Build output directory: `out`
- `images.unoptimized: true` is set for static hosting.

## Links

Contact details below are displayed in the site UI (`components/contact.tsx`), not live site URLs:

- Phone: 076 672 9270 (also advertised as 24/7 emergency line)
- Email: info@spelectrical.co.za, shafiek@spelectrical.co.za
