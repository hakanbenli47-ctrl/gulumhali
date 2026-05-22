"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  ShieldCheck,
  Truck,
  Clock,
  Star,
  Menu,
  X,
  Send,
  ChevronDown,
  ArrowRight,
  Check,
} from "lucide-react";

const businessName = "Gülüm Halı Yıkama Fabrikası";
const phone = "0531 814 70 28";
const phoneHref = "tel:+905318147028";

const whatsappHref =
  "https://wa.me/905318147028?text=Merhaba%2C%20web%20sitenizden%20yaz%C4%B1yorum.%20Halı%20yıkama%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const reviewWhatsappHref =
  "https://wa.me/905318147028?text=Merhaba%2C%20G%C3%BCl%C3%BCm%20Hal%C4%B1%20Y%C4%B1kama%20Fabrikas%C4%B1%20hakk%C4%B1nda%20yorumumu%20payla%C5%9Fmak%20istiyorum.%0A%0A%C4%B0%C5%9Fletme%20hakk%C4%B1ndaki%20yorumum%20%3D%20";

const address = "Fatih Mahallesi Mevlana Caddesi No:60, Develi / Kayseri";

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Fatih%20Mahallesi%20Mevlana%20Caddesi%20No%2060%20Develi%20Kayseri";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1900&q=80",
    eyebrow: "Profesyonel Halı Yıkama",
    title: "Halılarınız için temiz, ferah ve güvenilir hizmet.",
    text: "Gülüm Halı Yıkama Fabrikası; Develi ve çevresinde halı, koltuk ve ev tekstili temizliği için hızlı ulaşılabilir hizmet sunar.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1900&q=80",
    eyebrow: "Hijyen Odaklı Hizmet",
    title: "Evinizin temizliğine özen katan profesyonel yaklaşım.",
    text: "Temizlik süreci, ürünlerinize zarar vermeden hijyen ve memnuniyet odaklı şekilde yürütülür.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1900&q=80",
    eyebrow: "Kolay İletişim",
    title: "Tek tıkla arayın, WhatsApp üzerinden bilgi alın.",
    text: "Fiyat, teslim alma ve hizmet bölgesi hakkında hızlıca bilgi almak için bize ulaşabilirsiniz.",
  },
];

const services = [
  {
    title: "Halı Yıkama",
    text: "Halılarınız türüne ve kullanım durumuna uygun şekilde temizlenir. Amaç sadece yıkamak değil, temiz ve ferah bir kullanım hissi sunmaktır.",
  },
  {
    title: "Koltuk Yıkama",
    text: "Koltuk yüzeylerinde oluşan toz, leke ve kötü kokulara karşı özenli temizlik hizmeti sağlanır.",
  },
  {
    title: "Yatak Temizliği",
    text: "Yatak yüzeylerinde hijyen ve ferahlık hissi için düzenli temizlik desteği sunulur.",
  },
  {
    title: "Stor Perde Yıkama",
    text: "Stor perdeler hassas yapısına uygun şekilde temizlenir ve yeniden kullanıma hazır hale getirilir.",
  },
  {
    title: "Ofis ve İş Yeri Temizliği",
    text: "İş yerleri için daha düzenli, temiz ve güven veren kullanım alanları oluşturulmasına destek olunur.",
  },
  {
    title: "Adresten Alma ve Teslim",
    text: "Uygun bölgelerde ürünleriniz adresinizden alınır, temizlik sonrası teslim planlaması yapılır.",
  },
];

const whyUs = [
  "Develi ve çevresinde ulaşılabilir hizmet",
  "Telefon ve WhatsApp üzerinden hızlı iletişim",
  "Halı ve ev tekstili temizliğinde özenli süreç",
  "Müşteri memnuniyetini önceleyen çalışma anlayışı",
  "Konum, adres ve iletişim bilgilerinin net olması",
  "Temiz, ferah ve güven veren hizmet yaklaşımı",
];

const reviews = [
  {
    name: "Ayşe K.",
    text: "Halılarımız tertemiz geldi, özellikle kokusu ve paketlemesi çok güzeldi. Teşekkür ederiz.",
  },
  {
    name: "Mehmet T.",
    text: "İletişimleri hızlıydı, halılarımızı zamanında teslim ettiler. Memnun kaldık.",
  },
  {
    name: "Fatma A.",
    text: "Evde çocuk olduğu için hijyen bizim için önemliydi. Sonuçtan çok memnun kaldık.",
  },
  {
    name: "Hasan Y.",
    text: "WhatsApp’tan hemen dönüş yaptılar. Süreç hızlı ve sorunsuz ilerledi.",
  },
  {
    name: "Elif S.",
    text: "Halılar eski canlılığına kavuştu. Develi’de güvenle tercih edilebilir.",
  },
];

