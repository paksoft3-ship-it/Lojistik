"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FormField, inputClass, selectClass } from "./FormField";
import { allDistricts } from "@/data/districts";
import { getStoredUTMParams, persistUTMParams } from "@/lib/utils";
import { trackQuoteFormStart, trackQuoteFormSubmit } from "@/lib/tracking";

const cargoTypes = [
  "Parça Eşya",
  "Beyaz Eşya",
  "Öğrenci Eşyası",
  "Koli / Kutu",
  "Ofis Malzemeleri",
  "Bisiklet / Motor",
  "Diğer",
];

interface QuoteFormProps {
  serviceSlug?: string;
  defaultDistrict?: string;
  compact?: boolean;
}

export function QuoteForm({ serviceSlug, defaultDistrict, compact = false }: QuoteFormProps) {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    from: defaultDistrict ?? "",
    to: "",
    cargoType: "",
    phone: "",
    notes: "",
    date: "",
  });

  useEffect(() => {
    persistUTMParams();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (!started) {
      setStarted(true);
      trackQuoteFormStart(serviceSlug ? `service_${serviceSlug}` : "homepage");
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.from) newErrors.from = "Lütfen kalkış ilçesini seçin";
    if (!form.to) newErrors.to = "Lütfen varış ilçesini seçin";
    if (!form.cargoType) newErrors.cargoType = "Lütfen yük tipini seçin";
    if (!form.phone.trim()) newErrors.phone = "Telefon numarası zorunludur";
    else if (!/^(\+90|0)?[5][0-9]{9}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Geçerli bir telefon numarası girin";
    }
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    const utmParams = getStoredUTMParams();

    const payload = {
      ...form,
      serviceSlug,
      pagePath: window.location.pathname,
      source: "quote_form",
      ...utmParams,
    };

    trackQuoteFormSubmit({
      from: form.from,
      to: form.to,
      cargoType: form.cargoType,
      serviceSlug,
      district: defaultDistrict,
    });

    try {
      // Replace with real API endpoint / server action
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Silently handle — redirect regardless so UX is not disrupted
      });
    } finally {
      router.push("/tesekkurler?source=quote_form");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "grid grid-cols-1 gap-4"}>
        {/* From */}
        <FormField label="Nereden (İlçe)" error={errors.from} required>
          <select
            name="from"
            value={form.from}
            onChange={handleChange}
            className={selectClass}
            aria-required="true"
          >
            <option value="">Seçiniz...</option>
            <optgroup label="Anadolu Yakası">
              {allDistricts
                .filter((d) => d.side === "anadolu")
                .map((d) => (
                  <option key={d.slug} value={d.name}>{d.name}</option>
                ))}
            </optgroup>
            <optgroup label="Avrupa Yakası">
              {allDistricts
                .filter((d) => d.side === "avrupa")
                .map((d) => (
                  <option key={d.slug} value={d.name}>{d.name}</option>
                ))}
            </optgroup>
          </select>
        </FormField>

        {/* To */}
        <FormField label="Nereye (İlçe)" error={errors.to} required>
          <select
            name="to"
            value={form.to}
            onChange={handleChange}
            className={selectClass}
            aria-required="true"
          >
            <option value="">Seçiniz...</option>
            <optgroup label="Anadolu Yakası">
              {allDistricts
                .filter((d) => d.side === "anadolu")
                .map((d) => (
                  <option key={d.slug} value={d.name}>{d.name}</option>
                ))}
            </optgroup>
            <optgroup label="Avrupa Yakası">
              {allDistricts
                .filter((d) => d.side === "avrupa")
                .map((d) => (
                  <option key={d.slug} value={d.name}>{d.name}</option>
                ))}
            </optgroup>
          </select>
        </FormField>

        {/* Cargo type */}
        <FormField label="Yük Tipi" error={errors.cargoType} required>
          <select
            name="cargoType"
            value={form.cargoType}
            onChange={handleChange}
            className={selectClass}
            aria-required="true"
          >
            <option value="">Seçiniz...</option>
            {cargoTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </FormField>

        {/* Phone */}
        <FormField label="Telefon" error={errors.phone} required>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="05XX XXX XX XX"
            className={inputClass}
            aria-required="true"
            autoComplete="tel"
          />
        </FormField>
      </div>

      {!compact && (
        <>
          <FormField label="Tercih Edilen Tarih">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={inputClass}
              min={new Date().toISOString().split("T")[0]}
            />
          </FormField>
          <FormField label="Ek Notlar">
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Taşınacak eşyalar hakkında ek bilgi..."
              className={`${inputClass} min-h-[88px] resize-none`}
              rows={3}
            />
          </FormField>
        </>
      )}

      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={() => setForm({ from: "", to: "", cargoType: "", phone: "", notes: "", date: "" })}
          className="px-5 py-2.5 border border-[#E5E7EB] text-[#6B7280] rounded-[8px] hover:bg-[#F8F9FA] transition-colors text-sm font-medium min-h-[44px]"
        >
          Sıfırla
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-2.5 bg-[#E63900] hover:bg-[#C92F00] text-white rounded-[8px] font-medium transition-colors active:scale-95 text-sm disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]"
        >
          {submitting ? "Gönderiliyor..." : "Fiyatı Gör"}
        </button>
      </div>
    </form>
  );
}
