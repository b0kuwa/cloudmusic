<template>
  <el-container id="app">
    <Header></Header>
    <el-container>
      <Aside></Aside>
      <Main></Main>
    </el-container>
    <Footer></Footer>
  </el-container>
</template>

<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Aside,
    Main,
    Footer,
  },
};
</script>

<style lang="less" scoped>
#app {
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  min-width: 1000px;
  min-height: 668px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;

}
</style>
