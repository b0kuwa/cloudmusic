<template>
  <div>
    <div class="text-center">
      <el-switch v-model="value" active-color="#bbb" inactive-color="#f00" active-text="新歌速递" inactive-text="新碟上架">
      </el-switch>
    </div>
    <!-- 列表 -->
    <song-list :list="list"></song-list>
  </div>
</template>

<script>
import SongList from '@/components/common/song-list'
export default {
  components: {
    SongList
  },
  data() {
    return {
      value: '',
      list: [],
      type: {
        label: '全部',
        value: 0
      }
    }
  },
  created() {
    this.getTopSong()
  },
  methods: {
    async getTopSong() {
      const res = await this.$api.getTopSong(this.type.value)
      if (res.code !== 200) {
        return this.$message.error('获取新歌速递失败！')
      }
      console.log(res)
      this.list = res.data
    }
  }
}
</script>

<style scoped>
</style>