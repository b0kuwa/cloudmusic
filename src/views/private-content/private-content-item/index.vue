<template>
  <div class="mb-2">
    <div class="relative">
      <img :src="src" class="w-full object-cover rounded-md"/>
      <i class="el-icon-video-play absolute top-1 left-1"></i>
    </div>
    <p class="text-xs text-gray-700 hover:text-gray-900 py-0.5 text-2-ellipsis">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.el-icon-video-play{
    font-size: 20px;
    color: rgba(255, 255, 255, .5);
}
</style>