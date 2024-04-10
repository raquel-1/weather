<script setup>
import AsideMenu from "./components/AsideMenu.vue";
import AllView from './components/AllView.vue'

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