<template>
  <div>
    <el-carousel :interval="4000" type="card" indicator-position="outside" height="200px">
      <el-carousel-item v-for="item in banners" :key="item.targetId">
        <img :src="item.pic" class="object-cover rounded-md" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    }
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