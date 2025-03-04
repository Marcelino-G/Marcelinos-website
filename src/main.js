import './assets/main.css'

import { createApp } from 'vue'
import {createPinia} from "pinia"
import { createRouter } from './router/router.js'
import App from './App.vue'

const pinia = createPinia();
const router = createRouter();



const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');

// createApp(App).mount('#app')
