import { createApp } from 'vue'

import "@/styles/index.scss"
import '@/assets/scss/global-fonts.scss'

import App from './App.vue'

import router from '@/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
