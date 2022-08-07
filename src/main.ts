import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from '~/locales/i18n'
import App from '~/App.vue'
import router from '~/router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(createPinia())
app.mount('#app')
