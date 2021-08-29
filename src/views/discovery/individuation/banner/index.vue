<template>
  <!-- 轮播图 -->
  <el-carousel :interval="4000" type="card" indicator-position="outside" height="200px">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <img :src="item.imageUrl" class="object-cover rounded-md" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    }
  },
  created() {
    this.getBanners()
  },
  methods: {
    async getBanners() {
      const res = await this.$api.getBanners()
      if (res.code !== 200) {
        return this.$message.error('获取轮播图失败！')
      }
      this.banners = res.banners
    }
  }
}
</script>

<style scoped>
</style>