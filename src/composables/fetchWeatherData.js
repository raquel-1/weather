import { buildtUrl } from '@/composables/buildtUrl.js';
import { watchEffect } from 'vue';

export function fetchWeatherData(latitude, longitude, temperatureUnit, weatherStore) {

  /** no hace falta declarar data y error porque estan en el store */

    const url = buildtUrl(latitude, longitude, temperatureUnit);//creo mi URL

    const fetchData = async () => {
        try {

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();

            weatherStore.setData(json); //guarda/actualiza los datos en el store

        } catch (err) {
            weatherStore.setError(err); //guarda/actualiza los datos en el store
        }
    };

    watchEffect(() => {// es importante poruqe si cambia la url
        fetchData();
    });
}
//celsius	 fahrenheit