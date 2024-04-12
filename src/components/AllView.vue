<script setup>
import IconWindToday from "@/components/icons/IconWindToday.vue"
import { ref} from 'vue';
import { useWeatherStore } from "@/stores/weatherStore.js"
import { formatDate } from "@/composables/formatDate.js"
import { getWeatherIcon } from "@/composables/getWeatherIcon.js"
import { fetchWeatherData } from "@/composables/fetchWeatherData.js"



//originalArray.slice(5)
const weatherStore = useWeatherStore()
weatherStore?.data.daily.time.slice(5)//elimino primera pos


function truncate(value) {
    return Math.floor(parseFloat(value));
}



//ºC O ºF

const selectedUnit = ref('celsius')
//:class="{ 'mode__button-leter--selected': selectedUnit === 'celsius' }"

const convert = (value) => {
    fetchWeatherData(weatherStore?.data.latitude, weatherStore?.data.longitude, value, weatherStore) 
    selectedUnit.value = value;

};




</script>

<template>

<section class="all-view">
    <div class="all-view__mode mode">
        <button class="mode__button-leter " @click="convert('celsius')" :class="{ 'mode__button-leter--selected': weatherStore?.temperatureUnit === 'celsius' }">
            ºC
        </button>
        <button class="mode__button-leter" @click="convert('fahrenheit')" :class="{ 'mode__button-leter--selected': weatherStore?.temperatureUnit === 'fahrenheit' }">
            ºF
        </button>
    </div>
    <div class="all-view__week week">
        <div class="week__day" v-for="(item, index) in weatherStore?.data.daily.time.slice(1)" :key="index">
            <p class="title">{{ index === 0 ? 'Tomorrow' : formatDate(item) }}</p>
            <div class="icon">
                <component :is="getWeatherIcon(weatherStore?.data.daily.weather_code[index])" />
            </div>
            <div class="degrees">

                <span v-if="weatherStore?.temperatureUnit==='fahrenheit'" >
                    {{ truncate(weatherStore?.data.daily.temperature_2m_max[index])  }}ºF
                </span>
                <span v-else >
                    {{ truncate(weatherStore?.data.daily.temperature_2m_max[index])  }}ºC
                </span>


                <span v-if="weatherStore?.temperatureUnit==='fahrenheit'" class="dark">
                    {{ truncate(weatherStore?.data.daily.temperature_2m_min[index])  }}ºF
                </span>
                <span v-else class="dark">
                    {{ truncate(weatherStore?.data.daily.temperature_2m_min[index])  }}ºC
                </span>


            </div>
        </div>


    </div>
    <div class="all-view__todays today">
        <h2 class="today__title-today">Today´s Highlights</h2>
        <ul class="today__info info-today">
            <li class=" info-today__wind">
                <p class="title">Wind status</p>
                <h2 class="number">{{weatherStore?.data.current.wind_speed_10m }} m/s</h2>
                <span class="icon">
                    <IconWindToday/>
                    <p>WSW</p>
                </span>

            </li>
            <li class=" info-today__humidity">
                <p class="title">Humidity</p>
                <h2 class="number">{{weatherStore?.data.current.relative_humidity_2m }}%</h2>
                <div class="range-container">
                    <div class="range-container__labels">
                        <label>0</label>
                        <label>50</label>
                        <label>100</label>
                    </div>
                    <input
                        class="range-container__slider"
                        type="range"
                        readonly
                        :style="`--value: ${weatherStore?.data.current.relative_humidity_2m };`"
                        max="100"
                    />
                </div>
            </li>
            <li class=" info-today__visibility">
                <p class="title">Cloud Cover</p>
                <h2 class="number">{{weatherStore?.data.current.cloud_cover }} %</h2>
            </li>
            <li class=" info-today__pressure">
                <p class="title">Air Presure</p>
                <h2 class="number">{{truncate(weatherStore?.data.current.surface_pressure )}} mb</h2>
            </li>
        </ul>
    </div>
    <div class="all-view__message">
        <span>created by Raquel</span>
    </div>

</section>

 
  
</template>

