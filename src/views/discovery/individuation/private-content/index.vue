<template>
  <div class="grid gap-4" :class="`grid-cols-${list.length}`">
    <router-link
      :to="{ name: 'videoDetail', params: { mvid: item.id }, query: { title: 'MV详情' } }"
      v-for="item in list"
      :key="item.id"
      class="cursor-pointer"
    >
      <div class="relative">
        <img :src="item.picUrl" :alt="item.name" class="object-fill rounded-md h-32" />
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