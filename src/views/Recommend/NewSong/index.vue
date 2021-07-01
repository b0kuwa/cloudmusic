<template>
  <div>
    <h2>最新音乐<i class="el-icon-arrow-right"></i></h2>
    <!-- <el-row :gutter="20" type="flex" justify="space-between">
      <el-col :span="12">
        <div class="card" v-for="(item,index) in newsongs.slice(0,5)" :key="item.id">
          <el-image style="width: 200px; height: 200px; border-radius: 10px" :src="item.picUrl" fit="cover">
            <div slot="placeholder">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="num">{{(index+1)>9?(index+1) : "0"+ (index+1)}}</div>
          <div class="content">
            <div class="songname">
              {{item.name}}
            </div>
            <div class="author">
              <span v-for="(artist,index) in item.song.artists" :key="index">
                {{artist.name}}
              </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="card" v-for="(item,index) in newsongs.slice(5)" :key="item.id">
          <el-image style="width: 200px; height: 200px; border-radius: 10px" :src="item.picUrl" fit="cover">
            <div slot="placeholder">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="num">{{(index+6)>9?(index+6) : "0"+ (index+6)}}</div>
          <div class="content">
            <div class="songname">
              {{item.name}}
            </div>
            <div class="author">
              <span v-for="(artist,index) in item.song.artists" :key="index">
                {{artist.name}}
              </span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row> -->

    <el-row type="flex">
      <el-col :span="12" v-for="(item,index) in newsongs" :key="item.id">
        <el-image :src="item.picUrl" fit="cover">
          <div slot="placeholder">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <div class="num">{{(index+1)>9?(index+1) : "0"+ (index+1)}}</div>
        <div class="content">
          <div class="songname">
            {{item.name}}
          </div>
          <div class="author">
            <span v-for="(artist,index) in item.song.artists" :key="index">
              {{artist.name}}
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
    
<script>
import { mapState } from "vuex";
export default {
  name: "NewSong",
  computed: {
    ...mapState({
      newsongs: (state) => state.home.newsongs,
    }),
  },
  created() {
    this.$store.dispatch("getNewSongs");
  },
};
</script>
    
<style lang="less" scoped>
.el-row {
  flex-direction: column;
  flex-wrap: wrap;
  height: calc(222px * 6);
  .el-col {
    margin: 10px;
    padding: 10px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    .el-image {
      width: 200px;
      height: 200px;
      border-radius: 10px;
    }
    .num {
      color: #ccc;
      padding: 10px;
    }
    .content {
      .songname {
        font-size: 22px;
        padding: 10px;
      }
      .author {
        font-size: 18px;
        color: #aaa;
        padding: 10px;
      }
    }
  }
}
</style>