const steps = [
  "Telefon veya WhatsApp üzerinden bize ulaşın.",
  "Halı, koltuk veya temizlik ihtiyacınızı belirtin.",
  "Hizmet süreci ve teslim bilgisi hakkında bilgi alın.",
  "Uygun planlama ile ürünlerinizi teslim edin veya alınmasını talep edin.",
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <main className="min-h-screen bg-[#f7fbf8] text-[#112018]">
      <div className="hidden bg-emerald-950 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 text-sm">
          <div className="flex items-center gap-7">
            <a href={phoneHref} className="flex items-center gap-2 font-semibold">
              <Phone size={15} />
              {phone}
            </a>

            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold"
            >
              <MapPin size={15} />
              Develi / Kayseri
            </a>
          </div>

          <p className="font-semibold text-emerald-100">
            Halı yıkama ve temizlik hizmetleri için hızlı iletişim.
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-5 md:py-4">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white">
              <Sparkles size={21} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-base font-black leading-tight text-emerald-950 md:text-xl">
                Gülüm
              </p>
              <p className="truncate text-[11px] font-bold text-emerald-700 md:text-xs">
                Halı Yıkama Fabrikası
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-700 lg:flex">
            <a href="#" className="transition hover:text-emerald-700">
              Anasayfa
            </a>

            <a href="#hakkimizda" className="transition hover:text-emerald-700">
              Hakkımızda
            </a>

            <div className="group relative">
              <a
                href="#hizmetler"
                className="flex items-center gap-1 transition hover:text-emerald-700"
              >
                Hizmetlerimiz
                <ChevronDown size={16} />
              </a>

              <div className="invisible absolute left-0 top-8 w-64 translate-y-2 border border-emerald-100 bg-white p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {services.map((service) => (
                  <a
                    key={service.title}
                    href="#hizmetler"
                    className="block border-b border-emerald-50 px-3 py-3 text-sm font-bold text-slate-700 last:border-b-0 hover:text-emerald-700"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>

            <a href="#surec" className="transition hover:text-emerald-700">
              Süreç
            </a>

            <a href="#yorumlar" className="transition hover:text-emerald-700">
              Yorumlar
            </a>

            <a href="#iletisim" className="transition hover:text-emerald-700">
              İletişim
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={phoneHref}
              className="border border-emerald-700 px-5 py-3 text-sm font-black text-emerald-800 transition hover:bg-emerald-50"
            >
              Hemen Ara
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-800"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 shrink-0 items-center justify-center bg-emerald-50 text-emerald-900 lg:hidden"
            aria-label="Mobil menüyü aç"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-emerald-100 bg-white px-4 py-4 shadow-xl lg:hidden">
            <nav className="flex flex-col text-sm font-bold text-slate-700">
              {[
                ["Anasayfa", "#"],
                ["Hakkımızda", "#hakkimizda"],
                ["Hizmetlerimiz", "#hizmetler"],
                ["Süreç", "#surec"],
                ["Yorumlar", "#yorumlar"],
                ["İletişim", "#iletisim"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  onClick={() => setMenuOpen(false)}
                  href={href}
                  className="border-b border-emerald-100 px-1 py-4 last:border-b-0"
                >
                  {label}
                </a>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href={phoneHref}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-slate-950 px-4 py-3 text-center text-white"
                >
                  <Phone size={18} />
                  Ara
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-emerald-700 px-4 py-3 text-center text-white"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <section className="relative min-h-[700px] overflow-hidden md:min-h-[760px]">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt="Halı yıkama ve temizlik hizmeti"
            className={`absolute inset-0 h-full w-full object-cover transition duration-1000 ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/70 to-emerald-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-5 py-16 md:min-h-[760px]">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-emerald-400 pl-4 text-sm font-black uppercase tracking-[0.25em] text-emerald-100">
              {currentSlide.eyebrow}
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-7xl">
              {currentSlide.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-emerald-50 md:text-xl">
              {currentSlide.text}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 px-7 py-4 text-base font-black text-white transition hover:bg-emerald-500"
              >
                <MessageCircle size={21} />
                WhatsApp’tan Bilgi Al
              </a>

              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2 bg-white px-7 py-4 text-base font-black text-emerald-950 transition hover:bg-emerald-50"
              >
                <Phone size={21} />
                Hemen Ara
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 border-y border-white/20 py-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-black">01</p>
                <p className="mt-1 text-sm font-semibold text-emerald-50/80">
                  Hızlı iletişim
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">02</p>
                <p className="mt-1 text-sm font-semibold text-emerald-50/80">
                  Özenli temizlik
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">03</p>
                <p className="mt-1 text-sm font-semibold text-emerald-50/80">
                  Güvenilir hizmet
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 transition ${
                    activeSlide === index ? "w-12 bg-emerald-400" : "w-8 bg-white/40"
                  }`}
                  aria-label={`Slider ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1700&q=80"
              alt="Temizlik hizmeti"
              className="h-[420px] w-full object-cover md:h-[560px]"
            />

            <div className="absolute bottom-0 left-0 bg-emerald-950 px-7 py-6 text-white">
              <p className="text-3xl font-black">Develi</p>
              <p className="mt-1 text-sm font-semibold text-emerald-100">
                Kayseri ve çevresi
              </p>
            </div>
          </div>

          <div>
            <p className="border-l-4 border-emerald-700 pl-4 text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
              Hakkımızda
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight text-emerald-950 md:text-5xl">
              Halılarınızın temizliği için güvenilir, ulaşılabilir ve özenli
              hizmet sunuyoruz.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Gülüm Halı Yıkama Fabrikası olarak halı, koltuk ve ev tekstili
              temizliği ihtiyaçlarında müşterilerimize pratik iletişim, net bilgi
              ve özenli hizmet anlayışıyla destek oluyoruz.
            </p>

            <div className="mt-8 space-y-4 border-t border-emerald-100 pt-6">
              {whyUs.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-1 shrink-0 text-emerald-700" size={20} />
                  <p className="font-semibold leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-700 px-6 py-4 font-black text-white transition hover:bg-emerald-800"
              >
                <MessageCircle size={21} />
                WhatsApp’tan Yaz
              </a>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-slate-800"
              >
                <MapPin size={21} />
                Konuma Git
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="border-l-4 border-emerald-700 pl-4 text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
                Hizmetlerimiz
              </p>

              <h2 className="mt-5 text-3xl font-black leading-tight text-emerald-950 md:text-5xl">
                Temiz, ferah ve güven veren alanlar için profesyonel hizmet.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Halı yıkamadan koltuk temizliğine kadar ihtiyaç duyduğunuz
                hizmetlerde bilgi almak için doğrudan iletişime geçebilirsiniz.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-emerald-700 px-6 py-4 font-black text-white transition hover:bg-emerald-800"
              >
                Hizmetler İçin Bilgi Al
                <ArrowRight size={19} />
              </a>
            </div>

            <div className="border-t border-emerald-200">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="grid gap-4 border-b border-emerald-200 py-7 md:grid-cols-[80px_1fr]"
                >
                  <p className="text-3xl font-black text-emerald-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <h3 className="text-2xl font-black text-emerald-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-base leading-8 text-slate-600">
                      {service.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="surec" className="bg-emerald-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="border-l-4 border-emerald-400 pl-4 text-sm font-black uppercase tracking-[0.25em] text-emerald-200">
              Süreç
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
              Hizmet sürecini sade, net ve ulaşılabilir tutuyoruz.
            </h2>

            <p className="mt-6 text-lg leading-8 text-emerald-50/75">
              Müşterilerimiz arama veya WhatsApp üzerinden kolayca bilgi alabilir,
              hizmet detaylarını öğrenebilir ve planlama yapabilir.
            </p>
          </div>

          <div className="border-t border-white/15">
            {steps.map((step, index) => (
              <div
                key={step}
                className="grid gap-4 border-b border-white/15 py-6 md:grid-cols-[70px_1fr]"
              >
                <p className="text-3xl font-black text-emerald-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-lg font-semibold leading-8 text-emerald-50">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="yorumlar" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="border-l-4 border-emerald-700 pl-4 text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
                Müşteri Yorumları
              </p>

              <h2 className="mt-5 text-3xl font-black leading-tight text-emerald-950 md:text-5xl">
                Memnuniyet ve güven bizim için önemlidir.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Hizmet alan müşterilerimizin deneyimleri, yeni müşterilerin karar
                vermesini kolaylaştırır.
              </p>

              <div className="mt-8 border-l-4 border-emerald-700 pl-5">
                <p className="text-sm font-semibold leading-7 text-slate-600">
                  Siz de fikirlerinizi paylaşmak için işletme ile iletişime
                  geçebilirsiniz.
                </p>

                <a
                  href={reviewWhatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800"
                >
                  <Send size={18} />
                  Yorum Gönder
                </a>
              </div>
            </div>

            <div className="border-t border-emerald-200">
              {reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="border-b border-emerald-200 py-7"
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xl font-black text-emerald-950">
                        {review.name}
                      </p>
                      <p className="text-sm font-semibold text-emerald-700">
                        Müşteri yorumu
                      </p>
                    </div>

                    <div className="flex text-amber-400">
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                    </div>
                  </div>

                  <p className="text-base leading-8 text-slate-600">
                    “{review.text}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-emerald-900 py-20 text-white">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80"
          alt="Temizlik iletişim alanı"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="border-l-4 border-emerald-300 pl-4 text-sm font-black uppercase tracking-[0.25em] text-emerald-100">
              Hemen Bilgi Alın
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
              Halı ve temizlik hizmeti için bize ulaşın.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/80">
              Fiyat, teslim alma, hizmet bölgesi ve süreç hakkında bilgi almak
              için WhatsApp’tan yazabilir veya doğrudan arayabilirsiniz.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white px-6 py-4 font-black text-emerald-950 transition hover:bg-emerald-50"
            >
              <MessageCircle size={21} />
              WhatsApp’tan Yaz
            </a>

            <a
              href={phoneHref}
              className="flex items-center justify-center gap-2 border border-white px-6 py-4 font-black text-white transition hover:bg-white hover:text-emerald-950"
            >
              <Phone size={21} />
              {phone}
            </a>
          </div>
        </div>
      </section>

      <section id="iletisim" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="border-l-4 border-emerald-700 pl-4 text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
              İletişim
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight text-emerald-950 md:text-5xl">
              Bize ulaşın, hizmet hakkında bilgi alın.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Arama, WhatsApp veya konum üzerinden kolayca iletişime
              geçebilirsiniz.
            </p>

            <div className="mt-8 border-t border-emerald-200">
              <a
                href={phoneHref}
                className="flex items-center gap-4 border-b border-emerald-200 py-5"
              >
                <Phone className="text-emerald-700" />
                <div>
                  <p className="font-black text-emerald-950">Telefon</p>
                  <p className="font-semibold text-slate-600">{phone}</p>
                </div>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-b border-emerald-200 py-5"
              >
                <MessageCircle className="text-emerald-700" />
                <div>
                  <p className="font-black text-emerald-950">WhatsApp</p>
                  <p className="font-semibold text-slate-600">
                    Hızlı bilgi almak için yazın
                  </p>
                </div>
              </a>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-b border-emerald-200 py-5"
              >
                <MapPin className="text-emerald-700" />
                <div>
                  <p className="font-black text-emerald-950">Adres</p>
                  <p className="font-semibold text-slate-600">{address}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="overflow-hidden border border-emerald-100 bg-slate-100">
            <iframe
              src="https://www.google.com/maps?q=Fatih%20Mahallesi%20Mevlana%20Caddesi%20No%2060%20Develi%20Kayseri&output=embed"
              className="h-[430px] w-full md:h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="bg-emerald-950 px-5 py-10 pb-24 text-white md:pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white">
                <Sparkles size={22} />
              </div>

              <div>
                <p className="text-lg font-black">{businessName}</p>
                <p className="text-sm font-semibold text-emerald-100/70">
                  Profesyonel temizlik hizmetleri
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-emerald-50/75">
              Halı, koltuk ve temizlik ihtiyaçlarınız için güven veren,
              ulaşılabilir ve pratik hizmet anlayışı.
            </p>
          </div>

          <div>
            <p className="font-black">Linkler</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-emerald-50/75">
              <a href="#hakkimizda">Hakkımızda</a>
              <a href="#hizmetler">Hizmetlerimiz</a>
              <a href="#surec">Süreç</a>
              <a href="#iletisim">İletişim</a>
            </div>
          </div>

          <div>
            <p className="font-black">İletişim</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-emerald-50/75">
              <a href={phoneHref}>{phone}</a>
              <a href={mapsHref} target="_blank" rel="noopener noreferrer">
                {address}
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp’tan yazın
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm font-semibold text-emerald-50/60">
          © 2026 Gülüm Halı Yıkama Fabrikası. Tüm hakları saklıdır.
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a
          href={phoneHref}
          className="flex items-center justify-center gap-2 bg-slate-950 px-5 py-4 text-sm font-black text-white shadow-2xl"
        >
          <Phone size={19} />
          Ara
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 px-5 py-4 text-sm font-black text-white shadow-2xl"
        >
          <MessageCircle size={19} />
          WhatsApp
        </a>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 bg-emerald-600 px-6 py-4 font-black text-white shadow-2xl shadow-emerald-900/30 transition hover:-translate-y-1 hover:bg-emerald-700 md:flex"
      >
        <MessageCircle size={22} />
        WhatsApp
      </a>
    </main>
  );
}