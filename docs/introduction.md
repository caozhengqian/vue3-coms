# 快速开始

* MUI基于`element-plus`开发
* 组件来源于各个业务线
* 如有建议或需求请联系负责人曹征前（916864）

## 安装指南
1. `npm i @webscom/vue3-coms element-plus  @element-plus/icons-vue`
2. main.ts加入
```js
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MUI from "@webscom/vue3-coms"
import "@webscom/vue3-coms/style.css"

createApp(App).use(ElementPlus).use(MUI).mount('#app')
```
