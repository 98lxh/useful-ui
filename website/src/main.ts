import { createApp } from 'vue'
import App from './App.vue'

import UsefulUi from '@useful-ui/core'
import '@useful-ui/theme/index.scss'
import "./basic.scss"

const app = createApp(App)
app.use(UsefulUi)
app.mount('#app')
