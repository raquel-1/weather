// src/stores/weatherStore.js
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useWeatherStore = defineStore('weather', () => {
    const data = ref(null);
    const error = ref(null);
    const temperatureUnit = ref('celsius');
    const isLoading = ref(false);

    // search cities
    const recentCities = ref(JSON.parse(localStorage.getItem('recentCities')) || []);

    const currentCity = ref('');

    const setData = (newData) => {
        data.value = newData;
        isLoading.value = false;
    };

    const setError = (newError) => {
        error.value = newError;
        isLoading.value = false;
    };

    const setTemperatureUnit = (newUnit) => {
        temperatureUnit.value = newUnit;
        isLoading.value = false;
    };

    const setCurrentCity = (cityName) => {
        currentCity.value = cityName;
    };

    const startLoading = () => {
        isLoading.value = true;
    };

    // add city
    const addRecentCity = (cityName) => {
        const cleanName = cityName.trim();
        if (!recentCities.value.some(c => c.toLowerCase() === cleanName.toLowerCase())) {
            recentCities.value.unshift(cleanName);
            if (recentCities.value.length > 10) {
            recentCities.value.pop();
            }
        }
    };

    // Synchronises with localStorage automatically
    watch(recentCities, (newVal) => {
        localStorage.setItem('recentCities', JSON.stringify(newVal));
    }, { deep: true });

    const getters = {
        getWeatherDataOrError: () => {
            if (error.value) {
                return `Error: ${error.value.message}`;
            }
            return {
                data: data.value,
                temperatureUnit: temperatureUnit.value,
            };
        },
    };

    return {
        data,
        error,
        isLoading,
        temperatureUnit,
        recentCities,
        currentCity,
        setCurrentCity,
        addRecentCity,
        setTemperatureUnit,
        setData,
        setError,
        startLoading,
        ...getters,
    };
});
