import { BUSINESS, whatsappBookingLink } from "../config/business";

export default function Rooms() {
  return (
    <>
      <section id="rooms" className="pg-rooms">
        <div className="pg-section-head">
          <p>{BUSINESS.roomsSection.eyebrow}</p>
          <h2>{BUSINESS.roomsSection.title}</h2>
          <span />
          <h5>{BUSINESS.roomsSection.text}</h5>
        </div>

        <div className="pg-room-grid">
          {BUSINESS.rooms.map((room, index) => (
            <div className="pg-room-card" key={room.title}>
              <div className="pg-room-top">
                <span>Room {index + 1}</span>

                <h3>{room.title}</h3>

                <strong>{room.price}</strong>
              </div>

              <p>{room.text}</p>

              <a href={whatsappBookingLink(room.title)} target="_blank" rel="noreferrer">
                Check Availability
              </a>
            </div>
          ))}
        </div>
      </section>

      <style>{`
      .pg-rooms{padding:110px 7%;background:linear-gradient(180deg,#0a1812 0%,var(--bg) 100%);position:relative;overflow:hidden;}.pg-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}.pg-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}.pg-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}.pg-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}.pg-section-head h5{margin:24px auto 0;color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;}.pg-room-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:26px;}.pg-room-card{position:relative;padding:32px 26px;border-radius:30px;background:rgba(255,255,255,.055);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);overflow:hidden;transition:.4s;}.pg-room-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(0,196,106,.18),transparent 42%);opacity:.8;pointer-events:none;}.pg-room-card:hover{transform:translateY(-10px);border-color:var(--secondary);box-shadow:0 32px 70px rgba(0,196,106,.16);}.pg-room-top{position:relative;z-index:1;}.pg-room-top span{display:inline-flex;margin-bottom:20px;padding:8px 14px;border-radius:999px;background:rgba(214,178,94,.12);border:1px solid rgba(214,178,94,.22);color:var(--secondary);font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:1px;}.pg-room-card h3{color:var(--text);font-size:26px;font-weight:950;line-height:1.2;margin-bottom:14px;}.pg-room-card strong{display:block;color:var(--secondary);font-size:34px;font-weight:950;line-height:1;margin-bottom:22px;}.pg-room-card p{position:relative;z-index:1;color:var(--muted);font-size:15px;line-height:1.8;margin-bottom:28px;}.pg-room-card a{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;height:46px;padding:0 22px;border-radius:999px;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);font-size:14px;font-weight:950;transition:.35s;}.pg-room-card a:hover{transform:translateY(-3px);box-shadow:0 18px 35px rgba(0,196,106,.28);}@media(max-width:1200px){.pg-room-grid{grid-template-columns:repeat(2,1fr);}}@media(max-width:768px){.pg-rooms{padding:80px 22px;}.pg-section-head{margin-bottom:45px;}.pg-section-head h2{font-size:34px;}.pg-section-head h5{font-size:16px;}.pg-room-grid{grid-template-columns:1fr;gap:22px;}.pg-room-card{padding:28px 24px;}}@media(max-width:480px){.pg-section-head h2{font-size:28px;}.pg-room-card h3{font-size:23px;}.pg-room-card strong{font-size:28px;}.pg-room-card a{width:100%;}}
      `}</style>
    </>
  );
}
