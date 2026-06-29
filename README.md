# Solivate Studio Web

Official website for **Solivate Studio** – a premium Digital Solution Agency based in Indonesia. Built using Astro with a modern, high-performance static architecture, fully optimized for search engines (SEO) and user experience.

## ✨ Features

- **Modern & Premium UI:** Crafted with customized HSL color systems, sleek dark-mode glassmorphism, responsive layout, and smooth cursor-guided hover animations.
- **Advanced SEO Architecture:**
  - Semantic HTML structure.
  - Fully dynamic SEO titles, descriptions, and keywords.
  - **Programmatic Local SEO:** Specially generated regional landing pages targeting 10 major Indonesian cities (Bekasi, Jakarta, Tangerang, Depok, Bogor, Bandung, Surabaya, Semarang, Medan, Makassar) to capture local business searches.
  - **Structured Data:** JSON-LD schema markup (`Organization`, `LocalBusiness`, `ProfessionalService`, `CreativeWork`, and `CollectionPage`) for high-fidelity search engine results.
  - **Automatic XML Sitemap:** Generated dynamically listing all active services, portfolios, and regional paths.
- **Multilingual Support:** Dynamic Indonesian (ID) and English (EN) language switcher with local storage persistence.
- **Static Output:** Fully optimized, fast loading static pages built for high-speed delivery on Vercel.

## 🚀 Technology Stack

- **Framework:** [Astro v7](https://astro.build/) (Static Site Generation)
- **Styling:** Modern Vanilla CSS (with CSS variables, container queries, and hardware-accelerated transitions)
- **Language:** TypeScript
- **Hosting & Deployment:** Vercel

## 📦 Project Structure

```text
├── public/                  # Static assets (images, logos, favicon, robots.txt)
└── src/
    ├── components/          # Reusable Astro components (Header, Footer, WA CTA)
    ├── data/                # SEO and localized data configurations (seo-pages.ts)
    ├── pages/               # Main pages & routing
    │   ├── layanan/         # Dynamic service pages [slug].astro
    │   ├── portfolio/       # Dynamic case study pages [slug].astro
    │   ├── api/             # API endpoints (e.g. contact submissions)
    │   ├── index.astro      # Main landing page
    │   ├── pricing.astro    # Transparent pricing plans
    │   ├── project.astro    # Portfolios collection showcase
    │   ├── sitemap.xml.ts   # Dynamic sitemap generator
    │   └── jasa-pembuatan-website-[city].astro # Localized city landing pages
    └── index.css            # Base stylesheet & premium utility styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/solivatestudio/SolivateStudioWeb.git

# Navigate to the project directory
cd SolivateStudioWeb

# Install dependencies
npm install
```

### Development Commands

```bash
# Start the local development server
npm run dev

# Run TypeScript and Astro checks
npm run lint

# Build the production bundle
npm run build

# Preview the locally built production site
npm run preview
```

## 🌐 Deployment

The project is configured for continuous deployment on **Vercel** via `.vercel` integration.
Build parameters:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Configuration:** vercel.json

---
*Developed with ❤️ by Solivate Studio.*
