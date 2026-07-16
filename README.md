# Tikkun Africa Foundation

Website and donor dashboard for Tikkun Africa Foundation, built with React + TypeScript (Create React App).

## About this repo

This codebase was reconstructed from the live production build running at
[tikkunafricafoundation.org](https://tikkunafricafoundation.org). The original
repository history was unavailable, so the source in `src/` was recovered
directly from the deployed build's source maps, which embedded the original
`.tsx`/`.ts`/`.css` files verbatim. `public/` contains the site's static
assets (favicons, manifest, and the images/legacy template CSS/JS actually
referenced by the app).

## Requirements

- Node.js 18+
- npm

## Getting started

```bash
npm install
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm start` — run the app in development mode
- `npm run build` — build the app for production into `build/`
- `npm test` — run tests in watch mode
- `npm run eject` — eject the Create React App configuration (irreversible)

## Project structure

```
public/               static assets served as-is (index.html, favicons, images, legacy template CSS/JS)
src/
  App.tsx             route definitions
  index.tsx           app entry point
  layouts/            shared layout pieces (header, footer, hero sections, etc.)
  website/            public-facing pages (Home, About, Donate, Gallery, Contact, ...)
  dashboard/          donor/admin dashboard
```

## Routes

| Path                | Page              |
| -------------------- | ----------------- |
| `/`                   | Home               |
| `/about`              | About              |
| `/contact`            | Contact            |
| `/networking`         | Networking         |
| `/transformation`     | Transformation     |
| `/organization`       | Organization       |
| `/climate`            | Climate            |
| `/donate`             | Donate             |
| `/donate/success`     | Donate success     |
| `/gallery`            | Gallery            |
| `/partners`           | Partners           |
| `/events`             | Events             |
| `/dashboard/*`        | Dashboard          |

## Notes

- The legacy jQuery/Bootstrap template assets under `public/assets/` are loaded
  alongside the React app in `public/index.html` and are still referenced by
  some pages for images and styling.
- Large backup archives found on the production server (`assets.zip`,
  `assets_heavy.zip`, `static.zip`, `static_phone.zip`) were not pulled into
  this repo since they were not referenced by the running app.
