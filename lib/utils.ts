import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, "");
}

/** Capture UTM params and gclid from the URL search string */
export function getUTMParams(searchString?: string): Record<string, string> {
  const params = new URLSearchParams(
    searchString ?? (typeof window !== "undefined" ? window.location.search : "")
  );
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "fbclid",
  ];
  const result: Record<string, string> = {};
  for (const key of keys) {
    const val = params.get(key);
    if (val) result[key] = val;
  }
  return result;
}

/** Persist UTM params in session storage (call once on mount) */
export function persistUTMParams(): void {
  if (typeof window === "undefined") return;
  const params = getUTMParams();
  if (Object.keys(params).length > 0) {
    sessionStorage.setItem("utm_params", JSON.stringify(params));
  }
}

/** Retrieve stored UTM params */
export function getStoredUTMParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem("utm_params");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function buildCanonical(path: string, domain: string): string {
  return `${domain}${path}`;
}
