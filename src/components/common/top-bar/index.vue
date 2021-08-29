<template>
  <div class="top-bar-wrap bg-red-500 w-full flex items-center justify-between sticky top-0 mb-5 pr-20" style="height: 50px">
    <!-- 链接 -->
    <div class="flex justify-between items-center text-red-200 text-sm bg-red-500">
      <slot>
        <router-link
          :to="item.to"
          v-for="(item, index) in list"
          :key="index"
          class="flex item-center justify-center hover:text-white px-4 py-2 cursor-pointer"
        >
          {{ item.label }}
        </router-link>
      </slot>
    </div>
    <!-- 搜索框 -->
    <search></search>
  </div>
</template>

<script>
import Search from '@/components/common/search'
export default {
  components: {
    Search
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.top-bar-wrap {
  z-index: 9999;
}
.router-link-active {
  @apply text-white font-extrabold;
}
</style>