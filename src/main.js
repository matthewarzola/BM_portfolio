import { createApp } from 'vue'
import App from './App.vue'
import home from './views/Home.vue'
import navbar from './components/Navbar.vue'
import './assets/styles/style.css'

createApp(App).mount('#app')
createApp(home).mount('#home')
createApp(navbar).mount('#navbar')