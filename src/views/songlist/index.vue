<template>
  <div id="container" class="">
    <top-bar></top-bar>
    <!-- 头部 -->
    <div class="flex mx-4">
      <!-- 封面 -->
      <img :src="playlist.coverImgUrl" class="cover" />
      <div class="mx-6 flex flex-col justify-between">
        <!-- 歌单信息 -->
        <h2 class="text-xl font-medium flex items-center">
          <el-tag type="danger" size="mini" class="mr-2">歌单</el-tag>
          {{ playlist.name }}
        </h2>
        <!-- 创建者信息 -->
        <div class="flex items-center">
          <!-- 头像 -->
          <router-link to="">
            <img :src="creator.avatarUrl" class="avator" />
          </router-link>
          <!-- 昵称 -->
          <a class="text-sm text-blue-400 mx-2 hover:text-blue-500 cursor-pointer">{{ creator.nickname }}</a>
          <!-- 创建时间 -->
          <span class="text-gray-600 text-xs cursor-default">{{ playlist.createTime | dateFormat }} 创建</span>
        </div>
        <!-- 操作按钮 -->
        <div class="grid grid-cols-4 gap-4">
          <button class="btn-primary outline-none" @click="playAll">
            <i class="el-icon-video-play"></i> 播放全部 <i class="el-icon-plus"></i>
          </button>
          <button class="btn-default">
            <i class="el-icon-folder-add"></i> 收藏({{ playlist.subscribedCount | numberFormatThousand }})
          </button>
          <button class="btn-default"><i class="el-icon-share"></i> 分享</button>
          <button class="btn-default"><i class="el-icon-download"></i> 下载全部</button>
        </div>
        <!-- 标签 -->
        <ul class="description grid grid-cols-1 gap-2 text-xs cursor-default">
          <li>
            <span class="single-justify">标签</span>
            <span class="mr-1">:</span>
            <el-tag
              type="danger"
              size="mini"
              class="mr-1"
              v-for="(item, index) in playlist.tags"
              :key="index"
              v-text="item"
            ></el-tag>
          </li>
          <li>
            <span class="single-justify">歌曲数</span>
            <span class="mr-1">:</span>
            <span>{{ playlist.trackCount }}</span>
            <span class="pl-3">播放数</span>
            <span class="mr-1">:</span>
            <span>{{ playlist.playCount | numberFormatThousand }}</span>
          </li>
          <li>
            <span class="single-justify">简介</span><span class="mr-1">:</span
            ><span class="content" :title="playlist.description">{{ playlist.description }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 内容展示 -->
    <el-tabs v-model="activeTabName" @tab-click="handleTabClick" v-loading="loading" class="px-4 cursor-default">
      <!-- 歌曲列表-->
      <el-tab-pane label="歌曲列表" name="songlist">
        <el-table :data="songs" stripe style="width: 100%" @row-dblclick="selectedOnePlay">
          <el-table-column type="index" :index="indexPad"></el-table-column>
          <el-table-column prop="name" label="音乐标题"></el-table-column>
          <el-table-column label="歌手">
            <template v-slot="scope">
              <a href="#" v-for="item in scope.row.ar" :key="item.id" @click.prevent="">{{ item.name }}</a>
            </template>
          </el-table-column>
          <el-table-column prop="al.name" label="专辑"></el-table-column>
          <el-table-column prop="h.br" label="时长" width="100">
            <template v-slot="scope">
              {{ scope.row.dt | duration }}
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 评论 -->
      <el-tab-pane :label="`评论(${playlist.commentCount})`" name="comment">
        <el-input type="textarea" :rows="3" placeholder="请输入评论或@朋友" v-model="comment" maxlength="140"> </el-input>
        <!-- 精彩评论 -->
        <!-- 最新评论 -->
      </el-tab-pane>
      <!-- 收藏 -->
      <el-tab-pane label="收藏者" name="subscribers">
        <div class="grid grid-cols-4">
          <div v-for="item in subscribers" :key="item.userId" class="flex items-center my-2">
            <img :src="item.avatarUrl" class="user-avatar mr-2" />
            <div class="userinfo text-sm">
              <a class="text-gray-800 hover:text-gray-900 cursor-pointer">{{ item.nickname }}</a>
              <p class="text-gray-600 text-xs">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 回到顶部 -->
    <el-backtop target="#container" :bottom="100">
      <div
        class="w-full bg-white border rounded-3xl text-gray-700 shadow-md text-center text-current"
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }
        "
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script>
import TopBar from '@/components/common/top-bar'
import { createSong } from '@/model/song'
export default {
  components: {
    TopBar
  },
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      // 歌单列表信息
      playlist: {},
      // 歌单创建者
      creator: {},
      // 收藏者
      subscribers: [],
      // tabs 激活标签
      activeTabName: 'songlist',
      // 评论
      comment: '',
      // 歌单列表
      songs: [],
      // 是否显示加载
      loading: false
    }
  },
  computed: {},

  methods: {
    // 设置索引列
    indexPad(index) {
      return (index + 1).toString().padStart(2, 0)
    },

    // 根据id获取歌单信息
    async getPlaylistDetail(id) {
      const res = await this.$api.getPlaylistDetail(id)
      if (res.code !== 200) {
        return this.$message.error('获取歌单详情失败')
      }
      this.playlist = res.playlist
      this.creator = this.playlist.creator
      this.getSongDetail(this.playlist.trackIds)
    },

    // 获取歌曲详情
    async getSongDetail(trackIds) {
      trackIds = trackIds.map(item => item.id)
      const res = await this.$api.getSongDetail(trackIds.toString())
      if (res.code !== 200) {
        return this.$message.error('获取歌曲详情失败')
      }
      this.songs = res.songs
    },

    // 获取收藏者
    async getSubscribers(id) {
      const res = await this.$api.getPlaylistSubscribers({ id, limit: 30 })
      this.subscribers = res.subscribers
    },

    // 监听tab切换
    handleTabClick({ name }) {
      switch (name) {
        case 'songlist':
          this.loading = true
          this.getPlaylistDetail(this.id)
          this.loading = false
          break
        case 'comment':
          this.loading = true
          this.loading = false
          break
        case 'subscribers':
          this.loading = true
          this.getSubscribers(this.id)
          this.loading = false
          break
        default:
          break
      }
    },
    // 播放全部
    playAll() {
      this.$store.dispatch('setPlaylist', this.songs)
    },
    // 单个播放
    selectedOnePlay(row) {
      const newSong = createSong(row)
      this.$store.dispatch('setPlayOne', newSong)
    }
  },

  created() {
    this.getPlaylistDetail(this.id)
  }
}
</script>

<style scoped>
.cover {
  width: 200px;
  @apply rounded-md;
}
.avator {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.btn-default {
  @apply rounded-xl px-4 py-1 border text-gray-900 text-sm hover:bg-gray-100 text-center;
}
.btn-primary {
  @apply text-white bg-red-500 hover:bg-red-700 rounded-xl px-4 py-1 text-sm text-center;
}
.single-justify {
  display: inline-block;
  width: 3em;
  text-align-last: justify;
}
.content {
  display: inline-block;
  width: 17em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @apply text-gray-600 hover:text-gray-900;
}
.description li {
  @apply flex items-center mt-1;
}
.description li a {
  @apply text-blue-400 hover:text-blue-500 px-1;
}
.description li a:not(:last-child)::after {
  content: '/';
  @apply cursor-default text-gray-900;
}
.user-avatar {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}
.userinfo * {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
