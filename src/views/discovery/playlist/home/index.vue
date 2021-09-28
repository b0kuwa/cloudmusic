<template>
  <div>
    <!-- 专辑封面-->
    <router-link
      :to="{ name: 'quality', params: { cat: params.cat } }"
      class="rounded-md relative flex items-center overflow-hidden"
      style="height: 165px"
      v-if="quality"
    >
      <div
        class="bg w-full h-full absolute rounded-md bg-no-repeat bg-center bg-current bg-cover blur-2xl filter"
        :style="{ backgroundImage: 'url(' + quality.coverImgUrl + ')' }"
      ></div>
      <div class="flex z-10">
        <img :src="quality.coverImgUrl" style="height: 140px" class="rounded-md mx-3" />
        <div>
          <p
            class="
              rounded-2xl
              my-4
              text-sm
              py-1
              px-4
              flex
              gap-2
              items-center
              justify-center
              w-24
              whitespace-nowrap
              text-yellow-400
              bg-transparent
              border border-yellow-400
            "
          >
            <i class="el-icon-headset"> </i><span>精品歌单</span>
          </p>
          <p class="text-white">{{ quality.name }}</p>
          <p class="text-gray-100 text-xs">{{ quality.copywriter }}</p>
        </div>
      </div>
    </router-link>
    <div class="flex items-center justify-between my-4">
      <!-- 全部歌单 -->
      <el-popover placement="bottom-start" width="745" trigger="click" @show="showPopover" v-model="popVisible">
        <div class="cursor-default">
          <el-tag type="danger" size="small" @click="handleTagClick">全部歌单</el-tag>
          <el-divider></el-divider>
          <dl v-for="item in catelist" :key="item.cat_id" class="flex mb-5 text-sm">
            <!-- 分类标题 -->
            <dt class="whitespace-nowrap px-3 mr-5 text-gray-300 font-extralight">
              {{ item.cat_name }}
            </dt>
            <!-- 分类子标题 -->
            <dd class="flex-1 grid grid-cols-6 gap-4">
              <a
                v-for="sub in item.children"
                :key="sub.id"
                :underline="false"
                class="text-sm text-gray-700 hover:text-red-600 cursor-pointer"
                @click.prevent="handlePopChange(sub.name)"
              >
                {{ sub.name }}
                <sup v-if="sub.hot" class="text-red-400 text-xs">Hot</sup>
              </a>
            </dd>
          </dl>
        </div>
        <!-- 按钮 -->
        <el-button slot="reference" round size="small" plain>
          {{ defaultTag }}
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </el-popover>

      <!-- 标签栏 -->
      <div class="flex gap-2">
        <a
          href="#"
          @click.prevent="handleTabClick(tag.name)"
          v-for="tag in hotTags"
          :key="tag.id"
          class="text-xs text-gray-600 px-2 py-0.5 rounded-3xl hover:text-gray-800 focus:text-red-400 focus:bg-red-50"
        >
          {{ tag.name }}
        </a>
      </div>
    </div>

    <!-- 展示区 -->
    <div class="grid grid-cols-5 gap-4" v-if="loading">
      <router-link
        :to="{ name: 'songlist', query: { id: item.id } }"
        v-for="item in playlists"
        :key="item.id"
        class="cursor-pointer shadow-sm"
      >
        <playlist-item :label="item.name" :album="item.coverImgUrl" :num="item.playCount"></playlist-item>
      </router-link>
    </div>

    <loading :loading="!loading" text="正在拼命加载中" class="text-blue-400"></loading>

    <!-- 分页 -->
    <div class="flex justify-center m-3 p-3">
      <el-pagination
        background
        hide-on-single-page
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="queryInfo.limit"
        layout="prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import PlaylistItem from '@/components/playlist-item'
import Loading from '@/components/loading'

export default {
  components: {
    PlaylistItem,
    Loading
  },
  data() {
    return {
      // 获取歌单查询参数
      queryInfo: {
        order: 'hot',
        cat: '全部',
        limit: 100,
        offset: 0
      },
      // 获取精品歌单查询参数
      params: {
        cat: '全部',
        limit: 1
      },
      total: 0,
      currentPage: 1,
      playlists: [],
      hotTags: [],
      catelist: [],
      // 默认标签
      defaultTag: '全部歌单',
      // tab标签激活的标签
      activeName: '',
      // 封面信息
      albumUrl: '',
      // 弹出层是否显示
      popVisible: false,
      // 精品歌单
      quality: null
    }
  },
  computed: {
    loading() {
      return this.playlists.length > 0 || false
    }
  },
  created() {
    this.getTopPlaylist()
    this.getPlayListHot()
    this.getTopPlayListHighquality()
  },
  methods: {
    // 获取歌单
    async getTopPlaylist() {
      this.playlists = []
      const res = await this.$api.getTopPlaylist(this.queryInfo)
      if (res.code !== 200) {
        return this.$message.error('获取歌单失败！')
      }
      this.playlists = res.playlists
      this.total = res.total
    },
    // 获取热门歌单标签
    async getPlayListHot() {
      const res = await this.$api.getPlaylistHot()
      if (res.code !== 200) {
        return this.$message.error('获取热门歌单分类失败！')
      }
      this.hotTags = res.tags
    },
    // 获取精品歌单
    async getTopPlayListHighquality() {
      const res = await this.$api.getTopPlayListHighquality(this.params)
      if (res.code !== 200) {
        return this.$message.error('获取精品歌单失败！')
      }
      this.quality = res.playlists[0]
    },
    // 监听当前页码改变
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.queryInfo.offset = this.currentPage * this.queryInfo.limit
      this.getTopPlaylist()
    },
    // 显示弹出层
    async showPopover() {
      const res = await this.$api.getPlaylistCatelist()
      if (res.code !== 200) {
        return this.$message.error('获取歌单分类失败！')
      }
      const catelist = []
      Object.keys(res.categories).forEach(cat_id => {
        catelist.push({
          cat_id,
          cat_name: res.categories[cat_id],
          children: res.sub.filter(item => {
            return cat_id >>> 0 === item.category
          })
        })
      })
      this.catelist = catelist
    },
    // 标签栏切换
    handleTabClick(tag) {
      this.queryInfo.cat = tag
      this.params.cat = tag
      this.getTopPlaylist()
      this.getTopPlayListHighquality()
      this.defaultTag = tag
    },
    // 监听弹出层标签被点击
    handleTagClick() {
      this.queryInfo.cat = '全部'
      this.params.cat = '全部'
      this.getTopPlaylist()
      this.getTopPlayListHighquality()
      this.popVisible = false
      this.defaultTag = '全部歌单'
    },
    // 监听弹出层标签切换
    handlePopChange(tag) {
      this.queryInfo.cat = tag
      this.params.cat = tag
      this.getTopPlaylist()
      this.getTopPlayListHighquality()
      this.popVisible = false
      this.defaultTag = tag
    }
  }
}
</script>

<style scoped>
.el-table th > .cell {
  @apply text-xs;
}
.bg {
  filter: contrast(50%) blur(50px);
  backdrop-filter: blur(14px);
}
</style>