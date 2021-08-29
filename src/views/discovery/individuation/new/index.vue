<template>
  <div>
    <!-- 标题 -->
    <router-link class="title" :to="{ name: 'newsong' }">
      最新音乐
      <i class="el-icon-arrow-right"></i>
    </router-link>
    <!-- 内容 -->
    <div class="grid grid-cols-2 gap-4 box-border">
      <div v-for="(item, index) in newsongs" :key="item.id" class="post hover:shadow-sm p-3 flex items-center">
        <div class="relative cursor-pointer" @click="playSong(item)">
          <img :src="item.picUrl" class="album object-cover rounded-md cursor-pointer" />
          <span class="iconfont icon-play1 icon"></span>
        </div>
        <div class="m-2 flex items-center">
          <div class="text-gray-400 text-xs p-3">
            {{ (index + 1) | numberFormat }}
          </div>
          <div>
            <div class="text-sm cursor-default">{{ item.name }}</div>
            <div class="text-xs text-gray-500">
              <span
                v-for="(artist, index) in item.song.artists"
                :key="index"
                class="artistname cursor-pointer hover:text-gray-900"
                >{{ artist.name }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createSong } from '@/model/song'
export default {
  data() {
    return {
      newsongs: []
    }
  },
  created() {
    this.getPersonalizedNewSong()
  },
  methods: {
    async getPersonalizedNewSong() {
      const res = await this.$api.getPersonalizedNewSong()
      if (res.code !== 200) {
        return this.$message.error('获取推荐新歌失败！')
      }
      this.newsongs = res.result
    },
    playSong(song) {
      this.$store.dispatch('setPlayOne', song)
    }
  }
}
</script>

<style scoped>
.post:hover {
  background: #f5f5f5;
}
.title {
  @apply font-medium text-gray-700 hover:text-gray-900 cursor-pointer my-4 block;
}
.desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
.album {
  height: 70px;
  width: 70px;
}
.artistname:not(:last-child)::after {
  content: '/';
  padding: 0 2px;
}
.icon {
  font-size: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @apply text-red-500 absolute;
}
</style>