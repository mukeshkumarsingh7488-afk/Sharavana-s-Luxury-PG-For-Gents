import { BUSINESS, callLink, whatsappBookingLink } from "../config/business";

export default function Pricing() {
  return (
    <>
      <section id="pricing" className="pg-pricing">
        <div className="pg-section-head">
          <p>{BUSINESS.pricing.eyebrow}</p>
          <h2>{BUSINESS.pricing.title}</h2>
          <span />
          <h5>{BUSINESS.pricing.text}</h5>
        </div>

        <div className="pg-pricing-grid">
          {BUSINESS.pricing.plans.map((plan) => (
            <div className="pg-price-card" key={plan.name}>
              <div className="pg-price-top">
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
              </div>

              <ul>
                {plan.features.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>

              <div className="pg-price-buttons">
                <a href={whatsappBookingLink(plan.name)} target="_blank" rel="noreferrer" className="pg-price-btn">
                  {BUSINESS.pricing.primaryButton}
                </a>

                <a href={callLink} className="pg-price-outline">
                  {BUSINESS.pricing.secondaryButton}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
      .pg-pricing{padding:110px 7%;background:linear-gradient(180deg,#0a1812 0%,var(--bg) 100%);position:relative;overflow:hidden;}.pg-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}.pg-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}.pg-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}.pg-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}.pg-section-head h5{margin:24px auto 0;color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;}.pg-pricing-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:26px;}.pg-price-card{padding:32px 26px;border-radius:30px;background:rgba(255,255,255,.055);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);transition:.4s;}.pg-price-card:hover{transform:translateY(-10px);border-color:var(--secondary);box-shadow:0 32px 70px rgba(214,178,94,.14);}.pg-price-top{padding-bottom:24px;border-bottom:1px solid rgba(255,255,255,.08);margin-bottom:24px;}.pg-price-top h3{color:var(--text);font-size:25px;font-weight:950;margin-bottom:14px;}.pg-price-top strong{display:block;color:var(--secondary);font-size:34px;font-weight:950;}.pg-price-card ul{display:grid;gap:12px;margin-bottom:28px;}.pg-price-card li{color:var(--muted);font-size:15px;font-weight:800;}.pg-price-buttons{display:flex;flex-direction:column;gap:12px;}.pg-price-btn,.pg-price-outline{height:46px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:950;transition:.35s;}.pg-price-btn{background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);}.pg-price-outline{border:1px solid rgba(214,178,94,.35);color:var(--secondary);background:rgba(255,255,255,.05);}.pg-price-btn:hover,.pg-price-outline:hover{transform:translateY(-3px);}.pg-price-outline:hover{background:var(--secondary);color:var(--black);}@media(max-width:1200px){.pg-pricing-grid{grid-template-columns:repeat(2,1fr);}}@media(max-width:768px){.pg-pricing{padding:80px 22px;}.pg-section-head h2{font-size:34px;}.pg-section-head h5{font-size:16px;}.pg-pricing-grid{grid-template-columns:1fr;gap:22px;}.pg-price-card{padding:28px 24px;}}@media(max-width:480px){.pg-section-head h2{font-size:28px;}.pg-price-top h3{font-size:22px;}.pg-price-top strong{font-size:29px;}}
      `}</style>
    </>
  );
}
