# Portfolio — Maria-Jesus Huaccha

Personal UX engineering portfolio. Built with Next.js, TypeScript, and Tailwind CSS; deployed on Vercel.

## Structure

```
src/
  app/
    page.tsx                    # Home — narrative + case study cards
    about/page.tsx              # About
    case-studies/page.tsx       # Case study index
    case-studies/[slug]/page.tsx  # Case study pages
  lib/
    case-studies.ts             # Case study metadata (single source of truth)
```

## Development

```bash
npm install
npm run dev
```

## License

The site **code** is [MIT licensed](LICENSE). The **content** — case-study text, images, and design artifacts — is © Maria-Jesus Huaccha, all rights reserved.
