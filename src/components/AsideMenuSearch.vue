<script setup>
import IconCros from"@/components/icons/IconCros.vue"

import { useWeatherStore } from "@/stores/weatherStore.js"
import { fetchWeatherData } from "@/composables/fetchWeatherData.js"
import cities from "@/composables/cities.js"

//controla abrir cerrar 
const emit= defineEmits(['toggleComponent'])

//para modificar store
const weatherStore = useWeatherStore()

const handleCityClick = (cityName) => {
    const city = cities.find(c => c.name === cityName)
    if (city) {
        fetchWeatherData(city.latitude, city.longitude, 'celsius', weatherStore)
        emit('toggleComponent')
    }
};

</script>

<template>

    <aside class="aside">
    
        <div class="aside__button button">
            <button  class="button__cros"  @click="emit('toggleComponent')">
                <IconCros/>
            </button>
        </div>
        <div class="aside__search">
                <input type="text" class="input-search" placeholder="Search location" />
                <button class="button-search">Search</button>
        </div> 
        <ul class="aside__result result">
            <li class="result__location" @click="handleCityClick('Madrid')">
                <h3 class="title">Madrid</h3>
            </li>
            <li class="result__location" @click="handleCityClick('Barcelona')">
                <h3  class="title">Barcelona</h3>
            </li>
            <li class="result__location" @click="handleCityClick('Alicante')">
                <h3  class="title">Alicante</h3>
            </li>
            <li class="result__location" @click="handleCityClick('New York')">
                <h3  class="title">New York</h3>
            </li>
            <li class="result__location" @click="handleCityClick('London')">
                <h3  class="title">London</h3>
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

        &__result{
            display: grid;
            grid-template-rows: repeat(5, 3em); 
            gap: 0.625em; 
            list-style: none;
        }
        .result{
            &__location{
                height: 3em;
                @include flex($direction: row, $align_items: center, $justify_content: flex-start);

                border: 0.1em solid transparent;;
                transition: border 1s ease, padding 1s ease;
                padding: 0.1em; // Añadir relleno para compensar el espacio del borde

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
    
    
    
    
    </style>