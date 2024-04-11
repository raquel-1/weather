<script setup>
import { ref } from 'vue';

import IconClearSky from '@/components/icons/iconsWeather/IconClearSky.vue'
import IconUbi from '@/components/icons/IconUbi.vue'


import { useWeatherStore } from "@/stores/weatherStore.js"
const weatherStore = useWeatherStore()

console.log(weatherStore.data);

const emit = defineEmits(['toggleComponent'])
//defino mi emit pra no tener q hacer <button @click="$emit('someEvent')">click me</button>




//para ver el nombre de la ciudad
import cities from "@/composables/cities.js"

function findCityName(latitude, longitude) {
 const city = cities.find(c => c.latitude == latitude && c.longitude == longitude);
 return city ? city.name : 'Unknown City';
}


const cityName = ref(findCityName(weatherStore.data.latitude, weatherStore.data.longitude));

</script>

<template>


    <aside class="aside">
    
    
    <div class="aside__buttons">
        <button class="button-search" @click="emit('toggleComponent')" >Search for places</button>
        <button class="button-diana">.</button>
    </div>
    <div class="aside__info info">
        <div class="info__icon">
            <IconClearSky />
        </div>
        <div class="info__degres"><h1 class="number">{{weatherStore?.data.current.temperature_2m }}ºC</h1></div>
        <div class="info__weather"><h2 class="weather">Sun</h2></div>
        <div class="info__time time">
            <div class="time__date">{{weatherStore?.data.latitude }}</div>
            <div class="time__ubi">
                <IconUbi/>
                <div >{{ cityName }}</div>
            </div>
            
        </div>
        
    </div>

</aside>


   
     
      
</template>
    
<style scoped lang="scss" >
    
    
    .aside{
        width: 100%;
        background-color: map-get($map: $colors, $key: c-medium-blue);
        margin: 0;
        overflow: hidden;
        min-width: 26.5em;
        
    
        display:grid;
        grid-template-rows:  4em 1fr;

        padding: 3em;

        @media (max-width: map-get($map: $breakpoint-em, $key:bp-column)) {
            min-height: 100vh;
            min-width: 100vw;
            padding: 1em;
        }
    
    
        &__buttons{
    
    
            @include flex($direction: row, $align_items: center, $justify_content: space-between);
            overflow: hidden;
    
            .button-search{
                background-color: map-get($map: $colors, $key: c-grey); 
                color: map-get($map: $colors, $key: c-white); 
                padding: .8em 1.5em;
                border: none; 
                cursor: pointer;
                font-size: map-get($map: $font-size, $key: fs-button);
            }
    
            .button-diana{
                background-color: map-get($map: $colors, $key: c-grey); 
                color: map-get($map: $colors, $key: c-white); 
                width: 3em;
                height: 3em;
                border: none; 
                border-radius: 100%;
                cursor: pointer;
                font-size: map-get($map: $font-size, $key: fs-button);
            }
        }
        &__info{
            overflow: hidden;
            display: grid;
            grid-template-rows: 40% 30% repeat(2,15%);
        }
    
        .info{
            &__icon{
                @include flex();
                
                .icon {
                    width: 14em; 
                    height: auto; 
                    fill:blue;
                }
            }
            &__degres{
                @include flex();
                .number{
                    font-size: map-get($map: $font-size, $key: fs-big-degre);
                }
            }
            &__weather{
                @include flex();
                .weather{
                    font-size: map-get($map: $font-size, $key: fs-big-weather);
                }
            }
            &__time{
                display:grid;
                grid-template-rows: repeat(2,1fr);
                gap:.7em;
            }
            .time{
                &__date{
                    @include flex($direction: row, $align_items: flex-end, $justify_content: center);
                }
                &__ubi{
                    @include flex($direction: row, $align_items: flex-start, $justify_content: center);
                    margin-top: .5em;
                }
            }
    
        }
        
    
    
    
    }
    
</style>