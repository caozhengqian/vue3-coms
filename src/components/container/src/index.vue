<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse"/>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header :collapse="isCollapse"></nav-header>
      </el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import NavHeader from './navHeader/index.vue'
import NavSide from './navSide/index.vue'
let isCollapse = ref(false)
let toggle = () => {
  isCollapse.value = !isCollapse.value
}

</script>

<style lang='scss' scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

</style>
