import { buildForecastUrl } from '@/composables/buildForecastUrl.js';
import { ref, watchEffect } from 'vue';

export function fetchWeatherData(latitude, longitude, temperatureUnit) {
    const data = ref(null);
    const error = ref(null);

    const url = buildForecastUrl(latitude, longitude, temperatureUnit);

    const fetchData = async () => {
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        data.value = json;
        } catch (err) {
        error.value = err;
        }
    };

    watchEffect(() => {
        fetchData();
    });

    return { data, error };
}

   
/**
 * 
import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  const fetchData = () => {
    // reset state before fetching..
    data.value = null
    error.value = null

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, error }
} 







 */