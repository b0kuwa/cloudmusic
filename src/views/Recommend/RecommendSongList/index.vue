<template>
  <div>
    <h2>推荐歌单<i class="el-icon-arrow-right"></i></h2>
    <el-row :gutter="20" type="flex" justify="space-between" align="middle">
      <el-col :span="24/5" v-for="item in recommendSongList" :key="item.id">
        <el-image style="width:310px" fit="cover" :src="item.picUrl"></el-image>
        <span class="title" v-text="item.name"></span>
      </el-col>
    </el-row>
  </div>
</template>
     
<script>
import { mapState } from "vuex";
export default {
  name: "RecommendSongList",
  computed: {
    ...mapState({
      recommendSongList: (state) => state.home.recommendSongList,
    }),
  },
  created() {
    this.$store.dispatch("getRecommendSongList");
  },
};
</script>
    
<style lang="less" scoped>
.el-row {
  flex-wrap: wrap;
  .el-col {
    display: flex;
    flex-direction: column;
    .el-image {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .title {
      padding: 10px;
      width: 18em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>