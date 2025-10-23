// src/composables/searchCity.js
export async function searchCity(query) {
  if (!query || query.trim() === "") return [];

  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=en&format=json`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error fetching city data");

    const data = await res.json();
    return data.results
      ? data.results.map((item) => ({
          name: item.name,
          country: item.country,
          latitude: item.latitude,
          longitude: item.longitude,
        }))
      : [];
  } catch (err) {
    console.error("searchCity error:", err);
    return [];
  }
}
