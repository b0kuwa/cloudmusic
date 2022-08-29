<!--
 * @Author: cully fung
 * @Date: 2021-06-14 21:36:22
 * @LastEditTime: 2022-08-29 22:01:14
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<div
		v-loading="loading"
		element-loading-text="拼命加载中"
		element-loading-spinner="el-icon-loading"
	>
		<!-- 轮播图 -->
		<banner :banners="bannerList" attr="imageUrl"></banner>
		<!-- 推荐歌单 -->
		<m-title :level="3" title="推荐歌单" :to="{ path: '/playlist' }"></m-title>
		<song-list :list="songList"></song-list>
		<!-- 独家放送 -->
		<m-title :level="3" title="独家放送" :to="{ path: '/privatecontent' }">
		</m-title>
		<private-content :list="privateContent"></private-content>
		<!-- 最新音乐 -->
		<m-title :level="3" title="最新音乐" :to="{ path: '/privatecontent' }">
		</m-title>
		<new-song :list="newSongList"></new-song>
		<!-- 推荐MV -->
		<m-title :level="3" title="推荐MV" :to="{ path: '/video/mv' }"></m-title>
		<mv-list :list="mvList"></mv-list>
	</div>
</template>

<script>
import SongList from './song-list'
import PrivateContent from './private-content'
import NewSong from './new-song'
import MvList from './mv-list'

import Banner from '@/components/banner/index.vue'
import {
	getBanners,
	getPersonalized,
	getPersonalizedMV,
	getPersonalizedNewSong,
	getPersonalizedPrivateContent
} from '@/api'

export default {
	components: {
		SongList,
		PrivateContent,
		NewSong,
		MvList,
		Banner
	},
	data() {
		return {
			loading: true,
			bannerList: [],
			songList: [],
			privateContent: [],
			newSongList: [],
			mvList: []
		}
	},
	created() {
		Promise.all([
			getBanners(),
			getPersonalized(10),
			getPersonalizedPrivateContent(),
			getPersonalizedNewSong(),
			getPersonalizedMV()
		])
			.then(res => {
				this.loading = false
				this.bannerList = res[0].banners
				this.songList = res[1].result
				this.privateContent = res[2].result
				this.newSongList = res[3].result
				this.mvList = res[4].result
			})
			.catch(err => {
				this.loading = false
				this.$notify.error({
					title: '错误',
					message: err.message
				})
			})
	}
}
</script>

<style scoped></style>
