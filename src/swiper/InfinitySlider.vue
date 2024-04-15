<script setup>
// Importa los componentes de Swiper para Vue
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper/core';


import { ref } from 'vue';
// Importa los estilos de Swiper y sus componentes
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';



const slides = ref([
 { id: 1, content: 'Slide 1' },
 { id: 2, content: 'Slide 2' },
 { id: 3, content: 'Slide 3' },
 { id: 4, content: 'Slide 4' },
 { id: 5, content: 'Slide 5' },
 { id: 6, content: 'Slide 6' },
 { id: 7, content: 'Slide 7' },
 { id: 8, content: 'Slide 8' }
]);

const octlicatedSlides = [...slides.value, ...slides.value, ...slides.value, ...slides.value, ...slides.value, ...slides.value];

/*
 mousewheel="false" <!-- Deshabilita el desplazamiento con el mouse -->
    keyboard="false" <!-- Deshabilita la navegación con el teclado -->

*/
const swiperOptions = {
 autoplay: {
    delay: 2000, // Tiempo en milisegundos entre transiciones automáticas
    disableOnInteraction: false, // Continúa el autoplay incluso después de la interacción del usuario
 },
 loop: true, // Habilita el loop infinito
 mousewheel:false,
 keyboard:false,
};
</script>

<template>
<swiper
    :options="swiperOptions"
    :slides-per-view="8"
    :space-between="10"
    class="swiper-container"
 >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      {{ slide.content }}
    </swiper-slide>
    <swiper-slide v-for="(slide, index) in slides" :key="`duplicate-${index}`">
      {{ slide.content }}
    </swiper-slide>
 </swiper>
</template>
  
  

  
  <style scoped>
  .swiper-container {
    width: 100%;
    padding: 3.125em 0;
  }
  </style>
  