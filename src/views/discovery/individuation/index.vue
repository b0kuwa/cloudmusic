<template>
  <div>
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 推荐歌单 -->
    <Songs></Songs>
    <!-- 独家放送 -->
    <Private></Private>
    <!-- 最新音乐 -->
    <New></New>
    <!-- 推荐MV -->
    <MV></MV>
  </div>
</template>

<script>
import Banner from './banner'
import Private from './private'
import New from './new'
import Songs from './songs'
import MV from './mv'

export default {
  name: 'Recommend',
  components: {
    Banner,
    Songs,
    Private,
    New,
    MV,
  },
}
</script>

<style scoped>
</style>