import { BUSINESS, callLink, mapLink, whatsappBookingLink } from "../config/business";

export default function Contact() {
  return (
    <>
      <section id="contact" className="pg-contact">
        <div className="pg-section-head">
          <p>{BUSINESS.contact.eyebrow}</p>

          <h2>{BUSINESS.contact.title}</h2>

          <span />

          <h5>{BUSINESS.contact.text}</h5>
        </div>

        <div className="pg-contact-grid">
          <div className="pg-contact-info">
            <div className="pg-contact-card">
              <h3>📍 Address</h3>
              <p>{BUSINESS.address}</p>
            </div>

            <div className="pg-contact-card">
              <h3>📞 Phone</h3>
              <a href={callLink}>+91 {BUSINESS.phone}</a>
            </div>

            <div className="pg-contact-card">
              <h3>🕒 Opening Hours</h3>
              <p>{BUSINESS.openingHours}</p>
            </div>

            <div className="pg-contact-buttons">
              <a href={whatsappBookingLink("PG Room")} target="_blank" rel="noreferrer" className="pg-whatsapp-btn">
                {BUSINESS.contact.whatsappText}
              </a>

              <a href={callLink} className="pg-call-btn">
                {BUSINESS.contact.callText}
              </a>

              <a href={mapLink} target="_blank" rel="noreferrer" className="pg-map-btn">
                {BUSINESS.contact.directionText}
              </a>
            </div>
          </div>

          <div className="pg-contact-form">
            <h3>{BUSINESS.contact.formTitle}</h3>

            <form>
              <input type="text" placeholder={BUSINESS.contact.namePlaceholder} />

              <input type="tel" placeholder={BUSINESS.contact.phonePlaceholder} />

              <textarea rows="6" placeholder={BUSINESS.contact.messagePlaceholder} />

              <button type="submit">{BUSINESS.contact.submitText}</button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
      .pg-contact{padding:110px 7%;background:linear-gradient(180deg,var(--bg) 0%,#0a1812 100%);position:relative;overflow:hidden;}.pg-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}.pg-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}.pg-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}.pg-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}.pg-section-head h5{margin:24px auto 0;color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;}.pg-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:55px;align-items:start;}.pg-contact-info{display:grid;gap:20px;}.pg-contact-card,.pg-contact-form{padding:28px;border-radius:28px;background:rgba(255,255,255,.055);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);}.pg-contact-card h3{color:var(--secondary);font-size:20px;font-weight:950;margin-bottom:10px;}.pg-contact-card p,.pg-contact-card a{color:var(--muted);font-size:16px;line-height:1.8;}.pg-contact-card a:hover{color:var(--primary);}.pg-contact-buttons{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:4px;}.pg-contact-buttons a,.pg-contact-form button{height:48px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:950;transition:.35s;}.pg-whatsapp-btn{background:#25d366;color:#06130f;}.pg-call-btn{background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);}.pg-map-btn{background:rgba(255,255,255,.07);border:1px solid rgba(214,178,94,.35);color:var(--secondary);}.pg-contact-buttons a:hover,.pg-contact-form button:hover{transform:translateY(-3px);box-shadow:0 18px 35px rgba(0,196,106,.18);}.pg-contact-form h3{color:var(--text);font-size:32px;font-weight:950;margin-bottom:24px;}.pg-contact-form form{display:grid;gap:16px;}.pg-contact-form input,.pg-contact-form textarea{width:100%;padding:16px 18px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);color:var(--text);outline:none;transition:.3s;resize:none;}.pg-contact-form input::placeholder,.pg-contact-form textarea::placeholder{color:var(--muted);}.pg-contact-form input:focus,.pg-contact-form textarea:focus{border-color:var(--secondary);box-shadow:0 0 0 4px rgba(214,178,94,.12);}.pg-contact-form button{width:100%;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);}@media(max-width:1100px){.pg-contact-grid{grid-template-columns:1fr;gap:34px;}.pg-contact-buttons{max-width:700px;}}@media(max-width:768px){.pg-contact{padding:80px 22px;}.pg-section-head{margin-bottom:45px;}.pg-section-head h2{font-size:34px;}.pg-section-head h5{font-size:16px;}.pg-contact-card,.pg-contact-form{padding:24px;border-radius:24px;}.pg-contact-buttons{grid-template-columns:1fr;}.pg-contact-form h3{font-size:26px;}}@media(max-width:480px){.pg-section-head h2{font-size:28px;}.pg-contact-card h3{font-size:18px;}.pg-contact-card p,.pg-contact-card a{font-size:14px;}.pg-contact-form input,.pg-contact-form textarea{padding:14px 15px;font-size:14px;}}
      `}</style>
    </>
  );
}
