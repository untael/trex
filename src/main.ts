import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import router from './router'
import './main.scss'
createApp(App)
  .use(router)
  .use(createVuestic({
    config: {
      colors: {
        currentPresetName: 'dark'
      }
    }
  }))
  .mount('#app')
