# spelectrical

## Cloudflare Pages build configuration

- **Framework preset:** Next.js  
- **Root directory:** `/` (keep the default because the entire repository contains the Next.js app).  
- **Build command:** `npm run build` (calls `next build` from `package.json`).  
- **Build output directory:** `out` (Next Export now writes the static assets there after `npm run build`).  
- **Build comments:** enable the toggle so Cloudflare can post status/comment updates on pull requests with preview URLs.

Make sure you have the npm dependencies installed before triggering a build (e.g., `npm install`). Cloudflare Pages will run `npm run build`, which now runs Next's static export (`output: "export"` in `next.config.mjs`) and drops the artifacts into the `out` directory.
