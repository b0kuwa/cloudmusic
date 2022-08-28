<!--
 * @Author: cully fung
 * @Date: 2021-08-23 23:43:54
 * @LastEditTime: 2022-08-29 00:00:39
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<div>
		<banner :banners="banners" attr="pic"></banner>
	</div>
</template>

<script>
import banner from '@/components/banner'

export default {
	data() {
		return {
			banners: []
		}
	},
	components: {
		banner
	},
	created() {
		this.getDjBanner()
	},
	methods: {
		async getDjBanner() {
			const res = await this.$api.getDjBanner()
			if (res.code !== 200) {
				return this.$message.error('获取轮播图失败！')
			}
			this.banners = res.data
		}
	}
}
</script>

<style scoped></style>
