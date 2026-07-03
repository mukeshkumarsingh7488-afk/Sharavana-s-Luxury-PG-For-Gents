import { BUSINESS, mapLink } from "../config/business";

export default function About() {
  const about = BUSINESS.about;

  return (
    <>
      <section id="about" className="pg-about">
        <div className="pg-section-head">
          <p>{about.eyebrow}</p>
          <h2>{about.title}</h2>
          <span />
        </div>

        <div className="pg-about-grid">
          <div className="pg-about-image">
            <img src={BUSINESS.images.about} alt={BUSINESS.name} />

            <div className="pg-rating-card">
              <strong>{BUSINESS.rating}★</strong>
              <p>{BUSINESS.totalReviews}+ Google Reviews</p>
            </div>
          </div>

          <div className="pg-about-content">
            <p className="pg-eyebrow">{about.subtitle}</p>

            <h3>{about.title}</h3>

            <p>{about.text}</p>
            <p>{about.secondText}</p>

            <div className="pg-highlight-list">
              {about.highlights.map((item) => (
                <div className="pg-highlight-card" key={item.title}>
                  <div className="pg-check">✓</div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pg-about-address">
              <strong>{about.addressTitle}</strong>

              <a href={mapLink} target="_blank" rel="noreferrer" className="pg-about-map">
                {BUSINESS.address}
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
      .pg-about-map,.pg-about-map:hover,.pg-about-map:focus,.pg-about-map:visited{color:var(--text);text-decoration:none;transition:.3s;cursor:pointer;}.pg-about-map:hover{color:var(--secondary);}.pg-about{padding:110px 7%;background:linear-gradient(180deg,var(--bg) 0%,#0a1812 100%);position:relative;overflow:hidden;}.pg-section-head{text-align:center;max-width:920px;margin:0 auto 70px;}.pg-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}.pg-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}.pg-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}.pg-about-grid{display:grid;grid-template-columns:520px 1fr;gap:80px;align-items:center;}.pg-about-image{position:relative;}.pg-about-image img{width:100%;height:650px;object-fit:cover;border-radius:32px;box-shadow:0 35px 75px rgba(0,0,0,.55);}.pg-rating-card{position:absolute;left:30px;bottom:30px;padding:18px 24px;border-radius:24px;background:rgba(255,255,255,.1);backdrop-filter:blur(18px);border:1px solid var(--border);}.pg-rating-card strong{display:block;color:var(--secondary);font-size:38px;font-weight:950;}.pg-rating-card p{margin-top:8px;color:var(--text);font-size:14px;font-weight:800;}.pg-eyebrow{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}.pg-about-content h3{margin:18px 0 28px;color:var(--text);font-size:46px;line-height:1.18;font-weight:950;}.pg-about-content>p{margin-bottom:20px;color:var(--muted);font-size:17px;line-height:1.9;}.pg-highlight-list{display:grid;gap:18px;margin-top:40px;}.pg-highlight-card{display:flex;gap:18px;padding:22px;border-radius:24px;background:rgba(255,255,255,.055);border:1px solid var(--border);transition:.35s;}.pg-highlight-card:hover{transform:translateY(-6px);border-color:var(--secondary);background:rgba(255,255,255,.08);}.pg-check{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:950;flex-shrink:0;}.pg-highlight-card h4{margin-bottom:8px;color:var(--text);font-size:20px;font-weight:950;}.pg-highlight-card p{color:var(--muted);font-size:15px;line-height:1.7;}.pg-about-address{margin-top:40px;padding:28px;border-radius:26px;background:linear-gradient(135deg,rgba(0,196,106,.13),rgba(214,178,94,.1));border:1px solid rgba(214,178,94,.25);}.pg-about-address strong{display:block;margin-bottom:12px;color:var(--secondary);font-size:18px;font-weight:950;}.pg-about-address p{color:var(--text);line-height:1.8;}@media(max-width:1100px){.pg-about-grid{grid-template-columns:1fr;gap:50px;}.pg-about-image img{height:520px;}}@media(max-width:768px){.pg-about{padding:80px 22px;}.pg-section-head{margin-bottom:45px;}.pg-section-head h2{font-size:34px;}.pg-about-content h3{font-size:32px;}.pg-about-image img{height:420px;}.pg-rating-card{left:18px;right:18px;bottom:18px;}.pg-highlight-card{padding:18px;}}@media(max-width:480px){.pg-about-image img{height:340px;}.pg-about-content h3{font-size:28px;}.pg-section-head h2{font-size:28px;}.pg-check{width:44px;height:44px;font-size:18px;}}
      `}</style>
    </>
  );
}
