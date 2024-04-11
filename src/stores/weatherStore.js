import { defineStore } from 'pinia';
//store q almacena el fetch
export const useWeatherStore = defineStore({
 id: 'weather',
 state: () => ({
    data: null,
    error: null,
 }),
 actions: {
    setData(data) {
      this.data = data;
    },
    setError(error) {
      this.error = error;
    },
 },
});
