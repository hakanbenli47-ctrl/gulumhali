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
  CheckCircle2,
  Menu,
  X,
  Droplets,
  Home,
  Brush,
  BadgeCheck,
  Send,
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

const sliderImages = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1600&q=80",
];

const services = [
  {
    icon: <Brush size={24} />,
    title: "Halı Yıkama",
    text: "Halılarınız türüne uygun temizlik süreciyle özenle yıkanır.",
  },
  {
    icon: <Droplets size={24} />,
    title: "Derinlemesine Temizlik",
    text: "Toz, kir ve kötü kokulara karşı hijyen odaklı temizlik uygulanır.",
  },
  {
    icon: <Truck size={24} />,
    title: "Adresinizden Teslim",
    text: "Uygun bölgelerde halılarınız adresinizden alınır ve teslim edilir.",
  },
  {
    icon: <Home size={24} />,
    title: "Ev ve İş Yeri Halıları",
    text: "Ev, ofis ve iş yeri halıları için düzenli temizlik hizmeti sunulur.",
  },
];

const whyUs = [
  "Hijyen odaklı profesyonel temizlik",
  "Hızlı iletişim ve kolay randevu",
  "Güvenilir hizmet anlayışı",
  "Develi ve çevresine hizmet",
  "WhatsApp üzerinden hızlı bilgi",
  "Adres bilgisi ve konum kolaylığı",
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

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % sliderImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7fbf8] text-[#102017]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/50 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-5 md:py-4">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-900/20 md:h-11 md:w-11">
              <Sparkles size={21} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-base font-black leading-tight text-emerald-950 md:text-lg">
                Gülüm
              </p>
              <p className="truncate text-[11px] font-semibold text-emerald-700 md:text-xs">
                Halı Yıkama Fabrikası
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a href="#hizmetler" className="transition hover:text-emerald-700">
              Hizmetler
            </a>
            <a href="#neden-biz" className="transition hover:text-emerald-700">
              Neden Biz?
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
              className="rounded-full border border-emerald-200 px-5 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50"
            >
              Hemen Ara
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-800/20 transition hover:bg-emerald-800"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-900 shadow-sm md:hidden"
            aria-label="Mobil menüyü aç"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-emerald-100 bg-white px-4 py-4 shadow-xl md:hidden">
            <nav className="flex flex-col gap-2 text-sm font-bold text-slate-700">
              <a
                onClick={() => setMenuOpen(false)}
                href="#hizmetler"
                className="rounded-2xl bg-emerald-50 px-4 py-3"
              >
                Hizmetler
              </a>

              <a
                onClick={() => setMenuOpen(false)}
                href="#neden-biz"
                className="rounded-2xl bg-emerald-50 px-4 py-3"
              >
                Neden Biz?
              </a>

              <a
                onClick={() => setMenuOpen(false)}
                href="#yorumlar"
                className="rounded-2xl bg-emerald-50 px-4 py-3"
              >
                Yorumlar
              </a>

              <a
                onClick={() => setMenuOpen(false)}
                href="#iletisim"
                className="rounded-2xl bg-emerald-50 px-4 py-3"
              >
                İletişim
              </a>

              <div className="mt-2 grid grid-cols-2 gap-3">
                <a
                  href={phoneHref}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-center text-white"
                >
                  <Phone size={18} />
                  Ara
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-4 py-3 text-center text-white"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden pt-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-lime-50" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-lime-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm">
              <ShieldCheck size={18} />
              Develi’de güvenilir halı yıkama hizmeti
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-emerald-950 md:text-6xl">
              Halılarınız için hijyenik, hızlı ve güvenilir temizlik.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
              {businessName}; halı yıkama hizmetlerinde temiz, özenli ve kolay
              ulaşılabilir hizmet anlayışıyla Develi ve çevresinde müşterilerine
              destek olur.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-7 py-4 text-base font-black text-white shadow-xl shadow-emerald-800/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                <MessageCircle size={21} />
                WhatsApp’tan Bilgi Al
              </a>

              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-black text-emerald-900 shadow-lg transition hover:-translate-y-0.5"
              >
                <Phone size={21} />
                Hemen Ara
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                <CheckCircle2 size={17} className="text-emerald-700" />
                Kolay iletişim
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                <CheckCircle2 size={17} className="text-emerald-700" />
                Hijyen odaklı hizmet
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                <CheckCircle2 size={17} className="text-emerald-700" />
                Develi / Kayseri
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-2 -top-5 z-10 rounded-3xl bg-white p-4 shadow-2xl md:-left-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                  <Star fill="currentColor" size={22} />
                </div>

                <div>
                  <p className="text-sm font-black text-slate-900">
                    Temiz ve özenli hizmet
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    Hızlı bilgi için WhatsApp
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[390px] overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl md:h-[430px]">
              {sliderImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Halı yıkama hizmeti"
                  className={`absolute inset-0 h-full w-full object-cover transition duration-1000 ${
                    activeImage === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-950/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/90 p-5 backdrop-blur">
                <p className="text-sm font-black text-emerald-900">
                  {businessName}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Halı yıkama hizmeti için hemen arayın veya WhatsApp’tan yazın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
            Hizmetlerimiz
          </p>

          <h2 className="mt-3 text-3xl font-black text-emerald-950 md:text-5xl">
            Halılarınız için temiz ve güven veren süreç.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Halı temizliğinde amaç sadece yıkamak değil; hijyen, özen ve doğru
            iletişimle müşteriye güven vermektir.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.7rem] border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                {service.icon}
              </div>

              <h3 className="text-lg font-black text-emerald-950">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white/10 p-7 backdrop-blur">
            <Clock className="text-emerald-300" size={34} />
            <h3 className="mt-5 text-2xl font-black">Hızlı İletişim</h3>
            <p className="mt-3 leading-7 text-emerald-50/80">
              Hizmet almak isteyen müşteriler doğrudan arama veya WhatsApp
              üzerinden kolayca iletişim kurabilir.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-7 backdrop-blur">
            <ShieldCheck className="text-emerald-300" size={34} />
            <h3 className="mt-5 text-2xl font-black">Güven Veren Hizmet</h3>
            <p className="mt-3 leading-7 text-emerald-50/80">
              Temizlik süreci, müşteri memnuniyeti ve özenli hizmet anlayışıyla
              yürütülür.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-7 backdrop-blur">
            <MapPin className="text-emerald-300" size={34} />
            <h3 className="mt-5 text-2xl font-black">Develi / Kayseri</h3>
            <p className="mt-3 leading-7 text-emerald-50/80">
              Fatih Mahallesi Mevlana Caddesi No:60 adresinde hizmet verir.
            </p>
          </div>
        </div>
      </section>

      <section id="neden-biz" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
              Neden Gülüm?
            </p>

            <h2 className="mt-3 text-3xl font-black text-emerald-950 md:text-5xl">
              Müşterinin aradığı netlik: temizlik, güven ve kolay ulaşım.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Halı yıkama hizmetinde müşteriler hızlı bilgi almak, güvenmek ve
              kolayca ulaşmak ister. Bu yapı da tam olarak buna göre
              hazırlanmıştır.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-slate-700 shadow-sm"
                >
                  <BadgeCheck className="shrink-0 text-emerald-700" size={21} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1500&q=80"
              alt="Temizlik hizmeti"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section id="yorumlar" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
            Müşteri Memnuniyeti
          </p>

          <h2 className="mt-3 text-3xl font-black text-emerald-950 md:text-5xl">
            Hizmet alan müşterilerimizin yorumları.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Gülüm Halı Yıkama Fabrikası için müşteri memnuniyeti, temiz hizmet
            ve güvenilir iletişim önceliklidir.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.7fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="rounded-[1.7rem] border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-black text-emerald-950">
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

                <p className="text-sm leading-7 text-slate-600">
                  “{review.text}”
                </p>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6 shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-white">
              <Send size={24} />
            </div>

            <p className="mt-5 text-2xl font-black text-emerald-950">
              Siz de fikrinizi paylaşın
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Gülüm Halı Yıkama Fabrikası hakkındaki memnuniyetinizi,
              önerilerinizi veya yorumunuzu belirtmek için işletme ile
              iletişime geçebilirsiniz.
            </p>

            <a
              href={reviewWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-6 py-4 font-black text-white shadow-lg shadow-emerald-800/20 transition hover:bg-emerald-800"
            >
              <MessageCircle size={21} />
              WhatsApp’tan Yorum Gönder
            </a>

            <p className="mt-4 text-xs font-semibold leading-6 text-slate-500">
              Gönderilen yorumlar işletme tarafından  sayfaya
              eklenir.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-emerald-700 to-emerald-950 p-8 text-white shadow-2xl md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-200">
                Hemen bilgi alın
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Halı yıkama hizmeti için hızlıca iletişime geçin.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/85">
                Fiyat, teslim alma, hizmet bölgesi ve süreç hakkında bilgi almak
                için WhatsApp’tan yazabilir veya doğrudan arayabilirsiniz.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-black text-emerald-900 transition hover:-translate-y-0.5"
              >
                <MessageCircle size={21} />
                WhatsApp’tan Yaz
              </a>

              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                <Phone size={21} />
                {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
              İletişim
            </p>

            <h2 className="mt-3 text-3xl font-black text-emerald-950 md:text-5xl">
              Bize ulaşın, halılarınız için bilgi alın.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Arama, WhatsApp veya konum üzerinden kolayca iletişime
              geçebilirsiniz.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={phoneHref}
                className="flex items-center gap-4 rounded-3xl border border-emerald-100 bg-emerald-50 p-5 transition hover:bg-emerald-100"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                  <Phone />
                </div>

                <div>
                  <p className="font-black text-emerald-950">Telefon</p>
                  <p className="font-semibold text-slate-600">{phone}</p>
                </div>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-3xl border border-emerald-100 bg-emerald-50 p-5 transition hover:bg-emerald-100"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                  <MessageCircle />
                </div>

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
                className="flex items-center gap-4 rounded-3xl border border-emerald-100 bg-emerald-50 p-5 transition hover:bg-emerald-100"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                  <MapPin />
                </div>

                <div>
                  <p className="font-black text-emerald-950">Adres</p>
                  <p className="font-semibold text-slate-600">{address}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-slate-100 shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Fatih%20Mahallesi%20Mevlana%20Caddesi%20No%2060%20Develi%20Kayseri&output=embed"
              className="h-[420px] w-full md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="bg-emerald-950 px-5 py-8 pb-24 text-white md:pb-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black">{businessName}</p>
            <p className="mt-1 text-sm text-emerald-100/75">{address}</p>
          </div>

          <div className="flex gap-3">
            <a
              href={phoneHref}
              className="rounded-full bg-white/10 px-5 py-3 text-sm font-bold transition hover:bg-white/20"
            >
              Ara
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a
          href={phoneHref}
          className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-black text-white shadow-2xl"
        >
          <Phone size={19} />
          Ara
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-black text-white shadow-2xl"
        >
          <MessageCircle size={19} />
          WhatsApp
        </a>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-emerald-600 px-6 py-4 font-black text-white shadow-2xl shadow-emerald-900/30 transition hover:-translate-y-1 hover:bg-emerald-700 md:flex"
      >
        <MessageCircle size={22} />
        WhatsApp
      </a>
    </main>
  );
}