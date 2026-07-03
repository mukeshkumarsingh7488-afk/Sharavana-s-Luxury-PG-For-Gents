import { BUSINESS, callLink, whatsappBookingLink } from "../config/business";

export default function Hero() {
  const hero = BUSINESS.hero;

  return (
    <>
      <section id="home" className="pg-hero">
        <div className="pg-hero-bg" />
        <div className="pg-hero-overlay" />
        <div className="pg-hero-glow pg-glow-one" />
        <div className="pg-hero-glow pg-glow-two" />

        <div className="pg-hero-container">
          <div className="pg-hero-content">
            <p className="pg-eyebrow">{hero.badge}</p>

            <h1>
              {hero.title}
              <span>{hero.highlight}</span>
            </h1>

            <p className="pg-hero-text">{hero.subtitle}</p>

            <div className="pg-hero-actions">
              <a href={whatsappBookingLink("PG room enquiry")} target="_blank" rel="noreferrer" className="pg-primary-btn">
                {hero.primaryButton}
              </a>

              <a href={callLink} className="pg-outline-btn">
                {hero.secondaryButton}
              </a>
            </div>

            <div className="pg-hero-stats">
              {hero.stats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pg-hero-card">
            <p>{BUSINESS.category}</p>
            <h2>{BUSINESS.shortName}</h2>

            <div className="pg-hero-card-list">
              {BUSINESS.about.points.slice(0, 4).map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>

            <a href={whatsappBookingLink("room availability")} target="_blank" rel="noreferrer">
              {BUSINESS.pricing.primaryButton}
            </a>
          </div>
        </div>
      </section>

      <style>{`
      .pg-hero{min-height:100vh;padding:95px 7% 90px;display:flex;align-items:center;position:relative;overflow:hidden;background:var(--bg);box-sizing:border-box;}.pg-hero *{box-sizing:border-box;}.pg-hero-bg{position:absolute;inset:0;background:linear-gradient(rgba(6,19,15,.62),rgba(6,19,15,.94)),url("${BUSINESS.images.hero}") center/cover no-repeat;transform:scale(1.04);}.pg-hero-overlay{position:absolute;inset:0;background:radial-gradient(circle at 18% 20%,rgba(0,196,106,.18),transparent 34%),radial-gradient(circle at 82% 75%,rgba(214,178,94,.14),transparent 34%);}.pg-hero-glow{position:absolute;width:380px;height:380px;border-radius:50%;filter:blur(90px);opacity:.32;pointer-events:none;}.pg-glow-one{top:10%;left:-120px;background:var(--primary);}.pg-glow-two{right:-130px;bottom:8%;background:var(--secondary);opacity:.22;}.pg-hero-container{position:relative;z-index:2;width:100%;max-width:1280px;margin:auto;display:grid;grid-template-columns:1.1fr .9fr;gap:70px;align-items:center;}.pg-hero-content{animation:pgHeroFade .9s ease both;}.pg-eyebrow{display:inline-block;margin-bottom:22px;color:var(--secondary);font-size:14px;font-weight:950;letter-spacing:3px;text-transform:uppercase;}.pg-hero h1{margin:0;color:var(--text);font-size:clamp(42px,6.2vw,86px);line-height:1.04;font-weight:950;letter-spacing:.5px;text-transform:uppercase;text-shadow:0 22px 65px rgba(0,0,0,.65);}.pg-hero h1 span{display:block;margin-top:10px;background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;background-clip:text;color:transparent;}.pg-hero-text{max-width:780px;margin:28px 0 38px;color:var(--muted);font-size:18px;line-height:1.85;}.pg-hero-actions{display:flex;align-items:center;gap:18px;flex-wrap:wrap;margin-bottom:44px;}.pg-primary-btn,.pg-outline-btn{display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:0 32px;border-radius:999px;font-size:16px;font-weight:950;text-decoration:none;transition:.35s;}.pg-primary-btn{background:linear-gradient(135deg,var(--primary),#00f08b);color:#06130f;box-shadow:0 20px 42px rgba(0,196,106,.28);}.pg-primary-btn:hover{transform:translateY(-4px);box-shadow:0 28px 55px rgba(0,196,106,.42);}.pg-outline-btn{border:1px solid rgba(214,178,94,.65);color:var(--text);background:rgba(255,255,255,.06);backdrop-filter:blur(14px);}.pg-outline-btn:hover{transform:translateY(-4px);background:var(--secondary);color:var(--black);}.pg-hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:720px;}.pg-hero-stats div{padding:20px;border-radius:24px;background:rgba(255,255,255,.075);border:1px solid var(--border);backdrop-filter:blur(18px);box-shadow:0 18px 45px rgba(0,0,0,.25);}.pg-hero-stats strong{display:block;color:var(--secondary);font-size:30px;font-weight:950;line-height:1;}.pg-hero-stats span{display:block;margin-top:8px;color:var(--muted);font-size:14px;font-weight:800;}.pg-hero-card{padding:34px;border-radius:34px;background:rgba(255,255,255,.075);border:1px solid var(--border);backdrop-filter:blur(20px);box-shadow:0 28px 70px rgba(0,0,0,.45);animation:pgHeroFade .9s ease .15s both;}.pg-hero-card p{color:var(--secondary);font-size:13px;font-weight:950;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;}.pg-hero-card h2{color:var(--text);font-size:36px;font-weight:950;line-height:1.15;margin-bottom:26px;}.pg-hero-card-list{display:grid;gap:14px;margin-bottom:30px;}.pg-hero-card-list span{display:block;padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);color:var(--muted);font-size:15px;font-weight:800;line-height:1.5;}.pg-hero-card a{display:flex;align-items:center;justify-content:center;height:52px;border-radius:999px;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);font-size:15px;font-weight:950;transition:.35s;}.pg-hero-card a:hover{transform:translateY(-4px);box-shadow:0 20px 40px rgba(0,196,106,.28);}@keyframes pgHeroFade{from{opacity:0;transform:translateY(35px);}to{opacity:1;transform:translateY(0);}}@media(max-width:1100px){.pg-hero-container{grid-template-columns:1fr;gap:45px;text-align:center;}.pg-hero-text{margin-left:auto;margin-right:auto;}.pg-hero-actions{justify-content:center;}.pg-hero-stats{margin:auto;}.pg-hero-card{max-width:620px;margin:auto;width:100%;}}@media(max-width:768px){.pg-hero{min-height:auto;padding:95px 22px 72px;}.pg-hero-container{gap:34px;}.pg-hero h1{font-size:40px;line-height:1.08;}.pg-eyebrow{font-size:12px;letter-spacing:2px;line-height:1.5;}.pg-hero-text{font-size:16px;line-height:1.75;margin-bottom:32px;}.pg-hero-actions{flex-direction:column;gap:15px;margin-bottom:34px;width:100%;}.pg-primary-btn,.pg-outline-btn{width:min(100%,360px);min-height:48px;font-size:15px;}.pg-hero-stats{grid-template-columns:1fr;gap:14px;width:100%;max-width:360px;}.pg-hero-stats div{padding:18px 16px;}.pg-hero-card{padding:26px;border-radius:28px;}.pg-hero-card h2{font-size:28px;}.pg-hero-card-list span{text-align:left;font-size:14px;}}@media(max-width:480px){.pg-hero{padding:90px 18px 60px;}.pg-hero h1{font-size:33px;}.pg-hero-text{font-size:15px;}.pg-primary-btn,.pg-outline-btn{max-width:320px;min-height:46px;font-size:14px;}.pg-hero-stats{max-width:320px;}.pg-hero-stats strong{font-size:26px;}.pg-hero-card{padding:22px 18px;}.pg-hero-card h2{font-size:24px;}}
      `}</style>
    </>
  );
}
