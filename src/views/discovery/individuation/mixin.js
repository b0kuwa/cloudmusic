export default {
  data() {
    return {
      loading: false,
      bannerList: [],
      songList: [],
      privateContent: [],
      newSongList: [],
      mvList: []
    }
  },
  created() {
    Promise.all([
      this.$api.getBanners(),
      this.$api.getPersonalized(10),
      this.$api.getPersonalizedPrivateContent(),
      this.$api.getPersonalizedNewSong(),
      this.$api.getPersonalizedMV()
    ])
      .then(res => {
        const flag = res.every(item => item.code === 200)
        if (!flag) {
          return this.$message.error('获取数据失败！！')
        }
        this.bannerList = res[0].banners
        this.songList = res[1].result
        this.privateContent = res[2].result
        this.newSongList = res[3].result
        this.mvList = res[4].result
      })
      .catch(err => {
        this.$notify.error({
          title: '错误',
          message: err.message
        })
      })
  }
}