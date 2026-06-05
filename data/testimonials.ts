export interface Testimonial {
  id: string;
  name: string;
  district?: string;
  rating: number;
  comment: string;
  service?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmet Y.",
    district: "Kadıköy",
    rating: 5,
    comment:
      "Kadıköy'den Şişli'ye 2 parça mobilyamı aynı gün içinde çok uygun fiyata taşıdılar. Kamyonet tutmama hiç gerek kalmadı, teşekkürler.",
    service: "parca-esya-tasima",
  },
  {
    id: "2",
    name: "Merve K.",
    district: "Beşiktaş",
    rating: 5,
    comment:
      "Öğrenci evimi taşımak için iletişime geçtim. Hem fiyatları öğrenci dostuydu hem de eşyalarım zarar görmeden hızlıca taşındı.",
    service: "ogrenci-esyasi-tasima",
  },
  {
    id: "3",
    name: "Canan S.",
    district: "Sarıyer",
    rating: 5,
    comment:
      "Dar sokakta oturduğumuz için büyük araç giremiyordu. Minivan tam aradığımız çözümdü, şoför bey de çok yardımcı oldu.",
    service: "istanbul-minivan-nakliye",
  },
  {
    id: "4",
    name: "Murat B.",
    district: "Ataşehir",
    rating: 5,
    comment:
      "Koltuk takımımı taşımak için çağırdım, 45 dakikada kapımdaydı. Harika hizmet, kesinlikle tavsiye ederim.",
    service: "parca-esya-tasima",
  },
  {
    id: "5",
    name: "Selin K.",
    district: "Bakırköy",
    rating: 5,
    comment:
      "E-ticaret sitemiz için acil gönderilerde sürekli çalışıyoruz. Çok memnunuz, her seferinde zamanında teslimat.",
    service: "istanbul-yuk-taksi",
  },
  {
    id: "6",
    name: "Emre T.",
    district: "Maltepe",
    rating: 5,
    comment:
      "Buzdolabımı taşırken çok özenli davrandılar. Hasarsız, dik pozisyonda taşıdılar. Kesinlikle tavsiye ediyorum.",
    service: "beyaz-esya-tasima",
  },
];
