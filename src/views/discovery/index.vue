<!--
 * @Author: cully fung
 * @Date: 2021-08-23 18:13:08
 * @LastEditTime: 2022-08-29 23:21:04
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
	name: 'Discovery'
}
</script>

<style lang="scss" scoped>
.content {
	max-width: 1050px;
	@apply mx-auto;
}
</style>
