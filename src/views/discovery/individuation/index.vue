<template>
  <div>
    <!-- 轮播图 -->
    <banner :banners="bannerList" attr="imageUrl"></banner>
    <!-- 推荐歌单 -->
    <m-title :level="3" title="推荐歌单" :to="{ name: 'playlist' }"></m-title>
    <song-list :list="songList"></song-list>
    <!-- 独家放送 -->
    <m-title :level="3" title="独家放送" :to="{ name: 'privatecontent' }"></m-title>
    <private-content :list="privateContent"></private-content>
    <!-- 最新音乐 -->
    <m-title :level="3" title="最新音乐" :to="{ name: 'privatecontent' }"></m-title>
    <new-song :list="newSongList"></new-song>
    <!-- 推荐MV -->
    <m-title :level="3" title="推荐MV" :to="{ name: 'mv' }"></m-title>
    <mv-list :list="mvList"></mv-list>
  </div>
</template>

<script>
import banner from '@/components/banner'
import SongList from './song-list'
import PrivateContent from './private-content'
import NewSong from './new-song'
import MvList from './mv-list'
import MTitle from '@/components/m-title'

import mixin from './mixin'

export default {
  mixins: [mixin],
  components: {
    banner,
    MTitle,
    SongList,
    PrivateContent,
    NewSong,
    MvList
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>