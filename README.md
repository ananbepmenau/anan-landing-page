# AnAn - Bếp Mẹ Nấu

Product-first landing page for AnAn - Bếp Mẹ Nấu (bánh bò thốt nốt nướng thủ công), built with [Next.js](https://nextjs.org) (App Router) and plain JavaScript.

This implements the "AnAn Landing v2 - Product First" design exported from Claude Design — see `docs/design-history/` for the original prototype and chat transcripts that informed it.

## Stack

- **Next.js 16** (App Router, JavaScript, no TypeScript)
- **CSS Modules** per component + a small set of shared utility classes in `app/globals.css` (`.container`, `.btn`, `.eyebrow`, `.sectionTitle`, `.divider`, …)
- **next/font** for self-hosted "Be Vietnam Pro" (renders correctly for Vietnamese diacritics)
- **boxicons** (npm package) for icons
- **next/image** for optimized, lazy-loaded images

## Project structure

```
app/
  layout.js            # root layout: fonts, global CSS
  page.js              # composes all sections
  globals.css          # CSS variables + shared utility classes
components/
  OrderProvider.js     # client-side context: selected product/size/qty
  TopBar.js            # urgency bar
  Header.js            # sticky nav
  Hero.js
  ProductSection.js    # interactive product + size/qty picker (#menu)
  ComboSection.js       # "who is this for" cards (#combo)
  CommitmentSection.js  # freshness/lot-tracking commitment (#cam-ket)
  ServicesSection.js    # wholesale/support (#services)
  TestimonialsSection.js
  StorySection.js
  Footer.js
  StickyOrderBar.js     # fixed bottom bar, reflects current order selection
lib/
  site.js               # shared content data (products, testimonials, links, copy)
public/
  images/                # all product/brand photography
docs/
  design-history/        # original Claude Design export (.dc.html, chats, support.js)
```

Interactive state (chosen product, box size, quantity, live total) lives in `OrderProvider` and is shared between the product picker and the sticky bottom order bar via React context.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Content notes

- Order form and phone number are wired to the real values from the current site (Google Form + Zalo/hotline `0918 103 741`).
- All copy, pricing, and images are unchanged from the approved v2 design; only the header/tagline were updated per the design brief (AnAn - Bếp Mẹ Nấu / Gói an lành trong từng vị bánh).
