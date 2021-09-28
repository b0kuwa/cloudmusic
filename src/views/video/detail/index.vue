<template>
  <div style="max-width: 1050px" class="mx-auto">
    <el-row :gutter="20">
      <!-- 详情 -->
      <el-col :span="16">
        <!-- 标题 -->
        <h1 class="title">
          {{ title }}
          <i class="el-icon-arrow-right"></i>
        </h1>
        <!-- 播放器 -->
        <video :src="mvurl" class="rounded-md w-full" controls></video>
        <!-- 作者信息 -->
        <section class="mv-info">
          <div class="flex items-center">
            <img src="" alt="" />
            <span v-for="item in mvdata.artists" :key="item.id">{{ item.name }}</span>
          </div>
          <div class="cursor-default">
            <p class="text-2xl flex justify-between">
              <span>{{ mvdata.name }}</span>
              <span @click="isExpand = !isExpand" :class="isExpand ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"></span>
            </p>
            <p class="text-xs text-gray-400 flex">
              <span class="mr-4">发布：{{ mvdata.publishTime }}</span>
              <span>播放：{{ mvdata.playCount | numberFormatThousand }}次</span>
            </p>
            <p class="text-xs my-2 transition-all overflow-hidden" :class="isExpand ? 'max-h-20' : 'max-h-0'">
              {{ mvdata.desc }}
            </p>
            <p class="my-6">
              <button class="btns">赞({{ mvDetailInfo.likedCount }})</button>
              <button class="btns">收藏({{ mvdata.subCount }})</button>
              <button class="btns">分享({{ mvDetailInfo.shareCount }})</button>
            </p>
            <div>
              <h2 class="font-medium">
                听友评论<span class="text-xs text-gray-600 px-2">(已有{{ mvDetailInfo.commentCount }}条评论)</span>
              </h2>
            </div>
          </div>
        </section>
        <!-- 发布评论 -->
        <section>
          <el-input
            type="textarea"
            rows="3"
            placeholder="请输入评论或@朋友"
            maxlength="140"
            show-word-limit
            class="my-4"
          ></el-input>
        </section>
        <!-- 精彩评论 -->
        <section>
          <h2 class="font-medium text-sm my-2">精彩评论</h2>
          <ul>
            <li v-for="item in hotComments" :key="item.commentId" class="flex">
              <img :src="item.user.avatarUrl" class="avatar" />
              <div class="flex flex-col ml-2 flex-1">
                <div class="text-sm">
                  <span class="text-blue-500">{{ item.user.nickname }}:</span>{{ item.content }}
                </div>
                <div class="flex-1">
                  <div class="text-xs text-gray-500">{{ item.time | MMDD }}</div>
                  <div>
                    <span><i class=""></i></span>
                    <i></i>
                  </div>
                  <el-divider class="w-full"></el-divider>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <!-- 最新评论 -->
        <section>
          <h2 class="font-medium text-sm my-2">最新评论</h2>
          <ul>
            <li v-for="item in newComments" :key="item.commentId" class="flex">
              <img :src="item.user.avatarUrl" class="avatar" />
              <div class="flex flex-col ml-2 flex-1">
                <div class="text-sm">
                  <span class="text-blue-500">{{ item.user.nickname }}:</span>{{ item.content }}
                </div>
                <div class="flex-1">
                  <div class="text-xs text-gray-500">{{ item.time | MMDD }}</div>
                  <div>
                    <span><i class=""></i></span>
                    <i></i>
                  </div>
                  <el-divider class="w-full"></el-divider>
                </div>
              </div>
            </li>
          </ul>

          <!-- 分页 -->
          <div class="text-center">
            <el-pagination
              hide-on-single-page
              background
              small
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="queryInfo.limit"
              layout="prev, pager, next"
              :total="total"
            >
            </el-pagination>
          </div>
        </section>
      </el-col>
      <!-- 相关推荐 -->
      <el-col :span="8">
        <h1 class="title">相关推荐</h1>
        <ul>
          <router-link
            :to="{ name: 'videoDetail', params: { mvid: item.vid } }"
            tag="li"
            v-for="item in relatedList"
            :key="item.vid"
            class="flex my-2 items-center"
          >
            <img :src="item.coverUrl" class="rounded-md object-cover related-album" />
            <div class="ml-2">
              <h3 class="text-sm">{{ item.title }}</h3>
              <p class="text-gray-500 text-xs text-2-ellipsis">
                by <span v-for="author in item.creator" :key="author.userId">{{ author.userName }}</span>
              </p>
            </div>
          </router-link>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    mvid: {
      required: true
    },
    title: {
      required: true,
      default: '视频详情'
    }
  },
  data() {
    return {
      // 是否展开标题详情
      isExpand: false,
      // mv url
      mvurl: '',
      // mv数据
      mvdata: {},
      // mv详情
      mvDetailInfo: {
        likeCount: 0,
        shareCount: 0,
        commentCount: 0
      },
      activeNames: ['1'],
      // 精彩评论
      hotComments: [],
      // 最新评论
      newComments: [],
      // 用于分页的query
      queryInfo: {
        id: this.mvid,
        limit: 20,
        offset: 0
      },
      // 当前页码
      currentPage: 1,
      // 总记录条数
      total: 0,
      // 相关推荐列表
      relatedList: []
    }
  },
  watch: {
    $route: {
      handler() {
        this.init()
      },
      deep: true
    }
  },
  methods: {
    // 获取mv详情
    getMvDetail() {
      const res = this.$api.getMvDetail(this.mvid)
      this.mvdata = res.data
    },
    // 获取mv地址
    getMvUrl() {
      const res = this.$api.getMvUrl(this.mvid)
      this.mvurl = res.data.url
    },
    // 获取mv点赞转发评论数数据
    getMvDetailInfo() {
      const res = this.$api.getMvDetailInfo(this.mvid)
      this.mvDetailInfo = { ...res }
    },
    // 获取精彩评论
    getHotComment() {
      const res = this.$api.getCommentHot({ id: this.mvid, type: 1 })
      this.hotComments = res.hotComments
    },
    // 获取最新评论
    getNewComment() {
      const res = this.$api.getCommentMv(this.queryInfo)
      this.newComments = res.comments
      this.total = res.total
    },
    // 获取相关推荐列表
    getRelatedList() {
      const res = this.$api.getRelatedAllvideo(this.mvid)
      this.relatedList = res.data
    },
    handleChange(val) {
      console.log(val)
    },
    // 监听页码
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.queryInfo = { ...this.queryInfo, offset: (this.currentPage - 1) * this.queryInfo.limit }
      this.getNewComment()
    },
    // 初始化数据
    init() {
      Promise.all([
        this.$api.getMvDetail(this.mvid),
        this.$api.getMvUrl(this.mvid),
        this.$api.getMvDetailInfo(this.mvid),
        this.$api.getCommentHot({ id: this.mvid, type: 1 }),
        this.$api.getCommentMv(this.queryInfo),
        this.$api.getRelatedAllvideo(this.mvid)
      ])
        .then(resList => {
          this.mvdata = resList[0].data
          this.mvurl = resList[1].data.url
          this.mvDetailInfo = { ...resList[2] }
          this.hotComments = resList[3].hotComments
          this.newComments = resList[4].comments
          this.total = resList[4].total
          this.relatedList = resList[5].data
        })
        .catch(err => {
          return this.$notify.error({
            title: '错误',
            message: err
          })
        })
    }
  },
  created() {
    this.init()
  }
}
</script>

<style scoped>
.el-row {
  @apply mx-auto block;
}
.title {
  @apply font-medium text-gray-700 hover:text-gray-900 cursor-pointer my-4 block;
}
.btns {
  @apply rounded-full bg-white border px-3 py-1 text-sm;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.related-album {
  width: 140px;
  height: 80px;
}
</style>