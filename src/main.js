import './assets/scss/index.scss'

import { createApp } from 'vue'
import App from './App.vue'


import { createPinia } from 'pinia'

import { fetchWeatherData } from "@/composables/fetchWeatherData.js"
import { useWeatherStore } from '@/stores/weatherStore.js'

//pinia


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')


const weatherStore = useWeatherStore()
fetchWeatherData(40.4165, -3.7026, 'celsius', weatherStore)


