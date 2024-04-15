<script setup>
import IconUbi from '@/components/icons/IconUbi.vue'
import IconLocation from '@/components/icons/IconLocation.vue'
import { fetchWeatherData } from "@/composables/fetchWeatherData.js"
import { useWeatherStore } from "@/stores/weatherStore.js"
import { formatDate } from "@/composables/formatDate.js"
import { getWeatherIcon } from "@/composables/getWeatherIcon.js"
import { getWeatherName } from "@/composables/getWeatherIcon.js"
import cities from "@/composables/cities.js"


const weatherStore = useWeatherStore()

const emit = defineEmits(['toggleComponent'])
//defino mi emit pra no tener q hacer <button @click="$emit('someEvent')">click me</button>

function findCityName(latitude, longitude) {
    const roundedLatitude = parseFloat(latitude.toFixed(2));
    const roundedLongitude = parseFloat(longitude.toFixed(2));

    const city = cities.find(c => parseFloat(c.latitude.toFixed(2)) === roundedLatitude && parseFloat(c.longitude.toFixed(2)) === roundedLongitude);
    return city ? city.name : 'Unknown City';
}

const handleCityMadrid = () => {
    fetchWeatherData(40.4165, -3.7026, weatherStore?.temperatureUnit, weatherStore)
};

</script>

<template>


    <aside class="aside">
    
    
    <div class="aside__buttons">
        <button class="button-search" @click="emit('toggleComponent')" >Search for places</button>
        <button class="button-diana"  @click="handleCityMadrid()">
            <IconLocation/>
        </button>
    </div>
    <div class="aside__info info">
        <div class="info__icon">
            <component :is="getWeatherIcon(weatherStore?.data.current.weather_code)" />
        </div>
        <div class="info__degres">

            <h1 v-if="weatherStore?.temperatureUnit==='fahrenheit'" class="number">
                    {{ weatherStore?.data.current.temperature_2m }}ºF
            </h1>
            <h1 v-else class="number">
                {{ weatherStore?.data.current.temperature_2m  }}ºC
            </h1>

            
        </div>
        <div class="info__weather"><h2 class="weather">{{  getWeatherName(weatherStore?.data.current.weather_code)}}</h2></div>
        <div class="info__time time">
            <div class="time__date">Today . {{formatDate( weatherStore?.data.current.time)}}</div>
            <div class="time__ubi">
                <IconUbi/>
                <div >{{ findCityName(weatherStore.data.latitude, weatherStore.data.longitude) }}</div>
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
                width: 2.5em;
                height: 2.5em;
                border: none; 
                border-radius: 100%;
                cursor: pointer;
                font-size: map-get($map: $font-size, $key: fs-button);
                @include flex($direction: row, $align_items: center, $justify_content: center);
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