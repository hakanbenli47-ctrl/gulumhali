const phoneDisplay = "+90 552 503 79 70";
const phoneTel = "+905525037970";

const createWpLink = (message: string) =>
  `https://wa.me/905525037970?text=${encodeURIComponent(message)}`;

const whatsappGeneral = createWpLink(
  "Merhaba, Güven Temizlik Alanya hizmetleri hakkında bilgi almak istiyorum."
);

const whatsappHome = createWpLink(
  "Merhaba, ev temizliği hizmetiniz hakkında bilgi almak istiyorum. Konumum Alanya."
);

const whatsappOffice = createWpLink(
  "Merhaba, ofis temizliği hizmetiniz hakkında bilgi almak istiyorum. Alanya içinde hizmet alacağım."
);

const whatsappAfterBuild = createWpLink(
  "Merhaba, inşaat/tadilat sonrası temizlik hizmetiniz için bilgi ve fiyat almak istiyorum."
);

const whatsappVilla = createWpLink(
  "Merhaba, villa/yazlık temizliği hizmetiniz hakkında bilgi almak istiyorum. Alanya bölgesindeyim."
);

const whatsappWindow = createWpLink(
  "Merhaba, cam temizliği hizmetiniz hakkında bilgi almak istiyorum."
);

const whatsappHotel = createWpLink(
  "Merhaba, otel/apart temizlik hizmetiniz hakkında bilgi almak istiyorum. Alanya bölgesindeyim."
);

const images = {
  hero:
    "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1800",
  home:
    "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1400",
  office:
    "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1400",
  window:
    "https://images.pexels.com/photos/4107283/pexels-photo-4107283.jpeg?auto=compress&cs=tinysrgb&w=1400",
  villa:
    "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1400",
  detail:
    "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg?auto=compress&cs=tinysrgb&w=1400",
  supplies:
    "https://images.pexels.com/photos/5217929/pexels-photo-5217929.jpeg?auto=compress&cs=tinysrgb&w=1400",
  hotel:
    "https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&w=1400",
  floor:
    "https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1400",
};

const services = [
  {
    title: "Ev Temizliği",
    text: "Mutfak, banyo, oda, cam, yüzey ve zemin temizliğiyle evinizi ferah ve kullanıma hazır hale getiriyoruz.",
    img: images.home,
    wp: whatsappHome,
  },
  {
    title: "Ofis Temizliği",
    text: "Çalışma alanları, masa çevresi, ortak kullanım alanları ve zeminlerde düzenli ve titiz temizlik sağlıyoruz.",
    img: images.office,
    wp: whatsappOffice,
  },
  {
    title: "İnşaat Sonrası Temizlik",
    text: "Tadilat ve inşaat sonrası kalan toz, boya izi, harç kalıntısı ve kaba kirler için detaylı temizlik uyguluyoruz.",
    img: images.detail,
    wp: whatsappAfterBuild,
  },
  {
    title: "Villa ve Yazlık Temizliği",
    text: "Alanya’daki villa, yazlık ve geniş metrekareli alanlar için planlı, detaylı ve kapsamlı temizlik hizmeti sunuyoruz.",
    img: images.villa,
    wp: whatsappVilla,
  },
  {
    title: "Cam Temizliği",
    text: "Ev, ofis, mağaza, apart ve geniş cam yüzeylerinde daha parlak, izsiz ve net bir görünüm hedefliyoruz.",
    img: images.window,
    wp: whatsappWindow,
  },
  {
    title: "Otel ve Apart Temizliği",
    text: "Turizm bölgesi Alanya’da otel, apart, günlük kiralık ve sezonluk işletmeler için temizlik desteği veriyoruz.",
    img: images.hotel,
    wp: whatsappHotel,
  },
];

const areas = [
  "Alanya Merkez",
  "Mahmutlar",
  "Oba",
  "Tosmur",
  "Kestel",
  "Konaklı",
  "Avsallar",
  "Cikcik",
  "Kargıcak",
  "Payallar",
  "Türkler",
  "Demirtaş",
];

