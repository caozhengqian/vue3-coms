import { App } from 'vue'
import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import chooseCity from './chooseCity'
import './styles/ui.scss'
import './styles/base.scss'
import {toLine} from "./utils"
import * as Icons from '@element-plus/icons-vue'
const components = [
  chooseIcon, chooseArea, chooseCity
]

export default {
  install(app: App) {
      for (let i in Icons) {
          app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
      }
    components.map(item => {
      app.use(item)
    })
  }
}
