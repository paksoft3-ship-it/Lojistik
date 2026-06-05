"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { allDistricts } from "@/data/districts";
import { getStoredUTMParams, persistUTMParams } from "@/lib/utils";
import { trackQuoteFormStart, trackQuoteFormSubmit } from "@/lib/tracking";
import { useEffect } from "react";

const inputClass =
  "w-full bg-white border border-[#E5E7EB] rounded-[8px] px-4 py-2.5 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#E63900] focus:ring-1 focus:ring-[#E63900] transition-colors min-h-[44px]";

const selectClass =
  "w-full bg-white border border-[#E5E7EB] rounded-[8px] px-4 py-2.5 text-[15px] text-[#111827] focus:outline-none focus:border-[#E63900] focus:ring-1 focus:ring-[#E63900] appearance-none transition-colors min-h-[44px] cursor-pointer";

const trustItems = [
  { icon: "timer", text: "15 dakika içinde teklif dönüşü" },
  { icon: "verified", text: "500+ mutlu müşteri" },
  { icon: "payments", text: "Gizli ücret yok, şeffaf fiyatlandırma" },
  { icon: "support_agent", text: "7/24 destek hattı" },
];

const infoRequiredCards = [
  {
    icon: "inventory_2",
    title: "Eşya Detayı",
    description: "Taşınacak eşyaların türü, adedi ve yaklaşık büyüklüğü.",
  },
  {
    icon: "social_distance",
    title: "Mesafe",
    description: "Alış ve teslim ilçeleri — fiyatı doğrudan etkileyen temel faktör.",
  },
  {
    icon: "elevator",
    title: "Kat & Asansör Durumu",
    description: "Hangi kattan taşınacak ve asansör var mı? Hamaliye buna göre hesaplanır.",
  },
];

const serviceTypes = [
  { icon: "inventory_2", title: "Parça Eşya Taşıma", description: "Tek parça veya az miktarda eşya" },
  { icon: "deployed_code", title: "Koli / Kutu Taşıma", description: "Paketlenmiş ürünler ve koliler" },
  { icon: "business_center", title: "Ofis Eşyası", description: "Masalar, sandalyeler, ekipmanlar" },
  { icon: "school", title: "Öğrenci Eşyası", description: "Yurt veya ev taşımaları" },
];

const pricingFactors = [
  { icon: "social_distance", title: "Mesafe", description: "Alış ve teslimat noktaları arasındaki uzaklık" },
  { icon: "inventory_2", title: "Yük Hacmi", description: "Taşınacak eşyaların boyutu ve ağırlığı" },
  { icon: "elevator", title: "Kat Durumu", description: "Asansör olup olmaması ve taşıma güçlüğü" },
  { icon: "construction", title: "Ek Hizmetler", description: "Hamaliye, paketleme ve kurulum ihtiyacı" },
];

const processSteps = [
  { step: "1", icon: "edit_note", title: "Formu Doldurun", description: "Adres, eşya ve tarih bilgilerini girin." },
  { step: "2", icon: "phone_in_talk", title: "Sizi Arayalım", description: "15 dakika içinde fiyat teklifimizi ileteceğiz." },
  { step: "3", icon: "handshake", title: "Anlaşalım", description: "Fiyatı onaylayın, randevuyu belirleyin." },
  { step: "4", icon: "local_shipping", title: "Taşıyalım", description: "Ekibimiz zamanında kapınızda olsun." },
];

const inlineFAQs = [
  {
    q: "Teklif almak ücretsiz mi?",
    a: "Evet, teklif tamamen ücretsizdir. Herhangi bir ücret ödemeniz gerekmez.",
  },
  {
    q: "Ne kadar sürede teklif alırım?",
    a: "Formu doldurduktan sonra ortalama 15 dakika içinde sizi arıyoruz. Yoğun saatlerde bu süre biraz uzayabilir.",
  },
  {
    q: "Sadece İstanbul içi mi taşıyorsunuz?",
    a: "Evet, yalnızca İstanbul içi minivan nakliye hizmeti veriyoruz. Şehirlerarası taşımacılık hizmetimiz bulunmamaktadır.",
  },
  {
    q: "WhatsApp üzerinden teklif alabilir miyim?",
    a: "Kesinlikle. Eşyanızın fotoğrafını ve alış/teslim adreslerini WhatsApp'tan gönderin, birkaç dakika içinde fiyat verelim.",
  },
  {
    q: "Teklif verdikten sonra fiyat değişir mi?",
    a: "Hayır. Teklif aşamasında belirlenen fiyat kesindir; herhangi bir sürpriz ücret yoktur.",
  },
];

