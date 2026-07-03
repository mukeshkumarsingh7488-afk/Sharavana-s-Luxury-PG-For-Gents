const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export async function getGooglePlaceDetails(placeId) {
  if (!API_KEY) throw new Error("Google API key missing");
  if (!placeId) throw new Error("Google Place ID missing");

  const url = `https://places.googleapis.com/v1/places/${placeId}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": "id,displayName,formattedAddress,rating,userRatingCount,googleMapsUri,businessStatus,reviews",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Google Places Error:", data);
    throw new Error(data?.error?.message || "Failed to fetch Google place");
  }

  return data;
}
