// main.js
import { createApp } from 'vue'
import App from './App.vue'

import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import { createRouter, createWebHistory } from 'vue-router'

const queryClient = new QueryClient()

const routes = [
//   {
//     path: '/',
//     component: () => import('./pages/Portfolio.vue'),
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     component: () => import('./pages/not-found.vue'),
//   },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App)

app.use(router)

app.use(VueQueryPlugin, {
  queryClient,
})

app.mount('#app')