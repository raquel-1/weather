<script setup>
import AsideMenu from "./components/AsideMenu.vue";
import AllView from "./components/AllView.vue";
import { useWeatherStore } from "@/stores/weatherStore.js";
import { fetchWeatherData } from "@/composables/fetchWeatherData.js";

const weatherStore = useWeatherStore();

function refreshPage() {
  window.location.reload();
}

const initWeather = () => {
  const defaultCity = {
    name: "Madrid",
    latitude: 40.4165,
    longitude: -3.7026,
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position;
        if (latitude && longitude) {
          fetchWeatherData(latitude, longitude, weatherStore.temperatureUnit || 'celsius', weatherStore);
          weatherStore.setCurrentCity("Your Location");
        } else {
          fetchWeatherData(defaultCity.latitude, defaultCity.longitude, 'celsius', weatherStore);
          weatherStore.setCurrentCity(defaultCity.name);
        }
      },
      (error) => {
        console.warn("Geolocation failed, using default city.", error);
        fetchWeatherData(defaultCity.latitude, defaultCity.longitude, 'celsius', weatherStore);
        weatherStore.setCurrentCity(defaultCity.name);
      }
    );
  } else {
    fetchWeatherData(defaultCity.latitude, defaultCity.longitude, 'celsius', weatherStore);
    weatherStore.setCurrentCity(defaultCity.name);
  }
};



initWeather();
</script>

<template>
  <div v-if="weatherStore">
    <main v-if="weatherStore.data && !weatherStore.error" class="main">
      <AsideMenu />
      <AllView />
    </main>

    <h1 v-else-if="!weatherStore.data" class="load-message">
      Loading...
    </h1>

    <h1 v-else-if="weatherStore.error" class="error-message">
      Error...
      <button @click="refreshPage" class="refresh-button">Refresh</button>
    </h1>
  </div>
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
.load-message{
  color: map-get($map: $colors, $key: c-white);
  @extend %title-load-error;
}
.error-message {
    color: map-get($map: $colors, $key: c-red);
    @extend %title-load-error;
    
    .refresh-button {
      background-color: map-get($map: $colors, $key: c-red);
      display: block;
      margin: 0 auto;
      color: map-get($map: $colors, $key: c-white);
      border: none;
      padding: 0.5em 1em;
      margin-top: 1em;
      font-size: .3em;
      cursor: pointer;
    }
  }






</style>