interface FormState {
  adSoyad: string;
  telefon: string;
  eposta: string;
  alinanIlce: string;
  teslimIlce: string;
  alisAdresi: string;
  teslimatAdresi: string;
  hizmetTuru: string;
  tahminiMiktar: string;
  esyaDetay: string;
  tarih: string;
  aciliyet: string;
  katAsansor: string;
  ekNotlar: string;
}

export default function TeklifAlPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormState>({
    adSoyad: "",
    telefon: "",
    eposta: "",
    alinanIlce: "",
    teslimIlce: "",
    alisAdresi: "",
    teslimatAdresi: "",
    hizmetTuru: "",
    tahminiMiktar: "",
    esyaDetay: "",
    tarih: "",
    aciliyet: "",
    katAsansor: "",
    ekNotlar: "",
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
      trackQuoteFormStart("teklif_al_page");
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.adSoyad.trim()) newErrors.adSoyad = "Ad Soyad zorunludur";
    if (!form.telefon.trim()) newErrors.telefon = "Telefon zorunludur";
    else if (!/^(\+90|0)?[5][0-9]{9}$/.test(form.telefon.replace(/\s/g, ""))) {
      newErrors.telefon = "Geçerli bir telefon numarası girin";
    }
    if (!form.alinanIlce) newErrors.alinanIlce = "Alınacak ilçe zorunludur";
    if (!form.teslimIlce) newErrors.teslimIlce = "Teslim ilçe zorunludur";
    if (!form.hizmetTuru) newErrors.hizmetTuru = "Hizmet türü seçiniz";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }
    setSubmitting(true);
    const utmParams = getStoredUTMParams();
    const payload = {
      ...form,
      from: form.alinanIlce,
      to: form.teslimIlce,
      cargoType: form.hizmetTuru,
      phone: form.telefon,
      notes: form.ekNotlar,
      date: form.tarih,
      pagePath: window.location.pathname,
      source: "teklif_al_form",
      ...utmParams,
    };
    trackQuoteFormSubmit({
      from: form.alinanIlce,
      to: form.teslimIlce,
      cargoType: form.hizmetTuru,
    });
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } finally {
      router.push("/tesekkurler?source=teklif_al_form");
    }
  }

  const sectionHeader = (icon: string, title: string, step: number) => (
    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#E5E7EB]">
      <div className="w-8 h-8 bg-[#E63900] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
        {step}
      </div>
      <span className="material-symbols-outlined text-[#E63900] text-[20px]" aria-hidden="true">{icon}</span>
      <h2 className="font-semibold text-[#111827] text-[16px]">{title}</h2>
    </div>
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Teklif Al", href: "/teklif-al" },
        ]}
      />

      <div className="py-12 md:py-16 bg-[#F8F9FA] min-h-screen">
        <Container>
          {/* Page header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF0EB] text-[#E63900] text-xs font-medium rounded-full border border-[#FECDB9] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63900]" aria-hidden="true" />
              Ücretsiz Teklif
            </span>
            <h1 className="text-[28px] md:text-[40px] font-semibold text-[#111827] mb-3 tracking-tight">
              Minivan Nakliye Teklifi Al
            </h1>
            <p className="text-[#6B7280] text-[17px] max-w-2xl leading-relaxed">
              İstanbul içi parça eşya ve küçük yükleriniz için hemen formu doldurun, 15 dakika içinde en uygun minivan nakliye teklifimizi iletelim.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT: Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Section 1: Contact */}
                <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 md:p-8">
                  {sectionHeader("person", "İletişim Bilgileri", 1)}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label htmlFor="adSoyad" className="text-sm font-medium text-[#111827]">
                        Ad Soyad <span className="text-[#E63900]">*</span>
                      </label>
                      <input
                        id="adSoyad"
                        type="text"
                        name="adSoyad"
                        value={form.adSoyad}
                        onChange={handleChange}
                        placeholder="Adınız Soyadınız"
                        className={inputClass}
                        autoComplete="name"
                      />
                      {errors.adSoyad && <p className="text-xs text-red-600" role="alert">{errors.adSoyad}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="telefon" className="text-sm font-medium text-[#111827]">
                        Telefon <span className="text-[#E63900]">*</span>
                      </label>
                      <input
                        id="telefon"
                        type="tel"
                        name="telefon"
                        value={form.telefon}
                        onChange={handleChange}
                        placeholder="05XX XXX XX XX"
                        className={inputClass}
                        autoComplete="tel"
                      />
                      {errors.telefon && <p className="text-xs text-red-600" role="alert">{errors.telefon}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="eposta" className="text-sm font-medium text-[#111827]">
                        E-posta <span className="text-[#6B7280] text-xs font-normal">(isteğe bağlı)</span>
                      </label>
                      <input
                        id="eposta"
                        type="email"
                        name="eposta"
                        value={form.eposta}
                        onChange={handleChange}
                        placeholder="ornek@email.com"
                        className={inputClass}
                        autoComplete="email"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Address */}
                <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 md:p-8">
                  {sectionHeader("location_on", "Adres Bilgileri", 2)}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="alinanIlce" className="text-sm font-medium text-[#111827]">
                        Alınacak İlçe <span className="text-[#E63900]">*</span>
                      </label>
                      <select
                        id="alinanIlce"
                        name="alinanIlce"
                        value={form.alinanIlce}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Seçiniz...</option>
                        <optgroup label="Avrupa Yakası">
                          {allDistricts.filter((d) => d.side === "avrupa").map((d) => (
                            <option key={d.slug} value={d.name}>{d.name}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Anadolu Yakası">
                          {allDistricts.filter((d) => d.side === "anadolu").map((d) => (
                            <option key={d.slug} value={d.name}>{d.name}</option>
                          ))}
                        </optgroup>
                      </select>
                      {errors.alinanIlce && <p className="text-xs text-red-600" role="alert">{errors.alinanIlce}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="teslimIlce" className="text-sm font-medium text-[#111827]">
                        Teslim Edilecek İlçe <span className="text-[#E63900]">*</span>
                      </label>
                      <select
                        id="teslimIlce"
                        name="teslimIlce"
                        value={form.teslimIlce}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Seçiniz...</option>
                        <optgroup label="Avrupa Yakası">
                          {allDistricts.filter((d) => d.side === "avrupa").map((d) => (
                            <option key={d.slug} value={d.name}>{d.name}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Anadolu Yakası">
                          {allDistricts.filter((d) => d.side === "anadolu").map((d) => (
                            <option key={d.slug} value={d.name}>{d.name}</option>
                          ))}
                        </optgroup>
                      </select>
                      {errors.teslimIlce && <p className="text-xs text-red-600" role="alert">{errors.teslimIlce}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="alisAdresi" className="text-sm font-medium text-[#111827]">
                        Alış Adresi
                      </label>
                      <textarea
                        id="alisAdresi"
                        name="alisAdresi"
                        value={form.alisAdresi}
                        onChange={handleChange}
                        placeholder="Mahalle, cadde, bina no..."
                        className={`${inputClass} min-h-[80px] resize-none`}
                        rows={3}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="teslimatAdresi" className="text-sm font-medium text-[#111827]">
                        Teslimat Adresi
                      </label>
                      <textarea
                        id="teslimatAdresi"
                        name="teslimatAdresi"
                        value={form.teslimatAdresi}
                        onChange={handleChange}
                        placeholder="Mahalle, cadde, bina no..."
                        className={`${inputClass} min-h-[80px] resize-none`}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Cargo */}
                <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 md:p-8">
                  {sectionHeader("inventory_2", "Yük Bilgileri", 3)}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="hizmetTuru" className="text-sm font-medium text-[#111827]">
                        Hizmet Türü <span className="text-[#E63900]">*</span>
                      </label>
                      <select
                        id="hizmetTuru"
                        name="hizmetTuru"
                        value={form.hizmetTuru}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Seçiniz...</option>
                        <option value="Parça Eşya">Parça Eşya</option>
                        <option value="Koli/Kutu">Koli / Kutu</option>
                        <option value="Ofis Eşyası">Ofis Eşyası</option>
                        <option value="Öğrenci Evi Eşyası">Öğrenci Evi Eşyası</option>
                        <option value="Beyaz Eşya">Beyaz Eşya</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                      {errors.hizmetTuru && <p className="text-xs text-red-600" role="alert">{errors.hizmetTuru}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="tahminiMiktar" className="text-sm font-medium text-[#111827]">
                        Tahmini Miktar
                      </label>
                      <select
                        id="tahminiMiktar"
                        name="tahminiMiktar"
                        value={form.tahminiMiktar}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Seçiniz...</option>
                        <option value="Az (1-5 parça/koli)">Az (1–5 parça / koli)</option>
                        <option value="Orta (6-15 parça/koli)">Orta (6–15 parça / koli)</option>
                        <option value="Çok (15+ parça/koli)">Çok (15+ parça / koli)</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label htmlFor="esyaDetay" className="text-sm font-medium text-[#111827]">
                        Eşya Detayı
                      </label>
                      <textarea
                        id="esyaDetay"
                        name="esyaDetay"
                        value={form.esyaDetay}
                        onChange={handleChange}
                        placeholder="Taşınacak eşyaları kısaca belirtin (ör. 1 buzdolabı, 3 koli kitap, 1 yazı masası)..."
                        className={`${inputClass} min-h-[88px] resize-none`}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: Transport details */}
                <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 md:p-8">
                  {sectionHeader("schedule", "Taşıma Detayları", 4)}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="tarih" className="text-sm font-medium text-[#111827]">
                        Tercih Edilen Tarih
                      </label>
                      <input
                        id="tarih"
                        type="date"
                        name="tarih"
                        value={form.tarih}
                        onChange={handleChange}
                        className={inputClass}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="aciliyet" className="text-sm font-medium text-[#111827]">
                        Aciliyet
                      </label>
                      <select
                        id="aciliyet"
                        name="aciliyet"
                        value={form.aciliyet}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Seçiniz...</option>
                        <option value="Hemen (bugün)">Hemen (bugün)</option>
                        <option value="1-3 gün içinde">1–3 gün içinde</option>
                        <option value="Planlı (tarih belirledim)">Planlı (tarih belirledim)</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="katAsansor" className="text-sm font-medium text-[#111827]">
                        Kat / Asansör Durumu
                      </label>
                      <input
                        id="katAsansor"
                        type="text"
                        name="katAsansor"
                        value={form.katAsansor}
                        onChange={handleChange}
                        placeholder="Ör: 3. kat, asansör var"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="ekNotlar" className="text-sm font-medium text-[#111827]">
                        Ek Notlar
                      </label>
                      <textarea
                        id="ekNotlar"
                        name="ekNotlar"
                        value={form.ekNotlar}
                        onChange={handleChange}
                        placeholder="Başka belirtmek istediğiniz bir şey var mı?"
                        className={`${inputClass} min-h-[80px] resize-none`}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-semibold px-8 py-4 rounded-[12px] transition-colors active:scale-[0.99] text-[16px] disabled:opacity-60 disabled:cursor-not-allowed min-h-[52px] shadow-sm"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">send</span>
                  {submitting ? "Gönderiliyor..." : "Teklif Talebi Gönder"}
                </button>
              </form>
            </div>

            {/* RIGHT: Sidebar */}
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28 self-start">
              {/* Trust card */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6">
                <h3 className="font-semibold text-[#111827] mb-5 text-[16px]">Neden UluLojistik?</h3>
                <ul className="space-y-4">
                  {trustItems.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#E63900] text-[20px] shrink-0 mt-0.5" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="text-sm text-[#111827]">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp card */}
              <div className="bg-[#25D366] rounded-[16px] p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <WhatsAppIcon size={24} variant="white" />
                  <h3 className="font-semibold text-[16px]">WhatsApp ile Hızlı Fiyat</h3>
                </div>
                <p className="text-white/90 text-sm mb-5">
                  Form doldurmadan da anında fiyat alın:
                </p>
                <ol className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-white/90">
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                    Eşyanızın fotoğrafını çekin
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/90">
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                    Nereden–nereye yazın
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/90">
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                    5 dakika içinde fiyat alın
                  </li>
                </ol>
                <Link
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#25D366] font-semibold px-5 py-3 rounded-[10px] text-sm transition-colors hover:bg-gray-50 w-full"
                >
                  <WhatsAppIcon size={18} />
                  WhatsApp&apos;tan Hızlı Fiyat Al
                </Link>
              </div>

              {/* Phone */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 text-center">
                <span className="material-symbols-outlined text-[#E63900] text-[32px] mb-2 block" aria-hidden="true">phone</span>
                <p className="font-medium text-[#111827] mb-2">Telefon ile Teklif</p>
                <Link href={siteConfig.phoneHref} className="text-[#E63900] font-bold text-lg hover:underline block">
                  {siteConfig.phone}
                </Link>
                <p className="text-xs text-[#6B7280] mt-1">7/24 ulaşılabilir</p>
              </div>
            </div>
          </div>

          {/* Below the form: Info cards */}
          <div className="mt-14 space-y-14">

            {/* What info is needed */}
            <div>
              <h2 className="text-[22px] md:text-[26px] font-semibold text-[#111827] mb-2">
                Teklif İçin Hangi Bilgiler Gerekli?
              </h2>
              <p className="text-[#6B7280] mb-7">Net bilgiler paylaşmanız, daha doğru bir teklif almanızı sağlar.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {infoRequiredCards.map((card) => (
                  <div key={card.title} className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 hover:border-[#E63900] hover:shadow-sm transition-all">
                    <div className="w-10 h-10 bg-[#FFF0EB] rounded-[8px] flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-[#E63900] text-[22px]" aria-hidden="true">{card.icon}</span>
                    </div>
                    <h3 className="font-semibold text-[#111827] mb-2">{card.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service types */}
            <div>
              <h2 className="text-[22px] md:text-[26px] font-semibold text-[#111827] mb-7">
                Hangi Hizmet İçin Teklif Alabilirsiniz?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {serviceTypes.map((s) => (
                  <div key={s.title} className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 flex flex-col items-center text-center gap-3 hover:border-[#E63900] hover:shadow-sm transition-all">
                    <div className="w-12 h-12 bg-[#FFF0EB] rounded-[10px] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#E63900] text-[24px]" aria-hidden="true">{s.icon}</span>
                    </div>
                    <h3 className="font-semibold text-[#111827]">{s.title}</h3>
                    <p className="text-sm text-[#6B7280]">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing factors */}
            <div>
              <h2 className="text-[22px] md:text-[26px] font-semibold text-[#111827] mb-7">
                Fiyatlarımız Neye Göre Belirlenir?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pricingFactors.map((factor) => (
                  <div key={factor.title} className="flex gap-4 bg-white border border-[#E5E7EB] rounded-[14px] p-5 hover:border-[#E63900] transition-colors">
                    <div className="w-9 h-9 bg-[#FFF0EB] rounded-[8px] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#E63900] text-[20px]" aria-hidden="true">{factor.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] text-sm mb-0.5">{factor.title}</h3>
                      <p className="text-sm text-[#6B7280]">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process steps */}
            <div>
              <h2 className="text-[22px] md:text-[26px] font-semibold text-[#111827] mb-7">
                Teklif Süreci Nasıl İşler?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {processSteps.map((step) => (
                  <div key={step.step} className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 relative">
                    <div className="w-9 h-9 bg-[#E63900] rounded-full flex items-center justify-center text-white font-bold text-sm mb-4">
                      {step.step}
                    </div>
                    <span className="material-symbols-outlined text-[#E63900] text-[28px] mb-3 block" aria-hidden="true">{step.icon}</span>
                    <h3 className="font-semibold text-[#111827] mb-1">{step.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline FAQ */}
            <div>
              <h2 className="text-[22px] md:text-[26px] font-semibold text-[#111827] mb-7">
                Sık Sorulan Sorular
              </h2>
              <div className="max-w-3xl space-y-3">
                {inlineFAQs.map((faq) => (
                  <details
                    key={faq.q}
                    className="bg-white border border-[#E5E7EB] rounded-[12px] group"
                  >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-medium text-[#111827] text-[15px] hover:text-[#E63900] transition-colors">
                      {faq.q}
                      <span
                        className="material-symbols-outlined text-[20px] text-[#6B7280] shrink-0 group-open:rotate-180 transition-transform"
                        aria-hidden="true"
                      >
                        expand_more
                      </span>
                    </summary>
                    <div className="px-5 pb-4 text-[#6B7280] text-sm leading-relaxed border-t border-[#E5E7EB] pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Dark CTA banner */}
            <div className="bg-[#111827] rounded-[20px] p-8 md:p-12 text-center flex flex-col items-center gap-6">
              <h2 className="text-[24px] md:text-[36px] font-semibold text-white leading-tight tracking-tight max-w-xl">
                Beklemek Yok, Hemen Taşının!
              </h2>
              <p className="text-white/70 text-[17px] max-w-lg leading-relaxed">
                Formu doldurun veya WhatsApp&apos;tan yazın — 15 dakika içinde teklifiniz hazır.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-4 rounded-[8px] transition-colors active:scale-95 min-h-[52px]"
                >
                  <WhatsAppIcon size={20} variant="white" />
                  WhatsApp&apos;tan Yaz
                </Link>
                <Link
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#111827] hover:bg-gray-100 font-semibold px-8 py-4 rounded-[8px] transition-colors active:scale-95 min-h-[52px]"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">call</span>
                  {siteConfig.phone}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
