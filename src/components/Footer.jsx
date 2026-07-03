import { BUSINESS, callLink, mapLink } from "../config/business";
import Logo from "../assets/logo/logo.jpg";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialIcons = {
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
  youtube: <FaYoutube />,
  twitter: <FaXTwitter />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="pg-footer">
        <div className="pg-footer-wrap">
          <div className="pg-footer-grid">
            <div className="pg-footer-brand">
              <div className="pg-footer-head">
                <img src={Logo} alt={BUSINESS.name} />
                <div>
                  <h3>{BUSINESS.name}</h3>
                  <span>{BUSINESS.category}</span>
                </div>
              </div>

              <p>{BUSINESS.footer.text}</p>

              <div className="pg-footer-social">
                {Object.entries(BUSINESS.social || {}).map(([name, url]) =>
                  url ? (
                    <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}>
                      {socialIcons[name]}
                    </a>
                  ) : null
                )}
              </div>
            </div>

            <div className="pg-footer-col">
              <h4>Quick Links</h4>
              {BUSINESS.nav.items.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pg-footer-col">
              <h4>{BUSINESS.facilitiesSection.eyebrow}</h4>
              {BUSINESS.facilities.slice(0, 6).map((item) => (
                <a key={item} href="#facilities">
                  {item}
                </a>
              ))}
            </div>

            <div className="pg-footer-col">
              <h4>{BUSINESS.contact.eyebrow}</h4>
              <a href={mapLink} target="_blank" rel="noreferrer">
                {BUSINESS.address}
              </a>
              <a href={callLink}>+91 {BUSINESS.phone}</a>
              <p>{BUSINESS.openingHours}</p>
            </div>
          </div>

          <div className="pg-footer-bottom">
            <p>
              © {year} {BUSINESS.name}. {BUSINESS.footer.copyright}
            </p>
            <p>
              Designed & Developed by <strong>BR30 Web Services</strong>
            </p>
          </div>
        </div>
      </footer>

      <style>{`
.pg-footer{padding:60px 7% 18px;background:#050d0a;border-top:1px solid rgba(214,178,94,.15);}.pg-footer-wrap{max-width:1400px;margin:auto;}.pg-footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1.5fr;gap:50px;padding-bottom:35px;border-bottom:1px solid rgba(255,255,255,.08);}.pg-footer-head{display:flex;align-items:center;gap:14px;margin-bottom:22px;}.pg-footer-head img{width:60px;height:60px;border-radius:18px;object-fit:cover;border:2px solid rgba(214,178,94,.25);}.pg-footer-head h3{color:var(--text);font-size:24px;font-weight:950;line-height:1.2;}.pg-footer-head span{display:block;margin-top:4px;color:var(--secondary);font-size:11px;font-weight:900;letter-spacing:1px;text-transform:uppercase;}.pg-footer-brand p{color:var(--muted);font-size:15px;line-height:1.8;max-width:380px;}.pg-footer-social{display:flex;gap:12px;margin-top:24px;flex-wrap:wrap;}.pg-footer-social a{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);border:1px solid rgba(214,178,94,.25);color:var(--secondary);font-size:20px;transition:.35s;}.pg-footer-social a:hover{background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);transform:translateY(-4px);}.pg-footer-col h4{margin-bottom:18px;color:var(--secondary);font-size:20px;font-weight:950;}.pg-footer-col a,.pg-footer-col p{display:block;margin-bottom:13px;color:var(--muted);font-size:15px;line-height:1.75;transition:.3s;}.pg-footer-col a:hover{color:var(--secondary);transform:translateX(5px);}.pg-footer-bottom{padding-top:18px;display:flex;align-items:center;justify-content:space-between;gap:18px;}.pg-footer-bottom p{color:#9f9f9f;font-size:13px;line-height:1.7;}.pg-footer-bottom strong{color:var(--secondary);}@media(max-width:1180px){.pg-footer-grid{grid-template-columns:repeat(2,1fr);gap:36px;}}@media(max-width:768px){.pg-footer{padding:45px 22px 16px;}.pg-footer-grid{grid-template-columns:repeat(2,1fr);gap:28px 18px;}.pg-footer-brand{grid-column:1/-1;}.pg-footer-col:nth-child(2),.pg-footer-col:nth-child(3){grid-column:auto;}.pg-footer-col:nth-child(4){grid-column:1/-1;}.pg-footer-head img{width:54px;height:54px;}.pg-footer-head h3{font-size:21px;}.pg-footer-brand p{font-size:14px;}.pg-footer-social a{width:42px;height:42px;font-size:18px;}.pg-footer-col h4{font-size:18px;margin-bottom:14px;}.pg-footer-col a,.pg-footer-col p{font-size:14px;margin-bottom:10px;line-height:1.65;}.pg-footer-bottom{flex-direction:column;text-align:center;gap:6px;}}@media(max-width:480px){.pg-footer-grid{grid-template-columns:repeat(2,1fr);gap:26px 16px;}.pg-footer-brand{grid-column:1/-1;}.pg-footer-col:nth-child(2),.pg-footer-col:nth-child(3){grid-column:auto;}.pg-footer-col:nth-child(4){grid-column:1/-1;}.pg-footer-head h3{font-size:19px;}.pg-footer-social{justify-content:flex-start;}.pg-footer-col h4{font-size:17px;}.pg-footer-col a,.pg-footer-col p{font-size:14px;}}
`}</style>
    </>
  );
}
