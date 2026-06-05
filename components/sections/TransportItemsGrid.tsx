import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const items = [
  { icon: "inventory_2", label: "Koli & Kutu" },
  { icon: "chair", label: "Mobilya" },
  { icon: "kitchen", label: "Beyaz Eşya" },
  { icon: "directions_bike", label: "Bisiklet/Motor" },
  { icon: "tv", label: "Elektronik" },
  { icon: "luggage", label: "Bavul/Çanta" },
  { icon: "school", label: "Öğrenci Eşyası" },
  { icon: "weekend", label: "Koltuk/Kanepe" },
  { icon: "desk", label: "Ofis Malzemeleri" },
  { icon: "storefront", label: "Mağaza Ürünleri" },
  { icon: "devices", label: "Cihazlar" },
  { icon: "sports_soccer", label: "Spor Malzemeleri" },
];

interface TransportItemsGridProps {
  title?: string;
  customItems?: typeof items;
}

export function TransportItemsGrid({
  title = "Minivan İle Neler Taşınabilir?",
  customItems,
}: TransportItemsGridProps) {
  const displayItems = customItems ?? items;

  return (
    <Section background="surface">
      <Container>
        <h2 className="text-center text-[26px] md:text-[30px] font-semibold tracking-tight text-[#111827] mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {displayItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-2 p-4 bg-white border border-[#E5E7EB] rounded-[12px] hover:border-[#E63900] transition-colors"
            >
              <span
                className="material-symbols-outlined text-[#E63900] text-[30px]"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="text-xs font-medium text-[#111827]">{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
