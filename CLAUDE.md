# Silly Goose Pottery

Pottery/ceramics shop marketing site (sillygoosepottery.com), with a dedicated `/custom` page for custom-order inquiries.

## Stack
Next.js 14.2.3, React 18.3.1, TypeScript. Deployed on Vercel via push to `main` on GitHub (`Simeon2509/silly-goose-pottery`).

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build; run this before pushing

## Contact form
Uses **Formspree** (`app/ContactForm.tsx`, `FORMSPREE_ID`) — not EmailJS or Resend, unlike the other sites.

`sillygoosepottery@gmail.com` is shown as the display/fallback contact address in `page.tsx` and `custom/page.tsx` — actual form delivery goes through Formspree, not a mailto or API route.

## Hosting & DNS
Deployed on Simeon's personal Vercel account. Domain DNS is on Simeon's personal Porkbun account (porkbun.com).

## Workflow
Once a change is built and verified (`npm run build`), commit and push without stopping to ask for confirmation.

## Sibling sites
This is one of four marketing sites Simeon runs the same way: colodrone.com, denverwebcrew.com, and piratetaylorsmarine.com. They share the general Next.js/Vercel/Porkbun setup, but **each site's contact-form backend is different** (this one uses Formspree; others use EmailJS or Resend — check that site's own `CLAUDE.md`, don't assume). Pirate Taylor's Marine is also on fully separate GitHub/Vercel/Porkbun accounts, not Simeon's personal ones.
