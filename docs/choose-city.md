---
outline: deep
---

# 城市选择器
根据城市和省份，快速选择城市
### 基本用法
<br>
<div>
   <m-choose-city/>
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
| changeCity | 按城市选择后触发 | val:City(城市信息)|
| changeProvince | 按省份选择后触发 | val:string(城市名称)|

#### City数据格式
| key    | 说明 | 类型  |
|:-------|--|-----|
|id|城市编码|number|
|spell|城市拼音|string|
|name|城市名称|string|
