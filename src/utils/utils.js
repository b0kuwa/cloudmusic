/*
 * @Author: cully fung
 * @Date: 2021-08-25 22:02:42
 * @LastEditTime: 2022-08-28 23:37:32
 * @LastEditors: cully fung
 * @Description:
 */
import { createSong } from '@/model/song'

// 处理音乐列表
export const handlePlaylist = songs => {
	return songs.map(item => {
		return createSong(item)
	})
}

export const getStorage = k => window.localStorage.getItem(k)

export const setStorage = (k, v) => window.localStorage.setItem(k, v)

export const removeStorage = k => window.localStorage.removeItem(k)

export const clearStorage = () => window.localStorage.clear()
