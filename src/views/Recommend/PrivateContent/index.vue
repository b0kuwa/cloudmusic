<template>
  <div>
    <h2>独家放送<i class="el-icon-arrow-right"></i></h2>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in privateContents" :key="item.id">
          <el-image :src="item.picUrl" fit="cover"></el-image>
          <div class="desc" v-text="item.name"></div>
      </el-col>
    </el-row>
  </div>
</template>
    
<script>
import { mapState } from "vuex";
export default {
  name: "PrivateContent",
  computed: {
    ...mapState({
      privateContents: (state) => state.home.privateContens,
    }),
  },
  created() {
    this.$store.dispatch("getPrivateContent");
  },
};
</script>
    
<style lang="less" scoped>
.el-image{
    border-radius: 10px;
}
.desc{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
}
</style>