# Chanakya Nalajala — Portfolio

Personal portfolio site for Chanakya Nalajala, Senior Full-Stack Engineer.

Live at **https://chanakya.got-a.page/**

## Stack

- React 19 + TypeScript, built with Vite
- framer-motion for scroll and transition animations
- Plain CSS with design tokens (`src/index.css`) and light/dark themes
- Fonts: Instrument Serif, Inter and JetBrains Mono (Google Fonts)

## Project structure

```
src/
  data/resume.ts      All page content (edit this to update the site)
  types/index.ts      Shapes of the content in resume.ts
  components/         One folder per section (index.tsx + styles.css)
  context/            Theme provider (light/dark, persisted to localStorage)
  index.css           Design tokens, base styles, buttons and tags
```

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Deployment

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. The custom domain is configured in the repository's
Pages settings, so `base` in `vite.config.ts` stays `/`.
