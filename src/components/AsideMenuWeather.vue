

<template>

    <aside class="aside">
    
    
        <div class="aside__buttons">
            <button class="button-search">Search for places</button>
            <button class="button-diana">.</button>
        </div>
        <div class="aside__info info">
            <div class="info__icon">
                <span class="icon">
                    partly_cloudy_day
                </span>
            </div>
            <div class="info__degres"><h1 class="number">15ºC</h1></div>
            <div class="info__weather"><h2 class="weather">Sun</h2></div>
            <div class="info__time time">
                <div class="time__date">Today . Fri, 5 Jun</div>
                <div class="time__ubi">Helsinki</div>
            </div>
            
        </div>
    
    </aside>
     
      
    </template>
    
    <style scoped lang="scss" >
    
    
    .aside{
        width: 20%;
        height: 100%;
        background-color: map-get($map: $colors, $key: c-medium-blue);
        padding: 3em;
        margin: 0;
        overflow: hidden;
        
    
        display:grid;
        grid-template-rows:  4em 1fr;
    
    
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
                }
            }
    
        }
        
    
    
    
    }
    
    
    
    
    </style>