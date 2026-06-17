<<<<<<< HEAD
# Made-in-China-Style-Product-Category-Section-Techromz-Trade-and-Logistics-Pvt-Ltd
=======
# Techromz B2B Marketplace - Selected Trending Products Section

A complete, production-ready, fully functional Next.js 15 application recreating a Made-in-China.com-inspired **Selected Trending Products** section. Built with TypeScript, Tailwind CSS, and optimized for SEO and accessibility.

This project is prepared for submission as a Software Engineer Trainee technical assignment at **Techromz Trade and Logistics (Pvt) Ltd**.

---

##  Technology Stack & Libraries

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Typography:** [Inter Google Font](https://fonts.google.com/specimen/Inter)
- **Asset Optimization:** Next.js Image component (automatic format conversion, size adaptation, and lazy loading)
- **Accessibility Standards:** WCAG 2.1 AA compliant (semantic HTML, keyboard focus states, aria-labels, and screen reader announcements)

---

##  Project Folder Structure

```
d:/MY_PROJECT/Made-in-China Style Product Category Section/
├── app/
│   ├── favicon.ico          # Application favicon
│   ├── globals.css          # Main stylesheet & Tailwind v4 theme definitions
│   ├── layout.tsx           # Base RootLayout with optimized Inter font and metadata
│   └── page.tsx             # Homepage containing B2B header, Hero banner, RFQ, and Floating widget
├── components/
│   ├── ProductCard.tsx      # Multi-interactive product category cards with zoom and float animations
│   ├── SectionTitle.tsx     # Section headers with a B2B vertical accent bar
│   └── TrendingProducts.tsx # Main grid component managing responsive viewports
├── data/
│   └── products.ts          # Strongly typed category mock dataset with 12 items and Unsplash images
├── types/
│   └── index.ts             # Global TypeScript types (Product interface)
├── public/                  # Static assets (images, icons)
├── eslint.config.mjs        # ESLint rule profiles
├── next-env.d.ts            # Next.js environmental types
├── next.config.ts           # Next.js configuration (configured remotePatterns for Unsplash image rendering)
├── package.json             # Core dependency manifest and scripts
├── postcss.config.mjs       # PostCSS processor rules for Tailwind v4 integration
├── tsconfig.json            # Strict-mode TypeScript compiler configuration
└── README.md                # This manual
```

---

##  Features Implemented

1. **Modern B2B Design & Layout:** Clean, structured corporate look matching the Made-in-China.com layout system.
2. **Category Grid:** Responsive grid container featuring 12 customized trade segments:
   - Green Travel
   - Kitchen Electronics
   - Global Holiday Gifts Festival
   - PV Energy & Clean Metallurgy
   - Power & Generating Sets
   - Yiwu One-Stop Sourcing
   - Hiking Backpack
   - Paper Gift Box
   - Wearable Tech
   - Plastic Machinery
   - Pump & Vacuum Equipment
   - Machine Tools
3. **Responsive Visual Grid system:**
   - **Desktop (1440px+):** 4 columns
   - **Laptop (1024px+):** 3 columns
   - **Tablet (768px+):** 2 columns
   - **Mobile (Base):** 1 column
4. **Vibrant Hover Micro-Animations:**
   - Cards float upwards (`translateY(-8px)`) using smooth ease-in-out transitions.
   - Images scale smoothly (`scale-105`) upon hover.
   - Shadows intensify from standard to extra-large (`shadow-xl`) to establish high depth perception.
5. **Interactive Right-Floating Sticky Sidebar:** Recreates the trademark RFQ, Help, and APP side widgets to simplify navigation and sourcing actions.
6. **Built-in Sourcing Form:** Fully styled Request for Quotation (RFQ) interface with custom inputs (product details, volume selectors, specifications) targeting wholesale buyers.
7. **Strict Performance & Optimization:**
   - Native Next/Image optimizations featuring customized sizes.
   - High-priority above-the-fold image lazy loading.
   - Inter Font optimized through Next.js Font Optimization APIs.
8. **SEO APIs:** Integrated title and metadata attributes utilizing Next.js Metadata configuration on the server side.
9. **Semantic HTML & WCAG Accessibility:** Accessible colors, distinct focused indicator boundaries (`focus-visible:ring-primary`), descriptive label tags, and semantic structures like `<article>`, `<section>`, and `<header>`.

---

##  How to Run Locally

### 1. Install Dependencies
Run the command below in the project directory to install all required packages:
```bash
npm install
```

### 2. Run the Development Server
Execute the command below to start the local developer server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to inspect the application.

---

##  How to Build for Production

To compile the project and build the production bundle:
```bash
npm run build
```

To run the production-built bundle locally:
```bash
npm run start
```

---

##  Vercel Deployment Instructions

The application is fully compatible with Vercel out of the box. Follow these instructions to deploy:Live demo link-https://made-in-china-style-product-categor.vercel.app/

##  Project Update

This project has been updated and deployed successfully on Vercel.

### Deployment:
The latest version is live on Vercel and automatically updates with each push.
