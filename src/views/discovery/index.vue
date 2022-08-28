<!--
 * @Author: cully fung
 * @Date: 2021-08-23 18:13:08
 * @LastEditTime: 2022-08-29 00:03:32
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<keep-alive>
		<router-view class="content"></router-view>
	</keep-alive>
</template>

<script>
export default {
	data() {
		return {
			// 不会变动的数据 没必要设置为响应式数据
		}
	}
}
</script>

<style lang="scss" scoped>
.content {
	max-width: 1050px;
	@apply mx-auto;
}
</style>
