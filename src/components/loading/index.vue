<template>
  <div v-show="loading" class="loading-wrap">
    <span class="el-icon-loading"></span>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-wrap {
  @apply flex flex-col justify-center items-center gap-2 text-sm;
}
</style>