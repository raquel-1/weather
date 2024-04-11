import './assets/scss/index.scss'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


//pinia

import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');




