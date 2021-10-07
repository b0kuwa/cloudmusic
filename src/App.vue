<template>
	<el-container id="app" class="bg-white">
		<el-header>
			<nav-header :list="list"></nav-header>
		</el-header>
		<el-container style="height: calc(100vh - 110px);overflow: hidden">
			<el-aside width="200px">
				<Aside/>
			</el-aside>
			<el-main>
				<Main/>
			</el-main>
		</el-container>
		<el-footer>
			<Footer/>
		</el-footer>
	</el-container>
</template>

<script>
import Aside from '@/layout/Aside'
import Main from '@/layout/Main'
import Footer from '@/layout/Footer'

export default {
	name: 'App',
	components: {
		Aside,
		Main,
		Footer
	},
	data() {
		return {
			list: Object.freeze([
				{
					label: '个性推荐',
					to: {
						path:'/discovery/individuation'
					}
				},
				{
					label: '歌单',
					to: { path: '/discovery/playlist' }
				},
				{
					label: '主播电台',
					to: { path: '/discovery/dj' }
				},
				{
					label: '排行榜',
					to: { path: '/discovery/rank' }
				},
				{
					label: '最新音乐',
					to: { path: '/discovery/newsong' }
				}
			])
		}
	}
}
</script>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100vw;
	height: 100vh;
	min-width: 1000px;
	min-height: 668px;
	border-radius: 5px;
	overflow: hidden;
}

.el-header {
	padding: 0;
	margin: 0;
	height: 50px !important;
}

.el-aside {
	margin: 0;
	padding: 0;
}

.el-main {
	margin: 0;
	/*padding: 0;*/
}

.el-footer {
	margin: 0;
	padding: 0;
}

.volume-popover {
	width: 30px;
}
</style>
