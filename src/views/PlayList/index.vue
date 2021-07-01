<template>
  <div class="container">
    <router-link tag="div" :to="{name:'qualitySongList'}" class="ablum">
      <div class="mask" :style="{background:'url('+qualitySongList[0].coverImgUrl+')'}"></div>
      <el-image height="170px" :src="qualitySongList[0].coverImgUrl"></el-image>
    </router-link>
    <div class="options">
      <el-button class="all-btn el-btn-default" round size="small"> 全部歌单 <i class="el-icon-arrow-right"></i></el-button>
      <el-link v-for="item in hotPlayList" :key="item.id" :underline="false">{{item.name}}</el-link>
    </div>
    <el-row :gutter="40">
      <el-col :span="6" v-for="item in topPlayList" :key="item.id">
        <el-image :src="item.coverImgUrl"></el-image>
        <span class="title">{{item.name}}</span>
      </el-col>
    </el-row>
    <el-pagination background layout="prev, pager, next" :total="total">
    </el-pagination>
  </div>

</template>
    
<script>
import { mapState } from "vuex";
export default {
  name: "PlayList",
  computed: {
    ...mapState({
      qualitySongList: (state) => state.playlist.qualitySongList,
      hotPlayList: (state) => state.playlist.hotPlayList,
      topPlayList: (state) => state.playlist.topPlayList,
      total: (state) => state.playlist.total,
    }),
  },
  created() {
    this.$store.dispatch("getQualitySongList");
    this.$store.dispatch("getHotPlayList");
    this.$store.dispatch("getTopPlayList");
  },
};
</script>
    
<style lang="less" scoped>
.container {
  .ablum {
    border-radius: 10px;
    border: 1px solid #fff;
    height: 170px;
    padding: 20px;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat !important;
      background-size: cover !important;
      background-position: center center !important;
      filter: blur(50px);
    }
    .el-image {
      width: 172px;
      height: 172px;
      border-radius: 5px;
    }
  }
  .options {
    margin: 30px 0;
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 30px;
    }
    .el-link {
      padding: 15px;
    }
  }
  .el-row {
    .el-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 20px 0;
      .el-image {
        border-radius: 10px;
        width: 100%;
        height: 100%;
      }
      .title {
        font-size: 14px;
        padding: 5px;
      }
    }
  }
}
</style>