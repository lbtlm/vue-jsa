import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import '@/style/css/index.css'
import 'element-plus/dist/index.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createPinia } from 'pinia'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(ElementPlus, { locale: zhCn })
app.use(createPinia())
app.mount('#app')
