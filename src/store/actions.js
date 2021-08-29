import { createSong, createSongList } from '@/model/song'

// 设置播放列表
export const setPlaylist = async ({ commit }, playlist) => {
    playlist = createSongList(playlist)
    commit('SET_PLAYLIST', playlist)
    commit('SET_PLAYING_STATUS', true)
    commit('SET_CURRENT_INDEX', 0)
}

//播放下一首
export const setPlayNext = ({ commit, state }) => {
    let index = state.currentIndex
    index++
    if (index > state.playlist.length - 1) {
        index = 0
    }
    commit('SET_CURRENT_INDEX', index)
    commit('SET_PLAYING_STATUS', true)
}

// 播放上一首
export const setPlayPrev = ({ commit, state }) => {
    let index = state.currentIndex
    index--
    if (index < 0) {
        index = state.playlist.length - 1
    }
    commit('SET_CURRENT_INDEX', index)
    commit('SET_PLAYING_STATUS', true)
}

// 暂停播放
export const setPlayPause = ({ commit }) => {
    commit('SET_PLAYING_STATUS', false)
}

// 选中单曲播放
export const setPlayOne = ({ commit, state, getters }, newSong) => {
    const index = state.playlist.findIndex(item => item.id === newSong.id)
    if (index === -1) {
        // newSong = createSong(newSong)
        commit('SET_PLAY_ONE', newSong)
    } else {
        if (newSong.id !== getters.currentPlay.id) {
            commit('SET_CURRENT_INDEX', index)
        }
    }
}

// 保存用户信息
export const saveUserInfo = ({ commit }, userInfo) => {
    commit('SAVE_USER_INFO', userInfo)
}
