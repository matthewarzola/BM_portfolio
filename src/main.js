import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/style.css'

import router from './router'  // <- add this

const app = createApp(App)

app.use(router) 
app.mount('#app')
