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
