<template>
  <div>
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 推荐歌单 -->
    <RecommendSongList></RecommendSongList>
    <!-- 独家放送 -->
    <PrivateContent></PrivateContent>
    <!-- 最新音乐 -->
    <NewSong></NewSong>
    <!-- 推荐MV -->
    <RecommendMV></RecommendMV>
    <!-- 主播电台 -->
    <AnchorRadio></AnchorRadio>
  </div>
</template>
    
<script>
import Banner from "./Banner";
import PrivateContent from "./PrivateContent";
import NewSong from "./NewSong";
import RecommendSongList from "./RecommendSongList";
import RecommendMV from "./RecommendMV";
import AnchorRadio from './AnchorRadio'

export default {
  name: "Recommend",
  components: {
    Banner,
    RecommendSongList,
    PrivateContent,
    NewSong,
    RecommendMV,
    AnchorRadio
  },
};
</script>
    
<style lang="less" scoped>
</style>