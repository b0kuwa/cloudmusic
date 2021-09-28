<template>
	<el-carousel :interval="4000" type="card" indicator-position="outside" height="200px">
		<el-carousel-item v-for="(item, index) in banners" :key="index">
			<el-image :src="item[attr]" fit="cover" class="rounded-md"></el-image>
		</el-carousel-item>
	</el-carousel>
</template>

<script>
export default {
	props: {
		banners: {
			type: Array,
			required: true
		},
		attr: {
			type: String,
			required: true
		}
	}
}
</script>