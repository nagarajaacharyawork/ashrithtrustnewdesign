# Ashrith Group of Institutions — Website

A complete, production-quality multi-page website for **Ashrith Group of Institutions**, built as a static Vite + React SPA with TanStack Router.

## Tech Stack

- **Vite** — build tool
- **React 19** — UI
- **TanStack Router** — client-side file-based routing
- **Tailwind CSS v4** — styling
- **TypeScript** — type safety

## Development

Requires Node.js 18+.

```sh
npm install
npm run dev
```

## Build & Deploy

```sh
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages).

A `vercel.json` is included that rewrites all routes to `index.html` for SPA routing.

## Project Structure

```
src/
  assets/        # College images and logo
  components/
    forms/       # Enquiry / contact forms
    site/        # Shared layout components (Header, Footer, etc.)
    ui/          # Radix UI primitives
  data/
    site.ts      # All content — edit here to update the website
  lib/
    enquiry.ts   # Form submission integration point
    seo.ts       # Per-page head() helper
  routes/        # File-based routes (TanStack Router)
  styles.css     # Global design system
  main.tsx       # SPA entry point
  router.tsx     # Router instance
public/          # Static assets (favicons, manifest)
```

## Connecting a Form Backend

All form submissions route through `src/lib/enquiry.ts → deliverEnquiry()`.  
Set `ENQUIRY_ENDPOINT` to your API URL to connect a real backend.
