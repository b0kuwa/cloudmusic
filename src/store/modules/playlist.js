import { reqHotPlayList, reqQualitySongList, reqTopPlayList } from '@/api'

const state = {
	qualitySongList: [],
	hotPlayList: [],
	topPlayList: [],
	total: 0
}

const mutations = {
	RECEIVE_QUALITYSONGLIST(state, qualitySongList) {
		state.qualitySongList = qualitySongList
	},
	RECEIVE_HOTPLAYLIST(state, hotPlayList) {
		state.hotPlayList = hotPlayList
	},
	RECEIVE_TOPPLAYLIST(state, {topPlayList, total}) {
		state.topPlayList = topPlayList
		state.total = total
	}
}

const actions = {
	// 获取精品歌单
	async getQualitySongList({ commit }) {
		const res = await reqQualitySongList()
		if (res.code === 200) {
			const qualitySongList = res.playlists
			commit('RECEIVE_QUALITYSONGLIST', qualitySongList)
		}
	},

	// 获取热门歌单分类
	async getHotPlayList({ commit }) {
		const res = await reqHotPlayList()
		if (res.code === 200) {
			const hotPlayList = res.tags
			commit('RECEIVE_HOTPLAYLIST', hotPlayList)
		}
	},

	// 获取网友精选歌单
	async getTopPlayList({ commit }) {
		const res = await reqTopPlayList()
		if (res.code === 200) {
			const total = res.total
			const topPlayList = res.playlists
			commit('RECEIVE_TOPPLAYLIST', {
				topPlayList, total
			})
		}
	}
}

const getters = {}

export default {
	state,
	mutations,
	actions,
	getters
}
