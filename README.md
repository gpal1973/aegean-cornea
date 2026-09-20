# Aegean Cornea & Cataract XVIII — Corfu 2027

Static website for aegeancornea.com.

## Confirmed public content used
- Event: Aegean Cornea & Cataract XVIII
- Location: Corfu, Greece
- Dates: 1–4 July 2027
- Organizing Committee: Oliver Findl, George Kymionis, Marguerite McDonald, Ioannis Pallikaris, Sonia Yoo

## Files
- `index.html` — single-page launch site with SEO/Open Graph/Event schema
- `styles.css` — responsive styling, no framework or JS
- `404.html` — branded static 404 page for Workers Static Assets
- `_headers` / `_redirects` — Cloudflare static security-header and redirect rules
- `robots.txt` / `sitemap.xml` — technical SEO baseline
- `wrangler.jsonc` — Cloudflare Workers Static Assets configuration
- `assets/` — optimized runtime images only

## Deployment pattern
1. Keep `main` as production.
2. Current production remains GitHub Pages until an explicitly approved Cloudflare cutover.
3. Use a short-lived branch and PR for material changes.
4. Cloudflare Workers Builds should deploy non-production branches with the preview command (`npx wrangler versions upload`) before any active production deployment.
5. Review the Cloudflare preview/version URL for responsive behavior, metadata, assets, 404s and redirects.
6. Merge to `main` only after human approval when the merge can trigger production deployment.
7. Custom-domain/DNS changes are a separate approval gate; preserve all mail-related MX/TXT/SPF/DKIM records.
8. After an approved cutover, verify apex, `www`, HTTPS, canonical URL, redirects, mobile rendering and social preview.

Do not publish to the custom domain until the AEGC approval/commercial gate recorded in Notion has been cleared or explicitly superseded.
