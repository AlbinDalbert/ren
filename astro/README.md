# Albin Dalbert — personal index

A small personal site for work, notes, and an eventual CV. Built with Astro and intentionally static-first.

## Commands

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Content

- `src/pages/` — home, work, notes, and about pages
- `../content/notes/` — Markdown posts, deliberately outside the app
- `src/data/site.ts` — site details, project records, and capabilities
- `src/styles/global.css` — the visual system

A note is published when it has frontmatter matching the collection schema in `src/content.config.ts` and `draft` is absent or `false`. The top-level `content/` directory has no dependency on Astro and can later become its own repository or git submodule.

By default the app reads `../content/notes`. A separately checked-out repository can be supplied at build time with `NOTES_CONTENT_DIR=/path/to/notes`.

```md
---
title: "A useful title"
description: "One sentence for lists and search previews."
published: 2026-08-16
tags: [design, tools]
draft: false
---
```

## Before deployment

1. Replace or revise the sample writing in `../content/notes/`.
2. Add the production URL as `site` in `astro.config.mjs` to enable canonical URLs.
3. Replace the `RSS soon` footer label when a feed is added.
4. Add a public email address only if desired.

Authentication is deliberately outside the first version. A future `/lab` can use Astro server rendering without complicating the public static site now.
