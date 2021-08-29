<template>
  <div class="audio-wrap relative w-full bg-gray-50">
    <!-- 音乐播放进度条 -->
    <slider :progress="progress"></slider>
    <!-- 内容区 -->
    <div class="flex justify-between items-center w-full relative p-1">
      <!-- 歌曲信息 -->
      <div class="music-info">
        <div class="flex items-center" v-if="currentPlay.id">
          <div class="w-12 h-12">
            <el-image :src="currentPlay.image" class="w-full rounded-md"></el-image>
          </div>
          <div class="ml-2">
            <p>
              <span class="text-sm">{{ currentPlay.name }}</span> -
              <span v-for="item in currentPlay.singer" :key="item.id" class="text-gray-600 text-xs">{{ item.name }}&nbsp;</span>
            </p>
            <p class="text-xs text-gray-600">{{ currentTime | currentTime }} / {{ currentPlay.duration | duration }}</p>
          </div>
        </div>
      </div>
      <!-- 控制器 -->
      <div
        class="text-red-500 flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style="font-size: 20px"
      >
        <!-- 上一首 -->
        <span class="fa fa-step-backward" @click="prev"></span>
        <!-- 播放 暂停 -->
        <div class="mx-4" style="font-size: 45px">
          <span class="fa fa-play-circle" @click="play" v-show="!isPlaying"></span>
          <span class="fa fa-pause-circle" @click="pause" v-show="isPlaying"></span>
        </div>
        <!-- 下一首 -->
        <span class="fa fa-step-forward" @click="next"></span>
      </div>
      <div class="text-gray-600 mr-8 flex items-center gap-5">
        <!-- 播放列表显示 -->
        <span class="fa fa-list-ul" @click="playlistVisible = true"></span>
        <!-- 音量控制 -->
        <div class="flex items-center">
          <span class="fa fa-volume-off relative" style="font-size: 20px" @mouseenter="popVisible = true">
            <div
              class="absolute -top-32 shadow-md p-2 -left-4 rounded-md bg-white"
              v-show="popVisible"
              @mouseleave="popVisible = false"
            >
              <el-slider v-model="volume" vertical height="100px"> </el-slider>
            </div>
          </span>
        </div>
      </div>
    </div>
    <!-- 播放器 -->
    <audio
      :src="currentPlay.url"
      ref="audioRef"
      @playing="playing"
      @ended="next"
      @timeupdate="updateProgress"
      @canplay="play"
      class="hidden"
    ></audio>
    <!-- 播放列表 -->
    <el-drawer :visible.sync="playlistVisible" direction="rtl" :with-header="false">
      <div class="relative pt-14">
        <header class="p-4 sticky top-0 z-10 bg-white shadow-md pb-1">
          <h1 class="text-xl font-medium">当前播放</h1>
          <p class="flex justify-between items-center my-1">
            <span class="text-gray-400 text-xs">总{{ songCount }}首</span>
            <span @click="clearPlaylist" class="text-sm text-blue-400 hover:text-blue-500 cursor-pointer">清空列表</span>
          </p>
        </header>
        <main class="overflow-y-auto">
          <ul class="playlist">
            <li v-for="(item, index) in playlist" :key="item.id" class="flex px-4 py-2 text-xs justify-between cursor-default">
              <p class="text-gray-700 w-52 single-line" :class="{ active: currentIndex === index }">{{ item.name }}</p>
              <p class="text-gray-600 w-28 single-line" :class="{ active: currentIndex === index }">
                <span v-for="item2 in item.singer" :key="item2.id">{{ item2.name }}&nbsp;</span>
              </p>
              <p class="text-gray-500 w-3 mr-6">{{ item.duration | duration }}</p>
            </li>
          </ul>
        </main>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Slider from '@/components/common/slider'
export default {
  components: {
    Slider
  },
  data() {
    return {
      // 音量
      volume: 50,
      //  进度条进度
      progress: 0,
      // 当前播放时间
      currentTime: 0,
      popVisible: false,
      // 是否显示播放列表
      playlistVisible: false
    }
  },
  computed: {
    ...mapState({
      playlist: state => state.playlist,
      currentIndex: state => state.currentIndex,
      isPlaying: state => state.isPlaying
    }),
    ...mapGetters(['currentPlay', 'songCount'])
  },
  watch: {
    volume(newValue) {
      // 音量范围设置只能[0,1]
      this.$refs.audioRef.volume = newValue / 100
    },
    currentPlay(newValue) {
      if (!newValue.id) {
        this.$refs.audioRef.src = ''
      }
    }
  },
  methods: {
    play() {
      this.$refs.audioRef.play()
    },
    pause() {
      this.$store.dispatch('setPlayPause')
      this.$refs.audioRef.pause()
    },
    next() {
      this.$store.dispatch('setPlayNext')
      this.play()
    },
    prev() {
      this.$store.dispatch('setPlayPrev')
      this.play()
    },
    // 更新进度条
    updateProgress(e) {
      this.currentTime = e.target.currentTime
      this.progress = (this.currentTime / this.$refs.audioRef.duration) * 100 + '%'
    },
    playing() {
      this.$store.commit('SET_PLAYING_STATUS', true)
    },
    clearPlaylist() {
      this.$store.commit('SET_CLEAR_PLAYLIST')
    }
  }
}
</script>

<style lang="scss" scoped>
.audio-wrap {
  z-index: 9999;
}
.music-info {
  width: 400px;
  height: 60px;
}
.playlist li:nth-child(even) {
  @apply bg-gray-100;
}
.playlist li {
  @apply hover:text-gray-900;
}
.single-line {
  @apply overflow-hidden overflow-ellipsis whitespace-nowrap;
}
.active {
  @apply text-red-600;
}
</style>