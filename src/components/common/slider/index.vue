<template>
  <div class="slider-wrap">
    <div class="slider-progress"></div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-wrap {
  height: 2px;
  @apply relative w-full bg-gray-500;
  .slider-progress:after {
    @apply bg-red-600 w-3 h-3 rounded-full absolute top-1/2 transform -translate-y-1/2 z-10;
  }
}
</style>