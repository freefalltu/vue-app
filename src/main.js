import './assets/main.css'

import { createApp } from 'vue'
import App from "src/App"

const app = createApp(App)

app.use(router)

app.mount('#app')
