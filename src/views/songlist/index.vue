<template>
	<div>
		<!-- 头部 -->
		<div class="flex mx-4">
			<m-image
				:src="playlist.coverImgUrl || ''"
				style="width: 200px;"
			></m-image>
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
						<m-image
							:src="creator.avatarUrl || ''"
							style="width: 30px;height: 30px;border-radius: 50%;"
						></m-image>
					</router-link>
					<!-- 昵称 -->
					<span
						class="text-sm text-blue-400 mx-2 hover:text-blue-500 cursor-pointer"
						>{{ creator.nickname }}</span
					>
					<!-- 创建时间 -->
					<span class="text-gray-600 text-xs cursor-default"
						>{{ playlist.createTime | dateFmt }} 创建</span
					>
				</div>
				<!-- 操作按钮 -->
				<div class="grid grid-cols-4 gap-4">
					<button class="btn-primary outline-none" @click="playAll">
						<i class="el-icon-video-play"></i> 播放全部
						<i class="el-icon-plus"></i>
					</button>
					<button class="btn-default">
						<i class="el-icon-folder-add"></i> 收藏({{
							playlist.subscribedCount | numFmtThousand
						}})
					</button>
					<button class="btn-default">
						<i class="el-icon-share"></i> 分享
					</button>
					<button class="btn-default">
						<i class="el-icon-download"></i> 下载全部
					</button>
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
						<span>{{ playlist.playCount | numFmtThousand }}</span>
					</li>
					<li>
						<span class="single-justify">简介</span><span class="mr-1">:</span>
						<span
							class="content single-ellipsis"
							:title="playlist.description"
							>{{ playlist.description }}</span
						>
					</li>
				</ul>
			</div>
		</div>
		<!-- 内容展示 -->
		<el-tabs
			v-model="activeTabName"
			@tab-click="handleTabClick"
			class="px-4 cursor-default"
		>
			<!-- 歌曲列表-->
			<el-tab-pane label="歌曲列表" name="songlist">
				<song :songs="songs"></song>
			</el-tab-pane>
			<!-- 评论 -->
			<el-tab-pane :label="`评论(${playlist.commentCount})`" name="comment">
				<comment></comment>
			</el-tab-pane>
			<!-- 收藏 -->
			<el-tab-pane label="收藏者" name="subscribers">
				<collector :subscribers="subscribers"></collector>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import Song from './song'
import Comment from './comment'
import Collector from './collector'

export default {
	components: {
		Song,
		Comment,
		Collector
	},

	props: ['id'],

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
			songs: []
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

	computed: {
		isReady() {
			return this.songs.length > 0
		}
	},

	methods: {
		async init() {
			this.loading = true
			let res = await this.$api.getPlaylistDetail(this.id)
			this.loading = false
			if (res.code !== 200) {
				return this.$notify.error('获取歌单详情失败')
			}
			this.playlist = res.playlist
			this.creator = this.playlist.creator

			const trackIds = this.playlist.trackIds.map(item => item.id).toString()
			res = await this.$api.getSongDetail(trackIds)
			if (res.code !== 200) {
				return this.$notify.error('获取歌曲详情失败')
			}
			this.songs = res.songs
		},

		// 获取收藏者
		async getSubscribers() {
			this.loading = true
			const res = await this.$api.getPlaylistSubscribers({
				id: this.id,
				limit: 30
			})
			this.loading = false
			if (res.code !== 200) {
				return this.$notify.error('获取歌单收藏者失败！')
			}
			this.subscribers = res.subscribers
		},

		// 监听tab切换
		handleTabClick({ name }) {
			switch (name) {
				case 'songlist':
					this.init()
					break
				case 'comment':
					break
				case 'subscribers':
					this.getSubscribers()
					break
				default:
					break
			}
		},
		// 播放全部
		playAll() {
			this.isReady && this.$store.dispatch('setPlaylist', this.songs)
		}
	},

	created() {
		this.init()
	}
}
</script>

<style scoped>
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
</style>
