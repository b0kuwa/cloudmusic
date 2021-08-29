<template>
  <div>
    <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="search" clearable size="mini"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>
</style>