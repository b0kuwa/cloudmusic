<template>
  <el-footer class="player-control">
      <audio-player></audio-player>
  </el-footer>
</template>

<script>
import AudioPlayer from '../common/audio-player'
export default {
  name: 'Footer',
  components: {
    AudioPlayer
  }
}
</script>

<style  scoped>
.el-footer {
  box-sizing: border-box;
  height: 60px;
  background-color: #fff;
  border-top: #f00 2px solid;
  width: 100%;
  display: flex;
  align-items: center;
}
</style>