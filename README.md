# GTA VI — Tanzania Edition

A cinematic, game-poster style landing page built as a front-end motion study: layered parallax, scroll-triggered reveals and a dark, high-contrast palette.

**Live:** [gta-tz.vercel.app](https://gta-tz.vercel.app)

## Stack

React 19 · Vite · Tailwind CSS 4 (`@tailwindcss/vite`) · GSAP (`@gsap/react`) · react-responsive

## What's in it

- Full-viewport hero with parallax layers
- Scroll-linked section reveals driven by GSAP timelines
- Responsive typography and breakpoints via `react-responsive`
- Reusable content constants kept out of the components

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Structure

```
src/          components, hooks and page sections
constants/    copy, asset paths and section data
public/       video, image and audio assets
```

## Note

This is a fan-made design exercise, not affiliated with Rockstar Games or Take-Two Interactive. All trademarks belong to their owners.

## Licence

See [LICENSE](LICENSE).
