# UluLojistik — İstanbul Minivan Nakliye Website

Production-ready Next.js website for UluLojistik, an Istanbul-only minivan transport service.

## Tech Stack
- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Material Symbols** (icons)
- **Inter** (font via next/font/google)

## Commands

```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint check
npx tsc --noEmit  # TypeScript check
```

## Folder Structure

```
app/                    — Next.js App Router pages
  page.tsx              — Homepage
  hizmetler/            — Service pages
  bolgeler/             — District/region pages
  araclarimiz/          — Vehicles page
  teklif-al/            — Quote form page
  blog/                 — Blog listing + detail
  hakkimizda/           — About page
  sss/                  — FAQ page
  iletisim/             — Contact page
  tesekkurler/          — Lead success page
  api/                  — API routes (quote, contact)
  robots.ts             — robots.txt generator
  sitemap.ts            — sitemap.xml generator
  manifest.ts           — web app manifest

components/
  layout/               — TopBar, Header, Footer, etc.
  sections/             — Page section components
  cards/                — Card components
  forms/                — QuoteForm, ContactForm
  seo/                  — JSON-LD schema components
  tracking/             — GTM integration
  ui/                   — Base UI components

config/
  site.ts               — Brand config, contact info, domain

data/
  services.ts           — All services with metadata
  districts.ts          — Istanbul districts (Avrupa + Anadolu)
  faq.ts                — All FAQ items
  blog.ts               — Blog posts
  navigation.ts         — Nav items
  testimonials.ts       — Customer reviews

lib/
  tracking.ts           — GTM/GA4/Google Ads event helpers
  utils.ts              — cn(), UTM helpers, slugify

public/
  llms.txt              — AI/LLM reference (brief)
  llms-full.txt         — AI/LLM reference (detailed)
```

## How to Add a New Service Page

1. Add the service object to `data/services.ts` with all fields filled.
2. Create the directory: `app/hizmetler/your-slug/`
3. Create `app/hizmetler/your-slug/page.tsx`:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { siteConfig } from "@/config/site";

const SLUG = "your-slug";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(SLUG);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `${siteConfig.domain}${service.href}` },
  };
}

export default function ServicePage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
```

4. Add the new service to `data/navigation.ts` footer and header nav.
5. The `sitemap.ts` automatically picks it up from `data/services.ts`.

## How to Add a New District Page

District pages are handled by the dynamic route `app/bolgeler/[district]/page.tsx`.

To add a new district:
1. Add the district to `data/districts.ts` (in `avrupa` or `anadolu` array).
2. The page, sitemap, and region overviews update automatically.

## How to Update SEO Metadata

Each page has its own `export const metadata` or `generateMetadata()`. To update:
- **Homepage**: `app/page.tsx` → `metadata` export
- **Service pages**: Update `metaTitle`, `metaDescription`, `keywords` in `data/services.ts`
- **Global defaults**: `app/layout.tsx` → `metadata` export
- **Sitemap**: `app/sitemap.ts` — auto-generated from data files

## How to Update Schema

- **LocalBusiness schema**: `components/seo/LocalBusinessJsonLd.tsx`
- **Service schema**: `components/seo/ServiceJsonLd.tsx` (auto-populated from service data)
- **FAQ schema**: `components/seo/FAQJsonLd.tsx` (auto-populated from FAQ data)
- **Breadcrumb schema**: `components/seo/BreadcrumbJsonLd.tsx` (used per page)

## How to Configure Google Ads / GTM

Copy `.env.local` and fill in the values:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_QUOTE=xxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_PHONE=xxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP=xxxxxxxxxxxxxxxxxx
```

GTM is loaded via `components/tracking/GTM.tsx` in the root layout.

Tracking events fired automatically:
- `phone_click` — on every phone link click
- `whatsapp_click` — on every WhatsApp link click
- `quote_form_start` — when user starts filling the quote form
- `quote_form_submit` — on form submit
- `contact_form_submit` — on contact form submit
- `lead_success` — on the /tesekkurler page load
- `cta_click` — on CTA button clicks

All events include `page_path`, `location`, `button_text` metadata.

## How to Update llms.txt

`public/llms.txt` and `public/llms-full.txt` are static files. Update them when:
- Services change
- Contact info changes
- Important business constraints change

Keep the constraint section accurate: UluLojistik is Istanbul-only, minivan-only.

## Business Constraints (do NOT violate)

- ❌ No "81 il", "Türkiye geneli", "uluslararası"
- ❌ No "tır", "kamyon", "kamyonet", "büyük araç"
- ❌ No "şehirlerarası", "şehirler arası"
- ✅ Only "İstanbul içi"
- ✅ Only "minivan" vehicles
