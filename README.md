# Solivate Studio Web

Static Astro landing page for Solivate Studio.

## Stack

- Astro
- TypeScript
- Plain CSS
- Static output for Vercel

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Structure

```text
src/
  pages/index.astro
  index.css
public/
  images/
```

## Deploy

Vercel is configured through `vercel.json`:

- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
