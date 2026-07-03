import { BUSINESS } from "../config/business";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials" className="pg-testimonials">
        <div className="pg-section-head">
          <p>{BUSINESS.testimonials.eyebrow}</p>

          <h2>{BUSINESS.testimonials.title}</h2>

          <span />

          <h5>{BUSINESS.testimonials.subtitle}</h5>
        </div>

        <div className="pg-testimonial-grid">
          {BUSINESS.testimonials.reviews.map((review) => (
            <div className="pg-testimonial-card" key={review.name}>
              <div className="pg-stars">★★★★★</div>

              <p className="pg-review-text">"{review.text}"</p>

              <div className="pg-review-user">
                <div className="pg-review-avatar">{review.name.charAt(0)}</div>

                <div>
                  <h3>{review.name}</h3>
                  <span>Verified Resident</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
      .pg-testimonials{padding:110px 7%;background:linear-gradient(180deg,#0a1812 0%,var(--bg) 100%);position:relative;overflow:hidden;}.pg-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}.pg-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}.pg-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}.pg-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}.pg-section-head h5{margin:24px auto 0;color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;}.pg-testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}.pg-testimonial-card{position:relative;padding:34px;border-radius:30px;background:rgba(255,255,255,.055);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);overflow:hidden;transition:.4s;}.pg-testimonial-card::before{content:"❝";position:absolute;top:12px;right:22px;font-size:76px;color:rgba(214,178,94,.12);font-weight:950;line-height:1;}.pg-testimonial-card:hover{transform:translateY(-10px);border-color:var(--secondary);box-shadow:0 32px 70px rgba(214,178,94,.14);}.pg-stars{color:#ffd86b;font-size:22px;letter-spacing:4px;margin-bottom:22px;}.pg-review-text{color:var(--muted);font-size:16px;line-height:1.9;margin-bottom:30px;}.pg-review-user{display:flex;align-items:center;gap:15px;padding-top:22px;border-top:1px solid rgba(255,255,255,.08);}.pg-review-avatar{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);font-size:22px;font-weight:950;flex-shrink:0;}.pg-review-user h3{color:var(--text);font-size:18px;font-weight:950;line-height:1.2;margin-bottom:5px;}.pg-review-user span{color:var(--secondary);font-size:13px;font-weight:800;}@media(max-width:1100px){.pg-testimonial-grid{grid-template-columns:repeat(2,1fr);}}@media(max-width:768px){.pg-testimonials{padding:80px 22px;}.pg-section-head{margin-bottom:45px;}.pg-section-head h2{font-size:34px;}.pg-section-head h5{font-size:16px;}.pg-testimonial-grid{grid-template-columns:1fr;gap:22px;}.pg-testimonial-card{padding:28px 24px;}.pg-stars{font-size:19px;letter-spacing:3px;}.pg-review-text{font-size:15px;}}@media(max-width:480px){.pg-section-head h2{font-size:28px;}.pg-review-avatar{width:48px;height:48px;font-size:19px;}.pg-review-user h3{font-size:16px;}}
      `}</style>
    </>
  );
}
