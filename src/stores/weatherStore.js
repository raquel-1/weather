import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStore = defineStore('weather', () => {

    const data = ref(null);
    const error = ref(null);

    const setData = (newData) => {//actualiza const reactiva data
        data.value = newData;
    };

    const setError = (newError) => {//actualiza const reactiva error
        error.value = newError;
    };

    const getters = {
        
        getWeatherDataOrError: () => {
            if (error.value) {
                return `Error: ${error.value.message}`;
            }
            return data.value;
        }
    };

    return { data, error, setData, setError, ...getters };

});

