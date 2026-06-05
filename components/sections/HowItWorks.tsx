import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    step: 1,
    title: "Yük Bilgileri",
    description: "Nereden nereye gideceğini ve yükün içeriğini bize bildirin.",
  },
  {
    step: 2,
    title: "Minivan Planlama",
    description: "Size en uygun minivan aracımızı ve anında fiyat teklifini sunalım.",
  },
  {
    step: 3,
    title: "Yük Alımı",
    description: "Belirlenen saatte adresinize gelip eşyalarınızı araca yükleyelim.",
  },
  {
    step: 4,
    title: "Teslimat",
    description: "İstanbul içi trafiğe takılmadan yeni adresinize güvenle teslim edelim.",
  },
];

export function HowItWorks() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-[26px] md:text-[30px] font-semibold tracking-tight text-[#111827] mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-[17px] text-[#6B7280] max-w-xl mx-auto">
            Sadece 4 basit adımda eşyalarınız yeni adresinde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-8 left-[12.5%] w-[75%] h-[2px] bg-[#E5E7EB] -z-10"
            aria-hidden="true"
          />

          {steps.map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#E63900] text-white flex items-center justify-center text-xl font-bold ring-4 ring-white z-10">
                {item.step}
              </div>
              <h3 className="font-semibold text-[#111827]">{item.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
