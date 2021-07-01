<template>
  <div>
    <h2>推荐MV<i class="el-icon-arrow-right"></i></h2>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in recommendMV" :key="item.id">
        <el-image :src="item.picUrl" fit="cover"></el-image>
        <span class="desc" v-text="item.name"></span>
        <span class="author">
          <span v-for="(artist,index) in item.artists" :key="artist.id">
            {{index===0&&index!==item.artists.length-1?artist.name+"/":artist.name}}
          </span>
        </span>
      </el-col>
    </el-row>
  </div>
</template>
    
<script>
import { mapState } from "vuex";
export default {
  name: "",
  computed: {
    ...mapState({
      recommendMV: (state) => state.home.recommendMV,
    }),
  },
  created() {
    this.$store.dispatch("getRecommendMV");
  },
};
</script>
    
<style lang="less" scoped>
.el-image {
  border-radius: 10px;
}
.desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
}
</style>