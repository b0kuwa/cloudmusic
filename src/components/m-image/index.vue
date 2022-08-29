<!--
 * @Author: cully fung
 * @Date: 2021-10-01 18:28:24
 * @LastEditTime: 2022-08-29 23:19:52
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<el-image :src="src" :fit="fit" :lazy="lazy" class="rounded-md w-full h-full">
		<template slot="placeholder">
			<img src="@/assets/images/default.jpg" class="rounded-md w-full h-full" />
		</template>
		<template slot="error">
			<img src="@/assets/images/default.jpg" class="rounded-md w-full h-full" />
		</template>
	</el-image>
</template>

<script>
export default {
	name: 'MImage',
	props: {
		src: {
			type: String,
			required: true
		},
		fit: {
			type: String,
			default: 'cover'
		},
		lazy: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped></style>
