
## Vue 3 + elementPlus组件编写步骤
* 编写组件后，copy到`packages`
* 编写`packages/index.ts`
* `npm run lib`生成lib文件
* 修改`command/package.josn`的`version`版本号
* 拷贝`command/index.d.ts`和`command/package.json`到`lib`目录下
* `npm publish`
