import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/myfont.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(router).mount('#app')
