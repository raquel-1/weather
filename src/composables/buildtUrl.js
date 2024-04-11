

export function buildtUrl(latitude, longitude, temperatureUnit) {
    const baseUrl = "https://api.open-meteo.com/v1/forecast";
    const params = `?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=6&temperature_unit=${temperatureUnit}&timeformat=iso8601`;
    return baseUrl + params;
}


   /**
EXPLICACION DE PARAMETROS

latitude=51.5074 

longitude=-0.1278

current=temperature_2m

hourly= wind_speed_10m,relative_humidity_2m,visibility,pressure_msl
    viento a 10 metros sobre el suelo, 
    humedad relativa a 2 metros sobre el suelo, 
    visibilidad
    presion a nivel del mar.

daily=temperature_2m_max,temperature_2m_min
    temperatura maxima y minima a 2 metros sobre el suelo para cada dia.

forecast_days=5 
próximos 5 dias

temperature_unit=celsius 
fahrenheit
temperaturas en grados Celsius.

timeformat=iso8601 
tiempos se devuelvan en formato iso8601



creo q eso seria todo


&hourly=&daily=weather_code,etcetcetc


https://open-meteo.com/en/docs#
current=temperature_2m,relative_humidity_2m,weather_code,surface_pressure,wind_speed_10m

&hourly=&daily=weather_code,temperature_2m_max,temperature_2m_min

&timezone=Europe%2FLondon


https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=6&temperature_unit=celsius&timeformat=iso8601




    */