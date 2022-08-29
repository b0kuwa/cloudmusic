<!--
 * @Author: cully fung
 * @Date: 2021-08-24 14:29:20
 * @LastEditTime: 2022-08-29 23:41:31
 * @LastEditors: cully fung
 * @Description:
-->
<template>
	<div>
		<top-bar>
			<template v-slot>
				<a href="#" @click.prevent class="text-white font-medium">独家放送</a>
			</template>
		</top-bar>
		<div class="content grid grid-cols-4 gap-4" v-infinite-scroll="load">
			<router-link
				:to="{ name: 'videoDetail', query: { mvid: item.id } }"
				v-for="item in privateContentList"
				:key="item.id || item.time"
			>
				<private-content-item
					:src="item.picUrl"
					:title="item.name"
				></private-content-item>
			</router-link>
			<p v-if="loading" class="text-center">正在加载中。。。</p>
			<p v-if="!more" class="text-center">已经加载完毕了</p>
		</div>
	</div>
</template>

<script>
import { getPersonalizedPrivateContentList } from '@/api'
import TopBar from '@/components/nav-header'
import PrivateContentItem from './private-content-item'
export default {
	components: {
		TopBar,
		PrivateContentItem
	},
	data() {
		return {
			// 独家内容列表
			privateContentList: [],
			// 查询参数
			query: {
				limit: 60, // limit 返回数量 , 默认为 60
				offset: 0 // 偏移数量，用于分页 , 如 :( 页数 -1)*60, 其中 60 为 limit 的值 , 默认为 0
			},
			// 当前第几页
			currentPage: 1,
			// 是否还有数据未加载
			more: true,
			// 是否正在加载
			loading: false
		}
	},
	created() {
		this.getPersonalizedPrivateContentList()
	},
	methods: {
		async getPersonalizedPrivateContentList() {
			this.loading = true
			this.query.offset = (this.currentPage - 1) * this.query.limit
			const res = await getPersonalizedPrivateContentList(this.query)
			if (res.code !== 200) {
				return this.$message.error('获取独家放送失败！')
			}
			this.privateContentList = [...this.privateContentList, ...res.result]
			this.more = res.more
			this.loading = false
		},
		load() {
			this.currentPage++
			this.getPersonalizedPrivateContentList()
		}
	}
}
</script>

<style scoped>
.content {
	max-width: 1050px;
	@apply mx-auto pb-2;
}
</style>
