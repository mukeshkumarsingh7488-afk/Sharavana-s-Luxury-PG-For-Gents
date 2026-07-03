import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { callLink, whatsappBookingLink } from "../config/business";

export default function FloatingButtons() {
  return (
    <>
      <div className="pg-floating-buttons">
        <a href={whatsappBookingLink("PG Room Enquiry")} target="_blank" rel="noreferrer" className="pg-float-whatsapp" aria-label="WhatsApp">
          <FaWhatsapp size={28} />
          <span>WhatsApp</span>
        </a>

        <a href={callLink} className="pg-float-call" aria-label="Call">
          <Phone size={24} />
          <span>Call</span>
        </a>
      </div>

      <style>{`
      .pg-floating-buttons{position:fixed;right:24px;bottom:24px;z-index:9999;display:flex;flex-direction:column;gap:14px;}.pg-floating-buttons a{width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 18px 40px rgba(0,0,0,.42);transition:.35s;position:relative;overflow:hidden;}.pg-floating-buttons a span{position:absolute;right:70px;padding:7px 12px;border-radius:999px;background:rgba(0,0,0,.78);color:#fff;font-size:12px;font-weight:900;white-space:nowrap;opacity:0;transform:translateX(10px);transition:.3s;pointer-events:none;}.pg-floating-buttons a:hover span{opacity:1;transform:translateX(0);}.pg-floating-buttons a:hover{transform:translateY(-6px) scale(1.08);}.pg-float-whatsapp{background:linear-gradient(135deg,#25d366,#128c7e);animation:pgWhatsPulse 2.4s infinite;}.pg-float-call{background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black)!important;}@keyframes pgWhatsPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.55);}70%{box-shadow:0 0 0 18px rgba(37,211,102,0);}100%{box-shadow:0 0 0 0 rgba(37,211,102,0);}}@media(max-width:768px){.pg-floating-buttons{right:18px;bottom:18px;gap:12px;}.pg-floating-buttons a{width:54px;height:54px;}.pg-floating-buttons a span{display:none;}}@media(max-width:480px){.pg-floating-buttons a{width:50px;height:50px;}}
      `}</style>
    </>
  );
}
