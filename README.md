# Muyiwa Ojo — Ward 22 Campaign Website

A modern, premium political campaign website built with Next.js 14, Tailwind CSS, and Framer Motion. Features a complete bilingual (English/French) setup, dynamic Dark Mode, a secure Stripe donation portal, and Resend for contact forms.

## Tech Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll-triggered animations, page transitions
- **TypeScript** — full type safety
- **next-intl** — full i18n localization (English/French)
- **next-themes** — comprehensive Dark Mode support
- **Stripe** — secure donation processing portal
- **Resend** — email API for contact forms
- **Lucide React** — consistent icon system
- **Google Fonts** — Playfair Display (headings) + DM Sans (body)

## Getting Started

```bash
# Install dependencies
pnpm install

# Set up your environment variables (see .env.example)
cp .env.example .env.local

# Start development server
pnpm run dev
# → Opens at http://localhost:3000

# Production build
pnpm run build
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/         # Localized routes (e.g., /en, /fr)
│   │   ├── about/        # Standalone About page
│   │   ├── donate/       # Stripe donation portal
│   │   ├── running/      # "Why I'm Running" page
│   │   ├── layout.tsx    # Root layout + i18n/theme providers
│   │   └── page.tsx      # Home page (assembles all sections)
│   └── api/              # API routes (Stripe, Resend)
├── components/           # UI components (Hero, Navbar, Mission, etc.)
└── i18n/                 # Localization configuration and routing
messages/
├── en.json               # English translations
└── fr.json               # French translations
public/                   # Static assets (images in .avif format)
```

## Design System

### Colors
```css
--navy:   #0B1F3A  /* Primary dark — nav, cards, buttons */
--gold:   #D4A537  /* Accent — highlights, CTAs, stats */
--forest: #1F5E4E  /* Secondary — community section */
--cream:  #F7F5EF  /* Light backgrounds — priorities, contact */
```
*Note: Dark mode heavily utilizes `bg-gray-900` and `bg-gray-950` with inverted text colors.*

### Typography
- **Playfair Display** — all headings (`font-display`)
- **DM Sans** — all body text (`font-body`)

## Customisation

### Updating Content (Text & Translations)
All copy is handled via `next-intl`. To update text, modify the corresponding keys in:
- `messages/en.json` (English)
- `messages/fr.json` (French)

### Changing Images
The site uses highly optimized `.avif` images located in the `/public` directory.
To change the main portrait:
1. Place your new `.avif` file in `/public` (e.g., `portrait.avif`).
2. Update the `src` attribute in `src/components/Hero.tsx` or `src/app/[locale]/about/page.tsx` if necessary.

### Stripe Setup
Ensure your `.env.local` contains valid keys:
- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`
- `STRIPE_SECRET_KEY`

### Resend Setup (Contact Form)
Set your `RESEND_API_KEY` in `.env.local` for the contact form to properly dispatch emails.

muyiwaojo2026!
