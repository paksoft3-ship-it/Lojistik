"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormField, inputClass, selectClass } from "./FormField";
import { trackContactFormSubmit } from "@/lib/tracking";
import { getStoredUTMParams } from "@/lib/utils";

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Ad Soyad zorunludur";
    if (!form.phone.trim()) newErrors.phone = "Telefon numarası zorunludur";
    if (!form.message.trim()) newErrors.message = "Mesajınızı yazın";
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

    trackContactFormSubmit();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, pagePath: window.location.pathname, ...utmParams }),
      }).catch(() => {});
    } finally {
      router.push("/tesekkurler?source=contact_form");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Ad Soyad" error={errors.name} required>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            className={inputClass}
            autoComplete="name"
          />
        </FormField>
        <FormField label="Telefon" error={errors.phone} required>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="05XX XXX XX XX"
            className={inputClass}
            autoComplete="tel"
          />
        </FormField>
      </div>
      <FormField label="E-posta">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ornek@email.com"
          className={inputClass}
          autoComplete="email"
        />
      </FormField>
      <FormField label="Konu">
        <select name="subject" value={form.subject} onChange={handleChange} className={selectClass}>
          <option value="">Konu seçin...</option>
          <option value="teklif">Fiyat Teklifi</option>
          <option value="sikayet">Şikayet</option>
          <option value="bilgi">Genel Bilgi</option>
          <option value="diger">Diğer</option>
        </select>
      </FormField>
      <FormField label="Mesajınız" error={errors.message} required>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Mesajınızı buraya yazın..."
          className={`${inputClass} min-h-[120px] resize-none`}
          rows={4}
        />
      </FormField>
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium rounded-[8px] transition-colors active:scale-95 disabled:opacity-60 min-h-[44px]"
      >
        {submitting ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>
    </form>
  );
}
