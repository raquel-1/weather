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

 return { data, error, setData, setError };
});

