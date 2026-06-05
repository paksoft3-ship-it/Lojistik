"use client";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function pushDataLayer(
  eventName: string,
  payload: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push({
    event: eventName,
    page_path: window.location.pathname,
    ...payload,
  });
}

export function trackPhoneClick(
  location: string,
  buttonText: string = "Hemen Ara"
): void {
  pushDataLayer("phone_click", {
    location,
    button_text: buttonText,
    value: 1,
  });

  // Google Ads conversion — phone call
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_PHONE;
  if (adsId && label && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${adsId}/${label}`,
    });
  }
}

export function trackWhatsAppClick(
  location: string,
  buttonText: string = "WhatsApp'tan Yaz"
): void {
  pushDataLayer("whatsapp_click", {
    location,
    button_text: buttonText,
    value: 1,
  });

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP;
  if (adsId && label && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${adsId}/${label}`,
    });
  }
}

export function trackQuoteFormStart(location: string): void {
  pushDataLayer("quote_form_start", {
    location,
    form_type: "quote",
  });
}

export interface QuoteFormData {
  from?: string;
  to?: string;
  cargoType?: string;
  serviceSlug?: string;
  district?: string;
}

export function trackQuoteFormSubmit(formData: QuoteFormData = {}): void {
  pushDataLayer("quote_form_submit", {
    form_type: "quote",
    service_slug: formData.serviceSlug,
    district: formData.district,
    from_district: formData.from,
    to_district: formData.to,
    cargo_type: formData.cargoType,
    value: 5,
  });

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_QUOTE;
  if (adsId && label && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${adsId}/${label}`,
    });
  }
}

export function trackContactFormSubmit(): void {
  pushDataLayer("contact_form_submit", {
    form_type: "contact",
    value: 2,
  });
}

export interface LeadSuccessOptions {
  source?: string;
  serviceSlug?: string;
  district?: string;
}

export function trackLeadSuccess(options: LeadSuccessOptions = {}): void {
  pushDataLayer("lead_success", {
    lead_source: options.source ?? "quote_form",
    service_slug: options.serviceSlug,
    district: options.district,
    value: 10,
  });
}

export function trackCTAClick(
  location: string,
  buttonText: string,
  href: string
): void {
  pushDataLayer("cta_click", {
    location,
    button_text: buttonText,
    href,
  });
}

/* ──────────────────────────────────────────────────────────────────────────
  ENHANCED CONVERSIONS PLACEHOLDER
  ─────────────────────────────────────────────────────────────────────────
  When the user provides email and/or phone in the quote form, you can
  enable Enhanced Conversions by hashing the data with SHA-256 and sending
  it via the `user_data` field in the gtag conversion event.

  Example (do NOT log raw PII to console):

  async function hashSHA256(value: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(value.trim().toLowerCase());
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  Then in trackQuoteFormSubmit, pass:
    window.gtag("event", "conversion", {
      send_to: `${adsId}/${label}`,
      user_data: {
        email: await hashSHA256(email),
        phone_number: await hashSHA256(phone),
      },
    });

  Only implement after user consent is collected per privacy requirements.
────────────────────────────────────────────────────────────────────────── */
