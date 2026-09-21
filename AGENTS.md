# AEGC Website Agent Contract

Project: Aegean Cornea & Cataract XVIII — Corfu 2027
Repo: `gpal1973/aegean-cornea`
Production branch: `main`

## Canonical routing
- Area: https://app.notion.com/p/1d20f76b2a33803baa3bd48f5fef4b88
- Brand Kit: https://app.notion.com/p/3df0f76b2a33812caf07c16006866749
- UTML Web Systems Delivery: https://app.notion.com/p/3df0f76b2a3381379b40cd74b2552086
- Source assets: https://drive.google.com/open?id=1cjAyVGjFnVrzptQc0WTQ2kjT1d5YRg1F
- Corfu 2027 project files: https://drive.google.com/open?id=1bDu--YXcLzBABMVGwJu43DKAOacNEdYi

Do not copy brand, business, approval or platform rules into this file. Retrieve the current canonical source before changing those facts.

## Repository and deployment role
- GitHub owns executable website source and optimized runtime assets.
- `main` is the accepted production branch.
- The site is static Astro; do not add SSR or server runtime without a concrete requirement and architecture review.
- Netlify is the preview/production deployment target because authoritative DNS remains at Wix.
- Netlify is a deployment target, not a second source of truth.
- Do not change production publication, the custom domain, Wix DNS or mail-related DNS records without separate explicit approval.

## Workflow
1. Inspect `main`, open PRs and current deployment state before editing.
2. Use a short-lived branch for material changes.
3. Run `npm install`, `npm run dev` and `npm run build` for material code changes.
4. Review the branch on a Netlify deploy preview before merge.
5. Verify responsive behavior, links, assets, metadata, accessibility basics, 404s and redirects.
6. Open a PR and require human review before merge.
7. Merge to `main` only after explicit approval when merge can trigger production deployment.
8. Source masters stay in Drive/Canva; keep only runtime derivatives in the repo.
9. Keep stable canonical asset filenames; do not add `final`, `v2` or duplicate production variants.
10. Use Git history and canonical Notion pointers for state; do not add `HANDOFF.md`, `STATE.md` or chat-history files.
