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
