---
outline: deep
---

# 图标选择器
点击按钮，弹出所有图标，点击即复制 ，从cmc、base项目组中提炼。
### 基本用法
<br>
<div>
    <m-choose-icon title="选择图标" v-model:visible="visible">选择图标</m-choose-icon>
</div>

<script  setup>
import { ref } from 'vue';

let visible = ref(false)
</script>
### 代码示例
```js
<script lang='ts' setup>
import { ref } from 'vue'
  
let visible = ref<boolean>(false)
</script>
```
