<script setup>




</script>

<template>

<div class="all-view">

    <div class="all-view__mode mode">
        <button class="mode__button-leter">ºC</button>
        <button class="mode__button-leter">ºF</button>
    </div>
    <div class="all-view__week">
        
    </div>
    <div class="all-view__todays">

    </div>

</div>

 
  
</template>

<style scoped lang="scss" >

    
.all-view{
    background-color: antiquewhite;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4em 1fr 2fr;

    &__mode{
        background-color: rgb(66, 194, 66);
    }
    .mode{
        &__button-leter{
            background-color: map-get($map: $colors, $key: c-grey); 
            color: map-get($map: $colors, $key: c-white); 
            width: 3em;
            height: 3em;
            border: none; 
            border-radius: 100%;
            cursor: pointer;
            font-size: map-get($map: $font-size, $key: fs-button);
            font-size: 1em;
        }
    }
    &__week{
        background-color: darkmagenta;
    }
}







</style>