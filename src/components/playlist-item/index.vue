<!--
 * @Author: cully fung
 * @Date: 2021-08-28 23:49:39
 * @LastEditTime: 2022-08-28 23:58:00
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<div class="card">
		<div class="relative">
			<m-image :src="src" :style="imageStyle"></m-image>
			<div class="flex items-center text-xs text-white absolute top-0.5 right-0.5">
				<span class="el-icon-headset mx-0.5"></span>
				{{ num | numFmtThousand }}
			</div>
			<div class="play-icon opacity-0 transition-all absolute" :class="position">
				<span class="iconfont icon-play1 text-red-500" style="font-size: 40px"></span>
			</div>
		</div>
		<p class="label text-2-ellipsis">
			{{ label }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String
		},
		label: {
			type: String
		},
		imageStyle: { type: Object },
		num: {
			type: Number,
			default: 0
		},
		position: { type: String, default: 'rb' }
	}
}
</script>

<style lang="scss" scoped>
.card {
	//@apply shadow-sm;
}
.label {
	height: 4em;
	@apply text-xs text-gray-600 hover:text-gray-900 py-1 px-0.5;
}
.card:hover .play-icon {
	opacity: 1;
}
// 右下
.rb {
	@apply bottom-1 right-1;
}
// 居中
.center {
	@apply top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2;
}
</style>
