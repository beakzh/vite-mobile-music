import { createApp } from 'vue'
import './global.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/iconfont/iconfont.css'
import './permission'
import 'lib-flexible/flexible'

createApp(App).use(router).use(createPinia()).use(Vant).mount('#app')
