<!--
 * @Author: cully fung
 * @Date: 2021-06-14 15:27:30
 * @LastEditTime: 2022-08-28 23:59:35
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<keep-alive>
		<router-view class="mx-auto"></router-view>
	</keep-alive>
</template>
<style scoped>
main {
	height: calc(100vh - 60px);
	overflow: auto;
}
</style>
