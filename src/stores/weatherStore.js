import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStore = defineStore('weather', () => {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(false); // Agrega una referencia para el estado de carga

    const setData = (newData) => {
        data.value = newData;
        isLoading.value = false; // Actualiza el estado de carga cuando los datos se han cargado
    };

    const setError = (newError) => {
        error.value = newError;
        isLoading.value = false; // Actualiza el estado de carga cuando ocurre un error
    };

    const startLoading = () => {
        isLoading.value = true; // Actualiza el estado de carga al comenzar a cargar datos
    };

    const getters = {
        getWeatherDataOrError: () => {
            if (error.value) {
                return `Error: ${error.value.message}`;
            }
            return data.value;
        }
    };

    return { data, error, isLoading, setData, setError, startLoading, ...getters };
});
