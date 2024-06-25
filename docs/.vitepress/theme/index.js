import DefaultTheme from"vitepress/theme"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MUI from "@webscom/vue3-coms"
import "@webscom/vue3-coms/style.css"
export default{
  ...DefaultTheme,
  enhanceApp({app}){
    app.use(ElementPlus)
    app.use(MUI)
  }
}
