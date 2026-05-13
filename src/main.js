// main.js
import { createApp } from 'vue'
import App from './App.vue'

<<<<<<< HEAD
import router from './router'  // <- add this

const app = createApp(App)

app.use(router) 
app.mount('#app')
=======
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

const app = createApp(App)

app.use(router)


app.mount('#app')
>>>>>>> cbb5cb6777e24a8c14e2f68bb60bc3cbc4f447da
