<template>
  <el-main class="infinite-list infinite-list-wrapper" style="overflow:auto">
    <router-view></router-view>
  </el-main>
</template>
    
<script>

export default {
  name: "Main",
  
};
</script>
    
<style lang="less" scoped>
.el-main{
  overflow: auto;
  height: 765px;
}
</style>