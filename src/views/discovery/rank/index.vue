<template>
  <div>
    <!-- 官方榜单 -->
    <div>
      <h1 class="title">官方榜</h1>
      <rank-item v-for="item in toplist.slice(0, 4)" :key="item.id" :id="item.id"></rank-item>
    </div>
    <!-- 全球榜 -->
    <div>
      <h1 class="title">全球榜</h1>
      <div class="grid grid-cols-6 gap-4">
        <playlist-item
          :album="toplist[4].coverImgUrl"
          :label="toplist[4].name"
          :num="toplist[4].playCount"
          position="center"
        ></playlist-item>
        <playlist-item
          :album="item.coverImgUrl"
          :label="item.name"
          :num="item.playCount"
          v-for="item in toplist.slice(5)"
          :key="item.id"
          position="center"
        >
        </playlist-item>
      </div>
    </div>
  </div>
</template>

<script>
import RankItem from '@/components/common/rank-item'
import PlaylistItem from '@/components/common/playlist-item'
export default {
  components: {
    RankItem,
    PlaylistItem
  },
  data() {
    return {
      toplist: [],
      artistToplist: {}
    }
  },

  methods: {
    // 获取排行榜
    async getTopList() {
      const res = await this.$api.getToplist()
      if (res.code !== 200) {
        return
      }
      this.toplist = res.list
      this.artistToplist = res.artistToplist
    }
  },
  created() {
    this.getTopList()
  }
}
</script>

<style scoped>
.title {
  @apply text-base font-medium cursor-default mb-5;
}
.cover {
  width: 170px;
}
.more {
  @apply text-gray-600 hover:text-gray-900 cursor-pointer text-sm;
}
.creator:not(:last-child)::after {
  content: '/';
  padding: 0 2px;
}
</style>
