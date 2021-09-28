<template>
  <div class="slider-wrap">
    <div class="slider-progress" :style="{ width: progress }"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {}
  }
}
</script>

<style lang="scss" scoped>
.slider-wrap {
  height: 2px;
  @apply relative w-full;
  &:hover .slider-progress::after {
    @apply opacity-100;
  }
  .slider-progress {
    height: 2px;
    @apply bg-red-600 relative;
    &::after {
      content: '';
      @apply bg-red-600 w-3 h-3 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 z-10 opacity-0;
    }
  }
}
</style>