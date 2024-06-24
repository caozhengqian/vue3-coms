import { App } from 'vue'
import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import chooseCity from './chooseCity'

const components = [
  chooseIcon, chooseArea, chooseCity
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}
