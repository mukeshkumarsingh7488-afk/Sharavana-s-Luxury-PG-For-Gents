import { BUSINESS } from "../config/business";

export default function Gallery() {
  return (
    <>
      <section id="gallery" className="pg-gallery">
        <div className="pg-section-head">
          <p>{BUSINESS.gallery.eyebrow}</p>
          <h2>{BUSINESS.gallery.title}</h2>
          <span />
          <h5>{BUSINESS.gallery.text}</h5>
        </div>

        <div className="pg-gallery-grid">
          {BUSINESS.gallery.images.map((image, index) => (
            <div className="pg-gallery-item" key={image}>
              <img src={image} alt={`${BUSINESS.name} Gallery ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <style>{`
      .pg-gallery{padding:110px 7%;background:linear-gradient(180deg,var(--bg) 0%,#0a1812 100%);position:relative;overflow:hidden;}.pg-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}.pg-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}.pg-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}.pg-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}.pg-section-head h5{margin:24px auto 0;color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;}.pg-gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}.pg-gallery-item{position:relative;overflow:hidden;border-radius:28px;background:rgba(255,255,255,.05);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);transition:.4s;}.pg-gallery-item img{width:100%;height:300px;object-fit:cover;transition:.6s;display:block;}.pg-gallery-item::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(0,0,0,.35));opacity:0;transition:.35s;}.pg-gallery-item:hover{transform:translateY(-8px);border-color:var(--secondary);box-shadow:0 32px 70px rgba(214,178,94,.15);}.pg-gallery-item:hover img{transform:scale(1.08);}.pg-gallery-item:hover::after{opacity:1;}@media(max-width:1200px){.pg-gallery-grid{grid-template-columns:repeat(2,1fr);}}@media(max-width:768px){.pg-gallery{padding:80px 22px;}.pg-section-head{margin-bottom:45px;}.pg-section-head h2{font-size:34px;}.pg-section-head h5{font-size:16px;}.pg-gallery-grid{grid-template-columns:1fr;gap:18px;}.pg-gallery-item img{height:260px;}}@media(max-width:480px){.pg-section-head h2{font-size:28px;}.pg-gallery-item{border-radius:22px;}.pg-gallery-item img{height:220px;}}
      `}</style>
    </>
  );
}
