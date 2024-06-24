import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'
// import UI from "../lib/vue3-element-components.es"
import ChooseIcon from '../lib222/chooseIcon/index.es.js'
import "../lib222/style.css"

const app = createApp(App)
for (let i in Icons) {
    app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}
app.use(router).use(ElementPlus)
    // .use(UI)
    .use(ChooseIcon)
app.mount('#app')
