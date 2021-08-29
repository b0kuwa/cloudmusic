<template>
  <div>
    <slot>
      <div class="px-2 py-2 flex items-center ">
        <!-- 索引 -->
        <span class="px-2 text-xs text-gray-400">{{ (index + 1) | numberFormat }}</span>
        <!-- 封面 -->
        <div class="flex items-center w-1/2">
          <div class="relative" style="width: 60px; height: 60px">
            <img :src="song.album.blurPicUrl" class="object-cover rounded-md" />
            <i class="iconfont icon-play1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500"></i>
          </div>
          <p class="text-sm mx-2">{{ song.name }}</p>
        </div>
        <!-- 歌手 -->
        <div class="text-xs text-gray-400 w-28 whitespace-nowrap overflow-ellipsis overflow-hidden">
          <span v-for="item in song.artists" :key="item.id">{{ item.name }}</span>
        </div>
        <!-- 专辑名 -->
        <div class="text-xs text-gray-400 flex-1">{{ song.album.name }}</div>
        <!-- 时长 -->
        <span class="text-xs text-gray-400 w-10">{{ song.duration | mmss }}</span>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      default: 0
    },
    song: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
i {
  font-size: 25px;
}
</style>