<script setup>

import IconCros from"@/components/icons/IconCros.vue"


</script>

<template>

    <aside class="aside">
    
    
        <div class="aside__button button">
            <button  class="button__cros">
                <IconCros/>
            </button>
        </div>
        <div class="aside__search">
                <input type="text" class="input-search" placeholder="Search location" />
                <button class="button-search">Search</button>
        </div> 
        <div class="aside__result result">
            <div class="result__location">
                <h3 class="title">Madrid</h3>
            </div>
            <div class="result__location">
                <h3  class="title">Barcelona</h3>
            </div>
            <div class="result__location">
                <h3  class="title">Alicante</h3>
            </div>
            
        </div>
        
    
    </aside>
     
      
    </template>
    
<style scoped lang="scss" >
    
    .aside{
        width: 100%;
        height: 100%;
        background-color: map-get($map: $colors, $key: c-medium-blue);
        padding: 3em;
        margin: 0;
        overflow: hidden;
        min-width: 26.5em;
        
    
        display:grid;
        grid-template-rows:  4em 4em 1fr;
        grid-template-columns: 1fr;
    
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
            grid-template-rows: repeat(3, 3em); /* Distribuir en columnas, cada una de 200px de ancho mínimo */
            gap: 10px; /* Espacio entre las columnas */
        }
        .result{
            &__location{
                height: 3em;
                @include flex($direction: row, $align_items: center, $justify_content: flex-start);

                border: none;
                transition: border 0.3s ease; 
                padding: 0.1em; // Añadir relleno para compensar el espacio del borde

                .title{
                    position: absolute;
                    font-size: map-get($map: $font-size, $key: fs-small-title);
                    margin-left: 1rem;
                }

                &:hover{
                    border: 0.1em solid map-get($map: $colors, $key: c-white);
                    padding: 0; // Eliminar el relleno al hacer hover
                }
            }
        }
        
        
    
    
    
    }
    
    
    
    
    </style>