<!--
 * @Author: cully fung
 * @Date: 2021-08-29 01:03:56
 * @LastEditTime: 2022-08-28 23:57:34
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<div class="loading-wrap">
		<span class="el-icon-loading"></span>
		<span>{{ text }}</span>
	</div>
</template>

<script>
export default {
	name:'m-loading',
	props: {
		text: {
			type: String,
			default: '正在加载中...'
		}
	}
}
</script>

<style lang="scss" scoped>
.loading-wrap {
	@apply flex flex-col justify-center items-center gap-2 text-sm;
}
</style>
