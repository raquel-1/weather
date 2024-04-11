

export function buildtUrl(latitude, longitude, temperatureUnit) {
    const baseUrl = "https://api.open-meteo.com/v1/forecast";
    const params = `?latitude=${latitude}&longitude=${longitude}&current=cloud_cover,temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,weather_code,&daily=weather_code,temperature_2m_max,temperature_2m_min&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=6&temperature_unit=${temperatureUnit}&timeformat=iso8601`;
    return baseUrl + params;
}


