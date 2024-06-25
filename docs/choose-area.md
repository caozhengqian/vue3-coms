---
outline: deep
---

# 省市区选择器
三级联动，选出省市区
### 基本用法
<br>
<div>
   <m-choose-area/>
</div>

<script  setup>

</script>
### 代码示例
```html
<m-choose-area/>
```
### API
#### 事件
| 事件名    | 说明 | 参数  |
|:-------|--|-----|
| change | 选择后触发 | val:AreaInfo(省市区数据)|

#### AreaInfo数据格式
| key    | 说明 | 类型  |
|:-------|--|-----|
|name|名字|string|
|code|编码|number|
