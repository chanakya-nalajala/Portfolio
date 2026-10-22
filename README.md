# Chanakya Nalajala — Portfolio

Personal portfolio site for Chanakya Nalajala, Senior Full-Stack Engineer.

Live at **https://chanakya.got-a.page/**

## Stack

- React 19 + TypeScript, built with Vite
- Tailwind CSS v4 with [shadcn/ui](https://ui.shadcn.com) (Base UI primitives, `base-nova` style)
- [ReUI](https://reui.io) components: Timeline, Scrollspy, Frame, Badge, Icon Tile
- framer-motion for scroll reveals, count-ups, layout and page animations
- Geist and Geist Mono (self-hosted via Fontsource), lucide icons
- `@react-pdf/renderer` for the downloadable PDF resume (lazy-loaded on click)

## Project structure

```
src/
  data/resume.ts          All page content (edit this to update the site and the PDF)
  data/skillCategories.ts Skill group labels shared by the page and the PDF
  types/index.ts          Shapes of the content in resume.ts
  components/<Section>/   One folder per page section
  components/ui/          shadcn/ui components (added with the shadcn CLI)
  components/reui/        ReUI components (added from the @reui registry)
  components/motion/      Animation helpers (reveal, count-up, marquee, scroll progress)
  components/shared/      Section header, theme toggle, brand icons
  context/                Theme provider (light/dark, persisted to localStorage)
  index.css               Tailwind entry, theme tokens and keyframes
```

Add more components with `npx shadcn@latest add <name>` or `npx shadcn@latest add @reui/<name>`.

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
