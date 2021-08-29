<template>
  <div id="app" class="bg-white relative">
    <div class="flex">
      <Aside></Aside>
      <Main></Main>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Aside from '@/components/Aside'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Aside,
    Main,
    Footer
  }
}
</script>

<style scoped>
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
  overflow: hidden;
}
</style>
