<script setup>
import AsideMenu from "./components/AsideMenu.vue";
import AllView from './components/AllView.vue'





import { ref, watchEffect } from 'vue';
import { fetchWeatherData } from '@/composables/fetchWeatherData.js';

const data = ref(null);
const error = ref(null);

const fetchData = async () => {
 try {
    const latitude = 51.5074; // londres
    const longitude = -0.1278;
    const temperatureUnit = "celsius";
    const weatherData = await fetchWeatherData(latitude, longitude, temperatureUnit);
    data.value = weatherData;
 } catch (err) {
    error.value = err;
 }
};

watchEffect(() => {
 fetchData();
}); 


watchEffect(() => {
 if (data.value) {
   console.log(data.value);
 }
});


</script>

<template>

<main class="main">

<AsideMenu/>

<AllView/>

</main>
 
  
</template>

<style scoped lang="scss" >

.main{
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: minmax(27rem ,30%) 1fr;

  @media (max-width: map-get($map: $breakpoint-em, $key: bp-column)) {
    grid-template-columns: 1fr;
  }

}







</style>