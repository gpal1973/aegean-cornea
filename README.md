# Aegean Cornea & Cataract XVIII — Corfu 2027

Static GitHub Pages launch package for aegeancornea.com.

## Confirmed public content used
- Event: Aegean Cornea & Cataract XVIII
- Location: Corfu, Greece
- Dates: 1–4 July 2027
- Organizing Committee: Oliver Findl, George Kymionis, Marguerite McDonald, Ioannis Pallikaris, Sonia Yoo

## Files
- `index.html` — single-page launch site with SEO/Open Graph/Event schema
- `styles.css` — responsive styling, no framework or JS
- `assets/aegc-poster-xviii-web.webp` — optimized high-resolution web export of approved poster source
- `assets/aegc-logo-web.webp` — optimized high-resolution web export of existing Aegean Cornea logo

## Deployment pattern
1. Keep `main` as production.
2. Use a branch and PR for design/content changes before production merge.
3. GitHub Pages can deploy from `main` / root for preview and production.
4. Add or change the custom domain only after visual/content approval.
5. Point only web DNS for `aegeancornea.com` and `www` to GitHub Pages; preserve all mail-related MX/TXT/SPF/DKIM records.
6. Verify apex, `www`, HTTPS, canonical URL, mobile rendering and social preview after DNS propagation.

Do not publish to the custom domain until the AEGC approval/commercial gate recorded in Notion has been cleared or explicitly superseded.
