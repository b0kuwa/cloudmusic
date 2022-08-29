<template>
	<div>
		<el-input
			placeholder="搜索"
			prefix-icon="el-icon-search"
			v-model="search"
			clearable
			size="mini"
			v-popover:popover
		></el-input>
		<el-popover
			ref="popover"
			placement="bottom"
			width="400"
			trigger="focus"
			popper-class="search-popover"
			:visible-arrow="false"
			v-model="visible"
		>
			<div class="popover-container">
				<!-- 搜索框无内容 -->
				<div v-show="!search">
					<!-- 搜索历史 -->
					<div class="px-4 py-2">
						<div class="text-sm flex justify-between">
							<div>
								搜索历史<i
									class="el-icon-delete text-gray-500 hover:text-gray-800 mx-1"
								></i>
							</div>
							<div class="text-gray-500 hover:text-gray-800 cursor-pointer">
								查看全部
							</div>
						</div>
						<!-- 搜索历史标签 -->
						<div></div>
					</div>
					<!-- 热搜榜 -->
					<div>
						<h1 class="my-4 px-4">热搜榜</h1>
						<ul>
							<li
								v-for="(item, index) in searchHot"
								:key="index"
								class="flex items-center hover:bg-gray-100 py-2 cursor-pointer"
							>
								<!-- 序号 -->
								<span
									class="text-lg mx-4"
									:class="index < 3 ? 'text-red-600' : 'text-gray-400'"
									>{{ index + 1 }}</span
								>
								<div class="text-sm">
									<div class="align-middle">
										<span class="font-medium">{{ item.searchWord }}</span>
										<sup class="text-red-600 italic font-semibold">Hot</sup>
										<span class="text-gray-300 text-xs ml-4">{{
											item.score
										}}</span>
									</div>
									<div
										class="text-gray-400 w-56 overflow-hidden overflow-ellipsis whitespace-nowrap"
									>
										{{ item.content }}
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- 搜索框有内容 -->
				<div v-show="search" class="cursor-pointer">
					<h1 class="p-2">
						搜”<span class="text-blue-500">{{ search }}</span
						>“相关的结果 <i class="el-icon-arrow-right"></i>
					</h1>
					<!-- 单曲 -->
					<div v-show="songs.length > 0">
						<h2 class="flex items-center text-sm text-gray-400 gap-2 p-2">
							<iconpark-icon name="music-one"></iconpark-icon>
							单曲
						</h2>
						<ul class="text-sm">
							<li
								v-for="item in songs"
								:key="item.id"
								class="hover:bg-gray-200 px-6 py-1 ml-0.5"
								@click="playOne(item)"
							>
								{{ item.name }}
							</li>
						</ul>
					</div>
					<!-- 歌手 -->
					<div v-show="artists.length > 0">
						<h2 class="flex items-center text-sm text-gray-400 gap-2 p-2">
							<iconpark-icon name="user"></iconpark-icon>
							歌手
						</h2>
						<ul class="text-sm">
							<li
								v-for="item in artists"
								:key="item.id"
								class="hover:bg-gray-200 px-5 py-1 ml-0.5"
							>
								{{ item.name }}
							</li>
						</ul>
					</div>
					<!-- 专辑 -->
					<div v-show="albums.length > 0">
						<h2 class="flex items-center text-sm text-gray-400 gap-2 p-2">
							<iconpark-icon name="cd"></iconpark-icon>
							专辑
						</h2>
						<ul class="text-sm">
							<li
								v-for="item in albums"
								:key="item.id"
								class="hover:bg-gray-200 px-5 py-1 ml-0.5"
							>
								{{ item.name }}
							</li>
						</ul>
					</div>
					<!-- 歌单 -->
					<div v-show="playlists.length > 0">
						<h2 class="flex items-center text-sm text-gray-400 gap-2 p-2">
							<iconpark-icon name="music-menu"></iconpark-icon>
							歌单
						</h2>
						<ul class="text-sm">
							<li
								v-for="item in playlists"
								:key="item.id"
								class="hover:bg-gray-200 px-5 py-1 ml-0.5"
							>
								{{ item.name }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</el-popover>
	</div>
</template>

<script>
import { getSearchHotDetail, getSearchSuggest } from '@/api/search'

export default {
	data() {
		return {
			// 搜索内容
			search: '',
			// 热搜
			searchHot: [],
			// 是否显示popover
			visible: false,
			// 专辑
			albums: [],
			// 单曲
			songs: [],
			// 歌手
			artists: [],
			// 歌单
			playlists: []
		}
	},
	watch: {
		visible(newValue) {
			newValue && this.getSearchHotDetail()
		},
		search(newValue) {
			newValue && this.getSearchSuggest()
		}
	},
	methods: {
		async getSearchHotDetail() {
			const res = await getSearchHotDetail()
			if (res.code !== 200) {
				return
			}
			this.searchHot = res.data
		},
		async getSearchSuggest() {
			const res = await getSearchSuggest(this.search)
			if (res.code !== 200) {
				return
			}
			res.result.order.forEach(item => {
				this[item] = res.result[item]
			})
		},
		playOne(song) {
			this.$store.dispatch('setPlayOne', song)
		}
	}
}
</script>

<style scoped>
.popover-container {
	height: calc(100vh - 150px);
	overflow: auto;
}

.search-popover {
	margin: 0 !important;
	padding: 0 !important;
}
</style>
