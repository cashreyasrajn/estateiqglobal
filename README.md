# EstateIQ Global

A responsive, multi-page marketing website for EstateIQ Global — a brand of Florens Consulting Services Private Limited — specializing in cross-border estate planning for Indian residents with overseas assets.

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

- The contact form sends emails via [Resend](https://resend.com) using the environment variables in `.env.example`. Copy it to `.env.local` and add your `RESEND_API_KEY`.
- For testing, you can use `RESEND_FROM_EMAIL=onboarding@resend.dev` (sends only to your Resend account email). For production, verify your domain and use a branded sender address.

## License

Private — © 2024 Florens Consulting Services Private Limited. EstateIQ Global is a brand of Florens Consulting Services Private Limited.
