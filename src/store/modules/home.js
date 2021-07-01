import { reqAnchorRadio, reqBanners, reqNewSongs, reqPrivateContent, reqRecommendMV, reqRecommendSongList } from '@/api'

const state = {
	banners: [],
	newsongs: [],
	privateContens: [],
	recommendSongList: [],
	recommendMV: [],
	anchorRadio: []
}

const mutations = {
	RECEIVE_BANNERS(state, banners) {
		state.banners = banners
	},

	RECEIVE_RECOMMENDSONGLIST(state, recommendSongList) {
		state.recommendSongList = recommendSongList
	},

	RECEIVE_PRIVATECONTENTS(state, privateContens) {
		state.privateContens = privateContens
	},

	RECEIVE_NEWSONGS(state, newsongs) {
		state.newsongs = newsongs
	},

	RECEIVE_RECOMMENDMV(state, recommendMV) {
		state.recommendMV = recommendMV
	},

	RECEIVE_ANCHORRADIO(state, anchorRadio) {
		state.anchorRadio = anchorRadio
	}
}

const actions = {
	// 获取轮播图
	async getBanners({ commit }) {
		const result = await reqBanners()
		if (result.code === 200) {
			const banners = result.banners
			commit('RECEIVE_BANNERS', banners)
		}
	},

	// 获取推荐歌单
	async getRecommendSongList({ commit }) {
		const res = await reqRecommendSongList()
		if (res.code === 200) {
			const recommendSongList = res.result
			commit('RECEIVE_RECOMMENDSONGLIST', recommendSongList)
		}
	},

	// 获取独家放送列表
	async getPrivateContent({ commit }) {
		const res = await reqPrivateContent()
		if (res.code === 200) {
			const privateContents = res.result
			commit('RECEIVE_PRIVATECONTENTS', privateContents)
		}
	},

	// 获取最新音乐
	async getNewSongs({ commit }) {
		const res = await reqNewSongs()
		if (res.code === 200) {
			const newsongs = res.result
			commit('RECEIVE_NEWSONGS', newsongs)
		}
	},

	// 获取mv
	async getRecommendMV({ commit }) {
		const res = await reqRecommendMV()
		if (res.code === 200) {
			const recommendMV = res.result
			commit('RECEIVE_RECOMMENDMV', recommendMV)
		}
	},

	// 获取主播电台
	async getAnchorRadio({ commit }) {
		const res = await reqAnchorRadio()
		if (res.code === 200) {
			const anchorRadio = res.result
			commit('RECEIVE_ANCHORRADIO', anchorRadio)
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
