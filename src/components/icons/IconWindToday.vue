<template>
<div class="circle">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-up">
    <path d="M17 17L7 7m10 0v10h-10" />
  </svg>
</div>
</template>

<style scoped lang="scss">
.circle {
  width:2em ;
  height: 2em;
  border-radius: 50%;
  background-color: map-get($map: $colors, $key: c-grey);  
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease; 
  margin-right: .5em;
}

</style>