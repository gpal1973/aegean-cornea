# Aegean Cornea & Cataract XVIII — Corfu 2027

Static Astro website for `aegeancornea.com`.

## Architecture
- Astro 5, static output only.
- GitHub is the executable source of truth.
- `main` is the production branch.
- Netlify is the preview and production deployment target.
- `https://aegeancornea.com` is the live production site.
- Authoritative DNS remains at Wix; web records point the apex and `www` host to Netlify.
- Mail and verification DNS records remain outside the website repository and must not be changed as part of normal web releases.

## Confirmed public content used
- Event: Aegean Cornea & Cataract XVIII
- Location: Corfu, Greece
- Dates: 1–4 July 2027
- Organizing Committee: Oliver Findl, George Kymionis, Marguerite McDonald, Ioannis Pallikaris, Sonia Yoo
- Official congress email: `aegean@med.uoc.gr`
- Coordination contact: `eirkok@gmail.com`

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
7. Treat domain, DNS and mail-DNS changes as separate explicit approval gates.
