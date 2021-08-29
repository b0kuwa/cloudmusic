import { createSong } from '@/model/song'
import dayjs from 'dayjs'

// 处理音乐列表
export const handlePlaylist = songs => {
    return songs.map(item => {
        return createSong(item)
    })
}
