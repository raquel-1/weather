<script setup>
import AsideMenu from "./components/AsideMenu.vue";
import AllView from './components/AllView.vue'
import { useWeatherStore } from "@/stores/weatherStore.js"

const weatherStore = useWeatherStore()

function refreshPage() {
      window.location.reload();
  }
console.log(weatherStore.error)

</script>

<template>


<main class="main" v-if="weatherStore.data && !weatherStore.error">
 <AsideMenu/>
 <AllView/>
</main>
<h1 v-else-if="!weatherStore.data" class="load-message">
 Loading...
</h1>
<h1 v-else-if="weatherStore.error" class="error-message">
 Error...
 <button @click="refreshPage" class="refresh-button">Refresh</button>
</h1>


  
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