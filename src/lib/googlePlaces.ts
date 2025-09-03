import { PlacesClient } from "@googlemaps/places";
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_PLACE_ID } from "astro:env/server";
const client = new PlacesClient({ apiKey: GOOGLE_MAPS_API_KEY });
const IGNORE_REVIEWS = ["ChZDSUhNMG9nS0VJQ0FnTUR3OXNDdmRBEAE", "ChdDSUhNMG9nS0VJQ0FnSUNlMXVuVmp3RRAB"];

export const fetchPlace = async () => {
  const places = await client.getPlace(
    { name: GOOGLE_MAPS_PLACE_ID },
    { otherArgs: { headers: { 'X-Goog-FieldMask': 'rating,reviews,userRatingCount' }}}
  )

  places[0].reviews = places[0].reviews?.filter(({ name }) => !IGNORE_REVIEWS.map(id => `${GOOGLE_MAPS_PLACE_ID}/reviews/${id}`).includes(name || ''));

  return places[0];
}
