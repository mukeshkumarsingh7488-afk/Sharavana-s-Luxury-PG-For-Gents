import { useEffect, useState } from "react";
import { getGooglePlaceDetails } from "../api/googlePlaces";

export function useGooglePlace(placeId) {
  const [place, setPlace] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(Boolean(placeId));
  const [error, setError] = useState("");

  useEffect(() => {
    if (!placeId) {
      setLoading(false);
      return;
    }

    let active = true;

    async function loadPlace() {
      try {
        setLoading(true);
        setError("");

        const data = await getGooglePlaceDetails(placeId);

        if (!active) return;

        setPlace(data);
        setReviews(data.reviews || []);
      } catch (err) {
        if (!active) return;
        setError(err.message || "Failed to load Google reviews");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadPlace();

    return () => {
      active = false;
    };
  }, [placeId]);

  return {
    place,
    reviews,
    loading,
    error,
  };
}
