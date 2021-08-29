<template>
  <div>
    <top-bar :list="list"></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from '@/components/common/top-bar'
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