<template>
  <div>
    <router-link :to="{name:'privatecontent'}" class="title">
      独家放送
      <i class="el-icon-arrow-right"></i>
    </router-link>
    <div class="grid gap-4" :class="`grid-cols-${privatecontent.length}`">
      <router-link
        :to="{ name: 'videoDetail', params: { mvid: item.id }, query: { title: 'MV详情' } }"
        v-for="item in privatecontent"
        :key="item.id"
        class="cursor-pointer"
      >
        <div class="relative">
          <img :src="item.picUrl" :alt="item.name" class="object-fill rounded-md h-32" />
          <span class="iconfont icon-play1 absolute top-1 left-1 text-white" style="font-size: 20px"></span>
        </div>
        <span class="desc text-sm p-1 text-gray-700 hover:text-gray-900 cursor-pointer" v-text="item.name"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      privatecontent: []
    }
  },
  created() {
    this.getPersonalizedPrivateContent()
  },
  methods: {
    async getPersonalizedPrivateContent() {
      const res = await this.$api.getPersonalizedPrivateContent()
      if (res.code !== 200) {
        return this.$message.error('获取独家放送失败！')
      }
      this.privatecontent = res.result
    }
  }
}
</script>

<style scoped>
.title {
  @apply font-medium text-gray-700 hover:text-gray-900 cursor-pointer my-4 block;
}
.desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
</style>