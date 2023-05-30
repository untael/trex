import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import router from './router'
import './main.scss'
import { messages } from './i18n/translations'

const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale: 'pl',
  fallbackLocale: 'pl',
  messages: {
    ...messages
  }
})
app
  .use(router)
  .use(i18n)
  .use(createVuestic({
    config: {
      colors: {
        currentPresetName: 'dark',
      },
    },
  }))
  .mount('#app')
