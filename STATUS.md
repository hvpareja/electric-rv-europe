# Northline EV — status

## Current state

- Working name only: **Northline EV**. No company has been incorporated and no final brand/domain has been selected.
- Landing page: first visual version implemented in Next.js, English, responsive.
- Landing page now includes English, German, French, Spanish and Italian switching, a curated model shortlist and concept interior references.
- Production deployment: live on Vercel as the `northline-ev` project.
- Positioning: European platform in validation; no vehicle availability, OEM agreement, homologation or pricing claims.
- Early access: server-side form is implemented, but delivery remains disabled until private Vercel environment variables are configured. The recipient is never embedded in client code or public markup.

## Next decisions

1. Approve or change the working brand direction.
2. Review candidate names and domain availability before any purchase.
3. Add a GDPR-ready form endpoint only after deciding the legal entity/contact details and email provider.
4. Continue supplier replies and build a verified unit-economics model.
5. Configure `RESEND_API_KEY`, `EARLY_ACCESS_TO` and `EARLY_ACCESS_FROM` as private deployment environment variables.

## Technical

- Next.js 14 / TypeScript / CSS, no UI dependencies.
- Run `npm install`, `npm run dev`, `npm run build`.
- Hero image is a generated concept asset and must remain clearly non-commercial.
- Public deployment URL: `https://files-pasted-by-the-user-quiero-psi.vercel.app`.
