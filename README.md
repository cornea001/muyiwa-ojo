# Muyiwa Ojo — Ward 22 Campaign Website

A modern, premium political campaign website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** — App Router, static export
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll-triggered animations, page transitions
- **TypeScript** — full type safety
- **Lucide React** — consistent icon system
- **Google Fonts** — Playfair Display (headings) + DM Sans (body)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Opens at http://localhost:3000

# Production build (static export)
npm run build
# → Outputs to /out directory (deploy to Netlify, Vercel, GitHub Pages, etc.)
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Home page (assembles all sections)
│   └── globals.css       # Design tokens, fonts, base styles
└── components/
    ├── Navbar.tsx         # Sticky transparent→solid nav with mobile menu
    ├── Hero.tsx           # Full-screen hero with animated entrance
    ├── StatsBar.tsx       # Animated counter stats bar
    ├── About.tsx          # Two-column about section with portrait
    ├── Priorities.tsx     # Six priority cards with hover animations
    ├── Community.tsx      # Community impact + gold CTA banner
    ├── Testimonials.tsx   # Three testimonial cards
    ├── GetInvolved.tsx    # Four CTA cards (volunteer/donate/sign/newsletter)
    ├── Contact.tsx        # Full contact form with validation + success state
    └── Footer.tsx         # Three-column footer with legal disclaimer
```

## Design System

### Colors
```css
--navy:   #0B1F3A  /* Primary dark — nav, cards, buttons */
--gold:   #D4A537  /* Accent — highlights, CTAs, stats */
--forest: #1F5E4E  /* Secondary — community section */
--cream:  #F7F5EF  /* Light backgrounds — priorities, contact */
```

### Typography
- **Playfair Display** — all headings (`font-display`)
- **DM Sans** — all body text (`font-body`)

### Animations
All scroll-triggered via Framer Motion `whileInView`:
- Staggered card reveals
- Fade-up entrances
- Animated counters (stats bar)
- Hover lift effects on cards
- Scroll indicator bounce

## Deployment

### Vercel (recommended)
```bash
npx vercel
```

### Netlify
```bash
npm run build
# Deploy the /out folder
```

### GitHub Pages
```bash
npm run build
# Push /out to gh-pages branch
```

## Customisation

### Swap in a real photo
Replace the placeholder portrait in `Hero.tsx` and `About.tsx`:
```tsx
// Replace the placeholder div with:
<Image src="/portrait.jpg" alt="Muyiwa Ojo" fill className="object-cover" />
```
Add the image to `/public/portrait.jpg`.

### Connect the contact form
In `Contact.tsx`, replace the `setTimeout` simulation:
```tsx
// Example: send to a Formspree endpoint
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setState('success')
else setState('error')
```

### Update content
All copy is in the component files. Search and replace for quick updates.