const steps = [
  "WhatsApp veya arama ile talep alınır.",
  "Alan ve temizlik türü netleştirilir.",
  "Uygun ekip ve saat planlanır.",
  "Temizlik sonrası son kontrol yapılır.",
];

export default function Home() {
  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Güven Temizlik Alanya",
            image: images.hero,
            telephone: phoneDisplay,
            areaServed: "Alanya, Antalya",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Alanya",
              addressRegion: "Antalya",
              addressCountry: "TR",
            },
            priceRange: "₺₺",
          }),
        }}
      />

      <header className="header">
        <a href="#anasayfa" className="brand" aria-label="Güven Temizlik Alanya">
          <span className="brandMark">G</span>
          <span>
            <strong>Güven Temizlik</strong>
            <small>Alanya Profesyonel Temizlik</small>
          </span>
        </a>

        <input id="menuToggle" className="menuToggle" type="checkbox" />

        <label htmlFor="menuToggle" className="menuButton" aria-label="Menüyü aç">
          <span />
          <span />
          <span />
        </label>

        <nav className="nav">
          <a href="#anasayfa">Anasayfa</a>
          <a href="#hizmetler">Hizmetler</a>
          <a href="#neden">Neden Biz?</a>
          <a href="#surec">Süreç</a>
          <a href="#bolgeler">Bölgeler</a>
          <a href="#iletisim">İletişim</a>

          <div className="navMobileActions">
            <a href={`tel:${phoneTel}`}>Telefonla Ara</a>
            <a href={whatsappGeneral} target="_blank" rel="noopener noreferrer">
              WhatsApp’tan Yaz
            </a>
          </div>

          <a className="navCall" href={`tel:${phoneTel}`}>
            Hemen Ara
          </a>
        </nav>
      </header>

      <section id="anasayfa" className="hero">
        <div className="heroMedia">
          <img src={images.hero} alt="Güven Temizlik Alanya" />
        </div>

        <div className="heroOverlay" />

        <div className="heroContent">
          <p className="eyebrow">Alanya’da güvenilir temizlik hizmeti</p>

          <h1>
            Temizliği
            <span>gözle görünür</span>
            hale getiriyoruz.
          </h1>

          <p className="heroText">
            Güven Temizlik Alanya; ev, ofis, villa, apart, cam ve inşaat sonrası
            temizlik hizmetlerinde hızlı, titiz ve planlı çalışma sunar.
          </p>

          <div className="heroActions">
            <a href={whatsappGeneral} target="_blank" rel="noopener noreferrer">
              WhatsApp’tan Teklif Al
            </a>
            <a href={`tel:${phoneTel}`} className="secondary">
              Hemen Ara
            </a>
          </div>

          <div className="heroBadges">
            <span>Ev Temizliği</span>
            <span>Ofis Temizliği</span>
            <span>Villa Temizliği</span>
            <span>İnşaat Sonrası</span>
          </div>
        </div>

        <div className="heroContact">
          <small>Hızlı iletişim</small>
          <strong>{phoneDisplay}</strong>
        </div>
      </section>

      <section className="intro">
        <div>
          <p className="sectionLabel">Temizlikte doğru plan</p>
          <h2>Her alan aynı değildir. Bu yüzden her temizlik aynı yapılmaz.</h2>
        </div>

        <p>
          Ev, ofis, villa, apart veya inşaat sonrası temizlikte önce alanın
          ihtiyacı belirlenir. Ardından doğru ekip, doğru zaman ve doğru temizlik
          akışıyla çalışma yapılır. Amaç yalnızca temiz görünüm değil; ferah,
          düzenli ve kullanıma hazır alan teslimidir.
        </p>
      </section>

      <section id="hizmetler" className="services">
        {services.map((service, index) => (
          <article
            className={`serviceLine ${index % 2 === 1 ? "reverse" : ""}`}
            key={service.title}
          >
            <div className="serviceImage">
              <img src={service.img} alt={service.title} loading="lazy" />
            </div>

            <div className="serviceText">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <div className="serviceActions">
                <a href={service.wp} target="_blank" rel="noopener noreferrer">
                  WhatsApp’tan Bilgi Al
                </a>
                <a href={`tel:${phoneTel}`}>Ara</a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section id="neden" className="why">
        <div className="whyImage">
          <img src={images.supplies} alt="Temizlik ekipmanları" loading="lazy" />
        </div>

        <div className="whyText">
          <p className="sectionLabel">Neden Güven Temizlik?</p>
          <h2>İş bittikten sonra alan gerçekten temiz hissedilmeli.</h2>

          <p>
            Temizlikte güven, yalnızca hızlı gelmekle değil; işi düzgün
            tamamlamakla kazanılır. Bu yüzden her hizmette yüzeyler, köşeler,
            zeminler, camlar ve yoğun kullanılan alanlar ayrı ayrı ele alınır.
          </p>

          <div className="whyPoints">
            <div>
              <strong>Planlı çalışma</strong>
              <p>İşe başlamadan önce alan ve ihtiyaç netleştirilir.</p>
            </div>

            <div>
              <strong>Detay odaklı temizlik</strong>
              <p>Mutfak, banyo, cam, zemin ve yüzeyler ayrı ayrı değerlendirilir.</p>
            </div>

            <div>
              <strong>Alanya’ya uygun hizmet</strong>
              <p>Ev, yazlık, apart, villa ve turizm işletmeleri için esnek yapı.</p>
            </div>

            <div>
              <strong>Kolay iletişim</strong>
              <p>Tek tuşla WhatsApp veya arama üzerinden hızlı dönüş alınır.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="visualFlow">
        <div>
          <img src={images.floor} alt="Zemin temizliği" loading="lazy" />
        </div>
        <div>
          <img src={images.window} alt="Cam temizliği" loading="lazy" />
        </div>
        <div>
          <img src={images.home} alt="Ev temizliği" loading="lazy" />
        </div>
      </section>

      <section id="surec" className="process">
        <p className="sectionLabel">Nasıl ilerliyoruz?</p>
        <h2>Tekliften temiz alan teslimine kadar sade ve net süreç.</h2>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="bolgeler" className="areas">
        <div>
          <p className="sectionLabel">Hizmet bölgeleri</p>
          <h2>Alanya ve çevresinde temizlik hizmeti.</h2>
        </div>

        <div className="areaList">
          {areas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="bigCta">
        <div className="bigCtaMedia">
          <img src={images.detail} alt="Detaylı temizlik" loading="lazy" />
        </div>

        <div className="bigCtaOverlay" />

        <div className="bigCtaContent">
          <p className="sectionLabel">Hızlı teklif al</p>
          <h2>
            Temizlik ihtiyacını yaz, uygun hizmet planını birlikte netleştirelim.
          </h2>

          <div className="bigCtaActions">
            <a href={whatsappGeneral} target="_blank" rel="noopener noreferrer">
              WhatsApp’tan Yaz
            </a>
            <a href={`tel:${phoneTel}`}>Telefonla Ara</a>
          </div>
        </div>
      </section>

      <section id="iletisim" className="contact">
        <div className="contactText">
          <p className="sectionLabel">İletişim</p>
          <h2>Güven Temizlik Alanya</h2>

          <p>
            Ev, ofis, villa, apart, cam ve inşaat sonrası temizlik için hemen
            WhatsApp’tan yazabilir veya doğrudan arayabilirsiniz.
          </p>

          <div className="contactLinks">
            <a href={whatsappGeneral} target="_blank" rel="noopener noreferrer">
              WhatsApp: {phoneDisplay}
            </a>
            <a href={`tel:${phoneTel}`}>Ara: {phoneDisplay}</a>
          </div>
        </div>

        <div className="contactImage">
          <img src={images.office} alt="Ofis temizliği" loading="lazy" />
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Güven Temizlik Alanya</strong>
          <p>Ev, ofis, villa, apart ve inşaat sonrası temizlik hizmetleri.</p>
        </div>

        <div className="footerLinks">
          <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          <a href={whatsappGeneral} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </footer>

      <div className="floatingButtons">
        <a
          href={`tel:${phoneTel}`}
          className="floatCall"
          aria-label="Güven Temizlik Alanya telefonla ara"
        >
          <span>☎</span>
          <strong>Ara</strong>
        </a>

        <a
          href={whatsappGeneral}
          target="_blank"
          rel="noopener noreferrer"
          className="floatWp"
          aria-label="Güven Temizlik Alanya WhatsApp"
        >
          <span>☘</span>
          <strong>WhatsApp</strong>
        </a>
      </div>

      <style>{`
        :root {
          --green: #073d35;
          --green2: #0b5f52;
          --mint: #33d6b7;
          --mintSoft: #e3fbf5;
          --cream: #f7f2e9;
          --cream2: #fffaf2;
          --text: #10211d;
          --muted: #66726e;
          --white: #ffffff;
          --line: rgba(16, 33, 29, 0.14);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--cream);
          color: var(--text);
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: linear-gradient(135deg, #dff6ef, #f7f2e9);
        }

        .page {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 8% 4%, rgba(51, 214, 183, 0.16), transparent 28%),
            radial-gradient(circle at 85% 35%, rgba(7, 61, 53, 0.12), transparent 30%),
            linear-gradient(180deg, #fbf7ef 0%, #eefaf6 50%, #fbf7ef 100%);
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 80;
          min-height: 78px;
          padding: 14px 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 250, 242, 0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--line);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 90;
        }

        .brandMark {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--green), var(--green2));
          color: white;
          font-weight: 900;
          font-size: 23px;
          box-shadow: 0 12px 34px rgba(7, 61, 53, 0.22);
        }

        .brand strong {
          display: block;
          font-size: 19px;
          letter-spacing: -0.5px;
          color: var(--green);
        }

        .brand small {
          display: block;
          margin-top: 2px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 700;
        }

        .menuToggle {
          display: none;
        }

        .menuButton {
          display: none;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 26px;
          color: #243a35;
          font-size: 14px;
          font-weight: 800;
        }

        .nav a {
          opacity: 0.94;
        }

        .navCall {
          padding: 12px 18px;
          border-radius: 999px;
          background: var(--green);
          color: white;
          box-shadow: 0 12px 28px rgba(7, 61, 53, 0.2);
        }

        .navMobileActions {
          display: none;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          padding: 150px 6vw 90px;
          display: flex;
          align-items: center;
          color: white;
          isolation: isolate;
        }

        .heroMedia,
        .heroMedia img {
          position: absolute;
          inset: 0;
          z-index: -3;
        }

        .heroMedia img {
          transform: scale(1.03);
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            radial-gradient(circle at 18% 24%, rgba(51, 214, 183, 0.24), transparent 26%),
            linear-gradient(90deg, rgba(5, 39, 34, 0.96) 0%, rgba(5, 39, 34, 0.78) 42%, rgba(5, 39, 34, 0.28) 100%);
        }

        .heroContent {
          position: relative;
          max-width: 980px;
        }

        .eyebrow,
        .sectionLabel {
          margin: 0 0 18px;
          color: var(--mint);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero h1 {
          margin: 0;
          max-width: 980px;
          font-size: clamp(56px, 9.6vw, 132px);
          line-height: 0.84;
          letter-spacing: -6px;
          font-weight: 950;
        }

        .hero h1 span {
          display: block;
          color: #7fffe3;
          text-shadow: 0 18px 60px rgba(51, 214, 183, 0.24);
        }

        .heroText {
          max-width: 680px;
          margin: 30px 0 0;
          color: rgba(255, 255, 255, 0.88);
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.62;
          font-weight: 600;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 36px;
        }

        .heroActions a,
        .bigCtaActions a,
        .contactLinks a {
          min-height: 56px;
          padding: 0 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: linear-gradient(135deg, #35e2c0, #20aa92);
          color: #04241f;
          font-weight: 950;
          box-shadow: 0 18px 42px rgba(32, 170, 146, 0.26);
        }

        .heroActions .secondary,
        .bigCtaActions a:last-child,
        .contactLinks a:last-child {
          background: rgba(255, 255, 255, 0.13);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow: none;
        }

        .heroBadges {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 44px;
        }

        .heroBadges span {
          padding: 11px 15px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
          font-weight: 900;
        }

        .heroContact {
          position: absolute;
          right: 6vw;
          bottom: 44px;
          padding: 18px 22px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.13);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(14px);
        }

        .heroContact small {
          display: block;
          color: rgba(255, 255, 255, 0.66);
          font-weight: 800;
          margin-bottom: 5px;
        }

        .heroContact strong {
          color: white;
          font-size: 20px;
        }

        .intro {
          padding: 115px 6vw 75px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 8vw;
          align-items: start;
        }

        .intro h2,
        .why h2,
        .process h2,
        .areas h2,
        .bigCta h2,
        .contact h2 {
          margin: 0;
          color: var(--green);
          font-size: clamp(34px, 5.3vw, 72px);
          line-height: 0.96;
          letter-spacing: -2.5px;
          font-weight: 950;
        }

        .intro p:last-child,
        .whyText > p,
        .contactText p {
          margin: 0;
          color: var(--muted);
          font-size: 19px;
          line-height: 1.78;
          font-weight: 600;
        }

        .services {
          padding: 30px 0;
        }

        .serviceLine {
          min-height: 600px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: stretch;
        }

        .serviceLine.reverse {
          grid-template-columns: 0.9fr 1.1fr;
        }

        .serviceLine.reverse .serviceImage {
          order: 2;
        }

        .serviceImage {
          min-height: 560px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--mintSoft), var(--cream2));
        }

        .serviceImage img {
          transition: transform 0.9s ease, filter 0.9s ease;
        }

        .serviceLine:hover .serviceImage img {
          transform: scale(1.045);
          filter: saturate(1.08);
        }

        .serviceText {
          padding: 8vw 6vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background:
            radial-gradient(circle at 0% 0%, rgba(51, 214, 183, 0.11), transparent 30%),
            rgba(255, 255, 255, 0.38);
        }

        .serviceText span {
          color: #20aa92;
          font-size: 15px;
          font-weight: 950;
        }

        .serviceText h3 {
          margin: 16px 0 20px;
          color: var(--green);
          font-size: clamp(36px, 4.7vw, 72px);
          line-height: 0.94;
          letter-spacing: -2.4px;
          font-weight: 950;
        }

        .serviceText p {
          margin: 0;
          max-width: 600px;
          color: var(--muted);
          font-size: 19px;
          line-height: 1.78;
          font-weight: 600;
        }

        .serviceActions {
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .serviceActions a {
          min-height: 50px;
          padding: 0 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          font-weight: 950;
        }

        .serviceActions a:first-child {
          background: var(--green);
          color: white;
        }

        .serviceActions a:last-child {
          background: rgba(7, 61, 53, 0.08);
          color: var(--green);
        }

        .why {
          padding: 0;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          background: #062923;
          color: white;
        }

        .whyImage {
          min-height: 760px;
        }

        .whyText {
          padding: 8vw 6vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .why h2 {
          color: white;
        }

        .whyText > p {
          margin-top: 28px;
          color: rgba(255, 255, 255, 0.72);
        }

        .whyPoints {
          margin-top: 44px;
          display: grid;
          gap: 26px;
        }

        .whyPoints div {
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .whyPoints strong {
          display: block;
          margin-bottom: 8px;
          color: white;
          font-size: 23px;
          font-weight: 950;
        }

        .whyPoints p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: 17px;
          line-height: 1.68;
          font-weight: 600;
        }

        .visualFlow {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          min-height: 430px;
        }

        .visualFlow div {
          min-height: 430px;
          overflow: hidden;
        }

        .visualFlow img {
          transition: transform 0.9s ease;
        }

        .visualFlow div:hover img {
          transform: scale(1.06);
        }

        .process {
          padding: 120px 6vw;
        }

        .steps {
          margin-top: 62px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 34px;
        }

        .steps div {
          padding-top: 28px;
          border-top: 2px solid rgba(7, 61, 53, 0.2);
        }

        .steps span {
          display: block;
          margin-bottom: 18px;
          color: #20aa92;
          font-size: 46px;
          font-weight: 950;
          letter-spacing: -2px;
        }

        .steps p {
          margin: 0;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.68;
          font-weight: 800;
        }

        .areas {
          padding: 112px 6vw;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 8vw;
          align-items: start;
          background:
            radial-gradient(circle at 90% 0%, rgba(51, 214, 183, 0.15), transparent 28%),
            rgba(255, 255, 255, 0.42);
        }

        .areaList {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .areaList span {
          padding: 15px 19px;
          border-radius: 999px;
          background: rgba(7, 61, 53, 0.08);
          color: var(--green);
          font-weight: 950;
        }

        .bigCta {
          position: relative;
          min-height: 620px;
          padding: 110px 6vw;
          display: flex;
          align-items: center;
          color: white;
          isolation: isolate;
        }

        .bigCtaMedia,
        .bigCtaMedia img,
        .bigCtaOverlay {
          position: absolute;
          inset: 0;
        }

        .bigCtaMedia {
          z-index: -3;
        }

        .bigCtaOverlay {
          z-index: -2;
          background:
            radial-gradient(circle at 20% 30%, rgba(51, 214, 183, 0.2), transparent 25%),
            linear-gradient(90deg, rgba(5, 39, 34, 0.92), rgba(5, 39, 34, 0.62));
        }

        .bigCtaContent {
          max-width: 880px;
        }

        .bigCta h2 {
          color: white;
        }

        .bigCtaActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .contact {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          min-height: 680px;
          background: var(--cream2);
        }

        .contactText {
          padding: 8vw 6vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contactText p {
          margin-top: 24px;
        }

        .contactLinks {
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .contactLinks a:last-child {
          background: var(--green);
        }

        .contactImage {
          min-height: 680px;
        }

        .footer {
          padding: 36px 6vw 110px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          background: #062923;
          color: white;
        }

        .footer strong {
          font-size: 21px;
        }

        .footer p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.5;
        }

        .footerLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          align-items: flex-start;
          font-weight: 950;
        }

        .floatingButtons {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 95;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .floatingButtons a {
          min-width: 148px;
          height: 54px;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 999px;
          color: white;
          font-weight: 950;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
        }

        .floatingButtons span {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          font-size: 16px;
        }

        .floatCall {
          background: linear-gradient(135deg, #073d35, #0b5f52);
        }

        .floatWp {
          background: linear-gradient(135deg, #25d366, #14a84d);
          color: #04241f !important;
        }

        @media (max-width: 960px) {
          .header {
            min-height: 72px;
            padding: 12px 18px;
          }

          .brandMark {
            width: 42px;
            height: 42px;
            font-size: 21px;
          }

          .brand strong {
            font-size: 18px;
          }

          .brand small {
            display: none;
          }

          .menuButton {
            display: grid;
            gap: 5px;
            width: 46px;
            height: 46px;
            place-content: center;
            border-radius: 50%;
            background: var(--green);
            position: relative;
            z-index: 100;
            cursor: pointer;
            box-shadow: 0 12px 28px rgba(7, 61, 53, 0.22);
          }

          .menuButton span {
            display: block;
            width: 22px;
            height: 2px;
            background: white;
            border-radius: 99px;
            transition: 0.25s ease;
          }

          .menuToggle:checked + .menuButton span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }

          .menuToggle:checked + .menuButton span:nth-child(2) {
            opacity: 0;
          }

          .menuToggle:checked + .menuButton span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }

          .nav {
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            z-index: 85;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 16px 18px 22px;
            background: rgba(255, 250, 242, 0.98);
            border-bottom: 1px solid var(--line);
            transform: translateY(-130%);
            opacity: 0;
            pointer-events: none;
            transition: 0.28s ease;
            box-shadow: 0 30px 80px rgba(7, 61, 53, 0.18);
          }

          .menuToggle:checked ~ .nav {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .nav a {
            width: 100%;
            padding: 16px 4px;
            color: var(--green);
            border-bottom: 1px solid rgba(7, 61, 53, 0.08);
            font-size: 16px;
            font-weight: 950;
          }

          .navCall {
            display: none;
          }

          .navMobileActions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 16px;
          }

          .navMobileActions a {
            min-height: 48px;
            padding: 0 10px;
            display: grid;
            place-items: center;
            border: 0;
            border-radius: 999px;
            color: white;
            background: var(--green);
            text-align: center;
            font-size: 14px;
          }

          .navMobileActions a:last-child {
            background: #25d366;
            color: #05241f;
          }

          .hero {
            min-height: 94vh;
            padding: 118px 20px 74px;
          }

          .heroOverlay {
            background:
              radial-gradient(circle at 20% 18%, rgba(51, 214, 183, 0.22), transparent 28%),
              linear-gradient(180deg, rgba(5, 39, 34, 0.94), rgba(5, 39, 34, 0.7), rgba(5, 39, 34, 0.42));
          }

          .hero h1 {
            font-size: clamp(50px, 17vw, 78px);
            line-height: 0.86;
            letter-spacing: -3.4px;
          }

          .heroText {
            font-size: 18px;
            line-height: 1.62;
          }

          .heroActions a {
            width: 100%;
          }

          .heroContact {
            display: none;
          }

          .intro,
          .areas,
          .contact {
            grid-template-columns: 1fr;
          }

          .intro,
          .process,
          .areas {
            padding: 78px 20px;
          }

          .intro h2,
          .why h2,
          .process h2,
          .areas h2,
          .bigCta h2,
          .contact h2 {
            letter-spacing: -1.6px;
          }

          .serviceLine,
          .serviceLine.reverse {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .serviceLine.reverse .serviceImage {
            order: 0;
          }

          .serviceImage {
            min-height: 335px;
          }

          .serviceText {
            padding: 54px 20px 68px;
          }

          .serviceActions {
            flex-direction: column;
          }

          .serviceActions a {
            width: 100%;
          }

          .why {
            grid-template-columns: 1fr;
          }

          .whyImage {
            min-height: 320px;
          }

          .whyText {
            padding: 76px 20px;
          }

          .visualFlow {
            grid-template-columns: 1fr;
          }

          .visualFlow div {
            min-height: 280px;
          }

          .steps {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .bigCta {
            min-height: 560px;
            padding: 82px 20px;
          }

          .bigCtaActions a,
          .contactLinks a {
            width: 100%;
          }

          .contactText {
            padding: 76px 20px;
          }

          .contactImage {
            min-height: 320px;
            order: -1;
          }

          .footer {
            flex-direction: column;
            padding: 34px 20px 130px;
          }

          .footerLinks {
            flex-direction: column;
            gap: 10px;
          }

          .floatingButtons {
            left: 12px;
            right: 12px;
            bottom: 12px;
            flex-direction: row;
            gap: 10px;
          }

          .floatingButtons a {
            min-width: 0;
            width: 100%;
            height: 52px;
            padding: 0 12px;
          }

          .floatingButtons span {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </main>
  );
}