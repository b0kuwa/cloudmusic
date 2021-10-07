<template>
    <div v-loading="loading"
         element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading">
        <!-- 轮播图 -->
        <banner :banners="bannerList" attr="imageUrl"></banner>
        <!-- 推荐歌单 -->
        <m-title :level="3" title="推荐歌单" :to="{ path: '/playlist' }"></m-title>
        <song-list :list="songList"></song-list>
        <!-- 独家放送 -->
        <m-title :level="3" title="独家放送" :to="{ path: '/privatecontent' }"></m-title>
        <private-content :list="privateContent"></private-content>
        <!-- 最新音乐 -->
        <m-title :level="3" title="最新音乐" :to="{ path: '/privatecontent' }"></m-title>
        <new-song :list="newSongList"></new-song>
        <!-- 推荐MV -->
        <m-title :level="3" title="推荐MV" :to="{ path: '/video/mv' }"></m-title>
        <mv-list :list="mvList"></mv-list>
    </div>
</template>

<script>
import SongList from './song-list'
import PrivateContent from './private-content'
import NewSong from './new-song'
import MvList from './mv-list'

import mixin from './mixin'

export default {
    mixins: [mixin],
    components: {
        SongList,
        PrivateContent,
        NewSong,
        MvList
    },
    data(){
        return{
            loading:true
        }
    }
}
</script>

<style scoped>
</style>