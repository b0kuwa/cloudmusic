<template>
  <div>
    <top-bar>
      <template v-slot>
        <router-link :to="{ name: 'dynamic' }" class="mr-4">动态</router-link>
        <el-button icon="el-icon-edit" size="mini" round type="danger">发动态</el-button>
      </template>
    </top-bar>
  </div>
</template>

<script>
import TopBar from '@/components/top-bar'
export default {
  components: {
    TopBar
  }
}
</script>

<style scoped>
</style>