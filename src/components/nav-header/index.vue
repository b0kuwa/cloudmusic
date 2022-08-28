<!--
 * @Author: cully fung
 * @Date: 2021-08-24 00:20:04
 * @LastEditTime: 2022-08-28 23:57:51
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<div class="nav-header" style="height: 50px">
		<!-- 路由前进和后退 -->
		<div class="flex text-red-300 justify-end bg-red-500 items-center h-full w-52">
			<span class="el-icon-arrow-left route" @click="$router.go(-1)"></span>
			<span class="el-icon-arrow-right route" @click="$router.go(1)"></span>
		</div>
		<div class="bg-red-500 flex-1 h-full flex items-center justify-between pr-20">
			<!-- 链接 -->
			<div class="flex justify-between items-center text-red-200 text-sm bg-red-500">
				<slot>
					<router-link
						:to="item.to"
						v-for="(item, index) in list"
						:key="index"
						class="flex item-center justify-center hover:text-white px-4 py-2 cursor-pointer"
					>
						{{ item.label }}
					</router-link>
				</slot>
			</div>
			<!-- 搜索框 -->
			<search></search>
		</div>
	</div>
</template>

<script>
import Search from '@/components/search'
export default {
	components: {
		Search
	},
	props: {
		list: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style scoped>
.nav-header {
	display: flex;
	z-index: 9999;
}
.router-link-active {
	@apply text-white font-extrabold;
}
</style>
