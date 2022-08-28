<!--
 * @Author: cully fung
 * @Date: 2021-08-28 22:32:56
 * @LastEditTime: 2022-08-28 23:58:07
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<div class="flex mb-4">
		<div class="album cursor-pointer">
			<m-image :src="playlist.coverImgUrl" style="width: 175px;"></m-image>
			<!-- 播放图标 -->
			<span class="iconfont icon-play1 play-icon absolute-center" @click="playAll"></span>
		</div>
		<div class="flex-1 cursor-default ml-5 flex flex-col justify-between">
			<ul>
				<li v-for="(item, index) in tracks" :key="item.id" class="hover:bg-gray-100 flex items-center justify-between px-2 py-1">
					<span class="w-10 text-center text-sm text-gray-500">{{ index + 1 }}</span>
					<span class="flex-1 text-sm text-gray-800">{{ item.name }}</span>
					<div class="flex justify-end text-gray-600 text-xs">
						<span v-for="item2 in item.ar" :key="item2.id" class="hover:text-gray-800">{{ item2.name }}&nbsp;</span>
					</div>
				</li>
			</ul>
			<span @click="goMore" class="text-sm text-gray-600 hover:text-gray-800">查看更多<i class="el-icon-arrow-right"></i></span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			required: true
		}
	},
	data() {
		return {
			playlist: {},
			tracks: []
		}
	},
	created() {
		this.getPlaylistTop5()
	},
	methods: {
		// 查看更多
		goMore() {
			this.$router.push({
				path: '/songlist',
				query: {
					id: this.id
				}
			})
		},
		// 获取歌单前5个
		async getPlaylistTop5() {
			const res = await this.$api.getPlaylistDetail(this.id)
			if (res.code !== 200) {
				return this.$notify.error('获取歌单失败！')
			}
			this.playlist = res.playlist
			this.tracks = res.playlist.tracks.slice(0, 5)
		},
		// 播放全部
		playAll() {
			this.$store.dispatch('setPlaylist', this.playlist.tracks)
		}
	}
}
</script>

<style lang="scss" scoped>
.album {
	@apply relative;
	.play-icon {
		font-size: 40px;
		@apply text-red-500 opacity-0;
		span {
			font-size: 40px;
		}
	}
	&:hover .play-icon {
		@apply opacity-100 transition-all;
	}
}

ul li:nth-child(odd) {
	@apply bg-gray-100 px-2;
}
</style>
