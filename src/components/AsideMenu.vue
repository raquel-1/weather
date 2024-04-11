<script setup>
import { ref } from 'vue';

import AsideMenuWeather from "@/components/AsideMenuWeather.vue"
import AsideMenuSearch from "@/components/AsideMenuSearch.vue"

const weathertoday = ref(true);

const toggleComponent = () => {
  weathertoday.value = !weathertoday.value;
};

</script>

<template>
    
    <AsideMenuWeather v-if="weathertoday" :toggle-component="toggleComponent" @toggleComponent="toggleComponent"/>

    <AsideMenuSearch v-else :toggle-component="toggleComponent" @toggleComponent="toggleComponent" />
  
</template>

<style scoped lang="scss" >

    








</style>