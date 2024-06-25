
## Vue 3 + elementPlus组件编写步骤
1. 编写组件后，copy到`packages`
2. 在`packages/index.ts`引入组件
3. `npm run lib`生成lib文件
4. 修改`command/package.josn`的`version`版本号
5. 拷贝`command/index.d.ts`和`command/package.json`到`lib`目录下
6. `npm publish`上传npm
7. 进入`docs`编写组件
