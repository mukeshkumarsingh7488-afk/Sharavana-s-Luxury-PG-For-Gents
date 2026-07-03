import { BUSINESS } from "../config/business";
import { useGooglePlace } from "../hooks/useGooglePlace";

function Stars({ rating = 5 }) {
  return (
    <span>
      {"★".repeat(Math.round(rating))}
      {"☆".repeat(5 - Math.round(rating))}
    </span>
  );
}

export default function GoogleReviews() {
  const { place, reviews, loading, error } = useGooglePlace(BUSINESS.google?.placeId);

  if (loading) return null;
  const googleData = place || {
    rating: BUSINESS.rating,
    userRatingCount: BUSINESS.totalReviews,
    googleMapsUri: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapQuery)}`,
  };
  // Google API se sirf wahi reviews lo jinke paas text ho
  const validGoogleReviews = reviews?.filter((r) => r.text?.text && r.text.text.trim() !== "" && r.authorAttribution?.displayName) || [];

  // Agar 4 se kam aaye to business.js wale use karo
  const displayReviews =
    validGoogleReviews.length >= 4
      ? validGoogleReviews.slice(0, 4)
      : BUSINESS.testimonials.reviews.map((r) => ({
          text: { text: r.text },
          rating: 5,
          relativePublishTimeDescription: "Recently",
          authorAttribution: {
            displayName: r.name,
          },
        }));

  return (
    <>
      <section id="testimonials" className="pg-google-reviews">
        <div className="pg-google-box">
          <div className="pg-google-head">
            <h3>
              <span>Google</span> Reviews
            </h3>

            <div className="pg-google-rating">
              <span className="pg-google-count">{Number(googleData.userRatingCount || BUSINESS.totalReviews).toLocaleString()}+</span>

              <strong>{googleData.rating || BUSINESS.rating}</strong>

              <Stars rating={googleData.rating || BUSINESS.rating} />
            </div>
          </div>

          <div className="pg-google-review-grid">
            {displayReviews.map((review, index) => (
              <article className="pg-google-review-card" key={index}>
                <div className="pg-google-user">
                  <div className="pg-google-avatar">{(review.authorAttribution?.displayName || "G").charAt(0).toUpperCase()}</div>

                  <div>
                    <h4>{review.authorAttribution?.displayName || "Google User"}</h4>

                    <small>{review.relativePublishTimeDescription || "Recently"}</small>
                  </div>
                </div>

                <div className="pg-google-stars">
                  <Stars rating={review.rating || 5} />
                </div>

                <p>{review.text?.text || "Trusted by residents for comfortable PG living."}</p>

                <a href={googleData.googleMapsUri} target="_blank" rel="noreferrer">
                  Read more
                </a>
              </article>
            ))}
          </div>

          <a className="pg-google-map-link" href={googleData.googleMapsUri} target="_blank" rel="noreferrer">
            View all Google Reviews
          </a>
        </div>
      </section>
      <style>{`.pg-google-reviews{padding:110px 7%;background:linear-gradient(180deg,#0a1812 0%,var(--bg) 100%);position:relative;overflow:hidden;}.pg-google-box{max-width:1400px;margin:auto;padding:42px;border-radius:34px;background:rgba(255,255,255,.045);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);}.pg-google-head{text-align:center;margin-bottom:36px;}.pg-google-head h3{color:var(--text);font-size:30px;font-weight:950;margin-bottom:10px;}.pg-google-head h3 span{background:linear-gradient(90deg,#4285f4,#ea4335,#fbbc05,#34a853);-webkit-background-clip:text;background-clip:text;color:transparent;}.pg-google-rating{display:flex;align-items:center;justify-content:center;gap:12px;color:#fbbc05;font-size:28px;font-weight:950;}.pg-google-count{color:var(--text);font-size:28px;font-weight:950;}.pg-google-head strong{color:var(--text);}.pg-google-review-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}.pg-google-review-card{padding:26px;border-radius:24px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);box-shadow:0 18px 40px rgba(0,0,0,.25);transition:.35s;}.pg-google-review-card:hover{transform:translateY(-8px);border-color:var(--secondary);}.pg-google-user{display:flex;align-items:center;gap:14px;margin-bottom:18px;}.pg-google-avatar{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);font-size:20px;font-weight:950;}.pg-google-user h4{color:var(--text);font-size:17px;font-weight:900;}.pg-google-user small{color:var(--muted);}.pg-google-stars{color:#fbbc05;font-size:18px;margin-bottom:15px;}.pg-google-review-card p{color:var(--muted);font-size:15px;line-height:1.8;margin-bottom:15px;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;}.pg-google-review-card a{color:#7db7ff;font-size:14px;font-weight:900;}.pg-google-map-link{width:max-content;margin:34px auto 0;display:flex;align-items:center;justify-content:center;height:50px;padding:0 28px;border-radius:999px;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);font-weight:950;}@media(max-width:1100px){.pg-google-review-grid{grid-template-columns:repeat(2,1fr);}}@media(max-width:768px){.pg-google-reviews{padding:80px 22px;}.pg-google-box{padding:28px 18px;}.pg-google-review-grid{grid-template-columns:1fr;}}@media(max-width:480px){.pg-google-map-link{width:100%;}}`}</style>
    </>
  );
}
