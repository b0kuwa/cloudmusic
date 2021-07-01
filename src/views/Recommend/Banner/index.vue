<template>
  <!-- 轮播图 -->
  <el-carousel :interval="4000" type="card" indicator-position="outside">
    <el-carousel-item v-for="item in banners" :key="item.index">
      <el-image :src="item.imageUrl" fit="cover">
        <div slot="placeholder">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
    </el-carousel-item>
  </el-carousel>
</template>
    
<script>
import { mapState } from "vuex";

export default {
  name: "Banner",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
    }),
  },
  created() {
    this.$store.dispatch("getBanners");
  },
};
</script>
    
<style lang="less" scoped>
.el-carousel__container {
  height: 200px;
}
/deep/ul.el-carousel__indicators {
  height: 50px !important;
  line-height: 1;
}
.el-carousel__item {
  border-radius: 10px;
}
.el-carousel__indicators--outside button {
  background-color: #d34031;
}
/deep/button {
  &.el-carousel__button {
    border-radius: 50% !important;
    background-color: #d34031;
    width: 10px;
    height: 10px;
  }
  &.active {
    background-color: #d34031;
  }
}
</style>