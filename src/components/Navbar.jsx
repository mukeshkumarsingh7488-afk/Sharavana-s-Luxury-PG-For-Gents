import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS, whatsappBookingLink } from "../config/business";
import Logo from "../assets/logo/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`pg-navbar ${scrolled ? "pg-navbar-scrolled" : ""}`}>
        <div className="pg-nav-container">
          <a href="#home" className="pg-logo" onClick={closeMenu}>
            <span className="pg-logo-frame">
              <img src={Logo} alt={BUSINESS.name} className="pg-logo-img" />
            </span>

            <div className="pg-logo-text">
              <h2>{BUSINESS.shortName}</h2>
              <span>{BUSINESS.category}</span>
            </div>
          </a>

          <nav className="pg-nav-links">
            {BUSINESS.nav.items.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href={whatsappBookingLink("PG room enquiry")} target="_blank" rel="noreferrer" className="pg-book-btn">
            {BUSINESS.nav.buttonText}
          </a>

          <button type="button" className="pg-menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`pg-mobile-menu ${open ? "show" : ""}`}>
          {BUSINESS.nav.items.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a href={whatsappBookingLink("PG room enquiry")} target="_blank" rel="noreferrer" onClick={closeMenu} className="pg-mobile-btn">
            {BUSINESS.nav.buttonText}
          </a>
        </div>
      </header>

      <style>{`
      .pg-navbar{position:fixed;top:0;left:0;width:100%;z-index:999;transition:.35s;padding:18px 0;background:transparent;}.pg-navbar-scrolled{padding:12px 0;background:rgba(6,19,15,.88);backdrop-filter:blur(18px);border-bottom:1px solid rgba(214,178,94,.15);box-shadow:0 12px 35px rgba(0,0,0,.35);}.pg-nav-container{width:min(92%,1280px);margin:auto;display:flex;align-items:center;justify-content:space-between;gap:30px;}.pg-logo{display:flex;align-items:center;gap:14px;flex-shrink:0;}.pg-logo-frame{width:58px;height:58px;border-radius:18px;overflow:hidden;border:2px solid rgba(214,178,94,.25);box-shadow:0 10px 28px rgba(0,196,106,.25);}.pg-logo-img{width:100%;height:100%;object-fit:cover;}.pg-logo-text h2{font-size:24px;font-weight:900;color:#fff;line-height:1;}.pg-logo-text span{display:block;margin-top:5px;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--secondary);}.pg-nav-links{display:flex;align-items:center;gap:34px;}.pg-nav-links a{font-size:15px;font-weight:700;color:#fff;transition:.3s;position:relative;}.pg-nav-links a::after{content:"";position:absolute;left:0;bottom:-7px;width:0;height:2px;background:var(--primary);transition:.3s;}.pg-nav-links a:hover{color:var(--primary);}.pg-nav-links a:hover::after{width:100%;}.pg-book-btn{height:50px;padding:0 26px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--primary),#00f08b);color:#06130f;font-size:14px;font-weight:900;transition:.35s;box-shadow:0 14px 35px rgba(0,196,106,.25);}.pg-book-btn:hover{transform:translateY(-4px);box-shadow:0 20px 45px rgba(0,196,106,.35);}.pg-menu-btn{display:none;width:48px;height:48px;border-radius:14px;background:rgba(255,255,255,.06);color:#fff;align-items:center;justify-content:center;}.pg-mobile-menu{display:none;}@media(max-width:992px){.pg-nav-links,.pg-book-btn{display:none;}.pg-menu-btn{display:flex;}.pg-mobile-menu{display:flex;position:absolute;top:100%;left:0;width:100%;background:#081510;flex-direction:column;padding:26px;border-top:1px solid rgba(214,178,94,.15);transform:translateY(-20px);opacity:0;visibility:hidden;transition:.35s;}.pg-mobile-menu.show{opacity:1;visibility:visible;transform:translateY(0);}.pg-mobile-menu a{padding:16px 0;color:#fff;font-size:16px;font-weight:700;border-bottom:1px solid rgba(255,255,255,.06);}.pg-mobile-btn{margin-top:22px;height:50px;display:flex!important;align-items:center;justify-content:center;border-radius:999px;background:linear-gradient(135deg,var(--primary),#00f08b);color:#06130f!important;font-weight:900;border:none!important;}}@media(max-width:768px){.pg-navbar{padding:15px 0;}.pg-navbar-scrolled{padding:10px 0;}.pg-logo-frame{width:50px;height:50px;border-radius:15px;}.pg-logo-text h2{font-size:20px;}.pg-logo-text span{font-size:10px;}.pg-nav-container{gap:18px;}}@media(max-width:480px){.pg-logo-text h2{font-size:18px;}.pg-logo-text span{display:none;}.pg-logo-frame{width:46px;height:46px;}.pg-menu-btn{width:44px;height:44px;}}
        `}</style>
    </>
  );
}
