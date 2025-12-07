## Component Library Overview

This README is a quick reference for how to use the shared components that power the marketing site (home page, service pages, and the ROI calculator).

You normally won’t create a separate “About Us” page from here – instead you’ll reuse these components inside route pages in `src/pages`.

---

## 🚀 Quick Start

All core components are exported from `src/components/index.ts`, so you can import them in two main ways:

```tsx
// Method 1: Import from the barrel file
import { Button, Card, Navbar, Hero, Stats } from './components';

// Method 2: Import a specific component
import Button from './components/Button';
import Stats from './components/Stats';
```

---

## 📦 Available Components (high level)

### Core UI

- **Button** – primary / secondary CTAs used across the site.
- **Card** – glass / elevated cards used for sections, pricing, and feature blocks.
- **Badge & BadgeGroup** – small label chips (e.g. SEO, AI Chatbot, Voice Bot).

### Layout & Site Shell

- **Navbar** – main navigation bar with service dropdown.
- **Hero** – homepage hero section (local SEO, top‑5 positioning).
- **Footer** – global footer with links and contact information.
- **LazySection** – helper to lazily mount heavy sections when scrolled into view.
- **ScrollToTop** – scrolls back to top when navigating routes.

### Content Sections

- **Stats** – KPI / numbers block on the homepage.
- **Services** – interactive services selector (Local SEO, Google Ads, SEO Website, AI Chatbots).
- **ServiceCard / ServicePage** – building blocks for individual service pages.
- **TheDifference** – comparison-style section explaining how you work.
- **WebsiteComponents** – lists the pieces that go into an SEO website.
- **ContactSection** – CTA/contact block used on pricing and service pages.
- **FAQSection** – common questions used on the homepage and SEO pages.
- **HowWeWork** – 4‑step process carousel describing your workflow.
- **CookieBanner** – cookie consent banner (currently opt‑in, see component for details).

### ROI Calculator

Located in `src/components/calculator` and exported via `index.ts`:

- **BusinessInfo** – collects industry, client value, and current performance.
- **RankingInfo** – asks where you currently rank (top‑5, page 1, etc.).
- **ServiceSelection** – lets users pick Local SEO, Ads, Website, and Chatbot.
- **ResultsDisplay** – shows projections, ROI, and per‑service breakdown.
- **icons.tsx** – shared icon set used by the calculator components.

---

## 🎯 Usage Examples

### Typical homepage layout

```tsx
import {
  Navbar,
  Hero,
  Services,
  Stats,
  TheDifference,
  HowWeWork,
  FAQSection,
  ContactSection,
  Footer,
} from './components';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <TheDifference />
        <HowWeWork />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
```

### Using the ROI calculator on the calculator page

```tsx
import {
  BusinessInfo,
  RankingInfo,
  ServiceSelection,
  ResultsDisplay,
} from './components';

// In practice this is wired up via the `useCalculator` hook,
// but this shows the building blocks you have available.
```

---

## ✨ Implementation Notes

- **Styling** – components are styled with Tailwind classes defined in `index.css` / `globals.css` (the old `.heading-primary` / `.bg-section` examples were placeholders and are no longer used).
- **Accessibility** – components include ARIA labels where needed and are designed to work well with keyboard navigation.
- **Performance** – heavier sections use `LazySection`, and many components are wrapped in `memo` to avoid unnecessary re‑renders.
- **TypeScript** – all components are typed; importing from `./components` gives you full IntelliSense support.

All components are ready to reuse across new pages and sections – treat this file as a living reference and extend it if you add new shared components. 🚀
