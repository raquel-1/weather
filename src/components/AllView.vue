<script setup>


</script>

<template>

<section class="all-view">
    <div class="all-view__mode mode">
        <button class="mode__button-leter">ºC</button>
        <button class="mode__button-leter">ºF</button>
    </div>
    <div class="all-view__week">
        
    </div>
    <div class="all-view__todays today">
        <h2 class="today__title-today">Today´s Highlights</h2>
        <ul class="today__info info-today">
            <li class="today-element info-today__wind">
                <p class="title">Wind status</p>
                <h2 class="number">7mph</h2>
            </li>
            <li class="today-element info-today__humidity">
                <p class="title">Humidity</p>
                <h2 class="number">84%</h2>
                <div class="range-container">
                    <div class="labels">
                        <label>0</label>
                        <label>50</label>
                        <label>100</label>
                    </div>
                    <input type="range" min="0" max="100" value="50" class="slider" id="myRange" readonly>
                </div>
            </li>
            <li class="today-element info-today__visibility">
                <p class="title">Visibility</p>
                <h2 class="number">6,4 miles</h2>
            </li>
            <li class="today-element info-today__pressure">
                <p class="title">Air Presure</p>
                <h2 class="number">998 bm</h2>
            </li>
        </ul>
    </div>
    <div class="all-view__message">
        <span>created by Raquel</span>
    </div>

</section>

 
  
</template>

<style scoped lang="scss" >
.range-container {
 width: 100%;
 position: relative;
}

.labels {
 display: flex;
 justify-content: space-between;
 padding: 0 10px;
}

.slider {
 -webkit-appearance: none;
 width: 100%;
 height: 15px;
 border-radius: 5px;
 background: linear-gradient(to right, yellow 0%, yellow 50%, #d3d3db 50%, #d3d3db 100%);
 outline: none;
 opacity: 0.7;
 -webkit-transition: .2s;
 transition: opacity .2s;
}

.slider:hover {
 opacity: 1;
  cursor: not-allowed; /* Establece el cursor del mouse en 'no permitido' cuando se pasa por encima del control deslizante */
}










    
.all-view{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4em 1fr 2fr 4em;
    padding: 3em 6em;
    padding-bottom: 2em;

    &__mode{
        background-color: rgb(66, 194, 66);
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
        }
    }
    
    &__week{
        background-color: darkmagenta;
    }

    &__todays{
        background-color:crimson;
        padding: 0;
        margin: 0;
    }
    .today{
        &__title-today{
            font-size: 2em;
        }
        &__info{
            list-style: none;
            display: grid;
            grid-template-columns: repeat(2, 3fr);
            grid-template-rows: repeat(2, 2fr);
            gap: 2em 3em;
            background-color: coral;
        }
    }
    .info-today{
        .today-element {
            @include flex($direction: column, $align_items: center, $justify_content: space-between);
            background-color: map-get($map: $colors, $key: c-medium-blue); 
            padding: 1.5em;
            .title{
                font-size: map-get($map: $font-size, $key: fs-small-title);
                padding-bottom: .5em;
            }
            .number{
                font-size: 3em;
            }
        }
    }

    &__message{
        @include flex($direction: row, $align_items: flex-end, $justify_content: center);
    }
}







</style>