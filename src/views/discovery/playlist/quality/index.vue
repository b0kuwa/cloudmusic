<template>
	<div id="container">
		<!-- 头部区域 -->
		<header class="flex justify-between items-center">
			<h1>精品歌单</h1>
			<el-popover
				placement="bottom-end"
				trigger="click"
				v-model="popoverVisible"
			>
				<div>
					<el-tag
						@click.prevent="handleChangeFilter()"
						size="mini"
						type="danger"
						class="cursor-default"
						>全部歌单</el-tag
					>
					<el-divider></el-divider>
					<div class="grid grid-cols-4 gap-4">
						<a
							href="#"
							@click.prevent="handleChangeFilter(item.name)"
							v-for="item in qualityTags"
							:key="item.id"
							class="tag text-xs text-gray-700 hover:text-red-400 px-2 py-1 rounded-xl whitespace-nowrap"
						>
							{{ item.name }}
						</a>
					</div>
				</div>
				<el-button slot="reference" size="mini" round plain>{{
					filter
				}}</el-button>
			</el-popover>
		</header>
		<!-- 内容展示 -->

		<main class="grid grid-cols-3 gap-4 overflow-auto" v-infinite-scroll="load">
			<router-link
				:to="{ path: '/songlist', query: { id: item.id } }"
				class="flex overflow-hidden"
				v-for="(item, index) in playlist"
				:key="index"
			>
				<div class="relative album">
					<m-image
						:src="item.coverImgUrl"
						style="width: 135px;height: 135px;"
					></m-image>
					<span
						class="text-white absolute top-0.5 right-1 text-xs flex items-center"
					>
						<i class="el-icon-headset text-white"></i
						>{{ item.playCount | numFmtThousand }}</span
					>
					<i
						class="iconfont icon-play1 absolute right-1 bottom-0 text-red-500 hover:opacity-100 opacity-0"
						style="font-size: 30px"
					></i>
				</div>
				<div
					class="mx-2 flex flex-col justify-center text-xs whitespace-nowrap overflow-ellipsis overflow-hidden"
				>
					<div class="text-sm text-gray-800">{{ item.name }}</div>
					<div class="text-gray-500 my-2">by{{ item.creator.nickname }}</div>
					<div class="text-gray-400 my-4 overflow-ellipsis">
						<el-tag type="danger" size="mini" effect="plain">{{
							item.tag
						}}</el-tag>
						<span class="overflow-hidden overflow-ellipsis">
							{{ item.copywriter }}</span
						>
					</div>
				</div>
			</router-link>
		</main>
	</div>
</template>

<script>
import {
	getPlaylistHighqualityTags,
	getTopPlayListHighquality
} from '@/api/playlist'
import MImage from '@/components/m-image/index.vue'
export default {
	props: {
		cat: {
			type: String
		}
	},
	components: {
		MImage
	},
	data() {
		return {
			playlist: [],
			query: {
				limit: 30,
				before: 0
			},
			qualityTags: [],
			popoverVisible: false,
			filter: '筛选'
		}
	},
	created() {
		this.getPlaylistHighqualityTags()
	},
	computed: {
		updateTime() {
			if (this.playlist.length > 0) {
				return this.playlist[this.playlist.length - 1].updateTime
			}
			return 0
		}
	},
	mounted() {
		if (this.cat !== '全部') {
			this.query.cat = this.cat
			this.filter = this.cat
		}
		this.getTopPlayListHighquality()
	},
	methods: {
		// 获取精品歌单标签
		async getPlaylistHighqualityTags() {
			const res = await getPlaylistHighqualityTags()
			if (res.code !== 200) {
				return this.$message.error('获取精品歌单标签失败！')
			}
			this.qualityTags = res.tags
		},
		// 获取精品歌单
		async getTopPlayListHighquality() {
			const res = await getTopPlayListHighquality(this.query)
			if (res.code !== 200) {
				return this.$message.error('获取精品歌单失败！')
			}
			this.more = res.more
			this.playlist = [...this.playlist, ...res.playlists]
		},
		// 监听筛选按钮
		handleChangeFilter(filter) {
			this.popoverVisible = false
			if (filter) {
				this.filter = filter
				this.query.cat = this.filter
			} else {
				this.filter = '筛选'
				this.query.cat && delete this.query.cat
			}
			this.playlist = []
			this.getTopPlayListHighquality()
		},
		// 加载更多
		load() {
			this.query.before = this.updateTime
			this.getTopPlayListHighquality()
		}
	}
}
</script>

<style scoped>
#container.content {
	max-width: 100%;
	@apply p-4;
}
.el-divider {
	@apply my-2;
}
.active {
	@apply text-red-400 bg-red-100;
}
img {
	width: 135px !important;
	height: 135px !important;
}
.album:hover > i {
	opacity: 1;
}
</style>
