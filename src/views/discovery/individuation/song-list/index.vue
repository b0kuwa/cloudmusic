<!--
 * @Author: cully fung
 * @Date: 2021-06-15 16:35:53
 * @LastEditTime: 2022-08-29 00:02:59
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<div class="grid gap-5 grid-cols-5">
		<router-link
			v-for="item in list"
			:key="item.id"
			class="rounded-sm overflow-hidden cursor-pointer"
			:to="{ path: '/songlist', query: { id: item.id } }"
		>
			<playlist-item :src="item.picUrl" :num="item.playCount" :label="item.name"></playlist-item>
		</router-link>
	</div>
</template>

<script>
import PlaylistItem from '@/components/playlist-item'

export default {
	components: {
		PlaylistItem
	},
	props: {
		list: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
.album:hover .play {
	@apply opacity-100;
}
</style>
