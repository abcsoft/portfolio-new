# Mainframe® — Premium Creative Agency Website

A multi-page, production-grade creative agency website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## Architecture & Features

- **Cinematic Mouse-Scrub Video Hero**:
  - Fullscreen fixed video background (`hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4`).
  - Horizontal mouse scrub algorithm scaling by delta with sensitivity clamp and `onSeeked` queueing to eliminate frame-drop and seek-flooding.
  - Touch scrub support and accessible fallback image poster.
  - Filter-blurred intro label (`A.R.I.A`).
  - Native typewriter hook (`useTypewriter`) with blinking terminal cursor.
  - 4 solid pill actions + 1 outlined email copy pill button with inline SVG icon and clipboard write fallback.
- **Dependency-Free In-House Animation & Interaction Engine**:
  - Native browser `IntersectionObserver` scroll reveals (`useInView`, `Reveal`, `LetterReveal`, `TextRevealWords`).
  - Native `requestAnimationFrame` lerping for custom dual-ring magnetic cursor (`CustomCursor`).
  - Native magnetic button physics hook (`useMagnetic`).
  - Native `prefers-reduced-motion` compliance across all interactions.
- **Client-Side Routing & SPA Navigation**:
  - Browser History API routing (`RouterProvider`, `useRouter`, `Link`) with popstate handling, title synchronization, and scroll restoration.
  - Direct routes:
    - `/` — Full-screen hero, featured work showcase, studio ethos, services accordion, process timeline, labs callout.
    - `/work` — Project archive with category filtering (`All`, `Branding`, `Web`, `Motion`, `Experiments`).
    - `/work/:slug` — Full case studies for 6 curated projects (`VANTA`, `FORM/01`, `MONO`, `ECHO`, `AETHER`, `NEXUS`) with challenges, approaches, deliverables, high-res artifact galleries, and next-project loops.
    - `/labs` — Interactive creative technology playground with 3 real-time canvas & mathematical demos (Particle Topology, Typographic Elasticity, Isometric Orthogonal Matrix).
    - `/studio` — Studio philosophy, architectural tenets, methodology, and collaborative rhythm.
    - `/openings` — Career opportunities with interactive modal role descriptions and mailto application actions.
    - `/shop` — Physical studio artifacts, limited editions, monograph specifications, and reservation inquiries.
    - `/contact` — Commission initiation form with inline validation, budget selectors, topic pre-filling, and direct mail client bridge.
- **Editorial Typography & Visual Design**:
  - `HelveticaNowDisplay-Medium` (logo) and `HelveticaNowDisplayW01-Rg` (editorial body) via CDN links.
  - Dark cinematic palette: `#080808` primary, `#111111` secondary, `#ffffff` primary text, `#a3a3a3` secondary text, subtle borders `rgba(255,255,255,0.15)`.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Run TypeScript type check
npm run lint

# Compile production bundle
npm run build
```

---

## Production Deployment & SPA Fallback

Because Mainframe® utilizes client-side History API routing (`/work/vanta`, `/labs`, `/studio`, etc.), configure your hosting provider to serve `index.html` for all unknown routes:

### Vercel
Add a `vercel.json` file to the root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Netlify
Add a `_redirects` file in `public/` (or root):
```
/*    /index.html   200
```

### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
