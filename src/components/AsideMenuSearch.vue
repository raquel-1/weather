<script setup>
import { ref } from "vue";
import IconCros from "@/components/icons/IconCros.vue";
import { useWeatherStore } from "@/stores/weatherStore.js";
import { fetchWeatherData } from "@/composables/fetchWeatherData.js";
import { searchCity } from "@/composables/searchCity.js";

const emit = defineEmits(["toggleComponent"]);
const weatherStore = useWeatherStore();

const query = ref("");
const results = ref([]);
const loading = ref(false);
const error = ref("");

const handleSearch = async () => {
  if (!query.value.trim()) return;
  loading.value = true;
  error.value = "";

  results.value = await searchCity(query.value);
  loading.value = false;

  if (results.value.length === 0) {
    error.value = "No se encontraron ciudades.";
  }
};

const handleCityClick = (city) => {
  if (!city.latitude || !city.longitude) return;

  const cityLabel = `${city.name} (${city.country})`;

  fetchWeatherData(
    city.latitude,
    city.longitude,
    weatherStore.temperatureUnit,
    weatherStore
  );
  weatherStore.setCurrentCity(cityLabel);
  weatherStore.addRecentCity(cityLabel);

  emit("toggleComponent");
};


const handleRecentClick = async (cityName) => {
  loading.value = true;
  const res = await searchCity(cityName);
  loading.value = false;
  if (res.length) handleCityClick(res[0]);
};
</script>

<template>
  <aside class="aside">
    <div class="aside__button button">
      <button class="button__cros" @click="emit('toggleComponent')">
        <IconCros />
      </button>
    </div>


    <div class="aside__search">
      <input
        v-model="query"
        type="text"
        class="input-search"
        placeholder="Search location"
        @keyup.enter="handleSearch"
      />
      <button class="button-search" @click="handleSearch">Search</button>
    </div>

    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <!-- RESULTADOS DE LA API -->
    <ul class="aside__result result api" v-if="results.length">
      <li
        class="result__location"
        v-for="(city, index) in results"
        :key="index"
        @click="handleCityClick(city)"
      >
        <h3 class="title">{{ city.name }} ({{ city.country }})</h3>
      </li>
    </ul>


    <!-- CIUDADES RECIENTES -->
    <ul class="aside__result result" v-if="weatherStore.recentCities.length">
      <li
        class="result__location"
        v-for="(city, i) in weatherStore.recentCities"
        :key="i"
        @click="handleRecentClick(city)"
      >
        <h3 class="title">{{ city }}</h3>
      </li>
    </ul>

  </aside>
</template>

    
<style scoped lang="scss" >
    
    .aside{
        width: 100%;
        background-color: map-get($map: $colors, $key: c-medium-blue);
        padding: 3em;
        margin: 0;
        overflow: hidden;
        min-width: 26.5em;
    
        display:grid;
        grid-template-rows:  4em 4em 1fr;
        grid-template-columns: 1fr;


        @media (max-width: map-get($map: $breakpoint-em, $key: bp-column)) {
            min-height: 100vh;
            min-width: 100vw;
        }

        @media (max-width: 48em) {
            padding: 1em;
        }

    
        &__button{
            @include flex($direction: row, $align_items: flex-start, $justify_content: flex-end);
        }
        .button__cros{
            cursor:pointer;
        }
       
        &__search{
            @include flex($direction: row, $align_items: center, $justify_content: center);

            .input-search{
                flex-grow: 1;
                background-color: map-get($map: $colors, $key: c-medium-blue);
                border: 0.2em solid map-get($map: $colors, $key: c-white);
                padding: .9em 1.5em;
                margin-right: .5em;

                &::placeholder {
                    color: map-get($map: $colors, $key: c-white);; 
                }
            }
            .button-search{
                background-color: map-get($map: $colors, $key: c-blue); 
                color: map-get($map: $colors, $key: c-white); 
                padding: .8em 1.5em;
                border: none; 
                cursor: pointer;
                font-size: map-get($map: $font-size, $key: fs-button);

            }
        }

        .result{
            &__location{
                height: 2.8em;
                @include flex($direction: row, $align_items: center, $justify_content: flex-start);

                border: 0.1em solid transparent;;
                transition: border 1s ease, padding 1s ease;
                padding: 0.1em; // Añadir relleno para compensar el espacio del borde
                margin-bottom: 0.5em;

                .title{
                    position: absolute;
                    font-size: map-get($map: $font-size, $key: fs-small-title);
                    margin-left: 1em;
                }

                &:hover{
                    border: 0.1em solid map-get($map: $colors, $key: c-white);
                    padding: 0; 
                }
            }
        }
    }
    .aside__result.api {
      max-height: 18em;   // altura máxima antes de que aparezca scroll
      border-bottom: 0.1em solid map-get($map: $colors, $key: c-blue);
      padding-bottom: 1em;
      margin-bottom: 1em;
    }
    </style>