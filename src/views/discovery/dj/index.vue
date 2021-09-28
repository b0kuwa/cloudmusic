<template>
  <div>
    <banner :banners="banners" attr="pic"></banner>
  </div>
</template>

<script>
import banner from '@/components/banner'

export default {
  data() {
    return {
      banners: []
    }
  },
  components: {
    banner
  },
  created() {
    this.getDjBanner()
  },
  methods: {
    async getDjBanner() {
      const res = await this.$api.getDjBanner()
      if (res.code !== 200) {
        return this.$message.error('获取轮播图失败！')
      }
      this.banners = res.data
    }
  }
}
</script>

<style scoped>
</style>