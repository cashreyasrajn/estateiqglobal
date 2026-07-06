# EstateIQ Global

A responsive, multi-page marketing website for EstateIQ Global — a tax planning firm specializing in cross-border estate planning for Indian residents with overseas assets.

## Stack

- **Framework:** Next.js 16.2 (App Router)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (Base style)
- **Animation:** Framer Motion
- **Validation:** Zod
- **Icons:** Lucide React
- **Fonts:** Source Serif 4 (headlines) + Work Sans (body) via `next/font/google`

## Pages

- `/` — Home (Hero, Services Bento, Methodology, CTA)
- `/services` — Detailed service offerings
- `/about` — Company story + team section
- `/contact` — Contact form with Server Action + Zod validation
- Custom `404` and `403` error pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Notes

- The contact form currently logs submissions to the server console. Wire it to an email provider (e.g., Resend) when ready.
- Office addresses, phone numbers, and legal links are placeholders — update them in `src/components/layout/footer.tsx` and `src/app/contact/page.tsx`.

## License

Private — © 2024 EstateIQ Global.
