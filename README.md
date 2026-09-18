# Aegean Cornea XVIII & Cataract — Corfu 2027

Static GitHub Pages launch package for aegeancornea.com.

## Confirmed public content used
- Event: Aegean Cornea XVIII & Cataract
- Location: Corfu, Greece
- Dates: 1–4 July 2027
- Organizing Committee: Oliver Findl, George Kymionis, Marguerite McDonald, Ioannis Pallikaris, Sonia Yoo

## Files
- `index.html` — single-page launch site with SEO/Open Graph/Event schema
- `styles.css` — responsive styling, no framework or JS
- `assets/poster-xviii.webp` — optimized web export of approved poster source
- `assets/logo.webp` — optimized web export of existing Aegean Cornea logo
- `CNAME` — custom domain declaration for `aegeancornea.com`

## Deployment pattern
1. Create a dedicated GitHub repository, recommended name: `aegean-cornea`.
2. Keep `main` as production.
3. Put this package on a branch first, then open a PR for human review.
4. Enable GitHub Pages from `main` / root after approval.
5. Point only web DNS for `aegeancornea.com` and `www` to GitHub Pages; preserve all mail-related MX/TXT/SPF/DKIM records.
6. Verify apex, `www`, HTTPS, canonical URL, mobile rendering and social preview after DNS propagation.

Do not publish until the AEGC approval/commercial gate recorded in Notion has been cleared or explicitly superseded.
