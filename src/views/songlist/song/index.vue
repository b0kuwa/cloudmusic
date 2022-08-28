<!--
 * @Author: cully fung
 * @Date: 2021-10-01 11:17:35
 * @LastEditTime: 2022-08-29 00:05:58
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<div id="container">
		<el-table
			:data="songs"
			stripe
			style="width: 100%"
			@row-dblclick="play"
			v-loading="loading"
			element-loading-text="拼命加载中"
			element-loading-spinner="el-icon-loading"
		>
			<el-table-column type="index" :index="indexPad"></el-table-column>
			<el-table-column prop="name" label="音乐标题"></el-table-column>
			<el-table-column label="歌手">
				<template v-slot="{ row }">
					<span v-for="item in row.ar" :key="item.id">{{ item.name }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="al.name" label="专辑"></el-table-column>
			<el-table-column prop="h.br" label="时长" width="100">
				<template v-slot="{ row }">
					{{ row.dt | duration }}
				</template>
			</el-table-column>
		</el-table>
		<!-- 回到顶部 -->
		<el-backtop
			target="#container"
			:bottom="100"
			style="width: 40px;height: 40px;"
		>
			<div
				class="w-full bg-white border rounded-3xl text-gray-700 shadow-md text-center text-current"
			>
				UP
			</div>
		</el-backtop>
	</div>
</template>

<script>
export default {
	props: {
		songs: {
			type: Array,
			default: () => []
		}
	},
	computed: {
		loading() {
			return this.songs.length === 0
		}
	},
	methods: {
		// 设置索引列
		indexPad(index) {
			return (index + 1).toString().padStart(2, 0)
		},
		play(row) {
			this.$store.dispatch('setPlaylist', this.songs)
			this.$store.dispatch('setPlayOne', row)
		}
	}
}
</script>

<style lang="scss" scoped>
.el-table th,
.el-table td {
	padding: 5px 0 !important;
}
</style>
