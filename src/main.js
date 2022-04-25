import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import '@/style/css/index.css'
import 'element-plus/dist/index.css'
import '@/style/css/flags.min.css'
import '@/style/css/products.min.css'
import router from './router'
// import VueI18n from 'vue-i18n'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createPinia } from 'pinia'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(ElementPlus, { locale: zhCn })
app.use(createPinia()).use(router) //.use(VueI18n)
app.mount('#app')
