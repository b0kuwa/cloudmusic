<template>
  <div>
    <h2>主播电台<i class="el-icon-arrow-right"></i></h2>
    <el-row :gutter="20">
      <el-col>
        <div class="card" v-for="(item) in anchorRadio" :key="item.id">
          <el-image style="width: 200px; height: 200px; border-radius: 10px" :src="item.picUrl" fit="cover">
            <div slot="placeholder">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <!-- <div class="content">
            <div class="songname">
              {{item.name}}
            </div>
            <div class="author">
              <span v-for="(artist,index) in item.song.artists" :key="index">
                {{artist.name}}
              </span>
            </div>
          </div> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>
    
<script>
import { mapState } from "vuex";
export default {
  name: "AnchorRadio",
  computed: {
    ...mapState({
      anchorRadio: (state) => state.home.anchorRadio,
    }),
  },
  created() {
    this.$store.dispatch("getAnchorRadio");
  },
};
</script>
    
<style lang="less" scoped>
</style>