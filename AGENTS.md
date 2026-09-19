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
- GitHub Pages remains the current production path until an explicitly approved Cloudflare production cutover.
- Cloudflare Workers Static Assets + Workers Builds is the migration target. Pilot work must use a short-lived `infra/` branch and preview/version deployment first.
- Do not change the GitHub Pages source, custom domains or DNS without a separate explicit approval.

## Workflow
1. Inspect `main`, open PRs and current deployment state before editing.
2. Use a short-lived branch for material changes.
3. Review locally where possible, then on a Cloudflare preview/version URL.
4. Verify responsive behavior, links, assets, metadata, accessibility basics, 404s and redirects.
5. Open a PR and require human review before merge.
6. Merge to `main` only after explicit approval when merge can trigger production deployment.
7. Source masters stay in Drive/Canva; keep only optimized runtime derivatives in the repo.
8. Keep stable canonical asset filenames; do not add `final`, `v2` or duplicate production variants.
9. Use Git history and canonical Notion pointers for state; do not add `HANDOFF.md`, `STATE.md` or chat-history files.
