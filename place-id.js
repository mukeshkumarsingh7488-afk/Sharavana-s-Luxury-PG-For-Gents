const API_KEY = "AIzaSyCiDnEHmV_i2ANpJAim_xF9J07ccRrN8n8";

const query = "Sharavana's Luxury PG For Gents, Pattandur Agrahara Village Main Rd, near ITPL Back, Whitefield, Bengaluru, Karnataka 560066";

async function findPlaceId() {
  try {
    const searchUrl = "https://places.googleapis.com/v1/places:searchText";

    const response = await fetch(searchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyCiDnEHmV_i2ANpJAim_xF9J07ccRrN8n8",
        "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.googleMapsUri",
      },
      body: JSON.stringify({
        textQuery: query,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Google API Error:");
      console.log(JSON.stringify(data, null, 2));
      return;
    }

    if (!data.places || data.places.length === 0) {
      console.log("No place found. Try changing the query.");
      return;
    }

    const place = data.places[0];

    console.log("\n✅ Place Found\n");
    console.log("Name:", place.displayName?.text);
    console.log("Address:", place.formattedAddress);
    console.log("Place ID:", place.id);
    console.log("Rating:", place.rating);
    console.log("Total Reviews:", place.userRatingCount);
    console.log("Google Maps URL:", place.googleMapsUri);
  } catch (error) {
    console.error("Script Error:", error.message);
  }
}

findPlaceId();
