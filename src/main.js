import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/style.css'
import { Icon } from '@iconify/vue'
import router from './router'  // <- add this

const app = createApp(App)
app.component('Icon', Icon)
app.use(router) 
app.mount('#app')
