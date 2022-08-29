<!--
 * @Author: cully fung
 * @Date: 2021-08-25 16:28:56
 * @LastEditTime: 2022-08-29 23:41:17
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<div class="mx-auto" style="max-width: 1050px">
		<header>
			<el-popover placement="bottom-start" width="400" trigger="click">
				<div>
					<ul class="grid grid-cols-6 gap-4">
						<li></li>
					</ul>
				</div>
				<el-button slot="reference" plain size="mini" round>全部视频</el-button>
			</el-popover>
		</header>
	</div>
</template>

<script>
export default {
	data() {
		return {
			videoList: []
		}
	},
	methods: {
		// 获取全部视频列表
		async getVideoTimelineAll() {}
	}
}
</script>

<style scoped></style>
