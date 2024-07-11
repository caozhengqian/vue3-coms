## 编写公司组件四步骤(node18+)
* 官网：http://www.daqianaierzi.com:81/introduction.html
* 安装npm
```js
  npm i @webscom/vue3-coms element-plus @element-plus/icons-vue
```
*  导入：
```js
  import ElementPlus from 'element-plus'
  import 'element-plus/dist/index.css'
  import MUI from "@webscom/vue3-coms"
  import "@webscom/vue3-coms/style.css"
```
* 引用：
 ```js
createApp(App).use(ElementPlus).use(MUI).mount('#app')
```

此项目包含公司编写组件全流程
### 一：编写组件
1. 在src中完成功能
### 二：打包组件
1. copy组件到`packages`
2. 在`packages/index.ts`引入组件
3. `npm run lib`生成lib文件
### 三：发布组件
1. 修改`command/package.josn`的`version`版本号
2. 拷贝`command/index.d.ts`和`command/package.json`到`lib`目录下
3. `npm publish`上传npm
### 四：完善文档（必写）
1. 进入`docs/.vitepress/config`编写路由
2. 新增组件的`演示`、`code`和`API`
3. 打包发布
