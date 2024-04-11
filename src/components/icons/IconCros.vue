<template>
    <!-- SVG de la cruz -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
      <path  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
</template>

<style scoped lang="scss">
.icon {
  width: 2em; /* Tamaño del icono */
  height: 2em;

  path{
    fill: map-get( $map: $colors, $key: c-medium-blue)
}
}


</style>