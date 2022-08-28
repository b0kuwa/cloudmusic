/*
 * @Author: cully fung
 * @Date: 2021-08-25 18:33:10
 * @LastEditTime: 2022-08-29 00:00:07
 * @LastEditors: cully fung
 * @Description:
 */
export default {
	// 当前播放歌曲
	currentPlay(state) {
		return state.playlist[state.currentIndex] || {}
	},
	// 歌单歌曲数量
	songCount: state => {
		return state.playlist.length
	},
	// 用户信息
	userInfo: state => {
		return state.userInfo.userId || JSON.parse(window.localStorage.getItem('userInfo'))
	}
}
