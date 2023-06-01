import './assets/main.css'

// Honeywell PDA EDA61K Android Webview 66.03359.158 fixed up globalThis is not defiend
import '@ungap/global-this'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css'
const app = createApp(App)

app.use(Vant).use(store).use(router)

app.mount('#app')
