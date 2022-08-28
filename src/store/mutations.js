/*
 * @Author: cully fung
 * @Date: 2021-08-25 18:32:54
 * @LastEditTime: 2022-08-29 00:00:11
 * @LastEditors: cully fung
 * @Description:
 */
// 设置播放列表
export const SET_PLAYLIST = (state, playlist) => {
	state.playlist = playlist
}

// 设置播放器播放状态
export const SET_PLAYING_STATUS = (state, status) => {
	state.isPlaying = status
}

// 选中单曲播放
export const SET_PLAY_ONE = (state, newSong) => {
	state.playlist = [...state.playlist, newSong]
	state.currentIndex = state.playlist.length - 1
}

// 清空播放列表
export const SET_CLEAR_PLAYLIST = state => {
	state.playlist = []
	state.currentIndex = -1
	state.isPlaying = false
}

// 设置当前播放索引
export const SET_CURRENT_INDEX = (state, index) => {
	state.currentIndex = index
}

// 保存用户信息
export const SAVE_USER_INFO = (state, userInfo) => {
	state.userInfo = userInfo
}

// 设置登录状态
export const SET_LOGIN_STATUS = (state, flag) => {
	state.loginStatus = flag
}
