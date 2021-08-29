<template>
  <div>
    <a class="title">推荐MV<i class="el-icon-arrow-right"></i></a>
    <div class="grid grid-cols-4 gap-4">
      <router-link
        :to="{ name: 'videoDetail', params: { mvid: item.id }, query: { title: 'MV详情' } }"
        v-for="item in mvlist"
        :key="item.id"
        class="cursor-pointer"
      >
        <div class="relative album">
          <img :src="item.picUrl" class="rounded-md h-36 object-cover w-full" />
          <div
            class="
              text-white
              bg-black
              text-xs
              absolute
              top-0
              w-full
              opacity-50
              rounded-t-md
              box-border
              max-h-0
              overflow-hidden
              mask
            "
          >
            最新热门MV推荐
          </div>
          <div class="absolute top-1 right-1 count text-white text-xs flex items-center">
            <span class="iconfont icon-play2"></span>{{ item.playCount }}
          </div>
        </div>
        <div class="desc whitespace-nowrap overflow-ellipsis text-sm p-1 overflow-hidden">
          {{ item.name }}
        </div>
        <div>
          <span v-for="(artist, index) in item.artists" :key="artist.id" class="text-sm text-gray-700 hover:text-gray-900 p-1">
            {{ index === 0 && index !== item.artists.length - 1 ? artist.name + '/' : artist.name }}
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mvlist: []
    }
  },
  created() {
    this.getPersonalizedMV()
  },
  methods: {
    async getPersonalizedMV() {
      const res = await this.$api.getPersonalizedMV()
      if (res.code !== 200) {
        return this.$message.error('获取推荐mv失败！')
      }
      this.mvlist = res.result
    }
  }
}
</script>

<style scoped>
.title {
  @apply font-medium text-gray-700 hover:text-gray-900 cursor-pointer my-4 block;
}
.desc {
  /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis; */
}
.album:hover .count {
  opacity: 0;
}
.album:hover .mask {
  transition: max-height 0.3s;
  max-height: 50px !important;
  @apply p-2;
}
</style>