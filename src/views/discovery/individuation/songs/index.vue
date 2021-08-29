<template>
  <div>
    <router-link :to="{ name: 'playlist' }" class="title">推荐歌单<i class="el-icon-arrow-right"></i></router-link>
    <div class="grid gap-5 grid-cols-5">
      <router-link
        v-for="item in songs"
        :key="item.id"
        class="rounded-sm overflow-hidden cursor-pointer"
        :to="{ name: 'songlist', query: { id: item.id } }"
      >
        <playlist-item :album="item.picUrl" :num="item.playCount" :label="item.name"> </playlist-item>
      </router-link>
    </div>
  </div>
</template>

<script>
import PlaylistItem from '@/components/common/playlist-item'
export default {
  components: {
    PlaylistItem
  },
  data() {
    return {
      songs: []
    }
  },
  created() {
    this.getPersonalized()
  },
  methods: {
    async getPersonalized() {
      try {
        const res = await this.$api.getPersonalized(10)
        this.songs = res.result
      } catch (error) {
        this.$message.error('获取推荐歌单失败！')
      }
    }
  }
}
</script>

<style scoped>
.title {
  @apply font-medium text-gray-700 hover:text-gray-900 cursor-pointer my-4 block;
}
.desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
.album:hover .play {
  @apply opacity-100;
}
</style>