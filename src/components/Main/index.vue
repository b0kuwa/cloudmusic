<template>
  <el-main>
    <router-view class="main-container mx-auto"></router-view>
  </el-main>
</template>

<script>
export default {}
</script>

<style scoped>
.el-main {
  height: calc(100vh - 60px);
  padding: 0;
}
.main-container {
  @apply mx-auto !important;
}
</style>