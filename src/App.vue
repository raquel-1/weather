<script setup>
import AsideMenu from "./components/AsideMenu.vue";
import AllView from './components/AllView.vue'

import { useWeatherStore } from "@/stores/weatherStore.js"

const weatherStore = useWeatherStore()
</script>

<template>


<main class="main" v-if="weatherStore.data  != null ">
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