<template>
  <div>
    <!-- 路由链接 -->
    <top-bar :list="list"></top-bar>
    <!-- 内容展示 -->
    <keep-alive>
      <router-view class="content"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import TopBar from '@/components/top-bar'

export default {
  components: {
    TopBar
  },
  data() {
    return {
      list: [
        {
          label: '个性推荐',
          to: {
            name: 'individuation'
          }
        },
        {
          label: '歌单',
          to: { name: 'playlist' }
        },
        {
          label: '主播电台',
          to: { name: 'dj' }
        },
        {
          label: '排行榜',
          to: { name: 'rank' }
        },
        {
          label: '最新音乐',
          to: { name: 'newsong' }
        }
      ]
    }
  }
}
</script>

<style scoped>
.router-link-active {
  @apply text-white font-extrabold;
}
.list li {
  @apply hover:text-white  px-4 py-2 cursor-pointer;
}
.content {
  max-width: 1050px;
  margin-top: 50px;
  @apply mx-auto;
}
</style>