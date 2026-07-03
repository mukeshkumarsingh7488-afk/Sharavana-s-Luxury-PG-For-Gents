import { BUSINESS } from "../config/business";

export default function Facilities() {
  return (
    <>
      <section id="facilities" className="pg-facilities">
        <div className="pg-section-head">
          <p>{BUSINESS.facilitiesSection.eyebrow}</p>
          <h2>{BUSINESS.facilitiesSection.title}</h2>
          <span />
          <h5>{BUSINESS.facilitiesSection.text}</h5>
        </div>

        <div className="pg-facilities-grid">
          {BUSINESS.facilities.map((facility, index) => (
            <div className="pg-facility-card" key={facility}>
              <div className="pg-facility-number">{String(index + 1).padStart(2, "0")}</div>

              <div className="pg-facility-icon">✓</div>

              <h3>{facility}</h3>

              <p>Premium facility available for comfortable, safe and hassle-free daily living at {BUSINESS.shortName}.</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
      .pg-facilities{padding:110px 7%;background:linear-gradient(180deg,var(--bg) 0%,#0a1812 100%);position:relative;overflow:hidden;}.pg-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}.pg-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}.pg-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}.pg-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}.pg-section-head h5{margin:24px auto 0;color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;}.pg-facilities-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}.pg-facility-card{position:relative;padding:28px 22px;border-radius:28px;background:rgba(255,255,255,.055);border:1px solid var(--border);box-shadow:0 22px 50px rgba(0,0,0,.32);overflow:hidden;transition:.4s;}.pg-facility-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(214,178,94,.14),transparent 45%);pointer-events:none;}.pg-facility-card:hover{transform:translateY(-9px);border-color:var(--secondary);box-shadow:0 30px 65px rgba(214,178,94,.13);}.pg-facility-number{position:relative;z-index:1;color:rgba(255,255,255,.12);font-size:38px;font-weight:950;line-height:1;margin-bottom:16px;}.pg-facility-icon{position:relative;z-index:1;width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:950;margin-bottom:20px;}.pg-facility-card h3{position:relative;z-index:1;color:var(--text);font-size:21px;font-weight:950;line-height:1.25;margin-bottom:12px;}.pg-facility-card p{position:relative;z-index:1;color:var(--muted);font-size:14px;line-height:1.75;}@media(max-width:1200px){.pg-facilities-grid{grid-template-columns:repeat(3,1fr);}}@media(max-width:768px){.pg-facilities{padding:80px 22px;}.pg-section-head{margin-bottom:45px;}.pg-section-head h2{font-size:34px;}.pg-section-head h5{font-size:16px;}.pg-facilities-grid{grid-template-columns:repeat(2,1fr);gap:16px;}.pg-facility-card{padding:24px 18px;border-radius:24px;}.pg-facility-number{font-size:30px;}.pg-facility-icon{width:44px;height:44px;font-size:19px;}.pg-facility-card h3{font-size:18px;}.pg-facility-card p{font-size:13px;}}@media(max-width:480px){.pg-section-head h2{font-size:28px;}.pg-facilities-grid{grid-template-columns:1fr;}.pg-facility-card h3{font-size:20px;}}
      `}</style>
    </>
  );
}
