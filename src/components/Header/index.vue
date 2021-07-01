<template>
  <el-header>
    <div class="head-left">
      <a href="javascript:;" class="pre">
        <i class="iconfont icon-arrow-left-bold"></i>
      </a>
      <a href="javascript:;" class="next">
        <i class="iconfont icon-arrow-right-bold"></i>
      </a>
    </div>
    <ul>
      <router-link tag="li" to="/recommend">个性推荐</router-link>
      <router-link tag="li" to="/playlist">歌单</router-link>
      <li>主播电台</li>
      <li>排行榜</li>
      <li>歌手</li>
      <li>最新音乐</li>
    </ul>
    <div class="head-right">
      <el-input placeholder="搜索" suffix-icon="el-icon-search" v-model="search">
      </el-input>
      <ol>
        <li><i class="iconfont icon-setting"></i></li>
        <li><i class="iconfont icon-email"></i></li>
        <li><i class="iconfont icon-tshirt"></i></li>
        <li><i class="iconfont icon-minimize"></i></li>
      </ol>
    </div>
  </el-header>
</template>
    
<script>
export default {
  name: "",
  data() {
    return {
      search: "",
    };
  },
};
</script>
    
<style lang="less" scoped>
.el-header {
  height: 45px;
  background-color: #d64741;
  .head-left {
    width: 200px;
    height: 100%;
    float: left;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    float: left;
    height: 100%;
    padding: 0;
    margin: 0;
    color: #fff;
    li {
      margin: 10px;
      cursor: pointer;
    }
  }
  .head-right {
    height: 100%;
    float: right;
    display: flex;
    align-items: center;
    .el-input {
      box-sizing: border-box;
      input {
        width: 150px;
        height: 20px;
        padding: 3px;
        border-radius: 10px;
        border: 1px solid #eee;
        font-size: 10px;
      }
    }
    ol {
      display: flex;
      list-style: none;
    }
  }
}
</style>