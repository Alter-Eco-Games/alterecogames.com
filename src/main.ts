import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import routes from 'virtual:generated-pages'
import i18n from '~/locales/i18n'
import App from '~/App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(createPinia())
app.mount('#app')
