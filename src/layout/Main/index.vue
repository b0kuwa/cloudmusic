<template>
	<main class='flex-1'>
		<keep-alive>
			<router-view class='mx-auto'></router-view>
		</keep-alive>
	</main>
</template>

<script>
export default {}
</script>

<style scoped>
main {
	height: calc(100vh - 60px);
	overflow: auto;
}
</style>