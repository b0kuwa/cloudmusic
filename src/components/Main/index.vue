<template>
  <main class="flex-1">
    <router-view class="mx-auto"></router-view>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
main {
  height: calc(100vh - 60px);
  overflow: auto;
}
</style>