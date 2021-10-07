<template>
  <div class="grid grid-cols-3 gap-4">
    <router-link
      :to="{ name: 'videoDetail', params: { mvid: item.id }, query: { title: 'MV详情' } }"
      v-for="item in list"
      :key="item.id"
      class="cursor-pointer"
    >
      <div class="relative">
        <m-image :src="item.picUrl" fit="fill" style="height: 135px"/>
        <span class="iconfont icon-play1 absolute top-1 left-1 text-white" style="font-size: 20px"></span>
      </div>
      <span class="text-2-ellipsis text-sm p-1 text-gray-700 hover:text-gray-900 cursor-pointer" v-text="item.name"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>