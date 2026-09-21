# Aegean Cornea & Cataract XVIII — Corfu 2027

Static Astro website for `aegeancornea.com`.

## Architecture
- Astro 5, static output only.
- GitHub is the executable source of truth.
- `main` is the production branch.
- Netlify is the preview/production deployment target while authoritative DNS remains at Wix.
- `aegeancornea.com`, DNS and the current public production path remain unchanged until an explicit publication/cutover approval.

## Confirmed public content used
- Event: Aegean Cornea & Cataract XVIII
- Location: Corfu, Greece
- Dates: 1–4 July 2027
- Organizing Committee: Oliver Findl, George Kymionis, Marguerite McDonald, Ioannis Pallikaris, Sonia Yoo

## Repository structure
- `src/pages/` — page routes and page-level composition.
- `src/layouts/` — shared document shell and metadata.
- `src/styles/` — global styles and design tokens.
- `public/assets/` — optimized runtime images with stable public paths.
- `public/robots.txt` / `public/sitemap.xml` — technical SEO baseline.
- `astro.config.mjs` — static Astro site configuration.
- `netlify.toml` — Netlify build, redirect and security-header configuration.
- `.github/workflows/build.yml` — PR/main build verification.

## Local development
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Delivery workflow
1. Create a short-lived branch for material changes.
2. Run `npm install`, `npm run dev` and `npm run build` locally.
3. Review the Netlify deploy preview on desktop, tablet and mobile.
4. Verify links, assets, metadata, 404 behavior, redirect behavior and accessibility basics.
5. Open a PR and require human review before merge.
6. Merge to `main` only after explicit approval when the merge can trigger production deployment.
7. Production publication and custom-domain/DNS changes remain separate approval gates.

Cloudflare Workers pilot configuration was intentionally removed in the Astro/Netlify migration branch. Historical pilot work remains available in Git history.