<style scoped lang="scss" >

.all-view{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4em 1fr 2fr 4em;
    padding: 3em 6em;
    padding-bottom: 2em;

    
    
    @media (max-width: map-get($map: $breakpoint-em, $key: bp-small-pc)) {
        padding: 3em;
    }
    @media (max-width: 48em) {
        grid-template-rows: 4em 1fr 1fr 4em;
        padding: 1em;
    }

    &__mode{
        @include flex($direction: row, $align_items: flex-start, $justify_content: flex-end);
    }
    .mode{
        &__button-leter{
            background-color: map-get($map: $colors, $key: c-grey); 
            color: map-get($map: $colors, $key: c-white); 
            width: 3em;
            height: 3em;
            margin-left: .6em;
            border: none; 
            border-radius: 100%;
            cursor: pointer;
            font-size: map-get($map: $font-size, $key: fs-button);
            padding: 1em;

            &--selected{
                background-color: map-get($map: $colors, $key: c-white);
                color: map-get($map: $colors, $key: c-black);  
            }

        }
    }
    
    &__week{
        @include flex($direction: row, $align_items: center, $justify_content: space-between);
        flex-wrap: wrap;

        @media (max-width: map-get($map: $breakpoint-em, $key: bp-small-pc)) {
         min-height: 8em;
        }
    }
    .week{
        &__day{
            padding: 1em 0;
            background-color: map-get($map: $colors, $key: c-medium-blue);
            width: 8em;
            margin: 1em 0;
            @include flex($direction: column, $align_items: center, $justify_content: space-evenly);

            @media (max-width: 48em) {
                margin: 1em;
            }

            .title {
                font-size: map-get($map: $font-size, $key: fs-small-title);
                padding-bottom: 0.5em;
            }
            .icon {
                width: 6em;
                height: 7em;
            }
            .degrees{
                @include flex($direction: row, $align_items: center, $justify_content: space-between);
                padding-top: .5em;
                width: 70%;
                font-size: 1em;
                .dark{
                    opacity: .7;
                }
            }
        }
    }

    &__todays{
        padding: 0;
        margin: 0;
    }
    .today{
        &__title-today{
            font-size: 2em;
            padding: 1em 0 .7em 0;
        }
        &__info{
            list-style: none;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 3fr 2.5fr;
            gap: 2em 3em;
            @media (max-width: 46em) {
                grid-template-columns: 1fr;
            }
            
        }
    }
    .info-today{
        &__wind{
            @extend %today-weather-box;
            .icon{
                padding-top: 1em;
                @include flex($direction: row, $align_items: center, $justify_content: center);
            }
        }
        &__humidity{
            @extend %today-weather-box;
            .range-container {
                width: 100%;
                position: relative;
                padding: 0 2em;
                margin-top: 1em;

                &__labels{
                    @include flex($direction: row, $align_items: center, $justify_content: space-between);
                    padding: 0 .8em;
                }

                &__slider {
                    -webkit-appearance: none; /* Quita los estilos predeterminados */
                    appearance: none;
                    width: 100%;
                    height: 1em;
                    border-radius: .5em;
                    background: linear-gradient(to right,  map-get($map: $colors, $key: c-yellow) 0%,  map-get($map: $colors, $key: c-yellow) calc((var(--value) / 100) * 100%),  
                                                map-get($map: $colors, $key: c-white) calc((var(--value) / 100) * 100%),  map-get($map: $colors, $key: c-white) 100%);  
                    
                    /* Para navegadores basados en WebKit (Chrome, Safari) */
                    &::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        visibility: hidden;
                    }
                    /* Para Firefox */
                    &::-moz-range-thumb {
                    visibility: hidden;
                    }
                    /* Para Internet Explorer */
                    &::-ms-thumb {
                        visibility: hidden;
                    }

                }

            }
        }
        &__visibility{
            @extend %today-weather-box;
        }
        &__pressure{
            @extend %today-weather-box;
        }
        
    }

    &__message{
        @include flex($direction: row, $align_items: flex-end, $justify_content: center);
    }
}







</style>