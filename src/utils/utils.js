import { createSong } from '@/model/song'
import dayjs from 'dayjs'

// 处理音乐列表
export const handlePlaylist = songs => {
    return songs.map(item => {
        return createSong(item)
    })
}

export const getStorage = (k) => window.localStorage.getItem(k)

export const setStorage = (k,v) => window.localStorage.setItem(k,v)

export const removeStorage = (k) => window.localStorage.removeItem(k)

export const clearStorage = ()=> window.localStorage.clear()