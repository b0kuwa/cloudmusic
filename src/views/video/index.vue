<template>
  <div>
    <top-bar :list="list"></top-bar>
    <keep-alive>
      <router-view></router-view>
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
          label: '视频',
          to: { name: 'videoIndex' }
        },
        {
          label: 'MV',
          to: { name: 'mv' }
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>